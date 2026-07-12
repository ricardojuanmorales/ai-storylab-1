# Marco Estandarizado de Misión · AI StoryLab 1 v0.6

**Versión:** APROBADO  
**Fase:** AI StoryLab 1 v0.6 · Diseño Funcional + UX  
**Tipo de documento:** Documento puente de estandarización funcional  
**Estado:** Aprobado para integración canónica conjunta con Flujos v3  
**PR asociado:** PR #20 · `docs: iniciar activacion v0.6 diseno funcional ux`  
**Rama asociada:** `docs/v0-6-activacion-diseno-funcional-ux`  
**Documento que pausa:** `Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6_BORRADOR_v2.md`  
**Documento futuro condicionado:** `Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6_BORRADOR_v3.md`  
**Fecha:** 2026-07-07  

---

## 0. Propósito de este documento puente

Este documento estandariza decisiones funcionales sobre la estructura de una misión en AI StoryLab 1 antes de producir un nuevo borrador de **Flujos Funcionales Conceptuales**.

Se crea porque, durante la revisión del borrador v2 de flujos, surgieron asuntos estructurales que deben resolverse antes de continuar:

1. la misión no puede reducirse a un paso de navegación o formulario;
2. la asistencia IA debe respetar el principio local-first y operar mediante prompts sugeridos, no mediante IA embebida;
3. la cadena de producción estudiantil debe incluir libertad creativa, diferenciación por nivel educativo, asistencia humana docente, herramientas asociadas, evidencias, referencias externas y portafolio vivo;
4. la producción creativa requiere bucles de iteración, no solo secuencia lineal.

Este documento no aprueba flujos, no integra arquitectura técnica y no autoriza implementación.

---

## 1. Estado metodológico

El documento `Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6_BORRADOR_v2.md` queda en pausa.

No debe aprobarse ni integrarse hasta que este marco de misión sea revisado y aceptado.

La próxima versión de flujos deberá ser v3 y deberá incorporar las decisiones estandarizadas aquí.

---

## 2. Decisión matriz

### DEC-MISION-v0.6-001 · La misión es la unidad pedagógico-creativa básica

**Decisión:**  
En AI StoryLab 1, la misión se define como una **unidad pedagógico-creativa de producción**, no como una pantalla, formulario o simple tarea.

**Definición estándar:**  
Una misión organiza un evento de creación, herramientas asociadas, prompts sugeridos, asistencia humana docente, decisiones humanas, evidencias, reflexión y aportes al portafolio vivo.

**Implicación:**  
Los flujos funcionales deben modelar misiones como células de producción con estructura interna, no como pasos lineales genéricos.

---

## 3. Estructura funcional estándar de una misión

### 3.1 Fórmula ampliada

```text
Misión =
identidad
+ propósito creativo/formativo
+ contexto del aprendiz
+ pregunta guía
+ nivel de autonomía
+ evento de producción
+ ruta mínima
+ zona de libertad creativa
+ herramientas asociadas
+ prompts sugeridos
+ referencias externas opcionales
+ asistencia humana docente
+ producto esperado
+ variantes de producto
+ criterios de calidad
+ evidencias
+ decisión humana
+ reflexión
+ revisión / retroalimentación
+ aporte al portafolio
+ continuidad
```

### 3.2 Componentes mínimos

Toda misión debe incluir al menos:

- pregunta guía;
- evento de producción;
- producto esperado mínimo;
- herramienta o familia de herramientas asociadas;
- prompt sugerido opcional;
- evidencia;
- decisión humana;
- reflexión;
- aporte al portafolio;
- continuidad hacia otra misión o cierre parcial.

### 3.3 Componentes ampliados

Según el nivel o modalidad, una misión también puede incluir:

- variantes por nivel educativo;
- rutas alternativas;
- criterios de calidad diferenciados;
- referencias externas declaradas;
- intervención docente específica;
- feedback entre pares;
- revisión ética;
- iteración;
- extensión investigativa;
- adaptación disciplinaria;
- metadatos de herramienta;
- registro de limitaciones o deuda.

---

## 4. Decisión sobre libertad creativa

### DEC-MISION-v0.6-002 · Toda misión debe tener núcleo mínimo y zona de libertad

**Decisión:**  
La misión debe orientar sin encerrar.

