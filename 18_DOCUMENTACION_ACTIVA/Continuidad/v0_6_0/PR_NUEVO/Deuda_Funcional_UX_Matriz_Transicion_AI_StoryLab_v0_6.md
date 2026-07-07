# Deuda Funcional y UX + Matriz de Transición v0.6 → v0.7 · AI StoryLab 1

**Versión:** APROBADO  
**Fase:** AI StoryLab 1 v0.6 · Diseño Funcional + UX  
**Tipo de documento:** Consolidación de deuda funcional/UX y matriz de transición  
**Estado:** Aprobado para integración canónica  
**PR asociado:** PR #20 · `docs: iniciar activacion v0.6 diseno funcional ux`  
**Rama asociada:** `docs/v0-6-activacion-diseno-funcional-ux`  
**Documento antecedente 1:** `Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`  
**Documento antecedente 2:** `Plan_Trabajo_Documental_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`  
**Documento antecedente 3:** `Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md`  
**Documento antecedente 4:** `Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md`  
**Documento antecedente 5:** `Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md`  
**Documento antecedente 6:** `Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md`  
**Documento antecedente 7:** `Recorridos_Usuario_Sinteticos_AI_StoryLab_v0_6.md`  
**Documento antecedente 8:** `Criterios_Interaccion_Humano_IA_AI_StoryLab_v0_6.md`  
**Documento antecedente 9:** `Criterios_Accesibilidad_Claridad_AI_StoryLab_v0_6.md`  
**Documento antecedente 10:** `Requisitos_Funcionales_Preliminares_AI_StoryLab_v0_6.md`  
**Fecha:** 2026-07-07  

---

## 0. Nota de alcance

Este documento consolida deuda funcional y UX derivada de la fase **AI StoryLab 1 v0.6 · Diseño Funcional + UX** y organiza una matriz preliminar de transición hacia **v0.7 · Arquitectura Técnica + Seguridad**.

No es una arquitectura técnica.

No selecciona stack.

No define base de datos.

No define backend.

No diseña APIs.

No implementa.

No activa v0.7.

Su función es preparar una transferencia documental ordenada para que la próxima fase pueda tomar decisiones técnicas con base en criterios funcionales ya aprobados.

---

## 1. Propósito del documento

Este documento busca:

1. consolidar la deuda funcional y UX acumulada durante v0.6;
2. identificar qué deudas deben alimentar v0.7;
3. distinguir deuda funcional, UX, pedagógica, documental, técnica futura y seguridad futura;
4. organizar una matriz de transición v0.6 → v0.7;
5. establecer criterios de prioridad;
6. evitar que v0.7 comience con ambigüedad;
7. preservar local-first, agencia humana, misión configurable, portafolio vivo y uso externo opcional de herramientas de IA;
8. preparar el cierre futuro de v0.6 sin cerrar aún la fase.

---

## 2. Principio rector

La deuda no es falla. Es memoria de diseño.

En AI StoryLab 1, la deuda funcional y UX debe servir como puente responsable entre imaginación pedagógica y decisión técnica futura.

La deuda debe decir:

- qué falta;
- por qué importa;
- de dónde viene;
- qué fase debe atenderlo;
- qué riesgo evita;
- qué no debe activar todavía.

---

## 3. Tipología de deuda

| Tipo | Definición |
|---|---|
| Deuda funcional | Función necesaria que requiere mayor especificación |
| Deuda UX | Patrón de experiencia que debe diseñarse con más precisión |
| Deuda pedagógica | Criterio educativo, docente o curricular que requiere desarrollo |
| Deuda documental | Ajuste, auditoría o alineación entre documentos |
| Deuda de seguridad futura | Tema que debe analizarse en v0.7 antes de implementación |
| Deuda técnica futura | Insumo para arquitectura o implementación futura, sin decidir stack |
| Deuda de gobernanza | Regla, protocolo o control de continuidad que requiere formalización |
| Deuda de evaluación futura | Criterio que podrá informar evaluación o validación en fases posteriores |

---

## 4. Criterios de prioridad

### Alta

Debe atenderse antes de decisiones técnicas o diseño implementable.

### Media

Debe atenderse antes de implementación incremental o antes de cerrar v0.7/v0.8.

### Baja

Puede registrarse para evolución posterior sin bloquear transición.

En esta consolidación se privilegia **alta** y **media**. Lo no indispensable debe quedar en reserva, no forzarse como requisito temprano.

---

## 5. Deuda consolidada prioritaria

