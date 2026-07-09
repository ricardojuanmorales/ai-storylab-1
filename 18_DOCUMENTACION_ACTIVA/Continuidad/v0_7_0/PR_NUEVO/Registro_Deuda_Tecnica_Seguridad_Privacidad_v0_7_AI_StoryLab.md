# Registro de Deuda Técnica, Seguridad y Privacidad · v0.7 · AI StoryLab 1

**Fase referida:** `v0.7 · Arquitectura Técnica + Seguridad`  
**Tipo de documento:** Registro preliminar de deuda técnica, seguridad, privacidad y no vigilancia  
**Estado:** Consolidación de cierre de sesión · PR #22  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**PR de trabajo:** PR #22 · `docs: abrir gate v0.7 arquitectura tecnica y seguridad`  
**Rama de trabajo:** `docs/v0-7-apertura-arquitectura-tecnica-seguridad`  
**Ruta canónica propuesta:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Registro_Deuda_Tecnica_Seguridad_Privacidad_v0_7_AI_StoryLab.md`  
**Fecha:** 2026-07-09  
**Zona horaria de referencia:** America/Puerto_Rico  

---

## 0. Propósito

Este registro identifica deuda técnica, de seguridad y de privacidad que debe atenderse durante v0.7.

No cierra deuda técnica.  
No selecciona stack.  
No implementa controles.  
No define arquitectura final.  
No autoriza backend, APIs, IA embebida ni despliegue.

---

## 1. Deuda heredada principal

```yaml
DFUX_FAC_v0_6_001:
  nombre: Invisibilizacion_parcial_Vista_Facilitador_heredada_MVP_v0_3
  origen: MVP_v0_3_y_v0_6
  estado_documental: encauzada
  estado_tecnico: pendiente
  debe_traducirse_en_v0_7:
    - roles
    - vistas
    - permisos
    - limites_visibilidad
    - evidencia_compartida
    - borradores_privados
    - feedback_formativo
    - trazabilidad_sin_vigilancia
    - privacidad_por_defecto
    - seguridad_por_diseno
```

---

## 2. Deuda técnica y de seguridad identificada

### DTS-v0.7-001 · Modelo de roles, vistas y permisos

```yaml
estado: pendiente
prioridad: alta
descripcion: v0_7_debe_diferenciar_estudiante_facilitador_docente_sistema_y_administrador
riesgo_si_no_se_atiende: facilitador_como_administrador_total
```

### DTS-v0.7-002 · Visibilidad mínima necesaria

```yaml
estado: pendiente
prioridad: alta
descripcion: definir_que_puede_ver_el_facilitador_y_bajo_que_proposito
riesgo_si_no_se_atiende: vigilancia_o_sobrerrecoleccion
```

### DTS-v0.7-003 · Separación entre evidencia compartida y borrador privado

```yaml
estado: pendiente
prioridad: alta
descripcion: proteger_espacios_de_creacion_no_compartidos
riesgo_si_no_se_atiende: perdida_de_agencia_y_privacidad_estudiantil
```

### DTS-v0.7-004 · Trazabilidad sin monitoreo continuo

```yaml
estado: pendiente
prioridad: alta
descripcion: registrar_continuidad_sin_observacion_totalizante
riesgo_si_no_se_atiende: dashboard_de_vigilancia
```

### DTS-v0.7-005 · Arquitectura local-first conceptual

```yaml
estado: pendiente
prioridad: alta
descripcion: definir_control_local_exportacion_importacion_y_minimizacion
riesgo_si_no_se_atiende: dependencia_externa_y_privacidad_debil
```

### DTS-v0.7-006 · Modelo conceptual de datos

```yaml
estado: pendiente
prioridad: alta
descripcion: distinguir_datos_sinteticos_locales_compartidos_y_futuros_reales
riesgo_si_no_se_atiende: confusion_entre_diseno_y_datos_reales
```

### DTS-v0.7-007 · Amenazas y mitigaciones

```yaml
estado: pendiente
prioridad: alta
descripcion: identificar_riesgos_de_seguridad_privacidad_IA_y_roles
riesgo_si_no_se_atiende: arquitectura_sin_barandas
```

### DTS-v0.7-008 · IA como dependencia futura controlada

```yaml
estado: pendiente
prioridad: media_alta
descripcion: definir_limites_para_IA_sin_integrarla_productivamente
riesgo_si_no_se_atiende: IA_embebida_prematura_o_inferencias_sensibles
```

### DTS-v0.7-009 · Registro de decisiones técnicas

```yaml
estado: pendiente
prioridad: media
descripcion: crear_mecanismo_para_aprobar_diferir_o_rechazar_decisiones_tecnicas
riesgo_si_no_se_atiende: decisiones_implícitas_no_trazables
```

### DTS-v0.7-010 · Gate v0.7 hacia v0.8

```yaml
estado: pendiente
prioridad: alta
descripcion: definir_condiciones_para_pasar_a_implementacion_incremental
riesgo_si_no_se_atiende: salto_a_v0_8_sin_seguridad_documental
```

---

## 3. Deuda que no debe pagarse todavía

```yaml
deuda_no_pagable_en_PR22:
  seleccionar_stack_final: no_autorizado
  implementar_codigo_productivo: no_autorizado
  crear_backend: no_autorizado
  integrar_APIs: no_autorizado
  integrar_IA_embebida: no_autorizado
  desplegar: no_autorizado
  validar_con_personas: no_autorizado
  usar_datos_reales: no_autorizado
```

---

## 4. Dictamen

```text
La deuda técnica, de seguridad y privacidad de v0.7 queda identificada como agenda futura. PR #22 puede preparar el gate, pero no debe pagar esta deuda mediante implementación ni decisiones técnicas finales.
```
