# SPEC-OP-008 : Seguridad Local-First v0.4.5

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Estado:** aprobada para Specs Núcleo con deuda controlada, no implementación  
**Prioridad:** alta  
**Familia:** seguridad por diseño, local-first, amenaza controlada  
**Código documental:** SPEC-OP-008-SEGURIDAD-LOCAL-FIRST

> **Guardarraíl constitucional v0.4.5**  
> Este documento es una pieza de especificación operativa. No autoriza implementación funcional, backend, cloud, autenticación, analíticas, IA externa, manejo de datos reales, subida automática ni automatizaciones funcionales. Toda transición posterior requiere revisión humana PH-IT-AT, análisis de riesgo, consentimiento situado, criterios local-first y gate constitucional.

## 1. Ficha YAML operativa

```yaml
spec_candidata:
  nombre: Spec de seguridad local-first
  codigo_documental: SPEC-OP-008-SEGURIDAD-LOCAL-FIRST
  proposito: Definir seguridad conceptual para una experiencia local-first antes de arquitectura, datos reales o prototipo funcional.
  problema_que_atiende: Evita asumir que local-first es automáticamente seguro y bloquea rutas prematuras hacia nube, autenticación, analíticas, IA externa o sincronización.
  experiencia_humana_que_protege: Confianza situada, control local, seguridad de menores, privacidad de creación, reversibilidad y tranquilidad creativa.
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
    - modelo_de_amenazas_conceptual
    - límites_de_almacenamiento_local
    - estados_de_visibilidad
    - riesgos_de_exportacion
    - controles_humanos
  evidencias_tocadas:
    - checklist_de_seguridad
    - matriz_de_riesgos
    - prueba_de_no_dependencia_remota
    - bitacora_de_revision_humana
  rol_de_IA: IA externa bloqueada por defecto. IA futura se considera superficie de riesgo, no feature.
  riesgos:
    - falsa_seguridad_por_ser_local
    - perdida_de_datos_locales
    - acceso_compartido_en_dispositivos
    - exposicion_por_exportacion
    - confusion_de_visibilidad
    - automatizacion_no_autorizada
    - dependencia_futura_no_revisada
  criterios_local_first:
    - funcionar conceptualmente sin conexión
    - no requerir cuenta
    - no requerir servidor
    - no subir archivos automáticamente
    - no depender de IA externa
    - separar guardar de exportar
    - definir seguridad antes de persistencia real
  consentimiento_requerido:
    - guardar localmente
    - exportar manualmente
    - compartir evidencia
    - activar cualquier análisis o asistencia futura
    - usar dispositivo compartido o contexto escolar administrado
  criterios_de_no_rigidez:
    - seguridad sin convertir la experiencia en trámite intimidante
    - avisos breves y situados
    - controles visibles sin saturar
    - pausas y cancelación
  semilla_arquitectonica: Modelo conceptual de seguridad local-first con zonas: exploración privada, guardado local, evidencia seleccionada, exportación manual, compartir externo. No define mecanismos técnicos reales.
  criterios_de_diseno:
    - explicar límites de lo local
    - mostrar estado de privacidad
    - prevenir exportación accidental
    - no usar patrones oscuros
    - distinguir entorno personal, escolar y compartido
  criterios_de_prueba:
    - prueba de modo sin conexión conceptual
    - prueba de no subida automática
    - prueba de exportación manual explícita
    - revisión de amenazas para menores
    - revisión PH-IT-AT
  revision_humana: PH valida confianza y agencia; IT valida riesgos, amenaza y trazabilidad; AT valida seguridad sin rigidez ni miedo creativo.
  gate_requerido: Gate Constitucional de Preimplementación + Gate de Aprobación Specs Núcleo 1 v0.4.5 + revisión PH-IT-AT
  deuda_generada_o_reducida: Reduce deuda de seguridad temprana; genera deuda de threat model detallado, criterios de retención local, matriz de zonas y seguridad habitable.
  prioridad: alta
  estado: aprobada_para_specs_nucleo_con_deuda_controlada
```

## 2. Alcance de SPEC-OP-008

SPEC-OP-008 aplica a toda decisión documental futura de AI StoryLab 1 que implique exploración local, guardado local, evidencia seleccionada, exportación manual, compartir externo, dispositivo compartido, contexto escolar administrado, activación futura de IA, riesgos de visibilidad o controles humanos de seguridad.

