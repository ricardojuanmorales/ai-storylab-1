# Requisitos Funcionales Preliminares · AI StoryLab 1 v0.6

**Versión:** APROBADO  
**Fase:** AI StoryLab 1 v0.6 · Diseño Funcional + UX  
**Tipo de documento:** Requisitos funcionales preliminares  
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
**Fecha:** 2026-07-07  

---

## 0. Nota de alcance

Este documento define **requisitos funcionales preliminares** para AI StoryLab 1 v0.6.

Los requisitos aquí descritos no son especificaciones técnicas finales, historias de usuario listas para desarrollo, arquitectura, diseño visual final, implementación, selección de stack, esquema de base de datos ni validación con personas.

Son requisitos funcionales de alto nivel derivados del trabajo documental aprobado en v0.6.

Su función es consolidar lo aprendido hasta este punto y preparar insumos para:

- criterios de deuda funcional y UX;
- cierre documental de v0.6;
- transición futura a v0.7 · Arquitectura Técnica + Seguridad;
- priorización futura de implementación incremental en v0.8.

Este documento no autoriza arquitectura técnica, implementación, validación con personas, uso de datos reales, backend, APIs, IA embebida ni despliegue.

---

## 1. Propósito del documento

Este documento busca organizar los requisitos funcionales preliminares de AI StoryLab 1 en torno a:

1. misiones como unidades pedagógico-creativas;
2. rutas mínimas y libertad creativa;
3. local-first;
4. herramientas externas bajo control humano;
5. prompts sugeridos;
6. asistencia docente;
7. referencias externas declaradas;
8. evidencia contextualizada;
9. portafolio vivo;
10. reflexión protegida;
11. accesibilidad y claridad;
12. transferencia y continuidad;
13. límites de fase.

---

## 2. Principios rectores

### 2.1 Local-first como base funcional

El sistema debe preservar control local por defecto.

Nada debe enviarse, sincronizarse, publicarse, analizarse remotamente ni compartirse automáticamente.

### 2.2 Agencia humana

Toda decisión significativa debe ser tomada, confirmada o contextualizada por una persona.

### 2.3 Misión configurable

La misión no debe modelarse como tarea rígida. Debe ser unidad pedagógico-creativa configurable.

### 2.4 Libertad creativa estructurada

Cada misión debe incluir ruta mínima y zona de libertad creativa.

### 2.5 IA externa opcional

El sistema puede ofrecer prompts sugeridos para uso externo opcional. No debe ejecutar IA internamente.

### 2.6 Evidencia con sentido

La evidencia debe vincularse con propósito, decisión, reflexión, producto, portafolio o continuidad.

### 2.7 Portafolio vivo

El portafolio debe funcionar como memoria formativa, no como repositorio pasivo.

### 2.8 Asistencia docente no sustitutiva

El docente debe acompañar, orientar y proteger sin producir por la persona estudiante.

### 2.9 Claridad funcional

La persona debe entender qué hace, por qué lo hace, qué puede elegir, qué debe registrar y qué límites aplican.

---

## 3. Categorías de requisitos

Los requisitos se organizan en estas familias:

| Código | Familia |
|---|---|
| RF-MIS | Misiones |
| RF-RUT | Ruta mínima y libertad creativa |
| RF-HIA | Interacción humano-IA externa |
| RF-EXT | Referencias y herramientas externas |
| RF-DOC | Asistencia docente |
| RF-EVI | Evidencia |
| RF-POR | Portafolio vivo |
| RF-REF | Reflexión |
| RF-ACC | Accesibilidad y claridad |
| RF-CON | Continuidad y transferencia |
| RF-SEG | Seguridad de fase |
| RF-TRZ | Trazabilidad longitudinal |

---

## 4. Requisitos funcionales preliminares · Misiones

### RF-MIS-001 · Crear o presentar misión

El sistema deberá permitir presentar una misión como unidad pedagógico-creativa con propósito, pregunta guía, evento de producción, ruta mínima, libertad creativa, evidencia, reflexión y continuidad.

