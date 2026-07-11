# Matriz de Precedencia Documental · C0

## AI StoryLab 1

**Fase:** C0 · Ratificación de autoridad y precedencia\
**Estado:** Borrador para aprobación humana\
**Fecha:** 2026-07-11\
**Documento rector relacionado:** `Dictamen_Autoridad_Precedencia_Documental_C0_AI_StoryLab_1.md`\
**Alcance:** Clasificación de autoridad, función y precedencia documental\
**Efecto inmediato:** Ninguno hasta aprobación y merge de su PR individual\
**Restricciones:** No mueve, renombra, elimina, fusiona ni reclasifica archivos. No inicia C1 ni C2. No abre v0.8.0.

---

## 1. Propósito

Esta matriz convierte las decisiones ratificadas en el Dictamen de Autoridad y Precedencia Documental C0 en una referencia operativa para:

- identificar la función de cada capa documental;
- distinguir autoridad normativa, operativa, instrumental, pedagógica y evidencial;
- resolver dudas de precedencia;
- impedir que la ubicación de un archivo se confunda con autoridad automática;
- proteger los gates humanos;
- activar HOLD documental cuando exista un conflicto no resuelto.

La matriz no sustituye el dictamen. Lo desarrolla como instrumento de consulta y aplicación.

---

## 2. Fórmula rectora

```text
00 gobierna
.specify opera y traza
07 modela
05 forma
18 recuerda y transfiere
```

La autoridad documental resulta de la combinación de:

```text
tipo documental
+ alcance
+ estado de aprobación
+ vigencia
+ decisión humana aplicable
```

La ruta física de un archivo es un indicador funcional, pero no concede autoridad ilimitada.

---

## 3. Principios de interpretación

### PRI-C0-001 · La decisión humana conserva la autoridad máxima

Una decisión humana ratificada prevalece dentro del alcance expresamente aprobado.

No puede extenderse por inferencia a materias que no fueron examinadas o autorizadas.

### PRI-C0-002 · La Constitución SDD gobierna el sistema

La Constitución SDD y la gobernanza ratificada establecen los principios, límites, ciclo de vida, gates y reglas de derivación del sistema.

### PRI-C0-003 · Los protocolos operan bajo autoridad constitucional

Un protocolo rector puede gobernar métodos, colocación y procedimientos, pero no puede contradecir la Constitución SDD ni una decisión humana aplicable.

### PRI-C0-004 · La aprobación prevalece sobre la plantilla

Una instancia o spec aprobada prevalece sobre la plantilla genérica dentro del alcance específico que fue aprobado.

### PRI-C0-005 · `.specify` no constituye una segunda Constitución

`.specify/` funciona como workspace técnico para operación, trazabilidad, preparación y reflejo de specs.

La ubicación dentro de `.specify/` no crea por sí sola autoridad constitucional o normativa.

### PRI-C0-006 · La formación no redefine la doctrina

Los documentos de competencias y formación traducen el sistema para el desarrollo de capacidades humanas.

No pueden declarar vigencia, modificar una spec ni sustituir una decisión de gobernanza.

### PRI-C0-007 · La memoria no sustituye la fuente canónica

La documentación activa conserva evidencia, contexto, transferencias y cierres.

Puede demostrar qué se decidió, pero no debe operar como fuente paralela de autoridad sustantiva.

### PRI-C0-008 · La novedad no implica precedencia

La fecha o versión más reciente no prevalece automáticamente.

Para que un documento sustituya a otro debe existir una declaración explícita de sucesión, vigencia o deprecación.

---

## 4. Matriz general de precedencia

