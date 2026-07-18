# Transferencia simétrica · H08-3.1 → H08-3.2

## Entrega

```yaml
commit: e42277138bab3d052c2b182de2394de5f2a18aee
schema_source: 0.8.0-alpha.1
schema_current: 0.8.0-alpha.2
migrator: available
source_validation: available
target_validation: available
local_tests: 132_PASS
remote_CI:
  Node_22: success
  Node_24: success
```

## Reserva transferida

`RES-H08-3.1-STORAGE-NAMESPACE-001` exige descubrir snapshots alpha.1 bajo el namespace raw,
migrarlos mediante copia, promoverlos a envelope v1 por escritura recuperable y
preservar la fuente original.

## Recepción

H08-3.2 recibe autorización para modificar persistencia, sus contratos mínimos
y sus pruebas. No recibe autorización para UI, importación, IndexedDB,
dependencias, corrupción general ni H08-3.3.