Esta spec no autoriza implementación de almacenamiento, cifrado, autenticación, permisos del sistema operativo, sincronización, respaldo, servidor, nube, analíticas, IA externa, manejo de datos reales ni pruebas con personas. Su función es establecer criterios conceptuales para que toda spec posterior declare zona de seguridad, riesgo principal, control humano, relación con consentimiento, relación con datos/privacidad y deuda aplicable.

## 3. Definiciones operativas mínimas

**Local-first:** criterio conceptual según el cual la experiencia creativa básica no presupone servidor, cuenta, nube, sincronización, IA externa, analíticas, subida automática ni dependencia remota.

**Seguridad local-first:** revisión de riesgos que pueden surgir incluso cuando una experiencia es local, incluyendo pérdida local, exposición en dispositivo compartido, confusión de visibilidad, exportación accidental o uso no autorizado.

**Zona de seguridad conceptual:** estado documental que describe dónde ocurre una acción o artefacto dentro del flujo: exploración privada, guardado local, evidencia seleccionada, exportación manual, compartir externo o IA futura.

**Control humano:** decisión, pausa, revisión, confirmación o mediación realizada por una persona antes de que una acción sensible cambie de estado, visibilidad, propósito o riesgo.

**Dispositivo compartido:** entorno local usado por más de una persona o administrado por una escuela, familia, laboratorio, biblioteca, institución o tercero.

**Exportación accidental:** salida no suficientemente comprendida, confirmada o situada de un artefacto, evidencia, reflexión, dato o metadato fuera de su zona local o privada.

**Amenaza conceptual:** riesgo documentado antes de implementación funcional. No describe todavía una vulnerabilidad técnica real, sino una condición que una spec futura deberá evitar, mitigar o revisar.

**Seguridad sin rigidez creativa:** principio según el cual la protección debe reducir riesgo sin convertir la experiencia creativa en trámite intimidante, vigilancia permanente o jaula de permisos.

## 4. Dependencia con SPEC-OP-006 y SPEC-OP-007

SPEC-OP-008 depende de SPEC-OP-006 Consentimiento Informado y Situado y de SPEC-OP-007 Datos y Privacidad. Ninguna zona de seguridad, amenaza conceptual o control humano puede evaluarse de forma aislada. Toda acción sensible deberá declarar consentimiento requerido, clase de dato o evidencia afectada, visibilidad por defecto, riesgo local-first y control humano correspondiente.

### Dependencia con SPEC-OP-006 Consentimiento Informado y Situado

Una acción no queda autorizada por estar descrita como segura, local o controlada. Toda acción sensible relacionada con guardado local, evidencia seleccionada, exportación manual, compartir externo, contexto escolar, dispositivo compartido, investigación, evaluación o IA futura deberá remitirse a SPEC-OP-006 para confirmar comprensión humana, propósito explícito, consentimiento situado, posibilidad de pausa, retiro y revisión humana cuando corresponda.

### Dependencia con SPEC-OP-007 Datos y Privacidad

Una acción no queda suficientemente protegida por ocurrir en entorno local. Toda zona de seguridad, amenaza conceptual, control humano, exportación, dispositivo compartido, evidencia seleccionada o activación futura deberá remitirse a SPEC-OP-007 para declarar clase de dato, sensibilidad, visibilidad por defecto, minimización, propósito, límite de uso, retención conceptual y deuda aplicable.

## 5. Definición operativa de local-first en v0.4.5

```text
Local-first significa que el diseño conceptual no presupone servidor, cuenta, sincronización, IA externa, analíticas, subida automática ni dependencia remota para que la experiencia creativa básica tenga sentido.
```

No significa:

```text
- que todo dato local sea seguro por defecto
- que no exista riesgo en dispositivos compartidos
- que exportar sea inocuo
- que se pueda omitir consentimiento
- que se pueda iniciar implementación
```

### Regla de local-first como criterio conceptual

En v0.4.5, local-first no define arquitectura técnica, almacenamiento real, cifrado, permisos del sistema operativo, autenticación, sincronización ni respaldo. Funciona como criterio documental para impedir que una experiencia creativa básica dependa prematuramente de servidor, cuenta, nube, IA externa, analíticas o subida automática.

Toda decisión técnica futura deberá pasar por spec propia, análisis de riesgo, revisión PH-IT-AT y gate constitucional.

### Regla de no equivalencia entre local-first y privacidad