| Código consolidado | Deuda | Tipo | Prioridad | Origen principal | Fase sugerida |
|---|---|---|---:|---|---|
| DCON-v0.6-001 | Definir arquitectura local-first sin romper control humano ni privacidad | Seguridad/técnica futura | Alta | Local-first / Requisitos | v0.7 |
| DCON-v0.6-002 | Diseñar modelo técnico futuro para misiones configurables | Técnica futura | Alta | Marco de Misión / Requisitos | v0.7 |
| DCON-v0.6-003 | Definir estructura técnica futura de ruta mínima + libertad creativa | Técnica/UX futura | Alta | Flujos / Accesibilidad | v0.7 |
| DCON-v0.6-004 | Diseñar manejo seguro de referencias externas declaradas | Seguridad futura | Alta | Flujos / Humano-IA / Requisitos | v0.7 |
| DCON-v0.6-005 | Definir modelo de evidencia contextualizada y sensibilidad | Seguridad/técnica futura | Alta | Modelo UX / Requisitos | v0.7 |
| DCON-v0.6-006 | Diseñar portafolio vivo como memoria local de proceso | Técnica/UX futura | Alta | Mapa / Modelo UX / Requisitos | v0.7 |
| DCON-v0.6-007 | Definir registro de uso externo de herramientas de IA sin integración automática | Seguridad/documental/técnica futura | Alta | Humano-IA / Requisitos | v0.7 |
| DCON-v0.6-008 | Definir export/import local con decisión humana explícita | Seguridad/técnica futura | Alta | Local-first / Requisitos | v0.7 |
| DCON-v0.6-009 | Diseñar estados funcionales de misión, evidencia, portafolio y transferencia | UX/técnica futura | Alta | Flujos / Accesibilidad / Requisitos | v0.7 |
| DCON-v0.6-010 | Definir asistencia docente sin vigilancia ni sustitución | Pedagógica/UX | Alta | Recorridos / Humano-IA | v0.7 / v0.8 |
| DCON-v0.6-011 | Crear patrones de advertencia para privacidad, autoría, enlaces y fase | UX/seguridad futura | Alta | Accesibilidad / Humano-IA | v0.7 |
| DCON-v0.6-012 | Consolidar mensajes local-first canónicos | Documental/UX | Alta | Accesibilidad / Requisitos | v0.7 |
| DCON-v0.6-013 | Definir criterios técnicos futuros de almacenamiento local | Técnica futura | Alta | Local-first / Requisitos | v0.7 |
| DCON-v0.6-014 | Separar funcionalmente documento canónico, evidencia, referencia externa y archivo de trabajo | Gobernanza/técnica futura | Alta | Flujos / Requisitos | v0.7 |
| DCON-v0.6-015 | Definir trazabilidad longitudinal entre misión, evidencia, decisión, reflexión, deuda y portafolio | Técnica/documental futura | Alta | Mapa / Requisitos | v0.7 |
| DCON-v0.6-016 | Preparar backlog funcional priorizado para v0.8 | Gobernanza/técnica futura | Alta | Requisitos | v0.7 |
| DCON-v0.6-017 | Auditar consistencia documental final de v0.6 antes del cierre | Documental | Alta | Todos | Cierre v0.6 |
| DCON-v0.6-018 | Definir criterios mínimos de accesibilidad técnica futura | Técnica/UX futura | Media | Accesibilidad | v0.7 / v0.8 |
| DCON-v0.6-019 | Diseñar glosario funcional breve para actores no técnicos | Documental/UX | Media | Accesibilidad | Cierre v0.6 / v0.7 |
| DCON-v0.6-020 | Preparar checklist de no-regresión documental para PR futuros | Gobernanza | Media | Requisitos | Cierre v0.6 |

---

## 6. Matriz de transición v0.6 → v0.7

