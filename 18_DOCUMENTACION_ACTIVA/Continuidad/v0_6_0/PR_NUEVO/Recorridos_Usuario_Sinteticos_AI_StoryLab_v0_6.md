# Recorridos de Usuario Sintéticos · AI StoryLab 1 v0.6

**Versión:** APROBADO  
**Fase:** AI StoryLab 1 v0.6 · Diseño Funcional + UX  
**Tipo de documento:** Recorridos de usuario sintéticos  
**Estado:** Aprobado para integración canónica  
**PR asociado:** PR #20 · `docs: iniciar activacion v0.6 diseno funcional ux`  
**Rama asociada:** `docs/v0-6-activacion-diseno-funcional-ux`  
**Documento antecedente 1:** `Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`  
**Documento antecedente 2:** `Plan_Trabajo_Documental_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`  
**Documento antecedente 3:** `Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md`  
**Documento antecedente 4:** `Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md`  
**Documento antecedente 5:** `Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md`  
**Documento antecedente 6:** `Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md`  
**Fecha:** 2026-07-07  

---

## 0. Nota de alcance

Este documento propone **recorridos de usuario sintéticos** para AI StoryLab 1 v0.6.

Los recorridos son escenarios conceptuales no reales. No representan validación con personas, entrevistas, pruebas de usabilidad, investigación empírica ni datos de estudiantes.

Su función es probar la coherencia funcional del ecosistema desde actores arquetípicos, tipos de misión, herramientas asociadas, asistencia docente, libertad creativa, referencias externas, evidencias, portafolio vivo y continuidad.

Este documento no autoriza arquitectura técnica, implementación, validación con personas, uso de datos reales ni despliegue.

---

## 1. Propósito del documento

Este documento busca responder:

1. ¿Cómo atraviesan personas distintas una misión o secuencia de misiones?
2. ¿Cómo se diferencia el recorrido entre escuela superior y universidad?
3. ¿Dónde aparece la asistencia humana docente?
4. ¿Cómo se preserva la libertad creativa?
5. ¿Cómo se integran herramientas externas sin romper local-first?
6. ¿Cómo se registran evidencias, decisiones, reflexiones y referencias externas?
7. ¿Cómo alimentan los recorridos el portafolio vivo?
8. ¿Qué deudas funcionales emergen para requisitos, criterios humano-IA y v0.7?

---

## 2. Principios rectores de los recorridos

### 2.1 Recorridos sintéticos, no empíricos

Los recorridos aquí descritos son construcciones de diseño.

No se derivan de observación directa ni de pruebas con personas. Por tanto, no deben presentarse como validación.

### 2.2 Local-first

Los recorridos no asumen backend, cuentas, APIs, conexión automática a herramientas externas, análisis automatizado interno ni envío de datos a servicios remotos.

### 2.3 Herramientas externas bajo control humano

Una persona puede usar herramientas externas, incluyendo herramientas de IA externas, pero siempre fuera de la aplicación y bajo decisión humana.

La app puede ofrecer prompts sugeridos, plantillas, checklists y campos de registro.

### 2.4 Misión como unidad pedagógico-creativa

Los recorridos se construyen alrededor de misiones entendidas como unidades pedagógico-creativas de producción.

### 2.5 Libertad creativa protegida

Cada recorrido debe mostrar una ruta mínima y una zona de libertad creativa.

### 2.6 Asistencia docente visible

La asistencia docente debe aparecer como apoyo humano funcional, no como detalle periférico.

### 2.7 Evidencia y portafolio

Cada recorrido debe producir evidencias y posibles aportes al portafolio vivo.

### 2.8 Diferenciación educativa

Los recorridos deben permitir distinguir escuela superior y universidad mediante niveles de autonomía, profundidad, herramientas, reflexión y criterios.

---

## 3. Vocabulario funcional

