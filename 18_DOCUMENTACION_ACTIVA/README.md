# 18_DOCUMENTACION_ACTIVA

## Función vigente

Este cartapacio conserva la memoria viva y la continuidad operativa de AI
StoryLab 1. No sustituye las fuentes canónicas de gobernanza, arquitectura o
dominio.

```yaml
current_version_line: v0.8.0
current_process: H08-1A_remediation_R2
current_PR: 58
current_PR_state: draft_under_independent_rereview
next_checkpoint: H08-1A_rereview_R2
GATE_H08_1_READY_TO_CODE: pending_hold_recommended
H08_2: blocked
```

## Continuidad activa principal

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_1A_Remediacion_R2/`

Este expediente contiene:

- acta de remediación R2;
- bitácora de sesión;
- hallazgos transferidos desde la re-review de R1;
- criterios de prueba para F-001 F-004 y F-005;
- reconciliación documental para F-002;
- transferencia a CI y re-review focalizada.

## Secuencia vigente

```text
H08-1 cumplido
→ H08-1A independiente
→ Remediación R1
→ re-review del head ff4008c2
→ Remediación R2 en PR #58 Draft
→ CI Node 22/24
→ re-review focalizada del nuevo SHA
→ Ready y merge solo con pass o pass_with_reservations
→ decisión humana separada del gate
→ H08-2 solo con approve o approve_with_reservations
```

## Límites

La documentación activa no autoriza por inferencia:

- aprobación de H08-1A antes de la re-review del nuevo SHA;
- marcar PR #58 Ready antes del dictamen permitido;
- merge automático;
- aprobación del gate;
- H08-2;
- datos reales;
- persistencia durable;
- Vista del Facilitador.