**Prioridad:** Alta  
**Origen:** Marco de Misión / Flujos  
**No implica:** implementación inmediata de editor de misiones.

### RF-MIS-002 · Diferenciar misión por nivel educativo

El sistema deberá permitir que una misión tenga variaciones para escuela superior y universidad.

**Prioridad:** Alta  
**Origen:** Recorridos / Accesibilidad  
**No implica:** crear dos productos separados.

### RF-MIS-003 · Mostrar estado de misión

El sistema deberá poder representar estados como no iniciada, en exploración, en producción, en revisión, núcleo completo, evidencia seleccionada, curada o transferible.

**Prioridad:** Alta  
**Origen:** Flujos / Accesibilidad  
**No implica:** diseño visual final de estados.

### RF-MIS-004 · Reinterpretar misiones heredadas

El sistema deberá poder mapear misiones heredadas de v0.3.0 como casos iniciales dentro de una gramática funcional más amplia.

**Prioridad:** Media  
**Origen:** Flujos v5  
**No implica:** conservar S1-S9 como canon cerrado.

---

## 5. Requisitos funcionales preliminares · Ruta mínima y libertad creativa

### RF-RUT-001 · Ruta mínima visible

Cada misión deberá presentar una ruta mínima comprensible para completar su núcleo.

**Prioridad:** Alta  
**Origen:** Marco de Misión / Accesibilidad

### RF-RUT-002 · Zona de libertad creativa visible

Cada misión deberá mostrar qué puede elegir, adaptar, cambiar o proponer la persona.

**Prioridad:** Alta  
**Origen:** Marco de Misión / Flujos / Accesibilidad

### RF-RUT-003 · Variantes de producto

Cada misión deberá permitir variantes de producto esperado cuando sea pedagógicamente pertinente.

**Prioridad:** Media  
**Origen:** Marco de Misión / Recorridos

### RF-RUT-004 · Iteración como ruta válida

El sistema deberá permitir que una persona vuelva a explorar, revisar, producir o curar sin tratar la iteración como fallo.

**Prioridad:** Alta  
**Origen:** Flujos / Recorridos

---

## 6. Requisitos funcionales preliminares · Interacción humano-IA externa

### RF-HIA-001 · Prompts sugeridos editables

El sistema deberá poder presentar prompts sugeridos como textos editables, copiables y opcionales.

**Prioridad:** Alta  
**Origen:** Criterios Humano-IA  
**No implica:** envío automático del prompt a ningún servicio.

### RF-HIA-002 · Ruta alternativa sin herramienta externa

Toda misión deberá poder completarse sin herramienta de IA externa.

**Prioridad:** Alta  
**Origen:** Criterios Humano-IA / Accesibilidad

### RF-HIA-003 · Registro de uso externo

El sistema deberá permitir registrar herramienta usada, propósito, prompt o resumen, resultado incorporado, decisión humana y reflexión.

**Prioridad:** Alta  
**Origen:** Criterios Humano-IA

### RF-HIA-004 · Advertencia antes de uso externo

El sistema deberá presentar advertencias de privacidad y control humano antes de que una persona use un prompt fuera de la app.

**Prioridad:** Alta  
**Origen:** Criterios Humano-IA / Accesibilidad / Seguridad futura

### RF-HIA-005 · Declaración de uso

El sistema deberá permitir declarar uso de herramienta externa en transferencia, portafolio o cierre de misión.

**Prioridad:** Alta  
**Origen:** Criterios Humano-IA

### RF-HIA-006 · Prohibición funcional de IA embebida en v0.6

Los requisitos funcionales de v0.6 no deberán asumir llamadas automáticas a modelos de IA, APIs externas, agentes, análisis remoto ni generación interna.

**Prioridad:** Alta  
**Origen:** Criterios Humano-IA / Flujos

---

## 7. Requisitos funcionales preliminares · Referencias y herramientas externas

### RF-EXT-001 · Registrar referencia externa declarada

