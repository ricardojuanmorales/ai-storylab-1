# Índice Oficial de Gates SDD : Ruta hacia v1.0.0

**Proyecto:** AI StoryLab 1  
**Versión de trabajo:** v0.4.5  
**Fecha:** 2026-07-04  
**Estado:** índice rector propuesto para PR #11  
**Rama:** `v0.4.5-specs-nucleo-pr11`  
**Función documental:** gobierno SDD, planificación longitudinal y organización de gates


> **Guardarraíl constitucional v0.4.5**  
> Este documento organiza gates de decisión y transición. No autoriza implementación funcional, código de aplicación, backend, cloud, autenticación, analíticas, IA externa por defecto, uso de datos reales, subida automática ni automatizaciones funcionales. Todo avance posterior requiere especificación aprobada, análisis de riesgo, consentimiento informado y situado, criterios local-first, revisión humana PH-IT-AT y gate constitucional correspondiente.


## 1. Propósito

Este índice establece la estructura oficial inicial de gates SDD para guiar el cierre de v0.4.5 y ordenar el camino documental, operativo, ético, creativo y técnico hacia v1.0.0.

Su función no es reemplazar los gates individuales. Su función es ordenar el ecosistema de gates antes de redactar el mapa completo de transición.

```text
Indice_Oficial_Gates_SDD_Ruta_v1_0_0
  -> Mapa_Gates_SDD_Ruta_v1_0_0
  -> Gates específicos por transición
  -> Specs priorizadas por dependencia
  -> Evidencias de cierre por versión
  -> Decisiones, deuda, bitácoras y continuidad
```


## 2. Decisiones rectoras incorporadas

```text
[✓] El índice usará estructura híbrida.
[✓] Las versiones serán la columna vertebral longitudinal.
[✓] Cada gate incluirá autorización, riesgo, evidencia, deuda y revisión PH-IT-AT.
[✓] La ubicación documental seguirá función documental, no conveniencia de paquete.
[✓] v0.4.5 cerrará con índice, mapa, specs núcleo priorizadas y criterios de transición a v0.4.6.
[✓] El flujo informático hacia v1.0.0 usará tablero maestro de dependencias acompañado por paquetes de versión.
[✓] El avance quedará bloqueado si faltan consentimiento, threat model, criterios local-first, revisión PH-IT-AT o evidencia de gate.
```


## 3. Orden constitucional de planificación

El orden rector aceptado para priorizar specs, gates y transición es:

```text
A. Protección, consentimiento, privacidad y seguridad.
B. Experiencia creativa local-first.
C. Evidencia, trazabilidad e investigación-creación.
D. Semillas arquitectónicas y transición conceptual.
```

### 3.1 Razón del orden

A no sustituye a B, C ni D. A funciona como suelo constitucional. B, C y D viven dentro de sus condiciones de permiso.

```text
A: define qué puede tocarse, bajo qué consentimiento y con qué protección.
B: define cómo se vive la experiencia creativa sin rigidez ni coerción.
C: define qué cuenta como evidencia, cómo se documenta y cómo se valida.
D: define qué puede modelarse conceptualmente sin convertirse en implementación.
```


## 4. Reglas de colocación documental

```text
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/
  índices rectores, mapas longitudinales, protocolos SDD y documentos de gobierno.

00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/
  specs operativas aprobables o condicionadas.

15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/
  gates evaluativos específicos, checklists de transición y criterios de cierre.

18_DOCUMENTACION_ACTIVA/Registro_Decisiones/
  decisiones de apertura, aprobación, devolución, cierre o cambio de rumbo.

18_DOCUMENTACION_ACTIVA/Bitacoras/
  bitácoras de sesión, transferencia simétrica y seguimiento activo.

18_DOCUMENTACION_ACTIVA/Changelog/
  cambios documentales por PR, versión o sesión.

18_DOCUMENTACION_ACTIVA/Prompts_Activacion/
  prompts de continuidad y reactivación.

20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/
  deuda estructural, operacional, ética, técnica, documental y de validación.

21_WIKI_DOCUMENTACION_HUMANA/Bitacora_Capitan/
  narrativa histórica, metáforas de rumbo y sentido longitudinal del proyecto.
```

### 4.1 Regla semántica de nombres

