# Plan de Ruta aprobado · AI StoryLab 1 v0.9.0

```yaml
document_status: APPROVED_BY_HUMAN
binding: true
architecture_approved: true
pedagogical_scope_alignment: HUMAN_RATIFIED
activation_authorized: true
branch_creation: AUTHORIZED
first_commit: AUTHORIZED
push: PENDING_SEPARATE_HUMAN_AUTHORIZATION
PR_creation: BLOCKED
functional_implementation: BLOCKED
release_candidate_creation: BLOCKED
GATE_V09_RC_execution: BLOCKED
repository: ricardojuanmorales/ai-storylab-1
canonical_branch: main
canonical_head: f0996d0bd79c4bd70d9a802ce4cbf67b5c076419
source_PR: 63
protocol: v3.2
approval_date: 2026-07-24
```

## 1. Pregunta rectora

¿Cómo validaremos, endureceremos, documentaremos y empaquetaremos AI StoryLab 1 como release candidate sin diluir la agencia humana, la privacidad local-first, la accesibilidad, la reversibilidad creativa y el carácter transdisciplinario consolidado en v0.8.0?

## 2. Tesis estratégica

Una release candidate de AI StoryLab 1 no debe entenderse como una proclamación de producto terminado ni como autorización de publicación.

Debe entenderse como una afirmación limitada y verificable:

> Un commit exacto del producto puede construirse, probarse, comprenderse, utilizarse localmente y empaquetarse de forma reproducible dentro de un conjunto explícito de entornos, limitaciones y reservas, sin alterar sus compromisos humanos, creativos, éticos y local-first.

La RC no debe convertir la madurez técnica en una excusa para ampliar funcionalidad. v0.9.0 debe cerrar la distancia entre prototipo estabilizado y candidata verificable, no abrir una nueva fase de producto.

## 3. Separación epistemológica

### 3.1 Hechos verificados

1. v0.8.0 está cerrada.
2. H08-6 está `CLOSED/PASS`.
3. `GATE-V08-CLOSE` autorizó preparar la entrada de v0.9.0 sin reservas adicionales.
4. `main` apunta al merge commit canónico `f0996d0bd79c4bd70d9a802ce4cbf67b5c076419`.
5. La CI post-merge verificó el baseline en Node 22 y Node 24.
6. La regresión heredada contiene 49 archivos y 248 pruebas.
7. La auditoría heredada reporta cero vulnerabilidades y cero hallazgos bloqueantes.
8. La revisión independiente de H08-6A fue procedimental, no organizacional ni realizada por una tercera parte externa.
9. La aplicación principal declara Node `>=22 <27`, aunque la CI observada cubre Node 22 y Node 24.
10. El repositorio contiene deriva de documentación y versionado que debe resolverse antes de una RC:
    - el README raíz todavía describe H08-3, PR #60 y un baseline anterior;
    - el `package.json` raíz declara versión `0.3.0`;
    - `apps/storylab/package.json` declara `0.8.0-alpha.1`.

### 3.2 Inferencias que deben ponerse a prueba

1. El núcleo estabilizado de v0.8.0 está preparado para una validación formal de candidata.
2. La suite actual puede convertirse en una suite candidata estable sin ocultar brechas de cobertura.
3. La matriz Node 22/24 es suficiente o puede ampliarse de manera razonable.
4. El producto puede construirse y ejecutarse desde un entorno limpio sin conocimiento tácito del equipo.
5. El artefacto empaquetado puede preservar comportamiento local-first, privacidad y reversibilidad.
6. La documentación puede permitir que una persona nueva comprenda instalación, límites, recuperación, importación, exportación y privacidad.
7. El producto visible representa suficientemente su identidad transdisciplinaria y de aprendizaje lúdico.
8. Las deudas históricas marcadas como `accepted` o `deferred` siguen vigentes y no fueron resueltas materialmente durante v0.8.0 sin actualización del registro.

Ninguna de estas inferencias debe transformarse en hecho por repetición documental.

### 3.3 Propuestas aprobadas como arquitectura de trabajo

