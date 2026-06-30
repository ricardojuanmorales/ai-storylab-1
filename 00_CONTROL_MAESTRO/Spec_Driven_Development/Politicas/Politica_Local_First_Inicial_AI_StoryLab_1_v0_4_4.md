# Política Local-First Inicial AI StoryLab 1 v0.4.4

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.4 - Spec-Driven Development, seguridad, privacidad y preparación responsable  
**Tipo de documento:** Política inicial SDD  
**Estado:** Aprobada para archivo en PR #8  
**Ruta canónica propuesta:** `00_CONTROL_MAESTRO/Spec_Driven_Development/Politicas/Politica_Local_First_Inicial_AI_StoryLab_1_v0_4_4.md`  
**PR de trabajo:** #8  
**Rama:** `v0.4.4-sdd-foundation`  
**Alcance:** Documental, rector y preparatorio. No autoriza implementación funcional.

---

## 0. Declaración de apertura

Esta política define el marco local-first inicial de AI StoryLab 1 v0.4.4.

Su función es traducir la Constitución SDD en criterios concretos para decidir cómo deben tratarse datos, evidencias, reflexiones, portafolios, exportaciones, consentimiento, riesgos y objetos conceptuales antes de cualquier implementación funcional.

En esta fase, local-first no significa que ya exista una arquitectura técnica implementada. Significa que toda spec futura debe diseñarse primero desde:

```text
control local
minimización de datos
portabilidad humana
consentimiento situado
no subida automática
revisión humana
protección de evidencia educativa y creativa
agencia del usuario
```

Esta política no autoriza:

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

## 1. Propósito de la política

La Política Local-First Inicial existe para asegurar que AI StoryLab 1 no avance hacia decisiones técnicas, interfaces, objetos de dominio, flujos de evidencia, portafolios, exportaciones o futuras integraciones sin declarar primero qué permanece bajo control del usuario.

Esta política protege:

```text
la agencia humana;
la privacidad por defecto;
la experiencia creativa no rígida;
las evidencias educativas y creativas;
las reflexiones personales;
los portafolios;
la minimización de datos;
el consentimiento informado y situado;
la trazabilidad documental;
la posibilidad de revisión humana.
```

También condiciona cualquier spec futura que proponga:

```text
guardar información;
organizar evidencias;
crear portafolios;
exportar archivos;
compartir producciones;
usar metadatos;
usar IA;
publicar;
evaluar;
crear objetos de dominio relacionados con datos o evidencias.
```

Esta política comienza a pagar la deuda `ASTL-V044-DEBT-DATA-001`, pero no la cierra hasta ser aplicada a specs concretas, matrices de datos, matriz de consentimiento y threat models asociados.

---

## 2. Definición de local-first en AI StoryLab 1

En AI StoryLab 1, local-first significa que los datos, evidencias, reflexiones y portafolios deben diseñarse para permanecer bajo control del usuario por defecto.

La definición operativa inicial es:

```text
Local-first en AI StoryLab 1 significa que evidencias, reflexiones, portafolios y datos de trabajo permanecen bajo control local del usuario por defecto, sin subida automática, sin almacenamiento remoto, sin dependencia inicial de servicios externos y sin uso de IA externa por defecto.
```

Local-first no se limita a una preferencia técnica. Es una decisión ética, pedagógica, creativa y documental.

Implica que el sistema futuro deberá favorecer:

```text
autonomía del usuario;
capacidad de trabajar sin dependencia de servicios remotos;
control explícito sobre exportar o compartir;
minimización de exposición;
claridad sobre qué se guarda y qué no;
portabilidad comprensible;
revisión humana en contextos sensibles.
```

---

## 3. Alcance de esta política

Esta política aplica a toda spec que toque, mencione o prepare decisiones sobre:

```text
evidencias creativas;
evidencias educativas;
reflexiones personales;
portafolios;
metadatos;
datos ficticios;
datos sintéticos;
datos anonimizados;
datos personales;
datos educativos;
datos sensibles;
datos de menores de edad;
exportaciones manuales;
publicación;
compartir archivos;
uso de IA;
objetos de dominio;
repositorios locales;
flujos de creación;
flujos de revisión;
flujos de consentimiento;
futuras arquitecturas técnicas.
```

