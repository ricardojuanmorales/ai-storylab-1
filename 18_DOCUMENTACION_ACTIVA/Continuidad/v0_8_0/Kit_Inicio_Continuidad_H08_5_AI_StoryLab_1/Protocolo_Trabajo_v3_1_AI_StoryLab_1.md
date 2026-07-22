# Protocolo de Trabajo v3.1 de AI StoryLab 1

**Estado:** `APROBADO_PARA_USO_H08`
**Aprobación humana:** explícita
**Fecha de aprobación:** 2026-07-21
**Vigencia:** inmediata para los trabajos restantes de H08
**Naturaleza:** protocolo vivo de coordinación humano · IA · máquina
**Acompañante obligatorio:** `Bitacora_Evolucion_Protocolo_v3_1_AI_StoryLab_1.md`
**Revisión:** al inicio y al cierre de cada sesión H08
**Canonización SDD definitiva:** diferida hasta evaluación longitudinal posterior a H08-6

---

## Propósito

Este protocolo organiza el trabajo longitudinal de AI StoryLab 1 para que cada
sesión produzca progreso técnico, evidencia verificable, continuidad documental
y decisiones humanas claras.

Su diseño protege simultáneamente:

- agencia humana;
- rigor técnico;
- memoria longitudinal;
- eficiencia operacional;
- reflexión epistemológica;
- coherencia transdisciplinaria;
- integración responsable entre humano, IA y máquina.

La unidad mínima de continuidad no es una conversación aislada. Es un ciclo
completo:

```text
kit heredado
→ verificación
→ revisión de atestación
→ alineamiento epistemológico y estratégico
→ acuerdo humano de sesión
→ primer commit de kit y activación
→ trabajo técnico y documental
→ último commit de cierre documental
→ atestación final fuera del repositorio
→ generación del próximo kit
→ nueva conversación
```

---

## Distribución de autoridad

### Humano

La persona responsable decide:

- propósito;
- valores;
- preguntas epistemológicas;
- prioridades;
- alcance;
- aceptación;
- apertura y cierre de gates;
- publicación;
- Ready for Review;
- merge;
- inicio de la siguiente fase.

La persona no es un aprobador tardío. Participa al comienzo en la definición de
sentido, límites y estrategia.

### IA

La IA:

- recupera acuerdos longitudinales;
- identifica contradicciones;
- formula preguntas;
- propone estructuras y alternativas;
- redacta borradores;
- prepara código y pruebas dentro del alcance;
- mantiene trazabilidad;
- explica riesgos;
- distingue hechos, inferencias y propuestas;
- reconoce errores y los convierte en controles;
- ayuda a conectar dimensiones técnicas, humanas, éticas, pedagógicas,
  documentales y estratégicas.

La IA no convierte inferencias en autorizaciones y no sustituye el juicio
humano.

### Máquina

La máquina:

- verifica rutas;
- ejecuta comandos;
- calcula hashes;
- corre pruebas;
- inspecciona Git;
- consulta CI;
- produce evidencia reproducible;
- confirma estados remotos;
- permite reanudar desde estados parciales.

La máquina no interpreta valores, no decide aceptación y no sustituye el
diálogo.

### Sistema documental

La documentación activa y la transferencia simétrica mantienen la continuidad
entre sesiones. Deben permitir reconstruir:

- qué se autorizó;
- qué se hizo;
- qué se verificó;
- qué quedó pendiente;
- qué cambió en el protocolo;
- desde qué estado debe continuar la próxima conversación.

---

## Arquitectura longitudinal de H08

### Un gran hito, una rama, un PR

Cada gran hito H08 utiliza una sola rama y un solo PR, aunque requiera múltiples
conversaciones.

Para H08-5:

```yaml
hito: H08-5
branch: feat/v0.8-h08-5-portfolio-roundtrip
PR: one_for_all_H08_5_conversations
base: main_post_H08_4_merge
internal_milestones: permitted
```

La formulación ratificada se interpreta así:

> un PR para el gran hito H08-5, con múltiples sesiones y sus hitos importantes
> al interior.

No se crean PR separados para:

- cada conversación;
- protocolo;
- kit;
- continuidad;
- cierre de sesión;
- subbloques;
- atestaciones.

### Una conversación no equivale a un PR

Una conversación puede producir varios commits dentro del PR único. El PR
conserva la historia completa desde el primer kit hasta el cierre global del
hito.