El sistema deberá permitir registrar una referencia externa con título, tipo, URL, propósito, etapa, sensibilidad, resumen local, decisión asociada y estado.

**Prioridad:** Alta  
**Origen:** Flujos / Recorridos / Humano-IA

### RF-EXT-002 · Distinguir referencia externa de evidencia

El sistema deberá indicar que una referencia externa no es evidencia suficiente sin contexto humano.

**Prioridad:** Alta  
**Origen:** Flujos / Accesibilidad

### RF-EXT-003 · Advertencia de enlace externo

El sistema deberá advertir que un enlace puede cambiar, caducar, requerir permisos o contener información sensible.

**Prioridad:** Alta  
**Origen:** Accesibilidad / Seguridad futura

### RF-EXT-004 · Herramientas asociadas a eventos de producción

El sistema deberá permitir asociar herramientas a eventos de producción, sin asumir que la app ejecuta esas herramientas.

**Prioridad:** Alta  
**Origen:** Marco de Misión / Flujos

### RF-EXT-005 · Tipos de herramienta

El sistema deberá distinguir herramienta local, herramienta externa manual, herramienta de IA externa opcional, documento externo, herramienta docente, herramienta de evidencia y herramienta institucional.

**Prioridad:** Alta  
**Origen:** Flujos

---

## 8. Requisitos funcionales preliminares · Asistencia docente

### RF-DOC-001 · Mostrar asistencia docente por misión

Cada misión deberá poder indicar momentos y tipos de asistencia docente sugerida.

**Prioridad:** Alta  
**Origen:** Marco de Misión / Recorridos

### RF-DOC-002 · Distinguir apoyo docente de sustitución

El sistema deberá comunicar que el docente acompaña, pregunta, orienta y revisa, pero no produce por el estudiante.

**Prioridad:** Alta  
**Origen:** Marco de Misión / Humano-IA / Accesibilidad

### RF-DOC-003 · Checklist docente

El sistema deberá poder derivar o asociar checklists docentes por tipo de misión.

**Prioridad:** Media  
**Origen:** Recorridos / Humano-IA

### RF-DOC-004 · Señales de alerta docente

El sistema deberá permitir identificar señales funcionales de riesgo: privacidad, autoría, dependencia de herramienta externa, confusión de fase o falta de evidencia.

**Prioridad:** Media  
**Origen:** Recorridos / Humano-IA / Accesibilidad

---

## 9. Requisitos funcionales preliminares · Evidencia

### RF-EVI-001 · Registrar evidencia contextualizada

El sistema deberá permitir registrar evidencia con tipo, misión, propósito, decisión asociada, reflexión y posible aporte al portafolio.

**Prioridad:** Alta  
**Origen:** Modelo UX / Flujos / Recorridos

### RF-EVI-002 · Tipología de evidencia

El sistema deberá distinguir evidencia de intención, exploración, decisión, producción, herramienta, revisión, iteración, reflexión y transferencia.

**Prioridad:** Alta  
**Origen:** Modelo UX / Accesibilidad

### RF-EVI-003 · Selección de evidencia

El sistema deberá permitir seleccionar evidencia significativa para portafolio.

**Prioridad:** Alta  
**Origen:** Modelo UX / Recorridos

### RF-EVI-004 · Evidencia de iteración

El sistema deberá reconocer cambios, versiones o decisiones de mejora como evidencia positiva.

**Prioridad:** Alta  
**Origen:** Flujos / Recorridos

### RF-EVI-005 · Sensibilidad de evidencia

El sistema deberá permitir marcar sensibilidad o riesgo de privacidad asociado a evidencia o referencia externa.

**Prioridad:** Alta  
**Origen:** Humano-IA / Accesibilidad / Seguridad futura

---

## 10. Requisitos funcionales preliminares · Portafolio vivo

### RF-POR-001 · Portafolio como memoria formativa

El sistema deberá organizar el portafolio como memoria de proceso, no solo colección de productos.

**Prioridad:** Alta  
**Origen:** Mapa Funcional / Modelo UX