También aplica a documentos preparatorios relacionados con:

```text
specs de datos;
specs de evidencia;
specs de portafolio;
specs de reflexión;
specs de consentimiento;
specs de exportación;
specs de IA;
specs de seguridad;
specs de objeto de dominio;
threat models.
```

---

## 4. No alcance y bloqueos vigentes

Esta política no autoriza trabajo funcional ni técnico implementable.

Quedan fuera de alcance:

```text
backend
cloud
APIs externas
autenticación
analíticas
base de datos remota
sincronización remota
subida automática de archivos
publicación automática
IA externa por defecto
manejo de datos reales
evaluación automática como juez final
implementación funcional
```

Cualquier spec que proponga alguno de esos elementos debe ser:

```text
bloqueada;
diferida;
rediseñada;
o escalada a revisión humana y documental.
```

El hecho de que esta política mencione repositorio local, exportación, portafolio, objeto de dominio o evidencia no autoriza su implementación. Solo define criterios documentales para futuras specs.

---

## 5. Principios rectores local-first

### 5.1 Control local por defecto

Toda evidencia, reflexión, portafolio o dato de trabajo debe permanecer bajo control del usuario por defecto.

Pregunta guía:

```text
¿La persona conserva control real sobre lo que crea, guarda, revisa, exporta o decide no compartir?
```

### 5.2 Minimización de datos

Toda spec debe justificar cada dato solicitado, guardado, mostrado, exportado o interpretado.

Regla:

```text
Si un dato no puede justificarse, no debe incorporarse.
```

### 5.3 Portabilidad humana

La portabilidad no debe entenderse solo como descarga técnica. Debe ser comprensible para la persona.

Una exportación futura deberá permitir que el usuario entienda:

```text
qué exporta;
por qué lo exporta;
en qué formato;
para quién;
con qué riesgos;
con qué posibilidad de revisión previa.
```

### 5.4 No subida automática

Ninguna evidencia, reflexión, portafolio, metadato o archivo debe salir del entorno local sin acción humana explícita.

Regla:

```text
No hay subida automática.
No hay publicación automática.
No hay envío automático a terceros.
No hay envío automático a IA externa.
```

### 5.5 Consentimiento situado antes de exportar o compartir

Toda salida del entorno local requiere intención humana explícita y, cuando aplique, consentimiento informado y situado.

El consentimiento debe explicar:

```text
qué ocurrirá;
qué datos o evidencias saldrán;
para qué saldrán;
quién tendrá acceso;
qué riesgos existen;
qué alternativas tiene la persona;
cómo puede negarse o retirar autorización cuando aplique.
```

### 5.6 Revisión humana ante contextos sensibles

La revisión humana será obligatoria cuando una spec toque:

```text
datos reales;
menores de edad;
evidencia educativa sensible;
reflexiones personales;
IA externa;
publicación;
exportación;
evaluación;
automatización de decisiones.
```

### 5.7 Compatibilidad con experiencia creativa no rígida

Local-first no debe convertir la experiencia creativa en una bóveda fría de archivos sin vida.

Debe proteger:

```text
juego creativo;
exploración;
borradores;
errores;
pausas;
recombinación;
reflexión;
decisión de no compartir;
portafolio como proceso vivo.
```

---

## 6. Clasificación inicial de datos bajo local-first

