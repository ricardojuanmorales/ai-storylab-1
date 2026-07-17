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
current_unit: H08-2.3
current_process: H08_2_M1_functional_cycle
current_branch: feat/v0.8-h08-2-consolidated-vertical-slice
current_PR: 59
PR_mode: consolidated_draft

baseline:
  main_sha: 9b941f185feb1e59f7a774ad07c976c415537dae
  H08_2_2_head: 203f52fec38afd35821a579d054b4b1fc2260e9b

schema_version: 0.8.0-alpha.1
test_files: 15
tests: 92
runtime_dependencies:
  - react
  - react-dom

architecture:
  domain: integrated
  ports: integrated
  application: functional_M1_engine
  adapters: in_memory_and_browser_composition
  presentation: M1_functional

experience:
  canonical_missions: 4
  functional_now:
    - M1_intention
  planned_H08_4:
    - M2_narrative_architecture
    - M3_multimodal_production
    - M4_curation_and_closure

persistence:
  current: ephemeral_in_memory
  durable: not_implemented

data:
  mode: synthetic_only
  real_data: prohibited

H08_2:
  lifecycle: M1_functional_cycle_active
  current_block: H08_2_3
  export_preview: not_started
```

## Flujo funcional H08-2.3

```text
perfil sintético
→ proyecto
→ M1 intención creadora
→ borrador editable
→ evidencia
→ reflexión privada opcional
→ decisión humana
→ portafolio reversible
→ reapertura
```

## Motor reutilizable

La misión se recibe como `MissionDefinition`. Las operaciones funcionales viven
en aplicación y la presentación recibe servicios inyectados desde `main.tsx`.

## Arco completo de v0.8.0

1. M1 · Intención creadora.
2. M2 · Arquitectura narrativa.
3. M3 · Producción multimodal.
4. M4 · Curaduría y cierre.

M2, M3 y M4 permanecen planificadas para H08-4. H08-2A no sustituye
`GATE-V08-CLOSE`.

## Límites

- sin persistencia durable;
- sin recuperación después de recargar;
- sin export preview;
- sin importación o roundtrip;
- sin datos reales;
- sin IA embebida;
- sin publicación automática.

## Documentación activa

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_3_M1_Motor_Creativo/`

## Regla de oro

```text
Crear no equivale a evidenciar.
Evidenciar no equivale a curar.
Curar requiere decisión humana.
```
