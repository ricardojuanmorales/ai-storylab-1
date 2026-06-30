# Matriz POO Conceptual SDD AI StoryLab 1 v0.4.4

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.4 - Spec-Driven Development, seguridad, privacidad y preparación responsable  
**Tipo de documento:** Matriz conceptual de Programación Orientada a Objetos para SDD  
**Estado:** Aprobada para archivo en PR #8  
**Ruta canónica propuesta:** `00_CONTROL_MAESTRO/Spec_Driven_Development/Matrices/Matriz_POO_Conceptual_SDD_AI_StoryLab_1_v0_4_4.md`  
**PR de trabajo:** #8  
**Rama:** `v0.4.4-sdd-foundation`  
**Alcance:** Documental, conceptual y preparatorio. No autoriza implementación funcional.

---

## 0. Declaración de apertura

Esta matriz define el uso conceptual inicial de Programación Orientada a Objetos, POO, dentro del marco SDD de AI StoryLab 1 v0.4.4.

En esta fase, POO no se usa para producir código, clases ejecutables, esquemas de base de datos, modelos ORM, servicios, controladores, endpoints ni arquitectura funcional.

Se usa como lenguaje de pensamiento para identificar:

```text
objetos de dominio;
responsabilidades;
límites;
relaciones;
datos permitidos;
datos prohibidos;
reglas local-first;
activadores de threat model;
condiciones de consentimiento;
criterios de bloqueo;
deuda asociada;
preguntas para specs futuras.
```

Este documento no autoriza:

```text
backend
cloud
APIs externas
autenticación
analíticas
base de datos remota
subida automática de archivos
uso de IA externa por defecto
manejo de datos reales
evaluación automática como juez final
implementación funcional
```

---

## 1. Propósito de la matriz

La Matriz POO Conceptual existe para responder a la deuda `ASTL-V044-DEBT-POO-001`.

Su propósito es proveer una estructura inicial para pensar el dominio de AI StoryLab 1 sin saltar prematuramente a implementación.

Permite que el Programador Humanista y el equipo documental puedan:

```text
nombrar objetos relevantes;
definir responsabilidades;
identificar qué datos podría contener cada objeto;
identificar qué datos no debe contener cada objeto;
detectar amenazas asociadas;
relacionar objetos con local-first;
relacionar objetos con consentimiento;
relacionar objetos con revisión humana;
definir condiciones de bloqueo;
preparar futuras specs sin producir código.
```

---

## 2. Principios de POO conceptual en AI StoryLab 1

### 2.1 POO como lenguaje documental

La POO conceptual se usa para pensar relaciones y responsabilidades, no para escribir software.

Pregunta guía:

```text
¿Qué representa este objeto en la experiencia humana, educativa, creativa o investigativa?
```

### 2.2 Responsabilidad antes que estructura técnica

Un objeto se define primero por su responsabilidad humana y documental, no por sus atributos técnicos.

Pregunta guía:

```text
¿Qué debe cuidar este objeto?
```

### 2.3 Composición antes que herencia

AI StoryLab 1 debe favorecer composición conceptual sobre jerarquías rígidas.

En vez de asumir que un usuario “es” una sola cosa, se modela como composición de:

```text
Usuario
Rol
Subjetividad
Contexto
Permisos
Consentimientos
Relaciones con evidencias
Relaciones con portafolios
Relaciones con decisiones humanas
```

### 2.4 Mínimo dato necesario

Cada objeto debe justificar todo dato que contiene.

Regla:

```text
Si un objeto no necesita un dato para cumplir su responsabilidad documentada, no debe contenerlo.
```

### 2.5 Local-first por defecto

Todo objeto que toque evidencia, reflexión, portafolio, exportación o datos debe declarar qué permanece local y qué nunca se sube automáticamente.

### 2.6 Threat model integrado

Todo objeto que pueda generar daño, exposición, pérdida de agencia, publicación indebida, evaluación indebida o uso de IA externa debe activar threat model.

### 2.7 Revisión humana como objeto de decisión

La revisión humana no es una nota al margen. Es un objeto conceptual que registra decisión, criterio, perfil, fecha, condiciones y deuda.

---

## 3. Modelo de composición inicial

El modelo de identidad, participación y permisos no debe depender de una jerarquía rígida.

Modelo conceptual inicial:

```text
Usuario
  se compone con Rol
  se compone con Subjetividad
  se sitúa en Contexto
  opera bajo Permisos
  otorga o niega Consentimientos
  crea o revisa Evidencias
  puede construir Portafolios
  puede emitir o recibir DecisionesHumanas
```

Ejemplo:

```text
Una misma persona puede operar como:
- docente en una actividad;
- investigador en otra;
- facilitador del proceso;
- revisor humano de una spec;
- usuario creador de evidencia;
- participante de una experiencia creativa.
```

Por eso, la matriz evita fijar identidades técnicas prematuras.

---

## 4. Categorías de objetos conceptuales

### 4.1 Objetos de gobernanza SDD

```text
Spec
DecisionHumana
RevisionHumana
RegistroDeuda
BitacoraSesion
TransferenciaSimetrica
WikiHumana
```

### 4.2 Objetos de identidad, rol y contexto

```text
Usuario
Rol
Subjetividad
Contexto
Permiso
Consentimiento
```

### 4.3 Objetos de experiencia creativa y educativa

```text
ActividadCreativa
Evidencia
Reflexion
Portafolio
Competencia
Rubrica
Retroalimentacion
```

### 4.4 Objetos de datos, seguridad y privacidad

```text
Dato
Metadato
ClasificacionDato
PoliticaLocalFirst
ThreatModel
Riesgo
Mitigacion
Exportacion
RepositorioLocal
```

### 4.5 Objetos de IA conceptual

```text
UsoIA
AsistenciaIA
RestriccionIA
RevisionIA
```

Estos objetos son conceptuales. No autorizan integración con IA.

---

## 5. Matriz inicial de objetos conceptuales

| Objeto conceptual | Propósito | Responsabilidades | No debe hacer | Riesgo inicial |
|---|---|---|---|---|
| Usuario | Representar una persona que interactúa con el ecosistema | Participar, crear, revisar, decidir, consentir | Ser reducido a un único rol fijo | Alto si contiene datos reales |
| Rol | Describir función contextual | Definir capacidades situadas | Sustituir identidad humana | Medio |
| Subjetividad | Identificar posición educativa o investigativa | Distinguir estudiante, docente, investigador u otra subjetividad | Convertirse en etiqueta rígida | Medio/alto |
| Contexto | Situar una interacción | Definir marco educativo, creativo o investigativo | Recopilar datos excesivos | Medio |
| Permiso | Delimitar acciones autorizadas | Expresar qué puede hacerse | Habilitar vigilancia o control oculto | Alto |
| Consentimiento | Registrar autorización situada | Explicar acción, datos, propósito, riesgos y alternativas | Ser genérico o permanente por defecto | Alto |
| Spec | Documentar propuesta antes de implementar | Definir propósito, alcance, datos, riesgos, aceptación y decisión | Autorizar código por sí sola | Medio/alto |
| DecisionHumana | Registrar una decisión con criterio humano | Aprobar, condicionar, diferir o bloquear | Ser reemplazada por automatización | Alto |
| RevisionHumana | Documentar evaluación responsable | Revisar specs, riesgos, evidencias o decisiones sensibles | Ser decorativa | Alto |
| Evidencia | Representar producción creativa o educativa | Ser revisable, editable, curable, protegida | Publicarse o evaluarse automáticamente | Alto |
| Reflexion | Representar pensamiento metacognitivo o personal | Permitir expresión, revisión y retiro | Convertirse en dato administrativo | Alto |
| Portafolio | Organizar evidencias y reflexiones | Sostener curaduría, proceso y agencia | Ser repositorio muerto o publicación automática | Alto |
| ActividadCreativa | Representar experiencia de creación | Sostener juego, exploración, iteración y sentido | Volverse flujo rígido | Medio/alto |
| Competencia | Nombrar capacidades formativas | Orientar evidencias y reflexión | Usarse como etiqueta reduccionista | Medio |
| Rubrica | Ofrecer criterios formativos | Apoyar revisión humana | Ser juez automático final | Alto |
| Retroalimentacion | Acompañar mejora | Sugerir, orientar, dialogar | Convertirse en sentencia automática | Alto |
| Dato | Representar unidad de información | Ser clasificado, justificado y minimizado | Existir sin propósito | Alto |
| Metadato | Describir información contextual | Aclarar fecha, versión, relación o autoría cuando sea necesario | Identificar o vigilar sin visibilidad | Medio/alto |
| ClasificacionDato | Definir sensibilidad del dato | Distinguir ficticio, sintético, anonimizado, personal, sensible | Ocultar riesgo real | Alto |
| PoliticaLocalFirst | Regir control local | Definir qué permanece local, qué se exporta y qué se bloquea | Autorizar almacenamiento remoto | Alto |
| ThreatModel | Identificar amenazas | Proteger activos, documentar mitigaciones y riesgos residuales | Ser omitido en specs sensibles | Alto |
| Riesgo | Nombrar posibilidad de daño | Clasificar probabilidad, impacto y bloqueo | Minimizar amenazas | Medio/alto |
| Mitigacion | Reducir riesgo | Documentar controles, condiciones y límites | Simular seguridad sin evidencia | Medio/alto |
| Exportacion | Sacar contenido del entorno local | Requerir intención humana, revisión y consentimiento | Automatizar salida | Alto/bloqueante |
| RepositorioLocal | Representar persistencia local futura | Mantener control del usuario | Convertirse en base remota | Alto |
| UsoIA | Representar posible uso de IA | Declarar límites y condiciones | Activar IA externa por defecto | Bloqueante |
| AsistenciaIA | Acompañar sin decidir | Sugerir, organizar o estimular reflexión | Juzgar valor humano | Alto |
| RestriccionIA | Delimitar uso de IA | Bloquear usos indebidos | Ser ignorada por diseño | Alto |
| RegistroDeuda | Documentar pendientes | Mantener memoria de bloqueos y condiciones | Cerrarse prematuramente | Medio/alto |
| BitacoraSesion | Registrar decisiones de sesión | Conservar continuidad | Sustituir documentos canónicos | Medio |
| TransferenciaSimetrica | Registrar impacto entre perfiles/cartapacios | Mantener coherencia documental | Quedar desconectada de decisiones | Medio/alto |
| WikiHumana | Traducir decisiones a lenguaje accesible | Explicar al usuario qué ocurre y qué no | Simplificar en exceso riesgos | Medio |

