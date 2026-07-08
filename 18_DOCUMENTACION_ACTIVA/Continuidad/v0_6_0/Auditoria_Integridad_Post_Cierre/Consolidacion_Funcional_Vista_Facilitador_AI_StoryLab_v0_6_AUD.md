# Consolidación Funcional de la Vista del Facilitador · v0.6 AUD · AI StoryLab 1

**Versión:** APROBADO  
**Tipo de documento:** Adenda de integridad funcional y UX  
**Momento metodológico:** Post cierre v0.6 · Pre apertura v0.7  
**Estado:** APROBADO POR APROBACIÓN HUMANA EXPLÍCITA  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**PR activo:** PR #21 · auditoría de integridad v0.6 y deuda vista facilitador  
**PR de referencia cerrado:** PR #20 · cierre documental condicionado de v0.6  
**Rama:** `docs/v0-6-auditoria-integridad-facilitador`  
**Ruta canónica:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Consolidacion_Funcional_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md`  
**Fecha:** 2026-07-07  
**Fecha de aprobación:** 2026-07-07  
**Zona horaria de referencia:** America/Puerto_Rico  

---

## 0. Nota de alcance

Este documento no activa v0.7.

No crea arquitectura técnica final.  
No implementa código.  
No valida con personas.  
No usa datos reales.  
No autoriza backend productivo.  
No autoriza APIs externas.  
No autoriza IA embebida.  
No autoriza despliegue.  

Su función es pagar parcialmente una deuda de integridad funcional y UX detectada post cierre de v0.6: la vista del facilitador quedó suficientemente presente como función transversal, pero insuficientemente consolidada como vista propia, rol de experiencia, familia de requisitos y riesgo futuro de seguridad y privacidad.

Este documento funciona como **corrección documental limitada post cierre v0.6**. No invalida PR #20. No reabre toda v0.6. No sustituye la auditoría. No decide arquitectura. Nombra, delimita y ordena la pieza que debe pasar limpia hacia v0.7.

---

## 1. Dictamen de entrada

La auditoría post cierre v0.6 identifica una deuda crítica:

```text
DFUX-FAC-v0.6-001 · Invisibilización parcial de la vista del facilitador heredada del MVP v0.3.
```

El pago documental mínimo exige consolidar la vista del facilitador como:

1. rol funcional diferenciado;
2. vista de experiencia propia;
3. módulo funcional conceptual;
4. familia preliminar de requisitos;
5. frontera ética contra vigilancia;
6. insumo explícito para seguridad y privacidad en v0.7.

Este documento atiende los primeros cuatro componentes y deja los componentes éticos, de trazabilidad y pre gate como documentos derivados necesarios.

---

## 2. Qué es la vista del facilitador

La **vista del facilitador** es el espacio funcional desde el cual una persona facilitadora, docente o acompañante pedagógico puede orientar, acompañar, interpretar evidencias compartidas y ofrecer retroalimentación contextualizada sin sustituir la agencia creativa del estudiante.

No es una persona dueña del proceso. No es un supervisor punitivo. No es un panel de vigilancia. No es un administrador total. Es una figura de acompañamiento con límites claros.

Definición operativa:

```text
La vista del facilitador es una experiencia funcional de acompañamiento pedagógico local-first que permite orientar misiones, observar progreso con límites, revisar evidencias compartidas, ofrecer feedback contextualizado y sostener continuidad formativa sin producir por el estudiante ni vigilarlo de manera invasiva.
```

---

## 3. Qué no es la vista del facilitador

La vista del facilitador no debe confundirse con:

| Confusión posible | Corrección documental |
|---|---|
| Dashboard de vigilancia | Debe ser vista de acompañamiento con límites de visibilidad |
| Administrador total | El facilitador no controla todo el ecosistema |
| Asistencia docente genérica | La vista tiene funciones, límites y flujos propios |
| IA tutora automática | No sustituye presencia humana ni agencia pedagógica |
| Sistema de evaluación punitiva | Debe apoyar reflexión, feedback y continuidad |
| Panel de analíticas exhaustivas | Debe evitar métricas invasivas o seguimiento continuo |
| Vista técnica de permisos | Los permisos técnicos se difieren a v0.7 |

---

## 4. Herencia del MVP v0.3

La vista del facilitador hereda del MVP v0.3 la necesidad de que el ecosistema no sea solamente una experiencia individual del estudiante. El MVP reconocía que el proceso creativo y pedagógico necesitaba mediación, guía, interpretación, feedback y continuidad.

En v0.6, esa función no desapareció. Fue absorbida por conceptos amplios:

- asistencia docente;
- acompañamiento antes, durante y después de la misión;
- curaduría;
- retroalimentación contextualizada;
- seguimiento pedagógico;
- apoyo ético y creativo;
- revisión de evidencia;
- portafolio vivo;
- rutas de apoyo.

La corrección documental consiste en recuperar el nombre funcional de esa pieza sin reducirla a una pantalla rígida ni convertirla en mecanismo de control.

---

## 5. Relación con v0.6

v0.6 cerró correctamente como fase de diseño funcional y UX. Sin embargo, la vista del facilitador quedó tratada de forma dispersa.

Este documento no dice que v0.6 fracasó. Dice que v0.6 dejó una deuda pagable antes de v0.7.

Formulación canónica:

```text
v0.6 está cerrada documentalmente, pero requiere corrección documental limitada para integrar explícitamente la vista del facilitador antes de activar v0.7.
```

La corrección se ubica en el plano de integridad funcional, no en arquitectura técnica.

---

## 6. Principio rector

La vista del facilitador debe obedecer a un principio de acompañamiento con agencia humana:

```text
El facilitador acompaña, orienta, interpreta y retroalimenta; no produce por el estudiante, no decide por el estudiante y no vigila al estudiante.
```

Este principio organiza toda la vista.

---

## 7. Funciones mínimas de la vista

La vista del facilitador debe contemplar, a nivel funcional conceptual, las siguientes capacidades:

| Código | Función | Descripción |
|---|---|---|
| FAC-FUNC-001 | Orientar misión | Ayudar a contextualizar propósito, criterios y ritmo de la misión |
| FAC-FUNC-002 | Acompañar proceso | Identificar necesidades de apoyo sin capturar más datos de los necesarios |
| FAC-FUNC-003 | Revisar evidencia compartida | Observar evidencia autorizada o registrada bajo criterios definidos |
| FAC-FUNC-004 | Ofrecer feedback | Proveer retroalimentación contextualizada, no sustitutiva |
| FAC-FUNC-005 | Sugerir rutas de apoyo | Recomendar revisión, curaduría, pausa, extensión o continuidad |
| FAC-FUNC-006 | Apoyar portafolio | Ayudar a interpretar trayectoria, evidencia y reflexión |
| FAC-FUNC-007 | Cuidar ética y ritmo | Señalar riesgos de dependencia, automatización excesiva o pérdida de agencia |
| FAC-FUNC-008 | Sostener continuidad | Ayudar a conectar misión actual, evidencias previas y próximos pasos |

---

## 8. Límites funcionales

La vista del facilitador debe tener límites desde su definición documental.

### 8.1 El facilitador puede

- orientar una misión;
- proponer preguntas guía;
- ofrecer retroalimentación contextualizada;
- sugerir rutas de apoyo;
- comentar evidencias compartidas;
- ayudar a interpretar progreso;
- apoyar curaduría de evidencias;
- identificar necesidad de pausa o revisión;
- registrar observaciones pedagógicas limitadas;
- sostener continuidad entre misiones.

### 8.2 El facilitador no puede

- producir entregables por el estudiante;
- reemplazar la decisión creativa humana;
- observar actividad privada no compartida;
- acceder a datos reales no autorizados;
- usar métricas invasivas;
- vigilar en tiempo real sin justificación pedagógica;
- convertir feedback en castigo;
- operar como administrador total;
- activar automatizaciones técnicas no autorizadas;
- usar IA embebida para evaluar o perfilar personas en esta fase.

---

## 9. Diferencia entre asistencia docente y vista del facilitador

v0.6 ya reconocía asistencia docente, pero esa noción es demasiado amplia para pagar la deuda completa.

| Aspecto | Asistencia docente | Vista del facilitador |
|---|---|---|
| Naturaleza | Función transversal | Experiencia funcional diferenciada |
| Visibilidad | Puede aparecer en múltiples documentos | Debe tener espacio propio en el mapa funcional |
| Riesgo | Puede diluir límites | Requiere permisos, visibilidad y criterios de no vigilancia |
| Relación con estudiante | Apoyo general | Acompañamiento situado en misiones, evidencias y portafolio |
| Insumo para v0.7 | Parcial | Necesario para roles, privacidad y seguridad |

Dictamen:

```text
La asistencia docente es una función amplia. La vista del facilitador es la experiencia funcional concreta que organiza esa función con límites, acciones y responsabilidades.
```

---

## 10. Modelo UX diferenciado

La experiencia del estudiante y la del facilitador deben distinguirse sin separar artificialmente el proceso pedagógico.

```text
Estudiante:
crear · decidir · experimentar · evidenciar · reflexionar · transferir

