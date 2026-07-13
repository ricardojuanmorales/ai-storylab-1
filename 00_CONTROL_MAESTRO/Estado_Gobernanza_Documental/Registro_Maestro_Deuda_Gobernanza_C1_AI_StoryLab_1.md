# Registro Maestro de Deuda de Gobernanza · C1

## AI StoryLab 1

**Identificador:** `DOC-DOC-008`
**Fase:** C1-C · Decisiones, deuda y gates
**Estado:** Borrador para aprobación humana
**Fecha:** 2026-07-11
**PR de trabajo:** PR #30
**Rama:** `docs/c1-completar-indices-metadatos`
**Documento rector relacionado:** `Registro_Maestro_Decisiones_C1_AI_StoryLab_1.md`
**Alcance:** Deuda documental, estructural, funcional, UX, técnica, ética y de gobernanza prioritaria
**Restricciones:** Este registro identifica, normaliza y relaciona deuda. No cierra deudas por declaración, no ejecuta soluciones, no mueve documentos, no inicia C2 y no abre v0.8.0.

---

## 1. Propósito

Este registro consolida la deuda prioritaria de AI StoryLab 1 sin borrar sus identificadores históricos ni confundir documentación producida con deuda resuelta.

Debe permitir responder:

```text
qué deuda existe;
de dónde proviene;
qué prioridad tiene;
cuál es su estado;
qué documentos afecta;
qué decisión la sostiene;
qué fase puede atenderla;
qué evidencia sería necesaria para cerrarla;
qué deuda está bloqueada;
qué deuda fue diferida deliberadamente.
```

La deuda no representa necesariamente una falla.

Puede representar:

- trabajo pendiente;
- riesgo aceptado;
- decisión diferida;
- condición de transición;
- necesidad de validación;
- memoria de diseño;
- restricción que debe permanecer visible.

---

## 2. Campos obligatorios

| Campo | Contenido |
|---|---|
| `debt_id` | Identificador persistente |
| `legacy_ids` | Identificadores históricos, cuando existan |
| `title` | Descripción breve |
| `domain` | Dominio principal |
| `priority` | P1, P2 o P3 |
| `status` | `open`, `accepted`, `blocked`, `resolved` o `deferred` |
| `source` | Hallazgo, auditoría, decisión o registro de origen |
| `affected_documents` | IDs documentales o capas afectadas |
| `related_decisions` | Decisiones aplicables |
| `owner` | Responsable, cuando exista |
| `target_phase` | Fase prevista |
| `acceptance_reference` | Evidencia de aceptación |
| `resolution_reference` | Evidencia de cierre |
| `closure_criteria` | Condiciones verificables de resolución |
| `notes` | Límites o aclaraciones |

---

## 3. Interpretación de estados

| Estado | Interpretación |
|---|---|
| `open` | Requiere trabajo o decisión |
| `accepted` | Permanece activa, reconocida y controlada |
| `blocked` | No puede resolverse por falta de gate, decisión o dependencia |
| `resolved` | Existe evidencia suficiente de cierre |
| `deferred` | Se atenderá en una fase posterior expresamente identificada |

### Regla de cierre

Una deuda solo puede marcarse `resolved` cuando exista:

```text
decisión documentada
+ evidencia verificable
+ documento, commit o PR asociado
+ validación de no contradicción
+ actualización del registro
+ aprobación humana cuando afecte alcance
```

Un documento relacionado no constituye por sí solo evidencia de resolución.

---

## 4. Reglas de normalización

### REG-C1C-DEBT-001 · Preservación de identificadores

Se conservan los identificadores históricos:

```text
DE-PR9-001
DFUX-LF-001
DFUX-FAC-v0.6-001
DEBT-GROUP-PROGRESS
```

### REG-C1C-DEBT-002 · Variantes de escritura

La forma:

```text
DFUX_FAC_v0_6_001
```

se reconoce como variante histórica de:

```text
DFUX-FAC-v0.6-001
```

El identificador canónico utilizado por C1 será:

```text
DFUX-FAC-v0.6-001
```

### REG-C1C-DEBT-003 · Riesgo no equivale a deuda

Los códigos:

```text
R-v0.7-001
R-v0.7-002
...
```

