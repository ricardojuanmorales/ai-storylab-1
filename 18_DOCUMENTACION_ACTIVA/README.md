# 18_DOCUMENTACION_ACTIVA

## Función vigente

Este cartapacio conserva la memoria viva y la continuidad operativa de
AI StoryLab 1.

```yaml
current_version_line: v0.8.0
current_process: H08_3_1_versionado_migracion_open
effective_baseline: 7c783aa4f55df0aeeec1e0ad7e65f58149d43e16
current_branch: feat/v0.8-h08-3-persistence-schema-hardening

H08_2:
  lifecycle: fulfilled
  gate: approved

H08_3:
  H08_3_0: fulfilled
  H08_3_1: open
  H08_3_2: not_open
  implementation: authorized_within_H08_3_1_scope
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

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_3_1_Versionado_Migracion/`

La evidencia de entrada permanece en
`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/Kit_Inicio_Continuidad_H08_3/`.

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

La implementación está autorizada únicamente dentro de H08-3.1: registro de
schemas, migración pura, validación, fixtures y pruebas. Persistencia, envelope,
índice, recovery y H08-3.2 permanecen cerrados.

## Cierre final H08-3

El cierre canónico de persistencia y schemas endurecidos está en:

`18_DOCUMENTACION_ACTIVA/Cierres_Sesion/H08_3_Cierre_Final_2026_07_18/README.md`

Estado: `H08_3_CLOSED_DOCUMENTALLY`, H08-3A con PASS humano, PR #60
todavía Draft y merge bloqueado.

## Cierre H08-4 · 2026-07-20

El cierre canónico del arco M1–M4 se conserva en:

`Cierres_Sesion/H08_4_Cierre_Final_2026_07_20/`

Estado:

```yaml
H08_4: CLOSED_DOCUMENTALLY
H08_4A: PASS_PUBLISHED
PR_61: DRAFT
ready_for_review: NOT_AUTHORIZED
merge: BLOCKED
H08_5: BLOCKED
```


## Cierre H08-5 · 2026-07-22

- estado: `CLOSED_DOCUMENTALLY`;
- PR: `#62 DRAFT`;
- checkpoint: `H08-5A PASS`;
- Ready, merge y H08-6: bloqueados;
- próxima lectura: atestación post-publicación H08-5.
