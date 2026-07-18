
# Registro de reservas y deuda H08-3A

## Reservas bloqueantes

Ninguna identificada por la revisión automatizada.

## Deuda procedural no bloqueante

### DEBT-H08-3A-CI-ACTIONS-001

GitHub Actions advirtió que `actions/checkout@v4` y `actions/setup-node@v4`
declaran Node.js 20 y están siendo forzadas a Node 24 por el runner.

```yaml
severity: low
type: procedural_maintenance
checkpoint_blocking: false
merge_blocking: false
recommended_action: actualizar acciones en un bloque futuro autorizado
```

Esta deuda no afecta el PASS de Node 22 o Node 24 del código del proyecto.