son riesgos, no deudas.

Solo se registran como deuda cuando una fuente aprobada les asigna explícitamente obligación pendiente.

### REG-C1C-DEBT-004 · Documento producido no equivale a cierre

Una deuda puede contar con documento conceptual y permanecer:

```text
status: accepted
```

hasta que se validen sus criterios de cierre.

### REG-C1C-DEBT-005 · C1 registra, C7 consolidará

C1 crea identidad y trazabilidad.

C7 decidirá la fuente primaria consolidada de deuda activa en:

```text
20_MANTENIMIENTO_Y_EVOLUCION
```

### REG-C1C-DEBT-006 · Ningún cierre retroactivo por inferencia

Un PR posterior puede aportar evidencia.

No cierra automáticamente todas las deudas temáticamente relacionadas.

---

# 5. Deuda histórica de PR #9

El registro v0.4.4 declara estas deudas pagadas, cerradas o controladas.

| Debt ID | Dominio | Estado C1 | Evidencia |
|---|---|---|---|
| `DE-PR9-001` | Orientación | `resolved` | README raíz actualizado |
| `DE-PR9-002` | README críticos | `resolved` | README críticos activados |
| `DE-PR9-003` | Mapa | `resolved` | Mapa real post-PR8 |
| `DE-PR9-004` | Excepción formativa | `resolved` | Excepción validada |
| `DE-PR9-005` | Documentación activa | `resolved` | README y protocolo |
| `DE-PR9-006` | Registro de deuda | `resolved` | Registro actualizado |
| `DE-PR9-007` | Gate | `resolved` | Gate constitucional incorporado |
| `DE-PR9-008` | Terminología SDD | `resolved` | Sigla oficial controlada |
| `DE-PR9-009` | Archivo histórico | `resolved` dentro de PR #9 | Criterio mínimo documentado |
| `DE-PR9-010` | Transferencia PH-IT-AT | `resolved` | Campo establecido |
| `DE-PR9-011` | Tabla de ubicación | `resolved` | Tabla incorporada |
| `DE-PR9-012` | Cierre PR #9 | `resolved` | PR #9 completado |

Nota:

```text
DE-PR9-009 no sustituye la deuda estructural posterior sobre la
formalización integral de 99_ARCHIVO_HISTORICO.
```

La deuda de C8 es una obligación nueva y más amplia.

---

# 6. Deuda estructural y de gobernanza derivada de PR #25

| Debt ID | Título | Prioridad | Estado | Fase objetivo | Decisiones relacionadas |
|---|---|---:|---|---|---|
| `DEBT-GOV-001` | Formalizar una sola fuente activa por alcance | P1 | `resolved` | C1 | `DEC-AUD25-001`, `DEC-C1-004` |
| `DEBT-GOV-002` | Ratificar autoridad distribuida de SDD | P1 | `resolved` | C0 | `DEC-AUD25-002`, `DEC-C0-002`–`005` |
| `DEBT-GOV-003` | Crear contenedor funcional estable para arquitectura y diseño | P1 | `resolved` | C2 | `DEC-AUD25-003` |
| `DEBT-GOV-004` | Elevar arquitectura funcional y UX desde rutas de continuidad | P1 | `resolved` | C3 | `DEC-AUD25-003`, `DEC-C1-009`, `DEC-C3-001`, `DEC-C3-002` |
| `DEBT-GOV-005` | Elevar arquitectura técnica, datos, seguridad y privacidad | P1 | `resolved` | C4 | `DEC-AUD25-003`, `DEC-C1-009` |
| `DEBT-GOV-006` | Separar método de `00` y resultados de `15` | P1 | `resolved` | C5 | `DEC-AUD25-005` |
| `DEBT-GOV-007` | Formalizar ciclo de vida de `18_DOCUMENTACION_ACTIVA` | P1 | `resolved` | C6 | `DEC-AUD25-006` |
| `DEBT-GOV-008` | Consolidar deuda activa en `20` mediante IDs únicos | P1 | `resolved` | C7 | `DEC-AUD25-007` |
| `DEBT-GOV-009` | Formalizar archivo histórico, manifiestos y no vigencia | P1 | `resolved` | C8 | `DEC-AUD25-008` |
| `DEBT-GOV-010` | Alinear Wiki y documentación humana con fuentes canónicas | P2 | `resolved` | C9 | `DEC-AUD25-009` |
| `DEBT-GOV-011` | Validar integridad estructural completa | P1 | `resolved` | C10 | `DEC-AUD25-010` |
| `DEBT-GOV-012` | Revisar individualmente specs de `.specify` | P1 | `resolved` | C4 o C9 | `DEC-C0-003`, `DEC-C1-008` |
| `DEBT-GOV-013` | Crear índice interno de la Base de Conocimiento SDD | P2 | `resolved` | C9 | `DEC-C0-005`, `DEC-C1-008` |
| `DEBT-GOV-014` | Automatizar índices y comprobaciones documentales | P2 | `deferred` | Posterior a C10 | `DEC-AUD25-010` |