1. Organizar v0.9.0 como un gran hito con una rama y un solo Draft PR, después de autorización separada.
2. Usar una arquitectura interna H09-0 a H09-7, seguida por H09-A y `GATE-V09-RC`.
3. Exigir un operador único, reanudable y con gates internos para cada hito.
4. Definir la RC mediante un contrato de afirmaciones y evidencia.
5. Separar defectos bloqueantes, deuda aceptable y expansión funcional.
6. Utilizar solamente datos sintéticos, fixtures controlados y revisión experta no investigativa.
7. Exigir un artefacto reproducible, un manifiesto y checksums antes del gate.
8. Mantener la creación, etiquetado y publicación de la RC como decisiones posteriores y separadas.

La aprobación de esta arquitectura no autoriza los hitos posteriores a H09-0.

### 3.4 Decisiones humanas pendientes

- autorizar el push del primer commit documental;
- autorizar la apertura de un Draft PR;
- autorizar H09-1 y los hitos posteriores uno a uno;
- definir plataformas, navegadores y versiones Node oficialmente soportadas;
- determinar la forma del artefacto de candidata;
- definir el estándar de reproducibilidad exigido;
- seleccionar la nomenclatura de versión RC;
- decidir los umbrales de vulnerabilidades y defectos;
- decidir si una revisión externa es requisito o reserva;
- aceptar, rechazar o reclasificar deuda no bloqueante;
- autorizar separadamente cada reparación;
- ejecutar `GATE-V09-RC`;
- autorizar posteriormente cualquier tag, artefacto publicado o release.

### 3.5 Acuerdo de control de alcance pedagógico y deuda aceptada

```yaml
agreement_status: HUMAN_RATIFIED
scope_effect: INTERPRETIVE_AND_DOCUMENTARY
new_hito_created: false
functional_expansion_authorized: false
core_v0_8_reopening: PROHIBITED_UNLESS_BLOCKING_EVIDENCE
```

#### 3.5.1 Decisión estratégica ratificada

El núcleo de `v0.8.0` se considera suficientemente robusto para entrar en validación formal y release readiness.

`v0.9.0` no se utilizará para reconstruir ampliamente los servicios pedagógicos del MVP `v0.3.0` ni para abrir una nueva fase de expansión funcional.

La candidata deberá demostrar la calidad, reproducibilidad, comprensión y honestidad documental del producto existente, no la incorporación apresurada de toda capacidad histórica o deseable.

La ausencia de riqueza pedagógica ampliada no constituye, por sí misma, evidencia de defecto en el núcleo consolidado.

#### 3.5.2 Cierre pedagógico mínimo obligatorio

El cierre pedagógico mínimo se realizará dentro de H09-6, con revisión cualitativa en H09-3, verificación del paquete cerrado en H09-A y disposición final en `GATE-V09-RC`.

Debe producir únicamente:

1. una guía de usuario vigente y fiel al comportamiento real;
2. una matriz mínima que relacione M1 a M4 con competencias esenciales, evidencias y decisiones humanas;
3. un registro explícito de deuda epistemológica y pedagógica;
4. una declaración honesta del alcance de `v1.0.0`.

Estas cuatro salidas forman un solo movimiento documental y de trazabilidad. No deben convertirse en hitos separados.

#### 3.5.3 Deuda inicialmente no bloqueante

```yaml
accepted_non_blocking_pedagogical_debt:
  glossary:
    - glosario_interactivo_completo
    - chips_contextuales_por_mision
    - buscador_y_filtros
    - personalizacion_institucional

  tools:
    - tablero_completo_de_herramientas
    - catalogo_vivo_de_proveedores
    - notas_institucionales_editables
    - integraciones_externas

  ludic_learning:
    - multiples_widgets_no_textuales
    - nueve_tipos_de_actividad
    - insignias
    - mentor_virtual
    - mecanicas_de_progreso_ampliadas

  prompts:
    - prompts_contextuales_por_mision
    - prellenado_de_variables
    - registro_ampliado_de_prompts

  competencies:
    - competencias_visibles_en_UI
    - taxonomias_finales_por_publico
    - niveles_de_desempeno
    - rubricas_ampliadas
    - rutas_adaptativas

  guides:
    - guia_docente_completa
    - guia_del_facilitador_operacional
    - guia_institucional
    - guias_diferenciadas_para_cuatro_publicos

  specialized_interfaces:
    - vista_del_facilitador
    - dashboard_grupal
    - interfaz_investigativa
```

