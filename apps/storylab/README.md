# AI StoryLab · Nueva raíz modular provisional

**Unidad vigente:** H08-1.4
**Schema:** `0.8.0-alpha.1`
**Estado:** esqueleto modular y adaptadores locales, sin vertical slice funcional

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

## Adaptadores provisionales

- `InMemoryProjectRepository`;
- `SystemClock`;
- `RandomUuidGenerator`.

No se selecciona persistencia durable. `localStorage`, IndexedDB, nube, backend,
autenticación, presentación e H08-2 permanecen fuera de alcance.