## 6.1 Criterios de cierre destacados

### `DEBT-GOV-001`

Requiere:

```text
Registro Maestro aprobado
+ Índice de Vigencia aprobado
+ Tabla de Sucesión aprobada
+ merge de PR #30
+ validación C1-D
```

### `DEBT-GOV-003`

Requiere:

```text
ruta objetivo aprobada
+ README de frontera
+ gate humano de C2
+ cero movimientos prematuros
```

### Resolución C2 de `DEBT-GOV-003`

<!-- C2_CLOSURE_DEBT_UPDATE -->

```yaml
debt_id: DEBT-GOV-003
status: resolved
resolution_date: 2026-07-12
resolution_reference:
  - PR #32
  - merge 3595200378825a9d013188de87f394988c8f1de0
  - GATE-CORR-G1 approved
  - 02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/README.md
validation:
  route_approved: true
  boundary_readme: true
  human_gate: true
  premature_moves: 0
  renames: 0
  deletions: 0
notes:
  - la resolución prepara la frontera
  - no eleva documentos de arquitectura funcional o técnica
  - no inicia C3
  - no inicia C4
  - no abre v0.8.0
  - no autoriza implementación
```

La resolución de `DEBT-GOV-003` no resuelve automáticamente:

- `DEBT-GOV-004`;
- `DEBT-GOV-005`;
- `DEBT-GOV-008`;
- `DEBT-GOV-009`;
- ninguna deuda funcional, técnica o de implementación.


### Resolución C3 de `DEBT-GOV-004`

<!-- C3_CLOSURE_DEBT_UPDATE -->

```yaml
debt_id: DEBT-GOV-004
status: resolved
resolution_date: 2026-07-12
decision_reference:
  - DEC-C3-001
  - DEC-C3-002
  - aprobación humana explícita en PR #39
resolution_reference:
  - PR #38
  - merge c1ebf74408716846f9eb2c131ce989b7a188fa1c
  - GATE-CORR-G2 approved / fulfilled
  - PR #39
  - head aprobado a620d93be7ed5f7ae229265f1e42edeabcbf2c98
  - merge 369ee01023911538ec313af82b14bc54c8cf4d6e
  - DOC-DOC-028
  - DOC-DOC-029
  - DOC-DOC-030
validation:
  sources_elevated: 8
  hashes_equivalent: 8/8
  movement_commits: 4
  reversal_rehearsals: 4
  competing_copies: 0
  substantive_sources_modified_by_closure: 0
  DOC_UX_007_modified: false
  C4_started: false
notes:
  - C3 queda cerrado
  - GATE-CORR-G3 permanece pending / future
  - DOC-UX-007 permanece en HOLD para evaluación futura C4
  - DEBT-GOV-005 permanece blocked
  - v0.8.0 no está abierto
  - implementación no está autorizada
```

La resolución de `DEBT-GOV-004` no resuelve automáticamente `DEBT-GOV-005`
ni inicia C4.
### Resolución C4 de `DEBT-GOV-005`

<!-- C4_CLOSURE_DEBT_UPDATE -->

