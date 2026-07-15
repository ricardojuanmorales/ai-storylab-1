# AI StoryLab · Nueva raíz modular provisional

**Unidad de origen:** H08-1.2
**Schema:** `0.8.0-alpha.1`
**Estado:** contratos y schemas, sin flujo funcional

## Capas presentes

```text
src/
  domain/
  ports/
  schemas/
  fixtures/
  tests/
```

## Capas todavía ausentes

- `application/`;
- `adapters/`;
- `presentation/`;
- persistencia concreta;
- runner y CI;
- flujo H08-2.

La ausencia es intencional. H08-1.3 añadirá runner, pruebas y CI; H08-1.4 añadirá
esqueleto modular y adaptadores.
