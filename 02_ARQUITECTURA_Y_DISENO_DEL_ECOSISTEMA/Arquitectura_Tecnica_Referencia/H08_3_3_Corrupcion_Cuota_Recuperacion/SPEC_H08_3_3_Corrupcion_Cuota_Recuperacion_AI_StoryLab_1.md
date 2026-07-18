# SPEC · H08-3.3 Corrupción, cuota y recuperación

## Objetivo

Endurecer la persistencia local frente a corrupción, agotamiento de cuota,
storage indisponible e interrupciones, sin ampliar capacidades de producto.

## Invariantes

1. El último snapshot confirmado nunca se sobrescribe con datos inválidos.
2. Una fuente corrupta o no compatible se preserva hasta descarte explícito.
3. Ningún error de persistencia puede presentarse como guardado exitoso.
4. La recuperación automática opera solo sobre estados verificables.
5. Un payload requiere schema, integridad e invariantes válidas.
6. La cuota nunca provoca borrado automático de proyectos existentes.
7. La clasificación local no contiene payload ni datos sensibles.
8. Las reparaciones de índice se derivan únicamente de snapshots válidos.
9. Una versión futura compatible desconocida se rechaza sin mutación.
10. Los fallos son idempotentes: reintentar no amplifica el daño.

## Clases mínimas de fallo

- `storage_unavailable`;
- `quota_exceeded`;
- `malformed_json`;
- `invalid_envelope`;
- `integrity_mismatch`;
- `unsupported_future_version`;
- `invalid_payload`;
- `invalid_staging`;
- `orphan_recent_pointer`;
- `orphan_index_entry`;
- `snapshot_without_index`;
- `interrupted_write`.

## Resultados permitidos

- carga segura del último snapshot válido;
- roll-forward de staging válido;
- reconstrucción metadata-only del índice;
- limpieza de puntero huérfano;
- error tipado sin mutación;
- preservación de fuente para decisión humana.

## Resultados prohibidos

- aceptar payload inválido;
- reparar contenido creativo automáticamente;
- mover o borrar una fuente corrupta sin autorización;
- liberar cuota borrando proyectos;
- afirmar atomicidad o transacción;
- activar importación, descarga o nube.
