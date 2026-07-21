# Plan de Pruebas H08-5

## Unitarias

- proyección;
- privacidad;
- serialización;
- checksum;
- validación;
- errores;
- tamaño;
- compatibilidad;
- migración;
- comparación semántica.

## Contrato

- package schema;
- import result;
- export result;
- version registry;
- migration registry;
- repositorio;
- feature flags.

## Integración

- preview;
- confirmación;
- archivo local;
- importación válida;
- importación inválida sin mutación;
- roundtrip;
- recovery;
- regreso a M1–M4.

## Seguridad y privacidad

- JSON malformado;
- claves inesperadas;
- payload profundo;
- payload grande;
- versión futura;
- checksum incorrecto;
- reflexión privada ausente;
- cero red;
- cero telemetría.

## Accesibilidad

- teclado;
- foco;
- selector de archivo;
- mensajes;
- región de estado;
- confirmación;
- lenguaje comprensible.

## Gates

```yaml
per_internal_milestone:
  focused_tests: required
  typecheck: when_types_or_UI_change
  full_verify: at_agreed_close
  diff_review: required
  publication: human_gate

H08_5A:
  full_verify: required
  CI_Node_22: required
  CI_Node_24: required
  functional_changes: forbidden
```
