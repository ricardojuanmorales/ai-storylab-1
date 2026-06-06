import sessionsData from "../data/sessions.json";

/**
 * PEDAGOGICAL RULE: the portfolio is NOT authored at the end.
 * It EMERGES automatically from the evidence registered in each session.
 *
 * This module is pure: given the sessions array, it derives the
 * portfolio_emergent object. No side effects, no storage.
 */

function sessionMeta(sessionId) {
  return sessionsData.sessions.find((s) => s.session_id === sessionId) || {};
}

/**
 * Build the copy-ready text for a single portfolio section.
 */
export function buildCopyReadyText(session) {
  const meta = sessionMeta(session.session_id);
  const lines = [
    `## ${meta.number ? `Sesión ${meta.number}: ` : ""}${session.title || meta.title || session.session_id}`,
    "",
    `Producto: ${meta.expected_product || "—"}`,
    "",
    `Evidencia: ${session.evidence_summary || "—"}`,
  ];
  if (session.tool_used) lines.push(`Herramienta usada: ${session.tool_used}`);
  if (session.prompt_used) lines.push(`Prompt usado: ${session.prompt_used}`);
  lines.push(`Decisión humana: ${session.human_decision || "—"}`);
  lines.push(`Reflexión ética: ${session.ethical_reflection || "—"}`);
  return lines.join("\n");
}

/**
 * Whether a session counts as a completed portfolio entry.
 * Requires the minimum evidence + human decision + ethical reflection.
 */
export function isPortfolioEntryComplete(session) {
  return Boolean(
    session.evidence_summary &&
      session.human_decision &&
      session.ethical_reflection
  );
}

/**
 * Derive the full portfolio_emergent object from the sessions array.
 */
export function buildPortfolioEmergent(sessions) {
  const sections = sessions.map((session) => {
    const completed = isPortfolioEntryComplete(session);
    return {
      session_id: session.session_id,
      title: session.title || sessionMeta(session.session_id).title || "",
      completed,
      evidence_summary: session.evidence_summary || "",
      tool_used: session.tool_used || "",
      prompt_used: session.prompt_used || "",
      human_decision: session.human_decision || "",
      ethical_reflection: session.ethical_reflection || "",
      copy_ready_text: completed ? buildCopyReadyText(session) : "",
      updated_at: session.updated_at || "",
    };
  });

  const completedSections = sections.filter((s) => s.completed);
  const entriesExpected = sessions.length || 9;
  const entriesCompleted = completedSections.length;
  const completionPercentage = Math.round(
    (entriesCompleted / entriesExpected) * 100
  );

  const lastEntry = [...completedSections]
    .sort((a, b) => (a.updated_at || "").localeCompare(b.updated_at || ""))
    .pop();

  const copyReadyFull = completedSections
    .map((s) => s.copy_ready_text)
    .join("\n\n---\n\n");

  return {
    status: entriesCompleted >= entriesExpected ? "complete" : "in_progress",
    entries_expected: entriesExpected,
    entries_completed: entriesCompleted,
    completion_percentage: completionPercentage,
    last_entry_session: lastEntry ? lastEntry.session_id : "",
    copy_ready_full_portfolio: copyReadyFull,
    sections,
  };
}
