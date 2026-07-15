
import { describe, expect, it } from "vitest";
import {
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

type EnumSchema = { enum: readonly string[] };
type ConstSchema = { const: unknown };
type ObjectSchema = {
  properties: Record<string, EnumSchema | ConstSchema | ObjectSchema>;
};
type ProjectSchema = {
  properties: Record<string, EnumSchema | ConstSchema | ObjectSchema>;
  $defs: Record<string, ObjectSchema>;
};

const schema = loadJson<ProjectSchema>(
  "../schemas/project.schema.json",
);

const definition = (key: string): ObjectSchema => {
  const value = schema.$defs[key];
  if (!value) throw new Error(`SCHEMA_DEFINITION_MISSING:${key}`);
  return value;
};

const enumAt = (
  object: ObjectSchema,
  key: string,
): readonly string[] => {
  const value = object.properties[key] as EnumSchema | undefined;
  if (!value?.enum) throw new Error(`SCHEMA_ENUM_MISSING:${key}`);
  return value.enum;
};

describe("TypeScript and JSON Schema parity", () => {
  it("mantiene una sola versión efectiva", () => {
    expect(DOMAIN_SCHEMA_VERSION).toBe(BOUNDARY_SCHEMA_VERSION);
    expect(
      (schema.properties.schemaVersion as ConstSchema).const,
    ).toBe(DOMAIN_SCHEMA_VERSION);
  });

  it("mantiene paridad de estados y enums", () => {
    expect(
      (schema.properties.status as EnumSchema).enum,
    ).toEqual([...PROJECT_STATUSES]);
    expect(
      enumAt(definition("missionProgress"), "status"),
    ).toEqual([...MISSION_STATUSES]);
    expect(
      enumAt(definition("evidence"), "status"),
    ).toEqual([...EVIDENCE_STATUSES]);
    expect(
      enumAt(definition("evidence"), "kind"),
    ).toEqual([...EVIDENCE_KINDS]);
    expect(
      enumAt(definition("reflection"), "privacyClass"),
    ).toEqual([...REFLECTION_PRIVACY_CLASSES]);
    expect(
      enumAt(definition("humanDecision"), "value"),
    ).toEqual([...HUMAN_DECISION_VALUES]);
    expect(
      enumAt(definition("accessibilityPreferences"), "textScale"),
    ).toEqual([...TEXT_SCALES]);
  });

  it("mantiene todas las capacidades diferidas en false", () => {
    const properties = definition("featureFlags").properties;
    expect(Object.keys(properties)).toEqual([...FEATURE_FLAG_KEYS]);
    for (const key of FEATURE_FLAG_KEYS) {
      expect((properties[key] as ConstSchema).const).toBe(false);
    }
  });
});
