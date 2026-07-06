# Alcance Preparatorio v0.6 · Diseño Funcional + UX  
## AI StoryLab 1 · PR19 · Activación formal v0.5.0
**Estado de aprobación:** APROBADO por el usuario para integración en PR #19

**Versión de trabajo:** v0.5.0  
**PR actual:** #19  
**Documento:** Alcance Preparatorio v0.6 · Diseño Funcional + UX  
**Naturaleza:** SDD no funcional  
**Fecha:** 2026-07-06  
**Ruta sugerida:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Alcance_Preparatorio_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`

---

## 1. Propósito del documento

Este documento define el alcance preparatorio de v0.6 Diseño Funcional + UX para AI StoryLab 1.

Su función es establecer, desde v0.5.0, qué condiciones, preguntas, límites y criterios deberán estar claros antes de abrir v0.6. Este documento no abre v0.6, no inicia SDD funcional, no diseña UX final, no crea UI final, no define arquitectura técnica y no implementa código.

El documento funciona como puente de gobernanza entre v0.5 y una futura v0.6, pero no como activación de fase.

---

## 2. Dictamen rector

v0.6 será la fase destinada a diseño funcional y experiencia de usuario, pero permanece futura y no activada durante PR #19.

```yaml
dictamen_v0_6:
  estado: futura_no_activada
  fase_actual: v0.5.0
  tipo_de_preparacion: SDD_no_funcional
  apertura_requiere:
    - cierre_real_v0_5
    - gate_independiente_v0_6
    - autorizacion_humana_explicita
```

Toda referencia a v0.6 en este documento debe leerse como preparación, no como ejecución.

---

## 3. Pregunta central de v0.6

La pregunta central futura de v0.6 será:

> ¿Qué debe hacer AI StoryLab 1 como ecosistema funcional y cómo debe ser experimentado por sus comunidades de uso?

Esta pregunta todavía no se responde funcionalmente en PR #19. En v0.5.0 solo se preparan sus condiciones de abordaje.

```yaml
pregunta_central_v0_6:
  que_debe_hacer: dimension_funcional
  como_debe_experimentarse: dimension_UX
  para_quienes: comunidades_y_perfiles_de_uso
  con_que_limites: gobernanza_etica_y_operativa
```

---

## 4. Relación con v1.0.0

La futura v0.6 es necesaria porque v1.0.0 ha sido definido como ecosistema funcional publicable.

```yaml
relacion_v0_6_v1_0:
  v1_0_requiere:
    - funcionalidad_principal_definida
    - experiencia_de_uso_definida
    - flujos_funcionales
    - criterios_de_interaccion
    - criterios_de_accesibilidad
  v0_6_aporta:
    - diseno_funcional
    - UX
    - mapa_de_experiencia
    - modelo_de_interaccion
```

Sin v0.6, v1.0.0 correría el riesgo de quedar reducido a documentación o arquitectura sin experiencia humana clara.

---

## 5. Alcance preparatorio permitido en v0.5.0

Durante v0.5.0, este documento permite preparar:

```yaml
preparacion_permitida_v0_5:
  - definir_preguntas_de_diseno_funcional
  - identificar_dimensiones_de_experiencia
  - definir_limites_de_v0_6
  - establecer_criterios_de_no_implementacion
  - preparar_arquetipos_no_reales
  - preparar_escenarios_sinteticos
  - listar_entregables_futuros_posibles
  - establecer_condiciones_de_apertura
  - prevenir_saltos_a_arquitectura_o_codigo
```

Esta preparación no equivale a diseño funcional activo.

---

## 6. Alcance prohibido durante PR #19

Durante PR #19 queda prohibido:

```yaml
prohibido_PR19:
  - activar_v0_6
  - iniciar_SDD_funcional
  - disenar_funcionalidades_finales
  - disenar_UX_final
  - producir_UI_final
  - construir_wireframes_finales
  - seleccionar_stack_tecnico
  - definir_arquitectura_tecnica
  - implementar_codigo
  - usar_datos_reales
  - realizar_investigacion_con_personas
  - ejecutar_validacion
  - desplegar
  - activar_mantenimiento_operativo
```

---

## 7. Condiciones mínimas para abrir v0.6

v0.6 solo podrá abrirse cuando existan las siguientes condiciones:

```yaml
condiciones_apertura_v0_6:
  cierre_real_v0_5:
    requerido: true
    descripcion: v0.5 debe cerrar su gobernanza y roadmap con evidencia documental suficiente
  gate_independiente_v0_6:
    requerido: true
    descripcion: debe existir un gate separado que autorice expresamente la apertura de v0.6
  autorizacion_humana_explicita:
    requerido: true
    descripcion: la apertura no puede inferirse por acumulacion_documental
  bitacoras_consolidadas:
    requerido: true
    descripcion: la continuidad de v0.5 debe quedar trazada antes de pasar a fase funcional
  limites_de_v0_6_documentados:
    requerido: true
    descripcion: v0.6 debe saber que puede y que no puede hacer
