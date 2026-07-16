import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { describe, expect, it } from "vitest";
import type { CreativeProject } from "../domain/model";
import { validateProjectInvariants } from "../domain/invariants";
import { clone, loadJson } from "./helpers";

type JsonSchema = Record<string, unknown>;

const projectSchema = loadJson<JsonSchema>(
  "../schemas/project.schema.json",
);
const exportSchema = loadJson<JsonSchema>(
  "../schemas/export-package.schema.json",
);
const importSchema = loadJson<JsonSchema>(
  "../schemas/import-candidate.schema.json",
);

const ajv = new Ajv2020({
  allErrors: true,
  strict: true,
  validateFormats: true,
});
addFormats(ajv);
ajv.addSchema(projectSchema);

const validateProject = ajv.getSchema(
  String(projectSchema.$id),
);
if (!validateProject) {
  throw new Error("PROJECT_SCHEMA_NOT_REGISTERED");
}

const validateExport = ajv.compile(exportSchema);
const validateImport = ajv.compile(importSchema);

const minimal = loadJson<CreativeProject>(
  "../fixtures/valid/minimal-project.json",
);
const completed = loadJson<CreativeProject>(
  "../fixtures/valid/completed-project.json",
);
const exportPackage = loadJson(
  "../fixtures/valid/export-package.json",
);
const missingPseudonym = loadJson<CreativeProject>(
  "../fixtures/invalid/missing-pseudonym.json",
);
const portfolioWithoutDecision = loadJson<CreativeProject>(
  "../fixtures/invalid/portfolio-without-human-decision.json",
);
const legacy = loadJson(
  "../fixtures/legacy/v0.3-student-progress.synthetic.json",
);

describe("JSON Schema 2020-12", () => {
  it("acepta proyectos y exportación válidos", () => {
    expect(validateProject(minimal)).toBe(true);
    expect(validateProject(completed)).toBe(true);
    expect(validateExport(exportPackage)).toBe(true);
  });

  it("rechaza seudónimo vacío", () => {
    expect(validateProject(missingPseudonym)).toBe(false);
  });

  it("aplica maxLength al título serializado completo", () => {
    const project = {
      ...clone(minimal),
      title: ` ${"x".repeat(120)}`,
    };
    expect(validateProject(project)).toBe(false);
  });

  it("aplica maxLength al seudónimo serializado completo", () => {
    const project = clone(minimal) as unknown as {
      profile: { pseudonym: string };
    };
    project.profile.pseudonym = ` ${"x".repeat(80)}`;
    expect(validateProject(project)).toBe(false);
  });

  it("rechaza campos desconocidos", () => {
    const project = {
      ...clone(minimal),
      unexpectedField: "blocked",
    };
    expect(validateProject(project)).toBe(false);
  });

  it("rechaza una capacidad diferida activa", () => {
    const project = clone(minimal) as unknown as {
      featureFlags: Record<string, boolean>;
    };
    project.featureFlags.cloudSync = true;
    expect(validateProject(project)).toBe(false);
  });

  it("distingue schema válido de dominio inválido", () => {
    expect(validateProject(portfolioWithoutDecision)).toBe(true);
    expect(
      validateProjectInvariants(portfolioWithoutDecision).map(
        (item) => item.code,
      ),
    ).toContain("HUMAN_DECISION_REQUIRED");
  });

  it("clasifica el legacy como candidato, no como proyecto actual", () => {
    const candidate = {
      source: "legacy_v0_3",
      sourceSchemaVersion: "0.3.0",
      payload: legacy,
    };
    expect(validateImport(candidate)).toBe(true);
    expect(validateProject(legacy)).toBe(false);
  });
});
