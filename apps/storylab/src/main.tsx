import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createPortfolioExportService,
  createPortfolioImportService,
  createPortfolioImportStagingService,
  createStoryLabUseCases,
} from "./application";
import { createBrowserFileDownloader } from "./adapters/browser/browser-file-download";
import { BrowserSessionIdGenerator } from "./adapters/browser/browser-session-id-generator";
import { createBrowserUntrustedLocalFile } from "./adapters/browser/browser-untrusted-local-file";
import { createWebCryptoSha256Hasher } from "./adapters/crypto/web-crypto-sha256";
import { InMemoryProjectRepository } from "./adapters/memory/in-memory-project-repository";
import {
  LocalStorageProjectRepository,
  type StorageLike,
} from "./adapters/storage/local-storage-project-repository";
import { inspectLegacyMvpContinuity } from "./adapters/storage/mvp-v0-3-continuity";
import { SystemClock } from "./adapters/system/system-clock";
import { App } from "./presentation/App";
import type { PersistenceMode } from "./presentation/persistence-mode";
import type { PortfolioTransferRuntime } from "./presentation/portfolio-transfer-runtime";

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
const legacyContinuity = inspectLegacyMvpContinuity(storage);
const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const persistenceMode: PersistenceMode = storage
  ? "local"
  : "memory";
const repository = storage
  ? new LocalStorageProjectRepository(storage)
  : new InMemoryProjectRepository();
const clock = new SystemClock();
const ids = new BrowserSessionIdGenerator();
const hasher = createWebCryptoSha256Hasher();

const useCases = createStoryLabUseCases({
  repository,
  clock,
  ids,
});

const exportService = createPortfolioExportService({
  repository,
  clock,
  hasher,
  downloader: createBrowserFileDownloader(),
});
const importStaging =
  createPortfolioImportStagingService({
    ids,
    hasher,
  });
const importService = createPortfolioImportService({
  staging: importStaging,
  repository,
  ids,
});

const portfolioTransfer: PortfolioTransferRuntime = {
  exportService,
  importStaging,
  importService,
  toUntrustedLocalFile:
    createBrowserUntrustedLocalFile,
};

createRoot(rootElement).render(
  <StrictMode>
    <App
      useCases={useCases}
      portfolioTransfer={portfolioTransfer}
      persistenceMode={persistenceMode}
      legacyContinuity={legacyContinuity}
      legacyAppUrl={`${baseUrl}legacy/v0.3.0/`}
      legacyBridgeUrl={`${baseUrl}legacy/bridge/`}
    />
  </StrictMode>,
);
