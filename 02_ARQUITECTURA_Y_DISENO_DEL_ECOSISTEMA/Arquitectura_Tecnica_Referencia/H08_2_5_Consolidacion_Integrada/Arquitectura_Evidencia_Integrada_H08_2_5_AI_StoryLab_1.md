# Arquitectura de evidencia integrada H08-2.5

## Brecha cerrada

Antes de H08-2.5:

```text
pruebas de presentación → InMemoryProjectRepository
pruebas de adaptador → LocalStorageProjectRepository
```

Después de H08-2.5:

```text
prueba integrada
→ App
→ StoryLabUseCases
→ LocalStorageProjectRepository
→ StorageLike sintético
```

La prueba integrada no reemplaza las suites unitarias. Verifica la costura
entre capas y reduce el riesgo de una vertical slice verde por fragmentos pero
rota como sistema.

## Auditoría de readiness

`audit-vertical-slice.mjs` verifica:

- archivos estructurales requeridos;
- cuatro misiones canónicas;
- una misión funcional;
- persistencia, recuperación y preview presentes;
- pruebas con adaptador real;
- señales de cuota, corrupción y privacidad;
- dependencias runtime sin expansión;
- importación, roundtrip, descarga y publicación ausentes.
