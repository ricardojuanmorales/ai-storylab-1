import { describe, expect, it } from "vitest";
import type {
  CreativeProject,
  ExportPackage,
} from "../domain/model";
import {
  validateExportPackageSnapshot,
  validateProjectSnapshot,
} from "../schemas/runtime-validators";
import { clone, loadJson } from "./helpers";

const minimal = loadJson<CreativeProject>(
  "../fixtures/valid/minimal-project.json",
);
const exportPackage = loadJson<ExportPackage>(
  "../fixtures/valid/export-package.json",
);
const portfolioWithoutDecision = loadJson<CreativeProject>(
  "../fixtures/invalid/portfolio-without-human-decision.json",
);

describe("runtime schema validators", () => {
  it("acepta un proyecto que satisface schema e invariantes", () => {
    const result = validateProjectSnapshot(minimal);
    expect(result.ok).toBe(true);
  });

  it("rechaza campos desconocidos en almacenamiento", () => {
    const candidate = {
      ...clone(minimal),
      unexpectedField: "blocked",
    };
    expect(validateProjectSnapshot(candidate)).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("rechaza un proyecto de schema válido con dominio inválido", () => {
    expect(
      validateProjectSnapshot(portfolioWithoutDecision),
    ).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("acepta un paquete de exportación válido", () => {
    const result = validateExportPackageSnapshot(exportPackage);
    expect(result.ok).toBe(true);
  });

  it("rechaza una exportación sin proyecto válido", () => {
    const candidate = {
      ...clone(exportPackage),
      project: { schemaVersion: "0.8.0-alpha.1" },
    };
    expect(validateExportPackageSnapshot(candidate)).toMatchObject({
      ok: false,
      error: { code: "EXPORT_PACKAGE_INVALID" },
    });
  });
});
