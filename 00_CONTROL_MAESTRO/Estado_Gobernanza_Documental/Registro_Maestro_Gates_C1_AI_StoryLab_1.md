# Registro Maestro de Gates · C1

## AI StoryLab 1

**Identificador:** `DOC-DOC-009`  
**Fase:** C1-C · Decisiones, deuda y gates  
**Estado:** Borrador para aprobación humana  
**Fecha:** 2026-07-11  
**PR de trabajo:** PR #30  
**Rama:** `docs/c1-completar-indices-metadatos`  
**Documento rector relacionado:** `Registro_Maestro_Decisiones_C1_AI_StoryLab_1.md`  
**Alcance:** Gates constitucionales, versionados, estructurales y parciales de C1  
**Restricciones:** Este registro identifica y relaciona gates. No ejecuta gates, no autoriza transiciones nuevas, no modifica dictámenes previos, no mueve documentos, no inicia C2 y no abre v0.8.0.

---

## 1. Propósito

Este registro consolida los gates que han controlado o controlarán transiciones relevantes de AI StoryLab 1.

Debe permitir responder:

```text
qué gate existe;
qué fase controla;
qué pregunta responde;
quién decide;
qué dependencias tiene;
qué resultado obtuvo;
qué evidencia lo sostiene;
si continúa activo;
qué permitió;
qué mantuvo bloqueado;
qué gate debe ocurrir después.
```

Un gate no es únicamente un documento.

Es la combinación de:

```text
criterios
+ evidencia
+ autoridad humana
+ decisión
+ alcance permitido
+ límites
```

---

## 2. Campos obligatorios

| Campo | Contenido |
|---|---|
| `gate_id` | Identificador persistente |
| `legacy_labels` | Nombres históricos |
| `label` | Etiqueta humana |
| `phase` | Fase controlada |
| `scope` | Qué aprueba o bloquea |
| `status` | Resultado del gate |
| `lifecycle` | Condición operativa |
| `authority` | Persona o grupo autorizado |
| `evidence` | Comentario, revisión, acta, PR o documento |
| `dependencies` | Decisiones o gates previos |
| `affected_documents` | IDs documentales |
| `date` | Fecha de decisión |
| `allowed_result` | Qué permite |
| `blocked_result` | Qué mantiene prohibido |
| `next_gate` | Gate siguiente, cuando aplique |

---

## 3. Estados y ciclo de vida

### 3.1 Estados

| Estado | Interpretación |
|---|---|
| `pending` | Todavía no decidido |
| `approved` | Aprobado dentro del alcance |
| `approved_with_reservations` | Aprobado con condiciones |
| `changes_required` | No puede avanzar sin corrección |
| `rejected` | No aprobado |

### 3.2 Ciclo de vida

| Ciclo | Interpretación |
|---|---|
| `standing` | Gate permanente que debe seguir aplicándose |
| `fulfilled` | Gate puntual completado |
| `awaiting_integration` | Decidido, pero aún no integrado al PR |
| `active_phase_gate` | Controla la fase actualmente abierta |
| `future` | Reservado para fase posterior |
| `historical_reference` | Conservado como evidencia |

---

## 4. Reglas de normalización

### REG-C1C-GATE-001 · Etiqueta no equivale a identificador

Etiquetas como:

```text
G0
G1
Gate Constitucional
Gate de Cierre
Gate de Apertura
```

requieren un `gate_id` acotado para evitar colisiones.

### REG-C1C-GATE-002 · Gate permanente y gate puntual

El Gate Constitucional de Preimplementación es permanente:

```text
lifecycle: standing
```

Un gate de cierre de fase es puntual:

```text
lifecycle: fulfilled
```

### REG-C1C-GATE-003 · Documento no ejecuta automáticamente el gate

Un documento de gate puede estar aprobado como instrumento.

La transición solo ocurre cuando existe decisión humana y evidencia aplicable.

### REG-C1C-GATE-004 · Cierre no abre la fase siguiente

Cerrar una fase:

```text
no abre automáticamente la siguiente
```

### REG-C1C-GATE-005 · Aprobación parcial no autoriza merge final

Los gates parciales de C1:

```text
registran progreso
```

pero no autorizan:

```text
Ready for review
merge
cierre formal de C1
```

### REG-C1C-GATE-006 · Gate y decisión son objetos distintos

El gate controla una transición.

La decisión registra la determinación humana que produjo su resultado.