---

## 6. Matriz de datos permitidos y prohibidos por objeto

| Objeto | Puede contener | No debe contener en v0.4.4 | Requiere consentimiento | Activa threat model |
|---|---|---|---|---|
| Usuario | identificador ficticio o conceptual | datos reales, correo, nombre legal, credenciales | Sí si hay datos reales futuros | Sí |
| Rol | nombre de rol contextual | jerarquías rígidas de identidad | No por defecto | Medio |
| Subjetividad | categoría educativa o investigativa | diagnóstico, perfil sensible, etiqueta fija | Sí si afecta menores o evaluación | Sí |
| Contexto | descripción educativa o creativa mínima | ubicación sensible, datos institucionales reales innecesarios | Según contexto | Sí si hay datos reales |
| Consentimiento | acción, propósito, alcance, decisión | consentimiento genérico permanente | Sí | Sí |
| Spec | propósito, alcance, riesgos, decisión | código funcional, secretos, datos reales | Según spec | Sí si hay activadores |
| Evidencia | descripción o referencia local conceptual | archivo real sensible, publicación automática | Sí si se comparte/exporta | Sí |
| Reflexion | texto ficticio o estructura conceptual | reflexión personal real sin política | Sí | Sí |
| Portafolio | estructura conceptual, lista local futura | publicación pública automática | Sí si se comparte | Sí |
| Dato | clasificación y justificación | dato real no justificado | Sí si real/sensible | Sí |
| Metadato | fecha o versión mínima conceptual | rastreo oculto, analíticas | Según contexto | Sí |
| ThreatModel | amenazas, mitigaciones, riesgos | datos reales innecesarios | No por defecto | Es el instrumento |
| Exportacion | descripción de salida manual | salida automática o envío oculto | Sí | Sí |
| RepositorioLocal | reglas conceptuales de persistencia local | backend, nube, base remota | Según datos | Sí |
| UsoIA | descripción conceptual de asistencia | envío real a IA externa | Sí si futura IA externa | Sí |
| RevisionHumana | decisión, perfil, fecha, justificación | datos personales innecesarios del revisor | Según contexto | Medio |
| RegistroDeuda | ID, descripción, estado, bloqueo | datos sensibles de personas | No por defecto | Medio |
| WikiHumana | explicación accesible | detalles sensibles, datos reales | Según contenido | Medio |

