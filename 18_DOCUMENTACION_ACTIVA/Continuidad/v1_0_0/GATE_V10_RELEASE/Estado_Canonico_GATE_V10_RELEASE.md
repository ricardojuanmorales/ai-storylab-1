# Estado canónico · GATE-V10-RELEASE

```yaml
project: AI StoryLab 1
phase: v1.0.0
gate: GATE-V10-RELEASE
state: HUMAN_CLOSE_GATE
disposition: SEPARATE_RELEASE_AUTHORITIES_PREPARED
parent_commit: 2201cd183237ce8a5038c4eb2bd4f2f8360e9457
commit: CONTAINING_COMMIT
branch: feat/v1.0-release-readiness
PR: 65
PR_mode: DRAFT_SINGLE_CONSOLIDATED

candidate:
  version: 1.0.0-rc.1
  source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
  artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
  tag_reserved: v1.0.0-rc.1
  stable_version: NOT_ASSIGNED

evaluation:
  gate_result: PASS
  controls_total: 18
  controls_passed: 18
  controls_failed: 0
  blocking_findings: 0

authorities:
  Ready_for_Review: ELIGIBLE_FOR_SEPARATE_HUMAN_AUTHORIZATION_NOW
  merge: CONDITIONAL_AFTER_READY_FOR_REVIEW_AND_REVIEW_REQUIREMENTS
  tag: CONDITIONAL_AFTER_MERGE_AND_SOURCE_ANCESTRY_RECHECK
  publication: CONDITIONAL_AFTER_TAG_AND_FINAL_HASH_RECHECK

actions_executed:
  Ready_for_Review: false
  merge: false
  tag: false
  publication: false
  GitHub_Release: false

publication_hold: ACTIVE
functional_changes: false
dependency_changes: false
schema_changes: false
workflow_changes: false
PR_comment: PREPARE_AFTER_HUMAN_DECISION_FOR_MANUAL_PUBLICATION
```
