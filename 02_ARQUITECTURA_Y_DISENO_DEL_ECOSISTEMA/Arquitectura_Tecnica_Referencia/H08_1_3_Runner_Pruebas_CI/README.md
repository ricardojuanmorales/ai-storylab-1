
# H08-1.3 · Runner, Pruebas y CI

**Fecha:** 2026-07-15
**Baseline:** `5b04c711127d9dc3197b016289f10c457fd56576`
**Schema:** `0.8.0-alpha.1`
**Estado:** `PROPOSED_AWAITING_HUMAN_REVIEW`

## Propósito

Convertir los contratos de H08-1.2 en evidencia ejecutable y reproducible sin
implementar todavía aplicación, adaptadores, presentación o flujo H08-2.

## Entregables

- compilación TypeScript estricta;
- validación JSON Schema Draft 2020-12;
- pruebas de invariantes;
- pruebas de paridad TypeScript–JSON Schema;
- guardia de red y prueba offline;
- auditoría de dependencias arquitectónicas;
- auditoría de secretos;
- lockfile reproducible;
- CI mínimo en Node 22 y Node 24;
- continuidad hacia H08-1.4.

## Límite

```yaml
functional_vertical_slice: false
application_layer: absent
adapters: absent
presentation: absent
persistence_technology: deferred
real_data: prohibited
H08_2: blocked
```
