# Flujos Funcionales Conceptuales · AI StoryLab 1 v0.6

**Versión:** APROBADO  
**Fase:** AI StoryLab 1 v0.6 · Diseño Funcional + UX  
**Tipo de documento:** Flujos funcionales conceptuales  
**Estado:** Aprobado para integración canónica conjunta con Marco Estandarizado de Misión  
**PR asociado:** PR #20 · `docs: iniciar activacion v0.6 diseno funcional ux`  
**Rama asociada:** `docs/v0-6-activacion-diseno-funcional-ux`  
**Documento antecedente 1:** `Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`  
**Documento antecedente 2:** `Plan_Trabajo_Documental_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`  
**Documento antecedente 3:** `Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md`  
**Documento antecedente 4:** `Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md`  
**Documento puente aprobado:** `Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md`  
**Documento de auditoría asociado:** `Auditoria_Oficial_Mapa_Funcional_Preliminar_AI_StoryLab_v0_6.md`  
**Fecha:** 2026-07-07  

---

## 0. Nota de versión v5

Esta versión v5 sustituye el borrador v4 para efectos de revisión humana.

La versión v4 corrigió una observación crítica: persistían formulaciones capaces de sugerir operación interna de IA dentro de la aplicación. Ese lenguaje quedó corregido.

La versión v5 atiende una segunda observación estructural: la matriz de misiones no debe presentar las nueve misiones heredadas de v0.3.0 como canon cerrado de v0.6.

En esta versión v5:

- se mantiene la regla local-first y la eliminación de lenguaje que sugiera IA embebida;
- se reconoce v0.3.0 como MVP conceptual y antecedente histórico;
- se establece que v0.6 define una gramática configurable de misiones;
- se reemplaza la matriz principal basada en S1-S9 por una matriz funcional v0.6;
- se mueve la correspondencia con S1-S9 a una sección secundaria de referencia histórica;
- se añade deuda explícita para evitar fijar prematuramente cantidad, nombres o secuencia final de misiones;
- se protege la libertad creativa, la diferenciación educativa, la asistencia docente, las herramientas asociadas y la cadena iterativa de producción.

Este documento no aprueba integración, arquitectura técnica, implementación, validación, uso de datos reales ni despliegue.

---

## 1. Propósito del documento

Este documento define **flujos funcionales conceptuales** para AI StoryLab 1 v0.6.

Su propósito es traducir el mapa funcional, el modelo de experiencia de usuario y el marco estandarizado de misión en secuencias funcionales que permitan comprender cómo se organiza la producción creativa, educativa, reflexiva y documental dentro del ecosistema.

Estos flujos no son arquitectura técnica, pantallas finales ni especificaciones de implementación. Son mapas conceptuales para orientar documentos posteriores.

---

## 2. Principio rector

AI StoryLab 1 debe funcionar como un ecosistema local-first de investigación-creación, donde las personas producen, deciden, evidencian, reflexionan y curan proceso con apoyo de herramientas, prompts sugeridos, asistencia docente y portafolio vivo.

La experiencia no debe sentirse como una línea de ensamblaje automática, sino como una **partitura abierta de producción creativa**: tiene estructura, compás, criterios y continuidad, pero permite interpretación, variación, iteración y agencia humana.

---

## 3. Regla de lenguaje local-first sobre IA

### 3.1 Principio semántico

En AI StoryLab 1 v0.6, toda referencia a asistencia con IA debe entenderse como **uso externo opcional mediado por prompts sugeridos, plantillas, preguntas guía y decisión humana**, no como integración automática de modelos de IA dentro de la aplicación.

La aplicación no “consulta”, “analiza”, “genera”, “resume”, “clasifica” ni “devuelve” resultados mediante IA interna.

### 3.2 Fórmulas permitidas

| Idea funcional | Formulación permitida |
|---|---|
| Apoyo para explorar | El sistema ofrece preguntas guía o prompts sugeridos |
| Apoyo para estructurar | El sistema ofrece plantillas, criterios o prompts copiables |
| Apoyo para revisar | El sistema ofrece checklist, rúbrica preliminar o prompt de revisión |
| Uso de herramienta externa | La persona puede usar una herramienta externa bajo su control |
| Uso de chatbot externo | La persona puede copiar un prompt y usarlo fuera de la app |
| Retorno de resultados | La persona decide qué resultado externo incorpora localmente |
| Registro de proceso | La persona registra herramienta, prompt, decisión, evidencia y reflexión |

### 3.3 Formulaciones no permitidas en v0.6

| Evitar | Razón |
|---|---|
| Síntesis automática atribuida a un modelo interno | Sugiere respuesta automática dentro de la app |
| Preguntas generadas por un modelo interno | Sugiere generación automática dentro de la app |
| Patrones identificados por análisis interno automatizado | Sugiere análisis interno de contenido |
| Evidencias clasificadas automáticamente | Sustituye clasificación humana o local guiada |
| Revisión automática de borradores | Sugiere evaluación interna no autorizada |
| Reflexión producida automáticamente | Sustituye la voz humana |
| Envío del trabajo del estudiante a un servicio externo | Rompe local-first |
| Recuperación automática de resultados desde servicios externos | Sugiere conexión/API externa |

### 3.4 Regla de retorno humano

Cuando una persona usa una herramienta de IA externa fuera de la aplicación:

1. decide qué prompt copiar;
2. decide qué información compartir;
3. usa la herramienta fuera de la app;
4. evalúa el resultado fuera de la app;
5. decide qué incorporar localmente;
6. registra herramienta, prompt, evidencia, decisión y reflexión si corresponde.

La app no captura ni importa automáticamente respuestas de herramientas externas.

---

## 4. Regla local-first de asistencia y herramientas

