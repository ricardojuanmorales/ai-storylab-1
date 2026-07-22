import { describe, expect, it, vi } from "vitest";
import {
  HUMAN_IMPORT_CONFIRMATION,
  createPortfolioImportService,
} from "../application";
import { InMemoryProjectRepository } from "../adapters/memory/in-memory-project-repository";
import type { CreativeProject } from "../domain/model";
import { err, ok } from "../domain/result";
import type {
  ProjectId,
} from "../domain/types";
import type { ProjectRepository } from "../ports";
import {
  CURRENT_SCHEMA_VERSION,
  PREVIOUS_SCHEMA_VERSION,
} from "../schemas/schema-version";
import {
  fileFromValue,
  portfolioFixture,
  portfolioPackageFor,
  stagingServiceWith,
} from "./portfolio-import-test-helpers";

const stagePackage = async (
  version:
    | typeof CURRENT_SCHEMA_VERSION
    | typeof PREVIOUS_SCHEMA_VERSION =
      CURRENT_SCHEMA_VERSION,
) => {
  const staging = stagingServiceWith({
    next: () => "stage:synthetic-001",
  });
  const staged = await staging.stage(
    fileFromValue(portfolioPackageFor(version)),
  );
  if (!staged.ok) throw new Error(staged.error.code);
  return { staging, stagingId: staged.value.stagingId };
};

