# Informe diagnóstico · H08-6.4

```yaml
overall_status: PASS_WITH_ROUTED_MAINTENANCE
required_failures: 0
blocking_findings: 0
build_reproducible: true
lock_reproducible: true
source_tree_clean: true
verify_pass_1_seconds: 17
verify_pass_2_seconds: 16
build_repeat_1_seconds: 0
build_repeat_2_seconds: 0
dist_files: 3
dist_total_bytes: 483460
largest_asset: assets/index-Cu9NCcun.js
largest_asset_bytes: 467818
H08_6_4: OPEN_PENDING_HUMAN_DECISION
H08_6_5: CLOSED
repairs: NOT_AUTHORIZED
```

## Hallazgos

| ID | Dominio | Estado | Bloquea | Ruta |
|---|---|---|---|---|
| PERF_BASE_001 | performance | RESOLVED | NO | NONE |
| RESILIENCE_BASE_001 | resilience | PASS | NO | NONE |
| REPRO_BUILD_001 | reproducibility | PASS | NO | NONE |
| LOCK_REPRO_001 | reproducibility | PASS | NO | NONE |
| SEC_DEP_001 | dependency_security | VERIFIED_RESOLVED | NO | NONE |
| CI_ACTION_RUNTIME_001 | ci_maintenance | ROUTED_NON_BLOCKING | NO | H08-6.5 |

## Alcance ejecutado

- instalación reproducible mediante `npm ci`;
- auditoría de dependencias;
- dos ejecuciones integradas de `verify`;
- persistencia;
- recuperación de interfaz;
- integración local-first;
- operación offline;
- suite explícita de seguridad;
- dos builds limpios comparados byte por byte;
- verificación de inmutabilidad del lockfile;
- inventario de mantenimiento del runtime de GitHub Actions.

## Dictamen automático

El cierre solo puede ofrecerse si no existen fallos requeridos ni hallazgos
bloqueantes. Cualquier cierre sigue requiriendo una decisión humana explícita.
