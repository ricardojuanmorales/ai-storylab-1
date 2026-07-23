# Bitácora de Evolución del Protocolo de Trabajo v3.1

**Estado:** `APROBADO_PARA_USO_H08`
**Fecha de aprobación:** 2026-07-21
**Vigencia:** inmediata
**Acompaña:** `Protocolo_Trabajo_v3_1_AI_StoryLab_1.md`
**Función:** registrar procedencia, tensiones, decisiones y evolución del
protocolo durante H08

---

## Linaje

### Protocolo candidato de H08-3

Aportó:

- doble canal;
- tres ritmos;
- preflight;
- estados idempotentes;
- distribución de autoridad;
- continuidad después de interrupciones.

### Evaluación H08-4

Ratificó:

- una rama y un PR para el hito;
- publicación secuencial;
- staging selectivo;
- pruebas focalizadas;
- checkpoint independiente;
- autorización humana remota;
- atestación post-publicación.

### Sesión post-merge H08-4

Reveló:

- rutas de logs ambiguas;
- heredocs Python sin guion;
- creación antes de validación;
- revisión parcial de scripts;
- permisos diferentes entre conector y `gh`;
- deriva documental post-transición;
- propuesta incorrecta de PR puente;
- archivos con prefijos numéricos;
- publicación del kit en la sesión equivocada.

---

## Decisiones humanas ratificadas

### Primer commit de sesión

```yaml
decision: RATIFIED
rule:
  first_commit: kit_and_activation_only
  functional_changes: forbidden
```

### Último commit de sesión

```yaml
decision: RATIFIED
rule:
  last_commit: documentary_closure_only
  functional_changes: forbidden
```

### Alineamiento inicial

```yaml
decision: RATIFIED_WITH_REFINEMENT
model:
  name: momento_de_alineamiento_epistemologico_y_estrategico
  mandatory: true
  dialogical: true
  collaborative: true
  almost_ceremonial: true
  depth: proportional_to_complexity
  purpose:
    - optimize_human_machine_AI_integration
    - align_longitudinal_session
    - resolve_questions_before_execution
  completion: human_alignment_sufficient
```

### Comentarios extendidos

```yaml
decision: RATIFIED
procedure:
  draft: AI
  review: Canvas
  adjustment: collaborative
  publication: manual
  human_approval: implicit_in_manual_publication_after_review
  new_approval_required_if_substantive_change_after_review: true
```

### Atestación post-transición

```yaml
decision: RATIFIED_WITH_REFINEMENT
procedure:
  creation: last_act_after_last_commit_and_CI
  storage: outside_repository_in_next_kit
  review: beginning_of_next_session
  repository_entry: first_commit_of_next_session
```

### PR de H08-5

```yaml
decision: RATIFIED
interpretation:
  one_PR_for_great_hito_H08_5: true
  multiple_conversations: true
  internal_milestones: true
  PR_per_conversation: false
```

### Estado del protocolo

```yaml
protocol_v3_1: APROBADO_PARA_USO_H08
evolution_log_v3_1: APROBADO_PARA_USO_H08
effective_immediately: true
```

---

## Correcciones descartadas

### PR documental puente

```yaml
disposition: REJECTED
replacement: first_commit_of_single_H08_5_PR
```

### Prefijos numéricos

```yaml
disposition: REJECTED
replacement: semantic_names_plus_README_and_MANIFEST
```

### Publicación inmediata del kit

```yaml
disposition: REJECTED
replacement:
  generate_after_last_commit
  publish_as_first_commit_next_session
```

### Borrador v3.0

```yaml
disposition: NOT_ADOPTED
successor: v3.1_APROBADO_PARA_USO_H08
```

---

## Controles derivados de errores

| Código | Error | Control v3.1 |
|---|---|---|
| `PROTO-PATH-001` | ruta con responsabilidades múltiples | variables namespaced |
| `PROTO-EVIDENCE-002` | ruta nominal sin validar contenido | ruta y contenido |
| `PROTO-PY-003` | heredoc Python sin `-` | patrón obligatorio |
| `PROTO-ORDER-004` | crear antes de validar | validar y clasificar |
| `PROTO-PARTIAL-005` | reejecución ciega | máquina de estados |
| `PROTO-CAP-006` | permiso del conector asumido | matriz conector/`gh` |
| `PROTO-DRIFT-007` | deriva documental | atestación y reconciliación |
| `PROTO-PATCH-008` | correcciones encadenadas | auditoría integral |
| `PROTO-CEREMONY-009` | checks redundantes | una evidencia por gate |
| `PROTO-ARCH-010` | PR puente incorrecto | un PR por gran hito |
| `PROTO-NAME-011` | nombres numerados | nombres semánticos |
| `PROTO-KIT-012` | kit en sesión incorrecta | primer commit siguiente |

---

## Matriz humano · IA · máquina

### Humano

- sentido;
- preguntas;
- valores;
- autorización;
- aceptación;
- gates.

### IA

- memoria;
- síntesis;
- alternativas;
- contradicciones;
- documentación;
- preparación técnica.

### Máquina

- ejecución;
- pruebas;
- hashes;
- Git;
- CI;
- evidencia.

### Integración

La sesión se optimiza cuando:

```text
el humano orienta
→ la IA articula
→ la máquina verifica
→ el humano interpreta
→ el sistema documental conserva
```

---

## Plantilla de entradas futuras

