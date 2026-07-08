# Kit de Inicio de Sesión v0.7 · Arquitectura Técnica + Seguridad · Preparación Post PR #21
## AI StoryLab 1

**Estado:** BORRADOR PREPARATORIO · NO ACTIVA v0.7 EN PR #21  
**Fecha de preparación:** 2026-07-07  
**Zona horaria de referencia:** America/Puerto_Rico  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**Fase futura:** `v0.7 · Arquitectura Técnica + Seguridad`  
**PR que deberá activarla:** PR posterior y separado a PR #21  
**PR de referencia inmediato:** PR #21 · `docs: auditar integridad v0.6 y deuda vista facilitador`  
**Ruta canónica preparatoria:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Kit_Inicio_Sesion_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab_PREPARACION_POST_PR21.md`  

---

## 0. Advertencia de alcance

Este documento prepara el futuro kit de inicio de v0.7, pero no activa v0.7 dentro de PR #21.

La activación formal de v0.7 requiere:

1. merge final de PR #21;
2. decisión humana explícita;
3. rama nueva;
4. PR nuevo;
5. kit de inicio de v0.7 integrado como primer commit de ese PR posterior.

---

## 1. Estado heredado de PR #21

PR #21 deja una corrección documental limitada post cierre v0.6.

La decisión principal heredada es:

```text
v0.6 está cerrada documentalmente, pero requirió corrección documental limitada para integrar explícitamente la vista del facilitador antes de activar v0.7.
```

Esta corrección no invalida PR #20 y no reabre v0.6 completa. Mejora la base funcional y UX para que v0.7 no traduzca una omisión en arquitectura.

---

## 2. Documentos obligatorios heredados de PR #21

Antes de activar v0.7, la sesión debe leer:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Kit_Inicio_Sesion_Auditoria_Integridad_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Deuda_Vista_Facilitador_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Auditoria_Deuda_Integridad_Post_Cierre_v0_6_Pre_Apertura_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Consolidacion_Funcional_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Matriz_Trazabilidad_Vista_Facilitador_v0_3_v0_6_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Acta_Pre_Gate_Inicio_v0_7_AI_StoryLab.md
```

---

## 3. Pregunta rectora futura de v0.7

```text
¿Cómo se traduce la integridad funcional y UX consolidada hasta PR #21 en una arquitectura técnica segura, local-first, respetuosa de privacidad y explícitamente no vigilante?
```

Esta pregunta debe orientar la fase v0.7.

---

## 4. Propósito actualizado de v0.7

v0.7 debe convertir las decisiones funcionales y UX de v0.6, corregidas por PR #21, en criterios técnicos preliminares de arquitectura y seguridad.

Debe trabajar:

- arquitectura técnica conceptual;
- modelo de roles;
- permisos y límites de visibilidad;
- seguridad;
- privacidad;
- local-first;
- manejo de evidencia, feedback y portafolio;
- separación de datos sintéticos, locales y reales;
- riesgos técnicos derivados de la vista del facilitador;
- criterios para evitar vigilancia técnica o pedagógica;
- preparación para implementación incremental futura en v0.8.

---

## 5. Insumos nuevos obligatorios por la vista del facilitador

PR #21 añade a v0.7 los siguientes insumos obligatorios:

```yaml
insumos_facilitador_v0_7:
  rol:
    - facilitador_como_actor_diferenciado
    - no_equivalente_a_administrador_total
  vista:
    - espacio_funcional_propio
    - experiencia_UX_diferenciada
    - no_dashboard_de_vigilancia
  permisos:
    - visibilidad_limitada
    - minimo_necesario
    - separacion_ver_comentar_sugerir
    - no_producir_por_estudiante
  privacidad:
    - privacidad_por_defecto
    - consentimiento_o_decision_humana_donde_aplique
    - no_captura_excesiva
  seguridad:
    - criterios_de_acceso
    - trazabilidad_de_feedback
    - no_monitoreo_continuo
    - no_metricas_punitivas
  local_first:
    - datos_locales_o_sinteticos_en_fase_preproductiva
    - control_humano
    - no_dependencia_de_backend_productivo_en_activacion
```

---

## 6. Alcance permitido de v0.7

v0.7 puede definir:

```yaml
permitido_v0_7:
  - arquitectura_tecnica_conceptual
  - modelo_de_roles_y_permisos_preliminar
  - criterios_de_seguridad
  - criterios_de_privacidad
  - riesgos_y_mitigaciones
  - limites_de_visibilidad
  - criterios_local_first
  - dependencias_tecnicas
  - preguntas_para_implementacion_v0_8
  - requisitos_tecnicos_derivados_de_v0_6_y_PR21
```

---

## 7. Prohibiciones de entrada a v0.7

Incluso al activar v0.7, sigue prohibido:

```yaml
prohibido_en_entrada_v0_7:
  - implementar_codigo_productivo
  - desplegar
  - usar_datos_reales
  - validar_con_personas
  - activar_marketplace_readiness
  - crear_backend_productivo
  - conectar_APIs_productivas
  - integrar_IA_embebida_sin_autorizacion_documental
  - convertir_la_vista_del_facilitador_en_vigilancia
  - definir_experimentos_con_estudiantes_reales
```

v0.7 puede diseñar arquitectura y seguridad. No debe saltar a implementación.

---

## 8. Primer commit obligatorio del futuro PR v0.7

El futuro PR v0.7 debe iniciar con un kit de inicio aprobado e integrado como primer commit.

Nombre sugerido:

```text
Kit_Inicio_Sesion_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md
```

Rama sugerida:

```text
docs/v0-7-arquitectura-tecnica-seguridad
```

Título sugerido del PR:

```text
docs: iniciar v0.7 arquitectura técnica y seguridad
```

---

## 9. Condiciones de apertura del PR v0.7

Antes de abrir el PR v0.7, confirmar:

```yaml
condiciones_apertura_v0_7:
  PR21_mergeado: requerido
  documentos_PR21_leidos: requerido
  bitacora_transferencia_PR21_leida: requerido
  decision_humana_explicita: requerido
  rama_nueva: requerido
  PR_separado: requerido
  v0_7_no_se_abre_en_PR21: true
```

---

## 10. Primeras preguntas técnicas para v0.7

La sesión v0.7 debe ordenar sus primeras discusiones alrededor de:

1. ¿Qué roles técnicos mínimos existen?
2. ¿Qué permisos necesita cada rol?
3. ¿Qué puede ver el facilitador sin caer en vigilancia?
4. ¿Cómo se representa progreso sin métricas punitivas?
5. ¿Qué evidencia puede compartirse y bajo qué condiciones?
6. ¿Cómo se preserva local-first?
7. ¿Qué datos son sintéticos, locales o potencialmente reales?
8. ¿Qué queda fuera hasta v0.8?
9. ¿Dónde se registran riesgos de seguridad?
10. ¿Cómo se protege la agencia del estudiante?

---

## 11. Cierre preparatorio

Este documento deja la brújula de v0.7 orientada, pero no zarpa.

Dictamen:

```text
v0.7 puede prepararse después del merge de PR #21, pero debe abrirse en PR separado y con la deuda de la vista del facilitador como insumo obligatorio de arquitectura y seguridad.
```
