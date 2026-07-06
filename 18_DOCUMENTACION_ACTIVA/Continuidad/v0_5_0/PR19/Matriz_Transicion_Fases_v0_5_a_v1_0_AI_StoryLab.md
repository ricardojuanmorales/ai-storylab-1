# Matriz de Transición de Fases v0.5 a v1.0  
## AI StoryLab 1 · PR19 · Activación formal v0.5.0
**Estado de aprobación:** APROBADO por el usuario para integración en PR #19

**Versión de trabajo:** v0.5.0  
**PR actual:** #19  
**Documento:** Matriz de Transición de Fases v0.5 a v1.0  
**Naturaleza:** SDD no funcional  
**Fecha:** 2026-07-06  
**Ruta sugerida:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Matriz_Transicion_Fases_v0_5_a_v1_0_AI_StoryLab.md`

---

## 1. Propósito del documento

Este documento establece la matriz de transición de fases para AI StoryLab 1 desde v0.5.0 hasta v1.0.0.

Su función es definir, para cada fase mayor, las condiciones de entrada, propósito, entregables permitidos, entregables prohibidos, dependencias, riesgos, gate de salida y relación con la fase siguiente.

La matriz opera como instrumento de gobernanza. No activa v0.6, no inicia SDD funcional, no diseña UX final, no define arquitectura técnica y no implementa código.

---

## 2. Principio rector

La transición hacia v1.0.0 debe ocurrir mediante fases diferenciadas, con gates independientes y autorización humana explícita cuando corresponda.

```yaml
principio_rector:
  cada_fase:
    requiere:
      - proposito_claro
      - alcance_delimitado
      - entregables_definidos
      - restricciones_explicitadas
      - gate_de_salida
      - autorizacion_humana_si_abre_fase_siguiente
  ninguna_fase:
    puede:
      - absorber_funciones_de_fases_posteriores
      - activar_fase_siguiente_por_acumulacion_documental
      - sustituir_gates_por_intencion_o_entusiasmo
```

---

## 3. Ruta canónica de transición

```yaml
ruta_canonica:
  v0.5: Gobernanza_y_roadmap
  v0.6: Diseno_funcional_mas_UX
  v0.7: Arquitectura_tecnica_mas_seguridad
  v0.8: Implementacion_incremental
  v0.9: Validacion_mas_marketplace_readiness
  v1.0: Publicacion_estable_de_ecosistema_funcional
```

---

## 4. Matriz general de fases

| Fase | Función principal | Estado durante PR19 | Tipo de trabajo | Gate clave |
|---|---|---:|---|---|
| v0.5 | Gobernanza y roadmap | Activa | SDD no funcional | Cierre real v0.5 |
| v0.6 | Diseño funcional + UX | Futura no activada | SDD funcional | Apertura independiente v0.6 |
| v0.7 | Arquitectura técnica + seguridad | Futura no activada | Arquitectura técnica | Apertura independiente v0.7 |
| v0.8 | Implementación incremental | Futura no activada | Construcción | Apertura independiente v0.8 |
| v0.9 | Validación + marketplace readiness | Futura no activada | Validación/preparación publicación | Apertura independiente v0.9 |
| v1.0 | Publicación estable | Destino | Publicación estable | Gate de publicación v1.0 |

---

## 5. Fase v0.5 · Gobernanza y roadmap

### 5.1 Condición de entrada

```yaml
entrada_v0_5:
  requiere:
    - activacion_documental_de_v0_5
    - ruta_mayor_hacia_v1_0_identificada
    - guardarrail_SDD_no_funcional_vigente
    - continuidad_documental_activa
```

### 5.2 Propósito

```yaml
proposito_v0_5:
  - gobernar_la_ruta_v0_5_a_v1_0
  - definir_v1_0_como_ecosistema_funcional_publicable
  - ordenar_fases_y_dependencias
  - preparar_gates
  - identificar_riesgos
  - sostener_bitacoras_y_transferencias
```

### 5.3 Entregables permitidos

```yaml
permitido_v0_5:
  - kits_de_inicio
  - dictamenes_de_estado
  - definiciones_operativas
  - planes_maestros
  - matrices_de_transicion
  - alcances_preparatorios
  - gates_documentales
  - matrices_de_riesgo
  - bitacoras
  - changelogs
  - transferencias