| Término | Definición de uso en este documento |
|---|---|
| Actor sintético | Perfil arquetípico no real usado para probar flujos |
| Recorrido | Secuencia narrativa-funcional de acciones, decisiones y salidas |
| Misión | Unidad pedagógico-creativa de producción |
| Evento de producción | Acción creativa central dentro de una misión |
| Ruta mínima | Núcleo necesario para sostener continuidad, evidencia y reflexión |
| Zona de libertad creativa | Espacio de elección, variación o reinterpretación |
| Herramienta externa | Herramienta usada fuera de la app sin conexión automática |
| Herramienta de IA externa | Herramienta externa usada mediante prompt sugerido y decisión humana |
| Referencia externa | Enlace o recurso declarado por la persona, sin importación automática |
| Gate humano | Punto de decisión explícita humana |
| Evidencia | Rastro contextualizado del proceso, producto, decisión o reflexión |
| Portafolio vivo | Memoria formativa acumulativa, no carpeta pasiva |
| Transferencia | Estado documentado para continuidad futura |

---

## 4. Actores sintéticos base

### 4.1 Estudiante de escuela superior

**Rol:** aprendiz creador guiado.  
**Necesita:** claridad, estructura, ejemplos, apoyo docente cercano y criterios visibles.  
**Riesgo:** completar pasos sin comprender decisiones.  
**Clave UX:** instrucciones claras, actividades concretas, reflexión accesible y libertad creativa delimitada.

### 4.2 Estudiante universitario

**Rol:** creador-investigador con mayor autonomía.  
**Necesita:** profundidad conceptual, justificación de herramientas, referencias, crítica y posibilidad de productos alternativos.  
**Riesgo:** dispersión, sofisticación sin trazabilidad o uso opaco de herramientas externas.  
**Clave UX:** libertad estructurada, criterios de rigor, registro de decisiones y portafolio argumentado.

### 4.3 Docente facilitador

**Rol:** acompañante pedagógico, crítico, técnico, ético y curatorial.  
**Necesita:** entender avance sin invadir privacidad local-first.  
**Riesgo:** producir por el estudiante o depender de datos no compartidos.  
**Clave UX:** guías de intervención, señales de alarma, export/import local y criterios de apoyo sin sustitución.

### 4.4 Persona curadora de proceso

**Rol:** organiza evidencias, decisiones, reflexiones y narrativa de proceso.  
**Necesita:** distinguir producto, evidencia, reflexión, referencia externa y documento canónico.  
**Riesgo:** convertir portafolio en acumulación de archivos.  
**Clave UX:** tipologías, vínculos, criterios de selección y narrativa de proceso.

### 4.5 Persona revisora funcional

**Rol:** revisa coherencia, alcance, deuda y cumplimiento de guardrails.  
**Necesita:** trazabilidad de decisiones, límites de fase y lenguaje claro.  
**Riesgo:** confundir revisión funcional con validación empírica.  
**Clave UX:** checklists, criterios y advertencias de fase.

### 4.6 Coordinación o continuidad documental

**Rol:** preserva estado del proceso entre sesiones o fases.  
**Necesita:** saber qué se completó, qué falta, qué deuda existe y qué no está autorizado.  
**Riesgo:** perder continuidad o activar fases futuras prematuramente.  
**Clave UX:** transferencia clara, deuda registrada y próximos pasos delimitados.

---

## 5. Tipos funcionales de misión usados en los recorridos

Los recorridos no asumen una lista fija de misiones. Usan tipos funcionales de misión v0.6:

1. Misión de contrato ético-creativo.
2. Misión de exploración divergente.
3. Misión de enfoque y selección.
4. Misión de diseño conceptual, narrativo o investigativo.
5. Misión de diseño de medio, mundo o forma.
6. Misión de producción de componentes.
7. Misión de prototipo integrador.
8. Misión de revisión e iteración.
9. Misión de curaduría y portafolio.
10. Misión de presentación, publicación controlada o transferencia.

Las nueve misiones heredadas de v0.3.0 pueden mapearse a estos tipos, pero no son el canon cerrado de v0.6.

---

## 6. Plantilla de recorrido sintético

Cada recorrido se describe con la siguiente estructura:

