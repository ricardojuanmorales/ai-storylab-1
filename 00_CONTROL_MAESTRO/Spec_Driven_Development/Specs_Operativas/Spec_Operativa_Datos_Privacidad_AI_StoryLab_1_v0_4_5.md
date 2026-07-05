# SPEC-OP-007 : Datos y Privacidad v0.4.5

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Estado:** aprobada para Specs Núcleo con deuda controlada, no implementación  
**Prioridad:** alta  
**Familia:** privacidad por defecto, minimización, clasificación de datos  
**Código documental:** SPEC-OP-007-DATOS-PRIVACIDAD


> **Guardarraíl constitucional v0.4.5**  
> Este documento es una pieza de especificación operativa. No autoriza implementación funcional, backend, cloud, autenticación, analíticas, IA externa, manejo de datos reales, subida automática ni automatizaciones funcionales. Toda transición posterior requiere revisión humana PH-IT-AT, análisis de riesgo, consentimiento situado, criterios local-first y gate constitucional.


## 1. Ficha YAML operativa

```yaml
spec_candidata:
  nombre: Spec de datos y privacidad
  codigo_documental: SPEC-OP-007-DATOS-PRIVACIDAD
  proposito: Clasificar datos conceptuales, definir minimización, privacidad por defecto, límites de uso, evidencias permitidas y bloqueos de exposición.
  problema_que_atiende: Evita que una experiencia creativa se convierta en recolector opaco de identidad, emociones, desempeño, ubicación, voz, imagen o contexto escolar.
  experiencia_humana_que_protege: Privacidad, intimidad creativa, control de autoría, protección de menores y derecho a experimentar sin vigilancia.
  perfiles_usuario_afectados:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_afectados:
    - PH
    - IT
    - AT
  datos_tocados:
    - datos_no_requeridos
    - datos_locales_minimos
    - datos_creativos_voluntarios
    - metadatos_conceptuales
    - datos_sensibles_bloqueados
    - datos_de_exportacion_controlada
  evidencias_tocadas:
    - evidencia_creativa_voluntaria
    - reflexion_privada
    - artefacto_local
    - seleccion_de_portafolio
    - registro_conceptual_de_visibilidad
  rol_de_IA: IA externa bloqueada por defecto. Ningún dato se prepara para IA sin spec propia, consentimiento separado, threat model y gate reforzado.
  riesgos:
    - sobrerrecoleccion
    - identificacion_de_menores
    - inferencias_emocionales
    - uso_secundario_de_evidencia
    - mezcla_de_portafolio_y_expediente
    - exportacion_accidental
    - retencion_indefinida
  criterios_local_first:
    - datos reales no usados en v0.4.5
    - todo modelo se describe conceptualmente
    - no subida automática
    - no cuenta obligatoria
    - no sincronización remota
    - privacidad por defecto para reflexiones y borradores
  consentimiento_requerido:
    - guardar datos locales
    - marcar evidencia como compartible
    - exportar artefacto
    - usar evidencia en contexto docente
    - usar evidencia en investigación
    - cualquier análisis automatizado futuro
  criterios_de_no_rigidez:
    - permitir crear sin perfil completo
    - permitir evidencia fragmentaria
    - permitir títulos y etiquetas opcionales
    - permitir borrado conceptual
    - evitar campos obligatorios innecesarios
  semilla_arquitectonica: Taxonomía conceptual de datos: Bloqueado, No requerido, Local mínimo, Creativo voluntario, Evidencia seleccionada, Exportable manualmente. No define esquema de base de datos.
  criterios_de_diseno:
    - minimización visible
    - privacidad explicada por acción
    - separación entre borrador, evidencia y exportación
    - controles humanos de visibilidad
    - lenguaje claro sobre qué no se recoge
  criterios_de_prueba:
    - prueba de minimización
    - prueba de clasificación de sensibilidad
    - prueba de no datos reales
    - revisión de protección de menores
    - verificación de no IA externa
  revision_humana: PH valida agencia y comprensión; IT valida clasificación, ética y trazabilidad; AT valida privacidad de proceso creativo y formas no textuales.
  gate_requerido: Gate Constitucional de Preimplementación + Gate de Aprobación Specs Núcleo 1 v0.4.5 + revisión PH-IT-AT
  deuda_generada_o_reducida: Reduce deuda de privacidad y clasificación; genera deuda de taxonomía detallada por tipo de evidencia y contexto institucional.
  prioridad: alta
  estado: aprobada_para_specs_nucleo_con_deuda_controlada
```