Facilitador:
orientar · acompañar · observar con límites · retroalimentar · cuidar ritmo · curar · sostener continuidad
```

La diferencia central es la agencia:

- el estudiante conserva la agencia creativa primaria;
- el facilitador sostiene condiciones de acompañamiento, interpretación y continuidad;
- la IA, cuando corresponda en fases futuras, debe quedar subordinada a decisiones humanas y criterios locales.

---

## 11. Flujos funcionales donde debe aparecer

La vista del facilitador debe incorporarse a los flujos funcionales de v0.6 como presencia diferenciada en cinco momentos.

### 11.1 Antes de la misión

Funciones posibles:

- contextualizar propósito;
- orientar criterios;
- revisar nivel de preparación;
- sugerir recursos;
- acordar límites de acompañamiento.

### 11.2 Durante la misión

Funciones posibles:

- acompañar sin interrumpir la agencia estudiantil;
- detectar necesidad de apoyo;
- formular preguntas guía;
- sugerir pausa, exploración o revisión;
- evitar sobreintervención.

### 11.3 Después de la misión

Funciones posibles:

- revisar evidencia compartida;
- ofrecer feedback contextualizado;
- apoyar reflexión;
- sugerir próximos pasos;
- identificar aprendizajes transferibles.

### 11.4 En el portafolio

Funciones posibles:

- ayudar a interpretar trayectoria;
- conectar evidencias;
- acompañar curaduría;
- distinguir producto, proceso, reflexión y transferencia.

### 11.5 En transiciones

Funciones posibles:

- apoyar decisión de continuar, revisar, pausar o cerrar;
- identificar deuda pedagógica;
- sugerir rutas de apoyo;
- sostener memoria de proceso sin vigilancia.

---

## 12. Requisitos funcionales preliminares

Esta consolidación abre una familia preliminar de requisitos funcionales.

```text
RF-FAC-v0.6-AUD-001 · El ecosistema debe contemplar una vista del facilitador como rol funcional diferenciado.
RF-FAC-v0.6-AUD-002 · La vista del facilitador debe permitir acompañamiento sin vigilancia invasiva.
RF-FAC-v0.6-AUD-003 · La vista del facilitador debe respetar local-first y privacidad por defecto.
RF-FAC-v0.6-AUD-004 · La vista del facilitador no debe permitir producir por el estudiante.
RF-FAC-v0.6-AUD-005 · La vista del facilitador debe permitir retroalimentación contextualizada.
RF-FAC-v0.6-AUD-006 · La vista del facilitador debe distinguir progreso, evidencia, reflexión y portafolio.
RF-FAC-v0.6-AUD-007 · La vista del facilitador debe poder operar con datos sintéticos o locales, no datos reales en esta fase.
RF-FAC-v0.6-AUD-008 · La vista del facilitador debe diferenciar orientación, seguimiento pedagógico, feedback y curaduría.
RF-FAC-v0.6-AUD-009 · La vista del facilitador debe registrar límites de visibilidad antes de cualquier traducción técnica.
RF-FAC-v0.6-AUD-010 · La vista del facilitador debe producir insumos explícitos para seguridad y privacidad en v0.7.
```

Estos requisitos son preliminares. No son especificaciones técnicas finales.

---

## 13. Criterios local-first aplicados al facilitador

La vista del facilitador debe respetar la orientación local-first del proyecto.

Criterios mínimos:

1. el acompañamiento debe poder conceptualizarse sin depender de backend productivo;
2. la evidencia revisada debe ser sintética, local o explícitamente compartida según fase;
3. la visibilidad debe estar limitada por diseño documental;
4. los datos reales quedan fuera de alcance en este PR;
5. cualquier sincronización, rol técnico o permiso formal queda diferido a v0.7;
6. la privacidad por defecto debe anteceder cualquier funcionalidad de seguimiento.

---

## 14. Riesgos que pasan a v0.7

Esta consolidación no resuelve arquitectura, pero sí nombra riesgos que v0.7 deberá atender.

```text
SEG-FAC-v0.7-001 · Definir límites técnicos de visibilidad del facilitador.
SEG-FAC-v0.7-002 · Definir permisos mínimos para ver, comentar, sugerir y curar.
SEG-FAC-v0.7-003 · Evitar métricas invasivas o vigilancia continua.
SEG-FAC-v0.7-004 · Registrar feedback sin capturar más datos de los necesarios.
SEG-FAC-v0.7-005 · Separar acompañamiento pedagógico de supervisión punitiva.
SEG-FAC-v0.7-006 · Definir consentimiento, control local y visibilidad contextual.
SEG-FAC-v0.7-007 · Evitar que el facilitador opere como administrador total.
SEG-FAC-v0.7-008 · Definir tratamiento de evidencias compartidas, borradores y portafolio.
```

Estos riesgos se transfieren a v0.7 como insumos, no como soluciones.

---

## 15. Impacto documental sobre v0.6

La consolidación implica una corrección documental limitada sobre v0.6.

| Área v0.6 | Impacto | Tipo de corrección |
|---|---|---|
| Mapa funcional | Añadir vista del facilitador como módulo conceptual | Adenda de integridad |
| Modelo UX | Distinguir experiencia del facilitador | Adenda de UX |
| Flujos funcionales | Insertar puntos de intervención | Ajuste funcional |
| Requisitos | Abrir familia RF-FAC-v0.6-AUD | Pago de deuda |
| Deuda UX | Registrar deuda como parcialmente pagada | Continuidad |
| Seguridad futura | Transferir riesgos a v0.7 | Insumo pre gate |

Dictamen:

```text
La vista del facilitador debe integrarse como corrección documental limitada a v0.6, sin reabrir la fase completa ni activar v0.7.
```

---

## 16. Qué queda pagado con este documento

Este documento paga parcialmente la deuda al establecer:

1. definición funcional de la vista del facilitador;
2. distinción entre vista del facilitador y asistencia docente;
3. funciones mínimas;
4. límites funcionales;
5. modelo UX diferenciado;
6. puntos de inserción en flujos;
7. familia preliminar de requisitos;
8. impacto documental sobre v0.6;
9. riesgos transferibles a v0.7.

---

## 17. Qué NO queda pagado todavía

Todavía falta documentar:

1. matriz de trazabilidad v0.3 → v0.6 → v0.7;
2. criterios específicos de no vigilancia;
3. acta pre gate de inicio v0.7;
4. decisión humana explícita sobre suficiencia del pago documental;
5. actualización final de estado de situación del PR #21.

Por tanto, este documento no cierra por sí solo la deuda completa.

---

## 18. Documentos derivados requeridos

Después de este documento se recomienda crear:

```text
Matriz_Trazabilidad_Vista_Facilitador_v0_3_v0_6_v0_7_AI_StoryLab.md
Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
Acta_Pre_Gate_Inicio_v0_7_AI_StoryLab.md
```

La matriz conecta memoria histórica.  
Los criterios de no vigilancia protegen agencia, privacidad y confianza.  
El acta pre gate decide si v0.7 puede abrirse después, en otro PR.

---

## 19. Criterios de cierre de esta consolidación

Esta consolidación puede considerarse aprobada cuando se cumplan estas condiciones:

1. aprobación humana explícita;
2. integración en PR #21 con nombre canónico;
3. reconocimiento de la vista del facilitador como corrección documental limitada v0.6;
4. aceptación de que la deuda queda parcialmente pagada, no totalmente cerrada;
5. autorización para preparar matriz de trazabilidad y criterios de no vigilancia;
6. confirmación de que v0.7 sigue sin activarse.

---

## 20. Dictamen final preliminar

La vista del facilitador debe quedar consolidada como pieza funcional explícita de AI StoryLab 1 antes de activar v0.7.

Esta consolidación permite corregir la invisibilización parcial detectada en v0.6 sin convertir el PR #21 en arquitectura técnica ni en implementación.

Dictamen:

```text
Procede integrar la vista del facilitador como corrección documental limitada post cierre v0.6. La deuda DFUX-FAC-v0.6-001 queda parcialmente pagada y requiere todavía matriz de trazabilidad, criterios de no vigilancia y acta pre gate antes de abrir v0.7.
```