- **Actor sintético**
- **Contexto**
- **Tipo de misión o secuencia**
- **Objetivo del recorrido**
- **Ruta mínima**
- **Zona de libertad creativa**
- **Herramientas asociadas**
- **Asistencia docente**
- **Referencias externas posibles**
- **Secuencia del recorrido**
- **Gates humanos**
- **Evidencias generadas**
- **Aporte al portafolio**
- **Riesgos funcionales**
- **Deuda derivada**

---

## 7. Recorrido sintético 1 · Estudiante de escuela superior crea una historia multimedia guiada

### 7.1 Actor sintético

Estudiante de escuela superior con experiencia limitada en herramientas creativas digitales.

### 7.2 Contexto

Participa en un taller donde debe crear una historia multimedia breve con apoyo de herramientas digitales y prompts sugeridos.

### 7.3 Tipo de misión o secuencia

- contrato ético-creativo;
- exploración divergente;
- enfoque y selección;
- diseño narrativo;
- producción de componentes;
- prototipo integrador;
- curaduría;
- presentación.

### 7.4 Objetivo del recorrido

Producir una historia multimedia básica con evidencia de decisiones humanas, declaración de herramientas y reflexión ética.

### 7.5 Ruta mínima

1. Definir reglas éticas personales.
2. Seleccionar tema, audiencia y mensaje.
3. Crear estructura narrativa básica.
4. Producir componentes visuales o sonoros.
5. Integrar prototipo.
6. Revisar privacidad, créditos y declaración de herramientas.
7. Presentar o transferir resultado.

### 7.6 Zona de libertad creativa

La persona puede escoger tema, personaje, estilo visual, tono, herramienta de producción y forma de presentación.

### 7.7 Herramientas asociadas

- formulario local;
- plantilla narrativa;
- herramienta externa de presentación;
- grabadora o editor externo;
- herramienta de IA externa opcional mediante prompt sugerido;
- checklist de curaduría.

### 7.8 Asistencia docente

El docente:

- aclara instrucciones;
- ayuda a delimitar el tema;
- recuerda que la decisión humana es obligatoria;
- revisa señales de alarma éticas;
- acompaña la curaduría final sin producir por el estudiante.

### 7.9 Referencias externas posibles

- enlace a documento de trabajo;
- enlace a conversación externa con chatbot, si la persona decide registrarlo;
- enlace a carpeta de recursos;
- enlace a presentación externa.

### 7.10 Secuencia del recorrido

1. La persona entra a la misión de contrato ético-creativo.
2. El sistema presenta pregunta guía y actividad.
3. La persona escribe tres principios propios.
4. El docente pregunta cómo se aplicarán esos principios.
5. La persona registra decisión ética.
6. La persona pasa a exploración divergente.
7. El sistema ofrece preguntas guía y un prompt sugerido.
8. La persona decide usar o no una herramienta externa.
9. Si usa una herramienta externa, copia el prompt y decide qué compartir.
10. La persona trae de vuelta solo las ideas que considera útiles.
11. La persona selecciona tema y audiencia.
12. La persona produce estructura narrativa.
13. La persona crea componentes visuales o sonoros.
14. La persona registra herramientas y decisiones.
15. La persona arma prototipo.
16. Recibe feedback de pares o docente.
17. La persona decide qué cambiar.
18. La persona cura evidencias para portafolio.
19. La persona confirma declaración de herramientas y reflexión.
20. La persona transfiere el estado final.

### 7.11 Gates humanos

- confirmación de reglas éticas;
- selección de tema;
- aprobación de estructura;
- decisión sobre herramientas;
- aceptación o rechazo de feedback;
- selección de evidencias;
- transferencia final.

### 7.12 Evidencias generadas

- manifiesto ético;
- logline o mensaje central;
- estructura narrativa;
- registro de herramientas;
- prompt usado, si aplica;
- producto parcial;
- feedback recibido;
- decisión de cambio;
- reflexión final.

### 7.13 Aporte al portafolio

El portafolio recibe una narrativa de proceso guiada: intención, decisiones, componentes, revisión y reflexión.

### 7.14 Riesgos funcionales

- seguir instrucciones sin apropiación;
- usar herramienta externa sin registrar decisión;
- presentar contenido externo como propio sin atribución;
- entender el portafolio como carpeta final.

### 7.15 Deuda derivada

