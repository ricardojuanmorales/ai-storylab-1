
# Acta de Autorización de Inicio · H08-1.3

**Fecha:** 2026-07-15
**Baseline:** `5b04c711127d9dc3197b016289f10c457fd56576`
**Decisión:** `AUTHORIZED_TO_PREPARE_AND_OPEN_DRAFT_PR`

## Permitido

- tooling de desarrollo;
- compilación;
- pruebas;
- auditorías estáticas;
- workflow CI;
- correcciones de testabilidad sin cambio semántico.

## Prohibido

```yaml
functional_vertical_slice: prohibited
application: prohibited
adapters: prohibited
presentation: prohibited
persistence: deferred
real_data: prohibited
H08_2: blocked
merge: not_authorized
ready_for_review: not_authorized
```
