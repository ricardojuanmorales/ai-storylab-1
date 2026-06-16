import { describe, it, expect } from "vitest";
import {
  SUPPORTED_SCHEMA_VERSIONS,
  isSchemaCompatible,
  validateStudentProgress,
  validateGroupProgress,
} from "../utils/validation.js";
import { SCHEMA_VERSION } from "../templates/defaultProgress.js";
import { prepareExport } from "../utils/exportImport.js";

// ─── Helpers ────────────────────────────────────────────────────────────────

function makeStudent(overrides = {}) {
  return {
    export_type: "student_progress",
    schema_version: "0.3.0",
    profile: { student_code: "EST-001", display_name: "Ana" },
    sessions: [],
    progress: { last_updated: new Date().toISOString() },
    ...overrides,
  };
}

function makeGroup(overrides = {}) {
  return {
    export_type: "group_progress",
    schema_version: "0.3.0",
    students: [],
    ...overrides,
  };
}

// ─── SCHEMA_VERSION parity ──────────────────────────────────────────────────
// This test is the regression guard for the bug fixed in PR #1:
// SCHEMA_VERSION bumped in defaultProgress.js but SUPPORTED_SCHEMA_VERSIONS
// in validation.js was not updated, causing all new exports to be rejected.

describe("SCHEMA_VERSION parity", () => {
  it("la versión activa del schema está en SUPPORTED_SCHEMA_VERSIONS", () => {
    expect(SUPPORTED_SCHEMA_VERSIONS).toContain(SCHEMA_VERSION);
  });

  it("los exports de estudiantes llevan la schema_version activa", () => {
    const base = makeStudent({ schema_version: SCHEMA_VERSION });
    const exported = prepareExport(base);
    expect(exported.schema_version).toBe(SCHEMA_VERSION);
    expect(SUPPORTED_SCHEMA_VERSIONS).toContain(exported.schema_version);
  });
});

// ─── isSchemaCompatible ─────────────────────────────────────────────────────

describe("isSchemaCompatible", () => {
  it("acepta cada versión en SUPPORTED_SCHEMA_VERSIONS", () => {
    SUPPORTED_SCHEMA_VERSIONS.forEach((v) => {
      expect(isSchemaCompatible(v)).toBe(true);
    });
  });

  it("acepta parches del mismo major.minor (0.3.x)", () => {
    expect(isSchemaCompatible("0.3.1")).toBe(true);
    expect(isSchemaCompatible("0.3.99")).toBe(true);
  });

  it("acepta parches del mismo major.minor (0.2.x)", () => {
    expect(isSchemaCompatible("0.2.1")).toBe(true);
  });

  it("rechaza versiones de major.minor distintas", () => {
    expect(isSchemaCompatible("1.0.0")).toBe(false);
    expect(isSchemaCompatible("0.1.0")).toBe(false);
    expect(isSchemaCompatible("0.4.0")).toBe(false);
  });

  it("rechaza valores ausentes o inválidos", () => {
    expect(isSchemaCompatible(null)).toBe(false);
    expect(isSchemaCompatible(undefined)).toBe(false);
    expect(isSchemaCompatible("")).toBe(false);
    expect(isSchemaCompatible("abc")).toBe(false);
  });
});

// ─── validateStudentProgress ────────────────────────────────────────────────

describe("validateStudentProgress", () => {
  it("acepta un objeto válido", () => {
    const { valid, errors } = validateStudentProgress(makeStudent());
    expect(valid).toBe(true);
    expect(errors).toHaveLength(0);
  });

  it("acepta schema_version 0.3.0 (regresión PR #1)", () => {
    const { valid } = validateStudentProgress(makeStudent({ schema_version: "0.3.0" }));
    expect(valid).toBe(true);
  });

  it("acepta schema_version 0.2.0 (retrocompatibilidad)", () => {
    const { valid } = validateStudentProgress(makeStudent({ schema_version: "0.2.0" }));
    expect(valid).toBe(true);
  });

  it("rechaza schema_version incompatible", () => {
    const { valid, errors } = validateStudentProgress(makeStudent({ schema_version: "1.0.0" }));
    expect(valid).toBe(false);
    expect(errors.some((e) => e.includes("schema_version"))).toBe(true);
  });

  it("rechaza export_type incorrecto", () => {
    const { valid, errors } = validateStudentProgress(makeStudent({ export_type: "group_progress" }));
    expect(valid).toBe(false);
    expect(errors.some((e) => e.includes("export_type"))).toBe(true);
  });

  it("rechaza cuando falta profile.student_code", () => {
    const { valid, errors } = validateStudentProgress(
      makeStudent({ profile: { display_name: "Ana" } })
    );
    expect(valid).toBe(false);
    expect(errors.some((e) => e.includes("student_code"))).toBe(true);
  });

  it("rechaza cuando sessions no es arreglo", () => {
    const { valid, errors } = validateStudentProgress(makeStudent({ sessions: null }));
    expect(valid).toBe(false);
    expect(errors.some((e) => e.includes("sessions"))).toBe(true);
  });

  it("inicializa final_submission si está ausente", () => {
    const base = makeStudent();
    delete base.final_submission;
    const { valid, data, warnings } = validateStudentProgress(base);
    expect(valid).toBe(true);
    expect(data.final_submission).toBeDefined();
    expect(warnings.some((w) => w.includes("final_submission"))).toBe(true);
  });

  it("rechaza input que no es objeto", () => {
    expect(validateStudentProgress(null).valid).toBe(false);
    expect(validateStudentProgress("texto").valid).toBe(false);
    expect(validateStudentProgress(42).valid).toBe(false);
  });
});

// ─── validateGroupProgress ──────────────────────────────────────────────────

describe("validateGroupProgress", () => {
  it("acepta un objeto válido", () => {
    const { valid, errors } = validateGroupProgress(makeGroup());
    expect(valid).toBe(true);
    expect(errors).toHaveLength(0);
  });

  it("rechaza schema_version incompatible", () => {
    const { valid, errors } = validateGroupProgress(makeGroup({ schema_version: "1.0.0" }));
    expect(valid).toBe(false);
    expect(errors.some((e) => e.includes("schema_version"))).toBe(true);
  });

  it("rechaza export_type incorrecto", () => {
    const { valid } = validateGroupProgress(makeGroup({ export_type: "student_progress" }));
    expect(valid).toBe(false);
  });

  it("rechaza cuando students no es arreglo", () => {
    const { valid, errors } = validateGroupProgress(makeGroup({ students: null }));
    expect(valid).toBe(false);
    expect(errors.some((e) => e.includes("students"))).toBe(true);
  });
});
