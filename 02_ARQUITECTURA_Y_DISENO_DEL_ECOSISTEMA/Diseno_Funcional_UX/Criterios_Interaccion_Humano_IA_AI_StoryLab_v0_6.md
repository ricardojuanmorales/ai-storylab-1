# Criterios de Interacción Humano-IA · AI StoryLab 1 v0.6

**Versión:** APROBADO  
**Fase:** AI StoryLab 1 v0.6 · Diseño Funcional + UX  
**Tipo de documento:** Criterios funcionales de interacción humano-IA  
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
**Fecha:** 2026-07-07  

---

## 0. Nota de alcance

Este documento define criterios funcionales para la interacción humano-IA en AI StoryLab 1 v0.6.

En esta fase, la interacción humano-IA no significa integración automática de modelos, APIs, servicios externos, agentes, analítica embebida ni procesamiento remoto de datos.

En v0.6, la relación con herramientas de IA se entiende como:

```text
prompts sugeridos
+ uso externo opcional
+ decisión humana
+ registro local
+ evidencia contextualizada
+ reflexión crítica
+ protección de privacidad
```

Este documento no autoriza arquitectura técnica, implementación, validación con personas, uso de datos reales, backend, APIs externas, IA embebida ni despliegue.

---

## 1. Propósito del documento

Este documento busca establecer criterios para que AI StoryLab 1 pueda orientar el uso responsable de herramientas de IA externas sin romper:

- local-first;
- agencia humana;
- privacidad;
- autoría;
- trazabilidad;
- reflexión;
- asistencia docente;
- libertad creativa;
- rigor educativo;
- continuidad documental.

El documento sirve como puente entre flujos conceptuales, recorridos sintéticos, requisitos funcionales preliminares y futuras decisiones de seguridad en v0.7.

---

## 2. Principio rector

AI StoryLab 1 debe tratar cualquier herramienta de IA externa como **andamiaje opcional**, no como autora, evaluadora, autoridad final ni componente interno de la aplicación.

La persona decide:

1. si usa una herramienta externa;
2. qué prompt copia;
3. qué información comparte fuera de la app;
4. qué resultado considera útil;
5. qué incorpora al proceso local;
6. cómo lo atribuye;
7. qué evidencia registra;
8. qué reflexión produce.

La app acompaña el proceso mediante prompts sugeridos, preguntas guía, checklists, advertencias y campos de registro. No ejecuta IA internamente.

---

## 3. Regla canónica de redacción

### 3.1 Formulación base

Toda referencia funcional a IA en v0.6 debe redactarse desde esta regla:

```text
La aplicación ofrece prompts sugeridos, preguntas guía, plantillas o checklists.
La persona puede usar herramientas externas bajo su propio control.
La persona decide qué registrar localmente.
```

### 3.2 Formulaciones permitidas

| Intención funcional | Formulación permitida |
|---|---|
| Abrir posibilidades | El sistema ofrece preguntas guía o prompts sugeridos |
| Apoyar organización | El sistema ofrece plantillas, criterios o matrices |
| Apoyar revisión | El sistema ofrece checklists o prompts de revisión para uso externo opcional |
| Usar chatbot externo | La persona puede copiar un prompt y usarlo fuera de la app |
| Recuperar ideas externas | La persona decide qué ideas externas incorpora localmente |
| Registrar proceso | La persona registra herramienta, prompt, decisión, evidencia y reflexión |
| Declarar uso | La persona declara si usó una herramienta externa y cómo |
| Atribuir apoyo | La persona contextualiza la herramienta usada y su rol en el proceso |

### 3.3 Formulaciones no permitidas

