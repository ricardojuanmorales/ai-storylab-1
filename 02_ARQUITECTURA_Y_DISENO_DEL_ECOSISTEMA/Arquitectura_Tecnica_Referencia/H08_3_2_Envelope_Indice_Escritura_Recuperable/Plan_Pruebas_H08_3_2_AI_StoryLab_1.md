# Plan de pruebas · H08-3.2

## Contratos

- envelope nominal;
- constantes de formato desconocidas;
- `projectId` divergente;
- `projectSchemaVersion` divergente;
- digest correcto e incorrecto;
- serialización canónica determinista;
- índice sin campos privados;
- recent consistente.

## Escritura

- secuencia nominal completa;
- staging leído después de escribir;
- snapshot promovido solo tras verificación;
- índice actualizado después del snapshot;
- recent actualizado después del índice;
- staging retirado al final;
- el orden observable no se presenta como transacción.

## Recuperación

- staging válido sin snapshot;
- staging válido con snapshot anterior;
- múltiples staging en orden determinista;
- staging inválido preservado;
- snapshot final nunca parcial.

## Compatibilidad

- envelope v1 actual;
- raw alpha.2 válido promovido;
- raw alpha.1 válido migrado y promovido;
- fuente raw preservada;
- versión futura rechazada;
- legacy v0.3 continúa rechazado.

## Índice

- crear, actualizar y eliminar entrada;
- varios proyectos;
- título actualizado;
- recent existente;
- recent huérfano degradado con seguridad;
- ausencia de reflexiones, evidencia y payload.

## Regresión

- pruebas H08-3.1;
- pruebas del adaptador existente;
- integración local-first;
- `npm run verify`;
- CI Node 22 y Node 24.

La inyección sistemática de fallos de cuota o de cada instrucción pertenece a
H08-3.3. H08-3.2 puede construir estados sintéticos interrumpidos directamente.

## Contrato de puntero reciente

- índice sin `recentProjectId`;
- puntero reciente versionado en clave separada;
- precedencia v1 → raw alpha.2 → raw alpha.1;
- v1 ausente permite fallback;
- v1 huérfano se degrada con seguridad;
- v1 malformado produce error tipado;
- claves raw exactas para alpha.1 y alpha.2.

## Enumeración de staging

- `StorageLike.length`;
- `StorageLike.key(index)`;
- ignorar claves ajenas;
- filtrar únicamente `storage:v1:staging:`;
- ordenar lexicográficamente;
- no modificar claves durante la fase de enumeración.