Cada misión debe distinguir:

1. **Núcleo mínimo común:** aquello necesario para sostener continuidad, portafolio y trazabilidad.
2. **Zona de libertad creativa:** margen donde la persona puede elegir, variar, reinterpretar, ampliar o transformar.

### 4.1 Núcleo mínimo común

El núcleo mínimo puede incluir:

- responder la pregunta guía;
- completar un evento de producción;
- registrar evidencia;
- declarar decisión humana;
- reflexionar;
- aportar al portafolio.

### 4.2 Zona de libertad creativa

La zona de libertad puede incluir:

- escoger tema;
- escoger medio;
- escoger herramienta;
- cambiar formato;
- trabajar individualmente o en equipo;
- traer referencias propias;
- proponer variación de producto;
- extender la misión;
- documentar una desviación creativa;
- iterar después de feedback.

### 4.3 Regla funcional

La misión no debe castigar la creatividad que se desvía del ejemplo, siempre que conserve trazabilidad, decisión humana, ética, evidencia y reflexión.

---

## 5. Decisión sobre diferenciación educativa

### DEC-MISION-v0.6-003 · Las misiones deben diferenciar escuela superior y universidad

**Decisión:**  
La misión debe permitir distintos niveles de profundidad para escuela superior y universidad.

No se requiere crear dos ecosistemas separados. Se requiere diseñar misiones con **capas de profundidad**.

### 5.1 Escuela superior

En escuela superior, la misión debe favorecer:

- claridad de instrucciones;
- ejemplos concretos;
- pasos visibles;
- producto creativo tangible;
- reflexión ética accesible;
- acompañamiento docente cercano;
- herramientas aprobadas;
- decisiones humanas simples pero explícitas.

### 5.2 Universidad

En universidad, la misión debe permitir:

- mayor autonomía;
- justificación metodológica;
- diálogo conceptual o teórico;
- referencias externas;
- crítica de herramientas;
- posicionamiento autoral;
- reflexión epistemológica, ética o disciplinaria;
- evidencia más compleja;
- productos alternativos.

### 5.3 Matriz de diferenciación

| Dimensión | Escuela superior | Universidad |
|---|---|---|
| Autonomía | Guiada | Expandida |
| Producto | Concreto y delimitado | Variable, crítico o investigativo |
| Herramientas | Sugeridas/aprobadas | Justificadas por pertinencia |
| Reflexión | Ética y proceso | Ética, epistemológica, metodológica |
| Evidencia | Producto + decisión + reflexión | Producto + decisión + referencias + crítica |
| Docente | Facilitador cercano | Mentor, curador, contraparte crítica |
| Libertad | Opciones delimitadas | Rutas alternativas justificadas |
| Evaluación | Completitud, claridad, ética | Rigor, trazabilidad, originalidad, criterio |

---

## 6. Decisión sobre asistencia humana docente

### DEC-MISION-v0.6-004 · La asistencia docente es componente funcional de la misión

**Decisión:**  
La asistencia humana docente no debe quedar fuera de la misión ni limitarse a una guía externa. Debe formar parte del modelo funcional.

### 6.1 Momentos de asistencia docente

| Momento | Función docente |
|---|---|
| Antes de la misión | Preparar contexto, herramientas, criterios y riesgos |
| Durante la misión | Acompañar, preguntar, destrabar, observar decisiones |
| Después de la misión | Revisar evidencia, comentar reflexión, orientar continuidad |

### 6.2 Tipos de intervención docente

| Tipo | Función |
|---|---|
| Orientadora | Aclara propósito, ruta y criterios |
| Técnica | Ayuda con herramientas sin hacer el trabajo |
| Ética | Señala riesgos de privacidad, autoría, sesgo o atribución |
| Creativa | Hace preguntas que abren posibilidades |
| Crítica | Ayuda a revisar calidad, coherencia y profundidad |
| Curatorial | Ayuda a seleccionar evidencias significativas |
| Afectiva | Sostiene confianza, ritmo y sentido de logro |
| Diferenciadora | Ajusta reto según nivel, contexto o necesidad |

### 6.3 Regla de no sustitución

El docente acompaña, pero no produce por el estudiante.

La asistencia docente debe fortalecer agencia, no reemplazarla.

