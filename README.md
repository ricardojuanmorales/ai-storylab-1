# AI StoryLab 1

## Constructor ético de historias multimedia con IA responsable

AI StoryLab 1 es un entorno transdisciplinario de investigación-creación,
aprendizaje lúdico y producción multimedia asistida por inteligencia
artificial responsable.

> La persona conserva la agencia. La tecnología amplía posibilidades sin
> apropiarse del criterio creativo, pedagógico o ético.

## Estado actual

```yaml
project_release_line: v1.0.0
project_version: 0.9.0-unreleased
phase: V10_5_VERSION_SCHEMA_ARTIFACT_POLICY
active_hito: V10-5_AT_HUMAN_CLOSE_GATE
branch: feat/v1.0-release-readiness
PR: 65
PR_mode: single_consolidated_draft
baseline_main_head: 83cd5983ad3e66d43a442c090ce95f3bb22ee968
V10_0:
  lifecycle: CLOSED_BY_HUMAN_DECISION
V10_1:
  lifecycle: CLOSED_BY_HUMAN_DECISION
V10_2:
  lifecycle: CLOSED_BY_HUMAN_DECISION
V10_3:
  lifecycle: CLOSED_BY_HUMAN_DECISION
V10_4:
  commit: 5cf66e862f0d414a3fdbe532d87c32e52ab75f91
  CI_run: 30212507055
  lifecycle: CLOSED_BY_HUMAN_DECISION
V10_5:
  authorization: OPEN_AND_EXECUTE
  state: HUMAN_CLOSE_GATE
  commit: CONTAINING_COMMIT
  artifact_gate: PASS
  release_candidate_pattern: 1.0.0-rc.N
  release_candidate_assigned: false
  stable_version_assigned: false
  schema_version: 0.8.0-alpha.2
  schema_changed: false
  source_commit: 5cf66e862f0d414a3fdbe532d87c32e52ab75f91
  application_tree: 2b64a7ecaae3b5c86cb465fd00a952e8f48d04bd
  policy_probe_artifact_sha256: 594a60d8f5b2a5b58b3c435d30b52cde2c7998ace8712f0b8363c7e0d15cbad5
  cross_OS_binary_identity: NOT_CLAIMED
V10_6: BLOCKED_PENDING_HUMAN_DECISION
artifact_publication: false
Ready_for_Review: false
merge: false
tag: false
RC: false
release: false
```

## Runtime canónico

La aplicación candidata está en `apps/storylab/`.

El `package.json` raíz conserva la línea histórica `0.3.0` y no forma parte del
artefacto candidato. Su versión no representa el runtime actual.

```bash
cd apps/storylab
npm ci --ignore-scripts
npm run dev
```

Verificación completa:

```bash
cd apps/storylab
AI_STORYLAB_SOURCE_COMMIT="$(git rev-parse HEAD)" npm run verify
```

## Arco creativo mínimo

1. **M1 · Intención creadora:** sentido, audiencia, premisa y límites.
2. **M2 · Arquitectura narrativa:** personajes, mundo, tensiones y estructura.
3. **M3 · Producción multimodal:** evidencias, transformaciones, autoría y contexto.
4. **M4 · Curaduría y cierre:** reflexión privada, selección, retiro, confirmación y exportación.

## Compromisos preservados

- operación local-first;
- datos sintéticos en validación;
- privacidad y reflexión privada;
- decisiones humanas explícitas y reversibles;
- importación como copia local;
- recuperación y roundtrip;
- accesibilidad transversal con reservas documentadas;
- cero backend, autenticación, nube o telemetría.

## Documentación de candidata

- [Guía de usuario](18_DOCUMENTACION_ACTIVA/Continuidad/v0_9_0/H09_6_Reconciliacion_Documental/Guia_Usuario_v0_9_0.md)
- [Guía técnica y de verificación](18_DOCUMENTACION_ACTIVA/Continuidad/v0_9_0/H09_6_Reconciliacion_Documental/Guia_Tecnica_y_Verificacion_v0_9_0.md)
- [Problemas conocidos](18_DOCUMENTACION_ACTIVA/Continuidad/v0_9_0/H09_6_Reconciliacion_Documental/Problemas_Conocidos_y_Limitaciones_v0_9_0.md)
- [Declaración de alcance v1.0.0](18_DOCUMENTACION_ACTIVA/Continuidad/v0_9_0/H09_6_Reconciliacion_Documental/Declaracion_Alcance_v1_0_0.md)
- [Registro primario de deuda](20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Primario_Deuda_Epistemologica_Pedagogica_v0_9_0_AI_StoryLab_1.csv)

## Fronteras

`v0.9.0-unreleased` queda formalmente cerrado como fase validada con
reservas explícitas. `GATE-V09-RC` pasó con reservas, pero no creó una RC,
no publicó el artefacto y no autorizó Ready for Review, merge, tag o release.
Cualquier movimiento posterior requiere una autorización humana nueva.
