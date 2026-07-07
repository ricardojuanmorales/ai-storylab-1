# Criterios de Accesibilidad y Claridad · AI StoryLab 1 v0.6

**Versión:** APROBADO  
**Fase:** AI StoryLab 1 v0.6 · Diseño Funcional + UX  
**Tipo de documento:** Criterios funcionales de accesibilidad y claridad  
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
**Fecha:** 2026-07-07  

---

## 0. Nota de alcance

Este documento define criterios funcionales de accesibilidad y claridad para AI StoryLab 1 v0.6.

En esta fase, accesibilidad y claridad no se entienden como diseño visual final, implementación, cumplimiento técnico certificado ni auditoría formal con personas usuarias.

Se entienden como criterios funcionales preliminares para asegurar que los documentos, flujos, recorridos, misiones, prompts sugeridos, advertencias, evidencias y portafolios puedan ser comprendidos y usados por distintos actores educativos sin perder agencia humana, libertad creativa ni protección local-first.

Este documento no autoriza arquitectura técnica, implementación, validación con personas, uso de datos reales, backend, APIs, IA embebida, pruebas productivas ni despliegue.

---

## 1. Propósito del documento

Este documento busca establecer criterios para que AI StoryLab 1 sea funcionalmente claro, accesible y pedagógicamente habitable desde v0.6.

Sus objetivos son:

1. definir criterios de claridad lingüística;
2. definir criterios de accesibilidad cognitiva;
3. definir criterios de accesibilidad funcional;
4. definir criterios de accesibilidad pedagógica;
5. diferenciar necesidades entre escuela superior y universidad;
6. orientar la redacción de misiones, prompts sugeridos, advertencias y reflexiones;
7. proteger la libertad creativa sin producir confusión;
8. preparar requisitos funcionales preliminares;
9. dejar deuda explícita para v0.7 y fases posteriores.

---

## 2. Principio rector

AI StoryLab 1 debe poder sentirse como un taller guiado, no como un laberinto.

La persona debe saber:

- dónde está;
- qué está haciendo;
- por qué importa;
- qué puede elegir;
- qué debe decidir;
- qué puede omitir;
- qué debe registrar;
- qué riesgos debe considerar;
- qué queda local;
- qué se transfiere;
- qué no está autorizado.

La claridad no debe reducir la profundidad. La accesibilidad no debe empobrecer la experiencia. La estructura debe abrir camino, no cerrar imaginación.

---

## 3. Definiciones funcionales

| Concepto | Definición en v0.6 |
|---|---|
| Claridad | Capacidad de entender propósito, acción esperada, límites y consecuencias |
| Accesibilidad cognitiva | Reducción de carga mental innecesaria mediante estructura, secuencia y lenguaje comprensible |
| Accesibilidad funcional | Posibilidad de completar rutas mínimas sin depender de herramientas externas obligatorias |
| Accesibilidad pedagógica | Capacidad de adaptar profundidad, ejemplos, apoyo y autonomía al nivel educativo |
| Claridad ética | Comprensión de privacidad, autoría, atribución, evidencia y decisión humana |
| Claridad local-first | Comprensión de que la app no sube, envía, analiza ni sincroniza datos automáticamente |
| Claridad creativa | Comprensión de qué es obligatorio y qué puede variar |
| Claridad documental | Distinción entre borrador, aprobado, integrado, evidencia, referencia externa y documento canónico |

---

## 4. Principios de accesibilidad y claridad

### C-AC-v0.6-001 · Orientación visible

Toda misión o recorrido debe indicar con claridad:

- nombre;
- propósito;
- fase;
- acción principal;
- producto esperado;
- evidencia mínima;
- decisión humana requerida;
- continuidad.

**Riesgo a evitar:** que la persona complete pasos sin entender el mapa.

---

### C-AC-v0.6-002 · Ruta mínima explícita

Cada misión debe tener una ruta mínima comprensible.

**Criterio:** la persona debe poder identificar qué necesita hacer para completar el núcleo de la misión.

**Riesgo a evitar:** confundir libertad creativa con ausencia de estructura.

---

### C-AC-v0.6-003 · Zona de libertad creativa visible

La libertad creativa debe aparecer como espacio explícito de elección.

**Criterio:** la persona debe saber qué puede adaptar, elegir, cambiar o proponer.

**Riesgo a evitar:** que la misión parezca una receta cerrada o, al contrario, una nube sin bordes.

