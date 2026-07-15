# Registro Maestro de Decisiones · C1

## AI StoryLab 1

**Identificador:** `DOC-DOC-007`\
**Fase:** C1-C · Decisiones, deuda y gates\
**Estado:** Borrador para aprobación humana\
**Fecha:** 2026-07-11\
**PR de trabajo:** PR #30\
**Rama:** `docs/c1-completar-indices-metadatos`\
**Dependencias:** C0 cerrado, C1.1 vigente, C1-A aprobado y C1-B cerrado\
**Alcance:** Decisiones rectoras, estratégicas, funcionales, técnicas y documentales prioritarias\
**Restricciones:** Este registro identifica, normaliza y relaciona decisiones. No modifica su alcance original, no crea autoridad retroactiva, no cierra deuda, no ejecuta gates, no mueve documentos, no inicia C2 y no abre v0.8.0.

---

## 1. Propósito

Este registro consolida las decisiones prioritarias que gobiernan o condicionan AI StoryLab 1.

Debe permitir responder:

```text
qué se decidió;
cuándo se decidió;
quién tenía autoridad para decidir;
qué evidencia sostiene la decisión;
qué alcance controla;
qué documentos afecta;
si continúa activa;
si ya cumplió su función;
si fue sustituida;
qué decisión posterior la desarrolla.
```

La incorporación de una decisión a este registro no amplía su autoridad.

Una decisión mantiene únicamente el alcance que fue aprobado en su fuente original.

---

## 2. Campos del registro

Toda decisión deberá poder declarar:

| Campo                | Función                                           |
| -------------------- | ------------------------------------------------- |
| `decision_id`        | Identificador persistente                         |
| `legacy_ids`         | Identificadores históricos o alternos             |
| `title`              | Nombre breve                                      |
| `scope`              | Alcance de la decisión                            |
| `status`             | `proposed`, `ratified`, `superseded` o `rejected` |
| `lifecycle`          | Condición operativa actual                        |
| `decision_date`      | Fecha de decisión                                 |
| `authority`          | Persona, grupo o gate que decidió                 |
| `evidence`           | PR, comentario, acta o documento                  |
| `affected_documents` | Identificadores documentales relacionados         |
| `related_decisions`  | Decisiones complementarias                        |
| `successor_decision` | Decisión sucesora explícita, cuando exista        |
| `notes`              | Límites o aclaraciones                            |

---

## 3. Estados y ciclo de vida

### 3.1 Estado decisional

| Estado       | Interpretación                                     |
| ------------ | -------------------------------------------------- |
| `proposed`   | Presentada para revisión, todavía sin ratificación |
| `ratified`   | Aprobada dentro de su alcance                      |
| `superseded` | Sustituida por una decisión posterior explícita    |
| `rejected`   | No aprobada                                        |

### 3.2 Ciclo de vida

| Ciclo                  | Interpretación                                     |
| ---------------------- | -------------------------------------------------- |
| `active`               | Continúa gobernando o condicionando trabajo        |
| `fulfilled`            | Cumplió su propósito puntual                       |
| `historical_reference` | Conserva valor probatorio o contextual             |
| `pending_resolution`   | Requiere decisión posterior                        |
| `blocked`              | No puede ejecutarse mientras exista un impedimento |
| `not_applicable`       | Ya no aplica por cambio explícito de alcance       |

Una decisión `ratified` puede tener ciclo `fulfilled`.

Esto significa que fue válida y cumplió su función, no que haya sido revocada.

---

## 4. Reglas de normalización

### REG-C1C-DEC-001 · Preservación de identificadores

Los identificadores históricos únicos se conservan.

Ejemplos:

```text
DEC-C0-001
DEC-v0.6-001
DEC-FUNC-v0.6-001
DEC-v0.7-AP-001
```

### REG-C1C-DEC-002 · Normalización de identificadores genéricos

Los códigos genéricos de la auditoría:

```text
DEC-001
DEC-002
...
DEC-012
```

se normalizan como:

```text
DEC-AUD25-001
DEC-AUD25-002
...
DEC-AUD25-012
```

El código original permanece en `legacy_ids`.

### REG-C1C-DEC-003 · Identidad no implica autoridad nueva

Asignar o normalizar un identificador no:

- ratifica una propuesta;
- amplía su alcance;
- autoriza implementación;
- ejecuta una migración;
- resuelve deuda;
- abre una fase.

### REG-C1C-DEC-004 · Decisiones agrupadas

Cuando una fuente contiene muchas decisiones con identificadores propios, el registro conserva cada código.

Cuando una fuente contiene determinaciones aprobadas sin código individual, C1 puede asignar un identificador retrospectivo únicamente para trazabilidad.

### REG-C1C-DEC-005 · Ninguna sucesión implícita

Una decisión posterior puede desarrollar, aplicar o cumplir una decisión anterior sin sustituirla.

`successor_decision` solo se utilizará cuando la sustitución sea explícita.

### REG-C1C-DEC-006 · Alcance de las decisiones de auditoría

La aprobación del PR #25 ratifica:

- el diagnóstico;
- las prioridades;
- la estructura objetivo hipotética;
- el plan de corrección.

No autoriza automáticamente la ejecución de C0–C10.

### REG-C1C-DEC-007 · Separación entre decisión y gate

Una decisión puede definir qué debe ocurrir.

El gate determina si una transición concreta queda autorizada.

Una decisión no sustituye el gate aplicable.

---

# 5. Decisiones ratificadas de C0

## Metadatos comunes

```yaml
decision_date: 2026-07-11
authority: Gate Humano G0-C0
evidence:
  - PR #27
  - Dictamen_Autoridad_Precedencia_Documental_C0_AI_StoryLab_1.md
status: ratified
```

