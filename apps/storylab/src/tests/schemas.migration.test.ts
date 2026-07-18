import { describe, expect, it } from "vitest";
import type { CreativeProject } from "../domain/model";
import {
  migrateAlpha1ToAlpha2,
  migrateProjectToCurrent,
} from "../schemas/migrate-project";
import {
  PROJECT_SCHEMA_REGISTRY,
  type ProjectJsonSchema,
} from "../schemas/schema-registry";
import {
  CURRENT_SCHEMA_VERSION,
  PREVIOUS_SCHEMA_VERSION,
} from "../schemas/schema-version";
import { clone, loadJson } from "./helpers";

type JsonRecord = Record<string, unknown>;

const alpha1Source = loadJson<unknown>(
  "../fixtures/migrations/project-alpha.1-source.json",
);
const alpha2Expected = loadJson<CreativeProject>(
  "../fixtures/migrations/project-alpha.2-expected.json",
);
const futureProject = loadJson<unknown>(
  "../fixtures/migrations/future-project.json",
);
const malformedAlpha1 = loadJson<unknown>(
  "../fixtures/migrations/malformed-alpha.1-project.json",
);
const legacyCandidate = loadJson<unknown>(
  "../fixtures/migrations/legacy-v0.3-candidate.json",
);

const withoutSchemaVersion = (input: unknown): JsonRecord => {
  const value = clone(input) as JsonRecord;
  delete value.schemaVersion;
  return value;
};

const normalizedSchema = (schema: ProjectJsonSchema): JsonRecord => {
  const value = clone(schema) as JsonRecord;
  delete value.$id;
  const properties = value.properties as JsonRecord;
  const version = properties.schemaVersion as JsonRecord;
  version.const = "<schema-version>";
  return value;
};

describe("H08-3.1 schema registry and migration", () => {
  it("registra alpha.1 histórico y alpha.2 actual", () => {
    expect(Object.keys(PROJECT_SCHEMA_REGISTRY)).toEqual([
      PREVIOUS_SCHEMA_VERSION,
      CURRENT_SCHEMA_VERSION,
    ]);
    expect(PROJECT_SCHEMA_REGISTRY[PREVIOUS_SCHEMA_VERSION].$id).toBe(
      "https://ai-storylab.local/schemas/project/0.8.0-alpha.1",
    );
    expect(PROJECT_SCHEMA_REGISTRY[CURRENT_SCHEMA_VERSION].$id).toBe(
      "https://ai-storylab.local/schemas/project/0.8.0-alpha.2",
    );
  });

  it("mantiene alpha.2 sin campos nuevos de usuario", () => {
    expect(
      normalizedSchema(PROJECT_SCHEMA_REGISTRY[CURRENT_SCHEMA_VERSION]),
    ).toEqual(
      normalizedSchema(PROJECT_SCHEMA_REGISTRY[PREVIOUS_SCHEMA_VERSION]),
    );
  });

  it("migra alpha.1 hacia alpha.2 conservando el payload", () => {
    const original = clone(alpha1Source);
    const result = migrateAlpha1ToAlpha2(alpha1Source);

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.value).toEqual(alpha2Expected);
    expect(withoutSchemaVersion(result.value)).toEqual(
      withoutSchemaVersion(alpha1Source),
    );
    expect(alpha1Source).toEqual(original);
    expect(result.value).not.toBe(alpha1Source);
    expect(result.value.profile).not.toBe(
      (alpha1Source as { profile: unknown }).profile,
    );
  });

  it("produce resultados deterministas", () => {
    const first = migrateProjectToCurrent(alpha1Source);
    const second = migrateProjectToCurrent(alpha1Source);

    expect(first).toEqual(second);
  });

  it("es idempotente en la versión actual mediante copia validada", () => {
    const result = migrateProjectToCurrent(alpha2Expected);

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.value).toEqual(alpha2Expected);
    expect(result.value).not.toBe(alpha2Expected);
    expect(result.value.profile).not.toBe(alpha2Expected.profile);
  });

  it("rechaza una versión futura sin alterar la fuente", () => {
    const original = clone(futureProject);
    const result = migrateProjectToCurrent(futureProject);

    expect(result).toMatchObject({
      ok: false,
      error: {
        code: "SCHEMA_VERSION_UNSUPPORTED",
        details: { received: "0.9.0" },
      },
    });
    expect(futureProject).toEqual(original);
  });

  it("rechaza legacy v0.3 sin fabricar una transformación", () => {
    expect(migrateProjectToCurrent(legacyCandidate)).toMatchObject({
      ok: false,
      error: { code: "LEGACY_MIGRATION_REQUIRED" },
    });
  });

  it("rechaza alpha.1 malformado sin producir destino parcial", () => {
    expect(migrateProjectToCurrent(malformedAlpha1)).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("rechaza una entrada sin versión declarada", () => {
    expect(migrateProjectToCurrent({ synthetic: true })).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });
});