```

### 5.4 Entregables prohibidos

```yaml
prohibido_v0_5:
  - diseno_funcional_final
  - UX_final
  - UI_final
  - arquitectura_tecnica
  - seleccion_de_stack
  - implementacion
  - uso_de_datos_reales
  - investigacion_con_personas
  - validacion
  - despliegue
  - mantenimiento_operativo
```

### 5.5 Gate de salida

```yaml
gate_salida_v0_5:
  nombre: Gate_Cierre_Real_v0_5_0
  requiere:
    - definicion_operativa_v1_0_aprobada
    - plan_maestro_aprobado
    - matriz_transicion_aprobada
    - alcance_preparatorio_v0_6_aprobado
    - gate_cierre_real_v0_5_redactado_y_aprobado
    - gate_apertura_v0_6_redactado
    - riesgos_dependencias_deuda_documentados
    - bitacoras_consolidadas
    - autorizacion_humana_para_cierre
  no_implica:
    - activacion_automatica_v0_6
```

---

## 6. Transición v0.5 → v0.6

### 6.1 Condición de transición

```yaml
transicion_v0_5_a_v0_6:
  estado_en_PR19: preparable_no_ejecutable
  requiere:
    - cierre_real_v0_5
    - gate_independiente_v0_6
    - autorizacion_humana_explicita
```

### 6.2 Lo que puede preparar v0.5

```yaml
preparacion_v0_6_en_v0_5:
  permitido:
    - definir_alcance_preparatorio
    - formular_preguntas_de_diseno
    - identificar_perfiles_arquetipicos_no_reales
    - definir_limites_de_v0_6
    - establecer_criterios_de_no_implementacion
    - redactar_gate_apertura_v0_6
```

### 6.3 Lo que no puede hacer v0.5

```yaml
no_permitido_en_transicion_v0_5_a_v0_6:
  - iniciar_diseno_funcional
  - crear_UX_final
  - producir_UI_final
  - seleccionar_herramientas_tecnicas_finales
  - implementar
  - validar_con_personas
```

---

## 7. Fase v0.6 · Diseño funcional + UX

### 7.1 Condición de entrada futura

```yaml
entrada_v0_6:
  requiere:
    - cierre_real_v0_5
    - gate_apertura_v0_6_aprobado
    - autorizacion_humana_explicita
```

### 7.2 Propósito futuro

```yaml
proposito_v0_6:
  - definir_que_hace_el_ecosistema
  - definir_como_se_experimenta
  - modelar_flujos_funcionales
  - definir_criterios_de_interaccion
  - establecer_requisitos_de_experiencia
```

### 7.3 Entregables permitidos futuros

```yaml
permitido_v0_6:
  - modelos_funcionales
  - mapas_de_experiencia
  - flujos_de_usuario_conceptuales
  - criterios_de_interaccion
  - requisitos_funcionales
  - criterios_de_accesibilidad
  - prototipos_no_productivos_si_el_gate_lo_autoriza
```

### 7.4 Entregables prohibidos futuros

```yaml
prohibido_v0_6:
  - arquitectura_tecnica_final
  - seleccion_final_de_stack
  - implementacion_productiva
  - uso_de_datos_reales_sin_gate_posterior
  - validacion_con_personas_sin_autorizacion
  - despliegue
```

### 7.5 Gate de salida futuro

```yaml
gate_salida_v0_6:
  requiere:
    - alcance_funcional_aprobado
    - criterios_UX_aprobados
    - flujos_funcionales_aprobados
    - limites_y_no_alcances_documentados
    - deuda_funcional_documentada
    - autorizacion_humana_para_preparar_v0_7
```

---

## 8. Transición v0.6 → v0.7

```yaml
transicion_v0_6_a_v0_7:
  requiere:
    - resultados_aprobados_de_v0_6
    - definicion_funcional_suficiente
    - criterios_de_experiencia_aprobados
    - gate_apertura_v0_7
    - autorizacion_humana_explicita
  riesgo_principal: tecnificacion_prematura
  mitigacion: no_abrir_v0_7_sin_funcion_y_UX_definidas
```

---

## 9. Fase v0.7 · Arquitectura técnica + seguridad

### 9.1 Condición de entrada futura

```yaml
entrada_v0_7:
  requiere:
    - cierre_de_v0_6
    - gate_apertura_v0_7
    - alcance_funcional_aprobado
    - criterios_UX_aprobados
```

### 9.2 Propósito futuro

```yaml
proposito_v0_7:
  - definir_arquitectura_tecnica
  - definir_seguridad
  - definir_privacidad
  - preparar_integraciones
  - definir_controles_tecnicos
  - definir_pruebas_tecnicas