Los archivos de v0.4.5 deben usar nombres semánticos. Se evita iniciar nombres con prefijos numéricos salvo que una convención ya aprobada lo exija explícitamente.


## 5. Ficha mínima de cada entrada de gate

Cada gate registrado en este índice o en el mapa posterior debe poder expresarse con esta ficha mínima:

```yaml
gate_indice:
  nombre:
  codigo_documental:
  version_objetivo:
  tipo_autorizacion:
  proposito:
  documentos_requeridos:
  specs_requeridas:
  specs_dependientes:
  evidencia_requerida:
  riesgos_bloqueantes:
  deuda_permitida:
  deuda_no_permitida:
  perfiles_usuario_protegidos:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_implicados:
    - PH
    - IT
    - AT
  revision_PH_IT_AT:
  criterio_local_first:
  consentimiento_requerido:
  criterio_de_cierre:
  no_autoriza:
  documento_gate_evaluativo:
  estado:
```


## 6. Índice oficial inicial de gates hacia v1.0.0

### Gate 0 : Activación documental de PR #11

```yaml
gate_indice:
  nombre: Gate de Activación Documental PR11
  codigo_documental: GATE-SDD-000-ACTIVACION-PR11
  version_objetivo: v0.4.5
  tipo_autorizacion: apertura_documental
  proposito: Confirmar que PR #11 funciona como contenedor documental de la sesión y no como implementación funcional.
  documentos_requeridos:
    - Protocolo_Trabajo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
    - Bitacora_Sesion_Activa_AI_StoryLab_1_v0_4_5.md
    - Bitacora_Transferencia_Simetrica_Activa_AI_StoryLab_1_v0_4_5.md
    - Decision_Activacion_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
  specs_requeridas: []
  specs_dependientes:
    - SPEC-OP-006
    - SPEC-OP-007
    - SPEC-OP-008
  evidencia_requerida:
    - PR abierto como draft
    - rama documental activa
    - nombres semánticos aplicados
    - límites constitucionales declarados
  riesgos_bloqueantes:
    - implementación prematura
    - paquete documental sin trazabilidad
    - duplicación de bitácoras
  deuda_permitida:
    - ajustes menores de rutas
    - actualización posterior de changelog
  deuda_no_permitida:
    - código funcional
    - datos reales
    - activación de servicios externos
  perfiles_usuario_protegidos:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_implicados:
    - PH
    - IT
    - AT
  revision_PH_IT_AT: confirmar límites y modo de revisión unitaria
  criterio_local_first: todo documento debe preservar local-first como principio rector
  consentimiento_requerido: no aplica a datos reales; sí aplica como principio de specs futuras
  criterio_de_cierre: PR #11 queda activo como draft documental
  no_autoriza: implementación funcional
  documento_gate_evaluativo: pendiente_si_se_requiere
  estado: activo
```

### Gate 1 : Cierre de Specs Núcleo v0.4.5

```yaml
gate_indice:
  nombre: Gate de Cierre de Specs Núcleo v0.4.5
  codigo_documental: GATE-SDD-001-SPECS-NUCLEO-v0_4_5
  version_objetivo: v0.4.5
  tipo_autorizacion: cierre_specs_nucleo
  proposito: Validar consentimiento, datos/privacidad y seguridad local-first como primera tríada constitucional.
  documentos_requeridos:
    - Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
    - Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
    - Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md
    - Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
    - Gate_Aprobacion_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
  specs_requeridas:
    - SPEC-OP-006
    - SPEC-OP-007
    - SPEC-OP-008
  specs_dependientes:
    - experiencia_creativa_local_first
    - interfaz_no_rigida
    - reflexion_usuario
    - evidencia_creativa
    - portafolio_local
    - exportacion_controlada
    - IA_responsable_condicionada
  evidencia_requerida:
    - revisión unitaria de cada spec
    - dictamen por spec
    - deuda explícita por spec
    - impacto PH-IT-AT
    - impacto por perfil de usuario
  riesgos_bloqueantes:
    - consentimiento genérico
    - sobrerrecolección
    - falsa seguridad local
    - confusión entre evidencia, evaluación e investigación
  deuda_permitida:
    - textos finales por edad
    - ejemplos de escenarios ficticios
    - refinamiento de lenguaje institucional
  deuda_no_permitida:
    - ausencia de consentimiento situado
    - ausencia de clasificación de datos
    - ausencia de criterio local-first
  perfiles_usuario_protegidos:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_implicados:
    - PH
    - IT
    - AT
  revision_PH_IT_AT: obligatoria, diferenciada y registrada
  criterio_local_first: ninguna spec núcleo debe depender de backend, cloud o cuenta remota
  consentimiento_requerido: separado por acción sensible
  criterio_de_cierre: specs núcleo aprobadas o aprobadas con deuda aceptada y controlada
  no_autoriza: arquitectura detallada ni implementación funcional
  documento_gate_evaluativo: 15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/Gate_Aprobacion_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
  estado: aprobado_con_deuda_controlada
```

