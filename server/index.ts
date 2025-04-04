import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Manejar excepciones no capturadas para evitar que el servidor se detenga
process.on("uncaughtException", (err) => {
  log(`Uncaught Exception: ${err.message}`);
  console.error(err);
});

process.on("unhandledRejection", (reason, promise) => {
  log(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
  console.error(reason);
});

(async () => {
  try {
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      // Loguear el error para depuración
      log(`Error: ${message}`);
      console.error(err);

      res.status(status).json({ message });
      // Eliminar el lanzamiento del error para evitar que el servidor se detenga
      // throw err;
    });

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // ALWAYS serve the app on port 3000
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = 3000;
    server.listen({
      port,
      host: "127.0.0.1",
    }, () => {
      log(`Is serving on port ${port}`);
    });
  } catch (err) {
    log(`Failed to start server: ${err instanceof Error ? err.message : String(err)}`);
    console.error(err);

    // Reintentar después de corregir y guardar cambios
    if ((module as any).hot) {
      (module as any).hot.accept((err: Error) => {
        if (err) {
          log(`Hot module replacement failed: ${err.message}`);
          console.error(err);
        }
      });
      (module as any).hot.dispose(() => {
        log("Disposing current module...");
        process.exit(1);
      });
    } else {
      log("Hot module replacement is not enabled. Exiting...");
      process.exit(1);
    }
  }
})();