```

### 9.3 Entregables permitidos futuros

```yaml
permitido_v0_7:
  - arquitectura_tecnica
  - modelo_de_seguridad
  - criterios_de_privacidad
  - mapa_de_integraciones
  - decisiones_de_stack
  - plan_de_pruebas_tecnicas
```

### 9.4 Entregables prohibidos futuros

```yaml
prohibido_v0_7:
  - implementacion_productiva_extensa_sin_v0_8
  - validacion_con_personas_sin_v0_9
  - publicacion
  - mantenimiento_operativo
```

### 9.5 Gate de salida futuro

```yaml
gate_salida_v0_7:
  requiere:
    - arquitectura_aprobada
    - seguridad_aprobada
    - privacidad_aprobada
    - dependencias_tecnicas_documentadas
    - plan_de_implementacion_incremental_preparado
    - autorizacion_humana_para_preparar_v0_8
```

---

## 10. Transición v0.7 → v0.8

```yaml
transicion_v0_7_a_v0_8:
  requiere:
    - arquitectura_tecnica_aprobada
    - seguridad_y_privacidad_aprobadas
    - backlog_incremental_preparado
    - gate_apertura_v0_8
    - autorizacion_humana_explicita
  riesgo_principal: implementacion_sin_controles
  mitigacion: implementar_solo_con_arquitectura_y_seguridad_previamente_aprobadas
```

---

## 11. Fase v0.8 · Implementación incremental

### 11.1 Condición de entrada futura

```yaml
entrada_v0_8:
  requiere:
    - cierre_de_v0_7
    - gate_apertura_v0_8
    - arquitectura_aprobada
    - criterios_de_seguridad_aprobados
```

### 11.2 Propósito futuro

```yaml
proposito_v0_8:
  - construir_incrementalmente
  - integrar_componentes
  - probar_por_modulos
  - documentar_cambios_tecnicos
  - preparar_base_para_validacion
```

### 11.3 Entregables permitidos futuros

```yaml
permitido_v0_8:
  - implementacion_modular
  - commits_tecnicos
  - pruebas_incrementales
  - documentacion_tecnica_de_cambios
  - integraciones_controladas
```

### 11.4 Entregables prohibidos futuros

```yaml
prohibido_v0_8:
  - declaracion_de_readiness_sin_v0_9
  - validacion_con_personas_sin_gate
  - publicacion_estable
```

### 11.5 Gate de salida futuro

```yaml
gate_salida_v0_8:
  requiere:
    - implementacion_incremental_suficiente
    - pruebas_minimas_documentadas
    - deuda_tecnica_documentada
    - criterios_de_calidad_preparados
    - autorizacion_humana_para_preparar_v0_9
```

---

## 12. Transición v0.8 → v0.9

```yaml
transicion_v0_8_a_v0_9:
  requiere:
    - base_funcional_implementada
    - pruebas_incrementales_suficientes
    - criterios_de_validacion_preparados
    - gate_apertura_v0_9
    - autorizacion_humana_explicita
  riesgo_principal: validacion_sobre_base_inmadura
  mitigacion: no_validar_sin_implementacion_minima_estable
```

---

## 13. Fase v0.9 · Validación + marketplace readiness

### 13.1 Condición de entrada futura

```yaml
entrada_v0_9:
  requiere:
    - cierre_de_v0_8
    - gate_apertura_v0_9
    - implementacion_incremental_suficiente
    - criterios_de_validacion_aprobados
```

### 13.2 Propósito futuro

```yaml
proposito_v0_9:
  - validar_el_ecosistema
  - evaluar_calidad
  - preparar_marketplace_readiness
  - ajustar_documentacion_publica
  - preparar_publicacion_estable
```

### 13.3 Entregables permitidos futuros

```yaml
permitido_v0_9:
  - pruebas_de_validacion
  - evidencia_de_funcionamiento
  - evaluacion_de_calidad
  - documentacion_publicable
  - criterios_de_marketplace_readiness
  - informe_de_readiness
```

### 13.4 Entregables prohibidos futuros

```yaml
prohibido_v0_9:
  - publicacion_estable_sin_gate_v1_0
  - mantenimiento_operativo_indefinido
  - expansion_funcional_sin_control
```

### 13.5 Gate de salida futuro

```yaml
gate_salida_v0_9:
  requiere:
    - evidencia_de_validacion
    - readiness_documentado
    - riesgos_residuales_documentados
    - documentacion_publica_preparada
    - autorizacion_humana_para_publicacion_v1_0