| Evitar | Razón |
|---|---|
| Síntesis automática atribuida a un modelo interno | Sugiere procesamiento interno no autorizado |
| Preguntas generadas por un modelo interno | Sugiere generación automática dentro de la app |
| Patrones identificados por análisis automatizado | Sugiere analítica o clasificación embebida |
| Evidencias clasificadas automáticamente | Sustituye clasificación humana |
| Revisión automática de borradores | Sugiere evaluación interna no autorizada |
| Reflexión producida automáticamente | Sustituye voz humana |
| Envío del trabajo del estudiante a un servicio externo | Rompe local-first |
| Recuperación automática de resultados desde servicios externos | Sugiere conexión/API externa |

---

## 4. Criterios funcionales principales

### C-HIA-v0.6-001 · Agencia humana obligatoria

Toda interacción con herramientas de IA externas debe preservar decisión humana antes, durante y después del uso.

**Criterio:** ninguna salida externa se incorpora al proceso sin confirmación humana.

**Evidencia esperada:**

- decisión registrada;
- justificación breve;
- versión seleccionada o descartada;
- reflexión sobre uso.

**Riesgo a evitar:** automatizar criterio, autoría o evaluación.

---

### C-HIA-v0.6-002 · Uso externo opcional

El uso de herramientas de IA externas nunca debe ser obligatorio para completar una misión.

**Criterio:** toda misión debe poder completarse sin usar herramientas de IA externas.

**Evidencia esperada:**

- ruta alternativa sin herramienta externa;
- actividad local equivalente;
- asistencia docente o plantilla local.

**Riesgo a evitar:** dependencia tecnológica, inequidad de acceso o presión por automatización.

---

### C-HIA-v0.6-003 · Prompt sugerido como andamiaje, no instrucción cerrada

El prompt sugerido debe funcionar como punto de partida editable.

**Criterio:** la persona puede copiar, adaptar, ignorar, comentar o reemplazar el prompt.

**Evidencia esperada:**

- prompt sugerido;
- prompt usado, si se registra;
- modificación realizada;
- decisión sobre el resultado externo.

**Riesgo a evitar:** convertir el prompt en receta única.

---

### C-HIA-v0.6-004 · Privacidad local-first

La persona debe recibir advertencias claras antes de compartir información fuera de la app.

**Criterio:** el sistema debe recordar que no se deben compartir datos sensibles, identificables o innecesarios.

**Evidencia esperada:**

- advertencia visible;
- confirmación humana;
- campo de sensibilidad;
- decisión de no compartir, anonimizar o resumir.

**Riesgo a evitar:** traslado inadvertido de datos personales o escolares a servicios externos.

---

### C-HIA-v0.6-005 · Transparencia de uso

El uso de herramientas externas debe poder declararse sin convertirlo en castigo.

**Criterio:** la declaración debe enfocarse en transparencia, atribución y aprendizaje.

**Evidencia esperada:**

- herramienta usada;
- propósito del uso;
- prompt usado, si aplica;
- parte del proceso afectada;
- decisión humana final.

**Riesgo a evitar:** ocultamiento, vergüenza o uso opaco.

---

### C-HIA-v0.6-006 · Autoría humana

La autoría del producto debe mantenerse en la persona o equipo humano que decide, adapta, compone, edita y contextualiza.

**Criterio:** el apoyo externo no puede sustituir voz, criterio, responsabilidad ni reflexión.

**Evidencia esperada:**

- declaración de decisiones;
- explicación de cambios;
- reflexión sobre aporte propio;
- atribución del apoyo externo.

**Riesgo a evitar:** presentar material externo como creación humana sin mediación crítica.

---

### C-HIA-v0.6-007 · Reflexión protegida

La reflexión debe ser producida o confirmada por la persona.

**Criterio:** cualquier apoyo externo para pensar la reflexión debe tratarse como borrador de apoyo, nunca como voz final.

**Evidencia esperada:**

- reflexión escrita o confirmada por la persona;
- nota sobre apoyo externo, si aplica;
- decisión de aceptación, modificación o rechazo.

**Riesgo a evitar:** reflexión automática, genérica o despersonalizada.

---

### C-HIA-v0.6-008 · Trazabilidad suficiente

