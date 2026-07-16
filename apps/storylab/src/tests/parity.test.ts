import { describe, expect, it } from "vitest";
import {
  DOMAIN_LIMITS,
  EVIDENCE_KINDS,
  EVIDENCE_STATUSES,
  FEATURE_FLAG_KEYS,
  HUMAN_DECISION_VALUES,
  MISSION_STATUSES,
  PROJECT_STATUSES,
  REFLECTION_PRIVACY_CLASSES,
  TEXT_SCALES,
} from "../domain/constants";
import {
  CURRENT_SCHEMA_VERSION as DOMAIN_SCHEMA_VERSION,
} from "../domain/model";
import {
  CURRENT_SCHEMA_VERSION as BOUNDARY_SCHEMA_VERSION,
} from "../schemas/schema-version";
import { loadJson } from "./helpers";

type SchemaNode = {
  readonly $defs?: Readonly<Record<string, SchemaNode>>;
  readonly $id?: string;
  readonly $ref?: string;
  readonly additionalProperties?: boolean;
  readonly const?: unknown;
  readonly enum?: readonly string[];
  readonly maxLength?: number;
  readonly properties?: Readonly<Record<string, SchemaNode>>;
  readonly required?: readonly string[];
  readonly type?: string;
};

const schema = loadJson<SchemaNode>("../schemas/project.schema.json");
const exportSchema = loadJson<SchemaNode>(
  "../schemas/export-package.schema.json",
);
const importSchema = loadJson<SchemaNode>(
  "../schemas/import-candidate.schema.json",
);

const propertiesOf = (node: SchemaNode): Readonly<Record<string, SchemaNode>> => {
  if (!node.properties) throw new Error("SCHEMA_PROPERTIES_MISSING");
  return node.properties;
};

const propertyAt = (node: SchemaNode, key: string): SchemaNode => {
  const value = propertiesOf(node)[key];
  if (!value) throw new Error(`SCHEMA_PROPERTY_MISSING:${key}`);
  return value;
};

const definition = (key: string): SchemaNode => {
  const value = schema.$defs?.[key];
  if (!value) throw new Error(`SCHEMA_DEFINITION_MISSING:${key}`);
  return value;
};

const enumAt = (object: SchemaNode, key: string): readonly string[] => {
  const values = propertyAt(object, key).enum;
  if (!values) throw new Error(`SCHEMA_ENUM_MISSING:${key}`);
  return values;
};

describe("TypeScript and JSON Schema parity", () => {
  it("mantiene una sola versión efectiva", () => {
    expect(DOMAIN_SCHEMA_VERSION).toBe(BOUNDARY_SCHEMA_VERSION);
    expect(propertyAt(schema, "schemaVersion").const).toBe(
      DOMAIN_SCHEMA_VERSION,
    );
    expect(propertyAt(exportSchema, "schemaVersion").const).toBe(
      DOMAIN_SCHEMA_VERSION,
    );
  });

  it("mantiene paridad de estados y enums", () => {
    expect(propertyAt(schema, "status").enum).toEqual([...PROJECT_STATUSES]);
    expect(enumAt(definition("missionProgress"), "status")).toEqual([
      ...MISSION_STATUSES,
    ]);
    expect(enumAt(definition("evidence"), "status")).toEqual([
      ...EVIDENCE_STATUSES,
    ]);
    expect(enumAt(definition("evidence"), "kind")).toEqual([
      ...EVIDENCE_KINDS,
    ]);
    expect(enumAt(definition("reflection"), "privacyClass")).toEqual([
      ...REFLECTION_PRIVACY_CLASSES,
    ]);
    expect(enumAt(definition("humanDecision"), "value")).toEqual([
      ...HUMAN_DECISION_VALUES,
    ]);
    expect(
      enumAt(definition("accessibilityPreferences"), "textScale"),
    ).toEqual([...TEXT_SCALES]);
  });

  it("mantiene límites compartidos con las invariantes de dominio", () => {
    expect(propertyAt(schema, "title").maxLength).toBe(
      DOMAIN_LIMITS.projectTitle,
    );
    expect(
      propertyAt(definition("localProfile"), "pseudonym").maxLength,
    ).toBe(DOMAIN_LIMITS.profilePseudonym);
    expect(
      propertyAt(definition("localProfile"), "context").maxLength,
    ).toBe(DOMAIN_LIMITS.profileContext);
  });

  it("mantiene objetos cerrados y campos requeridos", () => {
    expect(schema.additionalProperties).toBe(false);
    expect(schema.required).toEqual([
      "schemaVersion",
      "id",
      "title",
      "status",
      "profile",
      "missions",
      "activityResponses",
      "evidence",
      "reflections",
      "decisions",
      "portfolio",
      "featureFlags",
      "createdAt",
      "updatedAt",
    ]);
    expect(definition("localProfile").additionalProperties).toBe(false);
    expect(definition("localProfile").required).toEqual([
      "pseudonym",
      "accessibility",
    ]);
    expect(definition("accessibilityPreferences").additionalProperties).toBe(
      false,
    );
    expect(definition("featureFlags").additionalProperties).toBe(false);
  });

  it("mantiene todas las capacidades diferidas en false", () => {
    const properties = propertiesOf(definition("featureFlags"));
    expect(Object.keys(properties)).toEqual([...FEATURE_FLAG_KEYS]);
    for (const key of FEATURE_FLAG_KEYS) {
      expect(properties[key]?.const).toBe(false);
    }
  });

  it("mantiene paridad de envelopes de importación y exportación", () => {
    expect(exportSchema.additionalProperties).toBe(false);
    expect(propertyAt(exportSchema, "exportType").const).toBe(
      "storylab_project",
    );
    expect(propertyAt(exportSchema, "project").$ref).toBe(schema.$id);

    expect(importSchema.additionalProperties).toBe(false);
    expect(propertyAt(importSchema, "source").enum).toEqual([
      "storylab",
      "legacy_v0_3",
    ]);
    expect(propertyAt(importSchema, "sourceSchemaVersion").maxLength).toBe(80);
  });
});
