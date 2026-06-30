# Matriz de Consentimiento Informado y Situado SDD AI StoryLab 1 v0.4.4

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.4 - Spec-Driven Development, seguridad, privacidad y preparación responsable  
**Tipo de documento:** Matriz rectora de consentimiento informado y situado  
**Estado:** Aprobada para archivo en PR #8  
**Ruta canónica propuesta:** `00_CONTROL_MAESTRO/Spec_Driven_Development/Matrices/Matriz_Consentimiento_Informado_y_Situado_SDD_AI_StoryLab_1_v0_4_4.md`  
**PR de trabajo:** #8  
**Rama:** `v0.4.4-sdd-foundation`  
**Alcance:** Documental, rector y preparatorio. No autoriza implementación funcional.

---

## 0. Declaración de apertura

Esta matriz define el marco inicial para consentimiento informado y situado en AI StoryLab 1 v0.4.4.

En esta fase, consentimiento no se entiende como una casilla genérica de aceptación ni como una autorización permanente. Consentimiento informado y situado significa que una persona comprende una acción concreta, sus datos o evidencias involucradas, su propósito, sus riesgos, sus alternativas y su capacidad de aceptar, negar, revisar o retirar autorización cuando aplique.

Esta matriz no autoriza:

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

Su función es impedir que una spec avance si requiere autorización humana y no puede explicar claramente qué se pide, para qué, con qué datos, bajo qué riesgos y con qué alternativas.

---

## 1. Propósito de la matriz

La Matriz de Consentimiento Informado y Situado responde a la deuda `ASTL-V044-DEBT-CONSENT-001`.

Su propósito es proveer criterios iniciales para decidir cuándo una spec requiere consentimiento, qué tipo de consentimiento requiere, qué debe explicar, qué condiciones bloquean avance y cómo se relaciona con local-first, threat models, POO conceptual, evidencias, portafolios, IA y revisión humana.

Esta matriz permite:

```text
identificar acciones que requieren consentimiento;
distinguir consentimiento simple, informado, situado y reforzado;
bloquear consentimiento genérico o implícito;
proteger evidencias creativas y educativas;
proteger reflexiones personales;
proteger portafolios;
proteger datos de menores de edad;
evitar exportación o publicación sin autorización;
evitar uso de IA externa sin consentimiento explícito;
vincular consentimiento con revisión humana;
crear deuda cuando falten políticas o matrices relacionadas.
```

---

## 2. Definición operativa

En AI StoryLab 1, consentimiento informado y situado significa:

```text
Una autorización humana, comprensible, específica y contextual que explica qué ocurrirá, qué datos o evidencias estarán involucrados, para qué se usarán, quién podrá acceder, qué riesgos existen, qué alternativas tiene la persona y cómo puede aceptar, negarse, revisar o retirar autorización cuando aplique.
```

No cuenta como consentimiento válido:

```text
consentimiento genérico;
casilla única para todo;
consentimiento permanente por defecto;
silencio como aceptación;
participación obligatoria sin alternativa;
lenguaje técnico incomprensible;
autorización escondida en flujo de uso;
consentimiento para una acción usado en otra;
consentimiento de exportación usado como consentimiento de publicación;
consentimiento de uso local usado como consentimiento para IA externa;
consentimiento de evidencia usado como consentimiento de evaluación automática;
consentimiento sin posibilidad real de negarse.
```

---

## 3. Principios rectores

### 3.1 Agencia humana

El consentimiento debe aumentar el control de la persona, no funcionar como permiso para perderlo.

Pregunta guía:

```text
¿La persona puede comprender, decidir, revisar, negar o retirar autorización?
```

### 3.2 Especificidad

El consentimiento debe estar ligado a una acción concreta.

Ejemplos de acciones distintas:

```text
guardar localmente;
exportar;
compartir con docente;
compartir con investigador;
publicar;
usar con IA externa;
usar en investigación;
usar para retroalimentación;
usar para evaluación formativa.
```