---

# 5. Gate Constitucional de Preimplementación

```yaml
gate_id: GATE-SDD-001
legacy_labels:
  - Gate Constitucional de Preimplementación
label: Gate Constitucional de Preimplementación
phase: permanente
scope: evaluación previa a cualquier implementación funcional
status: approved
lifecycle: standing
date: 2026-07-03
authority: revisión humana aplicable a cada función
evidence:
  - Gate_Constitucional_Preimplementacion_AI_StoryLab_1_v0_4_4.md
dependencies:
  - DOC-SDD-001
  - DOC-GOB-001
affected_documents:
  - toda spec o función candidata
allowed_result:
  - evaluación de pase, condicionamiento, diferimiento o bloqueo
blocked_result:
  - implementación sin spec
  - datos reales sin política
  - IA externa sin consentimiento y threat model
  - evaluación automática como juicio final
  - backend, cloud, autenticación o analíticas sin autorización
  - publicación o almacenamiento automático sin gate
next_gate: gate específico de la capacidad
```

Determinación:

```text
condición necesaria
no suficiente por sí sola
permanece activo
```

---

# 6. Gate de Cierre Constitucional v0.4.4

```yaml
gate_id: GATE-SDD-002
label: Gate de Cierre Constitucional SDD v0.4.4
phase: v0.4.4
scope: cierre constitucional documental
status: approved
lifecycle: fulfilled
date: 2026-07-03
authority: aprobación humana PR #10
evidence:
  - Gate_Cierre_Constitucional_SDD_AI_StoryLab_1_v0_4_4.md
dependencies:
  - GATE-SDD-001
  - cierre de deuda PR #9
affected_documents:
  - DOC-SDD-001
  - DOC-SDD-002
allowed_result:
  - cerrar v0.4.4 documentalmente
  - abrir v0.4.5 como specs operativas
blocked_result:
  - implementación funcional
  - backend
  - cloud
  - autenticación
  - analíticas
  - datos reales
next_gate: gates de specs y fases posteriores
```

---

# 7. Gate de Apertura v0.6

```yaml
gate_id: GATE-V06-OPEN-001
legacy_labels:
  - Gate de Apertura v0.6 Diseño Funcional + UX
phase: v0.6
scope: apertura de SDD funcional limitado a diseño funcional y UX
status: approved
lifecycle: fulfilled
date:
  instrument_approved: 2026-07-06
  phase_opened: 2026-07-06
authority: autorización humana explícita
evidence:
  - Gate_Apertura_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
  - PR #19
  - PR #20
dependencies:
  - cierre real v0.5
  - definición operativa v1.0
  - roadmap aprobado
affected_documents:
  - DOC-ARQ-001
  - DOC-ARQ-002
  - DOC-UX-002
  - DOC-UX-003
  - DOC-UX-004
  - DOC-UX-005
  - DOC-UX-006
  - DOC-GOB-007
allowed_result:
  - diseño funcional
  - UX
  - flujos conceptuales
  - requisitos preliminares
blocked_result:
  - arquitectura técnica
  - implementación
  - datos reales
  - validación con personas
  - despliegue
next_gate: GATE-V06-V07-001
```

---

# 8. Gate de Transición v0.6 → v0.7

```yaml
gate_id: GATE-V06-V07-001
legacy_labels:
  - Gate de Transición Controlada v0.6 → v0.7
phase: transición v0.6 a v0.7
scope: determinar suficiencia del bloque funcional y condiciones de transición
status: approved_with_reservations
lifecycle: fulfilled
date:
  acta: 2026-07-07
  transición_posterior: 2026-07-09
authority: decisión humana explícita
evidence:
  - Acta_Gate_Transicion_Controlada_v0_6_v0_7_AI_StoryLab.md
  - PR #20
  - PR #22
dependencies:
  - GATE-V06-OPEN-001
  - cierre documental condicionado v0.6
affected_documents:
  - documentos sustantivos v0.6
allowed_result:
  - reconocer suficiencia funcional y UX
  - preparar apertura formal v0.7
blocked_result:
  - apertura automática de v0.7
  - arquitectura antes de autorización
  - implementación
  - stack final
  - backend
  - IA embebida
next_gate: GATE-V07-OPEN-001
```

El resultado inicial fue condicionado.

La apertura posterior de v0.7 completó su propósito transicional.

---

# 9. Gate de Apertura v0.7

