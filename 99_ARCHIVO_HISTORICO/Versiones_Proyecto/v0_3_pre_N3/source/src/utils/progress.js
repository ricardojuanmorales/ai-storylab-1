import sessionsData from "../data/sessions.json";
import badgesData from "../data/badges.json";
import { buildPortfolioEmergent, isPortfolioEntryComplete } from "./portfolio.js";

/**
 * Core progress logic. Pure functions that take a progress object and
 * return a NEW progress object (immutable updates). UI just renders.
 */

function nowISO() {
  return new Date().toISOString();
}

export function getSessionMeta(sessionId) {
  return sessionsData.sessions.find((s) => s.session_id === sessionId) || null;
}

export function getBadgeForSession(sessionId) {
  return badgesData.badges.find((b) => b.session_id === sessionId) || null;
}

/**
 * MISSION COMPLETION RULE.
 * A mission can be marked completed only when it has:
 * - minimum evidence
 * - human decision
 * - ethical reflection
 * - portfolio entry completed
 */
export function canCompleteSession(session) {
  return (
    Boolean(session.evidence_summary) &&
    Boolean(session.human_decision) &&
    Boolean(session.ethical_reflection) &&
    isPortfolioEntryComplete(session)
  );
}

/**
 * Save (without necessarily completing) the fields of a single session.
 * Sets status to in_progress if it was not_started and there is content.
 */
export function saveSession(progress, sessionId, fields) {
  const sessions = progress.sessions.map((s) => {
    if (s.session_id !== sessionId) return s;
    const merged = { ...s, ...fields, updated_at: nowISO() };
    merged.portfolio_completed = isPortfolioEntryComplete(merged);
    if (merged.status === "not_started") {
      const hasContent = Boolean(
        merged.evidence_summary ||
          merged.human_decision ||
          merged.ethical_reflection ||
          merged.tool_used ||
          merged.prompt_used
      );
      if (hasContent) merged.status = "in_progress";
    }
    return merged;
  });
  return recompute({ ...progress, sessions });
}

/**
 * Mark a session as completed (if eligible) and award its badge.
 */
export function completeSession(progress, sessionId) {
  const target = progress.sessions.find((s) => s.session_id === sessionId);
  if (!target || !canCompleteSession(target)) {
    return { progress, ok: false, reason: "incomplete" };
  }

  const badge = getBadgeForSession(sessionId);
  const sessions = progress.sessions.map((s) =>
    s.session_id === sessionId
      ? {
          ...s,
          status: "completed",
          portfolio_completed: true,
          badge_awarded: Boolean(badge),
          updated_at: nowISO(),
        }
      : s
  );

  let next = { ...progress, sessions };

  // Award badge (no duplicates)
  if (badge && !next.progress.badges_awarded.includes(badge.badge_id)) {
    next = {
      ...next,
      progress: {
        ...next.progress,
        badges_awarded: [...next.progress.badges_awarded, badge.badge_id],
      },
    };
  }

  return { progress: recompute(next), ok: true, badge };
}

/**
 * Move a completed session back to pending review (facilitator-style toggle).
 */
export function setSessionStatus(progress, sessionId, status) {
  const sessions = progress.sessions.map((s) =>
    s.session_id === sessionId ? { ...s, status, updated_at: nowISO() } : s
  );
  return recompute({ ...progress, sessions });
}

/**
 * Recompute all derived progress fields from the sessions array.
 * Single source of truth for counters, phase, and the emergent portfolio.
 */
export function recompute(progress) {
  const sessions = progress.sessions;
  const sessionsCompleted = sessions.filter(
    (s) => s.status === "completed"
  ).length;

  const portfolioEmergent = buildPortfolioEmergent(sessions);

  // Current phase = phase of the first non-completed session, else last phase.
  const firstOpen = sessions.find((s) => s.status !== "completed");
  const currentPhase = firstOpen
    ? getSessionMeta(firstOpen.session_id)?.phase || ""
    : getSessionMeta(sessions[sessions.length - 1].session_id)?.phase || "";

  // Keep badges_awarded consistent with completed sessions.
  const badgesAwarded = sessions
    .filter((s) => s.status === "completed")
    .map((s) => getBadgeForSession(s.session_id)?.badge_id)
    .filter(Boolean);

  return {
    ...progress,
    progress: {
      ...progress.progress,
      sessions_completed: sessionsCompleted,
      badges_awarded: badgesAwarded,
      portfolio_entries_completed: portfolioEmergent.entries_completed,
      current_phase: currentPhase,
      last_updated: nowISO(),
    },
    portfolio_emergent: portfolioEmergent,
  };
}

/**
 * Find the next mission to work on (first non-completed).
 */
export function getNextSession(progress) {
  return (
    progress.sessions.find((s) => s.status !== "completed") || null
  );
}