Definir ejemplos concretos de libertad creativa adecuada para escuela superior.

---

## 8. Recorrido sintético 2 · Estudiante universitario desarrolla proyecto de investigación-creación

### 8.1 Actor sintético

Estudiante universitario que trabaja un proyecto creativo, crítico o investigativo con mayor autonomía.

### 8.2 Contexto

Debe producir un artefacto de investigación-creación que dialogue con un problema, marco conceptual o pregunta disciplinaria.

### 8.3 Tipo de misión o secuencia

- exploración divergente;
- enfoque y selección;
- diseño conceptual o investigativo;
- diseño de medio o forma;
- producción de componentes;
- revisión e iteración;
- curaduría y portafolio;
- transferencia.

### 8.4 Objetivo del recorrido

Construir una propuesta creativa o investigativa con trazabilidad de decisiones, referencias externas, justificación metodológica y reflexión crítica.

### 8.5 Ruta mínima

1. Formular pregunta o problema.
2. Explorar posibilidades conceptuales.
3. Seleccionar enfoque.
4. Justificar medio, herramienta y método.
5. Producir componente o prototipo.
6. Revisar desde criterios críticos.
7. Curar evidencia y narrativa de proceso.
8. Transferir estado y deuda.

### 8.6 Zona de libertad creativa

Puede elegir forma de artefacto, marco conceptual, medio, herramienta, tipo de evidencia, modo de presentación y nivel de experimentación.

### 8.7 Herramientas asociadas

- documento externo de trabajo;
- mapa conceptual;
- bibliografía o referencias;
- herramienta creativa externa;
- herramienta de IA externa opcional para contraste, no sustitución;
- plantilla de decisión humana;
- portafolio local.

### 8.8 Asistencia docente

El docente funciona como mentor y contraparte crítica:

- pregunta por la pertinencia del enfoque;
- exige claridad metodológica;
- pide justificar herramientas;
- ayuda a distinguir referencia, evidencia y producto;
- revisa si la reflexión sostiene agencia humana.

### 8.9 Referencias externas posibles

- bibliografía;
- documento colaborativo;
- carpeta de materiales;
- conversación con chatbot usada como apoyo exploratorio;
- prototipo externo;
- notas de clase.

### 8.10 Secuencia del recorrido

1. La persona formula una pregunta creativa o investigativa.
2. El sistema ofrece campos para propósito, contexto y límites.
3. La persona registra referencias iniciales.
4. El sistema ofrece preguntas de exploración.
5. La persona puede usar un prompt sugerido en herramienta externa.
6. La persona decide qué ideas externas conserva.
7. La persona selecciona enfoque.
8. La persona justifica por qué ese enfoque es pertinente.
9. El docente formula preguntas críticas.
10. La persona ajusta alcance o método.
11. La persona produce componente o prototipo.
12. La persona registra herramienta, referencia y decisión.
13. Recibe revisión docente o de pares.
14. La persona decide cambios.
15. La persona selecciona evidencias para portafolio.
16. La persona escribe reflexión crítica.
17. La persona transfiere estado, deuda y próximos pasos.

### 8.11 Gates humanos

- delimitación de pregunta;
- selección de enfoque;
- decisión metodológica;
- uso de herramienta externa;
- aceptación de feedback;
- curaduría de evidencia;
- transferencia.

### 8.12 Evidencias generadas

- pregunta;
- mapa de posibilidades;
- justificación de enfoque;
- referencia externa contextualizada;
- prototipo o componente;
- registro de herramienta;
- reflexión crítica;
- deuda conceptual.

### 8.13 Aporte al portafolio

El portafolio muestra no solo producto, sino posición autoral, referencias, método, decisiones y evolución.

### 8.14 Riesgos funcionales

- exceso de libertad sin trazabilidad;
- registro insuficiente de referencias;
- dependencia acrítica de herramienta externa;
- confundir sofisticación con claridad.

### 8.15 Deuda derivada

Definir criterios universitarios de profundidad, rigor, originalidad y trazabilidad sin convertir v0.6 en rúbrica final.

---

## 9. Recorrido sintético 3 · Docente facilita una misión sin romper local-first

