# Recuperación de rename y allowlist · candidate-suite R4

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

## Recuperación de allowlist

```yaml
previous_operator_failure: ALLOWLIST_MISMATCH
root_cause: RENAME_REPORTED_AS_DESTINATION_ONLY_BY_NAME_ONLY_VIEW
old_path: apps/storylab/src/adapters/storage/legacy-mvp-continuity.ts
new_path: apps/storylab/src/adapters/storage/mvp-v0-3-continuity.ts
rename_validation: git_diff_name_status_find_renames
architecture_and_verify_reexecuted: PASS
```

## Reconciliación de evidencia preservada R5

```yaml
previous_operator_failure: ALLOWLIST_MISMATCH
root_cause: PRIOR_R3_RECOVERY_REPORT_PRESERVED_BUT_NOT_LISTED
preserved_reports:
  - Recuperacion_Arquitectura_Candidate_Suite_R3.md
  - Recuperacion_Rename_Allowlist_Candidate_Suite_R4.md
deletion_of_prior_evidence: false
allowlist_model: CUMULATIVE_RECOVERY_EVIDENCE
architecture_and_verify_reexecuted: PASS
```
