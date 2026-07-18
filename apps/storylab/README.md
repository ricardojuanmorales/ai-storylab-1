# AI StoryLab · Vertical slice consolidada

**Unidad vigente:** H08-2.5
**Schema:** `0.8.0-alpha.1`
**Clasificación:** consolidación integrada no expansiva

## Funcionalidad heredada

- proyecto sintético;
- M1 funcional;
- actividad editable;
- evidencia;
- reflexión privada opcional;
- decisión humana;
- portafolio reversible;
- recuperación local validada;
- borrado explícito;
- export preview.

## Evidencia nueva

`src/tests/integration.local-first.test.tsx` conecta:

```text
App
→ StoryLabUseCases
→ LocalStorageProjectRepository
→ StorageLike sintético
```

La suite demuestra recuperación, privacidad, corrupción, cuota y borrado sin
usar un repositorio en memoria como sustituto de la persistencia real.

## Readiness

```bash
npm run audit:vertical-slice
npm run test:integration
npm run verify
```

## Límites

H08-2.5 no modifica el producto. Importación, roundtrip, descarga, migraciones,
M2, M3 y M4 permanecen fuera de alcance.