### 4.1 La aplicación puede

- mostrar prompts sugeridos;
- ofrecer preguntas guía;
- presentar plantillas de organización;
- ofrecer checklists;
- permitir copiar prompts;
- permitir registrar el prompt usado;
- permitir registrar herramienta usada;
- permitir registrar decisión humana;
- permitir registrar evidencia;
- permitir registrar reflexión ética o metacognitiva;
- guardar localmente el progreso;
- exportar o importar JSON por decisión humana.

### 4.2 La aplicación no debe

- llamar automáticamente a un modelo de IA;
- conectarse a APIs externas de IA;
- enviar datos del estudiante a servicios remotos;
- recibir respuestas automáticas desde servicios externos;
- analizar contenido con IA embebida;
- subir evidencias, reflexiones o portafolios;
- usar datos reales de estudiantes en prompts sin control humano;
- sustituir decisión, voz, reflexión o autoría humana.

---

## 5. Regla sobre referencias externas

### 5.1 Principio

AI StoryLab 1 puede permitir registrar **referencias externas declaradas por la persona**, pero no debe conectarse automáticamente a ellas.

Una referencia externa puede ser:

- conversación con chatbot;
- Google Doc;
- Canva;
- carpeta en nube;
- archivo externo;
- recurso consultado;
- documento colaborativo;
- enlace a una herramienta usada fuera de la app.

### 5.2 Registrar un enlace no significa

- importar contenido;
- leer contenido;
- analizar contenido;
- sincronizar contenido;
- validar contenido;
- publicar contenido;
- convertir el enlace en evidencia suficiente por sí solo.

### 5.3 Campos mínimos de referencia externa

Una referencia externa debe poder registrar:

- título;
- tipo;
- URL;
- propósito;
- etapa de la misión;
- nivel de acceso;
- sensibilidad;
- resumen local escrito por la persona;
- decisión humana asociada;
- estado de uso;
- fecha de consulta.

---

## 6. Misión como unidad pedagógico-creativa

### 6.1 Definición

Una misión es una **unidad pedagógico-creativa de producción**.

No es solo una pantalla, formulario o tarea. Es una célula funcional que organiza:

- propósito;
- pregunta guía;
- evento de producción;
- herramientas;
- prompts sugeridos;
- asistencia docente;
- libertad creativa;
- evidencia;
- decisión humana;
- reflexión;
- portafolio;
- continuidad.

### 6.2 Fórmula funcional

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

### 6.3 Núcleo mínimo común

Toda misión debe sostener un núcleo mínimo:

- pregunta guía;
- evento de producción;
- producto esperado mínimo;
- evidencia;
- decisión humana;
- reflexión;
- aporte al portafolio;
- continuidad.

### 6.4 Zona de libertad creativa

Toda misión debe incluir una zona de libertad creativa donde la persona pueda:

- escoger tema;
- escoger medio;
- escoger herramienta;
- variar formato;
- trabajar individualmente o en equipo;
- traer referencias propias;
- proponer variación de producto;
- extender la misión;
- documentar una desviación creativa;
- iterar después de feedback.

La misión orienta, pero no encierra.

---

## 7. Diferenciación educativa

### 7.1 Principio

Las misiones deben poder funcionar para escuela superior y universidad mediante capas de profundidad, no mediante ecosistemas separados.

### 7.2 Escuela superior

En escuela superior, la misión debe favorecer:

- claridad de instrucciones;
- ejemplos concretos;
- pasos visibles;
- producto creativo tangible;
- reflexión ética accesible;
- acompañamiento docente cercano;
- herramientas aprobadas;
- decisiones humanas simples pero explícitas.

### 7.3 Universidad

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

### 7.4 Matriz de diferenciación

| Dimensión | Escuela superior | Universidad |
|---|---|---|
| Autonomía | Guiada | Expandida |
| Producto | Concreto y delimitado | Variable, crítico o investigativo |
| Herramientas | Sugeridas/aprobadas | Justificadas por pertinencia |
| Reflexión | Ética y proceso | Ética, epistemológica, metodológica |
| Evidencia | Producto + decisión + reflexión | Producto + decisión + referencias + crítica |
| Docente | Facilitador cercano | Mentor, curador, contraparte crítica |
| Libertad | Opciones delimitadas | Rutas alternativas justificadas |
| Evaluación futura | Completitud, claridad, ética | Rigor, trazabilidad, originalidad, criterio |

---

## 8. Asistencia humana docente

### 8.1 Principio

La asistencia docente es componente funcional de la misión. No debe quedar únicamente como guía externa.

### 8.2 Momentos de asistencia

| Momento | Función docente |
|---|---|
| Antes de la misión | Preparar contexto, herramientas, criterios y riesgos |
| Durante la misión | Acompañar, preguntar, destrabar, observar decisiones |
| Después de la misión | Revisar evidencia, comentar reflexión, orientar continuidad |

### 8.3 Tipos de intervención

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

### 8.4 Regla de no sustitución

El docente acompaña, pero no produce por el estudiante.

La asistencia docente debe fortalecer agencia, no reemplazarla.

---

## 9. Herramientas asociadas a eventos de producción

### 9.1 Principio

Las herramientas se modelan como parte del evento de producción, no como lista externa decorativa.

### 9.2 Taxonomía funcional