---

## 7. Decisión sobre herramientas asociadas

### DEC-MISION-v0.6-005 · Cada misión debe vincular eventos de producción con herramientas

**Decisión:**  
Las herramientas deben modelarse como parte del evento de producción, no como lista externa decorativa.

### 7.1 Taxonomía funcional de herramientas

| Tipo | Descripción | Ejemplos |
|---|---|---|
| Herramienta local de la app | Función disponible dentro del ecosistema local-first | actividad lúdica, formulario, checklist |
| Herramienta externa manual | Herramienta usada fuera de la app sin integración automática | PowerPoint, Canva, grabadora, editor |
| IA externa opcional | Herramienta IA usada fuera de la app mediante prompt sugerido | chatbot, generador de imagen, TTS |
| Documento externo | Artefacto en nube o plataforma externa | Google Doc, Canva, carpeta Drive |
| Herramienta docente | Recurso de acompañamiento humano | rúbrica, checklist, comentario, mini-lección |
| Herramienta de evidencia | Campo o estructura para registrar proceso | decisión humana, reflexión, prompt usado |
| Herramienta institucional | Herramienta aprobada por el contexto educativo | cuenta institucional, plataforma del curso |

### 7.2 Regla local-first

La herramienta puede estar asociada a la misión, pero la app no necesariamente la ejecuta.

La app puede orientar, registrar, sugerir prompts y conservar evidencia local. No debe conectar automáticamente con servicios externos.

---

## 8. Decisión sobre IA y prompts sugeridos

### DEC-MISION-v0.6-006 · La IA en misión se modela como andamiaje externo opcional

**Decisión:**  
En v0.6, la asistencia IA dentro de una misión debe expresarse como:

- prompts sugeridos;
- preguntas guía;
- plantillas;
- checklists;
- registro del prompt usado;
- registro de herramienta usada;
- decisión humana;
- reflexión.

No debe expresarse como llamada automática a IA externa ni como IA embebida en la app.

### 8.1 Regla de retorno humano

Si se usa una IA externa:

1. la persona decide qué prompt copiar;
2. la persona decide qué información compartir;
3. la persona usa la herramienta fuera de la app;
4. la persona evalúa la respuesta;
5. la persona decide qué incorporar;
6. la persona registra evidencia, decisión y reflexión localmente.

---

## 9. Decisión sobre referencias externas

### DEC-MISION-v0.6-007 · Las misiones pueden registrar referencias externas declaradas

**Decisión:**  
Las misiones pueden permitir que la persona registre enlaces externos de proceso, siempre bajo control humano.

Ejemplos:

- conversación con chatbot;
- Google Doc;
- Canva;
- carpeta en nube;
- archivo externo;
- recurso consultado;
- documento colaborativo.

### 9.1 Regla de no conexión

Registrar un enlace no significa:

- importar contenido;
- leer contenido;
- analizar contenido;
- sincronizar contenido;
- validar contenido;
- publicar contenido.

### 9.2 Campos mínimos recomendados

Una referencia externa debe registrar:

- título;
- tipo;
- URL;
- propósito;
- etapa de la misión;
- nivel de acceso;
- sensibilidad;
- resumen local;
- decisión humana asociada;
- estado de uso;
- fecha de consulta.

---

## 10. Decisión sobre evidencia y portafolio

### DEC-MISION-v0.6-008 · La misión aporta al portafolio vivo mediante evidencias seleccionadas

**Decisión:**  
Cada misión debe producir o seleccionar evidencia para el portafolio vivo.

La evidencia no es solo el producto final. Puede incluir:

- evidencia de proceso;
- evidencia de producto;
- evidencia de decisión;
- evidencia de reflexión;
- evidencia de uso de IA externa;
- evidencia de herramienta;
- evidencia de referencia externa;
- evidencia de transferencia.

### 10.1 Producto no equivale a evidencia

El producto esperado es lo que se crea.

La evidencia es el rastro contextualizado que permite comprender proceso, decisión, herramienta, aprendizaje o cambio.

### 10.2 Portafolio no equivale a carpeta

El portafolio organiza sentido y trayectoria. No debe convertirse en acumulación pasiva de archivos.

---

## 11. Decisión sobre cadena de producción