| Categoría | Ejemplo | Estado local-first inicial | ¿Puede exportarse? | ¿Requiere consentimiento? | Riesgo inicial |
|---|---|---|---|---|---|
| Ningún dato | Flujo conceptual sin captura | Permitido | No aplica | No | Bajo |
| Datos ficticios | Personaje inventado | Permitido | Sí, manualmente | No, salvo contexto sensible | Bajo |
| Datos sintéticos | Dataset inventado | Permitido con revisión | Sí, manualmente | No, salvo semejanza con reales | Bajo/medio |
| Datos anonimizados | Evidencia sin identificadores | Condicionado | Sí, manualmente | Sí, si deriva de contexto sensible | Medio |
| Evidencia creativa | Cuento, imagen, audio, prototipo narrativo | Local por defecto | Solo manual | Sí, si se comparte | Medio |
| Evidencia educativa | Trabajo de estudiante, portafolio de curso | Local por defecto, con cuidado reforzado | Solo manual y revisado | Sí | Medio/alto |
| Reflexión personal | Diario de proceso, comentario metacognitivo | Local por defecto | Solo manual y revisado | Sí | Medio/alto |
| Metadatos | Fecha, etiqueta, versión, autoría contextual | Minimizar | Solo si se justifica | Según contexto | Medio |
| Datos personales | Nombre, correo, identificador | Bloqueado en v0.4.4 salvo política futura | No | Sí, reforzado | Alto |
| Datos de menores | Información de estudiante de escuela superior | Bloqueado en v0.4.4 salvo política futura | No | Reforzado | Alto |
| Datos sensibles | Salud, identidad, situación personal, vulnerabilidad | Bloqueado | No | Reforzado | Alto/bloqueante |
| Datos reales de investigación | Entrevistas, observaciones, corpus humano | Bloqueado en esta fase | No | Reforzado | Alto |

---

## 7. Reglas para evidencias, portafolios y reflexiones

AI StoryLab 1 trata las evidencias, portafolios y reflexiones como objetos de cuidado, no como archivos neutros.

### 7.1 Evidencias

Una evidencia puede contener producción creativa, trayectoria educativa, identidad expresiva, decisiones metodológicas y contexto personal.

Reglas:

```text
Toda evidencia permanece local por defecto.
Toda evidencia debe poder revisarse antes de exportarse.
Toda evidencia debe poder no compartirse.
Toda evidencia debe poder retirarse de un flujo de publicación o exportación futura.
Toda evidencia debe estar protegida contra evaluación automática como juez final.
Toda evidencia debe estar protegida contra envío a IA externa por defecto.
```

### 7.2 Portafolios

Un portafolio no debe diseñarse como repositorio muerto.

Debe sostener:

```text
proceso;
selección;
curaduría;
reflexión;
revisión;
decisión humana;
contexto;
crecimiento.
```

Reglas:

```text
El portafolio permanece local por defecto.
El usuario debe controlar qué entra, qué sale y qué se comparte.
No hay publicación automática de portafolios.
No hay exportación completa sin revisión humana.
No hay analíticas automáticas sobre portafolio en v0.4.4.
```

### 7.3 Reflexiones personales

La reflexión personal puede revelar dudas, errores, emociones, contexto, vulnerabilidad o proceso íntimo de aprendizaje.

Reglas:

```text
La reflexión permanece local por defecto.
No debe tratarse como dato administrativo.
No debe forzarse como campo obligatorio excesivo.
No debe evaluarse automáticamente como juicio final.
No debe enviarse a IA externa por defecto.
Debe poder editarse, omitirse o retirarse cuando aplique.
```

---

## 8. Exportación manual y consentimiento

Esta política distingue entre:

```text
guardar localmente;
organizar localmente;
exportar;
compartir;
publicar;
enviar a terceros;
usar con IA externa.
```

La exportación manual es la acción mediante la cual una persona decide sacar información del entorno local.

Toda exportación futura deberá responder:

```text
¿Qué se exporta?
¿En qué formato?
¿Para qué se exporta?
¿Quién recibirá o podrá ver el archivo?
¿Qué datos o metadatos incluye?
¿Qué riesgos existen?
¿Puede revisarse antes de exportar?
¿Puede cancelarse?
¿Requiere consentimiento adicional?
```

Regla central:

```text
Toda salida del entorno local requiere intención humana explícita, explicación comprensible y, cuando aplique, consentimiento informado y situado.
```

Escenarios que requieren consentimiento reforzado:

```text
exportación de evidencia educativa;
exportación de reflexión personal;
exportación de portafolio;
uso en investigación;
publicación;
uso con IA externa;
participación de menores de edad;
datos reales;
datos sensibles;
evaluación o retroalimentación institucional.
```

---

## 9. Relación con IA externa

La IA externa no forma parte del local-first inicial.

En v0.4.4, ninguna spec debe asumir IA externa por defecto.

La IA externa solo podrá considerarse bajo condiciones constitucionales:

```text
spec aprobada;
consentimiento explícito;
datos ficticios, sintéticos o anonimizados;
threat model;
revisión humana;
prohibición de juicio final automático.
```

Una spec debe bloquearse o diferirse si propone:

```text
enviar evidencias a IA externa sin consentimiento;
usar reflexiones personales con IA externa;
analizar portafolios con IA externa;
evaluar automáticamente creatividad o aprendizaje;
usar IA externa como autoridad final;
usar IA externa como mecanismo de vigilancia;
usar datos reales con IA externa sin política formal.
```

La IA puede imaginarse documentalmente como:

```text
asistente creativo;
asistente reflexivo;
organizador;
sugeridor;
analista limitado bajo condiciones futuras.
```

No puede imaginarse como:

```text
juez final;
evaluador automático definitivo;
sustituto del docente;
autoridad sobre valor creativo;
mecanismo de vigilancia.
```

---

## 10. Relación con threat models

Toda spec que toque local-first debe identificar si requiere threat model preliminar o específico.

### 10.1 Activadores de threat model

Debe activarse threat model cuando una spec involucre:

```text
exportación;
publicación;
evidencia educativa;
reflexiones personales;
menores de edad;
datos reales;
datos sensibles;
IA externa;
metadatos;
portafolios;
automatización;
compartir con terceros;
almacenamiento persistente;
pérdida de agencia;
riesgo de rigidez pedagógica.
```

### 10.2 Amenazas mínimas a considerar

```text
exposición accidental de datos;
exportación excesiva;
metadatos identificables;
publicación no consentida;
uso indebido por terceros;
pérdida de control del usuario;
uso de IA externa sin comprensión;
evaluación automática indebida;
rigidez antijuego creativo;
confusión entre borrador y publicación;
confusión entre evidencia local y evidencia compartida.
```

### 10.3 Resultado posible

El threat model puede concluir:

```text
riesgo bajo y mitigado;
riesgo medio condicionado;
riesgo alto que requiere documento específico;
riesgo bloqueante.
```

---

## 11. Relación con POO conceptual

En v0.4.4, POO se usa como herramienta conceptual y no como implementación funcional.

La política local-first debe informar el diseño documental de objetos de dominio.

Objetos conceptuales relacionados:

```text
Usuario
Subjetividad
Portafolio
Evidencia
Reflexion
ActividadCreativa
Consentimiento
Exportacion
RepositorioLocal
DecisionHumana
ThreatModel
UsoIA
RevisionHumana
RegistroDeuda
```

Cada objeto conceptual debe responder:

```text
¿Qué contiene?
¿Qué no debe contener?
¿Qué permanece local?
¿Qué puede exportarse?
¿Qué requiere consentimiento?
¿Qué requiere revisión humana?
¿Qué amenazas introduce?
¿Qué condiciones lo bloquean?
```

Ejemplo conceptual:

```text
Objeto: Evidencia

Responsabilidad:
  Representar una producción educativa, creativa o reflexiva.

Reglas local-first:
  Permanece local por defecto.
  No se publica automáticamente.
  No se exporta sin acción humana explícita.
  No se envía a IA externa por defecto.
  No se evalúa automáticamente como juez final.

Condiciones de bloqueo:
  Contiene datos reales sin política formal.
  Involucra menores sin consentimiento reforzado.
  Se comparte sin revisión humana cuando aplica.
```

---

## 12. Criterios de aceptación para specs futuras

Una spec cumple la Política Local-First Inicial si responde claramente:

```text
¿Qué permanece local?
¿Qué no se guarda?
¿Qué puede exportarse?
¿Qué requiere consentimiento?
¿Qué requiere anonimización?
¿Qué nunca se sube automáticamente?
¿Qué requeriría una spec futura?
```

Además debe demostrar:

```text
minimización de datos;
control del usuario;
no subida automática;
no publicación automática;
no IA externa por defecto;
revisión humana cuando aplica;
protección de evidencia y reflexión;
compatibilidad con experiencia creativa no rígida;
trazabilidad hacia bitácora, transferencia y deuda.
```

---

## 13. Criterios de bloqueo

Debe bloquearse, diferirse o rediseñarse cualquier spec que proponga:

```text
subida automática;
almacenamiento remoto;
backend;
cloud;
API externa;
autenticación;
analíticas;
base de datos remota;
sincronización remota;
uso de datos reales;
datos de menores sin consentimiento reforzado;
IA externa por defecto;
exportación sin consentimiento;
publicación automática;
evaluación automática como juez final;
pérdida de control del usuario;
portafolio sin capacidad de revisión;
reflexión personal tratada como dato administrativo;
experiencia creativa convertida en formulario rígido;
implementación funcional.
```

El bloqueo no debe entenderse como fracaso. En SDD, bloquear a tiempo es una forma de cuidado.

---

## 14. Checklist local-first mínimo

Toda spec futura debe poder completar este checklist:

```text
[ ] La spec declara qué permanece local.
[ ] La spec declara qué no se guarda.
[ ] La spec declara qué puede exportarse.
[ ] La spec declara qué requiere consentimiento.
[ ] La spec declara qué requiere anonimización.
[ ] La spec declara qué nunca se sube automáticamente.
[ ] La spec declara qué requeriría una spec futura.
[ ] La spec minimiza datos.
[ ] La spec evita almacenamiento remoto.
[ ] La spec evita backend.
[ ] La spec evita cloud.
[ ] La spec evita APIs externas.
[ ] La spec evita autenticación.
[ ] La spec evita analíticas.
[ ] La spec evita base de datos remota.
[ ] La spec evita subida automática.
[ ] La spec evita IA externa por defecto.
[ ] La spec distingue guardar, exportar, compartir y publicar.
[ ] La spec identifica consentimiento requerido.
[ ] La spec identifica riesgos.
[ ] La spec activa threat model si aplica.
[ ] La spec preserva agencia humana.
[ ] La spec preserva experiencia creativa no rígida.
[ ] La spec registra decisión humana.
[ ] La spec actualiza bitácora, transferencia y deuda cuando aplique.
```

---

## 15. Relación con bitácoras, deuda, documentación histórica y Wiki humana

Esta política debe transferirse hacia:

```text
bitácora de sesión;
bitácora de transferencia simétrica;
registro de deuda;
documentación histórica del proceso;
Wiki humana.
```

La actualización formal de esos instrumentos se realizará al cierre de la sesión, según la regla vigente de trabajo.

La Wiki humana deberá recibir posteriormente una guía comprensible sobre:

```text
qué significa local-first para usuarios;
qué permanece local;
qué significa exportar;
qué significa compartir;
qué significa consentimiento situado;
qué no hará AI StoryLab 1 por defecto;
cómo se protege la evidencia creativa y educativa.
```

---

## 16. Dictamen de política inicial

Esta política establece el marco local-first inicial de AI StoryLab 1 v0.4.4.

Paga parcialmente la deuda:

```text
ASTL-V044-DEBT-DATA-001
```

No cierra esa deuda hasta que existan:

```text
matriz de datos;
matriz de consentimiento;
registro de threat models requeridos;
specs concretas que apliquen esta política;
revisión humana documentada;
sincronización con bitácora, transferencia, deuda y Wiki humana.
```

Esta política no autoriza implementación funcional.

Su valor principal es impedir que decisiones sobre datos, evidencias, portafolios, exportaciones o IA externa se tomen por inercia técnica. En AI StoryLab 1, local-first empieza como una ética de diseño antes de convertirse en arquitectura.