```yaml
gate_id: GATE-V07-OPEN-001
legacy_labels:
  - Hito de Apertura v0.7
  - Gate de Apertura v0.7 Arquitectura Técnica + Seguridad
phase: v0.7
scope: abrir fase documental y técnico-conceptual
status: approved
lifecycle: fulfilled
date: 2026-07-09
authority: aprobación humana PR #22
evidence:
  - PR #22
  - Registro_Decisiones_Hito_Apertura_v0_7_AI_StoryLab.md
dependencies:
  - GATE-V06-V07-001
  - cierre v0.6
affected_documents:
  - DOC-ARQ-003
  - DOC-ARQ-004
  - DOC-DAT-001
  - DOC-DAT-002
  - DOC-SEG-002
  - DOC-SEG-003
  - DOC-SEG-004
  - DOC-UX-007
  - DOC-FOR-001
  - DOC-OPS-001
  - DOC-OPS-002
  - DOC-REF-002
  - DOC-GOB-008
  - DOC-GOB-009
allowed_result:
  - arquitectura conceptual
  - modelos de datos
  - seguridad
  - privacidad
  - gobernanza técnica
blocked_result:
  - implementación
  - stack final
  - datos reales
  - backend
  - despliegue
next_gate: GATE-V07-CLOSE-001
```

---

# 10. Gate de Cierre v0.7

```yaml
gate_id: GATE-V07-CLOSE-001
legacy_labels:
  - Acta de Cierre Formal del Gate v0.7.0
phase: v0.7
scope: cierre documental y técnico-conceptual con deuda activa
status: approved
lifecycle: fulfilled
date: 2026-07-10
authority: autorización humana explícita PR #24
evidence:
  - PR #23
  - PR #24
  - Acta_Cierre_Formal_Gate_v0_7_0_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md
dependencies:
  - GATE-V07-OPEN-001
  - mapa de 14 familias
affected_documents:
  - documentos sustantivos v0.7
allowed_result:
  - declarar v0.7 cerrada
  - preservar deuda activa
  - iniciar auditoría estructural separada
  - preparar gate v0.8 sin abrirlo
blocked_result:
  - apertura automática v0.8
  - implementación
  - stack final
  - backend
  - autenticación
  - IA embebida
  - datos reales
  - cierre de deuda sin evidencia
next_gate:
  - GATE-CORR-G0
  - futuro gate de v0.8
```

---

# 11. Gates de corrección estructural C0–C10

Los gates G0–G6 definidos por la auditoría se normalizan para evitar colisiones.

| Gate ID | Etiqueta histórica | Alcance | Estado | Ciclo | Fase |
|---|---|---|---|---|---|
| `GATE-CORR-G0` | G0 · Autoridad | Confirmar qué documentos gobiernan | `approved` | `fulfilled` | C0 |
| `GATE-CORR-G1` | G1 · Estructura objetivo | Aprobar nuevo `02` y fronteras principales | `pending` | `future` | C2 |
| `GATE-CORR-G2` | G2 · Migración funcional | Aprobar arquitectura funcional y UX por lote | `pending` | `future` | C3 |
| `GATE-CORR-G3` | G3 · Migración técnica | Aprobar arquitectura técnica y decisiones | `pending` | `future` | C4 |
| `GATE-CORR-G4` | G4 · Integridad referencial | Confirmar enlaces, gates y decisiones | `pending` | `future` | C5–C7 y C10 |
| `GATE-CORR-G5` | G5 · Continuidad histórica | Confirmar navegación de historia v0.6–v0.7 | `pending` | `future` | C8–C9 |
| `GATE-CORR-G6` | G6 · Cierre estructural | Confirmar ausencia de bloqueantes P1 | `pending` | `future` | C10 |

## 11.1 Gate G0 cumplido

```yaml
gate_id: GATE-CORR-G0
status: approved
date: 2026-07-11
authority: Gate Humano G0-C0
evidence:
  - PR #27
  - PR #28
  - DOC-GOB-002
  - DOC-GOB-003
allowed_result:
  - iniciar C1
blocked_result:
  - movimientos no autorizados
  - inicio automático de C2
```

---

# 12. Gates internos de la fase C1

## 12.1 Fundamento C1.1

