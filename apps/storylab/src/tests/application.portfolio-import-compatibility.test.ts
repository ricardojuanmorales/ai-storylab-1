import { describe, expect, it } from "vitest";
import {
  classifyPortfolioImportCompatibility,
} from "../application";
import {
  CURRENT_SCHEMA_VERSION,
  PREVIOUS_SCHEMA_VERSION,
} from "../schemas/schema-version";
import {
  portfolioPackageFor,
} from "./portfolio-import-test-helpers";

describe("H08-5.4 portfolio compatibility matrix", () => {
  it("accepts alpha.2 without migration", () => {
    expect(
      classifyPortfolioImportCompatibility(
        portfolioPackageFor(),
      ),
    ).toEqual({
      ok: true,
      value: {
        sourceProjectSchemaVersion:
          CURRENT_SCHEMA_VERSION,
        targetProjectSchemaVersion:
          CURRENT_SCHEMA_VERSION,
        migrationRequired: false,
      },
    });
  });

  it("accepts alpha.1 with migration", () => {
    expect(
      classifyPortfolioImportCompatibility(
        portfolioPackageFor(PREVIOUS_SCHEMA_VERSION),
      ),
    ).toEqual({
      ok: true,
      value: {
        sourceProjectSchemaVersion:
          PREVIOUS_SCHEMA_VERSION,
        targetProjectSchemaVersion:
          CURRENT_SCHEMA_VERSION,
        migrationRequired: true,
      },
    });
  });

  it("rejects a future project schema explicitly", () => {
    const candidate = portfolioPackageFor();
    const future = {
      ...candidate,
      payload: {
        ...candidate.payload,
        projectSchemaVersion: "0.9.0",
        project: {
          ...candidate.payload.project,
          schemaVersion: "0.9.0",
        },
      },
    };

    expect(
      classifyPortfolioImportCompatibility(future),
    ).toMatchObject({
      ok: false,
      error: {
        code: "SCHEMA_VERSION_UNSUPPORTED",
      },
    });
  });

  it("rejects legacy v0.3 explicitly", () => {
    const candidate = portfolioPackageFor();
    const legacy = {
      ...candidate,
      payload: {
        ...candidate.payload,
        projectSchemaVersion: "legacy_v0.3",
        project: {
          ...candidate.payload.project,
          source: "legacy_v0_3",
          schemaVersion: "legacy_v0.3",
        },
      },
    };

    expect(
      classifyPortfolioImportCompatibility(legacy),
    ).toMatchObject({
      ok: false,
      error: {
        code: "LEGACY_MIGRATION_REQUIRED",
      },
    });
  });

  it("rejects a future package version as invalid", () => {
    expect(
      classifyPortfolioImportCompatibility({
        ...portfolioPackageFor(),
        packageVersion: "2.0.0",
      }),
    ).toMatchObject({
      ok: false,
      error: {
        code: "IMPORT_PACKAGE_INVALID",
      },
    });
  });
});
