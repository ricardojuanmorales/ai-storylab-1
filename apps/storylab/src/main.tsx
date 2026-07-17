import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStoryLabUseCases } from "./application/storylab-use-cases";
import { BrowserSessionIdGenerator } from "./adapters/browser/browser-session-id-generator";
import { InMemoryProjectRepository } from "./adapters/memory/in-memory-project-repository";
import { SystemClock } from "./adapters/system/system-clock";
import { App } from "./presentation/App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("APP_ROOT_MISSING");
}

const useCases = createStoryLabUseCases({
  repository: new InMemoryProjectRepository(),
  clock: new SystemClock(),
  ids: new BrowserSessionIdGenerator(),
});

createRoot(rootElement).render(
  <StrictMode>
    <App useCases={useCases} />
  </StrictMode>,
);