```yaml
entry:
  date:
  session:
  hito:
  internal_milestone:
  protocol_version: 3.1
  alignment_observation:
  technical_observation:
  documentary_observation:
  human_machine_AI_observation:
  proposed_change:
  alternatives:
  human_decision:
  disposition:
  effective_from:
  evidence:
```

---

## Próxima revisión

Al principio de H08-5:

1. revisar esta bitácora;
2. revisar la atestación post-merge H08-4;
3. realizar el momento de alineamiento;
4. confirmar v3.1 para la sesión;
5. incorporar el kit como primer commit.

---

## Continuación de la evolución durante H08-5

**Periodo:** 2026-07-21 a 2026-07-22
**Hito:** H08-5 · Portafolio y Roundtrip
**Resultado:** `PASS_WITH_RECORDED_LESSONS`
**Versión del protocolo:** `3.1`, sin cambio de número de versión

### Evaluación longitudinal

```yaml
protocol_version: 3.1
evaluation: PASS_WITH_RECORDED_LESSONS
human_authority_preserved: true
machine_gates_effective: true
AI_authority_bounded: true
expedited_protocol: EFFECTIVE
```

### Enmiendas consolidadas durante H08-5

Estas entradas registran decisiones y controles ya acordados. No sustituyen ni
reescriben el protocolo aprobado.

```yaml
H08_5_amendments:
  strategic_pause_after_documentary_activation: REQUIRED
  brief_authorization_preserves_contextual_boundaries: true
  expedited_protocol: ONE_HUMAN_ACTION_WITH_INTERNAL_MACHINE_PHASES
  PR_comments:
    drafting: AI_PERMITTED
    review: HUMAN
    publication: HUMAN_ONLY
  tool_logs:
    ANSI_normalization_before_parsing: REQUIRED
  remote_guards:
    eventual_consistency_tolerance: REQUIRED_WITHOUT_HIDING_REAL_FAILURES
  repair_after_authorized_stop:
    same_scope: MAY_RESUME_WITHOUT_NEW_AUTHORIZATION
    expanded_scope: REQUIRES_NEW_HUMAN_AUTHORIZATION
```

### Incidentes convertidos en controles

| Código | Incidente | Control incorporado |
|---|---|---|
| `H08-5-PATH-013` | checkout canónico confundido con zona de transferencia | `$HOME/ai-storylab-1` es checkout; `Downloads` recibe artefactos |
| `H08-5-MACOS-014` | scripts incompatibles con Bash de macOS | validar contra el entorno efectivo |
| `H08-5-UNTRACKED-015` | Git resumió directorios no rastreados | usar enumeración completa antes de validar alcance |
| `H08-5-AUDIT-016` | auditoría conservaba una ubicación obsoleta | auditar rutas canónicas vigentes |
| `H08-5-DEPS-017` | dependencia disponible localmente pero ausente del manifiesto | instalación limpia como evidencia obligatoria |
| `H08-5-PAUSE-018` | pausa estratégica insuficientemente visible | pausa explícita después de activación |
| `H08-5-COMMENT-019` | frontera de comentarios necesitó reafirmación | IA prepara; humano revisa y publica |
| `H08-5-ANSI-020` | códigos ANSI impidieron parsear Vitest | normalizar salida antes del parser |
| `H08-5-RESUME-021` | commit local pendiente durante reanudación | distinguir HEAD local, remoto y funcional |
| `H08-5-EVENTUAL-022` | lectura remota mostró SHA anterior tras push | espera acotada de convergencia |
| `H08-5-RELATIVE-023` | rutas ya relativas pasaron por `relative_to(repo)` | normalización compatible con rutas relativas y absolutas |

### Decisiones humanas ratificadas al cierre y transición

#### Merge independiente

```yaml
decision: RATIFIED
rule:
  merge_PR_62: INDEPENDENT_OPERATION
  kit_generation: AFTER_CONFIRMED_MERGE
  combined_merge_and_kit_operator: REJECTED
evidence:
  merge_commit: ae93ccef94506724559b8df7b1ccdfeb0489a927
  merged_at_UTC: 2026-07-22T19:56:10Z
```

#### Kit y prompt para conversación nueva

```yaml
decision: RATIFIED
rule:
  startup_ZIP: EXTERNAL_ARTIFACT
  activation_prompt_MD: SEPARATE_EXTERNAL_COPY
  prompt_external_equals_internal: REQUIRED
  next_session: NEW_HUMAN_CONVERSATION
  purpose: CONTROL_CONTEXT_WINDOW_PER_SESSION
  H08_6_implementation: NOT_STARTED
```

### Integración humano · máquina · IA observada en H08-5

```text
humano
  corrige inferencias, define límites, autoriza gates y responde por decisiones

máquina
  ejecuta, valida, detiene, registra y confirma estados locales y remotos

IA
  analiza, diseña, diagnostica, redacta y sintetiza sin apropiarse de autoridad
```

### Próxima revisión

Al inicio de H08-6:

1. cargar el prompt externo y el ZIP;
2. verificar manifiesto, checksums y baseline;
3. revisar la atestación post-merge H08-5;
4. revisar el protocolo v3.1 completo;
5. revisar esta bitácora completa;
6. realizar el momento de alineamiento epistemológico y estratégico;
7. decidir humanamente el alcance de H08-6;
8. no crear rama, PR ni implementación antes de ese acuerdo.