| Tipo | Descripción | Ejemplos |
|---|---|---|
| Herramienta local de la app | Función disponible dentro del ecosistema local-first | actividad lúdica, formulario, checklist |
| Herramienta externa manual | Herramienta usada fuera de la app sin integración automática | PowerPoint, Canva, grabadora, editor |
| Herramienta de IA externa opcional | Herramienta usada fuera de la app mediante prompt sugerido | chatbot, generador de imagen, TTS |
| Documento externo | Artefacto en nube o plataforma externa | Google Doc, Canva, carpeta Drive |
| Herramienta docente | Recurso de acompañamiento humano | rúbrica, checklist, comentario, mini-lección |
| Herramienta de evidencia | Campo o estructura para registrar proceso | decisión humana, reflexión, prompt usado |
| Herramienta institucional | Herramienta aprobada por el contexto educativo | cuenta institucional, plataforma del curso |

### 9.3 Regla funcional

La herramienta puede estar asociada a la misión, pero la app no necesariamente la ejecuta.

La app puede orientar, registrar, sugerir prompts y conservar evidencia local. No debe conectar automáticamente con servicios externos.

---

## 10. Cadena de producción iterativa

### 10.1 Principio

La producción no debe modelarse como línea recta. Debe modelarse como cadena con bucles creativos.

### 10.2 Cadena base

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

### 10.3 Bucles permitidos

```text
Explorar → seleccionar → volver a explorar
Crear → revisar → iterar → crear
Prototipar → recibir feedback → reestructurar
Curar → detectar vacío → volver a producir
Reflexionar → reinterpretar evidencia → ajustar portafolio
```

### 10.4 Regla funcional

La misión debe permitir iterar sin castigar el proceso. La iteración es evidencia de aprendizaje, no señal de fallo.

---

## 11. Estados funcionales de misión

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

Completar una misión no equivale necesariamente a lograr excelencia. Debe distinguirse entre completitud, calidad, curaduría y transferencia.

---

## 12. Notación funcional usada

Cada flujo se describe con la siguiente estructura:

- **Entrada:** qué activa el flujo.
- **Secuencia funcional:** pasos conceptuales.
- **Andamiaje, herramientas y asistencia:** prompts, plantillas, herramientas, intervención docente o referencias externas.
- **Gate humano:** decisión que requiere confirmación humana.
- **Salida:** resultado funcional.
- **Evidencia posible:** rastros que podrían alimentar portafolio o continuidad.
- **Riesgo:** falla funcional a evitar.
- **Deuda:** asuntos que deberán precisarse luego.

Esta notación no representa interfaz final ni arquitectura.

---

## 13. Flujo estructural · Misión como unidad de producción

### 13.1 Entrada

La persona entra a una misión nueva o retoma una misión en curso.

### 13.2 Secuencia funcional

1. El sistema presenta identidad, fase y propósito de la misión.
2. El sistema presenta la pregunta guía.
3. El sistema muestra el núcleo mínimo de la misión.
4. El sistema muestra la zona de libertad creativa.
5. La persona selecciona o confirma su ruta.
6. El sistema presenta el evento de producción.
7. El sistema muestra herramientas asociadas y alternativas.
8. El sistema ofrece prompts sugeridos, si aplica.
9. La persona produce, prueba, decide o registra.
10. La persona puede usar herramientas externas bajo control humano.
11. La persona puede registrar referencias externas declaradas.
12. La persona registra evidencia.
13. La persona registra decisión humana.
14. La persona produce reflexión.
15. La persona puede solicitar o recibir asistencia docente.
16. La misión pasa a estado de núcleo completo, revisión, iteración, curaduría o transferencia.

### 13.3 Andamiaje, herramientas y asistencia

- preguntas guía;
- actividad local;
- herramienta externa sugerida;
- prompt sugerido;
- referencia externa opcional;
- intervención docente antes, durante o después;
- checklist;
- glosario;
- criterios de calidad.

### 13.4 Gate humano

**Gate de misión:** la persona confirma que su producción, evidencia, decisión y reflexión representan adecuadamente el avance de la misión.

### 13.5 Salida

- producto mínimo;
- evidencia;
- decisión humana;
- reflexión;
- posible referencia externa;
- aporte al portafolio;
- estado de misión;
- continuidad.

### 13.6 Evidencia posible

- evidencia de proceso;
- evidencia de producto;
- evidencia de decisión;
- evidencia de uso de herramienta;
- evidencia de uso de herramienta de IA externa;
- evidencia de referencia externa;
- evidencia de reflexión;
- evidencia de feedback o asistencia docente.

### 13.7 Riesgo

Convertir la misión en formulario rígido o permitir que herramienta, docente o herramienta de IA externa sustituyan la agencia creadora.

### 13.8 Deuda

Crear matriz completa de misiones contra eventos, herramientas, evidencias y portafolio.

---

## 14. Flujo 1 · Entrada y orientación inicial

### 14.1 Entrada

La persona llega al ecosistema con una idea, documento, necesidad, proyecto o intención abierta.

### 14.2 Secuencia funcional

1. La persona expresa lo que quiere trabajar.
2. El sistema presenta opciones de ruta disponibles.
3. La persona indica si desea iniciar, retomar, explorar, revisar, portafoliar o transferir.
4. El sistema muestra una síntesis editable construida a partir de la información ingresada por la persona, sin inferencia automática mediante IA.
5. La persona confirma, corrige o reescribe la síntesis.
6. El sistema presenta rutas o misiones posibles según la selección humana.
7. La persona confirma o ajusta la ruta.
8. El flujo pasa a misión, exploración, estructuración, revisión, portafolio o continuidad.

### 14.3 Andamiaje, herramientas y asistencia

El sistema puede ofrecer preguntas guía, ejemplos de intención o un prompt sugerido para uso externo opcional.

El docente puede orientar si la persona no logra ubicar su ruta.

### 14.4 Gate humano

**Gate de intención:** la persona confirma qué quiere hacer.

### 14.5 Salida

- intención clarificada por la persona;
- ruta funcional inicial;
- misión sugerida o estado de continuidad;
- límites de alcance.

