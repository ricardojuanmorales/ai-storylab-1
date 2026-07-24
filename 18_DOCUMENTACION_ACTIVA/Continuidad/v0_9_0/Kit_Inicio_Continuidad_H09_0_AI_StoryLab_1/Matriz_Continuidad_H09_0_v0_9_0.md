# Matriz de continuidad · H09-0 / v0.9.0

| Elemento | Estado | Evidencia o autoridad | Siguiente acción |
|---|---|---|---|
| v0.8.0 | Cerrada | PR #63, merge y CI post-merge | Conservar baseline |
| Baseline de entrada | Satisfecho | `f0996d0bd79c4bd70d9a802ce4cbf67b5c076419` | No sustituir por inferencia |
| Protocolo v3.2 | Vigente | Documento canónico aprobado | Aplicar operador único |
| Plan de Ruta v0.9.0 | Aprobado | Decisión humana del 24 de julio de 2026 | Incorporar al primer commit |
| Alcance pedagógico | Ratificado | Sección 3.5 | Mantener deuda visible y no autorizada |
| H09-0 | Autorizado | Orden humana explícita | Crear rama y commit documental |
| Rama de fase | Autorizada | `feat/v0.9-h09-0-rc-readiness` | Crear localmente desde baseline |
| Primer commit | Autorizado | Mensaje canónico del operador | Crear un solo commit documental |
| Push | Bloqueado | Falta token separado | Solicitar `AUTHORIZE_PUSH_H09_0` |
| Draft PR | Bloqueado | Falta autorización separada | No crear |
| H09-1 | Bloqueado | Hito no abierto | No diagnosticar ni implementar |
| Trabajo funcional | Bloqueado | Alcance de H09-0 | Cero cambios funcionales |
| GATE-V09-RC | No autorizado | Gate futuro | Mantener cerrado |

## Integración operacional

```text
persona autoriza y ejecuta en VS Code
→ IA entrega operador, allowlist y criterios
→ máquina verifica, escribe y crea evidencia
→ IA interpreta la salida normalizada
→ persona decide el próximo token
→ documentación preserva la continuidad
```

## Controles expedidos

```yaml
one_hito_one_move: true
single_resumable_operator: true
operator_outside_repository: true
selective_staging: true
expected_head_enforced: true
remote_main_verified: true
functional_changes_prohibited: true
push_separately_gated: true
Draft_PR_separately_gated: true
next_hito_blocked: true
comments_manual: true
```