```

---

## 8. Objetivos futuros de v0.6

Cuando v0.6 sea formalmente autorizada, sus objetivos podrán incluir:

```yaml
objetivos_futuros_v0_6:
  - definir_alcance_funcional_del_ecosistema
  - modelar_experiencias_principales
  - definir_perfiles_de_uso_arquetipicos
  - establecer_flujos_funcionales
  - establecer_criterios_de_interaccion
  - definir_criterios_de_accesibilidad
  - preparar_requisitos_para_v0_7
  - documentar_deuda_funcional_y_UX
```

Estos objetivos no se ejecutan en PR #19.

---

## 9. Preguntas preparatorias permitidas

PR #19 puede dejar formuladas preguntas que v0.6 deberá atender.

### 9.1 Preguntas funcionales

```yaml
preguntas_funcionales:
  - que_funciones_principales_debe_tener_el_ecosistema
  - que_problemas_debe_ayudar_a_resolver
  - que_tareas_deben_poder_realizar_las_personas_usuarias
  - que_resultados_debe_generar_o_facilitar
  - que_funciones_quedan_fuera_del_alcance_inicial
```

### 9.2 Preguntas de experiencia

```yaml
preguntas_UX:
  - como_debe_sentirse_el_recorrido_de_uso
  - que_niveles_de_guia_o_autonomia_debe_ofrecer
  - que_fricciones_deben_reducirse
  - que_momentos_requieren_confirmacion_humana
  - como_deben_explicarse_limites_y_responsabilidades
```

### 9.3 Preguntas de gobernanza de uso

```yaml
preguntas_gobernanza_uso:
  - que_acciones_requieren_consentimiento_explicito
  - que_decisiones_no_deben_automatizarse
  - que_riesgos_deben_ser_visibles_para_la_persona_usuaria
  - que_trazas_deben_guardarse
  - que_limites_eticos_deben_aparecer_en_la_experiencia
```

### 9.4 Preguntas de transición hacia v0.7

```yaml
preguntas_transicion_v0_7:
  - que_informacion_necesitara_la_arquitectura_tecnica
  - que_requisitos_de_seguridad_emergen_desde_la_experiencia
  - que_integraciones_potenciales_deben_considerarse_sin_seleccionarlas_aun
  - que_dependencias_funcionales_deben_documentarse
```

---

## 10. Arquetipos no reales permitidos

Durante v0.5.0 y para preparación de v0.6, se pueden usar arquetipos no reales, no datos de personas reales.

```yaml
arquetipos_no_reales:
  permitidos:
    - estudiante_de_escuela_superior_arquetipico
    - estudiante_universitario_arquetipico
    - docente_arquetipico
    - investigador_arquetipico
    - equipo_desarrollador_documental_arquetipico
  restricciones:
    - no_usar_datos_personales_reales
    - no_representar_personas_identificables
    - no_realizar_investigacion_con_personas
    - no_derivar_conclusiones_empiricas
```

Los arquetipos solo sirven para ordenar pensamiento de diseño futuro.

---

## 11. Escenarios sintéticos permitidos

PR #19 puede autorizar escenarios sintéticos para preparar v0.6.

```yaml
escenarios_sinteticos:
  permitidos:
    - exploracion_de_uso_conceptual
    - recorrido_hipotetico_de_aprendizaje
    - interaccion_documental_simulada
    - caso_de_planificacion_pedagogica_no_real
    - caso_de_investigacion_creacion_no_real
  prohibidos:
    - estudios_con_personas
    - pruebas_con_datos_reales
    - validacion_de_usabilidad
    - entrevistas
    - encuestas
    - experimentos
```

---

## 12. Entregables futuros posibles de v0.6

Cuando v0.6 sea autorizada, podría producir:

```yaml
entregables_futuros_v0_6:
  - Mapa_Funcional_AI_StoryLab
  - Modelo_Experiencia_Usuario_AI_StoryLab
  - Mapa_Flujos_Principales
  - Criterios_Interaccion_Humano_IA
  - Criterios_Accesibilidad_y_Claridad
  - Perfilado_Arquetipico_No_Real
  - Requisitos_Funcionales_Preliminares
  - Deuda_Funcional_y_UX
  - Gate_Transicion_v0_6_a_v0_7
