# Plan de pruebas H08-4

## Pruebas de caracterización

- M1 conserva el ciclo existente;
- estados y errores públicos no cambian accidentalmente;
- persistencia H08-3 mantiene compatibilidad.

## Suites focalizadas propuestas

1. `domain.mission-catalog.test.ts`
2. `application.mission-engine.test.ts`
3. `application.mission-cardinality.test.ts`
4. `application.m2-cycle.test.ts`
5. `application.m3-cycle.test.ts`
6. `application.m4-cycle.test.ts`
7. `integration.complete-creative-arc.test.tsx`
8. `presentation.mission-navigation.test.tsx`
9. `integration.complete-arc-recovery.test.tsx`
10. `privacy.complete-arc.test.ts`
11. `accessibility.complete-arc.test.tsx`

Los nombres son candidatos y no obligan la estructura final.

## Ejes

- dominio y transiciones;
- regresión M1;
- M2, M3 y M4;
- navegación, regreso y reapertura;
- persistencia, corrupción y cuota;
- privacidad;
- accesibilidad;
- offline;
- límites H08-5.

## Verificación completa

```bash
cd apps/storylab
npm run verify
```

## Checkpoint H08-4A

Debe repetir suites focalizadas y `npm run verify` sobre un head funcional
congelado, sin modificar código funcional.

## Matriz mínima de cardinalidad

- M1, M2 y M4: crear dos veces actualiza el mismo registro;
- M3: crear dos veces sin `evidenceId` produce dos registros distintos;
- M3: actualizar con `evidenceId` cambia solo la evidencia seleccionada;
- cada evidencia mantiene una sola decisión vigente;
- cada misión mantiene cero o una reflexión;
- texto vacío elimina únicamente la reflexión de la misión objetivo;
- serialización y recuperación preservan las múltiples evidencias de M3.