### Gate 2 : Transición a Arquitectura Conceptual v0.4.6

```yaml
gate_indice:
  nombre: Gate de Transición a Arquitectura Conceptual
  codigo_documental: GATE-SDD-002-ARQUITECTURA-CONCEPTUAL-v0_4_6
  version_objetivo: v0.4.6
  tipo_autorizacion: arquitectura_conceptual
  proposito: Autorizar modelos conceptuales, objetos de dominio, relaciones y límites sin convertirlos en código operativo.
  documentos_requeridos:
    - Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
    - Criterios_Semillas_Arquitectonicas_AI_StoryLab_1_v0_4_5.md
    - Spec_Operativa_Objeto_Dominio_AI_StoryLab_1_v0_4_5.md
  specs_requeridas:
    - specs_nucleo_consentimiento_datos_seguridad
    - objeto_de_dominio
    - pruebas_validacion_humana
  specs_dependientes:
    - experiencia_creativa_local_first
    - portafolio_local
    - evidencia_creativa
  evidencia_requerida:
    - modelo conceptual sin código
    - límites explícitos
    - dependencias futuras declaradas
    - riesgos y decisiones reversibles
  riesgos_bloqueantes:
    - arquitectura convertida en implementación
    - introducción de backend o base de datos remota
    - objetos de dominio que presupongan datos reales
  deuda_permitida:
    - diagramas conceptuales pendientes
    - nomenclatura de entidades ajustable
  deuda_no_permitida:
    - APIs activas
    - credenciales
    - almacenamiento remoto
    - automatización funcional
  perfiles_usuario_protegidos:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_implicados:
    - PH
    - IT
    - AT
  revision_PH_IT_AT: obligatoria antes de detallar flujos
  criterio_local_first: toda entidad conceptual debe poder existir sin nube ni cuenta remota
  consentimiento_requerido: definido por relación con acciones sensibles futuras
  criterio_de_cierre: arquitectura conceptual aprobada como no funcional
  no_autoriza: código de aplicación
  documento_gate_evaluativo: pendiente_v0_4_6
  estado: proyectado
```

### Gate 3 : Transición a Diseño de Experiencia v0.4.7

```yaml
gate_indice:
  nombre: Gate de Transición a Diseño de Experiencia Creativa
  codigo_documental: GATE-SDD-003-DISENO-EXPERIENCIA-v0_4_7
  version_objetivo: v0.4.7
  tipo_autorizacion: diseño_experiencia
  proposito: Autorizar prototipos no funcionales, lenguaje de interfaz, flujos humanos y criterios de no rigidez.
  documentos_requeridos:
    - Spec_Operativa_Experiencia_Creativa_Local_First_AI_StoryLab_1_v0_4_5.md
    - Spec_Operativa_Interfaz_No_Rigida_AI_StoryLab_1_v0_4_5.md
    - Spec_Operativa_Reflexion_Usuario_AI_StoryLab_1_v0_4_5.md
  specs_requeridas:
    - consentimiento
    - datos_privacidad
    - seguridad_local_first
    - experiencia_creativa
    - interfaz_no_rigida
  specs_dependientes:
    - portafolio_local
    - evidencia_creativa
    - pruebas_humanas
  evidencia_requerida:
    - criterios de lenguaje
    - criterios de accesibilidad expresiva
    - pruebas humanas ficticias o de escritorio
    - rechazo explícito de formularización rígida
  riesgos_bloqueantes:
    - interfaz coercitiva
    - exceso de formularios
    - captura emocional no consentida
    - diseño que confunda evaluación con creación
  deuda_permitida:
    - variantes visuales pendientes
    - microcopias por edad pendientes
  deuda_no_permitida:
    - ocultar acciones sensibles
    - bloquear creatividad por no compartir datos
  perfiles_usuario_protegidos:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_implicados:
    - PH
    - IT
    - AT
  revision_PH_IT_AT: AT revisa no rigidez, PH agencia, IT validez de evidencia
  criterio_local_first: experiencia usable sin cuenta, nube ni sincronización
  consentimiento_requerido: justo antes de acciones sensibles
  criterio_de_cierre: diseño no funcional validado humanamente
  no_autoriza: implementación de UI funcional
  documento_gate_evaluativo: pendiente_v0_4_7
  estado: proyectado
```

