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
current_unit: H08-2.4
current_process: H08_2_recovery_export_preview
current_branch: feat/v0.8-h08-2-consolidated-vertical-slice
current_PR: 59
PR_mode: consolidated_draft

baseline:
  main_sha: 9b941f185feb1e59f7a774ad07c976c415537dae
  H08_2_3_head: c6aa6cb3e0dc5bf7b779c2ad024a8ec1d1f2566c

schema_version: 0.8.0-alpha.1
test_files: 19
tests: 117
runtime_dependencies:
  - react
  - react-dom
bundled_validation_dependencies:
  - ajv
  - ajv-formats

architecture:
  domain: integrated
  ports: recoverable_repository
  application: M1_recovery_export_preview
  adapters:
    - localStorage_provisional
    - in_memory_fallback
  presentation: recovery_and_preview

experience:
  canonical_missions: 4
  functional_now:
    - M1_intention
  planned_H08_4:
    - M2_narrative_architecture
    - M3_multimodal_production
    - M4_curation_and_closure

persistence:
  technology: localStorage
  status: provisional_ratified
  capacity: one_most_recent_project
  schema_validation_on_load: true
  invariant_validation_on_load: true
  fallback: in_memory
  real_data: prohibited

export_preview:
  status: functional
  portfolio_required: true
  private_reflections_excluded: true
  high_care_reflections_excluded: true
  automatic_download: false
  import_roundtrip: false

H08_2:
  lifecycle: recovery_export_preview_active
  current_block: H08_2_4
  next_checkpoint: H08_2A
```

## Vertical slice completa de H08-2

```text
perfil sintético
→ proyecto
→ M1 intención creadora
→ borrador editable
→ evidencia
→ reflexión privada opcional
→ decisión humana
→ portafolio reversible
→ guardado local
→ recuperación validada
→ export preview
```

## Persistencia local provisional

El proyecto reciente se guarda mediante `ProjectRepository`. Al cargar:

```text
JSON.parse
→ JSON Schema 2020-12
→ invariantes
→ CreativeProject
```

Los datos corruptos se bloquean y pueden descartarse explícitamente. Si el
navegador bloquea el almacenamiento local, la aplicación usa memoria y comunica
que la sesión es efímera.

## Export preview

La vista previa requiere portafolio, valida `ExportPackage` y excluye:

- reflexiones privadas;
- reflexiones de alto cuidado;
- reflexiones no seleccionadas.

Previsualizar no descarga, importa ni publica.

## Misiones canónicas de v0.8.0

1. M1 · Intención creadora.
2. M2 · Arquitectura narrativa.
3. M3 · Producción multimodal.
4. M4 · Curaduría y cierre.

H08-2A evalúa la primera vertical slice. No sustituye `GATE-V08-CLOSE`.

## Límites

- un proyecto reciente;
- sin importación ni roundtrip;
- sin migración legacy;
- sin M2, M3 o M4 funcionales;
- sin datos reales;
- sin nube;
- sin IA embebida;
- sin publicación automática.

## Documentación activa

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_4_Recuperacion_Export_Preview/`

## Regla de oro

```text
Guardar no implica confiar.
Cargar requiere validar.
Previsualizar no implica publicar.
```
