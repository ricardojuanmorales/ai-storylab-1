# AI StoryLab · M1 funcional

**Unidad vigente:** H08-2.3
**Schema:** `0.8.0-alpha.1`
**Estado:** primera vertical slice funcional sobre repositorio en memoria

## Capas

```text
presentation
→ application
→ domain + ports
→ adapters
```

La composición ocurre en `src/main.tsx`.

## Capacidades activas

- proyecto sintético;
- M1 configurable;
- borrador editable;
- evidencia textual;
- reflexión privada opcional;
- decisión humana;
- portafolio reversible;
- reapertura.

## Misiones canónicas

El catálogo contiene M1, M2, M3 y M4. Solamente M1 está conectada a la interfaz
en H08-2.3.

## Límites

Al recargar, el estado se pierde. No existe `localStorage`, importación,
roundtrip ni export preview.
