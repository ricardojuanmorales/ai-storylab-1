# 18_DOCUMENTACION_ACTIVA

## Función vigente

Este cartapacio conserva la memoria viva y la continuidad operativa de AI
StoryLab 1.

```yaml
current_version_line: v0.8.0
current_process: H08_2_recovery_export_preview
effective_baseline: 9b941f185feb1e59f7a774ad07c976c415537dae
current_branch: feat/v0.8-h08-2-consolidated-vertical-slice
current_PR: 59
PR_mode: consolidated_draft

H08_2:
  lifecycle: recovery_export_preview_active
  current_block: H08_2_4
  canonical_missions: 4
  functional_missions: 1
  local_recovery: functional
  export_preview: functional
  import_roundtrip: not_started
  next_checkpoint: H08_2A
```

## Continuidad activa principal

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_4_Recuperacion_Export_Preview/`

## Evidencia requerida para cerrar H08-2.4

- ADR ratificado;
- claves versionadas;
- guardado local;
- recuperación tras recarga;
- JSON Schema e invariantes al cargar;
- corrupción bloqueada;
- cuota tipada;
- fallback en memoria;
- borrado en dos pasos;
- portafolio requerido para preview;
- reflexión privada excluida;
- ausencia de descarga, importación y red;
- build, auditorías y 117 pruebas;
- CI Node 22 y Node 24 verde.

## Próximo paso

Congelar el SHA de H08-2.4 y ejecutar H08-2A como checkpoint independiente. El
PR permanece Draft y el merge continúa prohibido.
