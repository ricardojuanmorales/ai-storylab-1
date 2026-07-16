# 18_DOCUMENTACION_ACTIVA

## Función vigente

Este cartapacio conserva la memoria viva y la continuidad operativa de AI
StoryLab 1. No sustituye las fuentes canónicas de gobernanza, arquitectura o
dominio.

```yaml
current_version_line: v0.8.0
current_process: H08_2_strategic_planning
effective_baseline: 9b941f185feb1e59f7a774ad07c976c415537dae
current_branch: feat/v0.8-h08-2-consolidated-vertical-slice
current_PR: pending_creation
PR_mode: consolidated_draft

H08_1:
  lifecycle: fulfilled

H08_1A:
  lifecycle: fulfilled
  verdict: pass_with_reservations

GATE_H08_1_READY_TO_CODE:
  decision: approve_with_reservations
  status: approved_with_reservations

H08_2:
  lifecycle: strategic_planning_open
  implementation: not_started
  current_block: H08_2_0
```

## Continuidad activa principal

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_Apertura_Estrategica/`

## Estrategia de integración

```yaml
pull_requests_for_H08_2: 1
branch: feat/v0.8-h08-2-consolidated-vertical-slice
mode: draft_until_H08_2A
commit_blocks:
  - H08_2_0_strategic_opening
  - H08_2_1_contract_readiness
  - H08_2_2_accessible_shell
  - H08_2_3_creative_cycle
  - H08_2_4_local_recovery_export_preview
  - H08_2A_checkpoint_closure
```

Cada bloque requiere:

```text
ZIP
→ ejecución del script desde Downloads
→ verificación
→ git add
→ git commit
→ git push
→ comentario de hito
```

## Límites

La apertura estratégica no autoriza por inferencia:

- implementación antes de completar H08-2.1;
- datos reales;
- persistencia concreta sin ADR;
- importación o migración legacy;
- Vista del Facilitador;
- dashboard grupal;
- IA embebida;
- analíticas;
- nube;
- publicación automática.
