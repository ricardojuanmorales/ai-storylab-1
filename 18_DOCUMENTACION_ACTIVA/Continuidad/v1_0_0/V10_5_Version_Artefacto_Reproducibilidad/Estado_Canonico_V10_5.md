# Estado canónico · V10-5

```yaml
project: AI StoryLab 1
phase: v1.0.0
hito: V10-5
state: HUMAN_CLOSE_GATE
disposition: VERSION_AND_ARTIFACT_CONTRACT_DEFINED
parent_commit: 5cf66e862f0d414a3fdbe532d87c32e52ab75f91
commit: CONTAINING_COMMIT
branch: feat/v1.0-release-readiness
PR: 65
PR_mode: DRAFT_SINGLE_CONSOLIDATED
V10_4_CI_run: 30212507055

artifact_gate: PASS
blocking_findings: 0
blocking_reasons: []

version:
  release_line: v1.0.0
  current_application: 0.9.0-unreleased
  RC_pattern: 1.0.0-rc.N
  RC_assigned: false
  stable_assigned: false

schema:
  current: 0.8.0-alpha.2
  independent: true
  changed: false

identity:
  source_commit: 5cf66e862f0d414a3fdbe532d87c32e52ab75f91
  application_tree: 2b64a7ecaae3b5c86cb465fd00a952e8f48d04bd
  package_lock_sha256: 364ff396ab46b84c6eabc1ddf41f076ee772fd338bf6fa4e999582a3ccac52f1
  policy_probe_artifact_sha256: 594a60d8f5b2a5b58b3c435d30b52cde2c7998ace8712f0b8363c7e0d15cbad5

reproducibility:
  scope: SAME_SOURCE_SAME_LOCAL_ENVIRONMENT
  clean_builds: PASS
  dist_identity: PASS
  artifact_identity: PASS
  cross_OS_binary_identity: NOT_CLAIMED

attestation:
  internal_JSON: RECORDED
  cryptographic_signature: NOT_CLAIMED
  external_certification: false

metadata_alignment_for_V10_6: REQUIRED
functional_changes: false
dependency_changes: false
schema_changes: false
workflow_changes: false
artifact_publication: false
Ready_for_Review: false
merge: false
tag: false
RC: false
release: false
V10_6: BLOCKED_PENDING_HUMAN_DECISION
PR_comment: PREPARE_AFTER_HUMAN_DECISION_FOR_MANUAL_PUBLICATION
```