### 14.6 Evidencia posible

- intención inicial;
- síntesis corregida por la persona;
- ruta seleccionada;
- criterios iniciales.

### 14.7 Riesgo

Imponer ruta demasiado pronto, atribuir interpretación automática al sistema o confundir orientación con obligación.

---

## 15. Flujo 2 · Exploración creativa o investigativa

### 15.1 Entrada

La persona necesita abrir posibilidades antes de decidir estructura, tema, forma o enfoque.

### 15.2 Secuencia funcional

1. La persona presenta una idea, tema o pregunta.
2. El sistema ofrece preguntas exploratorias predefinidas o prompts sugeridos.
3. La persona puede responder directamente en la app o copiar un prompt para uso externo.
4. Si usa una herramienta externa, la persona decide qué información compartir.
5. La persona evalúa fuera de la app cualquier resultado producido por esa herramienta.
6. La persona trae de vuelta únicamente las ideas, decisiones o síntesis que desea registrar localmente.
7. La persona selecciona líneas prometedoras.
8. La exploración puede pasar a misión, estructura, evidencia o portafolio.

### 15.3 Andamiaje, herramientas y asistencia

- preguntas guía;
- prompts sugeridos;
- referencias externas opcionales;
- docente como acompañante creativo;
- glosario;
- ejemplos.

### 15.4 Gate humano

**Gate de ruta exploratoria:** la persona decide qué líneas seguir.

### 15.5 Salida

- ideas organizadas por la persona;
- alternativas;
- criterios de selección;
- posible misión o evento de producción.

### 15.6 Evidencia posible

- ideas iniciales;
- alternativas descartadas;
- criterios de selección;
- preguntas emergentes;
- cambios de enfoque;
- prompt usado, si la persona decide registrarlo.

### 15.7 Riesgo

Cerrar demasiado rápido la exploración o aceptar resultados externos sin criterio humano.

---

## 16. Flujo 3 · Selección y enfoque

### 16.1 Entrada

Existen varias ideas, rutas, productos posibles o referencias.

### 16.2 Secuencia funcional

1. El sistema muestra opciones registradas por la persona.
2. La persona compara posibilidades.
3. El sistema ofrece criterios de selección.
4. El docente puede formular preguntas orientadoras.
5. La persona decide enfoque.
6. El enfoque se registra como decisión humana.
7. El flujo pasa a estructura, producción o misión específica.

### 16.3 Andamiaje, herramientas y asistencia

- matriz de selección;
- criterios de audiencia, propósito, ética y viabilidad;
- prompt sugerido para comparación externa opcional;
- intervención docente crítica.

### 16.4 Gate humano

**Gate de enfoque:** la persona confirma qué opción continúa y por qué.

### 16.5 Salida

- enfoque seleccionado;
- decisión humana;
- criterios de selección;
- evidencia de descarte o reserva.

### 16.6 Riesgo

Forzar una decisión antes de suficiente exploración o presentar la selección como recomendación automática.

---

## 17. Flujo 4 · Estructuración funcional

### 17.1 Entrada

La persona tiene ideas, notas, borradores o materiales dispersos que necesitan orden.

### 17.2 Secuencia funcional

1. La persona entrega materiales o describe el conjunto.
2. El sistema ofrece plantillas, criterios de organización o matrices.
3. La persona decide si usa herramientas externas.
4. Si usa una herramienta externa, decide qué compartir y qué recuperar.
5. La persona compara opciones de estructura.
6. La persona aprueba, modifica o rechaza una estructura.
7. El sistema registra el criterio de organización elegido por la persona.
8. El flujo puede pasar a creación, revisión o misión.

### 17.3 Andamiaje, herramientas y asistencia

- plantillas;
- prompt sugerido;
- herramienta externa opcional;
- docente como contraparte crítica;
- matriz de criterios.

### 17.4 Gate humano

**Gate de estructura:** la persona aprueba la forma de organización.

### 17.5 Salida

- estructura funcional;
- esquema;
- matriz;
- secuencia;
- criterios de orden.

### 17.6 Evidencia posible

- estructura aprobada;
- alternativas rechazadas;
- criterio humano de selección;
- cambios realizados;
- prompt usado, si aplica.

### 17.7 Riesgo

Aceptar una estructura sugerida por herramienta externa sin apropiación humana.

---

## 18. Flujo 5 · Producción de componentes

### 18.1 Entrada

La persona está lista para crear un producto, componente o artefacto parcial.

### 18.2 Secuencia funcional

1. La persona confirma propósito, audiencia, medio y formato.
2. El sistema presenta herramientas asociadas.
3. La persona produce dentro o fuera de la app.
4. Si usa herramienta de IA externa, registra herramienta y prompt si corresponde.
5. Si usa documento o plataforma externa, puede registrar referencia externa.
6. La persona revisa el resultado.
7. La persona decide qué versión conserva, modifica o descarta.
8. El componente puede alimentar misión, prototipo, portafolio o curaduría.

### 18.3 Andamiaje, herramientas y asistencia

- herramienta local;
- herramienta externa manual;
- herramienta de IA externa opcional mediante prompt;
- apoyo docente técnico o creativo;
- referencia externa opcional.

### 18.4 Gate humano

**Gate de versión:** la persona decide qué versión acepta, modifica o descarta.

### 18.5 Salida

- producto parcial;
- versión;
- evidencia de herramienta;
- decisión humana;
- posible aporte al portafolio.

### 18.6 Riesgo

Reducir producción a uso de herramienta o perder claridad sobre autoría.

---

## 19. Flujo 6 · Prototipado e integración

### 19.1 Entrada

Existen componentes suficientes para probar una versión integrada.

### 19.2 Secuencia funcional

