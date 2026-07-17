# AI StoryLab 1

## Constructor ético de historias multimedia con IA responsable

AI StoryLab 1 es un ecosistema transdisciplinario de investigación-creación,
aprendizaje lúdico y producción multimedia asistida por inteligencia artificial
responsable.

> La persona conserva la agencia. La tecnología amplía posibilidades sin
> apropiarse del criterio creativo, pedagógico o ético.

## Estado actual

```yaml
version_line: v0.8.0
current_unit: H08-2.5
current_process: H08_2_integrated_consolidation
current_branch: feat/v0.8-h08-2-consolidated-vertical-slice
current_PR: 59
PR_mode: consolidated_draft

baseline:
  main_sha: 9b941f185feb1e59f7a774ad07c976c415537dae
  H08_2_4_head: d14fc2382073dd4c32b9ba2ea83cc350f785d327

schema_version: 0.8.0-alpha.1
test_files: 20
tests: 123
audits:
  - architecture
  - secrets
  - privacy
  - vertical_slice

runtime_dependencies:
  - react
  - react-dom

H08_2_5:
  classification: non_expansive_integration_consolidation
  new_product_capabilities: false
  schema_changes: false
  runtime_dependency_changes: false
  real_repository_integration_test: true
  next_checkpoint: H08_2A
```

## Propósito de H08-2.5

H08-2.4 completó la funcionalidad de la vertical slice. H08-2.5 demuestra que
las capas funcionan juntas usando el adaptador local real:

```text
App
→ StoryLabUseCases
→ dominio
→ LocalStorageProjectRepository
→ recuperación
→ export preview
→ borrado
```

## Evidencia integrada

La nueva suite verifica:

- escritura real de proyecto y puntero reciente;
- recuperación después de desmontar y remontar;
- M1 completada y curada;
- export preview posterior a recuperación;
- exclusión de reflexión privada;
- corrupción bloqueada y descartada;
- cuota comunicada sin escritura parcial;
- borrado de ambas claves;
- ausencia de importación, roundtrip y descarga.

## Auditoría de vertical slice

`audit-vertical-slice.mjs` comprueba automáticamente que:

- existen los objetos estructurales de H08-2;
- las cuatro misiones canónicas permanecen;
- solo M1 está funcional;
- la persistencia y la salida están presentes;
- la integración usa el adaptador real;
- las dependencias runtime no se expandieron;
- las capacidades diferidas continúan ausentes.

## Arco completo de v0.8.0

1. H08-2A · checkpoint independiente.
2. H08-3 · endurecimiento de persistencia y schemas.
3. H08-4 · M2, M3 y M4.
4. H08-5 · portafolio completo, importación y roundtrip.
5. H08-6 · estabilización.
6. `GATE-V08-CLOSE`.

## Límites

- sin cambios de producto en H08-2.5;
- sin cambios de schema;
- sin nuevas dependencias runtime;
- sin importación ni roundtrip;
- sin descarga automática;
- sin datos reales;
- sin nube, red o IA embebida.

## Documentación activa

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_5_Consolidacion_Integrada/`

## Regla de oro

```text
Verificar capas no basta.
La costura también debe probarse.
```
