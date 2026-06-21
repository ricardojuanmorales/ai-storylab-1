import sessionsData from "../data/sessions.json";
import { validateStudentProgress, validateGroupProgress } from "./validation.js";
import { readJSONFile, triggerDownload } from "./exportImport.js";
import { createDefaultGroupProgress } from "../templates/defaultGroupProgress.js";

const SESSION_IDS = sessionsData.sessions.map((s) => s.session_id);

/**
 * Reduce a full student_progress object into the compact "student row"
 * stored inside group_progress.students[]. Keeps the dashboard light.
 */
export function summarizeStudent(progress) {
  const sessionStatus = {};
  SESSION_IDS.forEach((id) => {
    const s = (progress.sessions || []).find((x) => x.session_id === id);
    sessionStatus[id] = s ? s.status : "not_started";
  });

  return {
    student_code: progress.profile?.student_code || "",
    display_name: progress.profile?.display_name || "",
    project_title: progress.project?.title || "",
    modality: progress.profile?.modality || "",
    cohort: progress.profile?.cohort || "",
    sessions_status: sessionStatus,
    sessions_completed: progress.progress?.sessions_completed || 0,
    badges_awarded: (progress.progress?.badges_awarded || []).length,
    portfolio_completed: progress.portfolio_emergent?.entries_completed || 0,
    portfolio_expected: progress.portfolio_emergent?.entries_expected || 9,
    video_status: progress.final_submission?.video_status || "pending",
    ai_use_declaration_confirmed:
      progress.final_submission?.ai_use_declaration_confirmed || false,
    gallery_candidate_interest:
      progress.final_submission?.gallery_candidate_interest || false,
    last_updated: progress.progress?.last_updated || "",
  };
}

/**
 * Merge one student into the group, deduping by student_code.
 * If the code already exists, keep the most recent (by last_updated),
 * unless forceReplace/forceKeep is provided via options.
 *
 * Returns { group, action, warnings }.
 *   action: "added" | "updated" | "kept" | "conflict"
 */
export function mergeStudentIntoGroup(group, studentProgress, options = {}) {
  const warnings = [];
  const row = summarizeStudent(studentProgress);

  if (!row.student_code) {
    warnings.push("Archivo sin student_code; no se pudo fusionar.");
    return { group, action: "conflict", warnings };
  }

  const students = [...group.students];
  const idx = students.findIndex((s) => s.student_code === row.student_code);

  // First-seen cohort/teacher/facilitator seed the group header.
  const seededGroup = {
    ...group,
    cohort: group.cohort || row.cohort || "",
    teacher_name: group.teacher_name || studentProgress.profile?.teacher_name || "",
    facilitator_name:
      group.facilitator_name || studentProgress.profile?.facilitator_name || "",
  };

  if (idx === -1) {
    students.push(row);
    return {
      group: { ...seededGroup, students },
      action: "added",
      warnings,
    };
  }

  // Existing: compare last_updated.
  const existing = students[idx];
  const existingTime = Date.parse(existing.last_updated) || 0;
  const incomingTime = Date.parse(row.last_updated) || 0;

  if (options.forceKeepExisting) {
    return { group: seededGroup, action: "kept", warnings };
  }

  if (options.forceReplace || incomingTime > existingTime) {
    students[idx] = row;
    return {
      group: { ...seededGroup, students },
      action: "updated",
      warnings,
    };
  }

  if (incomingTime === existingTime) {
    warnings.push(
      `${row.student_code}: misma fecha de actualización; se conservó el existente.`
    );
    return { group: seededGroup, action: "kept", warnings };
  }

  warnings.push(
    `${row.student_code}: el archivo importado es más antiguo; se conservó el progreso más reciente.`
  );
  return { group: seededGroup, action: "kept", warnings };
}

/**
 * Process a list of File objects. Validates each, merges valid ones.
 * Returns { group, results:[{fileName, status, warnings, errors}] }.
 * Never deletes existing students.
 */
