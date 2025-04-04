import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
createRoot(rootElement).render(<App />);