Aceptar una acción no implica aceptar las demás.

### 3.3 Situacionalidad

El consentimiento depende de contexto, perfil, edad, tipo de evidencia, datos, riesgos y propósito.

No es igual consentir:

```text
usar un ejemplo ficticio;
exportar una evidencia creativa;
compartir una reflexión personal;
usar datos de un menor;
enviar contenido a IA externa;
usar evidencia en investigación.
```

### 3.4 Comprensibilidad

El consentimiento debe poder explicarse en lenguaje humano.

Si solo puede explicarse en jerga técnica, no está listo.

### 3.5 Revocabilidad cuando aplique

Cuando una acción pueda detenerse, retirarse o modificarse, el consentimiento debe explicar cómo hacerlo.

### 3.6 No coerción

La persona debe tener una alternativa razonable cuando la acción no sea estrictamente necesaria.

### 3.7 Revisión humana en escenarios sensibles

Si el consentimiento toca menores, datos reales, evidencia educativa, reflexión personal, publicación, IA externa, investigación o evaluación, requiere revisión humana.

---

## 4. Tipos de consentimiento

| Tipo | Descripción | Cuándo aplica | Nivel |
|---|---|---|---|
| No requerido | No hay datos, evidencias, exportación, publicación ni acción sensible | Material conceptual o ficticio sin datos personales | Bajo |
| Consentimiento simple | La acción es clara, local, reversible y de bajo riesgo | Guardar una preferencia local no sensible futura | Bajo/medio |
| Consentimiento informado | La acción involucra datos, evidencias, exportación o uso secundario | Exportar evidencia, compartir con docente, uso en actividad | Medio/alto |
| Consentimiento situado | La autorización depende de contexto, perfil, propósito y riesgo | Evidencia educativa, reflexión, portafolio, investigación | Alto |
| Consentimiento reforzado | Requiere cuidado adicional por menores, datos reales, publicación, IA externa o sensibilidad | Estudiantes de escuela superior, datos sensibles, IA externa | Alto/bloqueante |
| Consentimiento no suficiente | La acción no debe permitirse aunque alguien acepte | Evaluación automática final, subida automática, IA externa por defecto, datos reales sin política | Bloqueante |

---

## 5. Matriz de escenarios de consentimiento

| Escenario | ¿Requiere consentimiento? | Tipo mínimo | Revisión humana | Threat model | Estado v0.4.4 |
|---|---|---|---|---|---|
| Uso de datos ficticios | No, salvo contexto sensible | No requerido | No | No, salvo excepción | Permitido |
| Uso de datos sintéticos | Depende | Simple/informado | Según contexto | Preliminar si simula datos reales | Permitido condicionado |
| Guardar evidencia local futura | Sí si es evidencia real | Informado | Sí si educativa/sensible | Sí | Condicionado |
| Guardar reflexión personal | Sí | Situado | Sí | Sí | Condicionado |
| Crear portafolio local | Sí si contiene evidencia real | Informado/situado | Sí | Sí | Condicionado |
| Exportar evidencia | Sí | Situado | Sí | Sí específico | Condicionado |
| Exportar portafolio | Sí | Situado/reforzado | Sí | Sí específico | Condicionado |
| Compartir con docente | Sí | Situado | Sí | Sí | Condicionado |
| Compartir con investigador | Sí | Reforzado | Sí | Sí específico | Diferido |
| Publicar evidencia | Sí | Reforzado | Sí | Sí específico | Bloqueado/diferido |
| Publicar portafolio | Sí | Reforzado | Sí | Sí específico | Bloqueado/diferido |
| Usar en investigación | Sí | Reforzado | Sí | Sí específico | Diferido |
| Usar IA externa | Sí | Reforzado y explícito | Sí | Sí específico | Bloqueado sin spec IA |
| Retroalimentación humana | Depende del contenido | Informado/situado | Sí si sensible | Según riesgo | Condicionado |
| Retroalimentación automática | Sí | No suficiente si final | Sí | Sí específico | Bloqueado si juez final |
| Evaluación automática final | Consentimiento no suficiente | No permitido | Sí | Sí | Bloqueado |
| Analíticas de uso | Sí | Reforzado | Sí | Sí específico | Bloqueado |
| Datos de menores | Sí | Reforzado | Sí | Sí específico | Bloqueado sin política reforzada |
| Datos personales reales | Sí | Reforzado | Sí | Sí específico | Bloqueado sin política formal |
| Metadatos identificables | Sí si identifican o perfilan | Informado/situado | Según riesgo | Sí | Condicionado |
| Wiki humana explicativa | No si no hay datos personales | No requerido | Revisión editorial | Preliminar | Permitido |