| Decision ID  | Título                                                                               | Alcance                      | Ciclo       | Documentos afectados               | Decisiones relacionadas                  | Sucesora        |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------------- | ----------- | ---------------------------------- | ---------------------------------------- | --------------- |
| `DEC-C0-001` | Ratificar el protocolo de cartapacios                                                | Colocación documental        | `active`    | `DOC-GOB-001`                      | `DEC-C0-002`                             | `none_declared` |
| `DEC-C0-002` | Ratificar `00_CONTROL_MAESTRO/Spec_Driven_Development` como autoridad SDD            | Gobernanza SDD               | `active`    | `DOC-SDD-001`, `DOC-SDD-002`       | `DEC-C0-003`, `DEC-C0-004`, `DEC-C0-005` | `none_declared` |
| `DEC-C0-003` | Ratificar `.specify` como workspace técnico                                          | Operación y trazabilidad SDD | `active`    | `workspace:.specify`               | `DEC-C0-002`                             | `none_declared` |
| `DEC-C0-004` | Ratificar que `07` modela y que la instancia aprobada prevalece dentro de su alcance | Plantillas e instancias      | `active`    | `DOC-REF-001`, `DOC-DOC-003`       | `DEC-C0-002`                             | `none_declared` |
| `DEC-C0-005` | Ratificar que `05` forma y no redefine doctrina o vigencia                           | Formación y competencias     | `active`    | `collection:Base_Conocimiento_SDD` | `DEC-C0-002`                             | `none_declared` |
| `DEC-C0-006` | Activar HOLD documental ante conflicto no resuelto                                   | Integridad documental        | `active`    | `all_registered_documents`         | `DEC-C1-008`                             | `none_declared` |
| `DEC-C0-007` | Mantener C1, C2 y v0.8.0 fuera del alcance del PR de C0                              | Límite del PR #27            | `fulfilled` | `DOC-GOB-002`                      | `DEC-C1-001`, `DEC-C1-002`               | `none_declared` |

---

# 6. Decisiones de auditoría estructural PR #25

## Metadatos comunes

```yaml
decision_date: 2026-07-11
authority: aprobación humana del PR #25
evidence:
  - PR #25
  - Matriz_Final_Hallazgos_Decisiones_AI_StoryLab_1.csv
  - Informe_Final_Auditoria_Estructural_AI_StoryLab_1.md
status: ratified
scope_limit: diagnóstico, dirección estructural y plan; no ejecución automática
```

| Decision ID     | Legacy ID | Título                                                                        | Prioridad | Ciclo                | Documentos o capas afectadas                                                      | Relacionadas               | Sucesora        |
| --------------- | --------- | ----------------------------------------------------------------------------- | --------- | -------------------- | --------------------------------------------------------------------------------- | -------------------------- | --------------- |
| `DEC-AUD25-001` | `DEC-001` | Una sola fuente activa por documento sustantivo                               | P1        | `active`             | Todos los documentos sustantivos                                                  | `DEC-C1-004`               | `none_declared` |
| `DEC-AUD25-002` | `DEC-002` | `00` gobierna, `.specify` opera, `07` modela y `05` forma                     | P1        | `fulfilled`          | Capas SDD, plantillas y formación                                                 | `DEC-C0-002`–`005`         | `none_declared` |
| `DEC-AUD25-003` | `DEC-003` | Evaluar nuevo contenedor de arquitectura y diseño                             | P1        | `pending_resolution` | `DOC-ARQ-001`–`004`, `DOC-UX-002`–`007`, `DOC-DAT-001`–`002`, `DOC-SEG-002`–`004` | C2, C3 y C4                | `none_declared` |
| `DEC-AUD25-004` | `DEC-004` | La versión es metadato e historia, no ruta primaria                           | P1        | `active`             | Todos los documentos versionados                                                  | `DEC-C1-005`, `DEC-C1-006` | `none_declared` |
| `DEC-AUD25-005` | `DEC-005` | `00` conserva método y `15` conserva resultados, gates y evidencia            | P1        | `pending_resolution` | `DOC-AUD-001`–`005`                                                               | C5                         | `none_declared` |
| `DEC-AUD25-006` | `DEC-006` | `18` conserva memoria, continuidad y decisiones, no autoridad general         | P1        | `active`             | Fuentes bajo `18_DOCUMENTACION_ACTIVA`                                            | `DEC-C1-005`, `DEC-C1-007` | `none_declared` |
| `DEC-AUD25-007` | `DEC-007` | `20` será fuente primaria de deuda activa mediante IDs únicos                 | P1        | `pending_resolution` | Registros de deuda                                                                | C1-C y C7                  | `none_declared` |
| `DEC-AUD25-008` | `DEC-008` | `99` funcionará como archivo con manifiesto, no vigencia y no edición         | P1        | `pending_resolution` | `99_ARCHIVO_HISTORICO`                                                            | C8                         | `none_declared` |
| `DEC-AUD25-009` | `DEC-009` | `21` será capa humana derivada que referencia fuentes canónicas               | P2        | `pending_resolution` | `21_WIKI_DOCUMENTACION_HUMANA`                                                    | C9                         | `none_declared` |
| `DEC-AUD25-010` | `DEC-010` | Ejecutar la corrección mediante PR separados, lotes controlados y reversibles | P1        | `active`             | Fases C0–C10                                                                      | `DEC-C1-001`, `DEC-C1-002` | `none_declared` |
| `DEC-AUD25-011` | `DEC-011` | Tratar la apertura de v0.8.0 como decisión independiente                      | P1        | `active`             | Ruta versionada v0.8.0                                                            | `DEC-V07-015`              | `none_declared` |
| `DEC-AUD25-012` | `DEC-012` | Cerrar el PR #25 como auditoría y plan, no como migración                     | P1        | `fulfilled`          | `DOC-AUD-001`–`005`                                                               | C0–C10                     | `none_declared` |

---

# 7. Decisión de ruta v0.5–v1.0

```yaml
decision_id: DEC-V05-001
legacy_ids: none
title: Definir v1.0.0 como ecosistema funcional publicable
scope: ruta versionada v0.5.0 a v1.0.0
status: ratified
lifecycle: active
decision_date: 2026-07-06
authority: decisión humana documentada en v0.5.0 y PR #19
evidence:
  - Decision_Correccion_Ruta_v1_0_0_Ecosistema_Funcional_v0_5_0_AI_StoryLab.md
  - PR #19
affected_documents:
  - DOC-GOB-004
  - DOC-GOB-005
  - DOC-GOB-006
related_decisions:
  - DEC-AUD25-011
  - DEC-V07-002
  - DEC-V07-003
  - DEC-V07-004
successor_decision: none_declared
notes: v1.0.0 no es un horizonte exclusivamente documental
```

