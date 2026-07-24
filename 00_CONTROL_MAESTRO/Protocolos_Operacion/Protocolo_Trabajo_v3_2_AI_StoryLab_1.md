# Protocolo de Trabajo v3.2 de AI StoryLab 1

## Versión actual aprobada

```yaml
protocol_version: 3.2
status: APROBADO_PARA_USO
approval_date: 2026-07-23
project: AI StoryLab 1
predecessor: Protocolo_Trabajo_v3_1_AI_StoryLab_1.md
effective_from: final_documentary_commit_of_current_session
nature: protocolo_vivo_de_coordinacion_humano_IA_maquina
primary_optimization: un_hito_un_movimiento
operational_mode: expedito_reanudable
human_authority: preserved
automatic_publication: prohibited
Ready_for_Review: requires_separate_human_authorization
merge: requires_separate_human_authorization
GATE_V08_CLOSE: requires_separate_human_authorization
```

---

## 1. Declaración de propósito

El Protocolo de Trabajo v3.2 organiza la colaboración longitudinal entre
persona, inteligencia artificial, máquina y sistema documental dentro de
AI StoryLab 1.

Su finalidad es producir progreso técnico y documental con:

- autoridad humana explícita;
- evidencia verificable;
- mínima fragmentación operacional;
- reanudación segura;
- menor recurrencia de errores;
- trazabilidad entre decisiones, commits y CI;
- reflexión epistemológica proporcional;
- continuidad entre conversaciones;
- comentarios públicos bajo control humano;
- coherencia transdisciplinaria.

La optimización central de v3.2 se expresa así:

```text
un hito
→ una autorización de apertura
→ un operador principal
→ una ejecución reanudable
→ gates humanos explícitos
→ evidencia y CI
→ un cierre documental
→ comentario manual
```

La eficiencia no elimina los gates humanos.

La gobernanza no debe convertirse en una sucesión innecesaria de scripts,
preguntas o ceremonias.

---

## 2. Aprendizaje que origina v3.2

### 2.1 Resultado positivo de la sesión H08-6

La fase final de H08-6 logró un flujo estable:

```text
autorización humana del hito
→ operador único
→ preflight
→ diagnóstico
→ reparación autorizada cuando correspondía
→ commit
→ push
→ CI
→ revisión humana
→ cierre
→ comentario extendido
```

Este flujo permitió cerrar de forma ordenada:

- H08-6.4;
- H08-6.5;
- H08-6.6;
- H08-6A.

La principal mejora fue dejar de tratar diagnóstico, reparación, publicación y
cierre como operaciones desconectadas.

### 2.2 Errores evitables observados

Durante la primera parte de la sesión ocurrieron patrones que v3.2 debe
prevenir:

1. creación de múltiples operadores para un mismo hito;
2. fragmentación entre diagnóstico, reparación y cierre;
3. repetición de una autorización que ya había sido concedida;
4. intento de volver a cerrar un hito ya cerrado;
5. scripts que no aceptaban el estado parcial producido por su propia ejecución;
6. fallo documental por espacios finales detectado demasiado tarde;
7. validación incompleta de permisos antes de modificar workflows;
8. generación de un commit local que no podía publicarse mediante la credencial activa;
9. necesidad de crear un script adicional para reanudar;
10. exceso de explicaciones y pasos para una operación que debía ser expedita;
11. preparación prematura de documentos antes de disponer de evidencia final;
12. confusión potencial entre recomendación automática y decisión humana.

### 2.3 Principio de corrección

Cada error prevenible debe transformarse en:

```text
error observado
→ clasificación
→ causa
→ control preventivo
→ regla verificable
→ registro en bitácora
```

La IA debe reconocer el error sin convertir la explicación en una defensa.

La corrección no termina cuando el comando vuelve a funcionar. Termina cuando
el protocolo reduce la probabilidad de recurrencia.

---

## 3. Principios rectores

### 3.1 Agencia humana

La persona responsable conserva autoridad sobre:

- propósito;
- valores;
- alcance;
- prioridades;
- apertura;
- reparación;
- aceptación;
- reservas;
- cierre;
- publicación;
- Ready for Review;
- merge;
- gates;
- inicio de la siguiente fase.

Ningún resultado automático constituye por sí solo autorización humana.

### 3.2 Evidencia antes de afirmación

No se declara:

- `PASS`;
- hito cerrado;
- CI satisfactoria;
- comentario final;
- Ready;
- merge;
- gate aprobado;

sin evidencia correspondiente al head exacto.

### 3.3 Estado monotónico

Los estados cerrados no se reabren ni se vuelven a cerrar por inferencia.

```yaml
OPEN:
  may_transition_to:
    - DIAGNOSTIC_COMPLETE
    - REPAIR_AUTHORIZED
    - CLOSED

CLOSED:
  immutable: true
  allowed_actions:
    - verify
    - attest
    - reconcile_documentation_with_new_evidence
  forbidden_actions:
    - close_again
    - overwrite_historical_decision
```

Si un hito ya está cerrado, la operación correcta es verificar o reconciliar,
no repetir su cierre.

### 3.4 Un hito, un movimiento

Por defecto, cada hito interno se ejecuta mediante un solo operador principal.

El operador debe integrar:

- preflight;
- diagnóstico;
- clasificación de hallazgos;
- reparación autorizada;
- pruebas;
- commit;
- push;
- CI;
- revisión humana cuando aplique;
- cierre documental;
- salida normalizada.

Solo se crea un operador de reanudación separado cuando el operador original no
puede continuar de manera segura y esta imposibilidad queda documentada.

### 3.5 Reanudabilidad por diseño

Un operador no debe suponer que siempre comienza desde cero.

Debe reconocer:

- estado intacto;
- archivos generados;
- cambios sin staging;
- staging parcial;
- commit local;
- commit publicado;
- CI pendiente;
- CI aprobada;
- documentación pendiente;
- cierre completo.

La reejecución segura es una propiedad obligatoria, no una mejora opcional.

### 3.6 Mínima ceremonia útil

La ceremonia documental solo se conserva cuando protege:

- autoridad;
- alcance;
- evidencia;
- continuidad;
- seguridad;
- memoria institucional.

No se repiten validaciones sin cambio de head o de entorno.

No se divide un flujo para producir sensación de rigor.

---

## 4. Distribución de autoridad

### 4.1 Humano

La persona:

- orienta;
- autoriza;
- interpreta;
- revisa;
- acepta o rechaza;
- publica;
- abre y cierra gates.

La persona no debe ser tratada como una terminal que copia comandos sin
contexto.

### 4.2 Inteligencia artificial

La IA:

- recupera continuidad;
- distingue hechos, inferencias, propuestas y decisiones;
- verifica qué autorizaciones ya existen;
- diseña el operador;
- delimita allowlists;
- prepara código, pruebas y documentación;
- interpreta fallos;
- propone controles;
- redacta comentarios;
- mantiene la bitácora;
- explica límites;
- evita repetir preguntas respondidas;
- reduce la cantidad de movimientos humanos.

La IA no:

- inventa autorización;
- repite un gate ya resuelto;
- convierte recomendación en decisión;
- publica comentarios reservados a revisión manual;
- procede a la siguiente fase por inferencia;
- oculta errores bajo un nuevo script sin explicarlos.

### 4.3 Máquina

La máquina:

- inspecciona;
- ejecuta;
- compara;
- calcula hashes;
- prueba;
- construye;
- publica commits;
- consulta CI;
- registra estados;
- preserva evidencia.

La máquina no interpreta valores ni emite veredictos humanos.

### 4.4 Sistema documental

El sistema documental conserva:

- autorización;
- alcance;
- head;
- commits;
- pruebas;
- CI;
- hallazgos;
- reparaciones;
- reservas;
- comentarios;
- transferencias;
- decisiones;
- evolución del protocolo.

### 4.5 Ciclo integrado