export async function importStudentFilesIntoGroup(group, files, options = {}) {
  let workingGroup = group || createDefaultGroupProgress();
  const results = [];

  for (const file of files) {
    try {
      const parsed = await readJSONFile(file);

      // Handle group_progress exports: merge each student row directly.
      if (parsed?.export_type === "group_progress") {
        const validation = validateGroupProgress(parsed);
        if (!validation.valid) {
          results.push({ fileName: file.name, status: "error", errors: validation.errors, warnings: [] });
          continue;
        }
        let added = 0, updated = 0, kept = 0;
        const allWarnings = [];
        for (const studentRow of parsed.students) {
          // Reconstruct a minimal progress-like object so mergeStudentIntoGroup can summarize it.
          const synthetic = {
            profile: {
              student_code: studentRow.student_code,
              display_name: studentRow.display_name,
              modality: studentRow.modality,
              cohort: studentRow.cohort,
            },
            project: { title: studentRow.project_title },
            sessions: Object.entries(studentRow.sessions_status || {}).map(([session_id, status]) => ({ session_id, status })),
            progress: {
              sessions_completed: studentRow.sessions_completed,
              badges_awarded: Array(studentRow.badges_awarded).fill(null),
              last_updated: studentRow.last_updated,
            },
            portfolio_emergent: {
              entries_completed: studentRow.portfolio_completed,
              entries_expected: studentRow.portfolio_expected,
            },
            final_submission: {
              video_status: studentRow.video_status,
              ai_use_declaration_confirmed: studentRow.ai_use_declaration_confirmed,
              gallery_candidate_interest: studentRow.gallery_candidate_interest,
            },
          };
          const merge = mergeStudentIntoGroup(workingGroup, synthetic, options);
          workingGroup = merge.group;
          if (merge.action === "added") added++;
          else if (merge.action === "updated") updated++;
          else if (merge.action === "kept") kept++;
          allWarnings.push(...merge.warnings);
        }
        results.push({
          fileName: file.name,
          status: "added",
          warnings: allWarnings,
          errors: [],
          summary: `${added} añadidos, ${updated} actualizados, ${kept} conservados.`,
        });
        continue;
      }

      const validation = validateStudentProgress(parsed);
      if (!validation.valid) {
        results.push({
          fileName: file.name,
          status: "error",
          errors: validation.errors,
          warnings: validation.warnings,
        });
        continue;
      }
      const merge = mergeStudentIntoGroup(workingGroup, validation.data, options);
      workingGroup = merge.group;
      results.push({
        fileName: file.name,
        status: merge.action,
        warnings: [...validation.warnings, ...merge.warnings],
        errors: [],
      });
    } catch (err) {
      results.push({
        fileName: file.name,
        status: "error",
        errors: [err.message],
        warnings: [],
      });
    }
  }

  workingGroup = recomputeAggregate(workingGroup);
  return { group: workingGroup, results };
}

/**
 * Compute aggregate indicators for the group dashboard.
 */
export function recomputeAggregate(group) {
  const students = group.students || [];
  const total = students.length;

  const perSessionCompleted = {};
  SESSION_IDS.forEach((id) => {
    perSessionCompleted[id] = students.filter(
      (s) => s.sessions_status?.[id] === "completed"
    ).length;
  });

  const sum = (arr) => arr.reduce((a, b) => a + b, 0);

  const avgSessions = total
    ? +(sum(students.map((s) => s.sessions_completed)) / total).toFixed(2)
    : 0;
  const avgPortfolio = total
    ? +(sum(students.map((s) => s.portfolio_completed)) / total).toFixed(2)
    : 0;
  const badgesTotal = sum(students.map((s) => s.badges_awarded));
  const videosSubmitted = students.filter(
    (s) => s.video_status === "submitted" || s.video_status === "validated"
  ).length;
  const aiDeclarations = students.filter(
    (s) => s.ai_use_declaration_confirmed
  ).length;
  const galleryCandidates = students.filter(
    (s) => s.gallery_candidate_interest
  ).length;

  return {
    ...group,
    aggregate: {
      total_students: total,
      avg_sessions_completed: avgSessions,
      per_session_completed: perSessionCompleted,
      badges_awarded_total: badgesTotal,
      avg_portfolio_completed: avgPortfolio,
      videos_submitted: videosSubmitted,
      videos_pending: total - videosSubmitted,
      ai_declarations_confirmed: aiDeclarations,
      gallery_candidates: galleryCandidates,
    },
  };
}

/**
 * Export group_progress.json for the facilitator.
 */
export function downloadGroupProgress(group) {
  const payload = {
    ...recomputeAggregate(group),
    exported_at: new Date().toISOString(),
  };
  const date = new Date().toISOString().slice(0, 10);
  const fileName = `ai-storylab-grupo-${(payload.cohort || "cohorte").replace(/\s+/g, "-")}-${date}.json`;
  triggerDownload(JSON.stringify(payload, null, 2), fileName);
  return fileName;
}
