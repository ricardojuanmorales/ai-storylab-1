# SPEC-H08-2.3-001 · M1 y motor creativo reutilizable

**Estado:** `IMPLEMENTATION_AUTHORIZED`
**Fecha:** 2026-07-16
**PR:** #59
**Head de entrada:** `203f52fec38afd35821a579d054b4b1fc2260e9b`

## Propósito

Implementar la primera vertical slice funcional completa sobre almacenamiento
en memoria:

```text
perfil sintético
→ proyecto
→ M1 intención creadora
→ actividad textual editable
→ evidencia
→ reflexión privada opcional
→ decisión humana
→ portafolio reversible
```

## Reutilización

El motor no codifica M1 como una excepción. Recibe `MissionDefinition` y opera
sobre `MissionProgress`, `ActivityResponse`, `Evidence`, `Reflection`,
`HumanDecision` y `PortfolioItem`.

## Iteración

M1 puede reabrirse. La reapertura:

- conserva actividad, evidencia y reflexión;
- retira decisiones y curaduría vigentes;
- devuelve la misión a un estado editable;
- requiere una nueva decisión humana antes de volver al portafolio.

## No alcance

- persistencia durable;
- recuperación después de recargar;
- export preview;
- M2, M3 y M4 funcionales;
- importación o roundtrip;
- datos reales;
- IA embebida.