## 2. Alcance de SPEC-OP-007

SPEC-OP-007 aplica a toda decisión documental futura de AI StoryLab 1 que implique datos, evidencias, reflexiones, metadatos, visibilidad, exportación, uso docente, uso investigativo, análisis automatizado futuro o protección reforzada de estudiantes de escuela superior.

Esta spec no autoriza captura, almacenamiento, sincronización, análisis, inferencia, retención, exportación ni uso de datos reales. Su función es establecer una taxonomía conceptual mínima para que toda spec posterior pueda declarar qué datos no toca, qué datos permanecen bloqueados, qué datos serían opcionales, qué evidencias requieren consentimiento y qué usos quedan fuera de alcance hasta revisión PH-IT-AT y gate constitucional.

SPEC-OP-007 depende de SPEC-OP-006 Consentimiento Informado y Situado. Ningún dato, evidencia, reflexión, metadato, visibilidad, exportación, uso docente, uso investigativo o análisis automatizado futuro puede considerarse autorizado por clasificación de datos solamente. Toda acción sensible requiere consentimiento situado, propósito explícito y revisión humana cuando corresponda.

## 3. Definiciones operativas mínimas

**Dato:** unidad conceptual de información que puede describir, identificar, contextualizar, clasificar o relacionar una acción, creación, reflexión, evidencia o interacción.

**Dato bloqueado:** dato que no debe solicitarse, modelarse como requisito, capturarse, inferirse ni usarse en v0.4.5.

**Dato no requerido:** dato que podría parecer útil en una fase futura, pero que no es necesario para la experiencia creativa básica ni para las specs núcleo actuales.

**Dato local mínimo:** dato conceptual necesario para describir una acción local sin crear dependencia de cuenta, nube, sincronización, perfil completo ni servicio externo.

**Dato creativo voluntario:** material producido por una persona durante una experiencia creativa. Permanece privado por defecto y no se convierte automáticamente en evidencia.

**Evidencia seleccionada:** artefacto, fragmento, reflexión o versión marcada voluntariamente por una persona como evidencia bajo propósito explícito y consentimiento situado.

**Reflexión privada:** texto, imagen, voz, nota, marca o expresión personal vinculada al proceso creativo. Debe tratarse como privada por defecto y no como insumo analítico.

**Metadato conceptual:** información sobre el estado, propósito, visibilidad, versión o relación de un artefacto. En v0.4.5 no implica registro técnico real.

**Visibilidad:** condición que define quién puede ver, revisar, recibir o interpretar un artefacto, evidencia, reflexión o dato.

**Uso secundario:** uso distinto al propósito original de creación, guardado, evidencia, docencia o investigación. Requiere consentimiento específico, revisión humana y spec correspondiente.

## 4. Clasificación conceptual de datos

| Clase | Descripción | Estado v0.4.5 | Ejemplos conceptuales | Regla |
|---|---|---|---|---|
| Datos bloqueados | Datos que no deben tocarse en esta fase | Prohibidos | identidad legal, ubicación precisa, biometría, credenciales, datos clínicos | No diseñar flujos que los requieran |
| Datos no requeridos | Datos útiles quizá en futuro, pero no necesarios ahora | Fuera de alcance | cuenta, perfil completo, historial remoto | No pedir |
| Datos locales mínimos | Datos conceptuales necesarios para explicar flujo local | Permitidos solo como modelo | título opcional, estado conceptual | Deben ser opcionales o justificables |
| Datos creativos voluntarios | Material creado por la persona | Privado por defecto | boceto, nota, escena, mapa | No evidencia hasta que el usuario lo decida |
| Evidencia seleccionada | Material marcado por la persona como evidencia | Control humano | versión, reflexión, decisión | Requiere consentimiento situado |
| Datos exportables | Salida manual preparada por el usuario | Bloqueada hasta spec posterior | paquete de portafolio, informe | Requiere exportación controlada |

