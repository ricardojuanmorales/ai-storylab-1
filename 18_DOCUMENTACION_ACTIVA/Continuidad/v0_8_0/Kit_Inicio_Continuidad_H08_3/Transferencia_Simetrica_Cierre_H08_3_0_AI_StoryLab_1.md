# Transferencia simétrica · Cierre H08-3.0

## Estado entregado

```yaml
date: 2026-07-18
PR: 60
entry_commit: 6acb252af57ffdf5c585ae8540ddd5c18b9c1d43

H08_3_0:
  lifecycle: fulfilled
  purpose: gate_and_contracts

GATE_H08_3_ENTRY:
  status: approved_with_reservations

reservation:
  id: RES-H08-3-ENTRY-CI-001
  requirement: confirmar CI Node 22 y Node 24 en el primer commit que active workflows

H08_3_1:
  lifecycle: not_open
  implementation: blocked_until_explicit_human_opening
```

## Decisiones transferidas

- `localStorage` endurecido detrás de `ProjectRepository`;
- schema objetivo `0.8.0-alpha.2`;
- migración exclusiva alpha.1 → alpha.2;
- versiones futuras rechazadas de forma segura;
- legacy v0.3 rechazado con error explícito;
- envelope versionado;
- índice limitado a metadatos;
- escritura por staging recuperable;
- checksum limitado a daño accidental;
- soporte interno para múltiples proyectos;
- UI completa diferida.

## Regla de recepción

El bloque siguiente debe recibir explícitamente esta transferencia y declarar
su apertura. Este documento no autoriza cambios funcionales por sí solo.