Que una acción ocurra localmente no significa que sea privada por defecto en todos los contextos. Un entorno local puede estar compartido, administrado, supervisado, proyectado, respaldado, prestado o expuesto a otras personas.

Toda spec futura deberá distinguir entre local, privado, visible, compartido, exportable y externo.

### Regla de control situado

Local-first aumenta la posibilidad de control humano, pero no garantiza control absoluto. Toda spec futura deberá considerar si el dispositivo es personal, compartido, escolar, institucional, familiar o administrado por terceros.

Cuando exista contexto escolar o dispositivo compartido, deberán declararse riesgos adicionales de visibilidad, pérdida, acceso no intencional, presión institucional y exportación accidental.

### Regla de experiencia creativa básica sin cuenta obligatoria

La experiencia creativa básica de AI StoryLab 1 no debe depender de cuenta obligatoria, perfil completo, autenticación externa, sincronización remota, IA externa, analíticas ni conexión persistente.

Cualquier función futura que requiera identidad, cuenta, sincronización, exportación, colaboración remota o proveedor externo deberá tratarse como ampliación sensible, no como requisito de entrada a la creación.

## 6. Zonas de seguridad conceptual

| Zona | Descripción | Riesgo principal | Control requerido |
|---|---|---|---|
| Exploración privada | Actividad creativa inicial no guardada o privada | captura invisible | no captura por defecto |
| Guardado local | Conservación voluntaria en entorno local | acceso compartido o persistencia no entendida | consentimiento y aviso claro |
| Evidencia seleccionada | Material marcado como evidencia | vigilancia o evaluación automática | selección humana y propósito explícito |
| Exportación manual | Salida preparada por el usuario | fuga o envío accidental | confirmación separada |
| Compartir externo | Entrega a docente, investigador u otro | uso secundario | consentimiento, revisión humana y contexto |
| IA futura | Asistencia o análisis por IA | inferencia opaca y proveedor externo | bloqueada hasta spec y gate reforzado |

### Regla de transición entre zonas de seguridad

Ninguna zona de seguridad habilita automáticamente la siguiente. La exploración privada no autoriza guardado local; el guardado local no autoriza evidencia seleccionada; la evidencia seleccionada no autoriza exportación manual; la exportación manual no autoriza compartir externo; compartir externo no autoriza investigación, evaluación ni IA futura.

Toda transición hacia una zona de mayor exposición deberá declarar propósito, visibilidad, clase de dato o evidencia, consentimiento requerido, riesgo principal y control humano correspondiente.

### Condición transversal: dispositivo compartido o contexto administrado

Toda zona de seguridad deberá evaluarse considerando si la acción ocurre en un dispositivo personal, compartido, escolar, institucional, familiar, prestado, público o administrado por terceros.

Cuando exista dispositivo compartido o contexto administrado, la spec futura deberá tratar como reforzados los riesgos de visibilidad no intencional, acceso de terceros, pérdida local, presión institucional, respaldo no comprendido, historial persistente y exportación accidental.

### Regla de pérdida local

La seguridad local-first debe reconocer el riesgo de pérdida local. La ausencia de servidor, cuenta o sincronización puede proteger contra exposición remota, pero también puede limitar recuperación, respaldo o continuidad entre dispositivos.

Toda spec futura que proponga guardado local, evidencia seleccionada o exportación deberá declarar qué riesgos conceptuales existen respecto a pérdida, borrado, recuperación, retención y continuidad creativa.

### Regla de visibilidad por zona

Cada zona de seguridad deberá declarar visibilidad por defecto. La visibilidad no se presume por el nombre de la zona. Un artefacto guardado localmente puede seguir siendo privado; una evidencia seleccionada puede no ser compartida; una exportación manual puede no autorizar uso secundario; y compartir externo no autoriza investigación, evaluación automática ni IA futura.

La visibilidad deberá relacionarse siempre con consentimiento situado, clasificación de datos y control humano.

### Regla sobre borrado, recuperación y retención conceptual

En v0.4.5, borrado, recuperación y retención son criterios conceptuales, no mecanismos técnicos. Toda spec futura que proponga persistencia, respaldo, recuperación, historial, versiones, portafolio o exportación deberá declarar explícitamente qué se entiende por conservar, retirar, borrar, recuperar o retener, y qué deuda técnica o institucional queda pendiente.

## 7. Mini threat model conceptual

