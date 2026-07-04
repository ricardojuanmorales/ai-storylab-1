# SPEC-OP-008 : Seguridad Local-First v0.4.5

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Estado:** borrador núcleo operativo, no implementación  
**Prioridad:** alta  
**Familia:** seguridad por diseño, local-first, amenaza controlada


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
  deuda_generada_o_reducida: Reduce deuda de seguridad temprana; genera deuda de threat model detallado y criterios de retención local.
  prioridad: alta
  estado: borrador_nucleo_condicionado
```

## 2. Definición operativa de local-first en v0.4.5

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

## 3. Zonas de seguridad conceptual

| Zona | Descripción | Riesgo principal | Control requerido |
|---|---|---|---|
| Exploración privada | Actividad creativa inicial no guardada o privada | captura invisible | no captura por defecto |
| Guardado local | Conservación voluntaria en entorno local | acceso compartido o persistencia no entendida | consentimiento y aviso claro |
| Evidencia seleccionada | Material marcado como evidencia | vigilancia o evaluación automática | selección humana y propósito explícito |
| Exportación manual | Salida preparada por el usuario | fuga o envío accidental | confirmación separada |
| Compartir externo | Entrega a docente, investigador u otro | uso secundario | consentimiento, revisión humana y contexto |
| IA futura | Asistencia o análisis por IA | inferencia opaca y proveedor externo | bloqueada hasta spec y gate reforzado |

## 4. Mini threat model conceptual

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

## 5. Semilla arquitectónica permitida

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

## 6. Criterios de prueba humana

```text
[ ] La experiencia puede describirse sin conexión.
[ ] El usuario entiende cuándo algo se guarda.
[ ] El usuario entiende cuándo algo sale del entorno local.
[ ] Un docente no recibe evidencia automáticamente.
[ ] Un investigador no accede a datos automáticamente.
[ ] La seguridad no convierte el flujo creativo en formulario rígido.
[ ] IA externa permanece bloqueada.
```

## 7. Dictamen

SPEC-OP-008 afirma que local-first no es un amuleto técnico. Es una promesa que debe probarse. La seguridad entra temprano, con botas limpias y linterna pequeña.