### Hitos internos

Los hitos internos organizan el trabajo y pueden tener:

- alcance;
- criterios;
- pruebas focalizadas;
- evidencia;
- comentario extendido;
- commit delimitado;
- gate humano cuando corresponda.

No se tratan como versiones semánticas independientes.

---

## Ciclo obligatorio de sesión

### Preparación externa al final de la sesión anterior

Después del último commit documental y de la confirmación de CI se generan,
fuera del repositorio:

- atestación post-transición;
- ZIP de inicio y continuidad;
- prompt de activación externo;
- manifiesto;
- checksums;
- protocolo aprobado;
- bitácora de evolución;
- estado canónico;
- transferencia simétrica;
- alcance pendiente;
- riesgos y reservas.

La atestación es el último acto de la sesión que termina. No se incorpora en un
commit adicional de esa misma sesión.

### Activación de la nueva conversación

La nueva conversación comienza con:

1. carga del prompt externo;
2. carga del ZIP;
3. lectura de `README.md`;
4. verificación de `MANIFEST.json`;
5. verificación de `CHECKSUMS.sha256`;
6. confirmación de baseline, rama y PR;
7. comparación del estado remoto con el kit;
8. revisión humana de la atestación heredada.

La conversación no comienza implementando código.

### Momento de alineamiento epistemológico y estratégico

Después de verificar el kit y antes de cualquier commit, se realiza un momento
humano de reflexión y planificación estratégica y longitudinal.

Este momento es obligatorio y casi ceremonial, pero no rígido. Su profundidad
se adapta a la complejidad real de la sesión.

Su función es:

- comprender qué se sabe y qué se supone;
- identificar preguntas abiertas;
- revisar el propósito humano;
- alinear la sesión con la trayectoria longitudinal;
- valorar tensiones técnicas, éticas, pedagógicas y documentales;
- optimizar la integración humano · IA · máquina;
- prevenir correcciones tardías por falta de acuerdo;
- fijar el protocolo efectivo de la sesión;
- acordar alcance, ritmos y gates.

### Naturaleza híbrida del gate

El momento de alineamiento combina dos propiedades:

```yaml
mandatory: true
dialogical: true
collaborative: true
depth: proportional_to_complexity
human_agreement_required: true
mechanical_checklist_only: false
```

Es un gate humano de sentido, no un formulario automático. Concluye cuando la
persona responsable expresa que existe alineamiento suficiente para abrir la
sesión.

### Primer commit obligatorio

Después del alineamiento y del acuerdo humano, el primer commit de cada sesión
es exclusivamente de kit y activación.

Incluye:

- kit heredado;
- atestación revisada;
- registro de activación;
- acuerdo de sesión;
- versión del protocolo ratificada;
- actualización mínima de documentación activa;
- prompt dentro del kit;
- manifiesto y checksums.

Prohíbe:

- código funcional;
- cambios de schema;
- cambios de persistencia;
- pruebas funcionales nuevas;
- refactors;
- deuda técnica no relacionada.

El primer commit documenta acuerdos ya reflexionados.

### Desarrollo de la sesión

Después del primer commit:

```text
planificación o spec
→ implementación delimitada
→ pruebas focalizadas
→ evidencia
→ commits de hitos internos
→ cierre documental
```

Cada commit intermedio debe ser coherente, verificable y legible.

### Último commit obligatorio

El último commit de la sesión es documental y no contiene cambios funcionales.

Consolida:

- bitácora de sesión;
- transferencia simétrica;
- estado canónico;
- riesgos, reservas y deuda;
- evidencia técnica;
- roadmap;
- decisiones humanas;
- impacto sobre el protocolo;
- cuerpo del PR;
- índice de comentarios;
- comentario extendido revisado.

El cierre documental es el último commit de la sesión.

### Atestación y próximo kit

Después del último commit y la CI:

1. se observa el estado remoto final;
2. se genera la atestación post-transición fuera del repositorio;
3. se genera el próximo kit;
4. se incluye la atestación en el kit;
5. se produce el prompt externo;
6. se verifica identidad entre prompt interno y externo;
7. se entregan ZIP, prompt y checksums;
8. se termina la conversación.

La atestación se revisa humanamente al inicio de la próxima sesión y entra al
repositorio dentro del primer commit de kit y activación.