### DEC-MISION-v0.6-009 · La cadena de producción debe incluir iteración

**Decisión:**  
La producción no debe modelarse como línea recta. Debe modelarse como cadena con bucles creativos.

### 11.1 Cadena base

```text
Intención
↓
Contrato ético / marco de responsabilidad
↓
Exploración divergente
↓
Selección / enfoque
↓
Diseño narrativo, conceptual o investigativo
↓
Diseño de medio, mundo o forma
↓
Producción de componentes
↓
Prototipo integrador
↓
Retroalimentación
↓
Iteración
↓
Curaduría
↓
Presentación / publicación / entrega
↓
Reflexión y transferencia
```

### 11.2 Bucles permitidos

```text
Explorar → seleccionar → volver a explorar
Crear → revisar → iterar → crear
Prototipar → recibir feedback → reestructurar
Curar → detectar vacío → volver a producir
Reflexionar → reinterpretar evidencia → ajustar portafolio
```

### 11.3 Regla funcional

La misión debe permitir iterar sin castigar el proceso. La iteración es evidencia de aprendizaje, no señal de fallo.

---

## 12. Decisión sobre completitud y calidad

### DEC-MISION-v0.6-010 · Completar una misión no equivale necesariamente a lograr excelencia

**Decisión:**  
Debe distinguirse entre:

- completar una misión;
- cumplir el núcleo mínimo;
- producir evidencia suficiente;
- alcanzar calidad deseada;
- requerir revisión;
- requerir iteración;
- seleccionar para portafolio.

### 12.1 Estados funcionales sugeridos

| Estado | Descripción |
|---|---|
| No iniciada | La misión aún no tiene actividad registrada |
| En exploración | Hay ideas o pruebas iniciales |
| En producción | Hay trabajo activo |
| En revisión | Requiere ajuste o feedback |
| Núcleo completo | Tiene producto mínimo, decisión y reflexión |
| Evidencia seleccionada | Algo fue marcado para portafolio |
| Iteración recomendada | Puede mejorar con revisión |
| Curada | Está articulada dentro del portafolio |
| Transferible | Puede continuar o presentarse |

---

## 13. Decisión sobre evaluación futura

### DEC-MISION-v0.6-011 · La misión prepara evaluación, pero v0.6 no evalúa con personas

**Decisión:**  
Las misiones pueden definir criterios funcionales de calidad, pero v0.6 no valida con personas ni activa evaluación real.

Los criterios pueden preparar fases futuras.

### 13.1 Criterios preliminares

- claridad;
- coherencia;
- originalidad;
- ética;
- atribución;
- uso responsable de IA;
- trazabilidad;
- decisión humana;
- reflexión;
- adecuación al público;
- relación con propósito;
- calidad de producto;
- calidad de evidencia.

---

## 14. Decisiones sobre diferenciación y accesibilidad

### DEC-MISION-v0.6-012 · Toda misión debe prever adaptación

**Decisión:**  
La misión debe permitir adaptación por:

- nivel educativo;
- experiencia previa;
- acceso a herramientas;
- modalidad individual/equipo;
- necesidades de accesibilidad;
- contexto institucional;
- idioma;
- tiempo disponible;
- tipo de producto.

### 14.1 Regla

La adaptación no debe eliminar agencia, evidencia ni reflexión.

---

## 15. Matriz estándar de misión

| Campo | Requerido | Descripción |
|---|---:|---|
| ID | Sí | Identificador de misión |
| Título | Sí | Nombre legible |
| Fase | Sí | Ubicación en cadena |
| Tipo | Sí | Ética, exploración, diseño, producción, revisión, curaduría, entrega |
| Nivel | Sí | Escuela superior, universidad, ambos |
| Pregunta guía | Sí | Pregunta que orienta |
| Propósito creativo | Sí | Qué busca producir o transformar |
| Propósito formativo | Sí | Qué busca aprender o desarrollar |
| Evento de producción | Sí | Acción creativa principal |
| Ruta mínima | Sí | Núcleo obligatorio |
| Libertad creativa | Sí | Opciones, variaciones o desvíos permitidos |
| Producto esperado | Sí | Resultado mínimo |
| Variantes de producto | Opcional | Alternativas aceptables |
| Herramientas asociadas | Sí | Locales, externas, IA opcional, docentes |
| Prompt sugerido | Opcional | Andamiaje IA externo |
| Referencias externas | Opcional | Enlaces declarados |
| Asistencia docente | Sí | Antes, durante, después |
| Criterios | Sí | Calidad, ética, completitud |
| Evidencias | Sí | Tipos de evidencia |
| Decisión humana | Sí | Gate de agencia |
| Reflexión | Sí | Interpretación humana |
| Portafolio | Sí | Aporte acumulativo |
| Continuidad | Sí | Próximo paso o iteración |

