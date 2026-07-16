# Bitácora de sesión · H08-1A Remediación R1

```yaml
date: 2026-07-15
baseline: 965f53e04eecc0a9d6dc17cd89dbacee6797a5f6
unit: H08-1A_remediation_R1
source_verdict: remediate_and_re_review
gate_recommendation: hold
gate_decision_effect: none
H08_2: blocked
```

## Acciones preparadas

- alineación operacional de límites entre dominio y JSON Schema;
- ampliación de pruebas de paridad y aplicación;
- reconciliación del catálogo de invariantes;
- precisión de la auditoría de privacidad;
- reconciliación de README, ADR y registro decisional.

## Límites preservados

No se selecciona persistencia durable, no se activa dato real, no se crea
presentación, no se abre Facilitator View y no se abre H08-2.

## Estado de salida

La rama requiere `npm --prefix apps/storylab run verify`, CI Node 22/24,
PR draft y re-review independiente. No está autorizada para merge.