El uso de herramientas externas debe dejar rastro suficiente para comprender el proceso sin invadir privacidad.

**Criterio:** no se requiere capturar conversaciones completas, pero sí registrar lo necesario para entender decisiones.

**Evidencia esperada:**

- herramienta;
- propósito;
- prompt o resumen del prompt;
- resultado incorporado;
- decisión humana;
- fecha o etapa de uso.

**Riesgo a evitar:** exceso de captura, pérdida de contexto o documentación invasiva.

---

### C-HIA-v0.6-009 · Asistencia docente no sustitutiva

El docente puede orientar el uso responsable de herramientas externas, pero no debe producir por el estudiante.

**Criterio:** la intervención docente debe fortalecer criterio, seguridad, claridad y agencia.

**Evidencia esperada:**

- pregunta orientadora;
- feedback;
- advertencia ética;
- recomendación de revisión;
- decisión estudiantil posterior.

**Riesgo a evitar:** reemplazo de trabajo estudiantil o vigilancia excesiva.

---

### C-HIA-v0.6-010 · Evaluación futura centrada en proceso

En v0.6 no se define evaluación final, pero los criterios preparan evaluación futura centrada en proceso, trazabilidad y reflexión.

**Criterio:** el uso de herramientas externas debe evaluarse, en fases futuras, por transparencia, pertinencia, criterio y aprendizaje.

**Evidencia esperada:**

- declaración de uso;
- justificación;
- evidencia de decisión;
- reflexión;
- relación con producto.

**Riesgo a evitar:** evaluar solo el producto final o penalizar todo uso externo sin criterio pedagógico.

---

## 5. Momentos de interacción humano-IA externa

### 5.1 Antes de usar herramienta externa

La persona debe poder revisar:

- propósito;
- sensibilidad de la información;
- alternativa local;
- advertencia de privacidad;
- prompt sugerido editable;
- criterio de uso.

**Gate humano:** confirmar si desea usar herramienta externa o continuar sin ella.

### 5.2 Durante el uso externo

El proceso ocurre fuera de la app.

La persona conserva control sobre:

- qué comparte;
- qué modifica;
- qué pregunta;
- qué guarda fuera de la app;
- qué descarta.

**Gate humano:** decidir qué resultado externo merece consideración.

### 5.3 Después del uso externo

La persona puede registrar localmente:

- herramienta usada;
- propósito;
- prompt usado o resumen;
- idea incorporada;
- decisión humana;
- evidencia;
- reflexión;
- referencia externa, si aplica.

**Gate humano:** decidir qué entra al proceso, al producto o al portafolio.

---

## 6. Criterios por tipo de misión

| Tipo funcional de misión | Uso externo posible | Criterio humano central | Evidencia mínima |
|---|---|---|---|
| Contrato ético-creativo | Revisar posibles riesgos o formular principios | La persona define límites propios | decisión ética, reflexión |
| Exploración divergente | Abrir posibilidades de tema o medio | La persona selecciona líneas útiles | alternativas, criterios |
| Enfoque y selección | Comparar opciones | La persona justifica elección | matriz o decisión |
| Diseño conceptual/narrativo/investigativo | Explorar estructura o lenguaje | La persona adapta estructura | esquema, cambios |
| Diseño de medio/mundo/forma | Explorar estilo o recursos | La persona elige y atribuye | selección, referencia |
| Producción de componentes | Crear borradores o recursos externos | La persona edita, combina y decide | versión, herramienta |
| Prototipo integrador | Revisar integración | La persona decide ajustes | prototipo, feedback |
| Revisión e iteración | Obtener comentarios externos | La persona acepta/rechaza recomendaciones | cambios, justificación |
| Curaduría y portafolio | Ordenar narrativa de proceso | La persona selecciona sentido | evidencia curada |
| Presentación/transferencia | Revisar claridad de cierre | La persona confirma estado final | metadatos, reflexión |

---