---

## 16. Prioridades antes de Flujos v3

### Prioridad 1 · Fijar definición de misión

Sin definición estándar, el flujo v3 seguirá flotando.

### Prioridad 2 · Fijar regla local-first

Toda misión debe evitar sugerir IA embebida.

### Prioridad 3 · Fijar estructura misión-evento-herramienta-evidencia

La producción estudiantil requiere eventos y herramientas, no solo momentos UX.

### Prioridad 4 · Fijar libertad creativa

La misión debe orientar sin encerrar.

### Prioridad 5 · Fijar diferenciación escuela superior/universidad

La misma misión puede tener capas de profundidad distintas.

### Prioridad 6 · Fijar rol docente

La asistencia docente debe aparecer como función del ecosistema.

### Prioridad 7 · Fijar referencias externas

Los enlaces externos deben registrarse sin romper local-first.

### Prioridad 8 · Fijar cadena iterativa de producción

La producción debe permitir bucles creativos.

---

## 17. Deuda funcional, UX y documental generada

| Código | Deuda | Prioridad | Documento futuro sugerido |
|---|---|---:|---|
| DFUX-v0.6-MISION-001 | Integrar estructura funcional ampliada de misión en Flujos v3 | Alta | Flujos Funcionales v3 |
| DFUX-v0.6-MISION-002 | Diferenciar misiones por nivel educativo | Alta | Recorridos Sintéticos / Requisitos |
| DFUX-v0.6-MISION-003 | Definir asistencia docente por misión | Alta | Flujos / Recorridos |
| DFUX-v0.6-MISION-004 | Diseñar zona de libertad creativa por misión | Alta | Flujos / Requisitos |
| DFUX-v0.6-MISION-005 | Crear taxonomía de herramientas por evento de producción | Alta | Requisitos |
| DFUX-v0.6-MISION-006 | Definir campos de referencias externas de proceso | Alta | Requisitos / Seguridad v0.7 |
| DFUX-v0.6-MISION-007 | Crear matriz misión-evento-herramienta-evidencia-portafolio | Alta | Flujos v3 |
| DFUX-v0.6-MISION-008 | Distinguir completitud de calidad y curaduría | Media | Requisitos / Evaluación futura |
| DFUX-v0.6-MISION-009 | Definir estados funcionales de misión | Media | Requisitos |
| DFUX-v0.6-MISION-010 | Crear variantes escuela superior/universidad para recorridos sintéticos | Alta | Recorridos Sintéticos |
| DFUX-v0.6-MISION-011 | Revisar documentos previos para alinear misión, IA, herramientas y libertad creativa | Alta | Cierre de sesión / Auditoría documental |

---

## 18. Criterios de aprobación de este marco

Este marco podrá aprobarse si:

- define misión como unidad pedagógico-creativa;
- preserva local-first;
- integra prompts sugeridos sin IA embebida;
- permite referencias externas sin conexión automática;
- incorpora asistencia docente;
- diferencia escuela superior y universidad;
- protege libertad creativa;
- mejora la cadena de producción;
- conecta herramientas, eventos, evidencias y portafolio;
- genera deuda clara para documentos posteriores;
- prepara Flujos Funcionales v3.

---

## 19. Dictamen preliminar

La estructura de misión heredada de v0.3.0 es sólida como MVP conceptual, pero v0.6 necesita ampliarla para sostener diferenciación educativa, libertad creativa, asistencia docente, referencias externas, herramientas asociadas y cadena iterativa de producción.

La misión debe ser una partitura abierta: tiene estructura, ritmo y propósito, pero permite interpretación humana, variación, revisión y profundidad.

Este documento queda como **APROBADO** y no autoriza integración, arquitectura, implementación, validación ni despliegue.
