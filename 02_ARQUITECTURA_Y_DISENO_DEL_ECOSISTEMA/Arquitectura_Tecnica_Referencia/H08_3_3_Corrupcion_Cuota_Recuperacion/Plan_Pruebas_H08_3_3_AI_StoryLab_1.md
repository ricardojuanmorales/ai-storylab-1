# Plan de pruebas · H08-3.3

## Fault injection de escritura

Inyectar fallos antes, durante y después de:

1. staging;
2. readback de staging;
3. snapshot definitivo;
4. readback del snapshot;
5. actualización de índice;
6. actualización de recent;
7. limpieza de staging.

Para cada punto comprobar:

- último snapshot válido intacto;
- ausencia de proyecto parcial visible;
- error tipado;
- reintento idempotente;
- residuos esperados y recuperables.

## Cuota

- cuota en staging;
- cuota en snapshot;
- cuota en índice;
- cuota en recent;
- cuota durante limpieza;
- recuperación después de liberar espacio;
- ningún borrado automático.

## Corrupción y compatibilidad

- JSON corrupto;
- envelope inválido;
- checksum inválido;
- payload inválido;
- versión futura;
- staging inválido;
- clasificación metadata-only;
- preservación de fuente.

## Estados huérfanos

- recent sin snapshot;
- índice sin snapshot;
- snapshot sin índice;
- staging sin snapshot;
- múltiples staging válidos;
- mezcla de estados válidos e inválidos.

## Indisponibilidad

- `getItem` falla;
- `setItem` falla;
- `removeItem` falla;
- enumeración falla;
- recuperación después de restablecer storage.

## Regresión

- suite heredada verde;
- privacidad intacta;
- M1 intacta;
- sin UI nueva;
- sin dependencias;
- sin red;
- sin importación, roundtrip o descarga.


## Evidencia de ejecución local

```yaml
npm_verify: PASS
test_files: observed
tests: observed
fault_injection:
  staging: PASS
  snapshot: PASS
  index: PASS
  recent: PASS
  staging_cleanup: PASS
corruption:
  malformed_json: PASS
  integrity_mismatch: PASS
  future_version: PASS
metadata_repair:
  missing_index: PASS
  orphan_index_entry: PASS
  orphan_recent_pointer: PASS
```
