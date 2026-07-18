# Decisión de apertura · H08-2.5 Consolidación integrada

```yaml
decision_date: 2026-07-16
authority: responsable_humano_AI_StoryLab_1
source_instruction: "Adelante con H08-2.5"
PR: 59
entry_head: d14fc2382073dd4c32b9ba2ea83cc350f785d327
decision: authorize_non_expansive_integration_consolidation
status: authorized
```

## Motivo

H08-2.4 completó la funcionalidad prevista, pero la evidencia automatizada
probaba la interfaz, la aplicación y el adaptador local principalmente en
suites separadas. H08-2.5 cierra esa costura antes del checkpoint independiente.

## Alcance autorizado

- prueba integrada con `LocalStorageProjectRepository` real;
- recuperación después de remontar la aplicación;
- privacidad de export preview después de recuperar;
- corrupción, cuota y borrado en el recorrido integrado;
- auditoría automática de readiness para H08-2A;
- documentación y trazabilidad.

## Carácter del bloque

```yaml
new_product_capabilities: false
schema_changes: false
runtime_dependency_changes: false
persistence_policy_changes: false
roadmap_expansion: false
```

## No autorizado

- importación;
- roundtrip;
- descarga;
- migraciones;
- múltiples proyectos;
- M2, M3 o M4 funcionales;
- cambios de schema;
- red, nube o IA embebida.

## Consecuencia

H08-2.5 se inserta como bloque de consolidación no expansiva. H08-2A continúa
siendo el siguiente checkpoint y la única instancia autorizada para recomendar
el cierre de H08-2.