Tratamiento:

```yaml
classification: ACCEPTED_NON_BLOCKING_EPISTEMOLOGICAL_PEDAGOGICAL_DEBT
blocks_v0_9_RC_by_default: false
blocks_v1_0_publication_by_default: false
target_evolution: FIRST_POST_V1_MINOR_RELEASE
provisional_target: v1.1.0
human_reassessment_before_reopening: required
```

La deuda queda diferida, gobernada y visible. No queda olvidada ni autorizada para implementación.

#### 3.5.4 Regla de reclasificación

Un elemento de esta deuda solo podrá convertirse en hallazgo bloqueante cuando exista evidencia de que su ausencia:

- impide comprender el uso seguro del producto;
- produce documentación falsa o engañosa;
- rompe accesibilidad;
- debilita privacidad;
- impide persistencia, recuperación o roundtrip;
- transfiere decisiones creativas a la máquina o a la IA;
- elimina una condición esencial de agencia humana;
- impide sostener una afirmación central de la candidata.

La comparación estética con `v0.3.0`, el número de funciones históricas o el deseo de mayor riqueza pedagógica no constituyen evidencia bloqueante.

La reclasificación requiere:

```text
evidencia
→ clasificación del hallazgo
→ reparación focalizada propuesta
→ autorización humana
```

Una reparación focalizada no queda autorizada por el acto de reclasificación. Requiere una decisión humana posterior y específica.

#### 3.5.5 Relación con v1.0.0

`v1.0.0` publicará lo validado por la candidata. No será una fase para introducir capacidades mayores no verificadas.

La expansión pedagógica se planificará como primer ciclo evolutivo posterior a la publicación estable, provisionalmente `v1.1.0`, mediante plan, alcance y gate propios.

```yaml
scope_controls:
  pedagogical_debt_is_not_implementation_backlog: true
  accepted_debt_is_not_forgotten: true
  accepted_debt_is_not_authorized_work: true
  absence_is_not_blocking_without_evidence: true
  no_new_hitos_for_each_debt_item: true
  no_core_reopening_by_inference: true
  v1_0_publishes_validated_scope_only: true
```

## 4. Definiciones operacionales aprobadas

### 4.1 Validación

Validación es el proceso de relacionar cada afirmación de la candidata con evidencia suficiente, reproducible y atribuida a un head exacto.

Incluye pruebas automatizadas, validación en entornos soportados, revisión manual de accesibilidad y experiencia, revisión PH-IT-AT, instalación desde un entorno limpio, comprobación de documentación, verificación del artefacto empaquetado y registro de limitaciones y deuda.

No incluye investigación con participantes, generalizaciones sobre usuarios reales ni afirmaciones de efectividad educativa no demostradas.

### 4.2 Endurecimiento

Endurecimiento es la reducción focalizada de fallos, ambigüedades y superficies de riesgo que impedirían sostener la candidata.

Puede incluir, con autorización específica, correcciones críticas, seguridad, compatibilidad de schemas, recuperación ante corrupción o cuota, portabilidad, accesibilidad y metadatos.

No incluye nuevas capacidades mayores, rediseños expansivos ni recuperación automática de características históricas fuera del alcance aprobado.

### 4.3 Documentación de candidata

Es el conjunto sincronizado de documentos que permite identificar el producto, instalarlo, comprender sus límites, usar importación y recuperación, entender la privacidad, reproducir pruebas y builds, interpretar deuda y rastrear commit, artefacto, manifiesto y CI.

La documentación se considera parte de la calidad del producto, no decoración alrededor del código.