```yaml
debt_id: DEBT-GOV-005
status: resolved
resolution_date: 2026-07-13
decision_reference:
  - DEC-C4-001
  - DEC-C4-002
  - DEC-C4-003
  - autorización humana explícita “Adelante con C4-B consolidado”
resolution_reference:
  - PR #41
  - merge d522065bca7232758934558293c0942532babfab
  - commit de elevación residual a37fc82bc0f617ab3f0a4eff1440911d8116a9b1
  - GATE-CORR-G3 approved / fulfilled
  - DOC-DOC-031
validation:
  sources_elevated: 12
  residual_sources_elevated: 6
  historical_references_preserved: true
  DOC_REF_002_deferred_to_C9: true
  DOC_UX_007_modified: false
  implementation_files_modified: 0
notes:
  - C4 queda cerrado
  - DOC-REF-002 queda diferido a C9
  - DOC-UX-007 permanece en HOLD
  - DEBT-GOV-012 permanece blocked
  - v0.8.0 no está abierto
  - implementación no está autorizada
```

La resolución de `DEBT-GOV-005` no resuelve deudas de implementación
local-first, seguridad, evidencia, IA o facilitador.

### `DEBT-GOV-008`

Requiere:

```text
fuente primaria de deuda en 20
+ referencias desde fuentes históricas
+ IDs preservados
+ criterios de cierre uniformes
```

---

# 7. Deuda de cierre v0.6

Las siguientes deudas se consideran resueltas por la secuencia posterior de cierre, merge y apertura controlada de v0.7.

| Debt ID | Título abreviado | Estado | Referencia de resolución |
|---|---|---|---|
| `DFUX-CIERRE-001` | Confirmar comentarios de hito PR #20 | `resolved` | Cierre y merge de PR #20 |
| `DFUX-CIERRE-002` | Integrar bitácoras y registros | `resolved` | Paquete final de PR #20 |
| `DFUX-CIERRE-003` | Decisión humana del gate | `resolved` | Gate v0.6 → v0.7 |
| `DFUX-CIERRE-004` | Verificar estado operativo del PR | `resolved` | Merge de PR #20 |
| `DFUX-CIERRE-005` | Decidir salida de draft | `resolved` | Cierre de PR #20 |
| `DFUX-CIERRE-006` | Decidir merge condicionado | `resolved` | PR #20 fusionado |

Estas resoluciones son operativas e históricas.

No convierten en resueltas las deudas funcionales o técnicas restantes.

---

# 8. Deuda local-first y seguridad heredada de v0.6

| Debt ID | Título abreviado | Prioridad | Estado | Fase objetivo |
|---|---|---:|---|---|
| `DFUX-LF-001` | Arquitectura local-first verificable | P1 | `accepted` | C4 y v0.8 |
| `DFUX-LF-002` | Almacenamiento local y recuperación segura | P1 | `accepted` | C4 y v0.8 |
| `DFUX-LF-003` | Exportación e importación por decisión humana | P1 | `accepted` | C4 y v0.8 |
| `DFUX-LF-004` | Manejo seguro de referencias externas | P1 | `accepted` | C4 |
| `DFUX-LF-005` | Sensibilidad de evidencias y enlaces | P1 | `accepted` | C4 |
| `DFUX-LF-006` | Evitar sincronización automática de enlaces | P1 | `accepted` | C4 y v0.8 |
| `DFUX-LF-007` | Advertencias de privacidad, autoría y enlaces | P1 | `accepted` | C4 y v0.8 |

Los documentos v0.7 constituyen evidencia conceptual.

La implementación verificable permanece pendiente.

---

# 9. Deuda de misiones y producción

| Debt ID | Título abreviado | Prioridad | Estado | Fase objetivo |
|---|---|---:|---|---|
| `DFUX-MIS-001` | Misiones configurables sin rigidez | P1 | `accepted` | C3 y v0.8 |
| `DFUX-MIS-002` | Ruta mínima y libertad creativa | P1 | `accepted` | C3 |
| `DFUX-MIS-003` | Variantes escuela superior y universidad | P1 | `deferred` | v0.8 |
| `DFUX-MIS-004` | Matriz misión-evento-herramienta-evidencia-portafolio | P1 | `accepted` | C3–C4 |
| `DFUX-MIS-005` | Estados funcionales de misión | P1 | `accepted` | C3 y v0.8 |
| `DFUX-MIS-006` | Completitud, calidad, curaduría y transferencia | P2 | `deferred` | v0.8 |
| `DFUX-MIS-007` | Reinterpretar S1–S9 sin fijar canon | P1 | `accepted` | C3–C4 |