```text
humano orienta y autoriza
→ IA estructura y reduce complejidad
→ máquina ejecuta y verifica
→ IA interpreta y transfiere
→ humano decide
→ sistema documental conserva
```

---

## 5. Niveles de reflexión epistemológica

### 5.1 Pausa profunda de sesión

Se realiza:

- al inicio de una nueva gran sesión;
- antes de redefinir el protocolo;
- antes de un gate global;
- cuando aparece una contradicción estratégica;
- después de una secuencia significativa de errores.

Examina:

- qué se sabe;
- qué se infiere;
- qué se propone;
- qué se ha decidido;
- qué valores están en tensión;
- qué patrón longitudinal emerge;
- cómo se distribuye la autoridad;
- qué debe cambiar en el protocolo.

### 5.2 Microalineamiento de hito

Antes de cada hito interno se confirma, sin una conversación extensa:

```yaml
hito:
scope:
expected_head:
allowed_changes:
forbidden_changes:
human_gate:
expected_evidence:
next_phase: blocked
```

El microalineamiento debe ser breve cuando el alcance ya está definido.

### 5.3 Regla de proporcionalidad

```yaml
reflection_depth:
  simple_repetition: minimal
  new_functional_scope: moderate
  security_or_governance_change: deep
  protocol_revision_or_global_gate: full
```

La reflexión guía la operación. No la inmoviliza.

---

## 6. Arquitectura longitudinal

### 6.1 Un gran hito, una rama, un Draft PR

Cada gran hito H08 utiliza:

- una rama;
- un Draft PR;
- varios hitos internos;
- varios commits;
- varias conversaciones cuando sean necesarias.

No se crean PR separados para:

- protocolo;
- kits;
- comentarios;
- cierres internos;
- reanudaciones;
- documentación auxiliar.

### 6.2 Contrato de commits

| Posición | Tipo | Contenido | Cambios funcionales |
|---|---|---|---|
| primero | activación | kit, continuidad, autorización y alcance | prohibidos |
| intermedios | ejecución | código, pruebas, reparaciones o evidencia | permitidos según alcance |
| último | cierre documental de sesión | estado, bitácora, protocolo, transferencia y comentario | prohibidos |

### 6.3 Excepción para sesión continua

Cuando varios hitos internos se completan en una sola conversación y la rama ya
fue activada:

- no se crea un nuevo commit de activación por cada hito;
- cada hito puede tener commit funcional y documental;
- el último commit de la conversación sigue siendo exclusivamente documental.

### 6.4 Prohibición de commits fantasma

No se crea un commit vacío o puramente ceremonial cuando no cambia el estado
documental.

---

## 7. Protocolo expedito por hito

### 7.1 Entrada humana

La persona expresa una autorización clara:

```text
Autorizo la apertura de <HITO>.
```

La IA debe:

1. registrar la autorización;
2. no pedirla de nuevo;
3. verificar el estado real;
4. preparar un solo operador;
5. mantener bloqueadas las fases no autorizadas.

### 7.2 Salida de la IA

La respuesta operativa debe contener:

- confirmación breve del estado;
- enlace a un único operador;
- un único comando de ejecución;
- explicación mínima de los gates internos;
- token humano que podría solicitarse;
- fronteras preservadas.

No debe contener una cascada de scripts alternos.

### 7.3 Ejecución del operador

```text
preflight integral
→ diagnóstico
→ clasificación
→ gate de reparación cuando aplique
→ reparación focalizada
→ verificación
→ commit funcional cuando aplique
→ push
→ CI
→ gate humano de revisión o cierre
→ commit documental
→ push
→ CI final
→ salida normalizada
```

### 7.4 Escalera de autorización

Los gates permanecen separados, aunque vivan dentro del mismo operador.

