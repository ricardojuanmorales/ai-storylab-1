# 18_DOCUMENTACION_ACTIVA

## Función vigente

Este cartapacio conserva la memoria viva y la continuidad operativa de AI
StoryLab 1.

```yaml
current_version_line: v0.8.0
current_process: H08_2_integrated_consolidation
effective_baseline: 9b941f185feb1e59f7a774ad07c976c415537dae
current_branch: feat/v0.8-h08-2-consolidated-vertical-slice
current_PR: 59
PR_mode: consolidated_draft

H08_2:
  current_block: H08_2_5
  classification: non_expansive
  product_scope: unchanged
  test_files: 20
  tests: 123
  vertical_slice_audit: enabled
  next_checkpoint: H08_2A
```

## Continuidad activa principal

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_5_Consolidacion_Integrada/`

## Evidencia requerida para cerrar H08-2.5

- prueba integrada con `LocalStorageProjectRepository`;
- recuperación después de remontar;
- ciclo de M1 recuperado;
- reflexión privada fuera del preview;
- corrupción real bloqueada;
- error de cuota visible;
- borrado de proyecto y puntero;
- ausencia de importación, roundtrip y descarga;
- auditoría de vertical slice;
- 20 archivos de prueba;
- 123 pruebas;
- CI Node 22 y Node 24 verde.

## Próximo paso

Congelar el SHA final y ejecutar H08-2A. El checkpoint debe evaluar, no añadir
funcionalidad. El PR permanece Draft.