```yaml
gate_id: GATE-C1-1
legacy_labels:
  - G1-C1.1
label: Gate del Esquema Rector C1.1
phase: C1.1
status: approved
lifecycle: fulfilled
date: 2026-07-11
authority: aprobación humana PR #29
evidence:
  - PR #29
  - DOC-DOC-001
allowed_result:
  - crear registros oficiales C1
blocked_result:
  - movimientos
  - C2
  - v0.8.0
next_gate: GATE-C1-A
```

## 12.2 Plan operativo C1-A

```yaml
gate_id: GATE-C1-A
label: Hito C1-A Plan Operativo
phase: C1-A
status: approved
lifecycle: fulfilled
date: 2026-07-11
authority: aprobación humana registrada en PR #30
evidence:
  - comentario Hito C1-A
  - DOC-DOC-002
allowed_result:
  - iniciar C1-B
blocked_result:
  - merge final
  - C2
  - v0.8.0
next_gate: GATE-C1-B1
```

## 12.3 Registro rector C1-B.1

```yaml
gate_id: GATE-C1-B1
label: Gate parcial C1-B.1
phase: C1-B
status: approved
lifecycle: fulfilled
date: 2026-07-11
authority: aprobación humana
evidence:
  - DOC-DOC-004
allowed_result:
  - redactar auxiliares C1-B
blocked_result:
  - movimientos
  - merge final
next_gate: GATE-C1-B2
```

## 12.4 Auxiliares C1-B.2

```yaml
gate_id: GATE-C1-B2
label: Gate conjunto C1-B.2
phase: C1-B
status: approved
lifecycle: fulfilled
date: 2026-07-11
authority: aprobación humana
evidence:
  - DOC-DOC-005
  - DOC-DOC-006
  - comentario Hito C1-B
allowed_result:
  - cerrar C1-B
  - iniciar C1-C
blocked_result:
  - merge final
  - C2
  - v0.8.0
next_gate: GATE-C1-C1
```

## 12.5 Registro de Decisiones C1-C.1

```yaml
gate_id: GATE-C1-C1
label: Gate parcial C1-C.1
phase: C1-C
status: approved
lifecycle: awaiting_integration
date: 2026-07-11
authority: aprobación humana de sesión
evidence:
  - DOC-DOC-007
  - comentario de hito pendiente
allowed_result:
  - redactar registros de deuda y gates
blocked_result:
  - commit de C1-C antes de aprobar auxiliares
  - cierre de deuda
  - ejecución de gates
next_gate: GATE-C1-C2
```

## 12.6 Auxiliares C1-C.2

```yaml
gate_id: GATE-C1-C2
label: Gate conjunto C1-C.2
phase: C1-C
status: pending
lifecycle: active_phase_gate
authority: persona responsable de AI StoryLab 1
evidence:
  - DOC-DOC-008
  - DOC-DOC-009
dependencies:
  - GATE-C1-C1
allowed_result:
  - commit funcional C1-C
  - comentario Hito C1-C
  - iniciar C1-D
blocked_result:
  - merge final
  - C2
  - v0.8.0
next_gate: GATE-C1-D
```

## 12.7 Validación C1-D

```yaml
gate_id: GATE-C1-D
label: Gate de validación y cierre documental C1-D
phase: C1-D
status: pending
lifecycle: future
authority: persona responsable de AI StoryLab 1
dependencies:
  - GATE-C1-C2
affected_documents:
  - Informe_Validacion_Integridad_C1_AI_StoryLab_1.md
  - Acta_Cierre_Fase_C1_AI_StoryLab_1.md
allowed_result:
  - someter C1 al gate final
blocked_result:
  - cierre prematuro
next_gate: GATE-C1-FINAL
```

## 12.8 Gate final C1

```yaml
gate_id: GATE-C1-FINAL
label: Gate Humano Final de la Fase C1
phase: C1
status: pending
lifecycle: future
authority: persona responsable de AI StoryLab 1
dependencies:
  - GATE-C1-D
criteria:
  - C1.1 vigente
  - fuentes canónicas registradas
  - vigencia declarada
  - sucesión trazable
  - decisiones identificadas
  - deuda identificada
  - gates identificados
  - cero movimientos
  - cero eliminaciones
  - C2 no iniciado
  - v0.8.0 no abierto
allowed_result:
  - marcar PR #30 Ready for review
  - autorizar merge
  - cerrar formalmente C1
blocked_result:
  - merge sin comentario final
next_gate: GATE-CORR-G1
```

---

# 13. Gate futuro de v0.8.0