### 9.1 Actor sintético

Docente que acompaña a un grupo de estudiantes.

### 9.2 Contexto

El docente necesita orientar el trabajo, revisar avance y apoyar estudiantes, pero la app no centraliza automáticamente datos ni permite vigilancia.

### 9.3 Tipo de misión o secuencia

Transversal a cualquier misión.

### 9.4 Objetivo del recorrido

Mostrar cómo la asistencia docente opera como componente funcional sin sustituir al estudiante ni romper privacidad.

### 9.5 Ruta mínima

1. Preparar misión.
2. Aclarar herramientas permitidas.
3. Acompañar actividad.
4. Observar señales de alarma.
5. Formular preguntas.
6. Revisar evidencia compartida por decisión humana.
7. Orientar continuidad.

### 9.6 Zona de libertad creativa

El docente puede adaptar ejemplos, ofrecer rutas alternativas y proponer herramientas institucionales, sin imponer producto único.

### 9.7 Herramientas asociadas

- guía de misión;
- checklist docente;
- rúbrica preliminar;
- ejemplos;
- export/import JSON por decisión humana;
- espacio externo de entrega, si aplica.

### 9.8 Referencias externas posibles

- carpeta institucional;
- guía del curso;
- presentación docente;
- ejemplos compartidos;
- criterios de entrega.

### 9.9 Secuencia del recorrido

1. El docente revisa propósito y tipo de misión.
2. Identifica herramientas sugeridas.
3. Ajusta instrucciones al grupo.
4. Presenta límites de privacidad y uso de herramientas externas.
5. Durante la misión, observa dudas.
6. Formula preguntas orientadoras.
7. Ayuda técnicamente sin producir por estudiantes.
8. Señala riesgos éticos o de atribución.
9. Pide a estudiantes registrar decisión humana.
10. Al cierre, revisa evidencias compartidas por los estudiantes.
11. Orienta iteración o transferencia.
12. Registra deuda pedagógica o funcional.

### 9.10 Gates humanos

- decisión docente sobre adaptación;
- decisión estudiantil sobre producción;
- decisión estudiantil sobre evidencia compartida;
- decisión de continuidad.

### 9.11 Evidencias generadas

- checklist docente;
- señales de alarma;
- ajustes de misión;
- feedback;
- decisión de iteración;
- transferencia grupal, si aplica.

### 9.12 Aporte al portafolio

El docente no agrega evidencia por el estudiante. Puede orientar qué evidencias podrían ser significativas.

### 9.13 Riesgos funcionales

- invadir privacidad;
- producir por el estudiante;
- imponer una interpretación única;
- convertir la app en sistema de vigilancia.

### 9.14 Deuda derivada

Definir patrones de asistencia docente por tipo de misión y nivel educativo.

---

## 10. Recorrido sintético 4 · Curaduría de portafolio vivo

### 10.1 Actor sintético

Persona estudiante o curadora de proceso que organiza evidencias.

### 10.2 Contexto

Hay productos, decisiones, referencias externas, reflexiones y versiones acumuladas. La persona necesita convertir acumulación en narrativa de proceso.

### 10.3 Tipo de misión o secuencia

- curaduría y portafolio;
- reflexión protegida;
- transferencia.

### 10.4 Objetivo del recorrido

Distinguir producto, evidencia, reflexión, referencia externa y narrativa de proceso.

### 10.5 Ruta mínima

1. Revisar materiales registrados.
2. Seleccionar evidencias.
3. Contextualizar cada evidencia.
4. Vincular decisiones.
5. Escribir narrativa.
6. Confirmar transferencia.

### 10.6 Zona de libertad creativa

La persona puede organizar el portafolio por cronología, decisiones, productos, aprendizajes, herramientas, problemas o iteraciones.

### 10.7 Herramientas asociadas

- plantilla de portafolio;
- tipología de evidencias;
- referencias externas;
- reflexión;
- checklist de privacidad;
- prompt sugerido externo opcional para ordenar narrativa.

### 10.8 Asistencia docente

El docente puede ayudar a preguntar:

- ¿por qué esta evidencia importa?
- ¿qué decisión muestra?
- ¿qué cambió después?
- ¿qué no debe compartirse?
- ¿qué falta para transferir?

### 10.9 Secuencia del recorrido

1. El sistema muestra elementos registrados localmente.
2. La persona marca candidatos a evidencia.
3. El sistema presenta categorías de evidencia.
4. La persona clasifica y contextualiza.
5. La persona decide si incluye referencias externas.
6. La persona revisa privacidad y acceso.
7. La persona vincula evidencias con decisiones.
8. La persona escribe narrativa de proceso.
9. El docente puede comentar la claridad de la selección.
10. La persona confirma portafolio parcial o curado.
11. El portafolio alimenta transferencia.

### 10.10 Gates humanos

- selección de evidencia;
- inclusión de referencia externa;
- confirmación de narrativa;
- transferencia.

### 10.11 Evidencias generadas

- selección de evidencias;
- criterios de inclusión;
- narrativa de proceso;
- decisión sobre referencias externas;
- reflexión de aprendizaje.

### 10.12 Aporte al portafolio

Este recorrido produce el portafolio como memoria viva, no como repositorio pasivo.

### 10.13 Riesgos funcionales

- incluir enlaces sensibles;
- confundir referencia externa con evidencia suficiente;
- omitir contexto humano;
- sobrecargar el portafolio.

### 10.14 Deuda derivada

Definir estructura de portafolio vivo y estados de evidencia.

---

## 11. Recorrido sintético 5 · Revisión e iteración con feedback humano y herramienta externa opcional

### 11.1 Actor sintético

Estudiante de escuela superior o universidad que ya produjo un prototipo o componente.

### 11.2 Contexto

Tiene una versión inicial y necesita mejorarla.

### 11.3 Tipo de misión o secuencia

- revisión e iteración;
- producción de componentes;
- prototipo integrador;
- curaduría.

### 11.4 Objetivo del recorrido

Mostrar cómo la revisión no sustituye agencia humana y cómo la iteración se convierte en evidencia.

### 11.5 Ruta mínima

1. Revisar criterios.
2. Recibir feedback.
3. Comparar recomendaciones.
4. Decidir cambios.
5. Producir iteración.
6. Registrar evidencia.

### 11.6 Zona de libertad creativa

La persona puede aceptar, adaptar o rechazar feedback, siempre que documente el criterio.

### 11.7 Herramientas asociadas

- checklist;
- rúbrica preliminar;
- feedback docente;
- feedback de pares;
- herramienta externa opcional;
- registro de versión.

### 11.8 Asistencia docente

El docente ayuda a distinguir entre:

- error técnico;
- problema de claridad;
- decisión estética;
- criterio ético;
- oportunidad creativa.

### 11.9 Secuencia del recorrido

1. La persona abre una versión inicial.
2. El sistema ofrece criterios de revisión.
3. La persona solicita feedback docente o de pares.
4. La persona puede usar prompt externo de revisión.
5. La persona compara recomendaciones.
6. La persona decide qué cambios acepta.
7. La persona registra por qué rechaza otros cambios.
8. La persona produce una nueva versión.
9. La persona marca la iteración como evidencia.
10. La persona actualiza portafolio o prototipo.

### 11.10 Gates humanos

- solicitud de feedback;
- aceptación/rechazo de recomendación;
- confirmación de versión;
- selección de evidencia.

### 11.11 Evidencias generadas

- feedback recibido;
- matriz de cambios;
- decisión humana;
- versión anterior y nueva;
- reflexión sobre mejora.

### 11.12 Aporte al portafolio

La iteración muestra aprendizaje, criterio y evolución.

### 11.13 Riesgos funcionales

- tratar feedback como mandato;
- borrar decisiones creativas legítimas;
- aceptar recomendaciones externas sin criterio;
- perder versiones.

### 11.14 Deuda derivada

Definir comparación funcional de versiones sin arquitectura técnica final.

---

## 12. Recorrido sintético 6 · Transferencia de continuidad entre sesiones

### 12.1 Actor sintético

Persona estudiante, docente o coordinadora que debe dejar listo el proceso para retomarlo.