---

### C-AC-v0.6-004 · Lenguaje claro sin infantilización

El lenguaje debe ser directo, humano y pedagógico, sin perder rigor.

**Criterio:** escuela superior necesita claridad concreta; universidad puede recibir mayor densidad conceptual, pero con estructura.

**Riesgo a evitar:** simplificar de manera condescendiente o sofisticar hasta volver opaco.

---

### C-AC-v0.6-005 · Carga cognitiva proporcional

Cada pantalla, sección o actividad futura debe evitar exceso de instrucciones simultáneas.

**Criterio:** la información debe organizarse por capas: primero propósito, luego acción, luego criterios, luego detalles.

**Riesgo a evitar:** fatiga, abandono o cumplimiento mecánico.

---

### C-AC-v0.6-006 · Decisiones humanas señaladas

Los puntos donde la persona debe decidir deben estar claramente marcados.

**Criterio:** toda decisión importante debe indicar qué se decide y por qué importa.

**Riesgo a evitar:** decisiones invisibles, automatizadas o asumidas por el sistema.

---

### C-AC-v0.6-007 · Advertencias comprensibles

Las advertencias de privacidad, uso externo, referencias, atribución y fase deben ser breves, visibles y accionables.

**Criterio:** la advertencia debe decir qué riesgo existe y qué puede hacer la persona.

**Riesgo a evitar:** advertencias largas que nadie lee o mensajes alarmistas sin acción clara.

---

### C-AC-v0.6-008 · Alternativas sin herramienta externa

Toda misión debe poder completarse sin usar herramientas externas de IA.

**Criterio:** el sistema debe ofrecer actividad local, plantilla, pregunta guía o asistencia docente equivalente.

**Riesgo a evitar:** inequidad de acceso, dependencia tecnológica o presión indebida.

---

### C-AC-v0.6-009 · Evidencia contextualizada

La evidencia debe pedirse con contexto.

**Criterio:** la persona debe entender qué tipo de evidencia se solicita, para qué sirve y cómo se vincula con portafolio.

**Riesgo a evitar:** acumulación de archivos sin sentido.

---

### C-AC-v0.6-010 · Portafolio como memoria comprensible

El portafolio vivo debe mostrar proceso, no solo productos.

**Criterio:** la persona debe poder entender cómo intención, decisión, evidencia, reflexión e iteración se conectan.

**Riesgo a evitar:** portafolio como carpeta pasiva.

---

### C-AC-v0.6-011 · Referencias externas con contexto

Las referencias externas deben distinguirse de evidencias locales y documentos canónicos.

**Criterio:** registrar un enlace debe exigir propósito, resumen local y decisión asociada.

**Riesgo a evitar:** enlaces sin contexto, datos sensibles o dependencia de plataformas externas.

---

### C-AC-v0.6-012 · Estados visibles

Los estados de misión, evidencia, portafolio y transferencia deben ser comprensibles.

**Criterio:** la persona debe saber si algo está en borrador, revisión, completo, curado, transferible o pendiente.

**Riesgo a evitar:** confundir avance parcial con cierre final.

---

## 5. Criterios de lenguaje

### 5.1 Oraciones

Preferir oraciones directas, con una acción principal.

**Ejemplo recomendado:**

```text
Selecciona una evidencia y explica por qué representa tu proceso.
```

**Evitar:**

```text
Procede a efectuar una selección evidenciaria interpretativa en función de tu metaproceso.
```

### 5.2 Verbos

Usar verbos de acción humana:

- decide;
- selecciona;
- explica;
- revisa;
- compara;
- registra;
- reflexiona;
- ajusta;
- comparte si corresponde;
- conserva localmente.

Evitar verbos que sugieran automatización no autorizada:

- analizar automáticamente;
- generar internamente;
- sincronizar;
- enviar;
- importar;
- clasificar automáticamente;
- validar automáticamente.

### 5.3 Títulos

Los títulos deben indicar propósito, no solo categoría.

**Mejor:**

```text
Revisa privacidad antes de usar una herramienta externa
```

**Menos claro:**

```text
Privacidad
```

### 5.4 Mensajes breves

Las instrucciones operativas deben ser breves. Los fundamentos pueden estar en capas expandibles o documentos de apoyo futuros.

### 5.5 Vocabulario consistente

Usar de forma estable:

- misión;
- ruta mínima;
- zona de libertad creativa;
- evidencia;
- reflexión;
- decisión humana;
- referencia externa;
- herramienta externa;
- prompt sugerido;
- portafolio vivo;
- transferencia.

---

## 6. Criterios de accesibilidad cognitiva

### 6.1 Secuencia

Cada misión debe organizarse en una secuencia legible:

```text
Propósito
→ Qué harás
→ Qué puedes elegir
→ Qué debes cuidar
→ Qué producirás
→ Qué registrarás
→ Qué decidirás
→ Qué sigue
```

### 6.2 Agrupación

No mezclar en el mismo bloque:

- instrucciones;
- advertencias;
- criterios;
- reflexión;
- evidencia;
- referencias externas.

Cada cosa debe tener su lugar.

### 6.3 Progresión

El sistema debe evitar pedir reflexión compleja antes de que exista una experiencia mínima sobre la cual reflexionar.

### 6.4 Recuperación

La persona debe poder retomar un proceso y entender:

- última acción;
- próxima acción sugerida;
- evidencia pendiente;
- decisión pendiente;
- estado de misión.

### 6.5 Redundancia útil

Ciertos criterios deben repetirse en momentos clave, sin saturar:

- local-first;
- decisión humana;
- privacidad;
- atribución;
- no obligatoriedad de herramientas externas;
- reflexión humana.

---

## 7. Criterios de accesibilidad funcional

### 7.1 Ruta sin cuenta

Los recorridos conceptuales deben preservar la posibilidad de uso sin autenticación en v0.6.

### 7.2 Ruta sin backend

Las funciones conceptuales no deben depender de servicios remotos.

### 7.3 Ruta sin herramienta de IA externa

Toda misión debe tener alternativa local.

### 7.4 Ruta con conectividad limitada

Los documentos deben contemplar que una persona pueda trabajar con herramientas locales y registrar después.

### 7.5 Exportación comprensible

Cuando se exporte o transfiera algo en fases futuras, la persona debe entender qué contiene y qué no contiene.

### 7.6 Importación controlada

Importar en fases futuras debe entenderse como decisión humana, no sincronización invisible.

---

## 8. Criterios por actor sintético

### 8.1 Estudiante de escuela superior

Necesita:

- instrucciones más concretas;
- ejemplos breves;
- pasos visibles;
- menos jerga;
- advertencias claras;
- apoyo docente cercano;
- reflexiones breves pero significativas;
- opciones creativas delimitadas.

**Criterio clave:** claridad antes que densidad.

### 8.2 Estudiante universitario

Necesita:

- autonomía;
- mayor profundidad;
- criterios de justificación;
- espacio para referencias;
- crítica de herramientas;
- reflexión metodológica;
- trazabilidad más amplia;
- libertad creativa con responsabilidad argumentada.

**Criterio clave:** profundidad con estructura.

### 8.3 Docente facilitador

Necesita:

- guías claras de intervención;
- criterios de acompañamiento;
- límites de privacidad;
- ejemplos de preguntas;
- señales de alerta;
- formas de apoyar sin sustituir.

**Criterio clave:** orientar sin invadir ni producir por la persona estudiante.

### 8.4 Persona curadora de proceso

Necesita:

- tipologías claras;
- distinción entre producto, evidencia, referencia y reflexión;
- criterios de selección;
- advertencias sobre enlaces externos;
- narrativa de proceso.

**Criterio clave:** convertir acumulación en sentido.

### 8.5 Persona revisora funcional

Necesita:

- criterios de fase;
- checklist de lenguaje;
- exclusiones explícitas;
- trazabilidad de deuda;
- consistencia documental.

**Criterio clave:** preservar alcance v0.6.

---

## 9. Criterios por componente funcional

| Componente | Criterio de claridad | Criterio de accesibilidad |
|---|---|---|
| Misión | Debe indicar propósito, ruta mínima y libertad creativa | Debe poder completarse con alternativas locales |
| Prompt sugerido | Debe ser editable y contextualizado | No debe ser obligatorio |
| Evidencia | Debe explicar qué se registra y por qué | Debe aceptar distintos formatos futuros |
| Reflexión | Debe guiar sin imponer voz | Debe poder ser breve o profunda según nivel |
| Referencia externa | Debe distinguir enlace de evidencia | Debe advertir privacidad y permisos |
| Portafolio | Debe mostrar proceso y sentido | Debe evitar acumulación desordenada |
| Transferencia | Debe indicar qué queda listo y qué no | Debe evitar cierre prematuro |
| Asistencia docente | Debe mostrar momento y tipo de apoyo | Debe respetar privacidad y agencia |