---

## 6. Elementos mínimos del consentimiento

Todo consentimiento informado y situado debe explicar:

```text
qué ocurrirá;
qué datos, evidencias o reflexiones se usarán;
para qué se usarán;
qué no se hará;
quién tendrá acceso;
dónde permanecerá la información;
si saldrá del entorno local;
si se exportará;
si se compartirá;
si se publicará;
si se usará IA;
si habrá revisión humana;
qué riesgos existen;
qué alternativas tiene la persona;
qué pasa si dice que no;
cómo puede revisar;
cómo puede retirar autorización cuando aplique;
qué deuda o condición pendiente existe, si aplica.
```

---

## 7. Acciones diferenciadas

El consentimiento debe diferenciar acciones que a menudo se confunden.

| Acción | Qué significa | Consentimiento |
|---|---|---|
| Guardar localmente | Mantener bajo control local | Simple o informado según sensibilidad |
| Organizar | Clasificar o relacionar contenido | Según datos y metadatos |
| Revisar | Permitir mirada humana autorizada | Informado/situado |
| Exportar | Sacar copia del entorno local | Situado |
| Compartir | Dar acceso a persona o grupo | Situado/reforzado |
| Publicar | Hacer visible fuera del contexto privado | Reforzado, bloqueado/diferido en v0.4.4 |
| Usar en investigación | Uso secundario con propósito investigativo | Reforzado, diferido |
| Enviar a IA externa | Transferir contenido a sistema externo | Reforzado, bloqueado sin spec específica |
| Evaluar | Usar para juicio formativo o académico | Situado/reforzado |
| Evaluar automáticamente | Delegar juicio final a sistema | Consentimiento no suficiente, bloqueado |

---

## 8. Consentimiento por subjetividad

| Subjetividad | Riesgo principal | Requisito de consentimiento | Cuidado adicional |
|---|---|---|---|
| Estudiante de escuela superior | Minoría de edad, evaluación, privacidad, presión institucional | Reforzado | Política específica futura, revisión humana obligatoria |
| Estudiante universitario | Evaluación, evidencia educativa, privacidad | Situado | Claridad sobre alternativas y no coerción |
| Docente | Uso de evidencias, retroalimentación, evaluación, autoría | Situado | Separar apoyo pedagógico de vigilancia |
| Investigador | Uso secundario, ética investigativa, datos reales | Reforzado | Diferir hasta política y protocolos específicos |
| Programador Humanista | Acceso a specs, riesgos, objetos, deuda | Informado según contenido | Evitar exposición de datos reales |
| Artista Transdisciplinario | Autoría, obra, proceso creativo | Situado | Proteger contexto y decisión de publicación |
| Caleidoscopio | Integración de perspectivas | Según rol situado | Evitar mezcla de permisos entre roles |

---

## 9. Consentimiento y local-first

Toda solicitud de consentimiento debe responder:

```text
¿Qué permanece local?
¿Qué no se guarda?
¿Qué puede exportarse?
¿Qué requiere consentimiento?
¿Qué requiere anonimización?
¿Qué nunca se sube automáticamente?
¿Qué requeriría una spec futura?
```

