# Guía de Uso de la Plantilla de Spec Segura AI StoryLab 1 v0.4.4

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.4 - Spec-Driven Development, seguridad, privacidad y preparación responsable  
**Tipo de documento:** Guía de uso de plantilla  
**Estado:** Borrador para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Uso_Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md`  
**PR de trabajo:** #8  
**Rama:** `v0.4.4-sdd-foundation`  
**Alcance:** Documental, metodológico y formativo. No autoriza implementación funcional.

---

## 1. Propósito

Esta guía explica cómo usar la Plantilla de Spec Segura AI StoryLab 1 v0.4.4.

La plantilla no debe llenarse como formulario administrativo. Debe usarse como una conversación estructurada entre propósito humano, experiencia creativa, riesgos, datos, consentimiento, local-first, revisión humana y deuda.

La plantilla ayuda a convertir una idea en una spec candidata.

Una spec candidata no autoriza implementación funcional.

---

## 2. Antes de comenzar

Antes de llenar la plantilla, debe existir una idea inicial formulada en lenguaje humano:

```text
¿Qué se quiere lograr?
¿Para quién?
¿Por qué importa?
¿Qué experiencia protege?
¿Qué riesgo podría introducir?
```

Si la idea solo está formulada como una tarea técnica, debe traducirse primero.

Ejemplo de formulación técnica incompleta:

```text
Crear módulo de carga de archivos.
```

Reformulación SDD:

```text
Explorar una forma local-first para que el usuario seleccione, organice y describa evidencias creativas sin subida automática, sin almacenamiento remoto y con control explícito sobre compartir o no compartir.
```

---

## 3. Cómo completar cada sección

### 3.1 Identificación

Asignar un ID, título, versión, estado y ruta propuesta.

Recomendación de ID:

```text
ASTL-SPEC-V044-XXX
```

Ejemplo:

```text
ASTL-SPEC-V044-001
```

### 3.2 Tipo de spec

Seleccionar el tipo principal y, si aplica, tipos secundarios.

Una spec puede ser de experiencia de usuario y también tocar datos, consentimiento o evidencia.

No se debe ocultar complejidad para que parezca más simple.

### 3.3 Propósito humano y educativo

Responder en lenguaje claro:

```text
Esta spec propone...
Para apoyar...
Sin autorizar...
```

La frase “sin autorizar” es importante porque recuerda límites.

### 3.4 Alcance y no alcance

El alcance declara qué se está especificando.

El no alcance declara qué se mantiene fuera.

En v0.4.4, el no alcance debe repetir los límites vigentes cuando aplique:

```text
backend
cloud
APIs externas
autenticación
analíticas
base de datos remota
subida automática de archivos
IA externa por defecto
manejo de datos reales
evaluación automática como juez final
implementación funcional
```

### 3.5 Subjetividades afectadas

Marcar todos los perfiles afectados.

Si participa estudiante de escuela superior, el nivel de cuidado aumenta.

Si hay docente o investigador, revisar también implicaciones de evaluación, evidencia y publicación.

### 3.6 Experiencia creativa protegida

Esta sección evita que la spec se vuelva tecnocrática.

Debe responder:

```text
¿Dónde respira la creatividad?
¿Dónde puede el usuario detenerse, jugar, revisar o cambiar de dirección?
¿Qué partes son opcionales?
¿Qué partes no deben convertirse en obligación?
```

### 3.7 Datos involucrados

Todo dato debe justificar su presencia.

Si un dato no tiene propósito claro, debe eliminarse.

La tabla de datos debe completarse con especial cuidado.

Preguntas mínimas:

```text
¿Este dato es necesario?
¿Puede permanecer local?
¿Puede omitirse?
¿Puede ser ficticio o sintético?
¿Requiere consentimiento?
¿Aumenta riesgo si el usuario es menor de edad?
```

### 3.8 Evidencias, portafolios y reflexión

La evidencia educativa o creativa no es un archivo neutro.

Debe tratarse como producción humana situada.

Verificar:

```text
¿La evidencia pertenece al usuario?
¿Puede editarla?
¿Puede retirarla?
¿Puede no compartirla?
¿Puede exportarla bajo control?
¿Quién puede interpretarla?
```

### 3.9 Rol de IA

Si no aplica IA, marcarlo explícitamente.

Si se imagina IA futura, aclarar que es conceptual y no implementada.

Si se considera IA externa, la spec debe condicionarse o bloquearse hasta tener:

```text
spec específica de IA;
consentimiento explícito;
datos ficticios, sintéticos o anonimizados;
threat model;
revisión humana;
prohibición de juicio final automático.
```

### 3.10 Criterios local-first

Toda spec debe responder qué permanece local y qué nunca se sube automáticamente.

Una buena respuesta local-first no dice solo “será seguro”.

Debe decir:

```text
qué se guarda;
dónde se guarda;
qué no se guarda;
qué se puede exportar;
qué no se sube;
qué requeriría autorización futura.
```

### 3.11 Consentimiento requerido

El consentimiento debe ser situado, no genérico.

Completar esta sección como si se explicara al usuario real:

```text
qué ocurrirá;
qué datos se usarán;
para qué;
quién tendrá acceso;
qué alternativas existen;
cómo puede decir que no;
cómo puede retirar autorización.
```

### 3.12 Riesgos

Cada riesgo debe tener mitigación.

Si no hay mitigación clara, la spec debe quedar condicionada, diferida o bloqueada.

### 3.13 Threat model preliminar

El threat model preliminar debe identificar:

```text
activos a proteger;
fuentes de riesgo;
amenazas previsibles;
mitigaciones;
riesgos residuales.
```

Si el riesgo toca datos reales, menores, evidencia sensible, IA externa, publicación, exportación o evaluación, se requiere threat model específico.

### 3.14 Análisis Dialógico Transdisciplinario

Usar cuando haya tensión entre principios.

Ejemplos de tensión:

```text
creatividad vs estructura;
privacidad vs exportación;
agencia humana vs automatización;
evaluación formativa vs no juicio automático;
trazabilidad vs minimización de datos;
acompañamiento IA vs consentimiento.
```

La respuesta no debe borrar una tensión. Debe documentarla.

### 3.15 Criterios de aceptación

Los criterios de aceptación deben expresar cómo saber que la spec cumple su propósito sin violar principios.

No basta con decir “funciona”.

Debe decir:

```text
funciona sin subir datos;
funciona sin IA externa por defecto;
funciona sin evaluación automática final;
funciona con revisión humana cuando aplica;
funciona preservando experiencia creativa.
```

### 3.16 Criterios de prueba documental

En v0.4.4 las pruebas son documentales.

No son pruebas automatizadas de software.

Son verificaciones de que la spec no viola límites.

### 3.17 Revisión humana

Debe registrar quién revisó, desde qué perfil y con qué resultado.

Resultado permitido:

```text
aprobada
condicionada
diferida
bloqueada
```

### 3.18 Decisión final

La decisión final debe decir:

```text
qué se decide;
qué condiciones quedan;
qué deuda se crea;
qué deuda se paga;
qué documentos se actualizan.
```

---

## 4. Cuándo aprobar, condicionar, diferir o bloquear

### 4.1 Aprobar

Una spec puede aprobarse si:

```text
cumple propósito humano;
minimiza datos;
preserva local-first;
no viola límites;
tiene riesgos mitigados;
define revisión humana cuando aplica;
actualiza trazabilidad.
```

### 4.2 Condicionar

Debe condicionarse si:

```text
la idea es válida pero falta matriz, política, consentimiento, threat model o revisión;
hay riesgos mitigables pero no resueltos;
requiere aclarar alcance;
requiere rediseñar partes de experiencia creativa.
```

### 4.3 Diferir

Debe diferirse si:

```text
la spec depende de documentos aún no existentes;
la fase no autoriza todavía el tipo de decisión;
falta base documental para decidir responsablemente.
```

### 4.4 Bloquear

Debe bloquearse si propone:

```text
subida automática;
evaluación automática como juez final;
uso de datos sin consentimiento;
IA externa por defecto;
implementación funcional sin spec aprobada;
backend, cloud o API externa sin autorización;
manejo de datos reales sin política formal.
```

---

## 5. Producto esperado

Al terminar de usar la plantilla, debe existir:

```text
una spec candidata completa;
un dictamen;
una lista de deuda;
una decisión clara;
registro en bitácora;
transferencia simétrica actualizada;
registro de deuda actualizado.
```

---

## 6. Dictamen

La Plantilla de Spec Segura es el puente entre Constitución SDD y práctica documental.

Usarla bien significa demorar lo suficiente para construir con cuidado después.
