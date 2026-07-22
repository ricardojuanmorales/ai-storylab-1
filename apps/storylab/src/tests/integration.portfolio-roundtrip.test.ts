import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  HUMAN_IMPORT_CONFIRMATION,
  comparePortfolioProjectsSemantically,
  createPortfolioImportService,
} from "../application";
import {
  LocalStorageProjectRepository,
  type StorageLike,
} from "../adapters/storage/local-storage-project-repository";
import type { ISODateTime } from "../domain/types";
import {
  fileFromValue,
  portfolioFixture,
  portfolioPackageFor,
  stagingServiceWith,
} from "./portfolio-import-test-helpers";

class SharedStorage implements StorageLike {
  readonly values = new Map<string, string>();

  get length(): number {
    return this.values.size;
  }

  key(index: number): string | null {
    return Array.from(this.values.keys())[index] ?? null;
  }

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    this.values.delete(key);
  }
}

const storageIntegrity = async (
  value: string,
): Promise<string> =>
  createHash("sha256").update(value).digest("hex");

const fixedNow = (): ISODateTime =>
  "2026-07-22T16:00:00.000Z" as ISODateTime;

const repositoryFor = (storage: SharedStorage) =>
  new LocalStorageProjectRepository(storage, {
    integrity: storageIntegrity,
    now: fixedNow,
  });

describe("H08-5.4 local semantic roundtrip", () => {
  it("imports, remounts and recovers an equivalent local copy", async () => {
    const storage = new SharedStorage();
    const staging = stagingServiceWith({
      next: () => "stage:roundtrip-001",
    });
    const staged = await staging.stage(
      fileFromValue(portfolioPackageFor()),
    );
    if (!staged.ok) throw new Error(staged.error.code);

    const firstMount = repositoryFor(storage);
    const importer = createPortfolioImportService({
      staging,
      repository: firstMount,
      ids: {
        next: () => "project-roundtrip-copy-001",
      },
    });

    const imported = await importer.confirm({
      stagingId: staged.value.stagingId,
      confirmation: HUMAN_IMPORT_CONFIRMATION,
    });
    expect(imported).toMatchObject({
      ok: true,
      value: {
        projectId: "project-roundtrip-copy-001",
        semanticEquivalence: {
          equivalent: true,
        },
      },
    });
    if (!imported.ok) return;

    const remounted = repositoryFor(storage);
    const recovered = await remounted.load(
      imported.value.projectId,
    );
    expect(recovered).toMatchObject({
      ok: true,
      value: {
        id: "project-roundtrip-copy-001",
        title: portfolioFixture.project.title,
      },
    });
    if (!recovered.ok || recovered.value === null) return;

    expect(
      comparePortfolioProjectsSemantically(
        portfolioFixture.project,
        recovered.value,
      ),
    ).toEqual({ equivalent: true });
  });
});
