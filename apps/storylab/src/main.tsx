import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./presentation/App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("APP_ROOT_MISSING");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