```yaml
amenazas_conceptuales:
  acceso_no_intencional_en_dispositivo_compartido:
    perfiles_afectados: [estudiante_escuela_superior, estudiante_universitario]
    mitigacion_documental: avisos de privacidad local, opción de no guardar, borrado conceptual
  exportacion_accidental:
    perfiles_afectados: [todos]
    mitigacion_documental: separación guardar/exportar, confirmación situada, vista previa
  vigilancia_pedagogica:
    perfiles_afectados: [estudiante_escuela_superior, estudiante_universitario]
    mitigacion_documental: evidencia voluntaria, no evaluación automática, revisión humana
  uso_secundario_investigativo:
    perfiles_afectados: [todos]
    mitigacion_documental: consentimiento específico, protocolo, aprobación humana
  activacion_ia_no_autorizada:
    perfiles_afectados: [todos]
    mitigacion_documental: IA bloqueada por defecto, gate reforzado
  rigidez_por_seguridad:
    perfiles_afectados: [todos]
    mitigacion_documental: seguridad por capas, lenguaje claro, no convertir cuidado en jaula
```

### Regla de threat model conceptual

El mini threat model de SPEC-OP-008 es documental y conceptual. No identifica vulnerabilidades técnicas reales ni define mitigaciones de infraestructura, cifrado, autenticación, permisos del sistema operativo, respaldo, red, nube o proveedor externo.

Su función es anticipar condiciones de riesgo que toda spec futura deberá revisar antes de proponer arquitectura, prototipo, persistencia, exportación, colaboración, investigación, IA o pruebas con personas.

### Estructura mínima para amenazas futuras

Toda amenaza conceptual futura deberá declarar:

```text
- amenaza
- perfiles afectados
- zona de seguridad relacionada
- clase de dato o evidencia afectada
- relación con consentimiento
- riesgo principal
- mitigación documental
- revisión PH-IT-AT requerida
- deuda si falta definición
```

### Regla de escalamiento de amenaza

Una amenaza conceptual deberá escalar a revisión reforzada cuando afecte a estudiantes de escuela superior, datos sensibles, reflexiones privadas, evidencia seleccionada, contexto escolar, dispositivo compartido, exportación, uso investigativo, evaluación o IA futura.

En caso de duda, la amenaza se clasifica hacia mayor protección y no hacia mayor permisividad.

### Regla PH-IT-AT para amenazas conceptuales

Toda amenaza conceptual deberá revisarse desde tres preguntas:

```text
PH:
  ¿La amenaza compromete agencia, comprensión, no coerción,
  protección de estudiantes o confianza situada?

IT:
  ¿La amenaza compromete trazabilidad, minimización,
  visibilidad, clasificación de datos, exposición o control?

AT:
  ¿La mitigación propuesta protege sin convertir la experiencia creativa
  en miedo, vigilancia, formulario rígido o bloqueo expresivo?
```

### Regla de mitigación documental

En v0.4.5, una mitigación documental no resuelve técnicamente una amenaza. Solo establece una condición que deberá cumplirse antes de cualquier diseño o implementación futura.

Ejemplos:

```text
- confirmación situada no equivale a interfaz real
- borrado conceptual no equivale a borrado técnico
- IA bloqueada no equivale a política técnica de proveedor
- dispositivo compartido no equivale a detección automática
- revisión humana no equivale a flujo operativo implementado
```

## 8. Seguridad sin rigidez creativa

### Regla de seguridad proporcional al riesgo

La seguridad local-first deberá ser proporcional al riesgo de la acción. Las acciones de exploración privada deben protegerse principalmente mediante no captura por defecto, claridad y posibilidad de pausa. Las acciones de mayor exposición, como guardado local, evidencia seleccionada, exportación manual, compartir externo o IA futura, requieren controles más explícitos, consentimiento situado y revisión humana cuando corresponda.

La protección no debe añadir fricción innecesaria a la creación básica ni reducir la agencia creativa de la persona.

### Regla de avisos habitables

Los avisos de seguridad deberán ser breves, situados, comprensibles y orientadores. No deberán usar lenguaje intimidante, excesivamente legalista, culpabilizante o ambiguo.

Un aviso habitable debe explicar qué cambia, qué riesgo existe, qué opción tiene la persona y cómo puede pausar, cancelar o pedir mediación humana.

### Regla de controles visibles sin vigilancia permanente

Los controles de seguridad deberán aparecer cuando una acción cambie estado, visibilidad, propósito, zona de seguridad o riesgo. No deberán convertirse en monitoreo continuo, comparación automática, análisis invisible, evaluación permanente ni acumulación innecesaria de rastros.

