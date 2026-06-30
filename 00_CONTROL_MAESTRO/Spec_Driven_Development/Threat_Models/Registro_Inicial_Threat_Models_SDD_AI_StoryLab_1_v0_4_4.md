# Registro Inicial de Threat Models SDD AI StoryLab 1 v0.4.4

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.4 - Spec-Driven Development, seguridad, privacidad y preparación responsable  
**Tipo de documento:** Registro inicial de threat models y plantilla mínima de amenaza  
**Estado:** Aprobada para archivo en PR #8  
**Ruta canónica propuesta:** `00_CONTROL_MAESTRO/Spec_Driven_Development/Threat_Models/Registro_Inicial_Threat_Models_SDD_AI_StoryLab_1_v0_4_4.md`  
**PR de trabajo:** #8  
**Rama:** `v0.4.4-sdd-foundation`  
**Alcance:** Documental, rector y preparatorio. No autoriza implementación funcional.

---

## 0. Declaración de apertura

Este documento establece el registro inicial de threat models requeridos para AI StoryLab 1 v0.4.4 y una plantilla mínima para documentar amenazas antes de cualquier implementación funcional.

En esta fase, un threat model no es una auditoría técnica ejecutada sobre software existente. Es una herramienta documental para identificar riesgos, activos, actores, amenazas, mitigaciones, condiciones de bloqueo y deuda antes de construir.

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

Su función es impedir que una spec avance sin haber mirado, con suficiente cuidado, qué podría dañar a personas, evidencias, datos, agencia humana, experiencia creativa, portafolios, consentimiento o trazabilidad.

---

## 1. Propósito del registro

Este registro existe para responder a la deuda `ASTL-V044-DEBT-THREAT-001`.

La deuda se origina porque AI StoryLab 1 v0.4.4 necesita identificar qué specs futuras requieren threat model antes de cualquier avance técnico.

Este documento permite:

```text
definir cuándo un threat model es obligatorio;
identificar escenarios de riesgo recurrentes;
establecer una plantilla mínima común;
conectar amenazas con local-first, consentimiento, IA, evidencia, portafolios y revisión humana;
distinguir riesgo bajo, medio, alto y bloqueante;
crear deuda trazable cuando una amenaza no pueda mitigarse;
bloquear specs que propongan riesgos no resueltos.
```

---

## 2. Definición operativa de threat model en AI StoryLab 1

En AI StoryLab 1, un threat model es un documento de cuidado anticipatorio.

Define:

```text
qué se protege;
de quién o de qué se protege;
qué podría salir mal;
qué condiciones aumentan el riesgo;
qué mitigaciones son necesarias;
qué riesgos residuales quedan;
qué decisiones humanas se requieren;
qué deuda se crea o se paga;
qué condiciones bloquean avance.
```

Un threat model no debe reducirse a seguridad informática tradicional. En este proyecto también cubre:

```text
privacidad;
agencia humana;
consentimiento;
experiencia creativa;
evidencia educativa;
portafolios;
reflexiones personales;
uso de IA;
riesgo pedagógico;
riesgo institucional;
riesgo de vigilancia;
riesgo de rigidez antijuego creativo;
riesgo de evaluación automática indebida.
```

---

## 3. Principios rectores

### 3.1 Amenaza no significa atacante externo solamente

Una amenaza puede surgir de:

```text
error de diseño;
confusión de usuario;
automatización indebida;
exceso de datos;
publicación involuntaria;
metadatos;
IA externa;
evaluación automática;
dependencia de servicios externos;
flujo rígido;
interpretación institucional indebida;
pérdida de contexto creativo.
```

### 3.2 El riesgo se modela antes de construir

Toda spec sensible debe identificar amenazas antes de convertirse en arquitectura técnica, interfaz, flujo de datos u objeto de dominio.

### 3.3 Local-first reduce riesgos, pero no los elimina

Aunque una propuesta sea local-first, puede tener riesgos:

```text
exportación accidental;
metadatos identificables;
archivos compartidos sin revisión;
reflexiones personales expuestas;
portafolios mal interpretados;
dispositivos compartidos;
copias manuales no protegidas;
confusión entre borrador y publicación.
```

### 3.4 La revisión humana no es decorativa

Si una amenaza toca datos reales, menores, evidencia sensible, IA externa, publicación, exportación, evaluación o automatización, debe existir revisión humana con capacidad real de aprobar, condicionar, diferir o bloquear.

### 3.5 Bloquear a tiempo es una forma de protección

Una spec bloqueada por threat model no fracasa. El bloqueo documenta que el sistema todavía no tiene condiciones suficientes para proceder de forma responsable.

---

## 4. Activadores obligatorios de threat model

Una spec debe activar threat model si propone, menciona o prepara cualquiera de estos escenarios:

```text
exportación de evidencias;
publicación de portafolios;
uso de reflexiones personales;
datos reales;
datos personales;
datos educativos;
datos sensibles;
datos de menores de edad;
IA externa;
metadatos;
automatización de decisiones;
evaluación;
retroalimentación automatizada;
compartir con docentes, investigadores o terceros;
uso en investigación;
archivo persistente de evidencias;
repositorio local;
portabilidad;
importación de archivos;
visualización de evidencias;
curaduría de portafolio;
consentimiento;
sincronización futura;
autenticación futura;
analíticas futuras;
integraciones externas futuras.
```

### 4.1 Activadores de bloqueo inmediato

Una spec debe bloquearse o diferirse si propone:

```text
subida automática de archivos;
publicación automática;
envío automático a IA externa;
evaluación automática como juez final;
manejo de datos reales sin política formal;
uso de datos de menores sin consentimiento reforzado;
almacenamiento remoto sin política aprobada;
backend sin autorización;
cloud sin autorización;
APIs externas sin threat model específico;
analíticas sin autorización;
autenticación prematura;
base de datos remota;
implementación funcional en v0.4.4.
```

---

## 5. Activos iniciales a proteger

| Activo | Descripción | Riesgo principal | Nivel inicial |
|---|---|---|---|
| Agencia humana | Capacidad de comprender, decidir, revisar, retirar y no compartir | Automatización o coerción | Alto |
| Evidencia creativa | Producciones, borradores, obras, prototipos y procesos | Exposición, pérdida de contexto, juicio indebido | Medio/alto |
| Evidencia educativa | Trabajos, portafolios, rúbricas, desempeño, procesos de aprendizaje | Evaluación indebida, privacidad, uso institucional | Alto |
| Reflexión personal | Metacognición, dudas, errores, contexto y vulnerabilidad | Exposición, vigilancia, juicio automático | Alto |
| Portafolio | Conjunto curado de evidencias y reflexiones | Publicación no consentida, extracción de datos | Alto |
| Datos personales | Identificadores, nombres, correos, perfiles | Identificación, exposición | Alto |
| Datos de menores | Información de estudiantes de escuela superior | Riesgo reforzado | Bloqueante sin política |
| Consentimiento | Registro y comprensión de autorización | Consentimiento genérico o confuso | Alto |
| Metadatos | Fechas, autoría, versiones, etiquetas, relaciones | Reidentificación, vigilancia | Medio/alto |
| Producción investigativa | Evidencia usada para investigación | Uso secundario, pérdida de contexto | Alto |
| Decisión humana | Aprobación, bloqueo, revisión, juicio docente | Sustitución por automatización | Alto |
| Trazabilidad documental | Bitácoras, deuda, transferencia, decisiones | Pérdida de memoria institucional | Medio/alto |
| Experiencia creativa | Juego, exploración, borrador, recombinación | Rigidez, formulario muerto | Medio/alto |

---

## 6. Fuentes de amenaza iniciales

En v0.4.4, se reconocen estas fuentes de amenaza:

```text
diseño prematuro;
implementación antes de spec;
captura excesiva de datos;
metadatos no visibles;
usuarios que no comprenden exportación;
confusión entre guardar y publicar;
confusión entre evidencia y evaluación;
automatización mal ubicada;
IA externa no autorizada;
revisión humana ausente;
consentimiento genérico;
presión institucional;
flujo pedagógico rígido;
uso secundario de evidencias;
pérdida de trazabilidad;
documentación incompleta;
cierre prematuro de deuda;
rutas canónicas incorrectas;
mezcla de borradores con documentos aprobados.
```

---

## 7. Escenarios iniciales de threat model requeridos

