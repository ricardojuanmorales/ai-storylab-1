# 18_DOCUMENTACION_ACTIVA

## Función vigente

Este cartapacio conserva la memoria viva y la continuidad operativa de
AI StoryLab 1.

```yaml
current_version_line: v0.8.0
current_process: H08_3_0_gate_approved_waiting_H08_3_1_opening
effective_baseline: 7c783aa4f55df0aeeec1e0ad7e65f58149d43e16
current_branch: feat/v0.8-h08-3-persistence-schema-hardening

H08_2:
  lifecycle: fulfilled
  gate: approved

H08_3:
  H08_3_0: fulfilled
  H08_3_1: not_open
  implementation: blocked_until_explicit_H08_3_1_opening
  PR: 60
  PR_mode: consolidated_draft

fresh_branch_verification:
  npm_ci: PASS
  npm_verify: PASS
  test_files: 20
  tests: 123
  audits: PASS
  CI_after_first_commit: pending

GATE_H08_3_ENTRY:
  status: approved_with_reservations
  reservation:
    - RES-H08-3-ENTRY-CI-001
```

## Continuidad activa principal

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/Kit_Inicio_Continuidad_H08_3/`

## Decisiones ratificadas

- `localStorage` endurecido y reemplazable;
- schema objetivo `0.8.0-alpha.2`;
- migración explícita alpha.1 → alpha.2;
- rechazo seguro de versiones futuras y legacy v0.3;
- envelope, índice mínimo y escritura recuperable;
- soporte interno para múltiples proyectos;
- UI completa e IndexedDB diferidos;
- bloques H08-3 y checkpoint H08-3A.

## Restricción

La aprobación del gate no abre automáticamente H08-3.1. La implementación
permanece bloqueada hasta una instrucción humana separada.