---

# 10. Deuda humano-IA

| Debt ID | Título abreviado | Prioridad | Estado | Fase objetivo |
|---|---|---:|---|---|
| `DFUX-HIA-001` | Banco canónico de prompts por misión | P1 | `accepted` | C4 y v0.8 |
| `DFUX-HIA-002` | Campos mínimos de uso externo | P1 | `accepted` | C4 |
| `DFUX-HIA-003` | Advertencias antes de copiar prompts | P1 | `accepted` | C4 y v0.8 |
| `DFUX-HIA-004` | Rutas sin herramienta externa | P1 | `accepted` | C3 y v0.8 |
| `DFUX-HIA-005` | Atribución por herramienta | P1 | `deferred` | v0.8 |
| `DFUX-HIA-006` | Checklist docente de uso responsable | P1 | `deferred` | v0.8 |
| `DFUX-HIA-007` | Registrar apoyo externo sin sobrecaptura | P1 | `accepted` | C4 |
| `DFUX-HIA-008` | Auditar lenguaje sobre IA embebida | P1 | `accepted` | C4 y C9 |

---

# 11. Deuda de evidencia y portafolio

| Debt ID | Título abreviado | Prioridad | Estado | Fase objetivo |
|---|---|---:|---|---|
| `DFUX-EVI-001` | Estructura de evidencia contextualizada | P1 | `accepted` | C3–C4 |
| `DFUX-EVI-002` | Sensibilidad de evidencia | P1 | `accepted` | C4 |
| `DFUX-EVI-003` | Portafolio vivo local | P1 | `accepted` | C3–C4 |
| `DFUX-EVI-004` | Vincular evidencia, decisión y reflexión | P1 | `accepted` | C3–C4 |
| `DFUX-EVI-005` | Estados de evidencia y curaduría | P1 | `accepted` | C3–C4 |
| `DFUX-EVI-006` | Evitar portafolio como carpeta pasiva | P1 | `deferred` | v0.8 |
| `DFUX-EVI-007` | Narrativa de proceso transferible | P2 | `deferred` | v0.8 |

---

# 12. Deuda de accesibilidad y claridad

| Debt ID | Título abreviado | Prioridad | Estado | Fase objetivo |
|---|---|---:|---|---|
| `DFUX-ACC-001` | Guía de lenguaje claro para misiones | P1 | `accepted` | C3 y C9 |
| `DFUX-ACC-002` | Mensajes local-first canónicos | P1 | `accepted` | C4 y C9 |
| `DFUX-ACC-003` | Patrones de advertencia por riesgo | P1 | `accepted` | C4 |
| `DFUX-ACC-004` | Glosario funcional breve | P2 | `accepted` | C4 o C9 |
| `DFUX-ACC-005` | Carga cognitiva proporcional | P2 | `deferred` | v0.8 |
| `DFUX-ACC-006` | Auditoría técnica de accesibilidad | P2 | `deferred` | v0.8–v0.9 |

---

# 13. Deuda de asistencia docente

| Debt ID | Título abreviado | Prioridad | Estado | Fase objetivo |
|---|---|---:|---|---|
| `DFUX-DOC-001` | Asistencia docente por misión | P1 | `accepted` | C3 y v0.8 |
| `DFUX-DOC-002` | Guías para acompañar sin sustituir | P1 | `deferred` | v0.8 |
| `DFUX-DOC-003` | Señales de alerta docente | P2 | `deferred` | v0.8 |
| `DFUX-DOC-004` | Acompañamiento diferenciado por nivel | P1 | `deferred` | v0.8 |

---

# 14. Deuda de trazabilidad y gobernanza

| Debt ID | Título abreviado | Prioridad | Estado | Fase objetivo |
|---|---|---:|---|---|
| `DFUX-TRZ-001` | Matriz requisito-documento-origen-deuda | P1 | `accepted` | C1, C3 y C4 |
| `DFUX-TRZ-002` | Checklist de no regresión documental | P1 | `accepted` | C1-D y C10 |
| `DFUX-TRZ-003` | Trazabilidad longitudinal | P1 | `accepted` | C3–C4 |
| `DFUX-TRZ-004` | Gate humano antes de activar fases | P1 | `accepted` | Todas |
| `DFUX-TRZ-005` | Definir alcance de MVP técnico | P1 | `blocked` | Gate de v0.8 |