Ruta ratificada:

```text
v0.5 · Gobernanza y roadmap
v0.6 · Diseño funcional y UX
v0.7 · Arquitectura técnica y seguridad
v0.8 · Implementación incremental
v0.9 · Validación y marketplace readiness
v1.0 · Publicación estable
```

---

# 8. Decisiones v0.6 · Diseño Funcional y UX

## Metadatos comunes

```yaml
decision_date: 2026-07-07
authority: aprobación humana documentada en PR #20
evidence:
  - Registro_Decisiones_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
  - PR #20
status: ratified
successor_decision: none_declared
```

## 8.1 Decisiones marco

| Decision ID    | Título                                           | Ciclo       | Documentos afectados                                            |
| -------------- | ------------------------------------------------ | ----------- | --------------------------------------------------------------- |
| `DEC-v0.6-001` | Activar v0.6 como diseño funcional y UX          | `fulfilled` | `DOC-ARQ-001`, `DOC-ARQ-002`, `DOC-UX-002`–`006`, `DOC-GOB-007` |
| `DEC-v0.6-002` | Mantener PR #20 en draft durante la construcción | `fulfilled` | `process:PR20`                                                  |
| `DEC-v0.6-003` | Preservar aprobación humana explícita            | `active`    | Todos los documentos v0.6                                       |
| `DEC-v0.6-004` | Integrar documentos sin sufijo `_APROBADO`       | `active`    | Todos los documentos canónicos                                  |
| `DEC-v0.6-005` | Actualizar bitácoras en bloque al cierre         | `fulfilled` | `process:PR20`                                                  |

## 8.2 Decisiones funcionales

| Decision ID         | Título                                                                 | Ciclo    | Documentos afectados                       |
| ------------------- | ---------------------------------------------------------------------- | -------- | ------------------------------------------ |
| `DEC-FUNC-v0.6-001` | Separar función ecosistémica de protocolo GitHub                       | `active` | `DOC-ARQ-001`                              |
| `DEC-FUNC-v0.6-002` | Incluir memoria formativa, portafolio y reflexión como capa funcional  | `active` | `DOC-ARQ-001`, `DOC-UX-002`, `DOC-ARQ-002` |
| `DEC-FUNC-v0.6-003` | Distinguir documentación, portafolio, evidencia, reflexión y curaduría | `active` | `DOC-ARQ-001`, `DOC-UX-002`                |
| `DEC-FUNC-v0.6-004` | Definir portafolio como memoria viva                                   | `active` | `DOC-UX-002`, `DOC-ARQ-002`                |
| `DEC-FUNC-v0.6-005` | Tratar evidencia como rastro contextualizado                           | `active` | `DOC-UX-002`, `DOC-ARQ-002`                |
| `DEC-FUNC-v0.6-006` | Considerar transferencia como continuidad, no publicación              | `active` | `DOC-UX-003`, `DOC-UX-005`                 |

## 8.3 Decisiones sobre misión

| Decision ID           | Título                                                       | Ciclo       | Documentos afectados                       |
| --------------------- | ------------------------------------------------------------ | ----------- | ------------------------------------------ |
| `DEC-MISION-v0.6-001` | Definir misión como unidad pedagógico-creativa de producción | `active`    | `DOC-GOB-007`                              |
| `DEC-MISION-v0.6-002` | Toda misión tendrá núcleo mínimo y libertad creativa         | `active`    | `DOC-GOB-007`                              |
| `DEC-MISION-v0.6-003` | Diferenciar escuela superior y universidad mediante capas    | `active`    | `DOC-GOB-007`, `DOC-UX-004`                |
| `DEC-MISION-v0.6-004` | Incorporar asistencia docente como componente funcional      | `active`    | `DOC-GOB-007`, `DOC-UX-004`                |
| `DEC-MISION-v0.6-005` | Asociar herramientas al evento de producción                 | `active`    | `DOC-GOB-007`, `DOC-UX-003`                |
| `DEC-MISION-v0.6-006` | Mantener IA como andamiaje externo opcional                  | `active`    | `DOC-GOB-007`, `DOC-UX-006`                |
| `DEC-MISION-v0.6-007` | Declarar referencias externas bajo control humano            | `active`    | `DOC-GOB-007`, `DOC-UX-003`, `DOC-ARQ-002` |
| `DEC-MISION-v0.6-008` | Hacer que la misión contribuya al portafolio vivo            | `active`    | `DOC-GOB-007`, `DOC-ARQ-002`               |
| `DEC-MISION-v0.6-009` | Tratar la producción como cadena iterativa                   | `active`    | `DOC-GOB-007`, `DOC-UX-003`                |
| `DEC-MISION-v0.6-010` | Distinguir completitud de excelencia                         | `active`    | `DOC-GOB-007`, `DOC-UX-003`                |
| `DEC-MISION-v0.6-011` | Preparar evaluación futura sin validar en v0.6               | `fulfilled` | `DOC-GOB-007`, `DOC-UX-004`                |
| `DEC-MISION-v0.6-012` | Prever adaptación en toda misión                             | `active`    | `DOC-GOB-007`, `DOC-UX-005`                |

## 8.4 Decisiones humano-IA

