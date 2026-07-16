# 18_DOCUMENTACION_ACTIVA

## Función vigente

Este cartapacio conserva la memoria viva y la continuidad operativa de AI
StoryLab 1. No sustituye las fuentes canónicas de gobernanza, arquitectura o
dominio.

```yaml
current_version_line: v0.8.0
current_process: H08_2_accessible_shell
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
  lifecycle: accessible_shell_active
  current_block: H08_2_2
  creative_cycle_implementation: not_started
  persistence_implementation: not_started
  canonical_missions: 4
  v0_8_close: GATE_V08_CLOSE_after_H08_6
```

## Continuidad activa principal

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_2_Shell_Accesible/`

## Secuencia vigente

```text
H08-2.0 apertura estratégica cumplida
→ H08-2.1 readiness de contratos cumplida
→ H08-2.2 shell accesible
→ verificación local y build
→ commit y push al PR #59
→ comentario de hito
→ H08-2.3 ciclo creativo
```

## Evidencia requerida para cerrar H08-2.2

- build Vite reproducible;
- landmarks semánticos;
- skip link con transferencia de foco;
- controles alcanzables por teclado;
- contraste alto;
- movimiento reducido;
- escala de texto;
- región viva;
- mapa de pasos futuros no ejecutables;
- auditoría arquitectónica con capa `presentation`;
- auditoría de privacidad sobre `.tsx`;
- 13 archivos de prueba y 72 pruebas;
- CI Node 22 y Node 24 verde.

## Protocolo del bloque

```text
ZIP
→ script desde Downloads
→ npm install
→ build, auditorías y pruebas
→ git add
→ git commit
→ git push
→ comentario de hito en PR #59
```

## Límites

H08-2.2 no autoriza:

- implementación de `CreativeCycleUseCases`;
- persistencia local;
- datos reales;
- importación o migración legacy;
- capacidades diferidas.
