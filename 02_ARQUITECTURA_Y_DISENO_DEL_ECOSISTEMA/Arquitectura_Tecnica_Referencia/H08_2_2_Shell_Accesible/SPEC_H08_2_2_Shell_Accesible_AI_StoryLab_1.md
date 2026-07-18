# SPEC-H08-2.2-001 · Shell accesible

**Estado:** `IMPLEMENTATION_AUTHORIZED`
**Fecha:** 2026-07-16
**PR:** #59
**Head de entrada:** `a237b1882ad27e17480d51b524038d996793d6fa`

## Propósito

Crear la primera superficie visible de AI StoryLab 1 sin adelantar las reglas
del ciclo creativo.

## Capacidades

```yaml
required:
  - semantic_landmarks
  - skip_link
  - keyboard_reachability
  - visible_focus
  - high_contrast_preview
  - reduced_motion_preview
  - text_scale_preview
  - live_status
  - responsive_layout
  - offline_static_build

prohibited:
  - project_creation
  - mission_execution
  - evidence_creation
  - reflection_storage
  - portfolio_mutation
  - export_generation
  - durable_persistence
  - network_access
```

## Frontera SDD

La presentación puede importar contratos del dominio y la aplicación. No puede
importar adaptadores, manipular `CreativeProject` ni implementar reglas
creativas.

## Salida

El bloque sale cuando `npm run verify` y el build pasan, las pruebas de
presentación son verdes y CI Node 22/24 confirma el commit.