1. La persona reúne componentes.
2. El sistema ofrece checklist de integración.
3. La persona arma prototipo en herramienta local o externa.
4. La persona registra estado del prototipo.
5. Puede recibir feedback docente o entre pares.
6. La persona decide qué ajustar.
7. El prototipo pasa a revisión, iteración o curaduría.

### 19.3 Andamiaje, herramientas y asistencia

- checklist de integración;
- herramienta externa manual;
- feedback entre pares;
- asistencia docente técnica o crítica;
- prompt sugerido para explorar mejoras fuera de la app, si la persona decide usarlo.

### 19.4 Gate humano

**Gate de prototipo:** la persona confirma qué versión representa mejor el estado actual.

### 19.5 Salida

- prototipo;
- estado funcional;
- feedback;
- decisión de iteración;
- evidencia.

### 19.6 Riesgo

Confundir prototipo con producto final o no registrar los cambios decididos.

---

## 20. Flujo 7 · Revisión, retroalimentación e iteración

### 20.1 Entrada

Existe un producto, componente, prototipo, evidencia o narrativa que puede mejorar.

### 20.2 Secuencia funcional

1. El sistema ofrece criterios de revisión.
2. La persona revisa o solicita feedback.
3. El docente o pares pueden intervenir.
4. La persona puede usar un prompt de revisión fuera de la app, si lo decide.
5. La persona evalúa recomendaciones humanas o externas.
6. La persona decide qué recomendaciones acepta, modifica o descarta.
7. Se genera una iteración.
8. El sistema registra decisión y cambios.
9. La iteración puede volver a producción, prototipo o curaduría.

### 20.3 Andamiaje, herramientas y asistencia

- checklist;
- rúbrica preliminar;
- prompt de revisión;
- comentario docente;
- feedback de pares;
- comparación de versiones.

### 20.4 Gate humano

**Gate de iteración:** la persona decide qué cambia y por qué.

### 20.5 Salida

- versión revisada;
- decisión de cambio;
- feedback registrado;
- evidencia de iteración.

### 20.6 Riesgo

Tratar feedback como orden automática o eliminar libertad creativa.

---

## 21. Flujo 8 · Curaduría de proceso y portafolio vivo

### 21.1 Entrada

Existen productos, evidencias, decisiones, reflexiones y referencias candidatas.

### 21.2 Secuencia funcional

1. El sistema muestra materiales registrados.
2. La persona selecciona evidencias significativas.
3. El sistema presenta categorías para distinguir producto, evidencia, reflexión y referencia externa.
4. La persona vincula evidencias con decisiones y aprendizajes.
5. El docente puede acompañar la selección.
6. La persona construye o ajusta narrativa de proceso.
7. El portafolio queda como memoria viva y transferible.

### 21.3 Andamiaje, herramientas y asistencia

- tipología de evidencias;
- plantilla de portafolio;
- prompt sugerido para ordenar narrativa fuera de la app, si la persona lo decide;
- docente como curador;
- referencias externas opcionales.

### 21.4 Gate humano

**Gate de curaduría:** la persona valida qué entra al portafolio y qué sentido tiene.

### 21.5 Salida

- portafolio parcial o curado;
- evidencia seleccionada;
- narrativa de proceso;
- continuidad.

### 21.6 Riesgo

Convertir el portafolio en carpeta de archivos o permitir que otros definan el sentido del proceso.

---

## 22. Flujo 9 · Reflexión protegida

### 22.1 Entrada

La persona necesita interpretar lo creado, decidido, aprendido o transformado.

### 22.2 Secuencia funcional

1. El sistema muestra contexto registrado localmente.
2. El sistema ofrece preguntas reflexivas.
3. La persona responde, corrige o amplía.
4. La persona puede copiar un prompt de reflexión para uso externo, si lo decide.
5. Si usa una herramienta externa, la persona decide qué respuesta traer de vuelta.
6. La persona confirma, corrige o escribe la reflexión final.
7. La reflexión puede pasar al portafolio o transferencia.

### 22.3 Andamiaje, herramientas y asistencia

- preguntas reflexivas;
- prompt sugerido;
- intervención docente;
- evidencia previa;
- referencias externas declaradas.

### 22.4 Gate humano

**Gate de reflexión:** la persona confirma la interpretación.

### 22.5 Salida

- reflexión humana;
- interpretación de decisiones;
- aprendizaje declarado;
- análisis de herramientas o uso externo, si aplica;
- posible evidencia.

### 22.6 Riesgo

Reflexión fabricada o atribuida indebidamente a una herramienta externa.

---

## 23. Flujo 10 · Presentación, entrega y transferencia

### 23.1 Entrada

El proceso, producto o portafolio está listo para cierre parcial, presentación o transferencia.

### 23.2 Secuencia funcional

1. El sistema presenta checklist de cierre.
2. La persona confirma producto o estado.
3. La persona registra metadatos.
4. La persona confirma declaración de herramientas y uso externo de IA, si aplica.
5. La persona revisa privacidad y referencias externas.
6. La persona confirma transferencia.
7. El flujo produce continuidad o cierre.

### 23.3 Andamiaje, herramientas y asistencia

- checklist;
- asistencia docente;
- plantilla de metadatos;
- registro de entrega externa;
- reflexión final;
- advertencia de privacidad.

### 23.4 Gate humano

**Gate de transferencia:** la persona confirma que el estado transferido representa adecuadamente el proceso.

### 23.5 Salida

- estado de cierre;
- metadatos;
- transferencia;
- próximos pasos;
- deuda;
- evidencia final.

### 23.6 Riesgo

Confundir transferencia con publicación o autorización de fases futuras.

---

## 24. Flujo transversal · Seguridad de fase

### 24.1 Entrada