---

## Contrato de commits

| Posición | Tipo | Contenido | Cambios funcionales |
|---|---|---|---|
| primero | kit y activación | kit heredado, atestación revisada, acuerdo de sesión | prohibidos |
| intermedios | trabajo | specs, código, pruebas y evidencia | permitidos dentro del alcance |
| último | cierre documental | bitácoras, transferencia, roadmap, PR y cierre | prohibidos |

### Reglas

- El primer commit debe ser identificable como activación.
- El último commit debe ser identificable como cierre.
- Los commits intermedios deben tener alcance legible.
- No se usa `git add -A` con un worktree mixto.
- No se reescribe la historia para ocultar errores.
- Una atestación post-transición se genera después del último commit y se
  incorpora al comienzo de la sesión siguiente.

---

## Doble canal

### Canal técnico-operacional

Se ocupa de:

- repositorio;
- rama;
- código;
- pruebas;
- Git;
- CI;
- hashes;
- artefactos;
- estado remoto.

Su ritmo es rápido, reproducible e idempotente.

### Canal narrativo y de gobernanza

Se ocupa de:

- propósito;
- decisiones;
- tensiones;
- riesgos;
- bitácoras;
- transferencia;
- comentarios;
- documentación canónica;
- gates humanos.

Su ritmo es reflexivo y humanamente aprobado.

### Sincronización

Los canales avanzan juntos, pero no se documenta todo después de cada comando.
La consolidación ocurre en gates significativos y en el cierre.

---

## Tres ritmos

### Técnico

- implementación;
- pruebas focalizadas;
- typecheck cuando aplique;
- revisión del diff;
- un verify completo en el gate acordado;
- CI.

### Narrativo

- diálogo;
- revisión humana;
- comentarios extendidos;
- decisiones;
- riesgos;
- interpretación de evidencia.

### Canónico

- primer commit de activación;
- cierres de hitos internos;
- último commit de sesión;
- cierre global del hito;
- Ready;
- merge;
- atestación post-transición.

---

## Comentarios extendidos y Canvas

Los comentarios extendidos se:

1. redactan como borrador;
2. revisan en Canvas;
3. ajustan dialógicamente;
4. publican manualmente.

La publicación manual después de la revisión en Canvas constituye la aprobación
humana implícita dentro del procedimiento. No se exige una segunda fórmula de
autorización, salvo que el texto cambie sustantivamente después de la revisión.

La IA no publica automáticamente un comentario destinado a revisión manual.

---

## Fuentes de continuidad

Las fuentes primarias son:

1. documentación activa;
2. transferencia simétrica;
3. estado remoto de GitHub;
4. rama y PR del hito;
5. kit heredado;
6. protocolo aprobado;
7. bitácora de evolución;
8. evidencia técnica.

La memoria conversacional es auxiliar.

---

## Nombres semánticos

Los archivos nuevos usan nombres semánticos y no prefijos numéricos.

```text
correcto:
  README.md
  Estado_Canonico_Entrada_H08_5.md
  Alcance_Integral_H08_5.md
  Protocolo_Trabajo_v3_1_AI_StoryLab_1.md

incorrecto:
  00_README.md
  01_Estado_Canonico.md
  02_Alcance.md
```

El orden de lectura se declara en `README.md` y `MANIFEST.json`.

Los directorios históricos numerados no se renombran por este protocolo.

---

## Contenido mínimo del kit

Cada kit incluye:

- `README.md`;
- `MANIFEST.json`;
- `CHECKSUMS.sha256`;
- decisión o acta de continuidad;
- atestación heredada;
- estado canónico;
- transferencia simétrica;
- alcance pendiente;
- decisiones vigentes;
- riesgos, reservas y deuda;
- evidencia o índice de evidencia;
- protocolo aprobado;
- bitácora de evolución;
- guía del momento de alineamiento;
- prompt de activación;
- instrucciones de reanudación;
- inventario de archivos.

El prompt externo debe ser idéntico a la copia del ZIP.

---

## Gates humanos

### Gate de alineamiento

Momento dialógico y estratégico que abre la sesión.

### Gate de bloque

Autoriza el trabajo local del hito interno.

### Gate de publicación

Autoriza commit, push y actualización remota del lote.

### Gate Ready for Review

Separado del cierre documental.

### Gate de merge

Separado de Ready y protegido por el head esperado.

