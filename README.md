# AI StoryLab 1

## Constructor ético de historias multimedia con IA responsable

AI StoryLab 1 es un ecosistema transdisciplinario de investigación-creación,
aprendizaje lúdico y producción multimedia asistida por inteligencia
artificial responsable.

> La persona conserva la agencia. La tecnología amplía posibilidades sin
> apropiarse del criterio creativo, pedagógico o ético.

## Estado actual

```yaml
version_line: v0.8.0
current_process: H08_3_0_gate_approved_waiting_H08_3_1_opening
baseline_main: 7c783aa4f55df0aeeec1e0ad7e65f58149d43e16
current_branch: feat/v0.8-h08-3-persistence-schema-hardening
current_PR: 60
PR_mode: consolidated_draft

H08_2:
  lifecycle: fulfilled
  gate: approved
  reservations: []

H08_3:
  title: Persistencia y schemas endurecidos
  H08_3_0: fulfilled
  H08_3_1: not_open
  entry_gate: approved_with_reservations
  implementation: blocked_until_explicit_H08_3_1_opening

GATE_H08_3_ENTRY:
  status: approved_with_reservations
  reservation:
    - RES-H08-3-ENTRY-CI-001
  human_decision_required: false

fresh_branch_verification:
  npm_ci: PASS
  npm_verify: PASS
  test_files: 20
  tests: 123
  typecheck: PASS
  vite_build: PASS
  architecture_audit: PASS
  secrets_audit: PASS
  privacy_audit: PASS
  vertical_slice_audit: PASS
  CI_after_first_commit: pending

inherited_verification:
  test_files: 20
  tests: 123
  typecheck: PASS
  build: PASS
  audits: PASS
  CI_Node_22: PASS
  CI_Node_24: PASS
```

## Propósito de H08-3

Endurecer la persistencia local y la evolución de datos sin ampliar todavía
el arco narrativo:

```text
schema alpha.1
→ política de versiones
→ migración explícita
→ envelope persistente
→ índice de proyectos
→ escritura recuperable
→ corrupción controlada
→ cuota segura
→ validación
```

## Regla de transición

El gate de entrada está aprobado con una reserva procedural de CI remoto.

H08-3.0 queda cerrado. Ningún cambio funcional en `apps/storylab` comienza
hasta una apertura humana explícita de H08-3.1.
