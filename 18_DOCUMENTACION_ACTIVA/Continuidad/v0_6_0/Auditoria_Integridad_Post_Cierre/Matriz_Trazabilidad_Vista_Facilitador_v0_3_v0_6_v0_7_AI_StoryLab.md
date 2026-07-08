# Matriz de Trazabilidad · Vista del Facilitador v0.3 → v0.6 → PR #21 → v0.7 · AI StoryLab 1

**Versión:** APROBADO  
**Tipo de documento:** Matriz de trazabilidad funcional, UX, pedagógica y de continuidad  
**Momento metodológico:** Post cierre v0.6 · Pre apertura v0.7  
**Estado:** APROBADO POR APROBACIÓN HUMANA EXPLÍCITA  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**PR activo:** PR #21 · auditoría de integridad v0.6 y deuda vista facilitador  
**PR de origen:** PR #20 · cierre documental condicionado de v0.6 · Diseño Funcional + UX  
**Rama:** `docs/v0-6-auditoria-integridad-facilitador`  
**Ruta canónica:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Matriz_Trazabilidad_Vista_Facilitador_v0_3_v0_6_v0_7_AI_StoryLab.md`  
**Fecha:** 2026-07-07  
**Fecha de aprobación:** 2026-07-07  
**Zona horaria de referencia:** America/Puerto_Rico  

---

## 0. Nota de alcance

Este documento no activa v0.7.

No crea arquitectura técnica final.  
No autoriza implementación.  
No autoriza validación con personas.  
No autoriza uso de datos reales.  
No autoriza backend productivo.  
No autoriza APIs externas.  
No autoriza IA embebida.  
No autoriza despliegue.

Su función es trazar documentalmente la continuidad de la vista del facilitador desde el MVP v0.3 hasta el cierre condicionado de v0.6, pasando por la auditoría de PR #21, y preparando insumos para una futura v0.7 sin definir todavía arquitectura técnica.

Esta matriz no reabre v0.6 completa. Opera como instrumento de corrección documental limitada post cierre v0.6.

---

## 1. Propósito

Esta matriz busca responder:

```text
¿Qué elementos de la vista del facilitador heredada del MVP v0.3 quedaron visibles, diluidos, omitidos o insuficientemente consolidados en v0.6, y cómo deben quedar trazados antes de abrir v0.7?
```

La matriz cumple cinco funciones:

1. recuperar la continuidad histórica de la vista del facilitador;
2. identificar cómo esa vista quedó parcialmente subsumida en v0.6;
3. distinguir deuda pagada, deuda en pago y deuda diferida;
4. convertir la corrección documental de PR #21 en insumo trazable;
5. preparar preguntas y restricciones para v0.7 sin resolver arquitectura final.

---

## 2. Contexto de referencia

PR #20 cerró documentalmente v0.6 como fase de Diseño Funcional + UX. Ese cierre se reconoce como válido, pero condicionado. PR #21 existe para auditar integridad y registrar deuda pagable antes de cualquier apertura de v0.7.

La deuda crítica identificada es:

```text
DFUX-FAC-v0.6-001 · Invisibilización parcial de la vista del facilitador heredada del MVP v0.3.
```

Esta matriz se apoya en los documentos ya preparados dentro de PR #21:

```text
Kit_Inicio_Sesion_Auditoria_Integridad_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
Deuda_Vista_Facilitador_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
Auditoria_Deuda_Integridad_Post_Cierre_v0_6_Pre_Apertura_v0_7_AI_StoryLab.md
Consolidacion_Funcional_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
```

---

## 3. Definición operativa de trazabilidad

Para este documento, trazabilidad significa:

```text
capacidad de seguir un elemento funcional, UX, pedagógico o ético desde su presencia inicial o herencia conceptual, a través de su tratamiento en v0.6, hasta su estado corregido o diferido en PR #21 y su eventual impacto en v0.7.
```

La trazabilidad no exige que todo esté resuelto. Exige que nada crítico quede invisible.

---

## 4. Leyenda de estados

| Estado | Significado |
|---|---|
| Recuperado | El elemento queda reconocido explícitamente en PR #21. |
| En consolidación | El elemento queda definido funcionalmente, pero requiere documentos complementarios. |
| Diferido a v0.7 | El elemento requiere tratamiento técnico posterior. |
| Prohibido en PR #21 | El elemento no puede resolverse en este PR por cruzar límites metodológicos. |
| Riesgo activo | El elemento requiere vigilancia documental para no convertirse en daño de diseño. |
| Pagado parcialmente | La deuda queda nombrada y encauzada, pero no cerrada por completo. |
| Pagado documentalmente | La deuda queda suficientemente resuelta para pasar como insumo a otra fase. |

---

## 5. Matriz principal de trazabilidad

| Código | Elemento trazado | Herencia v0.3 recuperada | Tratamiento en v0.6 | Deuda detectada en PR #21 | Corrección documental PR #21 | Insumo para v0.7 | Estado |
|---|---|---|---|---|---|---|---|
| TRAZ-FAC-001 | Existencia de vista del facilitador | El facilitador aparece como figura necesaria para acompañar el uso pedagógico del MVP. | Quedó distribuido bajo asistencia docente, acompañamiento, feedback y seguimiento. | La vista perdió nombre propio como espacio funcional. | Se reconoce como vista funcional diferenciada. | Modelar roles y permisos sin convertirlos todavía en arquitectura final. | En consolidación |
| TRAZ-FAC-002 | Rol diferenciado del facilitador | El facilitador no es estudiante ni administrador total. | La diferencia quedó implícita bajo apoyo docente. | Riesgo de confusión entre facilitador, docente, administrador y sistema. | Se establece como actor pedagógico de acompañamiento con límites. | Definir modelo técnico de roles en v0.7. | Diferido a v0.7 |
| TRAZ-FAC-003 | Experiencia UX propia | La experiencia del facilitador requiere observar, orientar y retroalimentar. | v0.6 priorizó experiencia del estudiante, misión y portafolio. | UX del facilitador quedó subrepresentada. | Se consolida como experiencia diferenciada. | Diseñar flujos técnicos posteriores sin inventarlos ahora. | En consolidación |
| TRAZ-FAC-004 | Acompañamiento antes de la misión | El facilitador puede preparar contexto y orientar propósito. | Aparece como acompañamiento y asistencia docente no sustitutiva. | No quedó anclado a una vista específica. | Se traza como punto de intervención pre misión. | Definir permisos y límites para configuración futura. | Pagado parcialmente |
| TRAZ-FAC-005 | Acompañamiento durante la misión | El facilitador puede detectar necesidad de apoyo sin intervenir invasivamente. | Aparece como seguimiento, apoyo y feedback contextual. | Riesgo de confundirse con monitoreo continuo. | Se nombra como observación limitada y acompañamiento no invasivo. | Seguridad deberá impedir vigilancia continua. | Riesgo activo |
| TRAZ-FAC-006 | Acompañamiento después de la misión | El facilitador puede apoyar reflexión y lectura de evidencias. | Aparece en revisión de evidencia, feedback y portafolio. | No se diferenciaron acciones concretas del facilitador. | Se establecen funciones: revisar evidencia compartida, comentar y sugerir rutas. | Definir registro mínimo y permisos de comentario. | En consolidación |
| TRAZ-FAC-007 | Relación con portafolio | El facilitador ayuda a interpretar trayectoria, no a poseerla. | El portafolio vivo quedó centrado en agencia estudiantil. | La visibilidad del facilitador sobre portafolio quedó ambigua. | Se afirma que el facilitador acompaña interpretación sin apropiación. | Definir visibilidad granular y consentimiento. | Diferido a v0.7 |
| TRAZ-FAC-008 | Evidencia compartida | El facilitador puede trabajar sobre evidencia disponible bajo criterios. | v0.6 usa evidencia contextualizada y reflexión. | No se definió qué evidencia puede ver. | Se identifica como deuda de permisos y privacidad. | Resolver límites de evidencia visible. | Diferido a v0.7 |
| TRAZ-FAC-009 | Retroalimentación contextualizada | El facilitador ofrece feedback situado, no producción por sustitución. | La retroalimentación aparece como principio transversal. | No quedó asociada a acciones de vista. | Se vincula feedback con momentos de misión, evidencia y portafolio. | Definir mecanismos técnicos posteriores de comentarios/sugerencias. | En consolidación |
| TRAZ-FAC-010 | Curaduría pedagógica | El facilitador puede sugerir rutas, recursos y continuidad. | Curaduría aparece como función amplia. | La responsabilidad del facilitador en curaduría quedó dispersa. | Se reconoce como función permitida de la vista. | Definir límites de recomendación y edición. | Pagado parcialmente |
| TRAZ-FAC-011 | No producción por el estudiante | El facilitador acompaña, no produce por sustitución. | v0.6 preserva agencia humana y asistencia no sustitutiva. | Riesgo de que la vista se convierta en herramienta de sustitución. | Se prohíbe producir por el estudiante desde la vista. | Diseñar controles que separen sugerir de producir. | En consolidación |
| TRAZ-FAC-012 | No vigilancia | La vista debe apoyar, no vigilar. | v0.6 evita dashboard punitivo, pero sin criterios completos. | Riesgo alto de vigilancia accidental si se improvisa en v0.7. | Se recomienda documento específico de criterios de no vigilancia. | Seguridad y UX deberán incorporar anti vigilancia. | Riesgo activo |
| TRAZ-FAC-013 | Local-first | La vista debe respetar control local y privacidad por defecto. | Local-first aparece como principio transversal. | No se aplicó específicamente al facilitador. | Se exige aplicar local-first a datos, evidencia y visibilidad del facilitador. | Arquitectura deberá sostener control local y minimización de datos. | Diferido a v0.7 |
| TRAZ-FAC-014 | Datos sintéticos o locales | Esta fase no puede usar datos reales. | v0.6 prohíbe validación con personas y uso de datos reales. | La vista podría tentar pruebas prematuras. | Se reafirma que la vista se define con datos sintéticos/locales. | Validación real queda fuera hasta fase autorizada. | Prohibido en PR #21 |
| TRAZ-FAC-015 | Permisos funcionales | El facilitador requiere límites de ver, comentar, sugerir y editar. | v0.6 no modeló permisos del facilitador. | Deuda alta para seguridad futura. | Se define familia de preguntas y requisitos preliminares. | Modelar permisos técnicos en v0.7. | Diferido a v0.7 |
| TRAZ-FAC-016 | Límites de visibilidad | El facilitador no debe tener visibilidad total por defecto. | La visibilidad queda implícita. | Riesgo de privacidad por exceso de acceso. | Se exige definición explícita de qué puede y no puede ver. | Diseñar visibilidad granular y consentimiento. | Riesgo activo |
| TRAZ-FAC-017 | Separación facilitador/administrador | El facilitador no debe ser administrador total. | v0.6 no necesitó distinguirlo técnicamente. | Riesgo de roles mezclados. | Se documenta la separación conceptual. | Arquitectura debe separar privilegios. | Diferido a v0.7 |
| TRAZ-FAC-018 | Apoyo ético y afectivo | El facilitador cuida ritmo, agencia y proceso creativo. | v0.6 reconoce dimensión ética, creativa y de acompañamiento. | No quedó materializado como vista. | Se incorpora como función de acompañamiento no punitivo. | Requisitos de interacción deberán preservar cuidado y agencia. | En consolidación |
| TRAZ-FAC-019 | Registro de deuda | La deuda debe quedar visible antes de arquitectura. | v0.6 cerró con deuda no totalmente explícita. | Omisión podía endurecerse en v0.7. | PR #21 registra y prioriza deuda DFUX-FAC-v0.6-001. | Gate v0.7 debe revisar deuda pagada. | Pagado parcialmente |
| TRAZ-FAC-020 | Corrección documental limitada | Una corrección puede mejorar v0.6 sin invalidarla. | PR #20 cerró v0.6 documentalmente. | Integrar facilitador requiere reconocer ajuste post cierre. | Se define como corrección documental limitada. | v0.7 solo podrá abrirse después de dictamen humano. | En consolidación |

---

## 6. Matriz de continuidad por capas

| Capa | En v0.3 | En v0.6 | En PR #21 | Para v0.7 |
|---|---|---|---|---|
| Actor | Facilitador como figura heredada del MVP. | Actor parcialmente subsumido en asistencia docente. | Actor recuperado como rol diferenciado. | Modelo técnico de roles, si se autoriza. |
| Vista | Vista del facilitador como necesidad funcional. | Vista no plenamente nombrada. | Vista consolidada conceptualmente. | Interfaz/arquitectura futura, no definida aquí. |
| UX | Orientar, acompañar, revisar, sugerir. | UX principalmente distribuida en estudiante/misión/portafolio. | UX del facilitador diferenciada. | Flujos técnicos posteriores. |
| Pedagogía | Acompañamiento humano del proceso. | Acompañamiento, feedback y curaduría. | No sustitución, cuidado de agencia, retroalimentación situada. | Requisitos técnicos deben preservar pedagogía. |
| Privacidad | Requiere límites de acceso. | No completamente modelada para facilitador. | Deuda explícita. | Visibilidad granular, permisos, consentimiento. |
| Seguridad | Riesgo futuro por roles y datos. | Riesgo implícito. | Riesgo identificado. | Modelado de seguridad en v0.7. |
| Local-first | Debe preservar control local. | Principio transversal. | Aplicado al facilitador como restricción. | Arquitectura local-first futura. |
| No vigilancia | Debe evitar lógica de panel punitivo. | Evitada conceptualmente, no consolidada. | Se identifica como criterio necesario. | Controles técnicos y UX anti vigilancia. |

---

## 7. Deuda pagada, en pago y diferida

### 7.1 Deuda pagada parcialmente en PR #21

| Deuda | Evidencia de pago documental | Estado |
|---|---|---|
| La vista del facilitador no estaba nombrada explícitamente. | Documento de deuda y consolidación funcional la nombran como vista propia. | Pagada parcialmente |
| El rol del facilitador estaba diluido. | Se diferencia de estudiante, administrador y producción por sustitución. | Pagada parcialmente |
| La deuda no estaba registrada como riesgo pre v0.7. | Queda codificada como DFUX-FAC-v0.6-001. | Pagada parcialmente |
| La necesidad de corrección documental limitada no estaba formulada. | Queda declarada como mejora post cierre v0.6. | Pagada parcialmente |

### 7.2 Deuda todavía en pago dentro de PR #21

| Deuda | Documento recomendado | Razón |
|---|---|---|
| Falta criterios específicos de no vigilancia. | `Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md` | Evita que acompañamiento se convierta en monitoreo invasivo. |
| Falta completar trazabilidad histórica v0.3 → v0.6 → v0.7. | Este documento. | Evita que la deuda vuelva a diluirse. |
| Falta acta pre gate v0.7. | `Acta_Pre_Gate_Inicio_v0_7_AI_StoryLab.md` | Define si hay condiciones suficientes para abrir otro PR de v0.7. |

### 7.3 Deuda diferida a v0.7

| Deuda | Por qué se difiere | Condición futura |
|---|---|---|
| Modelo técnico final de roles. | Sería arquitectura. | Solo en PR separado de v0.7. |
| Sistema de permisos granular. | Sería diseño técnico. | Requiere análisis de seguridad. |
| Implementación de interfaz del facilitador. | Sería implementación o diseño técnico final. | No autorizada en PR #21. |
| Validación con personas facilitadoras/docentes. | Sería investigación/validación. | No autorizada hasta fase correspondiente. |
| Uso de datos reales. | Cruza prohibición metodológica. | No autorizado en este tramo. |

---

## 8. Criterios de trazabilidad suficiente antes de v0.7

Antes de abrir v0.7, la vista del facilitador debe quedar trazada al menos en estos puntos:

1. nombre explícito de la vista;
2. diferencia entre facilitador, estudiante, docente genérico y administrador;
3. funciones permitidas;
4. acciones prohibidas;
5. límites de visibilidad;
6. relación con misión;
7. relación con evidencia;
8. relación con portafolio;
9. relación con feedback;
10. criterios de no vigilancia;
11. restricción local-first;
12. riesgos de seguridad/privacidad para v0.7;
13. deuda técnica diferida;
14. condición de aprobación humana antes de activar v0.7.

---

## 9. Riesgos si esta matriz no se integra

| Riesgo | Severidad | Descripción |
|---|---:|---|
| Re-dilución del facilitador | Alta | La vista podría volver a desaparecer bajo términos amplios. |
| Arquitectura incompleta en v0.7 | Alta | Roles, permisos y visibilidad podrían diseñarse tarde o mal. |
| Vigilancia accidental | Alta | Acompañamiento podría traducirse en monitoreo invasivo. |
| UX fragmentada | Media-alta | El facilitador aparecería como añadido posterior. |
| Pérdida de continuidad v0.3 | Media | La herencia del MVP quedaría sin rastro operativo. |
| Sobrecorrección | Media | La deuda podría pagarse mediante exceso técnico prematuro. |

---

## 10. Dictamen de la matriz

La trazabilidad muestra que la vista del facilitador no desapareció de v0.6, pero sí quedó insuficientemente consolidada como vista funcional explícita.

La deuda no invalida PR #20. Sin embargo, sí justifica una corrección documental limitada dentro de PR #21 antes de activar v0.7.

Dictamen:

```text
La vista del facilitador debe pasar de función dispersa a vista funcional trazada, con límites éticos, pedagógicos y de privacidad explícitos, antes de abrir el gate de v0.7.
```

---

## 11. Recomendación

Integrar esta matriz como documento de continuidad dentro de PR #21 y usarla como puente entre:

```text
Deuda formal
→ Auditoría de integridad
→ Consolidación funcional
→ Criterios de no vigilancia
→ Acta pre gate v0.7
```

La próxima pieza recomendada después de esta matriz es:

```text
Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
```

---

## 12. Cierre

Esta matriz cumple una función de costura: une piezas que estaban cerca, pero no suficientemente anudadas.

La vista del facilitador queda ahora trazada como herencia, deuda, corrección documental e insumo futuro. No se convierte todavía en arquitectura, interfaz implementada ni validación. Se convierte en algo más importante para este momento: una responsabilidad documental visible.
