# Esquema Rector de Índices, Metadatos e Identificadores · C1

## AI StoryLab 1

**Fase:** C1 · Índices y metadatos\
**Estado:** Aprobado por Gate Humano G1-C1.1\
**Fecha:** 2026-07-11\
**Dependencia:** C0 ratificado\
**Documentos rectores relacionados:**

- `Dictamen_Autoridad_Precedencia_Documental_C0_AI_StoryLab_1.md`
- `Matriz_Precedencia_Documental_C0_AI_StoryLab_1.md`

**Alcance:** Definición del esquema documental mínimo de C1\
**Efecto inmediato:** Vigente después del merge de su PR individual\
**Restricciones:** No mueve, renombra, elimina, depreca ni sustituye documentos. No prepara contenedores de C2. No abre v0.8.0.

---

## 1. Propósito

Este documento establece el esquema mínimo que permitirá identificar, gobernar y relacionar los documentos de AI StoryLab 1 antes de cualquier migración estructural.

C1 debe hacer posible responder de forma inequívoca:

```text
qué documento está vigente;
cuál es su fuente canónica;
qué documento lo precede;
qué documento lo sustituye;
qué decisión autoriza su estado;
qué gate controla su incorporación;
qué deuda permanece asociada;
qué versión describe su historia;
qué ruta permite localizarlo.
```

El esquema no modifica por sí mismo el estado de ningún documento. Define los campos, identificadores y reglas que utilizarán los registros oficiales posteriores.

---

## 2. Objetivos de C1

C1 debe producir infraestructura para:

1. declarar fuentes canónicas;
2. distinguir documentos vigentes, sustituidos, históricos y en borrador;
3. asignar identificadores estables;
4. registrar sucesión y deprecación;
5. enlazar decisiones, deuda y gates;
6. impedir que una fecha, versión o ubicación otorgue autoridad automática;
7. permitir validaciones antes de C2;
8. sostener una migración reversible durante C3–C10.

---

## 3. Principios rectores

### PRI-C1-001 · Una sola fuente activa

Cada documento sustantivo debe tener una sola fuente activa y canónica dentro de un alcance determinado.

Pueden existir copias históricas, evidenciales o de continuidad, pero no deben competir como fuentes vigentes.

### PRI-C1-002 · La versión es metadato

La versión describe evolución e historia.

No debe utilizarse como sustituto de:

- estado de vigencia;
- autoridad;
- canonicidad;
- sucesión;
- aprobación humana;
- ruta funcional principal.

### PRI-C1-003 · La ubicación no crea autoridad

La ruta ayuda a descubrir la función de un documento, pero su autoridad depende de:

```text
tipo documental
+ alcance
+ aprobación
+ vigencia
+ decisión humana
```

### PRI-C1-004 · Ninguna deprecación implícita

Un documento solo puede declararse sustituido o deprecado mediante registro explícito.

La existencia de una versión más reciente no basta.

### PRI-C1-005 · Identificadores persistentes

Los identificadores deben permanecer estables aunque cambie:

- la ruta;
- el nombre del archivo;
- la versión;
- la fase;
- el cartapacio;
- el estado editorial.

### PRI-C1-006 · Las relaciones son trazables

Toda declaración de vigencia, sucesión, deprecación, deuda o gate debe poder enlazarse con evidencia verificable.

### PRI-C1-007 · C1 registra, no migra

C1 puede describir una ruta actual y una ruta objetivo propuesta.

No ejecuta el movimiento entre ellas.

---

## 4. Tipos de identificadores

### 4.1 Identificador documental

Formato:

```text
DOC-<DOMINIO>-<NUMERO>
```

Ejemplos:

```text
DOC-GOB-001
DOC-SDD-004
DOC-ARQ-012
DOC-AUD-008
```

El identificador documental representa la identidad persistente del documento, no una versión específica.

### 4.2 Identificador de decisión

Formato:

```text
DEC-<FASE>-<NUMERO>
```

Ejemplos:

```text
DEC-C0-001
DEC-C1-003
DEC-C4-012
```

Las decisiones heredadas con un formato anterior pueden conservar su identificador original cuando ya forman parte de la historia ratificada.

### 4.3 Identificador de deuda

Formato:

```text
DEU-<DOMINIO>-<NUMERO>
```

Ejemplos:

```text
DEU-DOC-001
DEU-ARQ-004
DEU-REF-007
```

### 4.4 Identificador de gate

Formato:

```text
GATE-<FASE>-<NUMERO>
```

Ejemplos:

```text
GATE-C0-001
GATE-C1-001
GATE-C3-004
```

Puede conservarse una etiqueta humana breve:

```text
G0-C0
G1-C1
```

La etiqueta humana no sustituye el identificador persistente.

### 4.5 Identificador de riesgo

Formato:

```text
RISK-<DOMINIO>-<NUMERO>
```

Ejemplos:

```text
RISK-DOC-001
RISK-REF-003
RISK-ARQ-005
```

### 4.6 Identificador de lote

Formato:

```text
LOTE-<FASE>-<NUMERO>
```

Ejemplos:

```text
LOTE-C3-001
LOTE-C4-002
LOTE-C6-003
```

El identificador de lote se utilizará durante migraciones posteriores para mantener reversibilidad acotada.

---

## 5. Dominios sugeridos

| Código | Dominio                              |
| ------ | ------------------------------------ |
| `GOB`  | Gobernanza y control maestro         |
| `SDD`  | Spec-Driven Development              |
| `ARQ`  | Arquitectura y diseño                |
| `UX`   | Experiencia de usuario               |
| `AUD`  | Auditoría, calidad y evaluación      |
| `DOC`  | Gobernanza documental                |
| `REF`  | Referencias e integridad referencial |
| `CON`  | Continuidad y memoria                |
| `DEU`  | Deuda y evolución                    |
| `HIS`  | Archivo histórico                    |
| `FOR`  | Formación y competencias             |
| `SEG`  | Seguridad                            |
| `DAT`  | Datos                                |
| `OPS`  | Operaciones                          |

La lista puede ampliarse mediante decisión humana. No deben crearse códigos equivalentes para un mismo dominio.

---

## 6. Metadatos mínimos obligatorios

Todo documento incorporado a los registros de C1 debe poder declarar los campos siguientes.

| Campo                   | Obligatorio | Función                                                                       |
| ----------------------- | ----------- | ----------------------------------------------------------------------------- |
| `document_id`           | Sí          | Identidad persistente                                                         |
| `title`                 | Sí          | Título oficial                                                                |
| `document_type`         | Sí          | Constitución, protocolo, spec, instancia, plantilla, informe, registro u otro |
| `domain`                | Sí          | Dominio funcional                                                             |
| `scope`                 | Sí          | Alcance explícito                                                             |
| `authority_level`       | Sí          | Nivel de autoridad conforme a C0                                              |
| `status`                | Sí          | Estado documental                                                             |
| `canonical`             | Sí          | Indica si es fuente canónica                                                  |
| `current_path`          | Sí          | Ruta actual                                                                   |
| `version`               | Condicional | Versión editorial o técnica                                                   |
| `effective_date`        | Condicional | Fecha desde la cual tiene efecto                                              |
| `approval_reference`    | Condicional | Decisión, gate o PR que lo aprueba                                            |
| `predecessor_id`        | Condicional | Documento precedente                                                          |
| `successor_id`          | Condicional | Documento sucesor                                                             |
| `deprecation_reference` | Condicional | Evidencia de deprecación                                                      |
| `related_decisions`     | Condicional | IDs de decisiones relacionadas                                                |
| `related_gates`         | Condicional | IDs de gates relacionados                                                     |
| `related_debt`          | Condicional | IDs de deuda relacionada                                                      |
| `historical_copy_paths` | Condicional | Copias históricas o evidenciales                                              |
| `notes`                 | Opcional    | Observaciones controladas                                                     |

---

## 7. Estados documentales permitidos

### 7.1 `draft`

Documento en elaboración sin autoridad vigente.

### 7.2 `proposed`

Documento presentado formalmente para revisión o gate.

### 7.3 `approved`

Documento aprobado, pero cuya vigencia puede depender de otra condición.

### 7.4 `active`

Fuente vigente y aplicable dentro de su alcance.

### 7.5 `superseded`

Documento sustituido por un sucesor explícito.

Debe declarar `successor_id`.

### 7.6 `deprecated`

Documento que no debe utilizarse para nuevo trabajo.

Debe declarar referencia de deprecación y, cuando aplique, sucesor.

### 7.7 `historical`

Documento conservado como evidencia o memoria sin vigencia sustantiva.

### 7.8 `archived`

Documento incorporado formalmente al archivo histórico bajo las reglas de C8.

### 7.9 `on_hold`

Documento cuyo estado o autoridad está detenido por un conflicto pendiente de decisión humana.

---

## 8. Reglas de canonicidad

### REG-C1-001 · Canonicidad explícita

El campo `canonical` solo puede tener los valores:

```text
yes
no
pending
```

`yes` requiere evidencia de aprobación o una fuente rectora aplicable.

### REG-C1-002 · Una fuente canónica por alcance

No puede haber dos documentos con:

```text
canonical: yes
status: active
```

para el mismo tipo, dominio y alcance, salvo que una decisión humana documente una relación complementaria y no competitiva.

### REG-C1-003 · Las copias no son canónicas

Una copia en continuidad, auditoría, paquete de cierre o archivo histórico debe usar:

```text
canonical: no
```

y enlazar al `document_id` de la fuente activa.

### REG-C1-004 · La canonicidad no se hereda

Una nueva versión, copia o traslado no hereda automáticamente el estado canónico.

Debe validarse mediante gate o decisión aplicable.

---

## 9. Reglas de sucesión y deprecación

### REG-C1-005 · Sucesión bidireccional

Cuando un documento sustituya a otro:

- el documento anterior declara `successor_id`;
- el documento nuevo declara `predecessor_id`;
- ambos enlazan la decisión o gate correspondiente.

### REG-C1-006 · Deprecación con evidencia

La deprecación debe declarar:

```text
deprecation_reference
effective_date
successor_id, cuando exista
```