### Gate 4 : Transición a Prototipo Local-First v0.5.x

```yaml
gate_indice:
  nombre: Gate de Transición a Prototipo Local-First
  codigo_documental: GATE-SDD-004-PROTOTIPO-LOCAL-FIRST-v0_5_x
  version_objetivo: v0.5.x
  tipo_autorizacion: prototipo_controlado
  proposito: Autorizar un primer prototipo local-first mínimo, sin datos reales y con escenarios ficticios.
  documentos_requeridos:
    - gate_de_arquitectura_conceptual_aprobado
    - gate_de_diseno_experiencia_aprobado
    - threat_model_local_first
    - criterios_de_prueba_humana
  specs_requeridas:
    - consentimiento
    - datos_privacidad
    - seguridad_local_first
    - experiencia_creativa
    - portafolio_local
    - evidencia_creativa
    - pruebas_validacion_humana
  specs_dependientes:
    - exportacion_controlada
    - mantenimiento_deuda
  evidencia_requerida:
    - escenarios ficticios
    - pruebas sin datos reales
    - revisión de no captura accidental
    - documentación de límites
  riesgos_bloqueantes:
    - uso de datos reales
    - persistencia no consentida
    - integración externa no aprobada
    - prototipo que simule evaluación automática
  deuda_permitida:
    - alcance limitado de prototipo
    - pruebas visuales parciales
  deuda_no_permitida:
    - ausencia de threat model
    - ausencia de consentimiento
    - dependencia de cloud o backend
  perfiles_usuario_protegidos:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_implicados:
    - PH
    - IT
    - AT
  revision_PH_IT_AT: obligatoria antes de cualquier prueba humana
  criterio_local_first: prototipo debe poder operar en entorno local controlado
  consentimiento_requerido: incluso con escenarios ficticios si se involucra interacción humana
  criterio_de_cierre: prototipo mínimo validado con datos ficticios
  no_autoriza: piloto con datos reales
  documento_gate_evaluativo: pendiente_v0_5_x
  estado: proyectado
```

### Gate 5 : Transición a Pruebas Controladas v0.6.x

```yaml
gate_indice:
  nombre: Gate de Transición a Pruebas Controladas
  codigo_documental: GATE-SDD-005-PRUEBAS-CONTROLADAS-v0_6_x
  version_objetivo: v0.6.x
  tipo_autorizacion: pruebas_controladas
  proposito: Autorizar pruebas controladas, documentadas y revisadas, todavía sin apertura institucional amplia.
  documentos_requeridos:
    - protocolo_pruebas_controladas
    - consentimiento_pruebas
    - matriz_riesgos_actualizada
    - registro_deuda_actualizado
  specs_requeridas:
    - pruebas_validacion_humana
    - consentimiento
    - datos_privacidad
    - seguridad_local_first
    - evidencia_creativa
    - reflexion_usuario
  specs_dependientes:
    - exportacion_controlada
    - investigacion_creacion
  evidencia_requerida:
    - resultados de pruebas
    - incidentes o no incidentes
    - ajustes recomendados
    - revisión PH-IT-AT
  riesgos_bloqueantes:
    - prueba sin consentimiento
    - datos sensibles no protegidos
    - confusión entre prueba y evaluación académica
  deuda_permitida:
    - ampliación de escenarios
    - mejoras de lenguaje
  deuda_no_permitida:
    - ausencia de protocolo
    - ausencia de registro de incidentes
  perfiles_usuario_protegidos:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_implicados:
    - PH
    - IT
    - AT
  revision_PH_IT_AT: obligatoria y con evidencia escrita
  criterio_local_first: pruebas no deben exigir infraestructura remota por defecto
  consentimiento_requerido: específico para prueba y propósito
  criterio_de_cierre: pruebas controladas documentadas y riesgos actualizados
  no_autoriza: despliegue amplio
  documento_gate_evaluativo: pendiente_v0_6_x
  estado: proyectado
```

