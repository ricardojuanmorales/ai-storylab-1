# Mapa de alcance · H08-3.3

## Dentro

- fault injection en staging, snapshot, índice y recent;
- cuota en cada escritura;
- storage indisponible en lectura y escritura;
- JSON, envelope, checksum y payload inválidos;
- versión futura;
- staging e índices huérfanos;
- snapshot válido sin índice;
- reparación metadata-only;
- cuarentena lógica;
- errores tipados y evidencia reproducible.

## Condicionado a autorización de implementación

- `apps/storylab/src/adapters/storage/**`;
- `apps/storylab/src/domain/errors.ts`;
- `apps/storylab/src/ports/**`, solo cambios mínimos;
- `apps/storylab/src/schemas/**`, solo contratos de persistencia;
- `apps/storylab/src/fixtures/**`;
- `apps/storylab/src/tests/**`;
- documentación y auditorías relacionadas.

## Fuera

- `apps/storylab/src/presentation/**`;
- expansión de `apps/storylab/src/application/**`;
- campos nuevos del payload creativo;
- red, nube, backend o telemetría;
- IndexedDB;
- dependencias runtime;
- importación, roundtrip o descarga;
- borrado recuperable mediante tombstones;
- H08-3.4 y H08-3A.
