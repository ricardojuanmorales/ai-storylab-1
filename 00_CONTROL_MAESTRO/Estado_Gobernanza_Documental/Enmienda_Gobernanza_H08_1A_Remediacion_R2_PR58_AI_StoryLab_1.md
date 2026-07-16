# Enmienda de gobernanza · H08-1A Remediación R2 · PR #58

```yaml
decision_date: 2026-07-16
source_PR: 58
source_head: ff4008c2c44140c7e901980d32f9944e8cd8251e
source_verdict: remediate_and_re_review
remediation_round: R2
blocking_findings:
  - F-001
  - F-002
  - F-004
  - F-005
closed_findings:
  - F-003
closed_with_residual_risk:
  - F-006
PR_state: draft
GATE_H08_1_READY_TO_CODE:
  status: pending
  recommendation: hold
H08_2: blocked
```

## Alcance autorizado

- unificar semántica de longitud entre dominio y JSON Schema;
- añadir pruebas directas de transición privacidad y bordes raw/trim;
- reconciliar matrices con pruebas identificables;
- actualizar documentación viva a PR #58 y R2;
- ejecutar CI Node 22/24;
- someter el nuevo SHA a re-review focalizada.

## Resultado prohibido

Esta remediación no constituye `pass`, no marca el PR Ready, no autoriza merge,
no aprueba el gate y no abre H08-2.
