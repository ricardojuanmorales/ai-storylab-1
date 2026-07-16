# ADR-H08-2.1-002 · Persistencia local provisional

**Estado:** `PROPOSED_FOR_HUMAN_RATIFICATION`  
**Aplicación más temprana:** H08-2.4

## Contexto

H08-2 requiere recuperación local básica. El dominio y la aplicación ya
dependen de `ProjectRepository`, por lo que la tecnología concreta puede
permanecer detrás de un adaptador.

## Propuesta

```yaml
technology: localStorage
scope: synthetic_JSON_projects_only
access: ProjectRepository_adapter_only
schema_validation_on_load: required
network: prohibited
binary_content: prohibited
real_data: prohibited
migration: deferred
quota_strategy: typed_error_required
```

## Razones

- complejidad operacional mínima;
- funcionamiento offline;
- facilidad de reemplazo;
- suficiente para demostrar recuperación básica.

## Riesgos

- cuota pequeña;
- almacenamiento compartido por origen;
- ausencia de transacciones;
- exposición a scripts del mismo origen.

## Salvaguardas

- datos sintéticos solamente;
- validación antes de aceptar;
- claves versionadas;
- borrado explícito;
- ninguna reflexión privada en exportación automática;
- ADR separado para endurecimiento o migración.

Esta propuesta no instala ni usa `localStorage` durante H08-2.1.