---

## 7. Relaciones conceptuales iniciales

| Relación | Tipo | Regla |
|---|---|---|
| Usuario - Rol | composición contextual | Un usuario puede tener múltiples roles según situación. |
| Usuario - Subjetividad | composición situada | Una persona puede ocupar subjetividades distintas. |
| Usuario - Consentimiento | asociación explícita | Toda autorización debe ser situada. |
| Usuario - Evidencia | autoría o relación contextual | La evidencia permanece bajo control local. |
| Usuario - Portafolio | curaduría | El usuario decide qué entra, sale o se comparte. |
| Spec - ThreatModel | dependencia condicional | Obligatorio si hay activadores. |
| Spec - PoliticaLocalFirst | dependencia obligatoria | Toda spec de datos/evidencias/exportación debe responder local-first. |
| Spec - DecisionHumana | cierre | Toda spec debe terminar aprobada, condicionada, diferida o bloqueada. |
| DecisionHumana - RevisionHumana | justificación | Decisiones sensibles requieren revisión humana. |
| Evidencia - Reflexion | asociación opcional | No toda evidencia exige reflexión obligatoria. |
| Evidencia - Portafolio | composición curatorial | El portafolio selecciona evidencias, no las captura automáticamente. |
| Portafolio - Exportacion | acción explícita | Toda exportación requiere intención humana. |
| Exportacion - Consentimiento | dependencia | Salir del entorno local requiere explicación y autorización cuando aplique. |
| UsoIA - Consentimiento | dependencia estricta | IA externa requiere consentimiento explícito. |
| UsoIA - ThreatModel | dependencia estricta | IA externa requiere threat model específico. |
| RegistroDeuda - Spec | trazabilidad | Toda deuda debe vincularse con decisiones y documentos. |
| WikiHumana - PoliticaLocalFirst | traducción | Las reglas complejas deben explicarse en lenguaje humano. |
| WikiHumana - ThreatModel | traducción | Riesgos relevantes deben explicarse sin tecnicismo excesivo. |

---

## 8. Objetos con bloqueo automático

Un objeto conceptual debe bloquear la spec si requiere o implica:

```text
backend;
cloud;
APIs externas;
autenticación;
analíticas;
base de datos remota;
subida automática;
publicación automática;
IA externa por defecto;
manejo de datos reales;
datos de menores sin política reforzada;
evaluación automática como juez final;
implementación funcional.
```

### 8.1 Objetos de mayor riesgo

```text
Usuario
Consentimiento
Evidencia
Reflexion
Portafolio
Exportacion
UsoIA
ThreatModel
RepositorioLocal
Rubrica
Retroalimentacion
```

Estos objetos no son peligrosos por existir conceptualmente. Son sensibles porque pueden afectar agencia, privacidad, evaluación, publicación, evidencia o interpretación humana.

---

## 9. Plantilla mínima para definir un objeto conceptual

Usar esta plantilla cuando una spec proponga un objeto nuevo.

```markdown
# Objeto Conceptual - [Nombre]

**Spec relacionada:**  
**Estado:** Borrador / Aprobado / Condicionado / Diferido / Bloqueado  
**Responsable documental:**  
**Nivel de riesgo:** Bajo / Medio / Alto / Bloqueante  

---

## 1. Propósito humano

¿Qué representa este objeto en la experiencia humana, educativa, creativa o investigativa?

---

## 2. Responsabilidades

```text
-
-
-
```

---

## 3. Datos que puede contener

| Dato | Propósito | ¿Necesario? | ¿Permanece local? | Riesgo |
|---|---|---|---|---|
| | | | | |

---

## 4. Datos que no debe contener

```text
-
-
-
```

---

## 5. Relaciones con otros objetos

| Objeto relacionado | Tipo de relación | Regla |
|---|---|---|
| | | |

---

## 6. Reglas local-first

```text
¿Qué permanece local?
¿Qué no se guarda?
¿Qué puede exportarse?
¿Qué requiere consentimiento?
¿Qué nunca se sube automáticamente?
¿Qué requeriría spec futura?
```

---

## 7. Activadores de threat model

```text
[ ] evidencia
[ ] reflexión personal
[ ] portafolio
[ ] exportación
[ ] datos reales
[ ] datos de menores
[ ] datos sensibles
[ ] metadatos
[ ] IA externa
[ ] evaluación
[ ] automatización
[ ] otro:
```

---

## 8. Consentimiento

```text
¿Requiere consentimiento?
¿Qué debe explicar?
¿Quién lo otorga?
¿Cómo puede negarse o retirarse?
```

---

## 9. Condiciones de bloqueo

```text
-
-
-
```

---

## 10. Decisión

```text
aprobado
condicionado
diferido
bloqueado
```
```