La visibilidad del control no autoriza vigilancia del proceso creativo.

### Regla de pausa y cancelación

Toda acción sensible futura relacionada con guardado, evidencia, exportación, compartir, investigación, evaluación, IA futura o cambio de visibilidad deberá permitir pausa o cancelación antes de completarse.

Pausar o cancelar no debe interpretarse como error, incumplimiento creativo, pérdida de valor académico ni rechazo de la actividad completa.

### Regla de no castigo a la exploración creativa

La seguridad local-first no debe castigar la exploración, el borrador, la versión incompleta, la pausa, el cambio de dirección, el error fértil ni la decisión de no compartir.

Las specs futuras deberán proteger la posibilidad de crear sin convertir cada intento en evidencia, dato, registro evaluable, entrega obligatoria o exposición institucional.

## 9. Regla triangular de protección núcleo

Ninguna acción sensible puede considerarse suficientemente especificada si no responde simultáneamente a tres preguntas:

```text
1. Consentimiento situado:
   ¿La persona entiende, acepta, puede pausar y puede retirar esta acción?

2. Datos y privacidad:
   ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca esta acción,
   y cuál es su clasificación, sensibilidad, propósito y límite?

3. Seguridad local-first:
   ¿En qué zona ocurre esta acción,
   qué amenaza conceptual activa,
   qué riesgo local, escolar, compartido, exportable o externo presenta,
   y qué control humano requiere?
```

### Regla contra sustituciones falsas

```text
Consentimiento no sustituye privacidad.
Privacidad no sustituye seguridad.
Seguridad no sustituye consentimiento.
Local-first no sustituye threat model.
Minimización no sustituye control humano.
Control humano no sustituye agencia de la persona creadora.
```

### Matriz mínima de revisión para acciones sensibles

Toda spec futura que toque una acción sensible deberá declarar:

```text
- acción sensible
- capa de consentimiento
- clase de dato o evidencia
- visibilidad por defecto
- zona de seguridad local-first
- amenaza conceptual
- riesgo principal
- control humano
- posibilidad de pausa o cancelación
- deuda si falta definición
```

## 10. Semilla arquitectónica permitida

```text
Entidad conceptual: ZonaSeguridadLocal
Responsabilidad: describir el estado de seguridad y visibilidad de una acción o artefacto.
Relaciones conceptuales:
  AccionCreativa -> ocurre_en -> ZonaSeguridadLocal
  ZonaSeguridadLocal -> requiere -> ControlHumano
  ExportacionManual -> requiere -> ConsentimientoSituado
Límites:
  no define cifrado
  no define almacenamiento
  no define permisos del sistema operativo
  no define autenticación
  no define nube
  no define sincronización
Decisiones reversibles:
  nombres de zonas
  granularidad de controles
  orden de avisos
```

## 11. Criterios de prueba humana

```text
[ ] La experiencia puede describirse sin conexión.
[ ] El usuario entiende cuándo algo se guarda.
[ ] El usuario entiende cuándo algo sale del entorno local.
[ ] Un docente no recibe evidencia automáticamente.
[ ] Un investigador no accede a datos automáticamente.
[ ] La seguridad no convierte el flujo creativo en formulario rígido.
[ ] IA externa permanece bloqueada.
[ ] Se puede distinguir local, privado, compartido, exportable y externo.
[ ] Se puede explicar el riesgo de dispositivo compartido o contexto administrado.
[ ] Se puede explicar que local-first no equivale a seguridad real.
```

## 12. Dictamen

SPEC-OP-008 afirma que local-first no es un amuleto técnico. Es una promesa documental que debe probarse antes de cualquier arquitectura futura. La seguridad entra temprano, con botas limpias y linterna pequeña, pero sin convertir la creación en una jaula de candados.

Se aprueba SPEC-OP-008 Seguridad Local-First como tercera esclusa operativa de Specs Núcleo v0.4.5 bajo el estado:

```text
aprobada_para_specs_nucleo_con_deuda_controlada
```

Esta aprobación no autoriza implementación funcional. Autoriza usar SPEC-OP-008 como criterio rector para revisar futuras specs relacionadas con experiencia creativa local-first, evidencia, portafolio, exportación, investigación, evaluación, contextos escolares, dispositivos compartidos, threat model, arquitectura conceptual e IA futura.
