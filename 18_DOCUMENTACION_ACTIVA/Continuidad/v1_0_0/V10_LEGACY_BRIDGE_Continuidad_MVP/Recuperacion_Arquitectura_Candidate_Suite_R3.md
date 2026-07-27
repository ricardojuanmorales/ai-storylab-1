# Recuperación arquitectónica · candidate-suite R3

## Incidente encadenado

```yaml
parent_commit: 63285e3b21228dffba6008eb7daf7be769f42863
failed_baseline_run: 30228489563
Pages_validation_run: 30228489562
Pages_validation_status: PASS
test_inventory:
  files: 51
  tests: 252
  sha256: c4b7e63a06e5f98464a6daed7daa1756f915d449f1c748f87cf9819c196586d7
```

Después de sincronizar el inventario, `verify-candidate` alcanzó
`audit:architecture` y detectó dos límites:

1. presentación importaba un tipo desde `adapters`;
2. una ruta de importación contenía el marcador reservado `legacy`.

## Corrección

```yaml
shared_contract_layer: ports
browser_storage_inspection_layer: adapters
adapter_path: src/adapters/storage/mvp-v0-3-continuity.ts
contract_path: src/ports/mvp-continuity.ts
behavior_changed: false
storage_keys_changed: false
dependencies_changed: false
schemas_changed: false
deployment_performed: false
```

La interfaz continúa recibiendo el mismo resumen. El cambio realinea las
dependencias sin alterar lectura, respaldo, snapshot, rutas ni contenido local.