### 12.2 Contexto

La sesión termina, el proceso no está cerrado o el documento debe continuar luego.

### 12.3 Tipo de misión o secuencia

- presentación, publicación controlada o transferencia;
- seguridad de fase;
- trazabilidad longitudinal.

### 12.4 Objetivo del recorrido

Preservar continuidad sin convertir transferencia en cierre definitivo.

### 12.5 Ruta mínima

1. Revisar estado actual.
2. Identificar documentos, productos o misiones activas.
3. Registrar decisiones.
4. Registrar deuda.
5. Confirmar próximos pasos.
6. Exportar o guardar localmente, si aplica.

### 12.6 Zona de libertad creativa

La transferencia puede organizarse por misión, por producto, por decisión, por portafolio, por deuda o por próxima acción.

### 12.7 Herramientas asociadas

- plantilla de transferencia;
- export JSON;
- documento externo declarado;
- checklist de fase;
- portafolio.

### 12.8 Asistencia docente

El docente puede ayudar a distinguir:

- lo completado;
- lo que requiere iteración;
- lo que es deuda;
- lo que no pertenece a la fase actual.

### 12.9 Secuencia del recorrido

1. El sistema muestra estado registrado.
2. La persona revisa misión o proceso.
3. La persona identifica evidencias y productos relevantes.
4. La persona registra deuda.
5. La persona revisa referencias externas.
6. La persona confirma qué puede transferirse.
7. La persona exporta o guarda según el protocolo.
8. El siguiente ciclo puede retomar desde el estado transferido.

### 12.10 Gates humanos

- confirmación de estado;
- selección de deuda;
- decisión de exportar;
- decisión de continuidad.

### 12.11 Evidencias generadas

- resumen de continuidad;
- lista de deuda;
- próximos pasos;
- estado transferido;
- advertencias de fase.

### 12.12 Aporte al portafolio

La transferencia preserva memoria del proceso y evita pérdida de sentido.

### 12.13 Riesgos funcionales

- confundir transferencia con aprobación final;
- activar arquitectura técnica prematuramente;
- perder trazabilidad;
- exportar referencias sensibles sin revisión.

### 12.14 Deuda derivada

Definir formatos de transferencia por actor y tipo de misión.

---

## 13. Matriz comparativa de recorridos

| Recorrido | Actor principal | Tipo de misión dominante | Gate central | Riesgo principal |
|---|---|---|---|---|
| Historia multimedia guiada | Estudiante escuela superior | Secuencia creativa guiada | Decisión de producto y evidencia | Cumplir pasos sin apropiación |
| Investigación-creación | Estudiante universitario | Diseño conceptual / producción crítica | Decisión metodológica | Libertad sin trazabilidad |
| Facilitación docente | Docente | Transversal | Apoyo sin sustitución | Invadir privacidad o producir por estudiante |
| Curaduría de portafolio | Estudiante / curador | Curaduría y portafolio | Selección de evidencia | Portafolio como carpeta |
| Revisión e iteración | Estudiante | Revisión e iteración | Aceptar/rechazar feedback | Feedback como mandato |
| Transferencia | Estudiante / docente / coordinación | Transferencia | Confirmar estado | Cierre indebido |

---

## 14. Hallazgos funcionales preliminares

### 14.1 La misión necesita doble lectura

Cada misión debe poder leerse como:

1. unidad concreta para el estudiante;
2. tipo funcional adaptable para diseño futuro.

### 14.2 La asistencia docente debe ser parametrizable

No basta decir “el docente ayuda”. Hay que especificar tipo, momento y límite de intervención.

### 14.3 La libertad creativa necesita interfaz conceptual

La libertad creativa no debe quedar implícita. Debe aparecer como zona funcional clara.

### 14.4 Las referencias externas requieren advertencias

Los enlaces externos son útiles, pero pueden contener datos sensibles, permisos frágiles o contenido cambiante.

### 14.5 La iteración debe ser evidencia positiva

Volver atrás no debe presentarse como fallo. Debe poder registrarse como aprendizaje.

### 14.6 Universidad requiere profundidad distinta