```

Este listado es orientador, no autorización de creación inmediata.

---

## 13. Entregables que no pertenecen a v0.6

Incluso cuando v0.6 abra, no debe absorber tareas de v0.7, v0.8, v0.9 o v1.0.

```yaml
fuera_de_v0_6:
  arquitectura_tecnica:
    fase_correcta: v0.7
  seguridad_tecnica_final:
    fase_correcta: v0.7
  seleccion_de_stack:
    fase_correcta: v0.7
  implementacion:
    fase_correcta: v0.8
  validacion_con_personas:
    fase_correcta: v0.9
  marketplace_readiness:
    fase_correcta: v0.9
  publicacion_estable:
    fase_correcta: v1.0
```

---

## 14. Criterios de buena preparación para v0.6

La preparación de v0.6 será adecuada si:

```yaml
buena_preparacion_v0_6:
  - define_limites_de_v0_6
  - formula_preguntas_correctas
  - evita_disenar_prematuramente
  - protege_la_separacion_entre_UX_y_arquitectura
  - mantiene_agencia_humana_como_criterio
  - reconoce_v1_0_como_ecosistema_funcional_publicable
  - preserva_guardarrail_SDD_no_funcional
```

---

## 15. Riesgos específicos de preparación v0.6

```yaml
riesgos_preparacion_v0_6:
  activacion_implicita:
    descripcion: tratar_el_alcance_preparatorio_como_apertura_real_de_v0_6
    mitigacion: declarar_estado_no_activado_en_todos_los_documentos

  sobrediseno:
    descripcion: resolver_funcionalidades_antes_del_gate
    mitigacion: limitar_PR19_a_preguntas_y_condiciones

  invasion_tecnica:
    descripcion: introducir_arquitectura_o_stack_en_discusion_UX
    mitigacion: reservar_decisiones_tecnicas_para_v0_7

  uso_de_datos_reales:
    descripcion: convertir_arquetipos_en_personas_o_casos_reales
    mitigacion: usar_solo_arquetipos_no_reales_y_escenarios_sinteticos

  validacion_prematura:
    descripcion: probar_con_personas_antes_de_v0_9
    mitigacion: prohibicion_explicita_de_investigacion_y_validacion_en_PR19
```

---

## 16. Relación con el Gate de Apertura v0.6

Este documento prepara insumos para el futuro Gate de Apertura v0.6.

```yaml
relacion_gate_v0_6:
  este_documento:
    aporta:
      - alcance_preparatorio
      - limites
      - preguntas_guia
      - riesgos
      - entregables_futuros_posibles
  no_aporta:
      - autorizacion_de_apertura
      - diseno_funcional_final
      - aprobacion_de_SDD_funcional
```

El gate de apertura debe redactarse como documento separado.

---

## 17. Relación con el Gate de Cierre Real v0.5

Este documento también ayuda al cierre real de v0.5 porque demuestra que la transición hacia v0.6 fue pensada sin ejecutarse.

```yaml
relacion_cierre_v0_5:
  evidencia:
    - v0_6_fue_preparada
    - limites_fueron_definidos
    - riesgos_fueron_identificados
    - activacion_no_fue_ejecutada
```

---

## 18. Criterio de suficiencia de este documento

Este documento se considera suficiente para PR #19 si:

```yaml
suficiencia:
  - define_alcance_preparatorio_v0_6
  - distingue_preparacion_de_activacion
  - establece_preguntas_para_v0_6
  - identifica_entregables_futuros_posibles
  - evita_UI_UX_final_en_PR19
  - evita_arquitectura_en_PR19
  - evita_implementacion_en_PR19
  - prepara_base_para_gate_apertura_v0_6
```

---

## 19. Criterio de cierre del documento

Este documento queda completo cuando:

- se revisa y aprueba explícitamente;
- se integra en PR #19 mediante commit individual;
- se confirma que no activa v0.6;
- se confirma que mantiene PR #19 bajo SDD no funcional;
- se confirma que prepara, pero no ejecuta, el futuro diseño funcional + UX;
- se confirma que servirá como insumo para el Gate de Apertura v0.6.

---

## 20. Dictamen final

v0.6 será necesaria para avanzar hacia v1.0.0 como ecosistema funcional publicable, pero no está activada durante PR #19.

PR #19 solo prepara sus condiciones de apertura.

La regla permanece:

```yaml
abrir_v0_6:
  requiere:
    - cierre_real_v0_5
    - gate_independiente_v0_6
    - autorizacion_humana_explicita
```

Sin esos tres elementos, v0.6 permanece futura, no activada y protegida por el guardarraíl SDD no funcional de v0.5.0.