La persona solicita o el proceso sugiere algo que podría cruzar el alcance de v0.6.

### 24.2 Secuencia funcional

1. El sistema presenta guardrails de fase.
2. La persona o el facilitador identifica posible desbordamiento.
3. Se distingue si el asunto pertenece a v0.6 o a una fase futura.
4. Si no pertenece a v0.6, se registra como insumo o deuda futura.
5. El flujo vuelve al alcance permitido.

### 24.3 Gate humano

La persona confirma si desea registrar el asunto como deuda o insumo futuro.

### 24.4 Salida

- advertencia de fase;
- deuda funcional;
- insumo para documento futuro;
- redirección.

### 24.5 Riesgo

Activar arquitectura, implementación, validación, backend, APIs o IA embebida prematuramente.

---

## 25. Flujo transversal · Registro de referencias externas

### 25.1 Entrada

La persona usa o quiere declarar un recurso externo.

### 25.2 Secuencia funcional

1. La persona decide registrar una referencia externa.
2. El sistema solicita metadatos mínimos.
3. La persona indica propósito y etapa.
4. La persona marca nivel de acceso y sensibilidad.
5. La persona escribe resumen local.
6. La persona vincula la referencia con decisión, evidencia, producto o reflexión.
7. La referencia queda registrada localmente.

### 25.3 Gate humano

**Gate de referencia externa:** la persona confirma que la referencia puede registrarse y bajo qué estado.

### 25.4 Salida

- referencia externa contextualizada;
- advertencia de privacidad;
- posible evidencia candidata;
- vínculo con portafolio o transferencia.

### 25.5 Riesgo

Registrar enlaces privados, sensibles, caducos o confundir referencia con evidencia validada.

---

## 26. Flujo transversal · Trazabilidad longitudinal

### 26.1 Entrada

Cualquier decisión, versión, evidencia, reflexión, prompt usado, herramienta usada, referencia externa o evento relevante.

### 26.2 Secuencia funcional

1. El sistema ofrece categorías de trazabilidad.
2. La persona identifica si el evento debe registrarse.
3. El evento se vincula con misión, función, evidencia, decisión o deuda.
4. El evento puede alimentar portafolio, transferencia o requisitos futuros.

### 26.3 Gate humano

La persona confirma la relevancia del registro cuando afecte sentido, evidencia o decisión.

### 26.4 Salida

- evento trazable;
- vínculo funcional;
- insumo de continuidad.

### 26.5 Riesgo

Registrar demasiado y convertir trazabilidad en ruido documental.

---

## 27. Decisión sobre misiones heredadas y gramática v0.6

### DEC-FLUJOS-v0.6-001 · Las misiones de v0.3.0 son antecedente histórico, no canon cerrado

**Decisión:**  
Las nueve misiones de v0.3.0 se reconocen como antecedente histórico, MVP conceptual y caso inicial de diseño. No constituyen por sí mismas la estructura canónica cerrada de v0.6 ni de v1.0.0.

En v0.6, la misión se define funcionalmente como una **unidad pedagógico-creativa configurable**.

Las misiones pueden reorganizarse, ampliarse, combinarse, diferenciarse por nivel educativo o adaptarse por contexto, siempre que preserven:

- propósito creativo/formativo;
- evento de producción;
- herramientas asociadas;
- zona de libertad creativa;
- asistencia docente;
- evidencias;
- decisión humana;
- reflexión;
- portafolio vivo;
- continuidad;
- local-first;
- uso externo opcional de herramientas de IA mediante prompts sugeridos.

### 27.1 Implicación documental

La matriz principal de v0.6 debe describir **tipos funcionales de misión**, no una lista fija de nueve misiones heredadas.

Las misiones S1-S9 de v0.3.0 pueden aparecer como correspondencia histórica, ejemplo de aplicación o caso inicial, pero no como molde obligatorio.

---

## 28. Matriz funcional v0.6 · Tipos de misión y eventos de producción

Esta matriz define una gramática funcional preliminar para v0.6.

No fija cantidad final de misiones, nombres definitivos, secuencia única ni arquitectura de implementación.

| Tipo funcional de misión v0.6 | Evento de producción | Herramientas posibles | Producto mínimo | Evidencia clave |
|---|---|---|---|---|
| Misión de contrato ético-creativo | Definir principios, límites, atribución y responsabilidades | actividad local, discusión docente, checklist, prompt sugerido opcional | contrato ético, manifiesto o criterios de uso | decisión ética, criterios, reflexión |
| Misión de exploración divergente | Abrir posibilidades de tema, problema, medio, historia o enfoque | preguntas guía, referencias externas declaradas, mapas, herramienta de IA externa opcional | mapa de posibilidades o banco de ideas | alternativas, criterios emergentes |
| Misión de enfoque y selección | Escoger ruta creativa, investigativa o narrativa | matriz de selección, asistencia docente, discusión de pares | enfoque seleccionado | justificación humana, descarte razonado |
| Misión de diseño conceptual, narrativo o investigativo | Organizar estructura, argumento, hipótesis creativa o secuencia | plantilla, documento externo, mapa conceptual, prompt sugerido | esquema, arquitectura narrativa o marco inicial | estructura, cambios, decisión |
| Misión de diseño de medio, mundo o forma | Definir lenguaje visual, sonoro, material, multimodal o estético | moodboard, Canva, grabadora, editor, herramienta externa opcional | guía de estilo, mundo visual/sonoro o propuesta formal | selección, atribución, criterio estético |
| Misión de producción de componentes | Crear piezas parciales del proyecto | herramientas locales, herramientas externas, herramientas de IA externas opcionales | componente producido | versión, herramienta, prompt usado, decisión |
| Misión de prototipo integrador | Ensamblar piezas en una versión funcional o presentable | PowerPoint, editor, documento, plataforma externa, feedback docente/pares | prototipo integrado | estado, integración, feedback |
| Misión de revisión e iteración | Recibir crítica, revisar y mejorar | checklist, rúbrica preliminar, pares, docente, prompt externo opcional | versión revisada | cambios, recomendaciones aceptadas/rechazadas |
| Misión de curaduría y portafolio | Seleccionar evidencias, articular proceso y construir memoria formativa | portafolio, plantilla, reflexión, asistencia docente curatorial | portafolio parcial o curado | evidencia seleccionada, narrativa de proceso |
| Misión de presentación, publicación controlada o transferencia | Cerrar, presentar, entregar o transferir continuidad | checklist, metadatos, espacio externo de entrega, guía docente | entrega, presentación o transferencia | reflexión final, metadatos, estado transferible |