### Gate 6 : Transición a Validación Ampliada v0.8.x

```yaml
gate_indice:
  nombre: Gate de Transición a Validación Ampliada
  codigo_documental: GATE-SDD-006-VALIDACION-AMPLIADA-v0_8_x
  version_objetivo: v0.8.x
  tipo_autorizacion: validacion_ampliada
  proposito: Autorizar una validación más amplia solo si los riesgos, consentimiento, datos y deuda están controlados.
  documentos_requeridos:
    - informe_pruebas_controladas
    - matriz_riesgos_actualizada
    - criterios_exportacion_controlada
    - protocolo_revision_humana
  specs_requeridas:
    - exportacion_controlada
    - portafolio_local
    - evidencia_creativa
    - mantenimiento_deuda
    - transferencia_PH_IT_AT
  specs_dependientes:
    - release_candidate
  evidencia_requerida:
    - trazabilidad de cambios
    - evaluación humana de riesgos
    - deuda aceptada y deuda bloqueante
    - criterios de escalamiento
  riesgos_bloqueantes:
    - deuda crítica abierta
    - uso secundario de datos
    - presión institucional para evaluación automática
  deuda_permitida:
    - mejoras no críticas
    - documentación complementaria
  deuda_no_permitida:
    - fallas de consentimiento
    - fallas de privacidad
    - fallas de seguridad local-first
  perfiles_usuario_protegidos:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_implicados:
    - PH
    - IT
    - AT
  revision_PH_IT_AT: obligatoria, con capacidad de veto documentado
  criterio_local_first: validación ampliada no debe romper privacidad por defecto
  consentimiento_requerido: específico, renovable y situado
  criterio_de_cierre: validación ampliada aceptable sin deuda crítica
  no_autoriza: v1.0.0 automática
  documento_gate_evaluativo: pendiente_v0_8_x
  estado: proyectado
```

### Gate 7 : Preparación de Release Candidate v0.9.x

```yaml
gate_indice:
  nombre: Gate de Preparación Release Candidate
  codigo_documental: GATE-SDD-007-RELEASE-CANDIDATE-v0_9_x
  version_objetivo: v0.9.x
  tipo_autorizacion: release_candidate
  proposito: Verificar que el sistema está listo para auditoría final antes de v1.0.0.
  documentos_requeridos:
    - informe_validacion_ampliada
    - auditoria_deuda_critica
    - matriz_cumplimiento_constitucional
    - checklist_release_candidate
  specs_requeridas:
    - todas_las_specs_nucleo_aprobadas
    - todas_las_specs_bloqueantes_aprobadas
    - gates_previos_cerrados
  specs_dependientes:
    - v1_0_0_estable
  evidencia_requerida:
    - trazabilidad completa
    - deuda crítica cerrada
    - pruebas de regresión documental y humana
    - revisión constitucional final
  riesgos_bloqueantes:
    - deuda crítica pendiente
    - brecha de consentimiento
    - brecha de privacidad
    - brecha de seguridad
    - falta de evidencia PH-IT-AT
  deuda_permitida:
    - deuda menor documentada y no bloqueante
  deuda_no_permitida:
    - deuda crítica constitucional
    - deuda de seguridad
    - deuda de privacidad
    - deuda de consentimiento
  perfiles_usuario_protegidos:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_implicados:
    - PH
    - IT
    - AT
  revision_PH_IT_AT: obligatoria con dictamen final por perfil
  criterio_local_first: verificación final de privacidad por defecto y operación local-first
  consentimiento_requerido: validado en flujos sensibles
  criterio_de_cierre: release candidate apto para auditoría final
  no_autoriza: declarar v1.0.0 sin auditoría final
  documento_gate_evaluativo: pendiente_v0_9_x
  estado: proyectado
```

### Gate 8 : Liberación v1.0.0 Estable