```yaml
OPEN_TOKEN:
  authorizes:
    - preflight
    - diagnosis
    - evidence_generation

REPAIR_TOKEN:
  authorizes:
    - listed_repairs_only
    - functional_commit
    - push
    - CI

REVIEW_TOKEN:
  authorizes:
    - human_confirmation_of_qualitative_criteria

CLOSE_TOKEN:
  authorizes:
    - documentary_closure
    - final_push
    - final_CI
```

Un token puede combinar reparación y cierre solo cuando:

- el alcance exacto está visible;
- no existen hallazgos bloqueantes desconocidos;
- la persona ve claramente qué autoriza;
- la combinación reduce movimientos sin reducir autoridad.

### 7.5 Cero preguntas repetidas

Antes de pedir autorización, la IA revisa:

- conversación actual;
- estado documental;
- tokens ya usados;
- salida del operador;
- estado remoto.

Una autorización explícita se trata como dato vinculante.

---

## 8. Preflight integral obligatorio

El preflight ocurre antes de crear o modificar archivos.

```yaml
continuity:
  protocol_loaded: true
  active_documentation_reviewed: true
  symmetric_transfer_reviewed: true
  current_hito_identified: true
  previous_hito_state_verified: true

repository:
  root: exact
  branch: exact
  local_head: exact
  remote_head: exact
  base_head: known
  PR_number: exact
  PR_state: OPEN
  PR_mode: DRAFT
  worktree: clean_or_expected_partial
  staging: empty_or_expected_partial

runtime:
  node: compatible
  npm: compatible
  shell: compatible
  required_tools: available

authorization:
  opening_token: present
  repairs: explicit_or_blocked
  closure: explicit_or_pending
  next_phase: blocked

remote:
  gh_auth: valid
  transport: selected
  workflow_scope: verified_when_workflow_changes_possible
  SSH: preferred_when_available
  CI_access: verified

operator:
  syntax: validated
  expected_paths: allowlisted
  partial_states: modeled
  resume_mode: available
```

No se corrige después lo que podía haberse bloqueado antes del primer cambio.

---

## 9. Preflight especial para workflows y permisos

Cuando un hito puede modificar `.github/workflows/`:

1. detectar el transporte remoto;
2. comprobar SSH autenticado;
3. preferir SSH cuando esté disponible;
4. si se usará HTTPS, verificar o solicitar el scope `workflow`;
5. completar la autenticación antes de crear el commit;
6. registrar el transporte seleccionado.

```yaml
workflow_change:
  possible: true
  transport_preflight: required
  preferred_transport: SSH
  HTTPS_workflow_scope: required
  commit_before_permission_check: prohibited
```

Un rechazo de permisos se clasifica como:

```yaml
failure_class: REMOTE_AUTHORIZATION_FAILURE
product_defect: false
commit_validity: unchanged
resume_from_local_commit: permitted
```

---

## 10. Contrato del operador único

### 10.1 Propiedades obligatorias

Todo operador principal debe ser:

- idempotente;
- reanudable;
- namespaced;
- validado con `bash -n`;
- selectivo en staging;
- explícito sobre heads;
- consciente de CI;
- consciente de permisos;
- capaz de distinguir fallo técnico y fallo ambiental;
- capaz de detenerse en gates humanos.

### 10.2 Modos

```text
./OPERADOR.sh
./OPERADOR.sh --resume
./OPERADOR.sh --status
```

El modo normal puede detectar automáticamente un estado parcial.

`--resume` fuerza la lectura del manifiesto de estado.

`--status` no modifica nada.

### 10.3 Manifiesto de estado

Cada operador mantiene fuera del repositorio:

```json
{
  "hito": "",
  "entry_head": "",
  "current_local_head": "",
  "expected_remote_head": "",
  "authorization_tokens": [],
  "generated_paths": [],
  "staged_paths": [],
  "functional_commit": null,
  "functional_push": false,
  "functional_CI": null,
  "documentary_commit": null,
  "documentary_push": false,
  "final_CI": null,
  "current_state": "UNTOUCHED"
}
```

### 10.4 Máquina de estados v3.2