### RF-POR-002 · Vincular evidencia, decisión y reflexión

El portafolio deberá poder mostrar relación entre evidencia, decisión humana, reflexión y continuidad.

**Prioridad:** Alta  
**Origen:** Modelo UX / Recorridos

### RF-POR-003 · Curaduría de portafolio

El sistema deberá permitir seleccionar, organizar y contextualizar evidencias.

**Prioridad:** Alta  
**Origen:** Modelo UX / Flujos

### RF-POR-004 · Narrativa de proceso

El portafolio deberá poder sostener una narrativa del proceso creativo, pedagógico o investigativo.

**Prioridad:** Alta  
**Origen:** Recorridos / Accesibilidad

### RF-POR-005 · Portafolio parcial

El sistema deberá permitir portafolios parciales, en proceso o transferibles, no solo estados finales.

**Prioridad:** Media  
**Origen:** Flujos / Recorridos

---

## 11. Requisitos funcionales preliminares · Reflexión

### RF-REF-001 · Reflexión protegida

El sistema deberá ofrecer preguntas de reflexión, pero la reflexión final debe ser escrita, confirmada o apropiada por la persona.

**Prioridad:** Alta  
**Origen:** Modelo UX / Humano-IA

### RF-REF-002 · Reflexión por nivel educativo

El sistema deberá permitir preguntas de reflexión diferenciadas para escuela superior y universidad.

**Prioridad:** Alta  
**Origen:** Recorridos / Accesibilidad

### RF-REF-003 · Reflexión vinculada a evidencia

El sistema deberá permitir vincular reflexión con evidencia, decisión, herramienta o misión.

**Prioridad:** Alta  
**Origen:** Modelo UX / Portafolio

### RF-REF-004 · Reflexión sobre herramientas externas

El sistema deberá permitir reflexionar sobre el uso de herramientas externas, incluyendo pertinencia, límites, atribución y aporte humano.

**Prioridad:** Alta  
**Origen:** Humano-IA

---

## 12. Requisitos funcionales preliminares · Accesibilidad y claridad

### RF-ACC-001 · Orientación visible

El sistema deberá mostrar ubicación, propósito, acción esperada y continuidad en misiones y recorridos.

**Prioridad:** Alta  
**Origen:** Accesibilidad

### RF-ACC-002 · Lenguaje claro

El sistema deberá usar lenguaje directo, humano, pedagógico y consistente.

**Prioridad:** Alta  
**Origen:** Accesibilidad

### RF-ACC-003 · Carga cognitiva proporcional

El sistema deberá organizar información por capas y evitar instrucciones excesivas simultáneas.

**Prioridad:** Alta  
**Origen:** Accesibilidad

### RF-ACC-004 · Estados comprensibles

El sistema deberá mostrar estados de misión, evidencia, portafolio y transferencia de manera clara.

**Prioridad:** Alta  
**Origen:** Accesibilidad / Flujos

### RF-ACC-005 · Glosario funcional breve

El sistema deberá poder sostener un glosario breve para términos clave.

**Prioridad:** Media  
**Origen:** Accesibilidad

### RF-ACC-006 · Mensajes local-first canónicos

El sistema deberá usar mensajes consistentes para explicar control local, no envío automático, no publicación automática y decisión humana.

**Prioridad:** Alta  
**Origen:** Accesibilidad / Humano-IA

---

## 13. Requisitos funcionales preliminares · Continuidad y transferencia

### RF-CON-001 · Transferencia de estado

El sistema deberá permitir transferir estado de proceso, misión, evidencia, deuda y próximos pasos.

**Prioridad:** Alta  
**Origen:** Recorridos / Flujos

### RF-CON-002 · Diferenciar transferencia de publicación

El sistema deberá explicar que transferir no significa publicar ni cerrar definitivamente.

**Prioridad:** Alta  
**Origen:** Accesibilidad / Recorridos

### RF-CON-003 · Exportación por decisión humana

El sistema deberá preservar la exportación como acción humana explícita.