---

## 10. Criterios de aceptación de un objeto conceptual

Un objeto conceptual puede aceptarse si:

```text
tiene propósito humano claro;
define responsabilidades;
minimiza datos;
declara datos prohibidos;
respeta local-first;
identifica relaciones;
identifica activadores de threat model;
define consentimiento cuando aplica;
no autoriza implementación funcional;
no introduce infraestructura bloqueada;
no sustituye revisión humana;
preserva experiencia creativa no rígida.
```

---

## 11. Relación con la Plantilla de Spec Segura

Toda spec que proponga objetos conceptuales debe incluir o enlazar:

```text
propósito del objeto;
datos involucrados;
reglas local-first;
threat model si aplica;
consentimiento;
criterios de aceptación;
revisión humana;
decisión final;
deuda asociada.
```

La Plantilla de Spec Segura es el documento de trabajo. Esta matriz es el mapa de objetos.

---

## 12. Relación con Política Local-First

Cada objeto debe responder:

```text
¿Qué permanece local?
¿Qué no se guarda?
¿Qué puede exportarse?
¿Qué requiere consentimiento?
¿Qué requiere anonimización?
¿Qué nunca se sube automáticamente?
¿Qué requeriría una spec futura?
```

Si no puede responder, el objeto debe quedar condicionado o diferido.

---

## 13. Relación con Registro Inicial de Threat Models

Cada objeto debe revisar si activa alguno de los escenarios iniciales:

```text
evidencia creativa;
reflexión personal;
portafolio;
exportación manual;
publicación;
IA externa;
datos de menores;
datos reales;
metadatos;
evaluación o retroalimentación;
analíticas;
autenticación futura;
almacenamiento remoto;
repositorio local;
Wiki humana;
deuda y trazabilidad.
```

Si activa riesgo alto o bloqueante, requiere threat model específico o decisión de bloqueo.

---

## 14. Relación con el Programador Humanista

El Programador Humanista debe usar esta matriz para evitar tres errores:

```text
convertir personas en clases rígidas;
convertir evidencia en archivo neutro;
convertir specs en tareas de código.
```

Preguntas mínimas:

```text
¿Qué responsabilidad humana tiene este objeto?
¿Qué agencia protege?
¿Qué dato minimiza?
¿Qué amenaza anticipa?
¿Qué consentimiento requiere?
¿Qué no debe hacer nunca?
```

---

## 15. Relación con Wiki humana

Los objetos que afecten directamente a usuarios deben tener traducción futura a Wiki humana.

Ejemplos prioritarios:

```text
Evidencia
Reflexion
Portafolio
Exportacion
Consentimiento
UsoIA
RevisionHumana
PoliticaLocalFirst
ThreatModel
```

La Wiki humana deberá explicar estos objetos sin tecnicismos, desde la pregunta:

```text
¿Qué significa esto para mí como persona usuaria, estudiante, docente, investigador o creador?
```

---

## 16. Dictamen

Esta matriz paga parcialmente la deuda:

```text
ASTL-V044-DEBT-POO-001
```

No cierra la deuda hasta que existan:

```text
specs concretas que usen la matriz;
objetos conceptuales revisados individualmente;
relación con matrices de datos y consentimiento;
threat models específicos para objetos sensibles;
validación con Programador Humanista;
traducción a Wiki humana;
actualización formal de bitácora, transferencia y deuda al cierre de sesión.
```

Esta matriz no autoriza implementación funcional.

Su valor principal es convertir POO en un lenguaje de cuidado antes que en una fábrica de clases. En AI StoryLab 1 v0.4.4, los objetos no nacen para correr; nacen para ser comprendidos, limitados y protegidos.