---

# 15. Deuda crítica de la Vista del Facilitador

```yaml
debt_id: DFUX-FAC-v0.6-001
legacy_ids:
  - DFUX_FAC_v0_6_001
title: Invisibilización parcial de la Vista del Facilitador
domain:
  - arquitectura de roles
  - privacidad
  - seguridad
  - experiencia docente
  - acompañamiento formativo
priority: P1
status: accepted
source:
  - auditoría post v0.6
  - registro de riesgos y controles v0.7
  - cierre formal v0.7
affected_documents:
  - DOC-UX-007
  - DOC-SEG-002
  - DOC-SEG-003
  - DOC-SEG-004
  - DOC-FOR-001
related_decisions:
  - DEC-V07-008
  - DEC-V07-009
owner: pendiente
target_phase:
  - C3
  - C4
  - v0.8
resolution_reference: none
```

No puede cerrarse hasta verificar:

- propósito formativo;
- visibilidad mínima;
- roles y permisos;
- controles contra vigilancia;
- límites administrativos;
- trazabilidad proporcional;
- consentimiento;
- privacidad local-first;
- ausencia de ranking;
- ausencia de monitoreo continuo.

---

# 16. Deudas activas preservadas al cierre de v0.7

| Debt ID | Asunto | Prioridad | Estado | Fase objetivo |
|---|---|---:|---|---|
| `DEBT-GROUP-PROGRESS` | `group_progress` bajo auditoría | P1 | `accepted` | C3–C4 y v0.8 |
| `DEBT-DATA-EXPORT` | Exportación por propósito | P1 | `accepted` | C4 y v0.8 |
| `DEBT-PORTFOLIO` | Transición a portafolio curado | P1 | `accepted` | C3–C4 y v0.8 |
| `DEBT-PROMPT` | Prompt como dato de alto cuidado | P1 | `accepted` | C4 y v0.8 |
| `DEBT-PRIVATE-LINK` | Enlaces privados | P1 | `accepted` | C4 y v0.8 |
| `DEBT-LANGUAGE` | Lenguaje no punitivo | P2 | `accepted` | C3 y C9 |
| `DEBT-TOOLS` | Herramientas externas como frontera | P1 | `accepted` | C4 y v0.8 |
| `DEBT-IMPORT` | Importación validada | P1 | `accepted` | C4 y v0.8 |
| `DEBT-GALLERY` | Galería pública | P1 | `deferred` | Gate posterior |
| `DEBT-RESEARCH` | Investigación con datos | P1 | `deferred` | Gate posterior |

Ninguna de estas deudas autoriza la capacidad que describe.

---

# 17. Deuda creada por C1

| Debt ID | Título | Prioridad | Estado | Fase objetivo |
|---|---|---:|---|---|
| `DEBT-C1-001` | Verificar todos los IDs documentales contra el árbol completo | P1 | `resolved` | C1-D |
| `DEBT-C1-002` | Verificar unicidad de IDs de decisiones | P1 | `resolved` | C1-D |
| `DEBT-C1-003` | Verificar unicidad de IDs de deuda | P1 | `resolved` | C1-D |
| `DEBT-C1-004` | Verificar unicidad de IDs de gates | P1 | `resolved` | C1-D |
| `DEBT-C1-005` | Confirmar que ninguna fuente activa duplicada quedó omitida | P1 | `resolved` | C1-D |
| `DEBT-C1-006` | Confirmar que el PR #30 contiene cero movimientos y eliminaciones | P1 | `resolved` | C1-D |
| `DEBT-C1-007` | Consolidar fuente primaria de deuda en C7 | P1 | `resolved` | C7 |
| `DEBT-C1-008` | Automatizar validación de registros | P2 | `deferred` | Posterior a C10 |

---

# 18. Resumen de estado