### 4.4 Release candidate

Una release candidate es un artefacto generado desde un commit congelado y elegible que posee versión inequívoca, puede reproducirse, contiene manifiesto y checksums, supera pruebas y smoke tests, preserva las invariantes local-first, declara entornos y limitaciones, incluye deuda aceptada y recibe revisión humana y checkpoint independiente.

La elegibilidad no crea automáticamente un tag, una publicación ni una release de GitHub.

## 5. Arquitectura interna aprobada

Cada hito conserva un solo movimiento principal. Ningún hito posterior queda abierto por inferencia al cerrarse el anterior.

### H09-0 · Activación documental y contrato de fase

**Movimiento único:** establecer la fase autorizada desde el baseline exacto.

**Contenido:** decisión humana, alcance, arquitectura, contrato de evidencia, riesgos, continuidad, rama y primer commit documental. El Draft PR requiere autorización separada.

**Criterio de salida:** fase activada sin cambios funcionales y con los hitos posteriores bloqueados.

### H09-1 · Contrato de candidata y matriz de soporte

**Movimiento único:** definir qué afirmaciones podrá sostener la RC y en qué entornos.

**Productos:** matriz afirmación-evidencia, matriz Node, sistemas y navegadores, política de compatibilidad, artefacto, defectos, vulnerabilidades, reproducibilidad y brechas.

**Checkpoint `CP-V09-1`:** aprobación humana del contrato y la matriz de soporte.

### H09-2 · Suite candidata y baseline reproducible

**Movimiento único:** convertir la verificación heredada en una suite estable y demostrarla desde entornos limpios.

Las reparaciones requieren un token humano específico.

### H09-3 · Accesibilidad, usabilidad autorizada e integridad transdisciplinaria

**Movimiento único:** revisar la experiencia sin investigación con participantes.

Glosario, herramientas y actividades lúdicas se examinan como brecha representacional. Su incorporación funcional no queda autorizada.

La ausencia de estas capacidades se presume deuda no bloqueante conforme a 3.5. H09-3 no diseñará su reintegración ni generará hitos adicionales. Solo podrá recomendar reclasificación cuando exista evidencia concreta de impacto sobre accesibilidad, privacidad, agencia humana, comprensión segura o veracidad de la candidata.

Puede recomendar defecto bloqueante de identidad, reparación mínima autorizable, documentación de limitación o deuda post-RC. Una clasificación bloqueante exige evidencia y una reparación exige autorización humana específica.

### H09-4 · Seguridad, privacidad, dependencias y compatibilidad

**Movimiento único:** endurecer exclusivamente lo que pueda bloquear la candidata.

**Checkpoint `CP-V09-2`:** autorización humana para aceptar reservas o devolver hallazgos a reparación.

### H09-5 · Empaquetado y reproducibilidad

**Movimiento único:** producir y verificar el modelo de artefacto, todavía sin publicarlo como RC.

**Criterio de salida:** dos construcciones controladas producen el resultado reproducible acordado.

### H09-6 · Documentación, versionado y reconciliación de deuda

**Movimiento único:** alinear la verdad documental, técnica, perceptual, epistemológica y pedagógica.

**Productos:**

- README, versiones, instalación, uso, recuperación, privacidad y limitaciones;
- guía técnica y guía de verificación;
- problemas conocidos;
- reconciliación del registro primario de deuda;
- guía de usuario vigente basada en M1 a M4 y en las funciones reales;
- matriz mínima M1-M4, competencia esencial, evidencia y decisión humana;
- registro de deuda epistemológica y pedagógica con ID, justificación, riesgo, versión objetivo y condición de reapertura;
- declaración de que `v1.0.0` ofrece un arco creativo mínimo completo, sin afirmar paridad total con `v0.3.0`.

Estas cuatro últimas salidas constituyen un solo cierre pedagógico documental.

> H09-6 no implementará glosario, herramientas, actividades, prompts, insignias, interfaces especializadas ni ampliaciones de misión. Su función es reconciliar la verdad documental y aceptar o reclasificar deuda, no expandir el producto.

