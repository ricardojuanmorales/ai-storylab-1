import { createHash } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import {
  canonicalizeJson,
  createPortfolioImportStagingService,
} from "../application";
import type { ExportPackage } from "../domain/model";
import {
  PORTFOLIO_PACKAGE_CANONICALIZATION,
  PORTFOLIO_PACKAGE_INTEGRITY_ALGORITHM,
  PORTFOLIO_PACKAGE_INTEGRITY_SCOPE,
  PORTFOLIO_PACKAGE_TYPE,
  PORTFOLIO_PACKAGE_VERSION,
} from "../domain/portfolio-package";
import { ok } from "../domain/result";
import type { UntrustedLocalFile } from "../ports";
import {
  CURRENT_SCHEMA_VERSION,
  PREVIOUS_SCHEMA_VERSION,
} from "../schemas/schema-version";
import type {
  KnownPortfolioPackage,
  KnownPortfolioProject,
} from "../schemas/portfolio-package-validator";
import { clone, loadJson } from "./helpers";

const fixture = loadJson<ExportPackage>(
  "../fixtures/valid/export-package.json",
);

const hasher = {
  digestHex: async (value: string) =>
    ok(
      createHash("sha256")
        .update(value, "utf8")
        .digest("hex"),
    ),
};

const packageFor = (
  version:
    | typeof CURRENT_SCHEMA_VERSION
    | typeof PREVIOUS_SCHEMA_VERSION =
      CURRENT_SCHEMA_VERSION,
): KnownPortfolioPackage => {
  const project = {
    ...clone(fixture.project),
    schemaVersion: version,
  } as KnownPortfolioProject;
  const payload = {
    projectSchemaVersion: version,
    project,
  };
  const canonical = canonicalizeJson(payload);
  if (!canonical.ok) {
    throw new Error(canonical.error.code);
  }

  return {
    packageType: PORTFOLIO_PACKAGE_TYPE,
    packageVersion: PORTFOLIO_PACKAGE_VERSION,
    exportedAt: fixture.exportedAt,
    payload,
    integrity: {
      algorithm:
        PORTFOLIO_PACKAGE_INTEGRITY_ALGORITHM,
      canonicalization:
        PORTFOLIO_PACKAGE_CANONICALIZATION,
      scope: PORTFOLIO_PACKAGE_INTEGRITY_SCOPE,
      digest: createHash("sha256")
        .update(canonical.value, "utf8")
        .digest("hex"),
    },
  };
};

const fileFromValue = (
  value: unknown,
  name = "../synthetic-import.storylab.json",
): UntrustedLocalFile => {
  const bytes = new TextEncoder().encode(
    JSON.stringify(value),
  );
  return {
    name,
    size: bytes.byteLength,
    mediaType: "application/json",
    readBytes: async () => bytes,
  };
};

const createContext = () => {
  const next = vi.fn(
    () => "portfolio-import-stage:synthetic-001",
  );
  const service =
    createPortfolioImportStagingService({
      ids: { next },
      hasher,
    });
  return { next, service };
};

describe("H08-5.3 immutable untrusted import staging", () => {
  it("stages alpha.2 after schema and checksum validation", async () => {
    const { next, service } = createContext();
    const result = await service.stage(
      fileFromValue(packageFor()),
    );

    expect(result).toMatchObject({
      ok: true,
      value: {
        stagingId:
          "portfolio-import-stage:synthetic-001",
        fileName: "synthetic-import.storylab.json",
        packageType: PORTFOLIO_PACKAGE_TYPE,
        packageVersion: PORTFOLIO_PACKAGE_VERSION,
        sourceProjectSchemaVersion:
          CURRENT_SCHEMA_VERSION,
        projectTitle: fixture.project.title,
        portfolioItemCount: 1,
        reflectionCount: 1,
      },
    });
    expect(next).toHaveBeenCalledWith(
      "portfolio-import-stage",
    );
  });

  it("stages alpha.1 without migrating or persisting", async () => {
    const { service } = createContext();
    const result = await service.stage(
      fileFromValue(
        packageFor(PREVIOUS_SCHEMA_VERSION),
      ),
    );

    expect(result).toMatchObject({
      ok: true,
      value: {
        sourceProjectSchemaVersion:
          PREVIOUS_SCHEMA_VERSION,
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
      },
    });
  });

  it("keeps the staged package deeply immutable", async () => {
    const { service } = createContext();
    const result = await service.stage(
      fileFromValue(packageFor()),
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
      Object.isFrozen(
        inspected.value.packageValue.payload.project,
      ),
    ).toBe(true);
    expect(
      Object.isFrozen(
        inspected.value.packageValue.payload.project
          .portfolio.items,
      ),
    ).toBe(true);

    const mutable =
      inspected.value.packageValue as unknown as {
        payload: {
          project: { title: string };
        };
      };
    expect(() => {
      mutable.payload.project.title = "Alterado";
    }).toThrow(TypeError);

    const readAgain = service.inspect(
      result.value.stagingId,
    );
    expect(readAgain).toMatchObject({
      ok: true,
      value: {
        projectTitle: fixture.project.title,
        packageValue: {
          payload: {
            project: {
              title: fixture.project.title,
            },
          },
        },
      },
    });
  });

  it("rejects unexpected fields before integrity work", async () => {
    const { next, service } = createContext();
    const candidate = {
      ...packageFor(),
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
    const candidate = packageFor();
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

  it("rejects private reflections even when the producer includes them", async () => {
    const { service } = createContext();
    const candidate = packageFor();
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

  it("discards without persistence and makes the stage unavailable", async () => {
    const { service } = createContext();
    const result = await service.stage(
      fileFromValue(packageFor()),
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
