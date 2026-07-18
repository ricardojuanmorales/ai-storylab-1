# SPEC-H08-3.0-001 · Readiness de entrada

**Estado:** `GATE_PREPARATION`
**Baseline:** `7c783aa4f55df0aeeec1e0ad7e65f58149d43e16`
**Implementación autorizada:** no

## Objetivo

Definir un H08-3 programable y verificable antes de cambiar persistencia o
schemas.

## Alcance candidato

1. política de evolución de schema;
2. migración `0.8.0-alpha.1 → 0.8.0-alpha.2`;
3. rechazo seguro de versiones futuras;
4. rechazo controlado de legacy v0.3;
5. envelope persistente;
6. índice local de proyectos;
7. escritura recuperable por etapas;
8. recuperación de estado interrumpido;
9. corrupción, cuota y limpieza;
10. pruebas unitarias, contractuales e integradas.

## No alcance

- UI completa para administrar proyectos;
- M2, M3 y M4;
- importación y roundtrip;
- descarga;
- archivos binarios;
- IndexedDB implementado;
- backend, nube o sincronización;
- datos reales;
- migración automática de v0.3.
