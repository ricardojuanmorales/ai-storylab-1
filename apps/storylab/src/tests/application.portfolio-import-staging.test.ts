import { describe, expect, it, vi } from "vitest";
import {
  createPortfolioImportStagingService,
} from "../application";
import {
  CURRENT_SCHEMA_VERSION,
  PREVIOUS_SCHEMA_VERSION,
} from "../schemas/schema-version";
import {
  fileFromValue,
  nodeHasher,
  portfolioFixture,
  portfolioPackageFor,
} from "./portfolio-import-test-helpers";

const createContext = () => {
  const next = vi.fn(
    () => "portfolio-import-stage:synthetic-001",
  );
  const service =
    createPortfolioImportStagingService({
      ids: { next },
      hasher: nodeHasher,
    });
  return { next, service };
};

describe("H08-5.4 compatible immutable import staging", () => {
  it("stages alpha.2 without migration", async () => {
    const { next, service } = createContext();
    const result = await service.stage(
      fileFromValue(portfolioPackageFor()),
    );

    expect(result).toMatchObject({
      ok: true,
      value: {
        stagingId:
          "portfolio-import-stage:synthetic-001",
        fileName: "synthetic-import.storylab.json",
        sourceProjectSchemaVersion:
          CURRENT_SCHEMA_VERSION,
        candidateProjectSchemaVersion:
          CURRENT_SCHEMA_VERSION,
        migrationApplied: false,
        projectTitle: portfolioFixture.project.title,
        portfolioItemCount: 1,
        reflectionCount: 1,
      },
    });
    expect(next).toHaveBeenCalledWith(
      "portfolio-import-stage",
    );
  });

  it("verifies alpha.1 before migrating it into the staged candidate", async () => {
    const { service } = createContext();
    const result = await service.stage(
      fileFromValue(
        portfolioPackageFor(PREVIOUS_SCHEMA_VERSION),
      ),
    );

    expect(result).toMatchObject({
      ok: true,
      value: {
        sourceProjectSchemaVersion:
          PREVIOUS_SCHEMA_VERSION,
        candidateProjectSchemaVersion:
          CURRENT_SCHEMA_VERSION,
        migrationApplied: true,
      },
    });
    if (!result.ok) return;

    const staged = service.inspect(
      result.value.stagingId,
    );
    expect(staged).toMatchObject({
      ok: true,
      value: {
        packageValue: {
          payload: {
            projectSchemaVersion:
              PREVIOUS_SCHEMA_VERSION,
            project: {
              schemaVersion:
                PREVIOUS_SCHEMA_VERSION,
            },
          },
        },
        candidateProject: {
          schemaVersion: CURRENT_SCHEMA_VERSION,
          id: portfolioFixture.project.id,
        },
      },
    });
  });

  it("keeps source package and migrated candidate deeply immutable", async () => {
    const { service } = createContext();
    const result = await service.stage(
      fileFromValue(portfolioPackageFor()),
    );
    if (!result.ok) throw new Error(result.error.code);

    const inspected = service.inspect(
      result.value.stagingId,
    );
    if (!inspected.ok) {
      throw new Error(inspected.error.code);
    }

    expect(Object.isFrozen(inspected.value)).toBe(true);
    expect(
      Object.isFrozen(inspected.value.packageValue),
    ).toBe(true);
    expect(
      Object.isFrozen(inspected.value.candidateProject),
    ).toBe(true);
    expect(
      Object.isFrozen(
        inspected.value.candidateProject.portfolio.items,
      ),
    ).toBe(true);

    const mutable =
      inspected.value.candidateProject as unknown as {
        title: string;
      };
    expect(() => {
      mutable.title = "Alterado";
    }).toThrow(TypeError);

    expect(
      service.inspect(result.value.stagingId),
    ).toMatchObject({
      ok: true,
      value: {
        projectTitle: portfolioFixture.project.title,
        candidateProject: {
          title: portfolioFixture.project.title,
        },
      },
    });
  });

  it("rejects future and legacy versions before creating a stage", async () => {
    const { next, service } = createContext();
    const current = portfolioPackageFor();

    const future = {
      ...current,
      payload: {
        ...current.payload,
        projectSchemaVersion: "0.9.0",
        project: {
          ...current.payload.project,
          schemaVersion: "0.9.0",
        },
      },
    };
    expect(
      await service.stage(fileFromValue(future)),
    ).toMatchObject({
      ok: false,
      error: {
        code: "SCHEMA_VERSION_UNSUPPORTED",
      },
    });

    const legacy = {
      ...current,
      payload: {
        ...current.payload,
        projectSchemaVersion: "legacy_v0.3",
        project: {
          ...current.payload.project,
          source: "legacy_v0_3",
          schemaVersion: "legacy_v0.3",
        },
      },
    };
    expect(
      await service.stage(fileFromValue(legacy)),
    ).toMatchObject({
      ok: false,
      error: {
        code: "LEGACY_MIGRATION_REQUIRED",
      },
    });

    expect(next).not.toHaveBeenCalled();
  });

  it("rejects unexpected fields before integrity work", async () => {
    const { next, service } = createContext();
    const candidate = {
      ...portfolioPackageFor(),
      automaticPublication: true,
    };

    expect(
      await service.stage(fileFromValue(candidate)),
    ).toMatchObject({
      ok: false,
      error: { code: "IMPORT_PACKAGE_INVALID" },
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("rejects a modified payload with checksum mismatch", async () => {
    const { next, service } = createContext();
    const candidate = portfolioPackageFor();
    const modified = {
      ...candidate,
      payload: {
        ...candidate.payload,
        project: {
          ...candidate.payload.project,
          title: "Título alterado después del digest",
        },
      },
    };

    expect(
      await service.stage(fileFromValue(modified)),
    ).toMatchObject({
      ok: false,
      error: {
        code: "IMPORT_CHECKSUM_MISMATCH",
      },
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("rejects private reflections", async () => {
    const { service } = createContext();
    const candidate = portfolioPackageFor();
    const reflection =
      candidate.payload.project.reflections[0];
    if (reflection === undefined) {
      throw new Error("SYNTHETIC_REFLECTION_MISSING");
    }

    const invalid = {
      ...candidate,
      payload: {
        ...candidate.payload,
        project: {
          ...candidate.payload.project,
          reflections: [
            ...candidate.payload.project.reflections,
            {
              ...reflection,
              id: "reflection-private-import",
              privacyClass: "private",
              selectedForExport: false,
            },
          ],
        },
      },
    };

    expect(
      await service.stage(fileFromValue(invalid)),
    ).toMatchObject({
      ok: false,
      error: { code: "IMPORT_PACKAGE_INVALID" },
    });
  });

  it("discards without persistence", async () => {
    const { service } = createContext();
    const result = await service.stage(
      fileFromValue(portfolioPackageFor()),
    );
    if (!result.ok) throw new Error(result.error.code);

    service.discard(result.value.stagingId);

    expect(
      service.inspect(result.value.stagingId),
    ).toMatchObject({
      ok: false,
      error: { code: "IMPORT_STAGE_NOT_FOUND" },
    });
  });
});