## 5. Reglas de clasificación conceptual

### Regla de clasificación por defecto

Cuando una spec futura no pueda clasificar claramente un dato, evidencia, reflexión, metadato o rastro conceptual, deberá tratarlo provisionalmente como dato sensible reforzado o dato bloqueado hasta que exista justificación documental, revisión PH-IT-AT y gate correspondiente.

La ambigüedad no habilita recolección, exposición, análisis, exportación ni uso secundario.

### Regla de escalamiento de sensibilidad

Un dato local mínimo, creativo voluntario o metadato conceptual puede escalar a dato sensible reforzado si permite identificar a una persona, inferir emociones, asociar una creación con desempeño académico, revelar contexto escolar o familiar, exponer ubicación, voz, imagen, identidad o producir vigilancia directa o indirecta.

La sensibilidad no depende solo del tipo de dato, sino también de su combinación, propósito, visibilidad, contexto y posibilidad de uso secundario.

### Regla de separación entre creación, dato y evidencia

Una producción creativa no debe tratarse automáticamente como dato utilizable, evidencia académica, evidencia investigativa, reflexión analizable ni material exportable. Para que una creación cambie de estado, debe existir propósito explícito, clasificación de datos, consentimiento situado, visibilidad definida y revisión humana cuando corresponda.

### Regla de visibilidad y retención conceptual

Toda clasificación conceptual de datos debe declarar:

```text
- visibilidad por defecto;
- propósito permitido;
- condición de consentimiento;
- posibilidad de retiro;
- relación con evidencia;
- relación con exportación;
- retención conceptual esperada;
- deuda si el criterio no está definido.
```


## 6. Datos sensibles reforzados

```text
[!] Menores de edad: cualquier dato personal, imagen, voz, escuela, ubicación, emociones o contexto familiar requiere cuidado reforzado.
[!] Reflexiones: deben tratarse como privadas por defecto, no como insumo analítico.
[!] Evidencia creativa: no debe convertirse automáticamente en evaluación.
[!] Docente: no debe recibir datos por defecto.
[!] Investigador: no debe acceder a evidencia sin consentimiento, protocolo y revisión humana.
```

### Regla de sensibilidad directa e indirecta

Un dato se considera sensible reforzado no solo cuando identifica directamente a una persona, sino también cuando puede hacerlo por combinación con otros datos, evidencias, metadatos, contexto escolar, grupo, actividad, fecha, voz, imagen, ubicación, expresión emocional, relación familiar o desempeño académico.

En caso de duda, la clasificación debe escalar hacia mayor protección.

### Regla de no inferencia emocional o diagnóstica

Las emociones, reflexiones, imágenes, metáforas, escenas, personajes, notas de proceso o decisiones creativas no deben utilizarse para inferencias diagnósticas, perfiles psicológicos, alertas automatizadas, clasificación de riesgo, evaluación disciplinaria ni juicio académico automático.

Toda lectura humana de una reflexión deberá reconocer su contexto creativo, pedagógico y situado.

### Regla de acceso docente no automático

La participación en una actividad creativa no autoriza por sí misma que un docente acceda a borradores, reflexiones privadas, metadatos, versiones intermedias, evidencia no seleccionada o datos de proceso.

Cualquier acceso docente deberá distinguir entre requisito pedagógico, entrega académica, evidencia seleccionada, retroalimentación humana y usos adicionales. Los usos adicionales requieren consentimiento situado y criterio documental específico.

### Regla de separación entre docencia e investigación

Una actividad docente no autoriza automáticamente uso investigativo de datos, evidencias, reflexiones, producciones creativas o metadatos. Todo uso investigativo futuro deberá declararse como uso distinto, con propósito explícito, consentimiento situado, revisión humana, protocolo correspondiente y gate documental aplicable.


## 7. Reglas de minimización

