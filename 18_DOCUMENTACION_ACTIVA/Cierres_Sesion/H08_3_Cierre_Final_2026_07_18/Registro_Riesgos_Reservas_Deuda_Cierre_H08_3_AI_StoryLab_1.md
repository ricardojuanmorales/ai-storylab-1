# Registro de riesgos, reservas y deuda · cierre H08-3

## Reserva resuelta

### RES-H08-3-ENTRY-CI-001

Requería confirmar CI en Node 22 y Node 24 en el primer commit que
activara workflows.

```yaml
status: RESOLVED
evidence: múltiples ejecuciones Node 22/24 PASS
```

## Riesgos mitigados

| Riesgo | Disposición |
|---|---|
| destrucción de fuente en migración | copias, validación y preservación |
| escritura parcial | staging y roll-forward |
| checksum tratado como seguridad | contrato limitado a corrupción accidental |
| contenido privado en índice | metadata-only validado |
| corrupción sobrescrita | bloqueo y preservación |
| cuota destructiva | snapshot confirmado conservado |
| versión futura aceptada | rechazo tipado |
| expansión prematura | límites y auditorías |

## Deuda abierta no bloqueante

### DEBT-H08-3A-CI-ACTIONS-001

`actions/checkout@v4` y `actions/setup-node@v4` declaran Node 20 y GitHub
los fuerza a Node 24.

```yaml
severity: low
type: procedural_maintenance
H08_3_blocking: false
merge_blocking: false
recommended_action: actualizar acciones en bloque separado
```

## Reservas longitudinales

IndexedDB solo debe reconsiderarse ante binarios, volumen, consultas
complejas o necesidad de transacciones reales.

Ready for Review y merge requieren decisiones humanas separadas.
