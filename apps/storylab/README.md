# AI StoryLab · Nueva raíz modular provisional

**Unidad vigente:** H08-2.1
**Schema:** `0.8.0-alpha.1`
**Estado:** readiness de contratos, sin vertical slice funcional

## Capas presentes

```text
src/
  domain/
  ports/
  application/
  adapters/
  schemas/
  fixtures/
  tests/
```

## Dirección autorizada

```text
application → domain
application → ports
adapters → domain
adapters → ports
domain ↛ application/adapters
ports ↛ application/adapters
```

## Contratos preparados en H08-2.1

- `MissionDefinition`, todavía no serializado en `CreativeProject`;
- `CreativeCycleUseCases`;
- inputs tipados para misión, actividad, evidencia, reflexión, decisión,
  portafolio y export preview;
- pruebas nominales de INV-009 e INV-010.

## Adaptadores provisionales existentes

- `InMemoryProjectRepository`;
- `SystemClock`;
- `RandomUuidGenerator`.

No existe capa `presentation`. React, Vite y `localStorage` no se incorporan en
este bloque. No se selecciona persistencia concreta hasta la decisión
correspondiente.
