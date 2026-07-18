# H08-3.1 · Versionado y migración

Este bloque establece el pipeline mínimo y verificable para evolucionar un
`CreativeProject` desde `0.8.0-alpha.1` hacia `0.8.0-alpha.2`.

```yaml
block: H08_3_1
lifecycle: open
source_schema: 0.8.0-alpha.1
target_schema: 0.8.0-alpha.2
payload_delta: schema_version_only
persistence_write: prohibited
H08_3_2: not_open
```

## Principio

La migración transforma una copia, valida el resultado y nunca destruye ni
sobrescribe la fuente.

## Candidato local implementado

```yaml
implementation: implemented_locally_pending_review
targeted_tests: PASS
npm_verify: PASS
test_files: 21
tests: 132
H08_3_2: not_open
```

## Reserva de namespace · RES-H08-3.1-STORAGE-NAMESPACE-001

El cambio de versión efectiva mueve el namespace derivado de almacenamiento.
No destruye snapshots alpha.1, pero difiere su descubrimiento y migración a
H08-3.2. Esta reserva bloquea el merge, no la revisión del candidato H08-3.1.

## Transferencia a H08-3.2

```yaml
H08_3_1:
  lifecycle: fulfilled
  implementation_commit: e42277138bab3d052c2b182de2394de5f2a18aee

next_block:
  id: H08_3_2
  lifecycle: open

transferred_reservation:
  id: RES-H08-3.1-STORAGE-NAMESPACE-001
  status: open
```
