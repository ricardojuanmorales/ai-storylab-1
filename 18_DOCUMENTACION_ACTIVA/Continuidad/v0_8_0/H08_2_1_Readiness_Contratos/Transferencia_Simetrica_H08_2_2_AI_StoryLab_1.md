# Transferencia simétrica H08-2.1 → H08-2.2

## Herencia obligatoria

- usar `CreativeCycleUseCases` como frontera;
- mantener `MissionDefinition` fuera de serialización hasta decisión específica;
- no duplicar reglas de dominio en React;
- conservar INV-009 e INV-010;
- mantener datos sintéticos;
- mantener privacidad de reflexión;
- preservar feature flags en `false`.

## Entrada de H08-2.2

- commit H08-2.1 en PR #59;
- `npm run verify` verde;
- PR Draft;
- ADR de presentación aceptado provisionalmente;
- ninguna dependencia de persistencia instalada.

## Pendiente antes de H08-2.4

Ratificar o rechazar ADR-H08-2.1-002 sobre `localStorage`.