| Decision ID        | Título                                                  | Ciclo    | Documentos afectados                      |
| ------------------ | ------------------------------------------------------- | -------- | ----------------------------------------- |
| `DEC-HIA-v0.6-001` | No asumir IA embebida                                   | `active` | `DOC-UX-006`, `DOC-ARQ-002`               |
| `DEC-HIA-v0.6-002` | Utilizar prompts sugeridos editables y opcionales       | `active` | `DOC-UX-006`, `DOC-GOB-007`               |
| `DEC-HIA-v0.6-003` | Permitir completar toda misión sin herramienta externa  | `active` | `DOC-UX-005`, `DOC-UX-006`, `DOC-GOB-007` |
| `DEC-HIA-v0.6-004` | Registrar uso externo con contexto humano               | `active` | `DOC-UX-006`, `DOC-ARQ-002`               |
| `DEC-HIA-v0.6-005` | Mantener la reflexión humana o apropiada por la persona | `active` | `DOC-UX-006`, `DOC-ARQ-002`               |
| `DEC-HIA-v0.6-006` | El docente acompaña sin producir por el estudiante      | `active` | `DOC-UX-004`, `DOC-UX-006`                |

## 8.5 Decisiones sobre herencia v0.3

| Decision ID         | Título                                                       | Ciclo    | Documentos afectados                 |
| ------------------- | ------------------------------------------------------------ | -------- | ------------------------------------ |
| `DEC-HIST-v0.6-001` | Tratar misiones S1–S9 como antecedente histórico             | `active` | `historical:MVP-v0.3`                |
| `DEC-HIST-v0.6-002` | Utilizar una gramática configurable de misiones              | `active` | `DOC-GOB-007`                        |
| `DEC-HIST-v0.6-003` | Mantener la correspondencia S1–S9 como referencia secundaria | `active` | `historical:MVP-v0.3`, `DOC-GOB-007` |

## 8.6 Decisiones de gate y cierre

| Decision ID           | Título                                                                   | Ciclo       | Documentos afectados           |
| --------------------- | ------------------------------------------------------------------------ | ----------- | ------------------------------ |
| `DEC-GATE-v0.6-001`   | Ubicar gate entre cierre técnico-documental y v0.7                       | `fulfilled` | `process:transition-v0.6-v0.7` |
| `DEC-GATE-v0.6-002`   | Nombrar Gate de Transición Controlada v0.6 → v0.7                        | `fulfilled` | `process:transition-v0.6-v0.7` |
| `DEC-GATE-v0.6-003`   | Adoptar dictamen de paso condicionado                                    | `fulfilled` | `process:transition-v0.6-v0.7` |
| `DEC-GATE-v0.6-004`   | Impedir activación de v0.7 por acta, auditoría, bitácora o merge aislado | `fulfilled` | `process:transition-v0.6-v0.7` |
| `DEC-CIERRE-v0.6-001` | Adoptar ruta limpia antes del merge                                      | `fulfilled` | Documentos PR #20              |
| `DEC-CIERRE-v0.6-002` | Completar bitácoras y registros antes del merge                          | `fulfilled` | Documentos PR #20              |

---

# 9. Decisiones de apertura v0.7

## Metadatos comunes

```yaml
decision_date: 2026-07-09
authority: aprobación humana documentada en PR #22
evidence:
  - Registro_Decisiones_Hito_Apertura_v0_7_AI_StoryLab.md
  - PR #22
status: ratified
successor_decision: none_declared
```

| Decision ID       | Título                                                  | Ciclo                  | Documentos afectados |
| ----------------- | ------------------------------------------------------- | ---------------------- | -------------------- |
| `DEC-v0.7-AP-001` | Aprobar kit de inicio v0.7                              | `fulfilled`            | `process:PR22`       |
| `DEC-v0.7-AP-002` | Trabajar manualmente desde Terminal de VS Code          | `historical_reference` | `process:PR22`       |
| `DEC-v0.7-AP-003` | Usar PR #22 como PR único del Hito de Apertura          | `fulfilled`            | `process:PR22`       |
| `DEC-v0.7-AP-004` | No crear bitácoras prematuramente                       | `fulfilled`            | `process:PR22`       |
| `DEC-v0.7-AP-005` | Aprobar control de calidad y auditoría estratégica      | `fulfilled`            | `process:PR22`       |
| `DEC-v0.7-AP-006` | Aprobar mapa estratégico de apertura v0.7               | `fulfilled`            | `process:PR22`       |
| `DEC-v0.7-AP-007` | Consolidar bitácoras al cierre                          | `fulfilled`            | `process:PR22`       |
| `DEC-v0.7-AP-008` | Mantener PR #22 en draft hasta dictamen humano          | `fulfilled`            | `process:PR22`       |
| `DEC-v0.7-AP-009` | Mantener merge pendiente de aprobación humana explícita | `fulfilled`            | `process:PR22`       |

---

# 10. Decisiones técnicas y de cierre v0.7

Estas decisiones no tenían un identificador individual uniforme en la descripción final del PR #23.

C1 les asigna códigos retrospectivos para trazabilidad.

## Metadatos comunes

```yaml
decision_date:
  substantive_closure: 2026-07-10
  formal_gate: 2026-07-10
authority:
  - aprobación humana del PR #23
  - Gate de Cierre Formal PR #24
evidence:
  - PR #23
  - PR #24
  - Acta_Cierre_Formal_Gate_v0_7_0_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md
status: ratified
successor_decision: none_declared
```