**Checkpoint `CP-V09-3`:** aprobación humana del paquete documental y de la deuda aceptada.

### H09-7 · Ensamblaje de candidata y regresión congelada

**Movimiento único:** congelar un head candidato y ejecutar su validación integral.

**Criterio de salida:** `RC_ELIGIBLE_CANDIDATE`, una recomendación técnica que no equivale a gate aprobado.

### H09-A · Checkpoint independiente

**Movimiento único:** revisar la evidencia de un head cerrado sin modificar el producto.

Incluye verificación de las cuatro salidas del cierre pedagógico mínimo, sin convertirlas en trabajo funcional ni hitos separados.

```yaml
procedural_independence: required
organizational_independence: not_assumed
external_third_party_review: pending_human_decision
product_changes_during_checkpoint: prohibited
```

## 6. GATE-V09-RC aprobado como gate futuro

### 6.1 Propósito

Determinar si un head exacto es elegible para convertirse en release candidate. El gate no crea la RC y no publica nada.

### 6.2 Criterios obligatorios

#### Integridad y trazabilidad

- baseline y head exactos;
- worktree y staging controlados;
- manifiestos y checksums válidos;
- evidencia enlazada;
- ausencia de placeholders críticos.

#### Validación

- suite candidata completa en verde;
- matriz de entornos satisfecha;
- instalación limpia;
- build y smoke test reproducibles;
- compatibilidad, recuperación y roundtrip verificados.

#### Seguridad y privacidad

- cero hallazgos críticos no aceptados;
- dependencias bloqueadas y auditadas;
- ausencia de secretos y datos reales;
- importación desconfiada y privacidad local-first preservadas.

#### Accesibilidad y agencia

- cero barreras P1 no aceptadas;
- revisión manual y PH-IT-AT completadas;
- decisiones reversibles;
- la persona conserva criterio y control.

#### Documentación y empaquetado

- versión coherente;
- README y guías sincronizados;
- limitaciones y plataformas declaradas;
- artefacto reproducible;
- guía de usuario correspondiente al comportamiento real;
- ausencia de promesas sobre capacidades no implementadas;
- matriz mínima de trazabilidad competencial M1 a M4.

#### Deuda

- cero deuda bloqueante abierta;
- deuda no bloqueante aceptada explícitamente;
- deuda epistemológica y pedagógica visible;
- clasificación ratificada por decisión humana;
- versión objetivo post-v1 y condiciones de reapertura documentadas;
- cero ampliaciones pedagógicas mayores incorporadas sin autorización.

#### Gobernanza

- H09-A completado;
- comentarios preparados para publicación manual;
- Ready, gate, tag, release y publicación separados;
- decisión humana explícita.

### 6.3 Evidencia mínima

```yaml
gate_evidence:
  exact_head:
  CI_runs:
  supported_environment_matrix:
  stable_suite_results:
  clean_install_results:
  build_reproducibility_report:
  candidate_artifact_manifest:
  artifact_sha256:
  accessibility_review:
  PH_IT_AT_review:
  security_privacy_report:
  dependency_inventory:
  schema_compatibility_report:
  known_issues:
  accepted_debt:
  no_scope_expansion_attestation:
  independent_checkpoint:
  current_user_guide:
  essential_competency_traceability:
  pedagogical_debt_register:
  candidate_scope_statement:
  pedagogical_scope_control_attestation:
```

### 6.4 Resultados posibles

```yaml
PASS_RC_ELIGIBLE:
  meaning: el head puede pasar a una decisión separada de creación de RC
PASS_WITH_EXPLICIT_RESERVATIONS_RC_ELIGIBLE:
  meaning: elegible solo con reservas humanas visibles y aceptadas
RETURN_TO_HARDENING:
  meaning: existen defectos reparables que bloquean la candidata
DEFER_GATE:
  meaning: falta evidencia o decisión y el estado se preserva
```

Ningún resultado autoriza automáticamente tag, release, publicación o merge.