describe("H08-5.4 confirmed portfolio import", () => {
  it("requires explicit human confirmation and performs zero saves otherwise", async () => {
    const { staging, stagingId } =
      await stagePackage();
    const repository = new InMemoryProjectRepository();
    const save = vi.spyOn(repository, "save");
    const service = createPortfolioImportService({
      staging,
      repository,
      ids: {
        next: () => "project-local-copy-001",
      },
    });

    expect(
      await service.confirm({
        stagingId,
        confirmation: "not_confirmed",
      }),
    ).toMatchObject({
      ok: false,
      error: {
        code: "IMPORT_CONFIRMATION_REQUIRED",
      },
    });
    expect(save).not.toHaveBeenCalled();
    expect(staging.inspect(stagingId)).toMatchObject({
      ok: true,
    });
  });

  it("creates an alpha.2 copy with one new project id and one save", async () => {
    const { staging, stagingId } =
      await stagePackage();
    const repository = new InMemoryProjectRepository();
    const save = vi.spyOn(repository, "save");
    const load = vi.spyOn(repository, "load");
    const service = createPortfolioImportService({
      staging,
      repository,
      ids: {
        next: () => "project-local-copy-001",
      },
    });

    const result = await service.confirm({
      stagingId,
      confirmation: HUMAN_IMPORT_CONFIRMATION,
    });

    expect(result).toMatchObject({
      ok: true,
      value: {
        projectId: "project-local-copy-001",
        sourceProjectSchemaVersion:
          CURRENT_SCHEMA_VERSION,
        storedProjectSchemaVersion:
          CURRENT_SCHEMA_VERSION,
        migrationApplied: false,
        semanticEquivalence: {
          equivalent: true,
        },
      },
    });
    expect(save).toHaveBeenCalledTimes(1);
    expect(load).toHaveBeenCalledTimes(1);

    const recovered = await repository.load(
      "project-local-copy-001" as ProjectId,
    );
    expect(recovered).toMatchObject({
      ok: true,
      value: {
        id: "project-local-copy-001",
        title: portfolioFixture.project.title,
      },
    });
    if (!recovered.ok || recovered.value === null) return;

    expect(recovered.value.id).not.toBe(
      portfolioFixture.project.id,
    );
    expect(
      recovered.value.evidence.map((item) => item.id),
    ).toEqual(
      portfolioFixture.project.evidence.map(
        (item) => item.id,
      ),
    );
    expect(
      recovered.value.reflections.map((item) => item.id),
    ).toEqual(
      portfolioFixture.project.reflections.map(
        (item) => item.id,
      ),
    );
    expect(
      recovered.value.decisions.map((item) => item.id),
    ).toEqual(
      portfolioFixture.project.decisions.map(
        (item) => item.id,
      ),
    );
    expect(
      recovered.value.portfolio.items.map(
        (item) => item.id,
      ),
    ).toEqual(
      portfolioFixture.project.portfolio.items.map(
        (item) => item.id,
      ),
    );

    expect(staging.inspect(stagingId)).toMatchObject({
      ok: false,
      error: { code: "IMPORT_STAGE_NOT_FOUND" },
    });
  });

  it("migrates alpha.1, preserves internal identifiers and stores alpha.2", async () => {
    const { staging, stagingId } =
      await stagePackage(PREVIOUS_SCHEMA_VERSION);
    const repository = new InMemoryProjectRepository();
    const service = createPortfolioImportService({
      staging,
      repository,
      ids: {
        next: () => "project-local-alpha1-copy",
      },
    });

    const result = await service.confirm({
      stagingId,
      confirmation: HUMAN_IMPORT_CONFIRMATION,
    });

    expect(result).toMatchObject({
      ok: true,
      value: {
        sourceProjectSchemaVersion:
          PREVIOUS_SCHEMA_VERSION,
        storedProjectSchemaVersion:
          CURRENT_SCHEMA_VERSION,
        migrationApplied: true,
      },
    });

    const recovered = await repository.load(
      "project-local-alpha1-copy" as ProjectId,
    );
    expect(recovered).toMatchObject({
      ok: true,
      value: {
        schemaVersion: CURRENT_SCHEMA_VERSION,
        evidence: portfolioFixture.project.evidence,
        reflections: portfolioFixture.project.reflections,
        decisions: portfolioFixture.project.decisions,
        portfolio: portfolioFixture.project.portfolio,
      },
    });
  });

  it("maps save failure safely and keeps the stage available", async () => {
    const { staging, stagingId } =
      await stagePackage();
    const repository: ProjectRepository = {
      load: async () => ok(null),
      save: async () =>
        err({
          code: "PERSISTENCE_UNAVAILABLE",
          path: "storage",
          safeMessage: "synthetic",
        }),
      remove: async () => ok(undefined),
    };
    const save = vi.spyOn(repository, "save");
    const service = createPortfolioImportService({
      staging,
      repository,
      ids: {
        next: () => "project-local-copy-failed",
      },
    });

    expect(
      await service.confirm({
        stagingId,
        confirmation: HUMAN_IMPORT_CONFIRMATION,
      }),
    ).toMatchObject({
      ok: false,
      error: {
        code: "IMPORT_SAVE_FAILED",
        details: {
          sourceCode: "PERSISTENCE_UNAVAILABLE",
        },
      },
    });
    expect(save).toHaveBeenCalledTimes(1);
    expect(staging.inspect(stagingId)).toMatchObject({
      ok: true,
    });
  });

  it("returns a typed difference when recovered content changes", async () => {
    const { staging, stagingId } =
      await stagePackage();
    let saved: CreativeProject | null = null;
    const repository: ProjectRepository = {
      save: async (project) => {
        saved = structuredClone(project);
        return ok(undefined);
      },
      load: async () =>
        ok(
          saved === null
            ? null
            : {
                ...saved,
                title: "Título alterado por repositorio",
              },
        ),
      remove: async () => ok(undefined),
    };
    const service = createPortfolioImportService({
      staging,
      repository,
      ids: {
        next: () => "project-local-copy-mismatch",
      },
    });

    expect(
      await service.confirm({
        stagingId,
        confirmation: HUMAN_IMPORT_CONFIRMATION,
      }),
    ).toMatchObject({
      ok: false,
      error: {
        code: "ROUNDTRIP_NOT_EQUIVALENT",
        details: {
          firstDifferencePath: "$.title",
          reason: "VALUE_MISMATCH",
        },
      },
    });
    expect(staging.inspect(stagingId)).toMatchObject({
      ok: true,
    });
  });

  it("rejects an id generator that repeats the source project id", async () => {
    const { staging, stagingId } =
      await stagePackage();
    const repository = new InMemoryProjectRepository();
    const save = vi.spyOn(repository, "save");
    const service = createPortfolioImportService({
      staging,
      repository,
      ids: {
        next: () =>
          portfolioFixture.project.id as string,
      },
    });

    expect(
      await service.confirm({
        stagingId,
        confirmation: HUMAN_IMPORT_CONFIRMATION,
      }),
    ).toMatchObject({
      ok: false,
      error: {
        code: "DUPLICATE_IDENTIFIER",
      },
    });
    expect(save).not.toHaveBeenCalled();
  });
});