| ID | Escenario | Activador | Nivel inicial | Documento requerido |
|---|---|---|---|---|
| TM-SDD-001 | Evidencia creativa local | Crear, guardar u organizar evidencia | Medio | Threat model preliminar |
| TM-SDD-002 | Reflexión personal | Capturar o asociar reflexión | Alto | Threat model específico si se exporta |
| TM-SDD-003 | Portafolio local-first | Curar evidencias y reflexiones | Alto | Threat model específico |
| TM-SDD-004 | Exportación manual | Sacar archivo del entorno local | Alto | Threat model específico |
| TM-SDD-005 | Publicación | Hacer visible fuera del entorno privado | Bloqueante en v0.4.4 | Diferir o bloquear |
| TM-SDD-006 | IA externa | Enviar contenido o datos a IA externa | Bloqueante sin spec específica | Threat model específico |
| TM-SDD-007 | Datos de menores | Cualquier dato de estudiante de escuela superior | Bloqueante sin política reforzada | Threat model específico |
| TM-SDD-008 | Datos reales | Datos personales, educativos o investigación real | Bloqueante en esta fase | Diferir o bloquear |
| TM-SDD-009 | Metadatos | Fechas, autoría, etiquetas, relaciones | Medio/alto | Threat model preliminar |
| TM-SDD-010 | Evaluación o retroalimentación | Valorar aprendizaje o creatividad | Alto/bloqueante | Threat model específico |
| TM-SDD-011 | Analíticas | Medición de actividad, uso o desempeño | Bloqueante en v0.4.4 | Diferir o bloquear |
| TM-SDD-012 | Autenticación futura | Cuentas, identidad, acceso | Bloqueante en v0.4.4 | Diferir |
| TM-SDD-013 | Almacenamiento remoto | Backend, cloud o base remota | Bloqueante en v0.4.4 | Bloquear |
| TM-SDD-014 | Repositorio local | Persistencia bajo control del usuario | Medio/alto | Threat model específico futuro |
| TM-SDD-015 | Wiki humana | Traducción de decisiones a usuarios | Medio | Threat model preliminar |
| TM-SDD-016 | Deuda y trazabilidad | Registro de decisiones y pendientes | Medio | Threat model preliminar |

---

## 8. Niveles de riesgo

### 8.1 Bajo

Características:

```text
no toca datos personales;
no toca evidencia real;
no toca menores;
no exporta;
no usa IA externa;
no evalúa;
no automatiza decisiones;
usa datos ficticios o conceptuales.
```

Resultado posible:

```text
Puede bastar threat model preliminar.
```

### 8.2 Medio

Características:

```text
organiza evidencia ficticia o sintética;
usa metadatos mínimos;
afecta experiencia creativa;
prepara objetos conceptuales;
requiere distinguir guardar, exportar y compartir.
```

Resultado posible:

```text
Puede avanzar condicionado a mitigaciones documentales.
```

### 8.3 Alto

Características:

```text
toca evidencias educativas;
toca reflexiones personales;
toca portafolios;
toca exportación;
toca consentimiento;
toca revisión humana;
puede afectar interpretación docente o institucional.
```

Resultado posible:

```text
Requiere threat model específico y revisión humana.
```

### 8.4 Bloqueante

Características:

```text
datos reales sin política;
datos de menores sin política reforzada;
IA externa por defecto;
subida automática;
publicación automática;
evaluación automática como juez final;
backend, cloud, APIs externas, autenticación, analíticas o base remota en v0.4.4;
implementación funcional.
```

Resultado posible:

```text
Debe bloquearse, diferirse o rediseñarse.
```

---

## 9. Plantilla mínima de threat model

Copiar esta plantilla dentro de toda spec que active threat model.

```markdown
# Threat Model - [Título de la spec]

**ID de threat model:**  
**Spec relacionada:**  
**Fecha:**  
**Estado:** Borrador / Aprobado / Condicionado / Diferido / Bloqueado  
**Responsable documental:**  
**Revisor humano requerido:** Sí / No  
**Nivel inicial de riesgo:** Bajo / Medio / Alto / Bloqueante  

---

## 1. Resumen del escenario

¿Qué propone la spec y por qué requiere threat model?

---

## 2. Activos a proteger

| Activo | Descripción | Nivel de sensibilidad | Por qué importa |
|---|---|---|---|
| | | | |

---

## 3. Datos, evidencias o acciones involucradas

| Elemento | Tipo | Permanece local | Puede exportarse | Requiere consentimiento | Nivel de riesgo |
|---|---|---|---|---|---|
| | | | | | |

---

## 4. Fuentes de amenaza

```text
[ ] error de diseño
[ ] confusión de usuario
[ ] captura excesiva de datos
[ ] metadatos identificables
[ ] exportación accidental
[ ] publicación no consentida
[ ] uso institucional indebido
[ ] IA externa
[ ] evaluación automática indebida
[ ] automatización de decisión humana
[ ] pérdida de contexto creativo
[ ] flujo pedagógico rígido
[ ] terceros
[ ] otra:
```

---

## 5. Amenazas previsibles

| Amenaza | Activo afectado | Probabilidad | Impacto | Nivel | Mitigación |
|---|---|---:|---:|---:|---|
| | | | | | |

Escala sugerida:

```text
1 = bajo
2 = medio
3 = alto
4 = bloqueante
```

---

## 6. Mitigaciones requeridas

```text
-
-
-
```

---

## 7. Riesgos residuales

```text
-
-
-
```

---

## 8. Condiciones de consentimiento

```text
¿Se requiere consentimiento?
¿Qué debe explicar?
¿Quién debe otorgarlo?
¿Cómo puede retirarse o negarse?
¿Qué ocurre si no se otorga?
```

---

## 9. Revisión humana

```text
Revisor/a:
Perfil:
Fecha:
Resultado:
Justificación:
```

Resultado permitido:

```text
aprobado
condicionado
diferido
bloqueado
```

---

## 10. Decisión del threat model

```text
Decisión:
Condiciones:
Deuda creada:
Deuda pagada:
Documentos que deben actualizarse:
```

---

## 11. Transferencia documental

```text
[ ] Bitácora de sesión
[ ] Bitácora de transferencia simétrica
[ ] Registro de deuda
[ ] Política Local-First
[ ] Matriz de consentimiento
[ ] Wiki humana
[ ] Otra:
```
```

