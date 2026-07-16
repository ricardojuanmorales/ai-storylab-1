# Transferencia simétrica · Remediación R2 a CI y re-review focalizada

```yaml
source_PR: 58
source_head: ff4008c2c44140c7e901980d32f9944e8cd8251e
expected_next_state: new_head_pending_CI
H08_1A: remediation_R2
gate: hold
H08_2: blocked
```

## Criterios de aceptación

1. `npm --prefix apps/storylab ci --ignore-scripts`.
2. `npm --prefix apps/storylab run verify`.
3. Node 22 `success`.
4. Node 24 `success`.
5. PR permanece Draft durante la re-review.
6. F-001 F-002 F-004 y F-005 reciben disposición formal.
7. No existe deriva de alcance.

## Próxima decisión

Solo un dictamen `pass` o `pass_with_reservations` permite considerar Ready,
aprobación humana y merge. El gate se decide separadamente después del merge y
de la CI del nuevo baseline.