```yaml
UNTOUCHED:
PREFLIGHT_PASSED:
DIAGNOSTIC_RUNNING:
DIAGNOSTIC_COMPLETE:
HUMAN_REPAIR_GATE:
REPAIRS_APPLIED:
FUNCTIONAL_COMMITTED:
FUNCTIONAL_PUSHED:
FUNCTIONAL_CI_PENDING:
FUNCTIONAL_CI_PASSED:
HUMAN_REVIEW_GATE:
HUMAN_CLOSE_GATE:
DOCUMENTATION_GENERATED:
DOCUMENTARY_COMMITTED:
DOCUMENTARY_PUSHED:
FINAL_CI_PENDING:
FINAL_CI_PASSED:
COMMENT_READY:
COMPLETE:
```

La reejecución continúa desde el estado confirmado más avanzado.

---

## 11. Clasificación de fallos

Todo fallo debe producir una clasificación.

### 11.1 Producto o código

```yaml
class: PRODUCT_FAILURE
examples:
  - test_failure
  - build_failure
  - architecture_violation
effect:
  - hito_remains_open
  - repair_requires_authorization
```

### 11.2 Entorno

```yaml
class: ENVIRONMENT_FAILURE
examples:
  - incompatible_node
  - missing_tool
  - unavailable_port
effect:
  - product_not_declared_failed
  - environment_corrected_or_blocked
```

### 11.3 Autenticación o permisos

```yaml
class: AUTHORIZATION_FAILURE
examples:
  - missing_workflow_scope
  - SSH_not_configured
effect:
  - local_commit_preserved
  - remote_unchanged
  - resumable
```

### 11.4 Documentación

```yaml
class: DOCUMENTARY_VALIDATION_FAILURE
examples:
  - trailing_whitespace
  - broken_link
  - unresolved_placeholder
effect:
  - normalize_before_commit
  - no_new_operator_unless_state_unsafe
```

### 11.5 CI

```yaml
class: REMOTE_VERIFICATION_FAILURE
effect:
  - inspect_exact_run
  - do_not_repeat_local_checks_without_reason
  - repair_requires_scope_and_authorization
```

### 11.6 Gate humano pendiente

```yaml
class: HUMAN_DECISION_PENDING
failure: false
effect:
  - preserve_state
  - print_exact_token
  - allow_resume
```

---

## 12. Staging y commits

### 12.1 Allowlist obligatoria

Cada commit declara las rutas permitidas antes de `git add`.

```text
expected_paths.txt
actual_paths.txt
diff expected_paths.txt actual_paths.txt
```

### 12.2 Prohibiciones

- no usar `git add -A` con árbol mixto;
- no incluir archivos no listados;
- no mezclar reparación funcional y cierre documental;
- no reescribir historia para ocultar errores;
- no crear un segundo cierre del mismo hito;
- no hacer commit antes de `git diff --cached --check`.

### 12.3 Normalización preventiva

Antes del staging documental:

- eliminar espacios finales;
- asegurar salto final;
- validar Markdown generado;
- comprobar placeholders;
- comprobar enlaces locales;
- verificar CSV y JSON;
- ejecutar `git diff --cached --check`.

La normalización ocurre antes del commit, no después de que el commit falle.

---

## 13. Verificación eficiente

### 13.1 Reutilización de evidencia

Mientras el head, runtime y lockfile permanezcan iguales:

- una prueba aprobada puede reutilizarse;
- un verify completo no se repite sin causa;
- una CI aprobada conserva validez para ese head;
- un nuevo commit documental requiere CI, pero no repetir manualmente toda la
  regresión salvo cambio material.

### 13.2 Secuencia recomendada

```text
pruebas focalizadas
→ verify completo en gate
→ commit
→ CI
```

### 13.3 Prohibición de redundancia

No se ejecutan varias veces las mismas suites para compensar incertidumbre
procedimental.

La incertidumbre se resuelve verificando estado, no aumentando el ruido.

---

## 14. Comentarios extendidos y Canvas

### 14.1 Fuente de verdad

