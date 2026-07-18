# Mapa de alcance · H08-3.1

## Rutas funcionales elegibles

```text
apps/storylab/src/domain/model.ts
apps/storylab/src/domain/errors.ts
apps/storylab/src/schemas/schema-version.ts
apps/storylab/src/schemas/project.schema*.json
apps/storylab/src/schemas/runtime-validators.ts
apps/storylab/src/schemas/schema-registry.ts
apps/storylab/src/schemas/migrate-project.ts
apps/storylab/src/schemas/migrations/
apps/storylab/src/tests/
```

Las rutas nuevas son candidatas, no mandatos de estructura. La implementación
debe minimizar cambios y preservar las convenciones existentes.

## Rutas funcionales excluidas

```text
apps/storylab/src/adapters/storage/
apps/storylab/src/ports/project-repository.ts
apps/storylab/src/application/save-project.ts
apps/storylab/src/application/load-project.ts
apps/storylab/src/ui/
```

Solo se permite modificar una ruta excluida mediante una decisión de alcance
separada y documentada.

## Dependencias

- no añadir dependencias runtime;
- no modificar `package-lock.json`;
- reutilizar AJV y `structuredClone`;
- mantener datos sintéticos.