### REG-C1-007 · Sin eliminación durante la primera elevación

Un documento no se elimina en el mismo PR que establece por primera vez su ruta sucesora.

Primero se incorpora y valida la nueva fuente. La copia anterior se convierte en referencia o se archiva en una fase posterior.

### REG-C1-008 · Historia preservada

Una sucesión no borra la historia del documento.

Las versiones y rutas anteriores deben permanecer trazables mediante Git, registros, manifiestos o referencias controladas.

---

## 10. Registro de decisiones

Toda decisión debe incluir:

| Campo                | Contenido                                     |
| -------------------- | --------------------------------------------- |
| `decision_id`        | Identificador persistente                     |
| `title`              | Nombre breve                                  |
| `scope`              | Alcance                                       |
| `status`             | Propuesta, ratificada, sustituida o rechazada |
| `decision_date`      | Fecha                                         |
| `authority`          | Persona, grupo o gate que decide              |
| `evidence`           | PR, comentario, acta o documento              |
| `affected_documents` | IDs documentales                              |
| `successor_decision` | Decisión sucesora, cuando aplique             |

---

## 11. Registro de deuda

Toda deuda debe incluir:

| Campo                  | Contenido                                         |
| ---------------------- | ------------------------------------------------- |
| `debt_id`              | Identificador persistente                         |
| `title`                | Descripción breve                                 |
| `domain`               | Dominio                                           |
| `priority`             | P1, P2 o P3                                       |
| `status`               | Abierta, aceptada, bloqueada, resuelta o diferida |
| `source`               | Hallazgo, auditoría o decisión de origen          |
| `affected_documents`   | IDs documentales                                  |
| `owner`                | Responsable, cuando exista                        |
| `target_phase`         | Fase prevista                                     |
| `acceptance_reference` | Evidencia de aceptación de riesgo                 |
| `resolution_reference` | Evidencia de cierre                               |

C1 define el esquema. C7 consolidará la deuda activa en `20`.

---

## 12. Registro de gates

Todo gate debe incluir:

| Campo                | Contenido                                                                  |
| -------------------- | -------------------------------------------------------------------------- |
| `gate_id`            | Identificador persistente                                                  |
| `label`              | Etiqueta humana                                                            |
| `phase`              | Fase controlada                                                            |
| `scope`              | Qué aprueba o bloquea                                                      |
| `status`             | Pendiente, aprobado, aprobado con reservas, cambios requeridos o rechazado |
| `authority`          | Persona o grupo autorizado                                                 |
| `evidence`           | Comentario, revisión, acta o PR                                            |
| `dependencies`       | Decisiones o gates previos                                                 |
| `affected_documents` | IDs documentales                                                           |
| `date`               | Fecha de decisión                                                          |

---

## 13. Registros oficiales derivados de este esquema

Después de aprobar este documento, C1 podrá crear:

### C1.2 · Registro Maestro de Fuentes Canónicas y Vigencia

Debe contener:

- identidad documental;
- fuente canónica;
- estado;
- ruta;
- aprobación;
- sucesión;
- deprecación;
- copias históricas.

### C1.3 · Registro Maestro de Decisiones, Deuda y Gates

Debe contener:

- IDs persistentes;
- estado;
- relaciones documentales;
- evidencia;
- fase;
- dependencia;
- resolución o sucesión.

Estos registros se incorporarán en PR individuales.

---

## 14. Gate Humano G1-C1.1

La revisión humana confirma que:

- el esquema reproduce la autoridad ratificada en C0;
- la versión se trata como metadato y no como ruta primaria;
- una sola fuente activa se permite por alcance;
- los identificadores permanecen estables;
- la sucesión y la deprecación requieren evidencia;
- C1 registra y no mueve documentos;
- C2 no se inicia mediante este PR;
- v0.8.0 permanece cerrado.

Opciones:

- [x] **Aprobado.** El esquema puede integrarse y habilita C1.2.
- [ ] **Aprobado con reservas.** Las reservas se registran en el comentario de hito.
- [ ] **Cambios requeridos.** C1.2 no se inicia.
- [ ] **Rechazado.** El esquema no se incorpora.

---

## 15. Validación del PR

Resultado esperado:

```text
archivos añadidos: 1
archivos modificados: 0
archivos movidos: 0
archivos renombrados: 0
archivos eliminados: 0
C2 iniciado: no
v0.8.0 abierto: no
```

El PR debe contener únicamente:

```text
00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/
└── Esquema_Indices_Metadatos_Identificadores_C1_AI_StoryLab_1.md
```

---

## 16. Reversión

Antes del merge, la reversión consiste en cerrar el PR.

Después del merge:

```bash
git revert <commit_esquema_C1>
```

La reversión de este esquema no afecta los documentos de C0.

---

## 17. Estado de salida

```text
C0: cerrado
C1.1: aprobado
C1.2: habilitado, no iniciado
C1.3: no iniciado
C2: no iniciado
Movimientos: ninguno
v0.8.0: no abierto
```

La aprobación de este esquema habilita la creación de los registros oficiales de C1, pero no autoriza movimientos documentales ni preparación de contenedores.
