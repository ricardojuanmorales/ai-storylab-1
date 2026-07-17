import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStoryLabUseCases } from "./application/storylab-use-cases";
import { BrowserSessionIdGenerator } from "./adapters/browser/browser-session-id-generator";
import { InMemoryProjectRepository } from "./adapters/memory/in-memory-project-repository";
import {
  LocalStorageProjectRepository,
  type StorageLike,
} from "./adapters/storage/local-storage-project-repository";
import { SystemClock } from "./adapters/system/system-clock";
import { App } from "./presentation/App";
import type { PersistenceMode } from "./presentation/persistence-mode";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("APP_ROOT_MISSING");
}

const STORAGE_PROBE_KEY = "ai-storylab:storage-probe";

const resolveBrowserStorage = (): StorageLike | null => {
  try {
    const storage = globalThis.localStorage;
    storage.setItem(STORAGE_PROBE_KEY, "1");
    storage.removeItem(STORAGE_PROBE_KEY);
    return storage;
  } catch {
    return null;
  }
};

const storage = resolveBrowserStorage();
const persistenceMode: PersistenceMode = storage ? "local" : "memory";
const repository = storage
  ? new LocalStorageProjectRepository(storage)
  : new InMemoryProjectRepository();

const useCases = createStoryLabUseCases({
  repository,
  clock: new SystemClock(),
  ids: new BrowserSessionIdGenerator(),
});

createRoot(rootElement).render(
  <StrictMode>
    <App
      useCases={useCases}
      persistenceMode={persistenceMode}
    />
  </StrictMode>,
);