```text
1. Si una experiencia puede funcionar sin dato, el dato no se pide.
2. Si un dato puede ser opcional, no se vuelve obligatorio.
3. Si una evidencia puede permanecer privada, no se comparte por defecto.
4. Si una reflexión puede existir sin análisis, no se analiza.
5. Si una acción requiere consentimiento, no se agrupa bajo consentimiento genérico.
6. Si un dato puede identificar a un estudiante de escuela superior, se trata como reforzado o bloqueado.
```

### Regla de privacidad por defecto

Todo borrador, reflexión, artefacto creativo, versión intermedia, nota de proceso, metadato conceptual o evidencia no seleccionada debe considerarse privado por defecto.

La privacidad por defecto solo puede cambiar mediante una acción humana situada, con propósito explícito, visibilidad comprensible, clasificación de datos y consentimiento cuando corresponda.

### Regla de no vigilancia pedagógica

SPEC-OP-007 prohíbe que la experiencia creativa sea especificada como mecanismo de vigilancia pedagógica, monitoreo continuo, análisis invisible de desempeño, comparación automática, inferencia emocional, perfilamiento de estudiantes o acceso docente no situado.

La revisión humana puede acompañar, orientar o retroalimentar, pero no debe convertir el proceso creativo privado en observación permanente ni evaluación automática.

### Regla contra campos obligatorios innecesarios

Toda spec futura deberá justificar cualquier campo obligatorio. Si una experiencia puede funcionar sin nombre legal, cuenta, perfil completo, institución, grupo, edad exacta, ubicación, historial, evaluación, reflexión obligatoria o metadato identificable, ese campo deberá permanecer fuera de alcance, opcional o bloqueado según corresponda.

La comodidad administrativa no justifica recolección de datos.

### Regla de minimización por propósito

Un dato, evidencia, reflexión o metadato conceptual no debe usarse para un propósito distinto al declarado. Todo cambio de propósito, visibilidad, uso docente, uso investigativo, exportación, análisis automatizado futuro o retención deberá tratarse como acción sensible y volver a pasar por consentimiento situado, clasificación de datos, revisión humana y gate correspondiente.



## 8. Dependencia con SPEC-OP-006 Consentimiento Informado y Situado

La clasificación conceptual de un dato, evidencia, reflexión, metadato o estado de visibilidad no autoriza su uso. Toda acción sensible identificada por SPEC-OP-007 deberá remitirse a SPEC-OP-006 para confirmar propósito explícito, comprensión humana, consentimiento situado, posibilidad de retiro y revisión humana cuando corresponda.

Ningún dato puede pasar de borrador privado a evidencia, de evidencia a uso docente, de uso docente a investigación, de investigación a evaluación, de privado a exportable o de local a IA futura sin consentimiento situado y gate documental aplicable.

## 9. Dependencia con SPEC-OP-008 Seguridad Local-First

La privacidad por defecto y la minimización de datos no garantizan seguridad por sí solas. Toda clase de dato, evidencia, reflexión, metadato o estado de visibilidad deberá evaluarse también bajo SPEC-OP-008 para determinar zona local-first, riesgo de exposición, dispositivo compartido, exportación accidental, acceso docente, acceso investigativo, dependencia futura o activación no autorizada.

Una acción puede estar consentida y minimizada, pero seguir siendo riesgosa si ocurre en una zona local, escolar, compartida, exportable o externa sin controles humanos suficientes.

## 10. Regla triangular de Specs Núcleo

Ninguna acción sensible relacionada con datos, evidencia, reflexión, metadatos, visibilidad, exportación, uso docente, uso investigativo, evaluación o IA futura puede considerarse suficientemente especificada si no responde simultáneamente a tres preguntas:

```text
1. Consentimiento situado:
   ¿La persona entiende, acepta, puede pausar y puede retirar esta acción?

2. Datos y privacidad:
   ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca esta acción,
   y cuál es su clasificación, propósito y límite?

3. Seguridad local-first:
   ¿En qué zona ocurre esta acción,
   qué riesgo local, escolar, compartido, exportable o externo activa,
   y qué control humano requiere?
```

## 11. Matriz mínima de cruce entre consentimiento, datos y seguridad

