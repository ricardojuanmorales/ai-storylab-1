# Enmienda al registro de gates · GATE-H08-3-ENTRY

```yaml
gate_id: GATE-H08-3-ENTRY
phase: H08-3
date: 2026-07-18
PR: 60
baseline: 7c783aa4f55df0aeeec1e0ad7e65f58149d43e16
entry_commit: 6acb252af57ffdf5c585ae8540ddd5c18b9c1d43

status: approved_with_reservations
lifecycle: fulfilled
authority: repository_owner_and_responsible_human

evidence:
  - Instrumento_GATE_H08_3_ENTRY_AI_StoryLab_1.md
  - Dictamen_Readiness_GATE_H08_3_ENTRY_AI_StoryLab_1.md
  - Decision_Humana_GATE_H08_3_ENTRY_APROBADA_CON_RESERVA_PR60_AI_StoryLab_1.md
  - npm verify PASS
  - 20 test files
  - 123 tests

reservation:
  id: RES-H08-3-ENTRY-CI-001
  disposition: verify_on_first_workflow_activating_commit

allowed_result:
  - close_H08_3_0
  - prepare_H08_3_1_opening_decision

not_automatic:
  - open_H08_3_1
  - schema_changes
  - migration_implementation
  - persistence_adapter_changes
```
