# Plan de pruebas · H08-3

## Contratos y schemas

- versión actual válida;
- alpha.1 migrable;
- versión futura rechazada;
- legacy v0.3 rechazado;
- campos inesperados;
- invariantes después de migrar.

## Persistencia

- escritura nominal;
- interrupción en cada etapa;
- rollback y recuperación;
- staging huérfano;
- índice huérfano;
- snapshot sin índice;
- múltiples proyectos en repositorio;
- recent consistente;
- borrado sin residuos.

## Fallos

- cuota en staging;
- cuota en snapshot;
- cuota en índice;
- JSON corrupto;
- envelope corrupto;
- checksum inválido;
- storage indisponible.

## Integración

- proyecto H08-2 alpha.1 recuperado y migrado;
- M1 permanece intacta;
- privacidad permanece intacta;
- UI no activa capacidades nuevas;
- suite heredada continúa verde.