## 7. Criterios por actor sintético

### 7.1 Estudiante de escuela superior

Debe recibir:

- instrucciones claras;
- advertencias simples;
- ejemplos;
- alternativas sin herramienta externa;
- apoyo docente cercano;
- campos breves de decisión y reflexión.

**Criterio prioritario:** proteger agencia, privacidad y comprensión.

### 7.2 Estudiante universitario

Debe recibir:

- mayor autonomía;
- criterios de justificación;
- posibilidad de registrar referencias externas;
- espacio para crítica de herramienta;
- reflexión metodológica o epistemológica;
- trazabilidad más profunda.

**Criterio prioritario:** sostener rigor, autoría y transparencia.

### 7.3 Docente facilitador

Debe recibir:

- pautas de acompañamiento;
- señales de riesgo;
- criterios para preguntar sin sustituir;
- guías de declaración de uso;
- formas de orientar privacidad y atribución.

**Criterio prioritario:** acompañar sin producir ni vigilar.

### 7.4 Persona curadora de proceso

Debe recibir:

- categorías de evidencia;
- criterios de selección;
- campos de contexto;
- advertencias sobre enlaces externos;
- distinción entre producto, referencia, reflexión y evidencia.

**Criterio prioritario:** convertir acumulación en narrativa de aprendizaje.

### 7.5 Persona revisora funcional

Debe recibir:

- criterios de alcance;
- checklist de local-first;
- lenguaje permitido y no permitido;
- rastros de deuda;
- advertencias de fase.

**Criterio prioritario:** evitar que el diseño derive hacia arquitectura o IA embebida.

---

## 8. Plantilla mínima de registro de uso externo

Cuando una persona decide registrar uso de herramienta externa, la app debe poder orientar campos como:

| Campo | Propósito |
|---|---|
| Herramienta usada | Identificar recurso externo |
| Tipo de herramienta | Chatbot, imagen, audio, edición, documento, otra |
| Propósito | Explorar, revisar, producir, organizar, contrastar |
| Etapa o misión | Ubicar el uso en el proceso |
| Prompt usado o resumen | Documentar andamiaje |
| Información compartida | Registrar nivel general, no necesariamente contenido completo |
| Sensibilidad | Ninguna, baja, media, alta, incierta |
| Resultado incorporado | Qué se trajo de vuelta localmente |
| Decisión humana | Aceptar, modificar, rechazar, combinar |
| Atribución requerida | Sí, no, pendiente |
| Reflexión breve | Qué aprendió o decidió la persona |
| Referencia externa | Enlace opcional declarado, sin importación automática |

---

## 9. Advertencias funcionales recomendadas

### 9.1 Antes de copiar un prompt

```text
Antes de usar este prompt fuera de la app, revisa si contiene información personal, sensible o innecesaria. Puedes editarlo, resumirlo o decidir no usarlo.
```

### 9.2 Antes de registrar una referencia externa

```text
Registrar un enlace no importa su contenido ni lo convierte automáticamente en evidencia. Añade contexto humano para explicar por qué importa.
```

### 9.3 Antes de incorporar resultado externo

```text
Tú decides qué incorporar, modificar o descartar. Explica brevemente tu criterio.
```

### 9.4 Antes de transferir o presentar

```text
Revisa herramientas usadas, atribuciones, privacidad, evidencias y reflexión antes de transferir este estado.
```

---

## 10. Patrón de gate humano

Todo uso externo de herramientas de IA debe atravesar al menos un gate humano.

### 10.1 Gate previo

**Pregunta:** ¿quiero usar una herramienta externa para este propósito?

### 10.2 Gate de privacidad

**Pregunta:** ¿qué información puedo compartir de forma segura?

### 10.3 Gate de pertinencia

**Pregunta:** ¿este resultado ayuda a mi misión o distrae?

### 10.4 Gate de autoría

**Pregunta:** ¿qué parte es mi decisión, edición, composición o interpretación?