| Decision ID   | Título                                                                                           | Ciclo       | Documentos afectados                                                               |
| ------------- | ------------------------------------------------------------------------------------------------ | ----------- | ---------------------------------------------------------------------------------- |
| `DEC-V07-001` | Cerrar v0.7 como arquitectura documental, no implementación                                      | `fulfilled` | `DOC-ARQ-003`–`004`, `DOC-DAT-001`–`002`, `DOC-SEG-002`–`004`, `DOC-GOB-008`–`009` |
| `DEC-V07-002` | Reservar v0.8 para implementación incremental controlada                                         | `active`    | Ruta v0.8.0                                                                        |
| `DEC-V07-003` | Reservar v0.9 para validación y marketplace readiness                                            | `active`    | Ruta v0.9.0                                                                        |
| `DEC-V07-004` | Mantener v1.0 como publicación estable del ecosistema funcional                                  | `active`    | `DOC-GOB-004`–`006`, `DOC-GOB-008`                                                 |
| `DEC-V07-005` | No equiparar v1.0 automáticamente con backend, autenticación, APIs IA, galería o analíticas      | `active`    | Arquitectura futura                                                                |
| `DEC-V07-006` | Exigir gate independiente para toda función mayor futura                                         | `active`    | Fases v0.8–v1.0                                                                    |
| `DEC-V07-007` | Exigir trazabilidad de implementación a familia, decisión, módulo, objeto, datos, deuda y gate   | `active`    | `DOC-GOB-009`, `DOC-ARQ-004`, `DOC-DAT-001`                                        |
| `DEC-V07-008` | Mantener activa la deuda `DFUX-FAC-v0.6-001`                                                     | `active`    | `DOC-UX-007`, `DOC-SEG-002`, `DOC-SEG-004`                                         |
| `DEC-V07-009` | Definir al facilitador como acompañante y no vigilante                                           | `active`    | `DOC-UX-007`, `DOC-SEG-002`, `DOC-FOR-001`                                         |
| `DEC-V07-010` | Definir portafolio curado, no registro completo del progreso                                     | `active`    | `DOC-DAT-002`                                                                      |
| `DEC-V07-011` | Registrar metadatos mínimos de entrega sin almacenar automáticamente archivos finales            | `active`    | `DOC-DAT-002`                                                                      |
| `DEC-V07-012` | Mantener IA externa, opcional, manual, documentada y no embebida                                 | `active`    | `DOC-OPS-001`, `DOC-SEG-003`, `DOC-SEG-004`                                        |
| `DEC-V07-013` | Tratar privacidad por defecto, seguridad por diseño y agencia humana como límites no negociables | `active`    | `DOC-SEG-003`, `DOC-SEG-004`, `DOC-UX-007`                                         |
| `DEC-V07-014` | Cerrar formalmente v0.7 con deudas activas controladas                                           | `fulfilled` | `process:PR24`, documentos v0.7                                                    |
| `DEC-V07-015` | No abrir automáticamente v0.8.0 al cerrar v0.7                                                   | `active`    | Ruta v0.8.0                                                                        |

---

# 11. Decisiones de la fase C1

## Metadatos comunes

```yaml
decision_date: 2026-07-11
authority: aprobación humana registrada en PR #30
evidence:
  - Hito C1-A
  - Hito C1-B
status: ratified
successor_decision: none_declared
```

| Decision ID  | Título                                                                                        | Ciclo    | Documentos afectados                                                              |
| ------------ | --------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------- |
| `DEC-C1-001` | Utilizar una rama nueva y un PR por fase                                                      | `active` | `DOC-DOC-002`                                                                     |
| `DEC-C1-002` | Organizar cada PR de fase mediante bloques funcionales, aprobaciones parciales y gate final   | `active` | `DOC-DOC-002`                                                                     |
| `DEC-C1-003` | Conservar PR #29 como fundamento C1.1 y completar C1 mediante PR #30                          | `active` | `DOC-DOC-001`, `DOC-DOC-002`                                                      |
| `DEC-C1-004` | Exigir una sola fuente activa y canónica por alcance                                          | `active` | `DOC-DOC-004`, `DOC-DOC-005`                                                      |
| `DEC-C1-005` | Distinguir contenido vigente, ruta actual y ruta funcional futura                             | `active` | `DOC-DOC-004`, `DOC-DOC-005`                                                      |
| `DEC-C1-006` | Mantener identificador estable durante una elevación de ruta                                  | `active` | `DOC-DOC-004`, `DOC-DOC-006`                                                      |
| `DEC-C1-007` | Clasificar memoria y auditoría como evidencia no competitiva                                  | `active` | `DOC-AUD-001`–`005`, artefactos de continuidad                                    |
| `DEC-C1-008` | Mantener bajo HOLD la declaración masiva de specs y colecciones no examinadas individualmente | `active` | `.specify`, `collection:Base_Conocimiento_SDD`                                    |
| `DEC-C1-009` | Reconocer fuentes v0.6 y v0.7 como vigentes en rutas transitorias                             | `active` | `DOC-ARQ-001`–`004`, `DOC-UX-002`–`007`, `DOC-DAT-001`–`002`, `DOC-SEG-002`–`004` |
| `DEC-C1-010` | Registrar sucesión y deprecación sin ejecutarlas durante C1                                   | `active` | `DOC-DOC-006`                                                                     |


## 11.1 Decisiones de cierre C3

```yaml
decision_date: 2026-07-12
authority: aprobación humana explícita registrada en PR #39
evidence:
  - PR #38
  - merge c1ebf74408716846f9eb2c131ce989b7a188fa1c
  - PR #39
  - head aprobado a620d93be7ed5f7ae229265f1e42edeabcbf2c98
  - merge 369ee01023911538ec313af82b14bc54c8cf4d6e
  - comentario de decisión humana en PR #39
  - DOC-DOC-028
  - DOC-DOC-029
status: ratified
successor_decision: none_declared
```

| Decision ID | Título | Ciclo | Documentos afectados |
|---|---|---|---|
| `DEC-C3-001` | Resolver `DEBT-GOV-004` tras completar la elevación funcional | `fulfilled` | `DOC-DOC-008`, `DOC-DOC-028`–`030` |
| `DEC-C3-002` | Cerrar formalmente C3 sin iniciar C4 | `fulfilled` | `process:C3`, `DOC-UX-007`, `GATE-CORR-G3` |

Límites de ambas decisiones:

```text
C4: no iniciado
GATE-CORR-G3: pending / future
DOC-UX-007: permanece en HOLD para evaluación futura C4
v0.8.0: no abierto
implementación: no autorizada
```
---

## 11.2 Decisiones de cierre C4

<!-- C4_CLOSURE_DECISIONS -->

```yaml
decision_date: 2026-07-13
authority: autorización humana explícita “Adelante con C4-B consolidado”
evidence:
  - PR #41
  - merge d522065bca7232758934558293c0942532babfab
  - commit de elevación residual a37fc82bc0f617ab3f0a4eff1440911d8116a9b1
  - GATE-CORR-G3 approved / fulfilled
  - DOC-DOC-031
status: ratified
successor_decision: none_declared
```

