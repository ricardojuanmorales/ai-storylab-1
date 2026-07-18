# ADR-H08-2.1-002 · Persistencia local provisional

**Estado:** `ACCEPTED_FOR_H08_2_4`
**Ratificación humana:** 2026-07-16
**Aplicación:** H08-2.4

## Contexto

H08-2 requiere recuperación local básica. El dominio y la aplicación dependen
de `ProjectRepository`, por lo que la tecnología concreta permanece detrás de
un adaptador reemplazable.

## Decisión ratificada

```yaml
technology: localStorage
scope: synthetic_JSON_projects_only
project_capacity: one_most_recent_project
access: ProjectRepository_adapter_only
schema_validation_on_load: required
domain_invariants_on_load: required
network: prohibited
binary_content: prohibited
real_data: prohibited
migration: deferred
quota_strategy: typed_error_required
corruption_strategy: block_and_explicit_discard
delete_strategy: explicit_two_step_action
```

## Razones

- complejidad operacional mínima;
- funcionamiento offline;
- facilidad de reemplazo;
- suficiente para demostrar recuperación básica;
- alineación con la vertical slice de H08-2.

## Riesgos aceptados

- cuota pequeña;
- almacenamiento compartido por origen;
- ausencia de transacciones;
- exposición a scripts del mismo origen;
- soporte limitado a un proyecto reciente.

## Salvaguardas

- datos sintéticos solamente;
- claves versionadas;
- JSON Schema y invariantes antes de aceptar datos;
- errores tipados de cuota, corrupción e indisponibilidad;
- borrado explícito;
- fallback en memoria cuando el navegador bloquea storage;
- ninguna reflexión privada o de alto cuidado en export preview;
- ADR separado para endurecimiento, migración o almacenamiento alternativo.

## Consecuencia

H08-2.4 puede utilizar `localStorage` únicamente desde el composition root y el
adaptador autorizado. H08-3 deberá endurecer persistencia, políticas de schema
y evolución de datos. Esta decisión no autoriza importación ni roundtrip.
