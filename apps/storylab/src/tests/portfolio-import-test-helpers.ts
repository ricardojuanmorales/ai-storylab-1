import { createHash } from "node:crypto";
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
import type {
  IdGenerator,
  UntrustedLocalFile,
} from "../ports";
import {
  CURRENT_SCHEMA_VERSION,
  PREVIOUS_SCHEMA_VERSION,
} from "../schemas/schema-version";
import type {
  KnownPortfolioPackage,
  KnownPortfolioProject,
} from "../schemas/portfolio-package-validator";
import { clone, loadJson } from "./helpers";

export const portfolioFixture = loadJson<ExportPackage>(
  "../fixtures/valid/export-package.json",
);

export const nodeHasher = {
  digestHex: async (value: string) =>
    ok(
      createHash("sha256")
        .update(value, "utf8")
        .digest("hex"),
    ),
};

export const portfolioPackageFor = (
  version:
    | typeof CURRENT_SCHEMA_VERSION
    | typeof PREVIOUS_SCHEMA_VERSION =
      CURRENT_SCHEMA_VERSION,
): KnownPortfolioPackage => {
  const project = {
    ...clone(portfolioFixture.project),
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
    exportedAt: portfolioFixture.exportedAt,
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

export const fileFromValue = (
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

export const stagingServiceWith = (
  ids: IdGenerator,
) =>
  createPortfolioImportStagingService({
    ids,
    hasher: nodeHasher,
  });