| Orden | ID    | Capa o tipo documental                      | Ubicación principal                           | Función                                                                      | Nivel de autoridad          | Criterio de precedencia                                       |
| ----- | ----- | ------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------- |
| 1     | C0-A0 | Decisión humana ratificada y gate aplicable | Registro formal de la decisión                | Aprobar, bloquear, condicionar o resolver dentro de un alcance explícito     | Máxima dentro de su alcance | Decisión explícita, alcance definido y gate aplicable         |
| 2     | C0-A1 | Constitución SDD y gobernanza ratificada    | `00_CONTROL_MAESTRO/Spec_Driven_Development/` | Definir principios, límites, autoridad, ciclo de vida y reglas de derivación | Sistémica                   | Tipo constitucional, aprobación, vigencia y alcance sistémico |
| 3     | C0-A2 | Protocolo rector ratificado                 | `00_CONTROL_MAESTRO/`                         | Definir método, colocación y operación transversal                           | Transversal acotada         | Ratificación expresa y subordinación a la Constitución SDD    |
| 4     | C0-A3 | Spec aprobada y canónica                    | Ruta canónica declarada                       | Definir requisitos y contrato de un producto, capacidad o dominio            | Normativa acotada           | Aprobación, canonicidad, vigencia y dominio explícito         |
| 5     | C0-A4 | Instancia aprobada                          | Ruta funcional aplicable                      | Concretar una plantilla o spec para un caso definido                         | Acotada por aprobación      | Aprobación específica del caso                                |
| 6     | C0-A5 | Workspace técnico                           | `.specify/`                                   | Operar, trazar, preparar o reflejar specs                                    | Operativa                   | Función de trabajo y trazabilidad                             |
| 7     | C0-A6 | Plantilla o modelo                          | `07_PLANTILLAS_Y_MODELOS/`                    | Proporcionar estructuras reutilizables                                       | Instrumental                | Carácter reutilizable y no normativo                          |
| 8     | C0-A7 | Formación y competencias                    | `05_COMPETENCIAS_Y_PERFILES/`                 | Formar capacidades humanas y traducir el sistema                             | Pedagógica                  | Función formativa subordinada a fuentes rectoras              |
| 9     | C0-A8 | Memoria y continuidad                       | `18_DOCUMENTACION_ACTIVA/`                    | Conservar evidencia, contexto, decisiones y transferencias                   | Evidencial                  | Valor probatorio y de continuidad                             |

---

## 5. Matriz de relaciones de autoridad

### C0-A0 · Decisión humana ratificada y gate aplicable

| Campo                     | Determinación                                                    |
| ------------------------- | ---------------------------------------------------------------- |
| Función                   | Aprobar, rechazar, bloquear, condicionar o resolver una decisión |
| Autoridad                 | Máxima dentro del alcance expresamente autorizado                |
| Puede prevalecer sobre    | Todas las capas inferiores dentro del alcance aprobado           |
| No puede prevalecer sobre | Materias, principios o alcances no incluidos en la decisión      |
| Evidencia requerida       | Comentario de hito, revisión, acta, gate o registro equivalente  |
| Estado en C0              | Ratificado mediante Gate Humano G0-C0                            |

### C0-A1 · Constitución SDD y gobernanza ratificada

| Campo                     | Determinación                                                                |
| ------------------------- | ---------------------------------------------------------------------------- |
| Ubicación                 | `00_CONTROL_MAESTRO/Spec_Driven_Development/`                                |
| Función                   | Definir principios, límites, autoridad, ciclo de vida y reglas de derivación |
| Autoridad                 | Sistémica                                                                    |
| Puede prevalecer sobre    | Protocolos, specs, workspace, plantillas, formación y continuidad            |
| No puede prevalecer sobre | Una decisión humana posterior que la modifique formalmente                   |
| Condición                 | Debe estar aprobada, vigente y declarada como canónica                       |
| Estado en C0              | Ratificado mediante Gate Humano G0-C0                                        |

### C0-A2 · Protocolo rector ratificado

| Campo                     | Determinación                                             |
| ------------------------- | --------------------------------------------------------- |
| Ubicación                 | `00_CONTROL_MAESTRO/`                                     |
| Función                   | Definir método, colocación y procedimiento transversal    |
| Autoridad                 | Transversal dentro de su alcance                          |
| Puede prevalecer sobre    | Specs y artefactos operativos en materias procedimentales |
| No puede prevalecer sobre | Constitución SDD o decisión humana ratificada             |
| Condición                 | Debe declarar alcance, subordinación y vigencia           |
| Estado en C0              | Ratificado mediante Gate Humano G0-C0                     |

### C0-A3 · Spec aprobada y canónica

| Campo                     | Determinación                                                        |
| ------------------------- | -------------------------------------------------------------------- |
| Ubicación                 | Ruta canónica declarada para el dominio correspondiente              |
| Función                   | Definir requisitos, comportamiento y contrato de un alcance concreto |
| Autoridad                 | Normativa y acotada                                                  |
| Puede prevalecer sobre    | Instancias, workspace y plantillas dentro de su dominio              |
| No puede prevalecer sobre | Constitución, protocolo superior o decisiones fuera de su alcance    |
| Condición                 | Aprobación, vigencia, canonicidad y alcance explícito                |
| Estado en C0              | Regla ratificada mediante Gate Humano G0-C0                          |