| Decision ID | Título | Ciclo | Documentos afectados |
|---|---|---|---|
| `DEC-C4-001` | Elevar el corpus técnico residual aprobado | `fulfilled` | `DOC-SEG-002`, `DOC-ARQ-004`, `DOC-OPS-001`, `DOC-OPS-002`, `DOC-GOB-008`, `DOC-GOB-009` |
| `DEC-C4-002` | Diferir `DOC-REF-002` a C9 y mantener `DOC-UX-007` en HOLD | `active` | `DOC-REF-002`, `DOC-UX-007`, `DFUX-FAC-v0.6-001` |
| `DEC-C4-003` | Cerrar C4 y resolver `DEBT-GOV-005` sin abrir v0.8.0 | `fulfilled` | `DEBT-GOV-005`, `GATE-CORR-G3`, `process:C4` |

Límites:

```text
DEBT-GOV-012: blocked
DOC-UX-007: HOLD
DFUX-FAC-v0.6-001: active
v0.8.0: not open
implementation: not authorized
```

# 12. Decisiones no explotadas en IDs individuales durante C1

Los documentos sustantivos de v0.7 contienen subdecisiones internas sobre:

- arquitectura local-first;
- modelo conceptual de datos;
- roles y permisos;
- seguridad;
- privacidad;
- trazabilidad;
- prompts;
- herramientas;
- glosario;
- entrega;
- arquitectura modular;
- gobernanza técnica.

C1 no asignará un ID independiente a cada oración normativa o criterio interno.

Solo se creará una decisión individual cuando exista:

1. determinación diferenciable;
2. alcance propio;
3. evidencia de aprobación;
4. necesidad de trazabilidad independiente;
5. relación con gate, deuda o implementación futura.

La normalización detallada de las decisiones arquitectónicas se realizará en C4.

---

# 13. Relaciones entre decisiones

## 13.1 Desarrollo, no sustitución

| Decisión de origen  | Decisión posterior         | Relación                                                 |
| ------------------- | -------------------------- | -------------------------------------------------------- |
| `DEC-AUD25-001`     | `DEC-C1-004`               | C1 aplica la regla de fuente única                       |
| `DEC-AUD25-002`     | `DEC-C0-002`–`005`         | C0 ratifica la precedencia recomendada                   |
| `DEC-AUD25-004`     | `DEC-C1-005`, `DEC-C1-006` | C1 operacionaliza versión, ruta e identidad              |
| `DEC-AUD25-010`     | `DEC-C1-001`, `DEC-C1-002` | C1 adopta ejecución por fase y bloque                    |
| `DEC-AUD25-011`     | `DEC-V07-015`              | El cierre v0.7 mantiene v0.8 como decisión independiente |
| `DEC-V05-001`       | `DEC-V07-002`–`004`        | v0.7 preserva la ruta versionada                         |
| `DEC-HIA-v0.6-001`  | `DEC-V07-012`              | v0.7 mantiene IA no embebida                             |
| `DEC-FUNC-v0.6-004` | `DEC-V07-010`              | v0.7 concreta portafolio curado                          |
| `DEC-C0-006`        | `DEC-C1-008`               | C1 aplica HOLD a colecciones no resueltas                |

Ninguna relación de esta tabla constituye sucesión formal.

---

# 14. Decisiones potencialmente cumplidas

Las decisiones siguientes cumplieron un propósito limitado y no deben utilizarse como reglas universales para fases futuras:

```text
DEC-C0-007
DEC-v0.6-002
DEC-v0.6-005
DEC-GATE-v0.6-001
DEC-GATE-v0.6-002
DEC-GATE-v0.6-003
DEC-GATE-v0.6-004
DEC-CIERRE-v0.6-001
DEC-CIERRE-v0.6-002
DEC-v0.7-AP-001
DEC-v0.7-AP-003
DEC-v0.7-AP-004
DEC-v0.7-AP-005
DEC-v0.7-AP-006
DEC-v0.7-AP-007
DEC-v0.7-AP-008
DEC-v0.7-AP-009
DEC-V07-001
DEC-V07-014
```

Estado:

```yaml
status: ratified
lifecycle: fulfilled
```

No se consideran `superseded` porque no existe una decisión sucesora explícita que las invalide.

---

# 15. Decisiones pendientes de resolución futura

| Decisión        | Materia pendiente                                     | Fase esperada        |
| --------------- | ----------------------------------------------------- | -------------------- |
| `DEC-AUD25-003` | Contenedor final de arquitectura y diseño             | C2                   |
| `DEC-AUD25-005` | Separación operativa entre método y resultados        | C5                   |
| `DEC-AUD25-007` | Fuente primaria consolidada de deuda                  | C7                   |
| `DEC-AUD25-008` | Política y manifiestos de archivo histórico           | C8                   |
| `DEC-AUD25-009` | Navegación humana derivada                            | C9                   |
| `DEC-V07-008`   | Resolución de `DFUX-FAC-v0.6-001`                     | C3–C4                |
| `DEC-C1-008`    | Revisión individual de specs y colecciones formativas | C1 auxiliar, C4 o C9 |

Estas decisiones no están rechazadas.

Permanecen:

```text
status: ratified
lifecycle: pending_resolution
```

---

# 16. Validación del registro

Antes de aprobar este documento debe confirmarse que:

- cada `decision_id` es único;
- los códigos históricos permanecen visibles;
- `DEC-001`–`DEC-012` conservan su alias;
- ninguna decisión de auditoría se presenta como autorización automática de ejecución;
- las decisiones cumplidas no se marcan falsamente como sustituidas;
- las decisiones v0.6 mantienen sus códigos originales;
- las decisiones v0.7 de apertura mantienen sus códigos originales;
- los códigos `DEC-V07-001`–`015` se reconocen como normalización retrospectiva;
- ninguna decisión interna se inventa a partir de una frase aislada;
- toda decisión tiene autoridad y evidencia;
- los documentos afectados usan IDs cuando están disponibles;
- las decisiones pendientes permanecen visibles;
- C1-C no cierra deuda ni ejecuta gates;
- C2 no se inicia;
- v0.8.0 permanece cerrado.

---

