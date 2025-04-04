import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Chart, registerables } from 'chart.js';
import { Buffer } from "buffer";
import process from "process";

// Register all Chart.js components
Chart.register(...registerables);

if (typeof globalThis === "undefined") {
  (window as any).globalThis = window;
}

(window as any).Buffer = Buffer;
(window as any).process = process;

createRoot(document.getElementById("root")!).render(<App />);