**Prioridad:** Alta  
**Origen:** Local-first / Recorridos

### RF-CON-004 · Resumen de continuidad

El sistema deberá poder producir o facilitar un resumen local de continuidad basado en registros humanos, sin análisis automático de IA embebida.

**Prioridad:** Media  
**Origen:** Recorridos / Accesibilidad

---

## 14. Requisitos funcionales preliminares · Seguridad de fase

### RF-SEG-001 · Guardrails de v0.6

El sistema documental deberá mantener visibles las exclusiones de v0.6: no arquitectura, no implementación, no validación, no datos reales, no despliegue.

**Prioridad:** Alta  
**Origen:** Kit / Plan / Todos los documentos

### RF-SEG-002 · Registro de deuda futura

El sistema documental deberá permitir registrar deuda funcional, UX, seguridad, técnica o pedagógica para fases posteriores.

**Prioridad:** Alta  
**Origen:** Todos los documentos v0.6

### RF-SEG-003 · Separar requisito funcional de decisión técnica

Cada requisito preliminar deberá evitar comprometer stack, arquitectura, backend, base de datos o APIs.

**Prioridad:** Alta  
**Origen:** Protocolo v0.6

### RF-SEG-004 · Preparar v0.7 sin activarla

Los requisitos podrán producir insumos para arquitectura y seguridad futura, sin activar v0.7.

**Prioridad:** Alta  
**Origen:** Plan de trabajo v0.6

---

## 15. Requisitos funcionales preliminares · Trazabilidad longitudinal

### RF-TRZ-001 · Vincular decisiones a documentos

El sistema documental deberá preservar trazabilidad entre decisiones, documentos, deuda y fases.

**Prioridad:** Alta  
**Origen:** Mapa / Modelo UX / Flujos

### RF-TRZ-002 · Códigos de deuda

La deuda deberá tener códigos estables, prioridad y documento futuro sugerido.

**Prioridad:** Alta  
**Origen:** Todos los documentos v0.6

### RF-TRZ-003 · Matriz de transición hacia v0.7

El cierre de v0.6 deberá poder identificar qué requisitos alimentan seguridad, arquitectura y diseño técnico futuro.

**Prioridad:** Alta  
**Origen:** Requisitos / Deuda / Cierre futuro

### RF-TRZ-004 · Bitácoras activas

Las bitácoras deberán actualizarse al cierre de bloque o sesión, preservando decisiones, aprobaciones, archivos integrados y deuda.

**Prioridad:** Alta  
**Origen:** Protocolo de trabajo

---

## 16. Priorización preliminar

### 16.1 Prioridad alta

Son prioridad alta:

- local-first;
- misiones configurables;
- ruta mínima;
- libertad creativa;
- prompts sugeridos editables;
- ruta sin herramienta externa;
- registro de herramienta externa;
- referencias externas contextualizadas;
- asistencia docente no sustitutiva;
- evidencia contextualizada;
- portafolio vivo;
- reflexión protegida;
- accesibilidad y claridad;
- transferencia controlada;
- guardrails de fase;
- deuda y trazabilidad.

### 16.2 Prioridad media

Son prioridad media:

- checklists docentes específicos;
- glosario funcional breve;
- variantes de producto;
- portafolio parcial;
- comparación de versiones;
- matriz de transición a v0.7.

### 16.3 Prioridad baja

No se asignan prioridades bajas en este documento. Lo que no sea necesario para v0.6 debe quedar como deuda futura o insumo de fase posterior.

---

## 17. Requisitos fuera de alcance en v0.6

Quedan fuera de alcance:

- autenticación;
- cuentas;
- roles técnicos finales;
- base de datos;
- backend;
- servidor;
- APIs externas;
- conexión directa con IA;
- analítica automática;
- sincronización en nube;
- subida automática de archivos;
- colaboración en tiempo real;
- dashboards productivos;
- implementación de componentes;
- diseño visual final;
- investigación con personas;
- pruebas de usabilidad;
- validación empírica;
- despliegue;
- marketplace readiness.