### 28.1 Lectura correcta de la matriz

Esta matriz no reemplaza la creatividad humana ni convierte la experiencia en un embudo rígido.

Su función es ofrecer una gramática común para diseñar, adaptar o reinterpretar misiones.

Una secuencia curricular puede usar todos estos tipos, combinar varios en una misma misión o repetir algunos en ciclos iterativos.

---

## 29. Correspondencia histórica preliminar con v0.3.0

Esta correspondencia muestra cómo las nueve misiones heredadas de v0.3.0 pueden reinterpretarse bajo la gramática funcional v0.6.

No establece estructura final, cantidad definitiva ni secuencia canónica cerrada.

| Misión heredada v0.3.0 | Tipo funcional v0.6 relacionado | Lectura de transición |
|---|---|---|
| S1 · Brújula Ética | Misión de contrato ético-creativo | Caso inicial de definición de principios, límites y responsabilidad |
| S2 · Idea Central | Misión de exploración divergente / enfoque y selección | Caso inicial de apertura temática y selección de mensaje central |
| S3 · Avatar o Avatares | Misión de diseño conceptual, narrativo o investigativo | Caso inicial de diseño de personaje, voz o agente narrativo |
| S4 · Narrativa | Misión de diseño conceptual, narrativo o investigativo | Caso inicial de estructura narrativa o secuencia argumental |
| S5 · Mundo Visual | Misión de diseño de medio, mundo o forma | Caso inicial de lenguaje visual, estética y recursos |
| S6 · Voz y Sonido | Misión de diseño de medio, mundo o forma / producción de componentes | Caso inicial de producción sonora o decisión de voz |
| S7 · Prototipo | Misión de prototipo integrador | Caso inicial de ensamblaje de componentes |
| S8 · Curaduría Final | Misión de revisión e iteración / curaduría y portafolio | Caso inicial de revisión ética, calidad, créditos y portafolio |
| S9 · Premier y Entrega Final | Misión de presentación, publicación controlada o transferencia | Caso inicial de presentación, metadatos, cierre y transferencia |

### 29.1 Regla de interpretación

La v0.3.0 funciona como semilla y prueba conceptual.

La v0.6 convierte esa semilla en una gramática de diseño más amplia, capaz de sostener:

- escuela superior;
- universidad;
- producción creativa;
- investigación-creación;
- asistencia docente;
- libertad creativa;
- portafolio vivo;
- herramientas externas;
- referencias externas;
- continuidad hacia v1.0.0.

---

## 30. Relación con recorridos sintéticos

El próximo documento de recorridos sintéticos deberá partir de tres ejes:

1. actores arquetípicos;
2. misiones como unidades de producción;
3. tipos funcionales de misión v0.6.

Los recorridos no deben limitarse a describir usuarios navegando una aplicación. Deben mostrar cómo una persona atraviesa una misión, toma decisiones, usa herramientas, recibe asistencia, registra evidencias, ejerce libertad creativa y aporta al portafolio.

Los recorridos podrán usar la correspondencia histórica con v0.3.0 como caso de prueba, pero no deberán asumir que S1-S9 son la única secuencia posible.

---

## 31. Deuda funcional, UX y documental derivada