# 17. Gate parcial C1-C.1

La revisión humana deberá seleccionar una opción:

- [x] **Aprobado.** El Registro Maestro de Decisiones puede integrarse y habilita los registros auxiliares de deuda y gates.
- [ ] **Aprobado con reservas.** Las reservas se registran en el comentario de hito.
- [ ] **Cambios requeridos.** El registro permanece en borrador.
- [ ] **Rechazado.** El registro no se incorpora.

La aprobación habilita:

```text
Registro_Maestro_Deuda_Gobernanza_C1_AI_StoryLab_1.md
Registro_Maestro_Gates_C1_AI_StoryLab_1.md
```

La aprobación no habilita:

```text
cierre de deuda;
ejecución de gates;
movimientos;
renombres;
eliminaciones;
deprecaciones;
inicio de C2;
apertura de v0.8.0;
merge final del PR #30.
```

---

# 18. Estado de salida esperado

```text
C0: cerrado
C1.1: vigente
C1-A: aprobado
C1-B: cerrado
C1-C.1: pendiente de aprobación
C1-C auxiliares: no iniciados
C1-D: no iniciado
C2: no iniciado
movimientos: ninguno
v0.8.0: no abierto
```

<!-- C5_CLOSURE_DECISIONS -->

## Decisiones de cierre C5

| Decision ID | Título | Ciclo | Documentos afectados |
|---|---|---|---|
| `DEC-C5-001` | Separar método de auditoría y resultados finales por autoridad, no mediante mudanza masiva | `fulfilled` | `00_CONTROL_MAESTRO/Auditorias_Estructurales`, `15_EVALUACION_CALIDAD_Y_AUDITORIA` |
| `DEC-C5-002` | Crear índices cruzados de transferencia y resultados | `fulfilled` | `DOC-AUD-006`, `DOC-AUD-007` |
| `DEC-C5-003` | Resolver `DEBT-GOV-006` y mantener `GATE-CORR-G4` pendiente | `fulfilled` | `DEBT-GOV-006`, `GATE-CORR-G4`, `process:C5` |

```text
C6: not opened
GATE-CORR-G4: pending
v0.8.0: not open
implementation: not authorized
```

<!-- C6_CLOSURE_DECISIONS -->

## Decisiones de cierre C6

| Decision ID | Título | Ciclo | Documentos afectados |
|---|---|---|---|
| `DEC-C6-001` | Formalizar el ciclo de vida de `18_DOCUMENTACION_ACTIVA` | `fulfilled` | `DOC-DOC-033`, `18_DOCUMENTACION_ACTIVA` |
| `DEC-C6-002` | Declarar memoria no canónica por defecto y autoridad acotada para decisiones | `fulfilled` | `DOC-GOB-004`–`006`, continuidad |
| `DEC-C6-003` | Poblar el índice de referencias canónicas sin eliminar memoria | `fulfilled` | `DOC-DOC-034`, veinte fuentes C3–C4 |
| `DEC-C6-004` | Resolver `DEBT-GOV-007` y mantener G4 y G5 pendientes | `fulfilled` | `DEBT-GOV-007`, `GATE-CORR-G4`, `GATE-CORR-G5` |

```text
DOC-UX-007: HOLD
DOC-REF-002: deferred to C9
C7: not opened
v0.8.0: not open
implementation: not authorized
```

<!-- C7_CLOSURE_DECISIONS -->

## Decisiones de cierre C7

| Decision ID | Título | Ciclo | Documentos afectados |
|---|---|---|---|
| `DEC-C7-001` | Establecer `20` como fuente primaria de deuda activa | `fulfilled` | `DOC-DOC-036`, `DOC-DOC-037` |
| `DEC-C7-002` | Conservar `00` como registro de identidad, resoluciones e historia | `fulfilled` | `DOC-DOC-008` |
| `DEC-C7-003` | Preservar registros distribuidos como fuentes no primarias con hash | `fulfilled` | `33 fuentes heredadas` |
| `DEC-C7-004` | Resolver `DEBT-GOV-008` y `DEBT-C1-007` sin cerrar G4 | `fulfilled` | `GATE-CORR-G4`, `process:C7` |

```text
active_unique_ids: 69
DEBT-GOV-009: open
DEBT-GOV-011: blocked
DEBT-GOV-012: blocked
C8: not opened
v0.8.0: not open
implementation: not authorized
```

<!-- C8_CLOSURE_DECISIONS -->

## Decisiones de cierre C8

| Decision ID | Título | Ciclo | Documentos afectados |
|---|---|---|---|
| `DEC-C8-001` | Activar `99` como archivo histórico gobernado | `fulfilled` | `DOC-DOC-039`, `99_ARCHIVO_HISTORICO` |
| `DEC-C8-002` | Declarar no vigencia y ausencia de autoridad del acervo | `fulfilled` | `91 acervos inventariados` |
| `DEC-C8-003` | Adoptar inmutabilidad y corrección por addendum | `fulfilled` | `DOC-DOC-039`, `DOC-DOC-040` |
| `DEC-C8-004` | Resolver `DEBT-GOV-009` y mantener G5 pendiente | `fulfilled` | `DEBT-GOV-009`, `GATE-CORR-G5` |

```text
C9: not opened
GATE-CORR-G4: pending / C10
GATE-CORR-G5: pending / contribution C8 complete
v0.8.0: not open
implementation: not authorized
```

<!-- C9_CLOSURE_DECISIONS -->

## Decisiones de cierre C9

| Decision ID | Título | Ciclo | Documentos afectados |
|---|---|---|---|
| `DEC-C9-001` | Alinear navegación humana con fuentes canónicas | `fulfilled` | `DOC-DOC-042`, Wiki |
| `DEC-C9-002` | Mantener `DOC-REF-002` como fuente única y excepción controlada | `fulfilled` | `DOC-REF-002`, puerta humana |
| `DEC-C9-003` | Resolver revisión individual de `.specify` sin activación masiva | `fulfilled` | `DOC-DOC-043`, 11 artefactos |
| `DEC-C9-004` | Crear índice interno de la Base SDD sin canonicidad heredada | `fulfilled` | `DOC-DOC-044`, 12 unidades |
| `DEC-C9-005` | Aprobar G5 con efectividad condicionada al merge | `awaiting_merge` | `GATE-CORR-G5`, C9 |