---

## 10. Matriz mínima de amenazas recurrentes

| Amenaza | Señal temprana | Mitigación documental | ¿Bloquea? |
|---|---|---|---|
| Subida automática | “se enviará”, “se sincronizará” | Prohibir en v0.4.4 | Sí |
| Publicación automática | “publicar portafolio” sin revisión | Revisión humana y consentimiento | Sí |
| IA externa por defecto | “enviar a modelo externo” | Spec específica de IA | Sí |
| Evaluación automática final | “calificar automáticamente” | Sustituir por asistencia no final | Sí |
| Datos reales sin política | nombres, correos, entrevistas reales | Diferir hasta política formal | Sí |
| Datos de menores | estudiantes escuela superior | Consentimiento reforzado y política futura | Sí |
| Metadatos invisibles | fechas, autoría, etiquetas ocultas | Minimización y visibilidad | Condiciona |
| Reflexión obligatoria | diario personal forzado | Opcionalidad, edición y retiro | Condiciona |
| Portafolio muerto | archivo sin curaduría ni control | Diseñar proceso vivo | Condiciona |
| Pérdida de trazabilidad | decisión sin bitácora/deuda | Registrar cierre documental | Condiciona |
| Ruta canónica incorrecta | documento en carpeta equivocada | Corregir antes de aprobar | Condiciona |
| Mezcla borrador/aprobado | estado documental confuso | Manifest y revisión | Condiciona |

---

## 11. Relación con la Política Local-First Inicial

Todo threat model debe verificar:

```text
qué permanece local;
qué no se guarda;
qué puede exportarse;
qué requiere consentimiento;
qué requiere anonimización;
qué nunca se sube automáticamente;
qué requeriría spec futura.
```

Si una spec no puede responder esas preguntas, el threat model debe condicionar, diferir o bloquear el avance.

---

## 12. Relación con la Plantilla de Spec Segura

La Plantilla de Spec Segura debe activar este registro cuando una spec marque:

```text
datos;
evidencias;
reflexiones;
portafolios;
IA;
local-first;
consentimiento;
riesgo alto;
exportación;
publicación;
evaluación;
menores de edad;
revisión humana obligatoria.
```

En esos casos, la sección de threat model preliminar de la spec debe enlazar o reproducir la plantilla mínima de este documento.

---

## 13. Relación con el Programador Humanista

El Programador Humanista debe usar este registro como radar inicial antes de traducir cualquier spec a objetos conceptuales o tareas técnicas futuras.

Preguntas mínimas:

```text
¿Qué se puede dañar?
¿Qué persona pierde control?
¿Qué evidencia se expone?
¿Qué dato no debería existir?
¿Qué automatización desplaza una decisión humana?
¿Qué consentimiento falta?
¿Qué amenaza no puedo mitigar todavía?
```

---

## 14. Relación con Wiki humana

Todo threat model que afecte comprensión de usuarios debe generar o recomendar una traducción para Wiki humana.

Ejemplos:

```text
qué significa exportar;
qué significa compartir;
qué no se sube automáticamente;
qué es consentimiento situado;
qué no hará la IA;
qué significa revisión humana;
qué ocurre con evidencias y portafolios.
```

---

## 15. Criterios de aceptación del registro

Este registro se considera suficiente para etapa inicial si:

```text
identifica escenarios recurrentes;
incluye plantilla mínima;
define activadores obligatorios;
define bloqueos;
conecta local-first, consentimiento, IA, evidencia y portafolios;
permite crear deuda;
no autoriza implementación funcional.
```

---

## 16. Dictamen

Este documento paga parcialmente la deuda:

```text
ASTL-V044-DEBT-THREAT-001
```

No cierra la deuda hasta que existan:

```text
threat models específicos aplicados a specs concretas;
matriz de consentimiento;
matriz de datos;
registro de revisión humana;
conexión con Wiki humana;
actualización formal de bitácora, transferencia y deuda al cierre de sesión.
```

Este documento no autoriza implementación funcional.

Su valor principal es instalar una alarma documental temprana: antes de construir, AI StoryLab 1 debe aprender a preguntar qué puede dañar, a quién puede afectar y qué condiciones humanas deben protegerse.
