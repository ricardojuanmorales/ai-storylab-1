# Decisión humana · CP-V09-1 y apertura de H09-2

```yaml
project: AI StoryLab 1
version: v0.9.0
decision_date: 2026-07-24
PR: 64
CP_V09_1:
  result: APPROVED_WITH_EXPLICIT_RESERVATIONS
  candidate_contract: ACCEPTED
  support_matrix: ACCEPTED
  node_22_24: ACCEPTED_FOR_CANDIDATE_VALIDATION
  node_25_26: NOT_CLAIMED
  browsers: TARGET_VALIDATION
  artifact: STATIC_DIST_ZIP_WITH_MANIFEST_AND_CHECKSUMS
  reproducibility: SEMANTIC_INITIAL_STANDARD
H09_2:
  opening: AUTHORIZED
  entry_head: 3b9eaaa4be38e3562d12f5526a916665e925ebb1
  candidate_suite_infrastructure: AUTHORIZED
  clean_environment_runs: AUTHORIZED
  commits: AUTHORIZED
  push: AUTHORIZED
  CI: AUTHORIZED
functional_repairs: BLOCKED_PENDING_SPECIFIC_HUMAN_AUTHORIZATION
workflow_changes: BLOCKED
H09_3: BLOCKED
Ready_for_Review: false
merge: false
GATE_V09_RC: NOT_AUTHORIZED
```

La aprobación del checkpoint ratifica el contrato y sus reservas. No afirma
soporte de Node 25/26, navegadores, Windows, reproducibilidad binaria ni
elegibilidad RC.

La apertura de H09-2 autoriza estabilizar y demostrar la suite existente. No
autoriza reparar automáticamente defectos que pudieran surgir.