```text
deuda PR #9 resuelta: 12
deuda estructural y de gobernanza C0–C10: 14
deuda de cierre v0.6 resuelta: 6
deuda v0.6 funcional, UX y técnica preservada: 44
deuda crítica Vista del Facilitador: 1
deudas adicionales preservadas por cierre v0.7: 10
deudas creadas por C1: 8

cierres ejecutados mediante actualización C2: 1
movimientos ejecutados: 0
C2: cierre efectivo después del merge del PR #33
v0.8.0 abierto: no
```

Los conteos describen entradas registradas.

No equivalen a tareas independientes ni a estimaciones de esfuerzo.

---

# 19. Gate parcial C1-C.2

Este registro se aprueba conjuntamente con:

```text
Registro_Maestro_Gates_C1_AI_StoryLab_1.md
```

Opciones:

- [ ] **Aprobado.** El registro puede integrarse como auxiliar de C1-C.
- [ ] **Aprobado con reservas.** Las reservas se registran en el comentario de hito.
- [ ] **Cambios requeridos.** El registro permanece en borrador.
- [ ] **Rechazado.** El registro no se incorpora.

La aprobación conjunta habilita:

```text
staging de los tres productos C1-C;
validación técnica del bloque;
commit funcional único;
push al PR #30;
comentario de hito C1-C.
```

No habilita:

```text
cierre de deuda;
implementación;
movimientos;
C2;
v0.8.0;
merge final del PR #30.
```

---

# 20. Estado de salida esperado

```text
C0: cerrado
C1.1: vigente
C1-A: aprobado
C1-B: cerrado
C1-C.1: aprobado
C1-C.2: pendiente de aprobación conjunta
C1-D: no iniciado
C2: no iniciado
movimientos: ninguno
v0.8.0: no abierto
```


---

# 21. Enmienda de cierre C2

<!-- C2_CLOSURE_DEBT_UPDATE -->-STATE

```text
DEBT-GOV-003: resolved
DEBT-GOV-004: blocked hasta operación independiente de C3
DEBT-GOV-005: blocked hasta operación independiente de C4
DEBT-GOV-008: open para C7
DEBT-GOV-009: open para C8
C3: no iniciado
C4: no iniciado
v0.8.0: no abierto
implementación: no autorizada
```

<!-- C5_CLOSURE_DEBT_UPDATE -->

### Resolución C5 de `DEBT-GOV-006`

```yaml
debt_id: DEBT-GOV-006
status: resolved
resolution_date: 2026-07-13
decision_reference:
  - DEC-C5-001
  - DEC-C5-002
  - DEC-C5-003
  - autorización humana explícita “Adelante con C5 consolidado”
resolution_reference:
  - DOC-DOC-032
  - DOC-AUD-006
  - DOC-AUD-007
  - PR C5 pending integration
validation:
  method_boundary_in_00: true
  authoritative_results_in_15: true
  cross_indexes_created: 2
  movements: 0
  renames: 0
  deletions: 0
  duplicated_evidence: 0
notes:
  - GATE-CORR-G4 permanece pending
  - C6 no se abre automáticamente
  - v0.8.0 no está abierto
  - implementación no está autorizada
```

<!-- C6_CLOSURE_DEBT_UPDATE -->

### Resolución C6 de `DEBT-GOV-007`

```yaml
debt_id: DEBT-GOV-007
status: resolved
resolution_date: 2026-07-13
decision_reference:
  - DEC-C6-001
  - DEC-C6-002
  - DEC-C6-003
  - DEC-C6-004
resolution_reference:
  - DOC-DOC-033
  - DOC-DOC-034
  - DOC-DOC-035
validation:
  lifecycle_policy_created: true
  canonical_reference_index_populated: true
  controlled_exceptions_registered: 5
  canonical_references_registered: 20
  movements: 0
  renames: 0
  deletions: 0
notes:
  - GATE-CORR-G4 permanece pending
  - GATE-CORR-G5 permanece future
  - C7 no se abre automáticamente
  - v0.8.0 no está abierto
  - implementación no está autorizada
```

<!-- C7_PRIMARY_SOURCE_TRANSITION -->

## Transición de autoridad C7

Después del merge de C7:

```text
estado activo vigente:
  20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Primario_Deuda_Activa_C7_AI_StoryLab_1.md

identidad, normalización, resoluciones e historia:
  00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Registro_Maestro_Deuda_Gobernanza_C1_AI_StoryLab_1.md
```

### Resolución de `DEBT-GOV-008`

```yaml
debt_id: DEBT-GOV-008
status: resolved
resolution_date: 2026-07-13
resolution_reference:
  - DOC-DOC-036
  - DOC-DOC-037
  - DOC-DOC-038
validation:
  primary_source_in_20: true
  active_unique_ids: 69
  historical_sources_indexed: 33
  uniform_closure_criteria: true
  movements: 0
  renames: 0
  deletions: 0
```

### Resolución de `DEBT-C1-007`

```yaml
debt_id: DEBT-C1-007
status: resolved
resolution_date: 2026-07-13
resolution_reference:
  - DEBT-GOV-008
  - DOC-DOC-036
  - DOC-DOC-037
```

`GATE-CORR-G4` permanece pendiente hasta C10.

<!-- C8_CLOSURE_DEBT_UPDATE -->

### Resolución C8 de `DEBT-GOV-009`

```yaml
debt_id: DEBT-GOV-009
status: resolved
resolution_date: 2026-07-13
decision_reference:
  - DEC-C8-001
  - DEC-C8-002
  - DEC-C8-003
  - DEC-C8-004
resolution_reference:
  - DOC-DOC-039
  - DOC-DOC-040
  - DOC-DOC-041
validation:
  archive_policy_created: true
  manifest_created: true
  archived_holdings_inventoried: 91
  sha256_entries: 91
  non_vigency_declared: true
  no_edit_rule_declared: true
  active_debt_registry_updated: true
  movements: 0
  renames: 0
  deletions: 0
  archived_payload_edits: 0
notes:
  - GATE-CORR-G5 permanece pending hasta C9
  - GATE-CORR-G4 permanece pending hasta C10
  - C9 no se abre automáticamente
  - v0.8.0 no está abierto
  - implementación no está autorizada
```

<!-- C9_CLOSURE_DEBT_UPDATE -->

## Resoluciones C9

```yaml
resolved_debts:
  - debt_id: DEBT-GOV-010
    evidence:
      - DOC-DOC-042
      - Indice_Documentacion_Humana_C9
    validation:
      wiki_files_indexed: 32
      canonical_routes_linked: 11
  - debt_id: DEBT-GOV-012
    evidence:
      - DOC-DOC-043
    validation:
      specify_artifacts_reviewed: 11
      active_specs_verified: 0
      canonical_specs_declared: 0
  - debt_id: DEBT-GOV-013
    evidence:
      - DOC-DOC-044
    validation:
      knowledge_units_indexed: 12
      inherited_canonicity_declared: false
resolution_date: 2026-07-13
movements: 0
renames: 0
deletions: 0
implementation_files_modified: 0
notes:
  - DOC-REF-002 queda como controlled_exception_C9
  - DOC-UX-007 permanece HOLD
  - GATE-CORR-G5 será efectivo con el merge humano de C9
  - C10 no se abre automáticamente
  - v0.8.0 no está abierto
```

<!-- C10_CLOSURE_DEBT_UPDATE -->

## Resoluciones C10

```yaml
resolution_date: 2026-07-13
evidence:
  - DOC-AUD-008
  - DOC-AUD-009
  - DOC-AUD-010
  - DOC-AUD-011
  - DOC-DOC-046
resolved:
  - DEBT-C1-001
  - DEBT-C1-002
  - DEBT-C1-003
  - DEBT-C1-004
  - DEBT-C1-005
  - DEBT-C1-006
  - DEBT-GOV-001
  - DEBT-GOV-011
validation:
  tracked_files: 989
  reference_records: 215
  reference_failures: 0
  document_id_conflicts: 0
  structural_P1_blockers_after: 0
  active_debt_after: 57
  movements: 0
  renames: 0
  deletions: 0
reservation:
  - DFUX-TRZ-005 permanece blocked para el gate futuro de v0.8
limits:
  - GATE-V08-OPEN-001 permanece pending
  - v0.8.0 no está abierto
  - implementación no está autorizada
```