### Gate de siguiente fase

No se infiere del merge. H08-6 requiere autorización independiente.

---

## Preflight de sesión

```yaml
continuity:
  kit_loaded: true
  manifest_valid: true
  checksums_valid: true
  prompt_matches_internal_copy: true
  inherited_attestation_reviewed: true

alignment:
  epistemic_questions_identified: true
  longitudinal_context_reviewed: true
  human_machine_AI_roles_aligned: true
  session_scope_agreed: true
  protocol_version_ratified: true
  human_alignment_gate: passed

repository:
  root: resolved
  branch: expected
  PR: expected
  main_head: known
  branch_head: known
  remote_head: known
  worktree: clean_or_scoped
  staging: empty_or_explained

governance:
  current_hito: explicit
  current_session: explicit
  internal_milestone: explicit
  allowed_scope: explicit
  forbidden_scope: explicit
  publication_gate: explicit
  ready_gate: explicit
  merge_gate: explicit
  next_phase_gate: explicit

runtime:
  shell: identified
  node: compatible
  package_manager: compatible
  dependencies: ready
  gh_auth: ready

evidence:
  expected_tests: explicit
  log_paths: namespaced
  CI_checks: explicit
  artifact_hashes: available
```

---

## Robustez de scripts

### Variables namespaced

```text
H08_5_WORKTREE
H08_5_LOG_DIR
H08_5_BRANCH
H08_5_PR
H08_5_EXPECTED_HEAD
```

### Heredoc Python

```bash
python3 - "$arg1" "$arg2" <<'PY'
# programa
PY
```

### Validar antes de crear

1. comprobar existencia;
2. clasificar estado;
3. decidir crear, reutilizar o bloquear;
4. ejecutar.

### Estados parciales

```yaml
UNTOUCHED:
GENERATED:
STAGED:
COMMITTED:
PUSHED:
CI_PENDING:
CI_PASSED:
PR_UPDATED:
COMPLETE:
```

### Revisión integral

Antes de entregar una corrección:

- revisar todo el flujo;
- validar heredocs;
- comprobar variables;
- simular estado limpio;
- simular residuo vacío;
- simular commit publicado;
- validar sintaxis;
- verificar alcance exacto.

---

## Matriz de herramientas remotas

| Acción | Conector | `gh` | Regla |
|---|---:|---:|---|
| leer PR | preferido | respaldo | confirmar estado |
| leer comentarios | preferido | respaldo | evitar duplicados |
| publicar comentario | según permiso | respaldo | revisión Canvas |
| actualizar cuerpo | según permiso | respaldo | verificar después |
| Ready | capacidad no asumida | respaldo principal | gate separado |
| merge | capacidad no asumida | respaldo principal | SHA protegido |
| Actions y logs | insuficiente | requerido | evidencia real |
| commit y push | no | requerido | staging selectivo |

Un `403 Resource not accessible by integration` es una limitación de herramienta,
no un defecto del repositorio.

---

## Verificación eficiente

- pruebas focalizadas por hito interno;
- typecheck cuando cambian tipos o UI;
- un verify completo en el cierre acordado;
- CI después de publicación;
- evidencia reutilizable mientras el head no cambie;
- no repetir checks sin cambio material;
- no usar ceremonia como sustituto de razonamiento.

---

## Documentación y verdad temporal

Los documentos históricos conservan el estado verdadero de su creación.

Después de Ready, merge u otra transición se añaden:

- atestación;
- documentación activa;
- roadmap;
- transferencia;
- reconciliación del PR.

No se reescribe retroactivamente un cierre.

---

## Evaluación al cierre

El último commit registra:

```yaml
session:
  planned_scope:
  completed_scope:
  deferred_scope:
  focused_tests:
  full_verify:
  CI:
  risks:
  debt:
  protocol_version_used: 3.1
  alignment_outcome:
  protocol_observations:
  human_decisions:
  next_session_attestation: generated_after_commit
  next_session_kit: generated_after_commit
```

La bitácora del protocolo se actualiza con observaciones reales.

---

## Estado aprobado

```yaml
protocol_version: 3.1
status: APROBADO_PARA_USO_H08
effective_immediately: true
companion_log: APROBADO_PARA_USO_H08
next_review: beginning_and_close_of_each_H08_session
final_longitudinal_evaluation: after_H08_6
```
