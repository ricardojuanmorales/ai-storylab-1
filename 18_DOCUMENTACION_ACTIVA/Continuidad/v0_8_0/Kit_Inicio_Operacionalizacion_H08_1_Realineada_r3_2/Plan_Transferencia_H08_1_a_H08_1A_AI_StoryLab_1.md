# Plan de Transferencia H08-1 → H08-1A

## Condición de transferencia

H08-1 debe estar formalmente cerrado. La existencia de scaffolding o un CI verde
no basta.

## Expediente de entrada a H08-1A

1. ADR aprobado;
2. frontera legacy;
3. objetos e invariantes;
4. schemas;
5. fixtures;
6. runner y CI;
7. estructura modular;
8. adaptadores;
9. feature flags;
10. pruebas de seguridad;
11. evidencia de accesibilidad;
12. matriz PH-IT-AT;
13. riesgos y deuda;
14. acta de cierre H08-1.

## Productos esperados de H08-1A

- spec de vertical slice;
- wireframes;
- estados;
- transiciones;
- interfaces;
- errores;
- Given/When/Then;
- threat model;
- accesibilidad;
- backlog;
- plan de pruebas;
- demo;
- rollback.

## Regla

La transferencia abre H08-1A, no H08-2.

```yaml
H08_1_closed: required
H08_1A_opened: by_human_decision
H08_2_authorized: false
gate_required: GATE-H08-1-READY-TO-CODE
```
