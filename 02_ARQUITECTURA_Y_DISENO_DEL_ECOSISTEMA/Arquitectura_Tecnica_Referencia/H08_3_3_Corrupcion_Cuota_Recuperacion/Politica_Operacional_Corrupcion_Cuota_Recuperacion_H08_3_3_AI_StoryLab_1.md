# Política operacional · Corrupción, cuota y recuperación

## Corrupción

- bloquear la carga del estado inválido;
- no sobrescribir ni borrar la fuente;
- conservar la clave original;
- devolver error tipado y mensaje seguro;
- registrar solo clasificación, clave técnica y fecha;
- excluir payload y contenido sensible de cualquier registro;
- diferenciar corrupción de versión futura no soportada.

## Cuarentena lógica

La cuarentena inicial es un estado lógico metadata-only. No mueve ni duplica el
payload. Una entrada puede registrar:

- identificador técnico o clave;
- clasificación;
- fecha de detección;
- acción permitida;
- estado de revisión humana.

La cuarentena no habilita reparación del contenido.

## Cuota

- devolver `quota_exceeded`;
- preservar el último snapshot confirmado;
- mantener el borrador en memoria cuando exista;
- no prometer exportación automática;
- no borrar proyectos existentes;
- requerir acción humana para liberar espacio;
- permitir reintento después de resolver la causa.

## Recuperación automática permitida

- roll-forward de staging íntegro y válido;
- reconstrucción de índice desde snapshot válido;
- eliminación de puntero recent huérfano;
- reinserción metadata-only de snapshot válido sin índice.

## Recuperación automática prohibida

- modificar payload corrupto;
- recalcular checksum para aceptar contenido alterado;
- degradar una versión futura;
- eliminar una fuente inválida;
- seleccionar arbitrariamente entre dos estados válidos conflictivos.

## Indisponibilidad

Cuando storage no responde:

- no afirmar que el guardado ocurrió;
- devolver error tipado;
- preservar el estado en memoria cuando sea posible;
- permitir reintento explícito;
- no activar red ni almacenamiento alterno.


## Decisiones congeladas para implementación

```yaml
error_surface:
  domain_code: backward_compatible
  classification: details.kind

quarantine:
  key: ai-storylab:storage:v1:quarantine
  storageFormat: ai-storylab-storage-quarantine
  storageFormatVersion: 1
  payload_copy: prohibited
  reviewState: pending_human_review
  source_action: preserve_source

automatic_repair:
  valid_staging: roll_forward
  missing_index: rebuild_metadata_only
  orphan_index_entry: remove_from_index_only
  orphan_recent_pointer: remove_pointer_only
  corrupt_payload: prohibited
  future_version: prohibited

conflict_policy:
  valid_snapshot_and_valid_staging: staged_roll_forward
  corrupt_snapshot_and_valid_staging: block_and_preserve_both

retry:
  idempotent: required
  automatic_deletion: prohibited
```