### C0-A4 · Instancia aprobada

| Campo                     | Determinación                                            |
| ------------------------- | -------------------------------------------------------- |
| Ubicación                 | Ruta funcional aplicable al caso                         |
| Función                   | Concretar una plantilla o spec para un uso definido      |
| Autoridad                 | La concedida por su aprobación                           |
| Puede prevalecer sobre    | La plantilla genérica dentro de su caso aprobado         |
| No puede prevalecer sobre | Spec superior, Constitución, protocolo o decisión humana |
| Condición                 | Aprobación explícita del contenido concreto              |
| Estado en C0              | Regla ratificada mediante Gate Humano G0-C0              |

### C0-A5 · Workspace técnico

| Campo                     | Determinación                                                      |
| ------------------------- | ------------------------------------------------------------------ |
| Ubicación                 | `.specify/`                                                        |
| Función                   | Operar, trazar, preparar, ejecutar o reflejar specs                |
| Autoridad                 | Operativa                                                          |
| Puede prevalecer sobre    | Artefactos de trabajo subordinados cuando su estado lo permita     |
| No puede prevalecer sobre | Constitución, gobernanza, protocolo, spec o instancia aprobada     |
| Condición                 | La autoridad proviene del estado del artefacto, no de la ubicación |
| Estado en C0              | Ratificado como workspace técnico                                  |

### C0-A6 · Plantilla o modelo

| Campo                     | Determinación                                              |
| ------------------------- | ---------------------------------------------------------- |
| Ubicación                 | `07_PLANTILLAS_Y_MODELOS/`                                 |
| Función                   | Proporcionar estructura reutilizable                       |
| Autoridad                 | Instrumental                                               |
| Puede prevalecer sobre    | Borradores no aprobados que dependan de su estructura      |
| No puede prevalecer sobre | Instancia o spec aprobada                                  |
| Condición                 | Los cambios son prospectivos salvo decisión humana expresa |
| Estado en C0              | Ratificado como capa de modelado                           |

### C0-A7 · Formación y competencias

| Campo                     | Determinación                                                         |
| ------------------------- | --------------------------------------------------------------------- |
| Ubicación                 | `05_COMPETENCIAS_Y_PERFILES/`                                         |
| Función                   | Desarrollar competencias y traducir el sistema a prácticas formativas |
| Autoridad                 | Pedagógica                                                            |
| Puede prevalecer sobre    | Materiales formativos subordinados dentro de su programa              |
| No puede prevalecer sobre | Constitución, protocolo, spec, vigencia o gate                        |
| Condición                 | Debe mantener fidelidad a las fuentes rectoras                        |
| Estado en C0              | Ratificado como capa formativa                                        |

### C0-A8 · Memoria y continuidad

| Campo                     | Determinación                                                          |
| ------------------------- | ---------------------------------------------------------------------- |
| Ubicación                 | `18_DOCUMENTACION_ACTIVA/`                                             |
| Función                   | Conservar evidencia, contexto, decisiones, cierres y transferencias    |
| Autoridad                 | Evidencial                                                             |
| Puede prevalecer sobre    | Interpretaciones sin fuente cuando aporta evidencia formal verificable |
| No puede prevalecer sobre | Fuentes sustantivas vigentes ni autoridad general del sistema          |
| Condición                 | Debe enlazar o identificar la decisión o fuente que documenta          |
| Estado en C0              | Ratificado como capa de memoria y transferencia                        |

---

## 6. Matriz de conflictos frecuentes

| Conflicto                                | Regla aplicable                                                         | Resultado                                       |
| ---------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------- |
| Constitución vs. protocolo               | La Constitución tiene precedencia                                       | Se aplica la Constitución                       |
| Protocolo vs. spec                       | El protocolo prevalece en materias procedimentales dentro de su alcance | La spec debe ajustarse al protocolo             |
| Spec aprobada vs. plantilla              | La spec aprobada prevalece dentro de su dominio                         | La plantilla no altera retroactivamente la spec |
| Instancia aprobada vs. plantilla         | La instancia prevalece dentro del caso aprobado                         | El cambio de plantilla es prospectivo           |
| `.specify` vs. fuente canónica en `00`   | La fuente canónica ratificada prevalece                                 | `.specify` conserva función operativa           |
| Formación vs. spec                       | La spec prevalece                                                       | El material formativo debe corregirse           |
| Continuidad vs. fuente canónica          | La fuente canónica prevalece en contenido sustantivo                    | La continuidad conserva valor evidencial        |
| Documento reciente vs. documento vigente | La vigencia prevalece sobre la fecha                                    | La novedad no implica sustitución               |
| Dos fuentes del mismo nivel              | Se verifica alcance, aprobación y sucesión                              | Si persiste la contradicción, se activa HOLD    |
| Documento sin estado claro               | No se presume autoridad                                                 | Se activa revisión humana                       |