```text
DOC-UX-007: HOLD
C10: not opened
v0.8.0: not open
implementation: not authorized
```

<!-- C10_CLOSURE_DECISIONS -->

## Decisiones de cierre C10

| Decision ID | Título | Ciclo | Resultado |
|---|---|---|---|
| `DEC-C10-001` | Aprobar la validación integral reproducible | `fulfilled_effective_on_merge` | G4 aprobado |
| `DEC-C10-002` | Reconciliar C1-D y su gate final | `fulfilled` | PR #30 reconocido como cierre C1 |
| `DEC-C10-003` | Resolver ocho deudas estructurales | `fulfilled_effective_on_merge` | 57 deudas activas |
| `DEC-C10-004` | Aprobar G6 con reserva controlada | `fulfilled_effective_on_merge` | cero bloqueantes estructurales |
| `DEC-C10-005` | Cerrar la secuencia C0–C10 sin abrir v0.8 | `fulfilled_effective_on_merge` | cierre documental |

```text
DFUX-TRZ-005: blocked / future v0.8 gate
GATE-V08-OPEN-001: pending
implementation: not authorized
```


---

# Decisión de apertura limitada v0.8.0

<!-- H08_0_DECISION_V08_OPEN_001 -->

```yaml
decision_id: DEC-V08-OPEN-001
title: Aprobar con reservas la apertura limitada de v0.8.0
decision_date: 2026-07-14
authority: responsable humano de AI StoryLab 1
status: ratified_awaiting_integration
effective_on: merge_PR_50
gate: GATE-V08-OPEN-001
mvp: MVP-SDD-08-01
evidence:
  - PR #50
  - 18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/Kit_Inicio_Continuidad_Gate_Apertura_v0_8_0/Acta_Decision_Humana_GATE_V08_OPEN_001_APROBADA_CON_RESERVAS_AI_StoryLab_1.md
  - comentario de hito H08-0
allowed_result:
  - cerrar H08-0
  - abrir v0.8.0 de manera limitada
  - iniciar H08-1
  - resolver DFUX-TRZ-005
blocked_result:
  - implementación fuera de H08-1
  - datos reales
  - backend, cloud o autenticación
  - IA embebida
  - vigilancia, dashboard, analíticas o seguimiento grupal
  - galería pública, marketplace o publicación estable
  - selección irreversible del stack
reservations:
  - fixtures exclusivamente sintéticos
  - feature flags desactivados por defecto
  - contratos, schemas y pruebas reproducibles en H08-1
  - controles mínimos de seguridad y accesibilidad desde H08-1
  - revisión PH-IT-AT documentada
  - checkpoint humano antes de H08-2
successor_decision:
  - decisión humana de transición H08-1 → H08-2
```

| Decision ID | Título | Ciclo | Documentos afectados |
|---|---|---|---|
| `DEC-V08-OPEN-001` | Aprobar con reservas la apertura limitada de v0.8.0 | `effective_on_merge_PR_50` | `GATE-V08-OPEN-001`, `MVP-SDD-08-01`, `DFUX-TRZ-005`, `process:H08-0`, `process:H08-1` |

---

<!-- V08_PO_H08_1_PR52_DECISION_UPDATE -->

# Enmienda decisional PO-H08-1 · PR #52

```yaml
DEC_V08_REALIGN_001:
  assignment: retrospective_for_traceability
  status: ratified
  lifecycle: fulfilled
  effective_on: merge_PR_51
  result: v1_0_minimum_stable_ecosystem

DEC_V08_PO_H08_1_001:
  assignment: retrospective_for_traceability
  status: ratified
  lifecycle: awaiting_integration
  effective_on: merge_PR_52
  allowed_result:
    - integrate_PO_H08_1
    - begin_H08_1_with_reservations
  blocked_result:
    - complete_H08_1_by_inference
    - approve_Ready_to_Code_by_inference
    - open_H08_2
    - modify_active_debt_by_inference
```

La sucesión operativa vigente es:

```text
H08-1 → H08-1A → GATE-H08-1-READY-TO-CODE → H08-2
```

---

<!-- H08_1_1_ADR_DECISION_UPDATE -->

# Enmienda decisional H08-1.1

```yaml
decision_id: DEC-V08-H08-1-1-001
title: Adoptar arquitectura modular aislada provisional y frontera legacy
status: ratified
lifecycle: awaiting_integration
effective_on: merge_PR_H08_1_1
review_required_on: H08-1A
decision:
  - same_repository_isolated_app_root
  - React_Vite_provisional
  - TypeScript_contracts_provisional
  - domain_framework_independent
  - persistence_behind_ports
  - no_legacy_import_by_default
blocked_result:
  - irreversible_stack
  - H08_2
  - real_data
  - backend_auth_cloud_embedded_AI
```

---

<!-- H08_1_1_CLOSE_H08_1_2_OPEN_DECISION_UPDATE -->

# Enmienda decisional post-merge H08-1.1 y apertura H08-1.2

```yaml
DEC_V08_H08_1_1_001:
  lifecycle: fulfilled
  effective_since: merge_PR_53
  merge_commit: 5a5c4f9231ef092b3496a0019de1940fb19c14e6
  result:
    - architecture_provisional_in_force
    - legacy_boundary_in_force
    - H08_1_2_enabled

DEC_V08_H08_1_2_001:
  title: Fuentes de verdad complementarias para dominio y serialización
  status: ratified
  lifecycle: awaiting_integration
  effective_on: merge_PR_H08_1_2
  decision:
    domain_semantics: TypeScript
    serialized_boundaries: JSON_Schema_2020_12
    runtime_validator_library: deferred
    parity_tests: required_in_H08_1_3
    schema_version: 0.8.0-alpha.1
  blocked_result:
    - H08_2
    - direct_legacy_import
    - real_data
    - adapters_or_presentation
```