El comentario definitivo se redacta después de disponer de:

- resultado final;
- commit;
- CI;
- hallazgos;
- reservas;
- alcance real;
- decisiones humanas.

### 14.2 Procedimiento

```text
evidencia final
→ borrador IA
→ Canvas nuevo
→ revisión humana
→ ajustes
→ publicación manual en GitHub
```

### 14.3 Momento de incorporación al repositorio

Si el último commit documental de la sesión aún no ha ocurrido:

- el comentario aprobado puede incluirse en ese commit.

Si el hito ya cerró y su commit final fue publicado:

- el comentario se publica manualmente en el PR;
- no se crea un commit adicional solo para duplicarlo;
- una reconciliación documental posterior requiere autorización humana.

### 14.4 Aprobación implícita

La publicación manual después de revisión en Canvas constituye aprobación
humana del texto publicado.

### 14.5 Prohibición

La IA no publica automáticamente comentarios destinados a revisión manual.

---

## 15. Cierre de sesión

El último commit de sesión es documental.

Debe consolidar, según corresponda:

- protocolo ratificado;
- bitácora de evolución;
- estado canónico;
- decisiones;
- matriz de continuidad;
- transferencia simétrica;
- resultados;
- riesgos;
- reservas;
- deuda;
- comentario aprobado;
- estado del PR;
- siguiente gate bloqueado.

Después de ese commit y de su CI:

1. verificar remoto;
2. producir atestación post-transición;
3. preparar próximo kit cuando corresponda;
4. generar prompt externo;
5. verificar hashes;
6. terminar la sesión.

La atestación post-transición no crea otro commit en la sesión que termina.

---

## 16. Salida normalizada de cada operador

Todo operador finaliza con una salida legible:

```yaml
HITO:
state:
disposition:
entry_head:
functional_commit:
functional_CI_run:
final_documentary_head:
final_CI_run:
blocking_findings:
resolved_findings:
routed_findings:
evidence_zip:
evidence_zip_sha256:
PR:
PR_mode:
Ready_for_Review:
merge:
next_gate:
PR_comment:
```

La salida debe permitir a la siguiente conversación continuar sin interpretar
cientos de líneas de log.

---

## 17. Reglas de comunicación expedita

### 17.1 Respuesta inicial

Cuando la persona autoriza un hito, la IA responde con:

- una confirmación;
- una frase sobre el alcance;
- el operador;
- el comando;
- el token esperado;
- las fronteras.

### 17.2 Durante errores

La IA debe comunicar:

1. qué ocurrió;
2. qué no ocurrió;
3. qué estado quedó preservado;
4. cuál es la causa;
5. cómo continúa el mismo flujo.

### 17.3 Prohibiciones comunicativas

- no repetir la historia completa en cada respuesta;
- no presentar múltiples opciones operativas equivalentes;
- no pedir confirmación de datos ya conocidos;
- no anunciar pasos internos irrelevantes;
- no afirmar cierre antes de evidencia;
- no usar extensión como sustituto de precisión.

---

## 18. Matriz de controles nuevos v3.2

| Código | Error o riesgo | Control v3.2 |
|---|---|---|
| `PROTO-ONE-MOVE-013` | varios scripts para un hito | operador único por defecto |
| `PROTO-MONOTONIC-014` | volver a cerrar un hito cerrado | estado `CLOSED` inmutable |
| `PROTO-AUTH-015` | repetir autorización humana | registro de tokens y decisiones |
| `PROTO-RESUME-016` | script incapaz de aceptar su estado parcial | reanudabilidad y manifiesto |
| `PROTO-WORKFLOW-017` | descubrir scope `workflow` después del commit | preflight de transporte y permisos |
| `PROTO-LINT-018` | trailing whitespace detectado al final | normalización antes del staging |
| `PROTO-EVIDENCE-019` | repetir pruebas sin cambio material | reutilización por head |
| `PROTO-COMMENT-020` | comentario antes de evidencia final | Canvas después de CI final |
| `PROTO-STATE-021` | confundir commit local con remoto | salida local/remoto separada |
| `PROTO-FAILURE-022` | tratar permiso o entorno como defecto de producto | taxonomía de fallos |
| `PROTO-GATE-023` | combinar decisiones sin visibilidad | escalera explícita de tokens |
| `PROTO-VERBOSITY-024` | demasiados pasos comunicados | contrato de comunicación expedita |
| `PROTO-SELF-REVIEW-025` | corregir sin aprender | entrada obligatoria en bitácora |
| `PROTO-CANVAS-026` | comentario final diferente al revisado | publicación manual del texto aprobado |
| `PROTO-LAST-COMMIT-027` | commit extra después del cierre de sesión | último commit documental único |