```yaml
gate_indice:
  nombre: Gate de Liberación v1.0.0 Estable
  codigo_documental: GATE-SDD-008-LIBERACION-v1_0_0
  version_objetivo: v1.0.0
  tipo_autorizacion: liberacion_estable
  proposito: Autorizar la primera versión estable solo si se cumplen Constitución SDD, specs, gates, deuda, revisión humana y criterios local-first.
  documentos_requeridos:
    - auditoria_final_constitucional
    - informe_release_candidate
    - changelog_v1_0_0
    - decision_liberacion_v1_0_0
    - prompt_continuidad_post_v1_0_0
  specs_requeridas:
    - specs_nucleo
    - specs_experiencia
    - specs_evidencia_portafolio
    - specs_seguridad_privacidad
    - specs_exportacion_controlada
    - specs_mantenimiento_deuda
  specs_dependientes:
    - post_v1_0_0
  evidencia_requerida:
    - gates previos cerrados
    - deuda crítica inexistente
    - consentimiento validado
    - privacidad validada
    - seguridad validada
    - transferencia PH-IT-AT documentada
    - protección de estudiantes de escuela superior documentada
  riesgos_bloqueantes:
    - evaluación automática como juez final
    - IA externa no consentida
    - datos reales sin protocolo
    - exportación no controlada
    - deuda crítica abierta
  deuda_permitida:
    - deuda menor no bloqueante con plan post v1.0.0
  deuda_no_permitida:
    - deuda constitucional
    - deuda de seguridad
    - deuda de consentimiento
    - deuda de privacidad
    - deuda de protección de menores
  perfiles_usuario_protegidos:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_implicados:
    - PH
    - IT
    - AT
  revision_PH_IT_AT: dictamen final obligatorio
  criterio_local_first: condición de liberación estable
  consentimiento_requerido: validado, situado y reversible donde aplique
  criterio_de_cierre: v1.0.0 liberable sin violar Constitución SDD
  no_autoriza: expansión post-v1.0.0 sin nuevo ciclo SDD
  documento_gate_evaluativo: pendiente_v1_0_0
  estado: proyectado
```


## 7. Tablero maestro de dependencias hacia v1.0.0

El mapa posterior debe desarrollar un tablero maestro que relacione:

```text
version
  -> gate
  -> specs requeridas
  -> specs dependientes
  -> evidencia requerida
  -> deuda permitida
  -> deuda bloqueante
  -> revisión PH-IT-AT
  -> próxima decisión
```

### 7.1 Relación con paquetes por versión

El tablero maestro no sustituye los paquetes por versión. Los coordina.

```text
Tablero maestro: sistema nervioso longitudinal.
Paquetes por versión: evidencia documental de cada ciclo.
```


## 8. Bloqueos longitudinales no negociables

```text
[!] No avanzar si falta consentimiento informado y situado.
[!] No avanzar si falta clasificación de datos y privacidad por defecto.
[!] No avanzar si falta seguridad local-first o threat model cuando aplique.
[!] No avanzar si falta revisión humana PH-IT-AT.
[!] No avanzar si falta evidencia del gate correspondiente.
[!] No avanzar si existe deuda crítica no aceptada ni controlada.
[!] No avanzar si se requiere IA externa, cloud, backend, autenticación, analíticas o datos reales sin spec aprobada y gate.
[!] No avanzar si el diseño convierte la experiencia creativa en formulario rígido.
[!] No avanzar si se habilita evaluación automática como juez final.
```


## 9. Evidencia mínima para cerrar v0.4.5

```text
[ ] Índice Oficial de Gates SDD hacia v1.0.0 aprobado o aprobado con deuda menor.
[ ] Mapa de Gates SDD hacia v1.0.0 redactado.
[ ] Specs núcleo revisadas unitariamente.
[ ] Matriz cruzada consentimiento/datos/seguridad validada.
[ ] Gate de aprobación de Specs Núcleo aplicado.
[ ] Registro de deuda v0.4.5 actualizado.
[ ] Bitácora activa actualizada.
[ ] Transferencia PH-IT-AT actualizada.
[ ] Changelog PR #11 actualizado.
[ ] Prompt de continuidad posterior preparado.
```


## 10. Dictamen

Este índice convierte PR #11 en una mesa de navegación SDD hacia v1.0.0. La ruta no avanza por acumulación de documentos, sino por gates, dependencias, evidencia, revisión humana y deuda explícita.

La próxima pieza recomendada es:

```text
Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
```

Ese mapa debe desarrollar este índice sin alterar sus decisiones rectoras, salvo decisión documentada en Registro de Decisiones.
