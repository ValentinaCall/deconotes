import { defineConfig } from "vite";
import reactSWC from "@vitejs/plugin-react-swc";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import rollupNodePolyFill from "rollup-plugin-polyfill-node"; // Importar polyfill para Rollup

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/deconotes/' : '/',
  plugins: [
    reactSWC({
      tsDecorators: true,
      plugins: [
        ['@swc/plugin-emotion', {}]
      ]
    }),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
    include: ["crypto-browserify", "buffer"], // Incluir buffer
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      buffer: "buffer",
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      plugins: [rollupNodePolyFill({})], // Agregar polyfill para Rollup
    },
    copyPublicDir: true,
    assetsDir: 'assets'
  },
  publicDir: path.resolve(import.meta.dirname, "client/public")
});
