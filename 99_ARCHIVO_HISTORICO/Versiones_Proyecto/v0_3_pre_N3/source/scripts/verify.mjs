// Runtime verification of core local-first logic (run with vite-node).
import assert from "node:assert";
import { createDefaultProgress } from "../src/templates/defaultProgress.js";
import { saveSession, completeSession } from "../src/utils/progress.js";
import { validateStudentProgress } from "../src/utils/validation.js";
import {
  importStudentFilesIntoGroup,
  mergeStudentIntoGroup,
  summarizeStudent,
} from "../src/utils/groupImport.js";
import { createDefaultGroupProgress } from "../src/templates/defaultGroupProgress.js";

let pass = 0;
const ok = (m) => { console.log("✓", m); pass++; };

// 1. Default progress shape
let p = createDefaultProgress();
p.profile.student_code = "EST-000";
p.profile.display_name = "Tester";
assert.equal(p.export_type, "student_progress");
assert.equal(p.schema_version, "0.3.0");
assert.equal(p.sessions.length, 9);
assert.equal(p.progress.sessions_completed, 0);
ok("Perfil/progreso por defecto correcto (9 sesiones, v0.3.0)");

// 2. Cannot complete without full evidence
let r = completeSession(p, "S1");
assert.equal(r.ok, false);
ok("No completa misión sin evidencia/decisión/reflexión");

// 3. Fill + complete S1 -> badge + counters + portfolio emerges
p = saveSession(p, "S1", {
  evidence_summary: "Manifiesto de 3 reglas",
  human_decision: "Decidí no usar voces clonadas",
  ethical_reflection: "Respeta la identidad de las personas",
});
r = completeSession(p, "S1");
assert.equal(r.ok, true);
assert.equal(r.badge.badge_id, "B1");
p = r.progress;
assert.equal(p.progress.sessions_completed, 1);
assert.deepEqual(p.progress.badges_awarded, ["B1"]);
assert.equal(p.progress.portfolio_entries_completed, 1);
assert.equal(p.portfolio_emergent.entries_completed, 1);
assert.ok(p.portfolio_emergent.sections.find(s => s.session_id === "S1").copy_ready_text.includes("Manifiesto"));
ok("Completar S1 otorga badge B1, actualiza contadores y portafolio emergente");

// 4. Complete all 9
for (const s of p.sessions) {
  if (s.status === "completed") continue;
  p = saveSession(p, s.session_id, {
    evidence_summary: "Evidencia " + s.session_id,
    human_decision: "Decisión " + s.session_id,
    ethical_reflection: "Reflexión " + s.session_id,
  });
  const rr = completeSession(p, s.session_id);
  p = rr.progress;
}
assert.equal(p.progress.sessions_completed, 9);
assert.equal(p.progress.badges_awarded.length, 9);
assert.equal(p.portfolio_emergent.completion_percentage, 100);
ok("Las 9 misiones completadas: 9 badges, portafolio 100%");

// 5. Export -> validate roundtrip
const serialized = JSON.parse(JSON.stringify({ ...p, exported_at: new Date().toISOString() }));
const v = validateStudentProgress(serialized);
assert.equal(v.valid, true, v.errors.join(";"));
ok("Export válido pasa validación de import");

// 6. Invalid export_type rejected
const bad = validateStudentProgress({ ...serialized, export_type: "nope" });
assert.equal(bad.valid, false);
ok("Import rechaza export_type inválido");

// 7. Group merge: dedup by student_code, keep most recent by last_updated
let g = createDefaultGroupProgress();
const older = JSON.parse(JSON.stringify(serialized));
older.profile.student_code = "EST-1";
older.profile.display_name = "Ana";
older.progress.last_updated = "2026-01-01T00:00:00.000Z";
older.progress.sessions_completed = 3;

const newer = JSON.parse(JSON.stringify(serialized));
newer.profile.student_code = "EST-1";
newer.profile.display_name = "Ana";
newer.progress.last_updated = "2026-06-01T00:00:00.000Z";
newer.progress.sessions_completed = 9;

g = mergeStudentIntoGroup(g, older).group;
g = mergeStudentIntoGroup(g, newer).group; // newer should win
assert.equal(g.students.length, 1);
assert.equal(g.students[0].sessions_completed, 9);
// older arriving after newer must NOT overwrite
const back = mergeStudentIntoGroup(g, older);
assert.equal(back.action, "kept");
assert.equal(back.group.students[0].sessions_completed, 9);
ok("Fusión grupal: sin duplicados, conserva el progreso más reciente");

// 8. Second distinct student is not deleted when importing more
const other = JSON.parse(JSON.stringify(serialized));
other.profile.student_code = "EST-2";
other.profile.display_name = "Beto";
g = mergeStudentIntoGroup(g, other).group;
assert.equal(g.students.length, 2);
ok("Importar otro estudiante no borra a los demás");

console.log(`\n${pass} verificaciones OK`);