| Eje funcional v0.6 | Decisión funcional ya establecida | Pregunta para v0.7 | Tipo de decisión futura | Riesgo a evitar |
|---|---|---|---|---|
| Local-first | Nada se envía, publica, sincroniza o analiza automáticamente | ¿Qué arquitectura preserva control local? | Arquitectura + seguridad | Crear dependencia remota prematura |
| Misiones configurables | La misión es unidad pedagógico-creativa | ¿Cómo representar misiones sin rigidez? | Modelo de datos futuro | Convertir misión en formulario cerrado |
| Ruta mínima + libertad creativa | Toda misión tiene núcleo y zona creativa | ¿Cómo diseñar estructuras flexibles? | Arquitectura de contenido | Perder agencia o generar caos |
| Prompts sugeridos | Son opcionales, editables y externos | ¿Cómo almacenarlos y versionarlos localmente? | Modelo de contenido | Confundir prompt con IA embebida |
| Herramientas externas | Se registran, no se conectan automáticamente | ¿Cómo representar herramientas sin integrarlas? | Seguridad + UX | Sugerir APIs o sincronización no autorizada |
| Referencias externas | Enlace + contexto humano, no importación | ¿Qué controles y advertencias se requieren? | Seguridad | Exponer datos privados |
| Evidencias | Son rastros contextualizados | ¿Qué estructura mínima evita sobrecaptura? | Modelo de datos + privacidad | Registrar demasiado o muy poco |
| Portafolio vivo | Memoria de proceso, no carpeta | ¿Cómo vincular evidencias y narrativa? | Arquitectura de información | Crear repositorio pasivo |
| Reflexión protegida | La persona confirma su interpretación | ¿Cómo guardar reflexión sin sustituir voz? | UX + datos locales | Reflexión automática o genérica |
| Asistencia docente | Acompaña sin producir | ¿Qué vistas o guías docentes son seguras? | UX + permisos futuros | Vigilancia o sustitución |
| Accesibilidad | Claridad, capas y estados visibles | ¿Qué patrones de interfaz sostienen esto? | UX técnica futura | Sobrecarga cognitiva |
| Transferencia | No equivale a publicación | ¿Cómo exportar/retomar estado seguro? | Export/import | Publicación accidental |
| Trazabilidad | Decisiones y deuda deben vincularse | ¿Qué registro mínimo sostiene continuidad? | Modelo de datos futuro | Pérdida de memoria documental |
| Guardrails de fase | v0.6 no implementa | ¿Cómo traducir sin sobreactivar alcance? | Gobernanza v0.7 | Saltar a implementación prematura |

---

## 7. Preguntas rectoras para v0.7

La fase v0.7 deberá comenzar respondiendo preguntas técnicas y de seguridad derivadas de v0.6:

1. ¿Cómo preservar local-first de manera verificable?
2. ¿Qué datos pueden existir solo localmente?
3. ¿Qué datos nunca deben salir de la app por defecto?
4. ¿Cómo se representará una misión configurable?
5. ¿Cómo se modelará evidencia sin capturar contenido sensible innecesario?
6. ¿Cómo se registrarán referencias externas sin importarlas?
7. ¿Cómo se advertirá sobre privacidad, autoría y enlaces externos?
8. ¿Cómo se representará el portafolio vivo?
9. ¿Cómo se sostendrá export/import por decisión humana?
10. ¿Cómo se diferenciarán escuela superior y universidad sin duplicar ecosistemas?
11. ¿Cómo se evitará que prompts sugeridos parezcan integración de IA?
12. ¿Cómo se preparará v0.8 sin implementar prematuramente?

---

## 8. Insumos mínimos que v0.7 debe recibir

Antes de iniciar arquitectura técnica, v0.7 debería recibir:

- este documento de deuda y transición;
- requisitos funcionales preliminares aprobados;
- criterios humano-IA aprobados;
- criterios de accesibilidad y claridad aprobados;
- flujos funcionales conceptuales aprobados;
- marco estandarizado de misión aprobado;
- recorridos sintéticos aprobados;
- bitácora de cierre de v0.6;
- registro consolidado de decisiones;
- lista de exclusiones que siguen vigentes;
- matriz de riesgos de privacidad y seguridad;
- matriz de requisitos funcionales contra decisiones técnicas futuras.

---

## 9. Riesgos de transición

| Riesgo | Señal temprana | Mitigación |
|---|---|---|
| Activar arquitectura antes del cierre documental | Se empieza a elegir stack en v0.6 | Registrar como insumo, no decidir |
| Romper local-first | Se propone backend por defecto | Exigir justificación futura y alternativa local |
| Reintroducir IA embebida | Se habla de respuestas automáticas | Usar regla “prompts sugeridos, no IA integrada” |
| Sobrecargar v0.7 | Todo se vuelve requisito técnico inmediato | Priorizar mínimo viable seguro |
| Perder dimensión pedagógica | Se modela solo datos y pantallas | Mantener misión, docente, portafolio y reflexión |
| Convertir portafolio en almacenamiento | Solo se guardan archivos | Exigir vínculos con evidencia, decisión y narrativa |
| Usar referencias externas como importación | Se propone leer documentos externos | Mantener registro declarado sin conexión automática |
| Debilitar accesibilidad | Se ocultan advertencias o estados | Diseñar patrones claros y visibles |
| Confundir transferencia con publicación | Exportar se trata como compartir | Separar guardar, exportar, transferir y publicar |
| Cerrar deuda sin resolver | Se borra deuda por conveniencia | Mantener códigos, origen y fase sugerida |

