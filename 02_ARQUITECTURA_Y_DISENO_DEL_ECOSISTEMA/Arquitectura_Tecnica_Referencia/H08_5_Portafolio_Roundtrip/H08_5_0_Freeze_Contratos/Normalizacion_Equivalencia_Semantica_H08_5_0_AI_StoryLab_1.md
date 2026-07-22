# Normalización y equivalencia semántica H08-5.0

## Objetos comparados

```text
normalize(exportProjection.project)
==
normalize(recoveredImportedProject)
```

No se compara el proyecto original completo porque las reflexiones privadas
deben quedar fuera de la proyección exportada.

## Normalización

1. eliminar solamente `project.id`;
2. ordenar `missions` por `missionId`;
3. ordenar `activityResponses`, `evidence`, `reflections` y `decisions` por `id`;
4. ordenar `portfolio.items` por `order` y luego por `id`;
5. ordenar claves de objetos para la comparación;
6. preservar arrays cuyo orden sea semántico;
7. preservar exactamente todos los strings;
8. preservar timestamps internos, estados, decisiones, perfil y feature flags.

## Casos equivalentes

- cambia únicamente el identificador superior del proyecto;
- cambia `exportedAt` o el envelope exterior;
- las claves JSON aparecen en otro orden;
- colecciones sin orden semántico llegan en otro orden.

## Casos no equivalentes

- se pierde o cambia una evidencia;
- se altera el orden del portafolio;
- se modifica una decisión humana;
- aparece una reflexión privada;
- se pierde una preferencia de accesibilidad;
- cambia un timestamp interno;
- se habilita una feature flag diferida.

## Resultado

La comparación devuelve un resultado tipado, nunca un booleano desnudo:

```ts
type SemanticEquivalenceResult =
  | { readonly equivalent: true }
  | {
      readonly equivalent: false;
      readonly firstDifferencePath: string;
      readonly reason: string;
    };
```