### 10.5 Gate de evidencia

**Pregunta:** ¿qué debo registrar para que el proceso sea transparente?

### 10.6 Gate de reflexión

**Pregunta:** ¿qué aprendí sobre mi criterio, mi proceso o la herramienta?

---

## 11. Relación con portafolio vivo

El uso externo de herramientas no entra al portafolio por sí solo.

Puede entrar como evidencia si la persona lo contextualiza mediante:

- propósito;
- decisión humana;
- relación con producto;
- modificación realizada;
- reflexión;
- atribución;
- continuidad.

El portafolio debe mostrar proceso, no solo resultado.

---

## 12. Relación con referencias externas

Una referencia externa puede apoyar trazabilidad, pero no sustituye evidencia local.

### 12.1 Reglas

- Registrar enlace no significa importar contenido.
- Registrar enlace no significa compartir públicamente.
- Registrar enlace no significa validar contenido.
- Registrar enlace no significa otorgar acceso a la app.
- Registrar enlace requiere contexto humano.
- La persona puede decidir no registrar el enlace y registrar solo un resumen local.

### 12.2 Riesgos

- enlaces privados;
- permisos cambiantes;
- contenido sensible;
- recursos borrados;
- dependencia de plataformas;
- falta de atribución;
- confusión entre referencia y evidencia.

---

## 13. Relación con asistencia docente

La asistencia docente debe ayudar a:

- formular mejores preguntas;
- reconocer riesgos;
- distinguir apoyo de sustitución;
- revisar atribución;
- fortalecer criterio;
- orientar reflexión;
- seleccionar evidencia;
- diferenciar nivel educativo.

El docente no debe:

- producir el contenido por el estudiante;
- exigir uso de herramienta externa como única ruta;
- pedir datos sensibles;
- centralizar conversaciones externas sin necesidad;
- convertir transparencia en penalización automática.

---

## 14. Relación con accesibilidad y claridad

Los criterios humano-IA deben ser comprensibles.

### 14.1 Para escuela superior

- advertencias breves;
- lenguaje claro;
- ejemplos concretos;
- opciones visibles;
- reflexión breve;
- apoyo docente cercano.

### 14.2 Para universidad

- criterios más profundos;
- justificación metodológica;
- crítica de herramientas;
- registro de referencias;
- reflexión autoral;
- trazabilidad expandida.

---

## 15. Indicadores de buena interacción humano-IA externa

Una interacción se considera funcionalmente saludable si:

- la persona sabe por qué usa la herramienta;
- el prompt es editable;
- no se comparten datos sensibles innecesarios;
- existe alternativa sin herramienta externa;
- la persona decide qué incorporar;
- hay atribución suficiente;
- se registra evidencia proporcional;
- la reflexión conserva voz humana;
- el docente acompaña sin sustituir;
- el portafolio muestra sentido y proceso.

---

## 16. Señales de alerta funcional

| Señal | Riesgo |
|---|---|
| La persona no puede explicar por qué usó la herramienta | Uso acrítico |
| El resultado externo entra sin modificación ni decisión | Sustitución de agencia |
| Se comparte información sensible | Riesgo de privacidad |
| Se oculta el uso externo | Falta de transparencia |
| El docente exige herramienta específica sin alternativa | Inequidad o dependencia |
| El portafolio contiene enlaces sin contexto | Evidencia débil |
| La reflexión suena genérica o no apropiada | Voz humana debilitada |
| Se confunde revisión externa con evaluación final | Autoridad desplazada |
| La ruta solo funciona con herramienta externa | Ruptura del principio opcional |

---

## 17. Implicaciones para requisitos funcionales preliminares

Futuros requisitos deberán contemplar:

- banco de prompts sugeridos editables;
- advertencias de privacidad antes de uso externo;
- campos para registrar herramienta externa;
- campos para registrar prompt o resumen;
- clasificación local de sensibilidad;
- decisión humana obligatoria;
- reflexión vinculada a uso externo;
- ruta alternativa sin herramienta externa;
- declaración de uso en transferencia;
- evidencia contextualizada;
- asistencia docente por tipo de misión;
- reglas de lenguaje local-first.