```

---

## 14. Transición v0.9 → v1.0

```yaml
transicion_v0_9_a_v1_0:
  requiere:
    - validacion_suficiente
    - readiness_aprobado
    - documentacion_publicable
    - gate_publicacion_v1_0
    - autorizacion_humana_explicita
  riesgo_principal: publicacion_inmadura
  mitigacion: publicar_solo_con_evidencia_y_gate_aprobado
```

---

## 15. Fase v1.0 · Publicación estable

### 15.1 Condición de entrada futura

```yaml
entrada_v1_0:
  requiere:
    - cierre_de_v0_9
    - gate_publicacion_v1_0
    - autorizacion_humana_explicita
```

### 15.2 Propósito

```yaml
proposito_v1_0:
  - publicar_ecosistema_funcional_estable
  - entregar_documentacion_publicable
  - declarar_estado_de_readiness
  - establecer_mantenimiento_minimo
  - preservar_gobernanza_de_uso
```

### 15.3 Condiciones mínimas

```yaml
condiciones_minimas_v1_0:
  - funcionalidad_principal_operable
  - UX_definida
  - arquitectura_estable
  - seguridad_y_privacidad_documentadas
  - validacion_suficiente
  - documentacion_publicable
  - criterios_de_mantenimiento_minimo
```

---

## 16. Matriz de dependencias críticas

| Dependencia | Fase que la produce | Fase que la necesita | Riesgo si falta |
|---|---|---|---|
| Ruta gobernada | v0.5 | Todas | Salto de fase |
| Definición de v1.0 | v0.5 | Todas | Deriva documental |
| Alcance funcional | v0.6 | v0.7, v0.8 | Arquitectura sin función clara |
| Criterios UX | v0.6 | v0.7, v0.8, v0.9 | Experiencia incoherente |
| Arquitectura técnica | v0.7 | v0.8, v0.9, v1.0 | Implementación frágil |
| Seguridad y privacidad | v0.7 | v0.8, v0.9, v1.0 | Riesgo de publicación |
| Implementación incremental | v0.8 | v0.9, v1.0 | Validación insuficiente |
| Evidencia de validación | v0.9 | v1.0 | Publicación inmadura |
| Readiness documentado | v0.9 | v1.0 | Marketplace incompleto |

---

## 17. Matriz de prohibiciones transversales

```yaml
prohibiciones_transversales_PR19:
  - no_activar_v0_6
  - no_iniciar_SDD_funcional
  - no_disenar_UX_final
  - no_definir_arquitectura_tecnica
  - no_implementar
  - no_usar_datos_reales
  - no_investigar_con_personas
  - no_validar
  - no_desplegar
  - no_activar_mantenimiento_operativo
```

Estas prohibiciones aplican durante PR #19 y toda actividad v0.5.0 mientras no exista cierre real y gate posterior.

---

## 18. Uso de esta matriz

Esta matriz debe usarse para:

- revisar si un documento respeta su fase;
- detectar saltos de fase;
- evaluar si un entregable está permitido o prohibido;
- preparar gates de cierre y apertura;
- orientar el cierre real de v0.5;
- proteger la transición futura hacia v0.6.

---

## 19. Criterio de suficiencia de la matriz

La matriz se considera suficiente para v0.5.0 si:

```yaml
suficiencia_matriz:
  - distingue_fases_con_claridad
  - define_entradas_y_salidas
  - identifica_dependencias
  - explicita_prohibiciones
  - protege_v0_6_como_fase_futura_no_activada
  - orienta_los_gates
  - sostiene_v1_0_como_ecosistema_funcional_publicable
```

---

## 20. Criterio de cierre del documento

Este documento queda completo cuando:

- se revisa y aprueba explícitamente;
- se integra en PR #19 mediante commit individual;
- se confirma que no activa v0.6;
- se confirma que preserva el SDD no funcional;
- se confirma que complementa el Plan Maestro v0.5 a v1.0;
- se confirma que servirá de base para el Alcance Preparatorio v0.6 y los gates.

---

## 21. Dictamen final

La ruta v0.5 a v1.0 debe avanzar por transición gobernada, no por acumulación espontánea de documentos ni por impulso técnico prematuro.

Cada fase tiene función propia, límites propios y gate propio.

PR #19 permanece dentro de v0.5.0 y solo establece las condiciones de navegación. La apertura de v0.6 requerirá cierre real de v0.5, gate independiente y autorización humana explícita.