---

## 19. Autoevaluación obligatoria de la IA

Al cierre de una sesión significativa, la IA registra:

```yaml
AI_self_review:
  preventable_errors:
  root_causes:
  successful_patterns:
  user_feedback:
  controls_added:
  controls_retired:
  unresolved_tensions:
  recommended_protocol_change:
```

La autoevaluación debe:

- reconocer responsabilidad;
- distinguir error de limitación de herramienta;
- evitar dramatización;
- producir controles;
- respetar la decisión humana sobre adopción.

La IA no modifica unilateralmente el protocolo aprobado.

---

## 20. Bitácora de evolución v3.2

La bitácora acompañante debe registrar cada cambio propuesto o aprobado:

```yaml
entry:
  date:
  session:
  hito:
  protocol_version:
  observed_pattern:
  epistemic_interpretation:
  technical_cause:
  documentary_cause:
  human_machine_AI_effect:
  proposed_control:
  alternatives_considered:
  human_decision:
  disposition:
  effective_from:
  evidence:
```

---

## 21. Patrones prohibidos

```yaml
forbidden:
  - multiple_operators_without_need
  - blind_rerun
  - repeated_human_question
  - automatic_next_hito
  - automatic_Ready
  - automatic_merge
  - automatic_GATE
  - automatic_PR_comment_publication
  - close_already_closed_hito
  - commit_before_permission_preflight
  - mixed_functional_and_documentary_closure_commit
  - extra_commit_after_session_closure
  - rewrite_historical_truth
  - claim_external_independence_without_external_reviewer
```

---

## 22. Criterios de aprobación de v3.2

La aprobación humana emitida confirma:

```yaml
approval_questions:
  one_hito_one_movement: accepted
  single_resumable_operator: accepted
  embedded_human_tokens: accepted
  monotonic_closed_state: accepted
  workflow_permission_preflight: accepted
  Canvas_comment_timing: accepted
  AI_self_review_requirement: accepted
  last_documentary_commit_rule: accepted
```

---

## 23. Transición desde v3.1

```yaml
v3_1:
  status: SUPERSEDED_WITH_PRESERVED_HISTORY
  historical_truth: preserved

v3_2:
  status: APROBADO_PARA_USO
  effective_from: final_documentary_commit_of_current_session
```

v3.1 no se elimina ni se reescribe. Conserva la verdad histórica de su vigencia.

---

## 24. Síntesis operacional

```text
primero pensar lo suficiente
→ luego verificar el estado exacto
→ después ejecutar una sola vez
→ reanudar sin destruir
→ pedir decisiones solo cuando correspondan
→ cerrar con evidencia
→ documentar lo aprendido
```

El protocolo v3.2 busca que la integración humano, máquina e IA sea más fluida
sin diluir responsabilidad.

La persona conserva el sentido y la autoridad.

La IA reduce complejidad, articula y aprende de sus errores.

La máquina ejecuta y demuestra.

La documentación permite que el aprendizaje sobreviva a la conversación.

---

## 25. Estado aprobado

```yaml
document: Protocolo_Trabajo_v3_2_AI_StoryLab_1.md
version: 3.2
status: APROBADO_PARA_USO
human_approval: EXPLICIT
effective_from: final_documentary_commit_of_current_session
```
