/**
 * Final submission metadata.
 * IMPORTANT: the MP4 video is NEVER stored here. Only metadata + location.
 */
export function createDefaultFinalSubmission() {
  return {
    video_required: true,
    video_status: "pending", // pending | submitted | validated
    video_file_name: "",
    video_format: "mp4",
    video_duration_minutes: "",
    video_size_mb: "",
    submission_location: "",
    private_link: "",
    submitted_at: "",
    powerpoint_file_name: "",
    portfolio_file_name: "",
    json_export_file_name: "",
    ai_use_declaration_confirmed: false,
    credits_confirmed: false,
    privacy_review_confirmed: false,
    license: "",
    gallery_candidate_interest: false,
    public_author_option: false,
    facilitator_validation_status: "pending", // pending | approved | needs_changes
    notes: "",
  };
}

/**
 * Merge updates into the final_submission object immutably.
 * If marking as submitted, stamp submitted_at.
 */
export function updateFinalSubmission(current, updates) {
  const next = { ...current, ...updates };
  if (updates.video_status === "submitted" && !next.submitted_at) {
    next.submitted_at = new Date().toISOString();
  }
  return next;
}