---

## 18. Deuda funcional y UX derivada

| Código | Deuda | Prioridad | Documento futuro sugerido |
|---|---|---:|---|
| DFUX-v0.6-HIA-001 | Crear banco canónico de prompts sugeridos por tipo de misión | Alta | Requisitos / Guía de prompts |
| DFUX-v0.6-HIA-002 | Definir campos mínimos de registro de herramienta externa | Alta | Requisitos Funcionales |
| DFUX-v0.6-HIA-003 | Diseñar advertencias UX para privacidad y uso externo | Alta | Accesibilidad / Seguridad v0.7 |
| DFUX-v0.6-HIA-004 | Precisar rutas alternativas sin herramienta externa | Alta | Requisitos / Diseño de misión |
| DFUX-v0.6-HIA-005 | Definir criterios de atribución por tipo de herramienta | Alta | Gobernanza / Evaluación futura |
| DFUX-v0.6-HIA-006 | Diferenciar criterios de escuela superior y universidad | Alta | Criterios pedagógicos |
| DFUX-v0.6-HIA-007 | Crear checklist docente de uso responsable de herramientas externas | Alta | Asistencia docente |
| DFUX-v0.6-HIA-008 | Definir cómo el portafolio registra apoyo externo sin capturar demasiado | Alta | Portafolio / Seguridad v0.7 |
| DFUX-v0.6-HIA-009 | Auditar documentos v0.6 para mantener lenguaje “prompts sugeridos, no IA embebida” | Alta | Auditoría documental |
| DFUX-v0.6-HIA-010 | Preparar insumos para política técnica de seguridad en v0.7 | Media | v0.7 Arquitectura + Seguridad |
| DFUX-v0.6-HIA-011 | Definir ejemplos de reflexión protegida por nivel educativo | Media | Requisitos / Guías |
| DFUX-v0.6-HIA-012 | Definir criterios para no penalizar transparencia de uso | Alta | Evaluación futura |

---

## 19. Exclusiones explícitas

Este documento no autoriza:

- arquitectura técnica;
- diseño visual final;
- wireframes finales;
- selección de stack;
- base de datos;
- APIs;
- integración de IA externa dentro de la app;
- llamadas automáticas a modelos de IA;
- backend;
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
- mantenimiento operativo.

---

## 20. Criterios de aprobación

Este documento podrá aprobarse si:

- establece criterios claros de interacción humano-IA;
- respeta local-first;
- no asume IA embebida;
- preserva agencia humana;
- mantiene uso externo como opcional;
- protege privacidad;
- distingue prompts sugeridos de automatización;
- requiere decisión humana;
- protege reflexión humana;
- integra asistencia docente;
- distingue escuela superior y universidad;
- se conecta con misión, evidencia y portafolio;
- documenta deuda funcional y UX;
- prepara requisitos funcionales preliminares y seguridad futura.

---

## 21. Dictamen preliminar

Los criterios de interacción humano-IA de v0.6 establecen que AI StoryLab 1 debe orientar el uso responsable de herramientas externas sin convertirse en una aplicación de IA embebida.

La función del sistema es ofrecer andamiaje: prompts sugeridos, preguntas guía, plantillas, checklists, advertencias y campos de registro.

La función humana es decidir, producir, atribuir, reflexionar, curar y transferir.

La función docente es acompañar, orientar, proteger, preguntar y fortalecer criterio sin sustituir la agencia estudiantil.

Este documento permite avanzar hacia requisitos funcionales preliminares, criterios de accesibilidad, asistencia docente y preparación de insumos para v0.7.

Este documento queda como **APROBADO** para integración canónica documental y no autoriza arquitectura técnica, implementación, validación con personas ni despliegue.
