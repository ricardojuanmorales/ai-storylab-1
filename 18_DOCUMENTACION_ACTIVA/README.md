# 18_DOCUMENTACION_ACTIVA

## Función vigente

Este cartapacio conserva la memoria viva y la continuidad operativa de AI
StoryLab 1. No sustituye las fuentes canónicas de gobernanza, arquitectura o
dominio.

```yaml
current_version_line: v0.8.0
current_process: H08_2_contract_readiness
effective_baseline: 9b941f185feb1e59f7a774ad07c976c415537dae
current_branch: feat/v0.8-h08-2-consolidated-vertical-slice
current_PR: 59
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
  lifecycle: contract_readiness_active
  functional_implementation: not_started
  current_block: H08_2_1
```

## Continuidad activa principal

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_1_Readiness_Contratos/`

## Secuencia vigente

```text
H08-2.0 apertura estratégica cumplida
→ H08-2.1 readiness de contratos
→ verificación local
→ commit y push al PR #59
→ comentario de hito
→ H08-2.2 shell accesible
```

## Evidencia requerida para cerrar H08-2.1

- INV-009 con prueba nominal;
- INV-010 con prueba nominal;
- `MissionDefinition` compilable;
- contratos de casos de uso compilables;
- ADR de presentación;
- ADR de persistencia propuesto;
- Gherkin;
- wireframes;
- threat model;
- `npm run verify` verde;
- cero dependencia runtime nueva;
- cero capa `presentation`.

## Protocolo del bloque

```text
ZIP
→ script desde Downloads
→ verify
→ git add
→ git commit
→ git push
→ comentario de hito en PR #59
```

## Límites

H08-2.1 no autoriza:

- React o Vite;
- persistencia concreta;
- datos reales;
- importación o migración legacy;
- capacidades diferidas.
