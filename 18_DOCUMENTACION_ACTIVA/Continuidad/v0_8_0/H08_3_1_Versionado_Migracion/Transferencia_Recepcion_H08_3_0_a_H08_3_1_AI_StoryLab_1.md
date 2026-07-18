# Transferencia de recepción · H08-3.0 → H08-3.1

## Fuente recibida

```yaml
source_block: H08_3_0
source_commit: 12ca182e99ad66515cf860d7cad876414d16ecf1
gate: approved_with_reservations
reservation:
  - RES-H08-3-ENTRY-CI-001
```

## Activos recibidos

- arquitectura ratificada;
- versión objetivo `0.8.0-alpha.2`;
- transición alpha.1 → alpha.2;
- política de futuras y legacy;
- criterios de pureza, determinismo e idempotencia;
- frontera explícita contra persistencia;
- PR Draft consolidado.

## Trabajo aceptado

- registro de schemas;
- schemas fuente y destino;
- migrador y orquestador;
- errores y validadores;
- fixtures y pruebas;
- evidencia CI.

## Trabajo no recibido

- envelope;
- índice;
- escritura recuperable;
- recuperación por corrupción o cuota;
- UI multiproyecto;
- IndexedDB.

H08-3.1 acepta esta transferencia sin abrir H08-3.2.
