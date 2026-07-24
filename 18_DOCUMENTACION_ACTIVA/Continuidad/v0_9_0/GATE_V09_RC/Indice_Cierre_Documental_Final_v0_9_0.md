# Índice para el cierre documental final de v0.9.0

## Estado transferido

```yaml
candidate_source_head: 29585b7b692818243f59d9f0e3c0dc572597fd11
H09_A_documentary_head: fa7ae966596243c6f97e60478386868bdcdf49d6
GATE_V09_RC_documentary_head: RESOLVED_BY_OPERATOR
gate_result: PASS_WITH_EXPLICIT_RESERVATIONS
candidate_eligibility: ELIGIBLE_FOR_SEPARATE_POST_GATE_HUMAN_DECISIONS
blocking_findings: []
reservations_preserved: 8
```

## Movimiento siguiente

El próximo movimiento, únicamente después de una decisión humana sobre el
gate, debe:

1. registrar el cierre humano de GATE-V09-RC;
2. registrar la disposición formal de v0.9.0;
3. registrar el estado real del PR;
4. preservar reservas y deuda;
5. identificar candidata, artefacto, heads y CI;
6. actualizar bitácora y matriz de continuidad;
7. declarar cualquier decisión posterior como autorizada o bloqueada;
8. producir el último commit de la sesión;
9. hacer push;
10. ejecutar CI sobre ese último commit;
11. generar el comentario manual final;
12. no crear ningún commit adicional.

## Frontera

El cierre final no debe asumir Ready for Review, merge, tag, RC, release o
publicación salvo autorización humana explícita y separada.
