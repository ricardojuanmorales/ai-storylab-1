import { createHash } from "node:crypto";
import {
  createPortfolioExportService,
  createPortfolioImportService,
  createPortfolioImportStagingService,
  createStoryLabUseCases,
} from "../application";
import { createBrowserUntrustedLocalFile } from "../adapters/browser/browser-untrusted-local-file";
import { InMemoryProjectRepository } from "../adapters/memory/in-memory-project-repository";
import type { CreativeProject } from "../domain/model";
import { ok } from "../domain/result";
import type { ISODateTime } from "../domain/types";
import type {
  Clock,
  DownloadableFile,
  IdGenerator,
  LocalFileDownloader,
} from "../ports";
import type { PortfolioTransferRuntime } from "../presentation/portfolio-transfer-runtime";

class SequentialIdGenerator implements IdGenerator {
  #value = 0;

  next(namespace: string): string {
    this.#value += 1;
    return `${namespace}:synthetic-${String(this.#value).padStart(3, "0")}`;
  }
}

class SequentialClock implements Clock {
  #value = Date.parse("2026-07-16T22:00:00.000Z");

  now(): ISODateTime {
    const current = new Date(
      this.#value,
    ).toISOString() as ISODateTime;
    this.#value += 1_000;
    return current;
  }
}

class RecordingFileDownloader
  implements LocalFileDownloader
{
  readonly files: DownloadableFile[] = [];

  async download(file: DownloadableFile) {
    this.files.push(structuredClone(file));
    return ok(undefined);
  }
}

const nodeHasher = {
  digestHex: async (value: string) =>
    ok(
      createHash("sha256")
        .update(value, "utf8")
        .digest("hex"),
    ),
};

export const createTestStoryLabRuntime = (
  initial: readonly CreativeProject[] = [],
) => {
  const repository =
    new InMemoryProjectRepository(initial);
  const clock = new SequentialClock();
  const ids = new SequentialIdGenerator();
  const downloader = new RecordingFileDownloader();

  const useCases = createStoryLabUseCases({
    repository,
    clock,
    ids,
  });

  const exportService =
    createPortfolioExportService({
      repository,
      clock,
      hasher: nodeHasher,
      downloader,
    });
  const importStaging =
    createPortfolioImportStagingService({
      ids,
      hasher: nodeHasher,
    });
  const importService =
    createPortfolioImportService({
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

  return {
    repository,
    useCases,
    portfolioTransfer,
    downloads: downloader.files,
  };
};

export const createTestStoryLabUseCases = () =>
  createTestStoryLabRuntime().useCases;