| Código | Deuda | Prioridad | Documento futuro sugerido |
|---|---|---:|---|
| DFUX-v0.6-FLUJOS-001 | Convertir flujos en recorridos sintéticos por actor arquetípico | Alta | Recorridos Sintéticos |
| DFUX-v0.6-FLUJOS-002 | Precisar criterios de relevancia para trazabilidad visible | Alta | Requisitos Funcionales |
| DFUX-v0.6-FLUJOS-003 | Definir patrones de gate humano por tipo de decisión | Alta | Criterios Humano-IA |
| DFUX-v0.6-FLUJOS-004 | Elaborar ejemplos de evidencias por flujo | Alta | Recorridos / Requisitos |
| DFUX-v0.6-FLUJOS-005 | Diferenciar transferencia, cierre parcial y cierre de fase | Media | Continuidad / Requisitos |
| DFUX-v0.6-FLUJOS-006 | Precisar cómo se registra uso de herramienta de IA externa sin arquitectura técnica | Alta | Criterios Humano-IA / Requisitos |
| DFUX-v0.6-FLUJOS-007 | Preparar insumos técnicos futuros para trazabilidad y portafolio | Media | Insumos v0.7 |
| DFUX-v0.6-FLUJOS-008 | Alinear todo lenguaje de IA con local-first y prompts sugeridos | Alta | Criterios Humano-IA / Bitácoras |
| DFUX-v0.6-FLUJOS-009 | Revisar documentos previos de v0.6 para detectar lenguaje que sugiera IA embebida | Alta | Auditoría documental / cierre de sesión |
| DFUX-v0.6-FLUJOS-010 | Crear regla canónica de redacción: “prompts sugeridos, no IA integrada” | Alta | Criterios Humano-IA |
| DFUX-v0.6-FLUJOS-011 | Definir tratamiento funcional de enlaces externos a conversaciones IA y documentos en nube | Alta | Requisitos / Seguridad v0.7 |
| DFUX-v0.6-FLUJOS-012 | Establecer campos mínimos para referencias externas | Alta | Requisitos |
| DFUX-v0.6-FLUJOS-013 | Distinguir referencia externa, evidencia local, documento de trabajo y documento canónico | Alta | Requisitos / Gobernanza |
| DFUX-v0.6-FLUJOS-014 | Definir advertencias UX para enlaces externos | Alta | Requisitos / Seguridad v0.7 |
| DFUX-v0.6-FLUJOS-015 | Reconceptualizar las misiones como unidades pedagógico-creativas de producción | Alta | Marco de Misión / Flujos |
| DFUX-v0.6-FLUJOS-016 | Definir relación misión-evento-herramienta-producto-evidencia-portafolio | Alta | Requisitos |
| DFUX-v0.6-FLUJOS-017 | Mapear las 9 misiones heredadas de v0.3.0 contra flujos v0.6 | Alta | Recorridos / Requisitos |
| DFUX-v0.6-FLUJOS-018 | Distinguir herramienta asociada, herramienta externa, herramienta de IA externa opcional y referencia externa | Alta | Requisitos |
| DFUX-v0.6-FLUJOS-019 | Definir cómo cada misión aporta al portafolio emergente y trazabilidad longitudinal | Alta | Requisitos / Portafolio |
| DFUX-v0.6-FLUJOS-020 | Definir estructura funcional ampliada de misión | Alta | Requisitos / Recorridos |
| DFUX-v0.6-FLUJOS-021 | Diferenciar misiones por nivel educativo | Alta | Recorridos Sintéticos |
| DFUX-v0.6-FLUJOS-022 | Integrar asistencia humana docente como componente funcional de la misión | Alta | Recorridos / Requisitos |
| DFUX-v0.6-FLUJOS-023 | Definir zona de libertad creativa dentro de cada misión | Alta | Requisitos |
| DFUX-v0.6-FLUJOS-024 | Mejorar cadena de producción con bucles de iteración creativa | Alta | Requisitos / Recorridos |
| DFUX-v0.6-FLUJOS-025 | Crear taxonomía de herramientas asociadas a eventos de producción | Alta | Requisitos |
| DFUX-v0.6-FLUJOS-026 | Definir variantes de producto esperado por misión | Media | Requisitos |
| DFUX-v0.6-FLUJOS-027 | Diseñar matriz misión-evento-herramienta-evidencia-portafolio completa | Alta | Requisitos / Recorridos |
| DFUX-v0.6-FLUJOS-028 | Auditar lenguaje operativo para eliminar cualquier sujeto IA interno en secuencias funcionales | Alta | Auditoría documental / Criterios Humano-IA |
| DFUX-v0.6-FLUJOS-029 | Separar matriz funcional v0.6 de correspondencia histórica v0.3.0 | Alta | Flujos / Recorridos |
| DFUX-v0.6-FLUJOS-030 | Definir gramática configurable de misiones sin fijar prematuramente cantidad, nombres o secuencia final | Alta | Requisitos / Diseño funcional |
| DFUX-v0.6-FLUJOS-031 | Reinterpretar las nueve misiones heredadas como caso inicial, no como canon cerrado | Alta | Recorridos / Gobernanza documental |

Esta deuda no bloquea este documento. Debe registrarse formalmente en bitácoras y registro de deuda al cierre de sesión.

---

## 32. Exclusiones explícitas

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

## 33. Criterios de aprobación

Este documento podrá aprobarse si:

- traduce el modelo de experiencia en flujos funcionales claros;
- incorpora el marco estandarizado de misión;
- mantiene alcance v0.6;
- no define arquitectura técnica;
- no implementa;
- no valida con personas;
- protege agencia humana mediante gates;
- distingue evidencia formativa de validación;
- integra portafolio vivo;
- protege reflexión humana;
- respeta local-first;
- no asume IA embebida;
- usa herramientas de IA externas solo como apoyo opcional mediante prompts sugeridos;
- elimina lenguaje donde una IA interna parezca generar, analizar, clasificar, revisar, sintetizar o devolver contenido;
- permite referencias externas sin conexión automática;
- reconoce libertad creativa;
- diferencia escuela superior y universidad;
- integra asistencia docente;
- modela herramientas asociadas a eventos de producción;
- documenta deuda funcional, UX y documental;
- prepara recorridos sintéticos posteriores.

---

## 34. Dictamen preliminar

Estos flujos funcionales conceptuales organizan la experiencia de AI StoryLab 1 como una red de producción creativa, educativa y reflexiva.

La versión v5 conserva la corrección semántica de v4 y corrige además un riesgo estructural: las misiones heredadas de v0.3.0 no deben aparecer como canon cerrado de v0.6. La matriz principal ahora define tipos funcionales de misión, mientras la correspondencia con S1-S9 queda como referencia histórica.

El ecosistema resultante preserva local-first, agencia humana, libertad creativa, asistencia docente, herramientas asociadas, uso externo opcional mediante prompts sugeridos, evidencia, portafolio vivo, referencias externas declaradas y continuidad.

El próximo documento, una vez aprobado e integrado este documento junto al marco estandarizado de misión, deberá ser:

`Recorridos_Usuario_Sinteticos_AI_StoryLab_v0_6.md`

Este documento queda como **APROBADO** para integración canónica documental conjunta con el Marco Estandarizado de Misión y no autoriza arquitectura técnica, implementación, validación con personas ni despliegue.
