# H08-3 · Entrada para persistencia y schemas endurecidos

```yaml
baseline: 7c783aa4f55df0aeeec1e0ad7e65f58149d43e16
planned_branch: feat/v0.8-h08-3-persistence-schema-hardening
current_schema: 0.8.0-alpha.1
proposed_schema: 0.8.0-alpha.2
entry_gate: pending
implementation: blocked
```

## Propósito

Convertir la persistencia provisional de H08-2 en una base evolutiva,
recuperable y verificable para el resto de v0.8.0.

## Recomendación arquitectónica

Mantener `localStorage` durante H08-3, conservar `ProjectRepository` como
puerto, añadir envelope versionado, índice de proyectos, migración explícita
y recuperación de escrituras interrumpidas. IndexedDB se documenta como
alternativa futura, no como cambio automático.