---

## 7. Procedimiento de resolución de conflictos

Ante una contradicción documental:

1. identificar los documentos en conflicto;
2. delimitar el alcance exacto de cada uno;
3. verificar su tipo documental;
4. verificar aprobación, vigencia y estado canónico;
5. identificar decisiones humanas y gates aplicables;
6. determinar si existe declaración explícita de sucesión;
7. aplicar la precedencia establecida en esta matriz;
8. activar HOLD documental si el conflicto persiste;
9. registrar la resolución mediante decisión humana;
10. actualizar los documentos de continuidad correspondientes.

Durante un HOLD documental:

- no se mueve ningún archivo;
- no se elimina ningún documento;
- no se declara deprecación;
- no se implementa la interpretación disputada;
- no se abre una fase dependiente de la decisión pendiente.

---

## 8. Reglas de sucesión documental

Un documento se considera sustituido únicamente cuando existe evidencia explícita de:

- una versión sucesora aprobada;
- una declaración formal de sustitución;
- una decisión humana aplicable;
- un cambio de vigencia registrado;
- una deprecación documentada.

No constituyen sucesión automática:

- una fecha posterior;
- un número de versión mayor;
- una ubicación aparentemente superior;
- una copia parcial;
- una mención en bitácora;
- un borrador no ratificado;
- una plantilla actualizada.

---

## 9. Registro de decisiones relacionadas

| ID         | Decisión ratificada                                                                   |
| ---------- | ------------------------------------------------------------------------------------- |
| DEC-C0-001 | El protocolo de cartapacios es un protocolo rector operativo subordinado              |
| DEC-C0-002 | `00_CONTROL_MAESTRO/Spec_Driven_Development/` es la autoridad documental SDD          |
| DEC-C0-003 | `.specify/` es workspace técnico y no una segunda Constitución                        |
| DEC-C0-004 | `07` modela y la instancia aprobada prevalece sobre la plantilla dentro de su alcance |
| DEC-C0-005 | `05` forma y no redefine doctrina, vigencia o specs                                   |
| DEC-C0-006 | Un conflicto documental no resuelto activa HOLD                                       |
| DEC-C0-007 | C1, C2 y v0.8.0 permanecen fuera del alcance de este hito                             |

---

## 10. Gate humano de esta matriz

Este documento debe incorporarse mediante un PR individual.

La revisión humana debe confirmar que:

- reproduce fielmente el dictamen C0 ratificado;
- no crea una jerarquía diferente;
- no modifica las decisiones DEC-C0-001 a DEC-C0-007;
- no concede autoridad automática por ubicación;
- no inicia movimientos documentales;
- no inicia C1 ni C2;
- no abre v0.8.0.

Opciones del gate:

- [x] **Aprobada.** La matriz puede integrarse como referencia oficial de C0.
- [ ] **Aprobada con reservas.** Las reservas quedan registradas en el comentario de hito.
- [ ] **Cambios requeridos.** El documento permanece fuera de `main`.
- [ ] **Rechazada.** No se incorpora la matriz.

---

## 11. Validación del PR

Resultado esperado:

```text
archivos añadidos: 1
archivos modificados: 0
archivos movidos: 0
archivos renombrados: 0
archivos eliminados: 0
C1 iniciado: no
C2 iniciado: no
v0.8.0 abierto: no
```

El PR debe contener únicamente:

```text
00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/
└── Matriz_Precedencia_Documental_C0_AI_StoryLab_1.md
```

---

## 12. Reversión

Antes del merge, la reversión consiste en cerrar el PR.

Después del merge:

```bash
git revert <commit_matriz_C0>
```

La reversión no afecta el Dictamen de Autoridad y Precedencia Documental ya ratificado.

---

## 13. Estado de salida

```text
Matriz C0: pendiente de aprobación humana
Dictamen C0: ratificado
Movimientos: ninguno
C1: no iniciado
C2: no iniciado
v0.8.0: no abierto
```

La aprobación de esta matriz completa la referencia operativa de precedencia dentro de C0, pero no autoriza por sí sola acciones de C1, C2 o fases posteriores.