Los recorridos universitarios necesitan justificación, crítica, referencias y posicionamiento autoral.

### 14.7 Escuela superior requiere claridad y protección

Los recorridos de escuela superior necesitan instrucciones concretas, ejemplos, acompañamiento y reflexión accesible.

---

## 15. Implicaciones para requisitos funcionales preliminares

Los recorridos sugieren que futuros requisitos deberán contemplar:

- estructura configurable de misión;
- rutas mínimas;
- zonas de libertad creativa;
- tipos de herramienta;
- campos de referencia externa;
- estados de misión;
- gates humanos;
- selección de evidencia;
- portafolio vivo;
- asistencia docente;
- export/import local;
- advertencias de privacidad;
- diferenciación por nivel educativo;
- registro de iteración;
- transferencia de continuidad.

---

## 16. Deuda funcional y UX derivada

| Código | Deuda | Prioridad | Documento futuro sugerido |
|---|---|---:|---|
| DFUX-v0.6-REC-001 | Convertir recorridos sintéticos en requisitos funcionales preliminares | Alta | Requisitos Funcionales |
| DFUX-v0.6-REC-002 | Definir variantes de misión por nivel educativo | Alta | Requisitos / Criterios |
| DFUX-v0.6-REC-003 | Precisar intervención docente por tipo de misión | Alta | Criterios de Asistencia Docente |
| DFUX-v0.6-REC-004 | Diseñar campos para referencias externas declaradas | Alta | Requisitos / Seguridad v0.7 |
| DFUX-v0.6-REC-005 | Definir estados funcionales de misión | Alta | Requisitos Funcionales |
| DFUX-v0.6-REC-006 | Definir estructura de portafolio vivo | Alta | Requisitos / Portafolio |
| DFUX-v0.6-REC-007 | Diseñar criterios de evidencia por tipo de recorrido | Alta | Requisitos / Evaluación futura |
| DFUX-v0.6-REC-008 | Diferenciar completitud, calidad, curaduría y transferencia | Media | Requisitos |
| DFUX-v0.6-REC-009 | Definir advertencias UX para herramientas y enlaces externos | Alta | Seguridad v0.7 |
| DFUX-v0.6-REC-010 | Crear recorridos adicionales por disciplina o contexto institucional | Media | Iteraciones futuras |
| DFUX-v0.6-REC-011 | Precisar cómo documentar iteraciones sin arquitectura técnica final | Media | Requisitos / v0.7 |
| DFUX-v0.6-REC-012 | Revisar compatibilidad de recorridos con mapa funcional y modelo UX | Alta | Auditoría documental |

---

## 17. Exclusiones explícitas

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

## 18. Criterios de aprobación

Este documento podrá aprobarse si:

- presenta recorridos sintéticos claros;
- no usa datos reales;
- no implica validación con personas;
- respeta local-first;
- no presupone IA embebida;
- usa herramientas de IA externas solo como apoyo opcional mediante prompts sugeridos;
- integra misión como unidad pedagógico-creativa;
- distingue escuela superior y universidad;
- integra asistencia docente;
- protege libertad creativa;
- reconoce herramientas y referencias externas;
- produce evidencias y aportes al portafolio;
- distingue completitud, calidad, curaduría y transferencia;
- documenta deuda funcional y UX;
- prepara requisitos funcionales preliminares.

---

## 19. Dictamen preliminar

Los recorridos sintéticos muestran que AI StoryLab 1 v0.6 debe entenderse como una red de misiones pedagógico-creativas, no como una secuencia rígida de pantallas.

La experiencia debe permitir que estudiantes de escuela superior y universidad produzcan, decidan, documenten, revisen, reflexionen y transfieran sus procesos con asistencia docente, herramientas externas controladas, referencias declaradas y portafolio vivo.

Estos recorridos no validan el diseño con personas. Funcionan como prueba conceptual interna para preparar requisitos, criterios humano-IA, accesibilidad, asistencia docente y futuras decisiones técnicas.

Este documento queda como **APROBADO** para integración canónica documental y no autoriza arquitectura técnica, implementación, validación con personas ni despliegue.
