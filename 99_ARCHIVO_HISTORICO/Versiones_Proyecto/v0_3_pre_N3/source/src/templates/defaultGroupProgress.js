import { SCHEMA_VERSION } from "./defaultProgress.js";

/**
 * Create the default facilitator group-progress container (schema v0.2.0).
 * students[] is filled by importing individual student_progress files.
 */
export function createDefaultGroupProgress() {
  return {
    schema_version: SCHEMA_VERSION,
    export_type: "group_progress",
    exported_at: "",
    cohort: "",
    teacher_name: "",
    facilitator_name: "",
    students: [],
    aggregate: {},
  };
}