Si una acción implica salida del entorno local, requiere consentimiento situado como mínimo.

Si una acción implica datos reales, menores, IA externa, publicación o investigación, requiere consentimiento reforzado y revisión humana.

---

## 10. Consentimiento y threat model

Debe activarse threat model cuando el consentimiento toque:

```text
exportación;
publicación;
evidencia educativa;
reflexión personal;
portafolio;
menores de edad;
datos reales;
datos personales;
datos sensibles;
IA externa;
metadatos;
evaluación;
retroalimentación automática;
uso en investigación;
compartir con terceros;
pérdida de agencia;
presión institucional.
```

Si el threat model identifica riesgo alto o bloqueante sin mitigación, el consentimiento no basta para autorizar la acción.

---

## 11. Consentimiento y POO conceptual

Los objetos conceptuales que requieren atención de consentimiento incluyen:

```text
Usuario
Subjetividad
Contexto
Permiso
Consentimiento
Evidencia
Reflexion
Portafolio
Exportacion
UsoIA
RevisionHumana
Retroalimentacion
Rubrica
RepositorioLocal
WikiHumana
```

Cada objeto sensible debe responder:

```text
¿Qué acción requiere consentimiento?
¿Qué datos o evidencias toca?
¿Qué riesgo introduce?
¿Qué permiso no debe inferirse automáticamente?
¿Qué condición bloquea avance?
```

Ejemplo:

```text
Objeto: Portafolio

Consentimiento requerido:
  compartir, exportar, publicar, usar en evaluación, usar en investigación o enviar a IA externa.

No requiere consentimiento adicional:
  organizar localmente evidencias ficticias o sintéticas de bajo riesgo, siempre que no haya datos personales ni publicación.

Bloquea:
  publicación automática, evaluación automática final, exportación sin revisión humana o envío a IA externa por defecto.
```

---

## 12. Matriz de permisos no transferibles

| Consentimiento otorgado | No autoriza automáticamente |
|---|---|
| Guardar localmente | Exportar |
| Exportar | Publicar |
| Compartir con docente | Compartir con investigador |
| Compartir para retroalimentación | Usar para evaluación final |
| Usar en clase | Usar en investigación |
| Usar datos ficticios | Usar datos reales |
| Usar IA local conceptual | Usar IA externa |
| Crear portafolio | Publicar portafolio |
| Revisar evidencia | Conservarla indefinidamente |
| Dar retroalimentación | Crear analíticas |
| Consentir una actividad | Consentir actividades futuras |

---

## 13. Matriz de lenguaje humano mínimo

Toda solicitud de consentimiento debe poder explicarse con una fórmula como esta:

```text
Queremos [acción] con [dato/evidencia/reflexión] para [propósito].
Esto [permanecerá local / será exportado / será compartido / será publicado].
Podrán verlo [personas o roles].
Los riesgos principales son [riesgos].
Puedes [aceptar / decir que no / revisar / retirar cuando aplique].
Si dices que no, [alternativa o consecuencia no punitiva cuando aplique].
No usaremos esto para [acciones prohibidas o no autorizadas].
```

Ejemplo local-first:

```text
Queremos guardar esta evidencia localmente para ayudarte a organizar tu portafolio. No se subirá automáticamente, no se publicará y no se enviará a IA externa. Puedes revisarla, editarla o decidir no incluirla en tu portafolio.
```

Ejemplo de exportación:

```text
Quieres exportar este portafolio como archivo. Antes de hacerlo, revisa qué evidencias, reflexiones y metadatos incluye. El archivo saldrá del entorno local y tú decides con quién compartirlo.
```

Ejemplo de bloqueo:

```text
No podemos enviar esta reflexión personal a una IA externa en esta fase. Falta una spec específica, consentimiento explícito, threat model y revisión humana.
```

---

## 14. Criterios de aceptación

Una spec cumple esta matriz si:

```text
identifica si requiere consentimiento;
distingue acción específica;
explica propósito;
clasifica datos y evidencias;
declara qué permanece local;
declara si hay exportación, publicación, investigación o IA;
incluye lenguaje humano comprensible;
ofrece alternativa cuando aplica;
identifica revisión humana;
activa threat model cuando aplica;
distingue consentimiento simple, informado, situado o reforzado;
bloquea consentimiento no suficiente;
no usa consentimiento genérico;
no autoriza implementación funcional.
```

---

## 15. Criterios de bloqueo

Debe bloquearse, diferirse o rediseñarse cualquier spec que use consentimiento para justificar:

```text
subida automática;
publicación automática;
IA externa por defecto;
evaluación automática como juez final;
datos reales sin política formal;
datos de menores sin política reforzada;
analíticas;
autenticación prematura;
base de datos remota;
backend;
cloud;
APIs externas;
uso secundario de evidencia sin explicación;
investigación sin protocolo;
consentimiento genérico;
ausencia de alternativa razonable;
lenguaje incomprensible;
implementación funcional.
```

---

## 16. Plantilla mínima de consentimiento situado

Usar esta plantilla cuando una spec requiera consentimiento.

```markdown
# Consentimiento Situado - [Acción]

**Spec relacionada:**  
**Objeto o flujo relacionado:**  
**Fecha:**  
**Estado:** Borrador / Aprobado / Condicionado / Diferido / Bloqueado  
**Nivel:** Simple / Informado / Situado / Reforzado / No suficiente  
**Revisión humana requerida:** Sí / No  

---

## 1. Acción propuesta

¿Qué se quiere hacer?

---

## 2. Datos, evidencias o reflexiones involucradas

| Elemento | Tipo | Sensibilidad | Permanece local | Se exporta | Se comparte | Se publica |
|---|---|---|---|---|---|---|
| | | | | | | |

---

## 3. Propósito

¿Para qué se solicita autorización?

---

## 4. Personas o roles con acceso

¿Quién podrá ver, revisar, recibir o usar esto?

---

## 5. Riesgos

```text
-
-
-
```

---

## 6. Alternativas

¿Qué puede hacer la persona si no acepta?

---

## 7. Retiro o revisión

¿Cómo puede revisar, cambiar de decisión o retirar autorización cuando aplique?

---

## 8. Lo que no se hará

```text
[ ] No se subirá automáticamente.
[ ] No se publicará automáticamente.
[ ] No se enviará a IA externa por defecto.
[ ] No se usará para evaluación automática final.
[ ] No se usará para investigación sin consentimiento adicional.
[ ] No se compartirá con terceros sin autorización adicional.
```

---

## 9. Lenguaje humano de consentimiento

Redactar aquí la versión comprensible para la persona usuaria.

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

## 17. Relación con Wiki humana

Toda decisión de consentimiento que afecte usuarios debe traducirse a Wiki humana.

Temas prioritarios:

```text
qué significa consentimiento situado;
qué significa guardar localmente;
qué significa exportar;
qué significa compartir;
qué significa publicar;
qué no se sube automáticamente;
qué no se enviará a IA externa;
qué significa revisión humana;
qué significa decir que no;
qué significa retirar autorización.
```

---

## 18. Dictamen

Esta matriz paga parcialmente la deuda:

```text
ASTL-V044-DEBT-CONSENT-001
```

No cierra la deuda hasta que existan:

```text
specs concretas que apliquen la matriz;
formularios o textos humanos de consentimiento revisados;
matriz de datos vinculada;
threat models específicos cuando aplique;
relación con objetos POO conceptuales;
validación con Programador Humanista;
traducción a Wiki humana;
actualización formal de bitácora, transferencia y deuda al cierre de sesión.
```

Esta matriz no autoriza implementación funcional.

Su valor principal es recordar que consentimiento no es una cerradura para abrir cualquier puerta. Es una conversación situada sobre control, riesgo, propósito, alternativa y agencia humana.