```yaml
gate_id: GATE-V08-OPEN-001
label: Gate de Apertura v0.8.0 Implementación Incremental
phase: v0.8.0
status: pending
lifecycle: future
authority: pendiente de decisión humana
dependencies:
  - cierre v0.7
  - estructura documental suficiente
  - gate constitucional
  - specs aprobadas
  - arquitectura y diseño trazables
  - ausencia de bloqueante estructural
allowed_result:
  - ninguno mientras permanezca pending
blocked_result:
  - implementación
  - backlog productivo
  - stack final
  - servicios
  - datos reales
```

Estado inequívoco:

```text
v0.8.0 no está abierto
implementación no está autorizada
```

---

# 14. Matriz resumida de gates

| Gate ID | Estado | Ciclo | Resultado principal |
|---|---|---|---|
| `GATE-SDD-001` | `approved` | `standing` | Control permanente de preimplementación |
| `GATE-SDD-002` | `approved` | `fulfilled` | Cierre constitucional v0.4.4 |
| `GATE-V06-OPEN-001` | `approved` | `fulfilled` | Apertura limitada v0.6 |
| `GATE-V06-V07-001` | `approved_with_reservations` | `fulfilled` | Transición condicionada |
| `GATE-V07-OPEN-001` | `approved` | `fulfilled` | Apertura documental v0.7 |
| `GATE-V07-CLOSE-001` | `approved` | `fulfilled` | Cierre v0.7 con deuda |
| `GATE-CORR-G0` | `approved` | `fulfilled` | Autoridad ratificada |
| `GATE-CORR-G1`–`G6` | `pending` | `future` | Corrección estructural posterior |
| `GATE-C1-1` | `approved` | `fulfilled` | Esquema C1 vigente |
| `GATE-C1-A` | `approved` | `fulfilled` | Plan operativo |
| `GATE-C1-B1` | `approved` | `fulfilled` | Registro rector |
| `GATE-C1-B2` | `approved` | `fulfilled` | Cierre C1-B |
| `GATE-C1-C1` | `approved` | `awaiting_integration` | Decisiones aprobadas |
| `GATE-C1-C2` | `pending` | `active_phase_gate` | Deuda y gates |
| `GATE-C1-D` | `pending` | `future` | Validación |
| `GATE-C1-FINAL` | `pending` | `future` | Merge y cierre C1 |
| `GATE-V08-OPEN-001` | `pending` | `future` | Apertura v0.8.0 |

---

# 15. Validación del registro

Antes de aprobar debe confirmarse que:

- cada `gate_id` es único;
- las etiquetas históricas permanecen visibles;
- los gates permanentes se distinguen de los puntuales;
- ningún documento de gate se presenta como ejecución automática;
- el cierre de v0.7 no abre v0.8;
- C1-A y C1-B no autorizan merge;
- C1-C.1 consta como aprobado pero pendiente de integración;
- C1-C.2 permanece pendiente;
- el gate final de C1 permanece pendiente;
- G1–G6 de corrección no se presentan como aprobados;
- el gate de v0.8.0 permanece pendiente;
- no se autoriza implementación.

---

# 16. Gate conjunto C1-C.2

Este registro se aprueba conjuntamente con:

```text
Registro_Maestro_Deuda_Gobernanza_C1_AI_StoryLab_1.md
```

Opciones:

- [ ] **Aprobado.** Ambos auxiliares pueden integrarse y C1-C puede prepararse para commit.
- [ ] **Aprobado con reservas.** Las reservas se registran en el comentario de hito.
- [ ] **Cambios requeridos.** Los auxiliares permanecen en borrador.
- [ ] **Rechazado.** Los auxiliares no se incorporan.

La aprobación conjunta habilita:

```text
staging de tres productos C1-C;
validación técnica;
commit funcional;
push al PR #30;
comentario de hito C1-C;
inicio de C1-D.
```

No habilita:

```text
merge final;
C2;
v0.8.0;
implementación;
movimientos;
cierre de deuda por declaración.
```

---

# 17. Estado de salida esperado

```text
C0: cerrado
C1.1: vigente
C1-A: aprobado
C1-B: cerrado
C1-C.1: aprobado
C1-C.2: pendiente de aprobación conjunta
C1-D: no iniciado
GATE-C1-FINAL: pendiente
C2: no iniciado
v0.8.0: no abierto
implementación: no autorizada
```
