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
phase: V10_2_RESERVATION_DISPOSITION
active_hito: V10-2_AT_HUMAN_CLOSE_GATE
branch: feat/v1.0-release-readiness
PR: 65
PR_mode: single_consolidated_draft
baseline_main_head: 83cd5983ad3e66d43a442c090ce95f3bb22ee968
V10_0:
  activation_commit: 7486b9f1b67e9f00e2a1bfad0742c5b54c2d4b6e
  CI_run: 30133403038
  lifecycle: CLOSED_BY_HUMAN_DECISION
V10_1:
  commit: b36f0e9e39861022b540d7ca1129e5037f7db118
  CI_run: 30135561526
  lifecycle: CLOSED_BY_HUMAN_DECISION
V10_2:
  authorization: OPEN_AND_EXECUTE
  state: HUMAN_CLOSE_GATE
  commit: CONTAINING_COMMIT
  reservations_total: 8
  dispositions:
    resolved: 1
    accepted_limitation: 2
    not_claimed: 2
    deferred: 1
    blocking_for_release: 2
  blocking_reservations:
    - RSV-03
    - RSV-06
V10_3: BLOCKED_PENDING_HUMAN_DECISION
canonical_runtime: apps/storylab
browser_support: REQUIRES_V10_3_VALIDATION
Windows_support: NOT_CLAIMED
file_protocol_support: OUTSIDE_DECLARED_RUNTIME
manual_screen_reader_review: REQUIRES_V10_3
participant_usability: NOT_CLAIMED
cross_OS_binary_identity: NOT_CLAIMED
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
