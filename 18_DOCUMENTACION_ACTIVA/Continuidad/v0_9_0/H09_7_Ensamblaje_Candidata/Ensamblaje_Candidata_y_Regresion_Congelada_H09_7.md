# Ensamblaje de candidata y regresión congelada · H09-7

## Identidad congelada

```yaml
candidate_source_head: 29585b7b692818243f59d9f0e3c0dc572597fd11
application_tree_git_object: 2b64a7ecaae3b5c86cb465fd00a952e8f48d04bd
application_tree_inventory_sha256: b57aa45ded48b59ed99cf0c287040c7720a78c60985eecd89bfd77204253fe2e
candidate_suite_sha256: 9e22d243b380ff8076b52de18e5a70221b22b2c2557819c1c5990faa050529db
package_lock_sha256: 364ff396ab46b84c6eabc1ddf41f076ee772fd338bf6fa4e999582a3ccac52f1
application_version: 0.9.0-unreleased
schema_current: 0.8.0-alpha.2
```

El head candidato corresponde al cierre aprobado de H09-6. H09-7 no modifica
`apps/storylab`.

## Regresión congelada

Dos checkouts independientes ejecutaron instalación bloqueada, typecheck,
build, auditorías, 49 archivos y 248 pruebas, además de dos empaquetados
internos por ejecución.

```yaml
runs: 2
test_inventory_equal: true
package_lock_equal: true
dist_manifest_equal: true
binary_artifact_equal: true
artifact_size_equal: true
artifact_entries_equal: true
local_artifact_sha256: 3287c93281d2ce73e11f41b785ca79f91b013869cc0a7caf091ff863ee67c6cf
```

## Artefacto ensamblado

```yaml
format: DETERMINISTIC_ZIP_STORE
publication_status: UNPUBLISHED_CANDIDATE_EVIDENCE
source_commit: 29585b7b692818243f59d9f0e3c0dc572597fd11
candidate_version: 0.9.0-unreleased
application_package_version: 0.9.0-unreleased
sha256: 3287c93281d2ce73e11f41b785ca79f91b013869cc0a7caf091ff863ee67c6cf
size_bytes: 486552
entries: 7
application_files: 3
internal_verification: PASS
```

## CI del head candidato

La CI `30114749454` verificó Node 22 y Node 24. Ambos jobs produjeron el
mismo hash Ubuntu:

`ac84f63d9f11dd3c076c96aaca874cb587218f40a11900bce176cbccbf9fb216`

El hash local puede diferir por sistema operativo. La identidad binaria
macOS/Ubuntu permanece no demostrada y visible.

## Regla de congelación

Después del ensamblaje, el commit documental de H09-7 solo puede añadir el
expediente de candidata. Cualquier cambio en `apps/storylab` invalida la
congelación y requiere clasificación humana.

## Disposición

La recomendación técnica es transferir el expediente a H09-A con reservas
explícitas. La transferencia no abre H09-A por inferencia.