---

## 10. Criterios para cerrar deuda en fases futuras

Una deuda podrá cerrarse cuando exista:

1. decisión documentada;
2. justificación;
3. documento o commit asociado;
4. verificación de no contradicción con principios v0.6;
5. actualización de bitácora;
6. indicación de impacto en requisitos, arquitectura o UX;
7. confirmación humana explícita si afecta alcance.

---

## 11. Criterios para mantener deuda abierta

Una deuda deberá mantenerse abierta si:

- requiere investigación técnica futura;
- depende de arquitectura no definida;
- afecta seguridad o privacidad;
- requiere validación con personas;
- pertenece a v0.8 o posterior;
- no tiene criterio de cierre suficiente;
- podría alterar misión, portafolio, local-first o agencia humana.

---

## 12. Relación con cierre de v0.6

Este documento no cierra v0.6 por sí solo.

Antes de cerrar la fase deberán completarse, como mínimo:

- comentario de hito en PR;
- integración canónica de este documento;
- verificación de PR;
- posible auditoría documental final;
- bitácora de sesión o bloque;
- matriz de continuidad hacia v0.7;
- decisión humana sobre preparación de cierre.

---

## 13. Comentario sugerido para PR

```markdown
## Hito de v0.6 · Deuda funcional/UX y matriz de transición hacia v0.7

Se integra el documento `Deuda_Funcional_UX_Matriz_Transicion_AI_StoryLab_v0_6.md` como consolidación de la deuda funcional y UX generada durante la fase v0.6.

Este documento organiza lo aprendido en los artefactos ya aprobados: mapa funcional, modelo UX, marco de misión, flujos funcionales, recorridos sintéticos, criterios humano-IA, criterios de accesibilidad/claridad y requisitos funcionales preliminares.

Su valor principal es convertir la deuda en memoria de diseño y preparar una transición responsable hacia v0.7 sin activar todavía arquitectura técnica.

El documento identifica qué asuntos deben alimentar decisiones futuras de seguridad, arquitectura, almacenamiento local, referencias externas, evidencia, portafolio vivo, export/import, asistencia docente, accesibilidad y trazabilidad longitudinal.

Este hito no cierra v0.6 por sí solo, no activa v0.7, no define stack, no implementa, no valida con personas, no usa datos reales, no incorpora backend, no integra IA embebida y no despliega.
```

---

## 14. Exclusiones explícitas

Este documento no autoriza:

- arquitectura técnica;
- selección de stack;
- diseño visual final;
- wireframes finales;
- base de datos;
- backend;
- APIs;
- integración de IA externa dentro de la app;
- llamadas automáticas a modelos de IA;
- autenticación;
- implementación;
- código;
- producto funcional nuevo;
- uso de datos reales;
- investigación con personas;
- validación con personas;
- pruebas productivas;
- despliegue;
- marketplace readiness;
- cierre automático de v0.6;
- apertura automática de v0.7.

---

## 15. Criterios de aprobación

Este documento podrá aprobarse si:

- consolida deuda funcional y UX sin activar arquitectura;
- distingue tipos de deuda;
- prioriza asuntos críticos para v0.7;
- preserva local-first;
- mantiene uso externo opcional de herramientas de IA;
- protege agencia humana;
- reconoce misión configurable;
- conserva portafolio vivo, evidencia y reflexión;
- incluye matriz de transición hacia v0.7;
- registra riesgos de transición;
- prepara cierre futuro de v0.6 sin declararlo todavía.

---

## 16. Dictamen preliminar

La fase v0.6 ha generado suficiente densidad funcional para preparar una transición ordenada hacia v0.7.

La deuda consolidada en este documento no debe interpretarse como atraso. Debe entenderse como mapa de navegación.

AI StoryLab 1 podrá avanzar hacia arquitectura técnica y seguridad únicamente si la próxima fase respeta lo que v0.6 ha establecido: local-first, agencia humana, misión configurable, libertad creativa, prompts sugeridos, asistencia docente, referencias externas declaradas, evidencia contextualizada, portafolio vivo, reflexión protegida, accesibilidad y trazabilidad.

Este documento queda como **APROBADO** para integración canónica documental y no autoriza arquitectura técnica, implementación, validación con personas ni despliegue.