## 7. No alcance canónico

Permanece fuera de alcance, salvo nueva decisión humana expresa:

- investigación con participantes y datos reales;
- backend, autenticación, nube o base de datos remota;
- marketplace, telemetría y analíticas;
- IA externa o embebida por defecto;
- publicación o sincronización automática;
- capacidades funcionales mayores y rediseño total;
- expansión de misiones;
- glosario interactivo completo, catálogo histórico, prompts contextuales, insignias, mentor virtual e interfaces especializadas;
- afirmaciones generales de efectividad educativa;
- tag o release automática.

## 8. Riesgos, reservas y deuda

Riesgos potencialmente bloqueantes: matriz de soporte incompleta, artefacto no reproducible, deriva documental y de versiones, fallos de privacidad, accesibilidad, seguridad o evidencia.

Reservas: revisión no externa, ausencia de participantes, cobertura limitada de navegadores y dispositivos, representatividad lúdica y estándar de reproducibilidad pendiente.

La deuda pedagógica ratificada en 3.5 es no bloqueante por defecto. Toda aceptación debe tener ID, justificación, riesgo, versión objetivo, condición de reapertura y decisión humana.

## 9. Integración humano, IA, máquina y documentación

### Persona

Define propósito y soporte; aprueba alcance; autoriza activación, commits, push, PR, reparaciones y gates; acepta deuda y reservas; decide Ready, merge, tag y publicación.

### IA

Recupera continuidad; separa hechos e inferencias; diseña operadores; mantiene allowlists; interpreta evidencia; prepara documentos y comentarios; no emite el veredicto humano ni convierte deuda en trabajo autorizado.

### Máquina

Instala, construye, prueba, compara, calcula hashes, inspecciona y registra resultados exactos.

### Sistema documental

Conserva decisiones, evidencia, deuda, reservas, transferencias y verdad histórica.

```text
humano orienta y autoriza
→ IA estructura y reduce complejidad
→ máquina ejecuta y demuestra
→ IA interpreta y transfiere
→ humano decide
→ documentación conserva
```

## 10. Aplicación del Protocolo v3.2

```text
un hito
→ un movimiento
→ un operador reanudable
→ evidencia
→ decisión humana
```

H09-3 revisa sin implementar deuda pedagógica. H09-6 documenta y clasifica en un solo movimiento. H09-A verifica el paquete cerrado. `GATE-V09-RC` acepta, reclasifica o devuelve. Ningún elemento diferido genera por sí solo un operador. Ningún análisis de IA autoriza trabajo. Rama, commit, push, PR, reparaciones y gates requieren las autorizaciones que correspondan. Los comentarios de GitHub se preparan para publicación manual.

## 11. Estado de apertura

```yaml
OPEN_01_v0_8_closed: SATISFIED
OPEN_02_PR_63_merged: SATISFIED
OPEN_03_post_merge_CI: SATISFIED
OPEN_04_protocol_identified: SATISFIED
OPEN_05_external_kit_verified:
  technical_state: SATISFIED
  content_reservation:
    - external_protocol_approval_date_placeholder
OPEN_06_strategic_alignment: SATISFIED
OPEN_06A_pedagogical_scope_alignment:
  drafted: true
  human_ratification: SATISFIED
  creates_new_hito: false
  authorizes_functional_expansion: false
OPEN_07_route_plan: SATISFIED
OPEN_08_activation: AUTHORIZED
OPEN_09_branch: AUTHORIZED
OPEN_10_first_documentary_commit: AUTHORIZED
push: BLOCKED_PENDING_SEPARATE_AUTHORIZATION
Draft_PR: BLOCKED
functional_work: BLOCKED
H09_1: BLOCKED
GATE_V09_RC: NOT_AUTHORIZED
```

## 12. Efecto de la aprobación y activación

El Plan de Ruta y su acuerdo pedagógico son vinculantes para v0.9.0. La activación autoriza H09-0, su rama y el primer commit documental. No autoriza push, Draft PR, implementación, reparación, H09-1, tag, candidata ni gate.
