# 18_DOCUMENTACION_ACTIVA

## Función vigente

Este cartapacio conserva la memoria viva y la continuidad operativa de
AI StoryLab 1.

```yaml
current_version_line: v0.8.0
current_process: H08_3_entry_gate_preparation
effective_baseline: 7c783aa4f55df0aeeec1e0ad7e65f58149d43e16
current_branch: feat/v0.8-h08-3-persistence-schema-hardening

H08_2:
  lifecycle: fulfilled
  gate: approved

H08_3:
  current_block: H08_3_0
  classification: entry_readiness_only
  implementation: blocked
  proposed_PR_mode: consolidated_draft

fresh_branch_verification:
  npm_ci: PASS
  npm_verify: PASS
  test_files: 20
  tests: 123
  audits: PASS
  CI_after_first_commit: pending

GATE_H08_3_ENTRY:
  status: pending_human_decision
```

## Continuidad activa principal

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/Kit_Inicio_Continuidad_H08_3/`

## Decisiones pendientes

- tecnología de almacenamiento para H08-3;
- versión objetivo del schema;
- política de migración;
- envelope e integridad;
- estrategia de atomicidad;
- índice de proyectos;
- tratamiento de datos futuros y legacy;
- bloques y checkpoint de H08-3.

## Restricción

H08-3 permanece sin implementación hasta aprobar su gate de entrada.