---

## 18. Riesgos funcionales detectados

| Riesgo | Mitigación preliminar |
|---|---|
| Convertir misión en formulario rígido | ruta mínima + libertad creativa |
| Confundir prompts con IA embebida | regla de lenguaje y no APIs |
| Usar enlaces externos como evidencia suficiente | resumen local + decisión humana |
| Portafolio como carpeta pasiva | narrativa de proceso |
| Docente sustituyendo agencia | asistencia no sustitutiva |
| Sobrecarga cognitiva | capas de información |
| Confusión entre transferencia y publicación | mensajes canónicos |
| Activar v0.7 prematuramente | guardrails de fase |
| Hacer requisitos demasiado técnicos | separación funcional/técnico |
| Perder trazabilidad | códigos de deuda y bitácoras |

---

## 19. Deuda funcional y UX derivada

| Código | Deuda | Prioridad | Documento futuro sugerido |
|---|---|---:|---|
| DFUX-v0.6-RF-001 | Consolidar matriz completa requisito-documento-origen-deuda | Alta | Cierre v0.6 / Bitácoras |
| DFUX-v0.6-RF-002 | Convertir requisitos preliminares en insumos técnicos v0.7 | Alta | v0.7 Arquitectura + Seguridad |
| DFUX-v0.6-RF-003 | Crear backlog funcional priorizado para v0.8 | Alta | v0.8 Implementación incremental |
| DFUX-v0.6-RF-004 | Definir requisitos de seguridad para referencias externas | Alta | v0.7 Seguridad |
| DFUX-v0.6-RF-005 | Definir requisitos técnicos futuros de export/import local | Media | v0.7 Arquitectura |
| DFUX-v0.6-RF-006 | Diseñar modelos de datos futuros sin activarlos en v0.6 | Media | v0.7 Arquitectura |
| DFUX-v0.6-RF-007 | Auditar consistencia de lenguaje local-first en todos los requisitos | Alta | Auditoría documental |
| DFUX-v0.6-RF-008 | Derivar criterios de asistencia docente específicos por misión | Alta | Guía docente / Requisitos |
| DFUX-v0.6-RF-009 | Derivar criterios de accesibilidad técnica futura | Media | v0.7 / v0.8 |
| DFUX-v0.6-RF-010 | Preparar matriz de transición v0.6 → v0.7 | Alta | Cierre v0.6 |
| DFUX-v0.6-RF-011 | Definir qué requisitos pasan a MVP técnico y cuáles quedan como fase posterior | Alta | Roadmap v0.7/v0.8 |
| DFUX-v0.6-RF-012 | Crear checklist de no-regresión documental para PR futuros | Media | Gobernanza documental |

---

## 20. Criterios de aprobación

Este documento podrá aprobarse si:

- consolida requisitos funcionales preliminares sin definir arquitectura;
- deriva requisitos de documentos v0.6 aprobados;
- respeta local-first;
- no presupone IA embebida;
- distingue herramienta externa, referencia externa, evidencia y portafolio;
- preserva agencia humana;
- integra asistencia docente;
- diferencia escuela superior y universidad;
- incluye accesibilidad y claridad;
- documenta límites de fase;
- registra deuda funcional y UX;
- prepara transición futura a v0.7 sin activarla.

---

## 21. Dictamen preliminar

Estos requisitos funcionales preliminares consolidan la fase v0.6 como diseño funcional y UX, no como arquitectura técnica.

El documento convierte los hallazgos de mapa, modelo UX, misión, flujos, recorridos, criterios humano-IA y criterios de accesibilidad en una primera gramática de requisitos.

La arquitectura futura de v0.7 deberá dialogar con estos requisitos, pero no queda definida aquí.

Este documento permite avanzar hacia cierre de deuda funcional/UX, matriz de transición y bitácoras de continuidad.

Este documento queda como **APROBADO** para integración canónica documental y no autoriza arquitectura técnica, implementación, validación con personas ni despliegue.
