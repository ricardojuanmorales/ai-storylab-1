import sessionsData from "../data/sessions.json";
import { createDefaultFinalSubmission } from "../utils/finalSubmission.js";

export const SCHEMA_VERSION = "0.3.0";
export const APP_VERSION = "0.3.0";

/**
 * Build a fresh session entry (one per workshop session).
 * Keeps the same field surface as the export schema so migration is trivial.
 */
function createSessionEntry(session) {
  return {
    session_id: session.session_id,
    title: session.title,
    status: "not_started", // not_started | in_progress | completed | pending_review
    evidence_summary: "",
    tool_used: "",
    prompt_used: "",
    human_decision: "",
    ethical_reflection: "",
    portfolio_completed: false,
    badge_awarded: false,
    ludic_output: {},
    updated_at: "",
  };
}

/**
 * Create the full default student progress object (schema v0.2.0).
 * Everything is local-first; no IDs come from a server.
 */
export function createDefaultProgress() {
  const now = new Date().toISOString();
  return {
    schema_version: SCHEMA_VERSION,
    export_type: "student_progress",
    exported_at: "",
    app: {
      name: "AI StoryLab",
      version: APP_VERSION,
    },
    profile: {
      student_code: "",
      display_name: "",
      grade: "",
      cohort: "",
      modality: "individual",
      team_name: "",
      teacher_name: "",
      facilitator_name: "",
      sponsor_name: "",
    },
    project: {
      project_id: `proj_${Math.random().toString(36).slice(2, 10)}`,
      title: "",
      theme: "",
      audience: "",
      educational_purpose: "",
      ethical_focus: "",
      avatar_name: "",
      final_status: "in_progress",
    },
    progress: {
      sessions_completed: 0,
      badges_awarded: [],
      portfolio_entries_completed: 0,
      current_phase: sessionsData.phases[0]?.id || "",
      last_updated: now,
    },
    sessions: sessionsData.sessions.map(createSessionEntry),
    portfolio_emergent: {
      status: "in_progress",
      entries_expected: 9,
      entries_completed: 0,
      completion_percentage: 0,
      last_entry_session: "",
      copy_ready_full_portfolio: "",
      sections: [],
    },
    portfolio: [],
    tool_usage: [],
    human_decisions: [],
    ethical_reflections: [],
    pre_post: {
      pre_completed: false,
      post_completed: false,
      pre_scores: {},
      post_scores: {},
    },
    final_submission: createDefaultFinalSubmission(),
  };
}