---

## 10. Claridad sobre local-first

El principio local-first debe explicarse de forma simple.

### 10.1 Mensaje base

```text
Tu trabajo permanece bajo tu control. Nada se envía, publica, sincroniza o comparte automáticamente.
```

### 10.2 Mensaje sobre herramientas externas

```text
Si decides usar una herramienta externa, revisa primero qué información vas a compartir. Puedes editar, resumir o no usar el prompt.
```

### 10.3 Mensaje sobre referencias externas

```text
Registrar un enlace no importa su contenido. Añade contexto local para explicar por qué importa.
```

### 10.4 Mensaje sobre transferencia

```text
Transferir no significa publicar. Revisa qué estado estás dejando listo para continuar.
```

---

## 11. Claridad sobre IA externa

Las herramientas de IA externas deben presentarse como opcionales, no como centro de la experiencia.

### 11.1 Regla

El sistema debe hablar de:

- prompts sugeridos;
- herramientas externas opcionales;
- decisión humana;
- registro local;
- reflexión.

No debe hablar como si existiera:

- IA interna;
- análisis automático;
- generación automática;
- revisión automática;
- clasificación automática;
- conexión con servicios externos.

### 11.2 Pregunta de claridad

Cada vez que aparezca un prompt sugerido, la persona debe poder responder:

```text
¿Para qué sirve?
¿Qué debo editar?
¿Qué no debo compartir?
¿Qué haré con el resultado externo?
¿Qué debo registrar luego?
```

---

## 12. Claridad sobre evidencia

La evidencia debe presentarse como rastro con significado.

### 12.1 Preguntas guía

- ¿Qué muestra esta evidencia?
- ¿Qué decisión representa?
- ¿Qué cambió después?
- ¿Por qué vale la pena conservarla?
- ¿Debe entrar al portafolio?
- ¿Tiene datos sensibles?
- ¿Necesita atribución?

### 12.2 Tipos de evidencia

- evidencia de intención;
- evidencia de exploración;
- evidencia de decisión;
- evidencia de producción;
- evidencia de herramienta;
- evidencia de revisión;
- evidencia de iteración;
- evidencia de reflexión;
- evidencia de transferencia.

---

## 13. Claridad sobre portafolio vivo

El portafolio debe presentarse como memoria de aprendizaje y creación.

### 13.1 Debe aclarar

- qué evidencia entra;
- por qué entra;
- qué historia cuenta;
- qué decisión representa;
- qué aprendizaje muestra;
- qué continuidad abre.

### 13.2 Debe evitar

- acumulación sin curaduría;
- enlaces sin contexto;
- productos sin reflexión;
- reflexiones sin evidencia;
- cierre prematuro;
- exposición de información sensible.

---

## 14. Claridad sobre asistencia docente

La asistencia docente debe ser visible y limitada.

### 14.1 Mensaje base

```text
El docente puede ayudarte a pensar, revisar y decidir. No debe producir por ti.
```

### 14.2 Momentos de apoyo

- antes de iniciar;
- durante exploración;
- durante producción;
- durante revisión;
- durante curaduría;
- al transferir.

### 14.3 Tipos de apoyo

- aclarar instrucciones;
- hacer preguntas;
- señalar riesgos;
- revisar criterios;
- ayudar técnicamente;
- orientar reflexión;
- sugerir iteración;
- acompañar curaduría.

---

## 15. Patrones de advertencia

### 15.1 Advertencia de privacidad

```text
Antes de compartir información fuera de la app, elimina datos personales, sensibles o innecesarios.
```

### 15.2 Advertencia de autoría

```text
Si usas una herramienta externa, decide qué incorporas y explica tu aporte humano.
```

### 15.3 Advertencia de referencia externa

```text
Un enlace puede cambiar, caducar o mostrar información privada. Registra un resumen local.
```

### 15.4 Advertencia de fase

```text
Este paso documenta una decisión funcional. No activa implementación, validación ni despliegue.
```

### 15.5 Advertencia de portafolio

```text
Selecciona evidencias que cuenten tu proceso. No incluyas todo por acumulación.
```

---

## 16. Criterios de suficiencia para v0.6

En esta fase, accesibilidad y claridad son suficientes si:

- los actores sintéticos pueden entender su ruta;
- las misiones muestran propósito, acción, decisión y evidencia;
- existe alternativa sin herramienta externa;
- local-first está claramente expresado;
- los prompts sugeridos son opcionales y editables;
- la asistencia docente aparece sin sustituir agencia;
- las referencias externas tienen advertencias;
- el portafolio se entiende como memoria viva;
- la transferencia no se confunde con publicación;
- las exclusiones de fase son visibles.

No es suficiente para:

- certificación formal de accesibilidad;
- cumplimiento técnico final;
- pruebas de usabilidad;
- investigación con personas;
- diseño visual final;
- implementación.

---

## 17. Implicaciones para requisitos funcionales preliminares

Los requisitos funcionales preliminares deberán contemplar:

- estructura de misión con orientación visible;
- campos de ruta mínima;
- campos de libertad creativa;
- campos de decisión humana;
- alternativas sin herramienta externa;
- advertencias de privacidad;
- plantillas de evidencia;
- estados funcionales claros;
- categorías de portafolio;
- campos para referencias externas;
- asistencia docente por momento;
- mensajes de fase;
- lenguaje diferenciado por nivel educativo;
- exportación y transferencia comprensibles.

---

## 18. Deuda funcional y UX derivada

| Código | Deuda | Prioridad | Documento futuro sugerido |
|---|---|---:|---|
| DFUX-v0.6-AC-001 | Definir guía de lenguaje claro para misiones | Alta | Requisitos / Guía UX |
| DFUX-v0.6-AC-002 | Crear patrones de advertencia por riesgo | Alta | Requisitos / Seguridad v0.7 |
| DFUX-v0.6-AC-003 | Diseñar niveles de profundidad por escuela superior y universidad | Alta | Requisitos |
| DFUX-v0.6-AC-004 | Definir estructura de estados visibles de misión | Alta | Requisitos Funcionales |
| DFUX-v0.6-AC-005 | Crear criterios de evidencia comprensible | Alta | Portafolio / Requisitos |
| DFUX-v0.6-AC-006 | Definir mensajes local-first canónicos | Alta | Requisitos / Gobernanza |
| DFUX-v0.6-AC-007 | Crear patrones de asistencia docente visibles | Alta | Asistencia docente |
| DFUX-v0.6-AC-008 | Diseñar criterios para evitar sobrecarga cognitiva | Media | Diseño UX futuro |
| DFUX-v0.6-AC-009 | Preparar insumos para auditoría de accesibilidad técnica en fases futuras | Media | v0.7 / v0.8 |
| DFUX-v0.6-AC-010 | Definir criterios de claridad para transferencia y exportación | Alta | Requisitos / Continuidad |
| DFUX-v0.6-AC-011 | Crear glosario breve para actores no técnicos | Media | Guía de uso |
| DFUX-v0.6-AC-012 | Revisar consistencia de vocabulario en todos los documentos v0.6 | Alta | Auditoría documental |

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
- mantenimiento operativo;
- certificación formal de accesibilidad;
- auditoría técnica WCAG;
- pruebas con usuarios reales.

---

## 20. Criterios de aprobación

Este documento podrá aprobarse si:

- define criterios claros de accesibilidad y claridad;
- mantiene alcance v0.6;
- no implica implementación;
- no implica validación con personas;
- respeta local-first;
- no asume IA embebida;
- diferencia escuela superior y universidad;
- protege agencia humana;
- integra misión, evidencia, reflexión y portafolio;
- orienta uso de herramientas externas sin obligarlas;
- incluye advertencias comprensibles;
- documenta deuda funcional y UX;
- prepara requisitos funcionales preliminares.

---

## 21. Dictamen preliminar

Los criterios de accesibilidad y claridad de v0.6 permiten que AI StoryLab 1 avance desde mapas, flujos y recorridos hacia requisitos funcionales preliminares sin perder el cuidado pedagógico, ético y documental ya establecido.

La claridad aquí no es adorno. Es infraestructura humana.

La accesibilidad aquí no es reducción. Es la condición para que una experiencia creativa, ética y local-first pueda ser habitada por estudiantes, docentes, curadores de proceso y revisores funcionales.

Este documento prepara el terreno para requisitos funcionales preliminares, criterios de asistencia docente, patrones de advertencia, guía de lenguaje y futuras decisiones técnicas.

Este documento queda como **APROBADO** para integración canónica documental y no autoriza arquitectura técnica, implementación, validación con personas ni despliegue.
