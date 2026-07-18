# Plan de pruebas · H08-3.1

## Fixtures sintéticos

1. alpha.1 mínimo válido;
2. alpha.1 completo con actividad, evidencia, reflexión, decisión y portafolio;
3. alpha.2 actual válido;
4. alpha.1 con campo obligatorio ausente;
5. alpha.1 con invariante rota;
6. versión futura sintética;
7. legacy v0.3 sintético;
8. versión desconocida no legacy.

## Pruebas unitarias

- registro identifica versión actual;
- registro identifica versión previa soportada;
- registro rechaza versión futura;
- registro no confunde legacy;
- migrador devuelve objeto nuevo;
- migrador no muta fuente ni colecciones anidadas;
- migrador cambia solo `schemaVersion`;
- ejecuciones repetidas producen el mismo resultado;
- orquestador sobre alpha.2 es no-op semántico mediante copia;
- fuente inválida no produce destino;
- destino se valida con JSON Schema e invariantes.

## Pruebas de integración acotadas

- `createProject` produce alpha.2 después del cambio efectivo;
- validadores aceptan alpha.2;
- schema alpha.1 permanece disponible solo como fuente histórica;
- exportación y pruebas heredadas se actualizan sin ampliar capacidades;
- ningún repositorio persistente es requerido por el pipeline.

## Auditorías negativas

- sin cambios a adaptadores de storage;
- sin envelope;
- sin índice;
- sin staging;
- sin red;
- sin datos reales;
- sin dependencias runtime nuevas;
- sin importación habilitada.
