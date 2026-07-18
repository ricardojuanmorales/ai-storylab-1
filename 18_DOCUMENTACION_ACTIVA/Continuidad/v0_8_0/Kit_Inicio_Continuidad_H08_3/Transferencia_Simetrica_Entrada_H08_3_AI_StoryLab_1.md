# Transferencia simétrica · Baseline H08-2 → Gate H08-3

## Fuente

```yaml
main: 7c783aa4f55df0aeeec1e0ad7e65f58149d43e16
H08_2: fulfilled
GATE_H08_2_EXIT: approved
reservations: []
```

## Activos

- `CreativeProject` schema `0.8.0-alpha.1`;
- `ProjectRepository`;
- `RecoverableProjectRepository`;
- `LocalStorageProjectRepository`;
- claves versionadas;
- validación runtime;
- recuperación de proyecto reciente;
- rollback de mejor esfuerzo;
- errores de cuota y corrupción;
- 20 archivos de prueba y 123 pruebas.

## Deuda transferida

- ausencia de migración;
- ausencia de transacciones;
- un solo proyecto reciente;
- índice inexistente;
- rollback de mejor esfuerzo;
- versión futura sin pipeline evolutivo;
- decisión futura sobre IndexedDB.

`GATE-H08-3-ENTRY` recibe esta transferencia. H08-3 no comienza hasta la
decisión humana.
