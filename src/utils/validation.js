import { createDefaultFinalSubmission } from "./finalSubmission.js";

export const SUPPORTED_SCHEMA_VERSIONS = ["0.2.0"];

/**
 * Check that a schema version is compatible (same major.minor accepted).
 */
export function isSchemaCompatible(version) {
  if (!version) return false;
  if (SUPPORTED_SCHEMA_VERSIONS.includes(version)) return true;
  // Accept same major.minor (e.g. 0.2.x)
  const [maj, min] = String(version).split(".");
  return SUPPORTED_SCHEMA_VERSIONS.some((v) => {
    const [m, n] = v.split(".");
    return m === maj && n === min;
  });
}

/**
 * Validate a parsed student_progress object.
 * Returns { valid, errors:[], warnings:[], data }.
 * Where possible, repairs/initializes missing-but-recoverable fields.
 */
export function validateStudentProgress(parsed) {
  const errors = [];
  const warnings = [];

  if (!parsed || typeof parsed !== "object") {
    return { valid: false, errors: ["El archivo no es un JSON válido."], warnings, data: null };
  }

  if (parsed.export_type !== "student_progress") {
    errors.push(
      `export_type inválido: se esperaba "student_progress" y se encontró "${parsed.export_type ?? "ausente"}".`
    );
  }

  if (!isSchemaCompatible(parsed.schema_version)) {
    errors.push(
      `schema_version incompatible: "${parsed.schema_version ?? "ausente"}". Compatibles: ${SUPPORTED_SCHEMA_VERSIONS.join(", ")}.`
    );
  }

  if (!parsed.profile || !parsed.profile.student_code) {
    errors.push("Falta profile.student_code.");
  }

  if (!Array.isArray(parsed.sessions)) {
    errors.push("El campo sessions debe ser un arreglo.");
  }

  if (!parsed.progress || !parsed.progress.last_updated) {
    warnings.push("Falta progress.last_updated; se usará la fecha actual.");
  }

  // final_submission can be initialized if missing
  let data = parsed;
  if (errors.length === 0) {
    data = { ...parsed };
    if (!data.final_submission || typeof data.final_submission !== "object") {
      data.final_submission = createDefaultFinalSubmission();
      warnings.push("final_submission ausente; se inicializó con valores por defecto.");
    }
    if (!data.progress) data.progress = {};
    if (!data.progress.last_updated) {
      data.progress.last_updated = new Date().toISOString();
    }
  }

  return { valid: errors.length === 0, errors, warnings, data };
}

/**
 * Validate a parsed group_progress object (lighter check).
 */
export function validateGroupProgress(parsed) {
  const errors = [];
  if (!parsed || typeof parsed !== "object") {
    errors.push("El archivo no es un JSON válido.");
    return { valid: false, errors, data: null };
  }
  if (parsed.export_type !== "group_progress") {
    errors.push('export_type inválido: se esperaba "group_progress".');
  }
  if (!isSchemaCompatible(parsed.schema_version)) {
    errors.push(`schema_version incompatible: "${parsed.schema_version ?? "ausente"}".`);
  }
  if (!Array.isArray(parsed.students)) {
    errors.push("El campo students debe ser un arreglo.");
  }
  return { valid: errors.length === 0, errors, data: parsed };
}