Toda spec futura que toque datos o evidencias deberá declarar, como mínimo:

```text
- acción sensible;
- clase de dato;
- propósito;
- visibilidad por defecto;
- consentimiento requerido;
- zona local-first;
- riesgo principal;
- control humano;
- deuda si falta definición.
```

Esta matriz no implementa mecanismos funcionales. Solo define una obligación documental mínima para specs posteriores.

## 12. Semilla arquitectónica permitida

```text
Entidad conceptual: ClasificacionDato
Responsabilidad: nombrar sensibilidad, propósito, visibilidad y estado permitido de un dato.
Relaciones conceptuales:
  ArtefactoCreativo -> puede_contener -> DatosCreativosVoluntarios
  EvidenciaCreativa -> requiere -> ConsentimientoSituado
  ExportacionControlada -> requiere -> RevisionHumana
Límites:
  no define persistencia real
  no define cifrado real
  no define estructura de base de datos
  no define servicios externos
  no define analíticas
Decisiones reversibles:
  nombres de categorías
  granularidad de sensibilidad
  tabla de retención conceptual
```

## 13. Criterios de prueba humana

```text
[ ] Se puede explicar qué datos no se recogen.
[ ] Se puede distinguir borrador privado de evidencia seleccionada.
[ ] Se puede identificar cuándo una reflexión es sensible.
[ ] Se puede confirmar que no hay uso de datos reales en v0.4.5.
[ ] Se puede confirmar que no hay IA externa por defecto.
[ ] Se puede revisar la protección reforzada de estudiantes de escuela superior.
[ ] Se puede demostrar que clasificar datos no autoriza usarlos.
[ ] Se puede demostrar que privacidad por defecto no equivale a seguridad automática.
[ ] Se puede detectar si una spec futura habilita vigilancia pedagógica.
[ ] Se puede justificar cualquier campo obligatorio.
```


## 14. Deuda controlada

```text
DEUDA-SESION-006: actualizar glosario general SDD con términos de datos y privacidad.
DEUDA-SESION-007: identificar documentos necesarios para la base de conocimientos SDD sobre datos, privacidad y minimización.
DEUDA-SESION-008: desarrollar matriz de clasificación de datos por sensibilidad, visibilidad, propósito, consentimiento, exportación y retención conceptual.
DEUDA-SESION-009: desarrollar matriz de datos sensibles reforzados para estudiantes de escuela superior.
DEUDA-SESION-010: desarrollar criterios de minimización por defecto para specs futuras.
DEUDA-SESION-011: desarrollar matriz de cruce consentimiento-datos-seguridad.
DEUDA-PH-004: guía PH para protección de estudiantes frente a vigilancia pedagógica.
DEUDA-PH-005: guía PH para detectar vigilancia pedagógica y presión evaluativa.
DEUDA-PH-006: criterios PH para revisar datos bajo consentimiento y seguridad local-first.
DEUDA-SDD-IT-001: guía IT para clasificación conceptual de datos y minimización.
DEUDA-SDD-IT-002: criterios IT para sensibilidad por combinación de datos.
DEUDA-SDD-IT-003: guía IT para minimización, campos obligatorios y límites de propósito.
DEUDA-SDD-IT-004: matriz IT de cruce entre clases de datos, zonas de seguridad y controles.
DEUDA-AT-001: guía AT para privacidad del proceso creativo.
DEUDA-AT-002: criterios AT para evitar que privacidad y seguridad rigidicen la creación.
```

## 15. Dictamen

SPEC-OP-007 se aprueba como segunda esclusa operativa de Specs Núcleo v0.4.5, bajo el estado `aprobada_para_specs_nucleo_con_deuda_controlada`.

La aprobación permite usar esta spec como criterio rector de privacidad, minimización, clasificación conceptual, sensibilidad, visibilidad, no vigilancia pedagógica y límites de uso para specs posteriores.

La aprobación no autoriza implementación funcional, captura de datos reales, base de datos, UI real, almacenamiento, sincronización, exportación, análisis automatizado, IA externa, uso investigativo ni evaluación automática.
