# Kit de Inicio de Sesión v0.6 · Diseño Funcional + UX
## AI StoryLab 1

**Estado:** APROBADO POR APROBACIÓN HUMANA EXPLÍCITA  
**Fecha de preparación:** 2026-07-06  
**Fecha de aprobación:** 2026-07-06  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**Fase que se activa:** `v0.6 · Diseño Funcional + UX`  
**Naturaleza de la fase:** SDD funcional limitado a diseño funcional y experiencia de usuario  
**PR de origen:** PR #19  
**Fase consolidada por PR #19:** `v0.5.0 · Gobernanza y Roadmap`  
**Ruta canónica propuesta para integración:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`  
**Primer commit obligatorio del PR nuevo:** este documento, integrado con nombre canónico y sin sufijo `_APROBADO`  

---

## 1. Dictamen de entrada

Este kit inaugura formalmente la preparación de **AI StoryLab 1 v0.6 · Diseño Funcional + UX** como una fase nueva, independiente de PR #19 y posterior a la consolidación de `v0.5.0 · Gobernanza y Roadmap`.

La activación de v0.6 ocurre bajo una condición metodológica estricta: **función y experiencia deben definirse antes de arquitectura técnica, implementación, validación o despliegue**.

Por tanto, v0.6 no es una fase de construcción técnica. Es una fase de diseño funcional, experiencia de usuario, criterios de interacción humano-IA, claridad, accesibilidad y preparación de insumos para la arquitectura futura.

---

## 2. Propósito de v0.6

El propósito de v0.6 es responder, con trazabilidad documental, la pregunta rectora:

> ¿Qué debe hacer AI StoryLab 1 como ecosistema funcional y cómo debe ser experimentado por sus comunidades de uso?

v0.6 debe producir definiciones funcionales y de UX suficientemente claras para que una fase posterior, `v0.7 · Arquitectura técnica + seguridad`, pueda traducirlas en decisiones técnicas sin invertir el orden lógico del proyecto.

En esta fase, el ecosistema se piensa desde la experiencia humana, la agencia creativa, la interacción con IA, la claridad de uso, los recorridos conceptuales y los requisitos funcionales preliminares.

---

## 3. Alcance de SDD funcional

La activación de v0.6 inaugura una fase de **SDD funcional**, entendida como especificación guiada por diseño funcional y experiencia de usuario.

En v0.6, SDD funcional significa:

```yaml
SDD_funcional_v0_6:
  define:
    - funciones_del_ecosistema
    - experiencia_de_usuario
    - flujos_funcionales_conceptuales
    - recorridos_de_usuario_sinteticos
    - perfiles_arquetipicos_no_reales
    - criterios_de_interaccion_humano_IA
    - criterios_de_accesibilidad_y_claridad
    - requisitos_funcionales_preliminares
    - deuda_funcional_y_UX
    - insumos_para_v0_7
  no_define:
    - arquitectura_tecnica_final
    - stack_final
    - codigo
    - producto_funcional
    - pruebas_productivas
    - validacion_con_personas
    - despliegue
```

La especificación funcional puede formular preguntas, dependencias y criterios para v0.7, pero no debe resolverlos como decisiones técnicas finales.

---

## 4. Relación con PR #19 y v0.5.0

PR #19 consolidó `AI StoryLab 1 v0.5.0 · Gobernanza y Roadmap` y dejó establecida la ruta hacia `v1.0.0` como **ecosistema funcional publicable**, no como cierre meramente documental.

La ruta canónica vigente es:

```yaml
ruta_canonica:
  v0_5: Gobernanza_y_roadmap
  v0_6: Diseno_funcional_mas_UX
  v0_7: Arquitectura_tecnica_mas_seguridad
  v0_8: Implementacion_incremental
  v0_9: Validacion_mas_marketplace_readiness
  v1_0: Publicacion_estable_de_ecosistema_funcional
```

Este kit reconoce a PR #19 como antecedente canónico, pero no modifica su alcance. PR #19 no activó v0.6. La activación de v0.6 requiere este nuevo inicio, una rama nueva, un PR nuevo en draft y este kit como primer commit obligatorio.

---

## 5. Alcance permitido de v0.6

Durante v0.6 se permite trabajar exclusivamente los siguientes ámbitos:

```yaml
permitido_v0_6:
  - mapa_funcional_del_ecosistema
  - modelo_de_experiencia_de_usuario
  - flujos_funcionales_conceptuales
  - recorridos_de_usuario_sinteticos
  - perfiles_arquetipicos_no_reales
  - criterios_de_interaccion_humano_IA
  - criterios_de_accesibilidad_y_claridad
  - requisitos_funcionales_preliminares
  - deuda_funcional_y_UX
  - insumos_para_v0_7
```

Estos ámbitos deben trabajarse con lenguaje funcional, conceptual y experiencial. Cualquier asunto técnico debe registrarse como pregunta, dependencia, restricción o insumo para v0.7, sin convertirse en decisión arquitectónica.

---

## 6. Límites de v0.6

v0.6 tiene límites activos desde su apertura:

1. No convierte el roadmap en producto funcional.
2. No diseña arquitectura técnica final.
3. No selecciona stack tecnológico final.
4. No implementa código.
5. No crea interfaces productivas.
6. No usa datos reales.
7. No investiga, prueba ni valida con personas.
8. No despliega.
9. No activa marketplace readiness.
10. No inicia mantenimiento operativo.

El trabajo de v0.6 debe permanecer en la mesa funcional y UX: mapa, criterio, flujo, recorrido, arquetipo sintético, requisito preliminar y deuda funcional.

---

## 7. Prohibiciones explícitas

```yaml
prohibido_v0_6:
  - definir_arquitectura_tecnica_final
  - seleccionar_stack_final
  - implementar_codigo
  - crear_producto_funcional
  - usar_datos_reales
  - investigar_con_personas
  - validar_con_personas
  - hacer_pruebas_productivas
  - desplegar
  - activar_marketplace_readiness
  - iniciar_mantenimiento_operativo
```

Cualquier propuesta que cruce estas líneas debe detenerse y reformularse como deuda, pregunta abierta o insumo diferido para la fase correspondiente.

---

## 8. Confirmación de no autorización

Este kit confirma expresamente que v0.6 **no autoriza**:

```yaml
no_autorizado_por_v0_6:
  arquitectura_tecnica: false
  implementacion: false
  validacion_con_personas: false
  despliegue: false
  marketplace_readiness: false
  mantenimiento_operativo: false
  uso_de_datos_reales: false
  pruebas_productivas: false
```

La única autorización de v0.6 es trabajar diseño funcional y experiencia de usuario bajo SDD funcional limitado.

---

## 9. Protocolo metodológico de v0.6

Durante toda la fase v0.6 queda activo el siguiente protocolo:

```yaml
protocolo_v0_6:
  rama_y_PR:
    - crear_rama_nueva
    - abrir_PR_nuevo_en_draft
    - primer_commit_obligatorio_kit_inicio_sesion
  documentos:
    - trabajar_documentos_uno_a_uno
    - crear_borrador_md_descargable
    - esperar_aprobacion_humana_explicita
    - generar_version_APROBADO
    - integrar_en_repo_con_nombre_canonico_sin_APROBADO
  commits:
    - realizar_commits_individuales
    - usar_mensajes_semanticos
    - hacer_push_despues_de_cada_commit
  bitacoras:
    - activar_bitacora_de_sesion_v0_6
    - activar_bitacora_de_transferencia_simetrica_v0_6
    - activar_bitacora_del_capitan_v0_6
    - activar_registro_de_decisiones_v0_6
    - activar_registro_de_deuda_funcional_y_UX
```

Ningún documento posterior debe prepararse, aprobarse o integrarse antes de que este kit haya sido aprobado, copiado al repositorio con nombre canónico, integrado como primer commit y confirmado en el PR nuevo.

---

## 10. Bitácoras activas de v0.6

Desde este kit quedan activadas metodológicamente las siguientes bitácoras y registros de continuidad:

```yaml
bitacoras_activas_v0_6:
  - Bitacora_Sesion_v0_6_AI_StoryLab.md
  - Bitacora_Transferencia_Simetrica_v0_6_AI_StoryLab.md
  - Bitacora_Capitan_v0_6_AI_StoryLab.md
  - Registro_Decisiones_v0_6_AI_StoryLab.md
  - Registro_Deuda_Funcional_UX_v0_6_AI_StoryLab.md
```

Su activación en este kit significa que todo trabajo posterior de v0.6 debe ser trazable contra estos instrumentos. Su creación o actualización documental individual deberá hacerse solo cuando corresponda, respetando el protocolo de documentos uno a uno y después de que el primer commit obligatorio haya quedado integrado y confirmado.

---

## 11. Instrucciones para documentos uno a uno

Todo documento de v0.6 debe seguir este flujo:

```yaml
flujo_documental_v0_6:
  1_borrador:
    accion: crear_borrador_md_descargable
    estado: no_integrado_al_repo
  2_revision:
    accion: esperar_aprobacion_humana_explicita
    estado: pendiente_de_aprobacion
  3_aprobacion:
    accion: generar_version_APROBADO_md
    estado: aprobado_por_persona_humana
  4_integracion:
    accion: copiar_al_repo_con_nombre_canonico_sin_APROBADO
    estado: listo_para_commit
  5_commit:
    accion: commit_individual_con_mensaje_semantico
    estado: integrado_en_rama
  6_push:
    accion: hacer_push_despues_del_commit
    estado: disponible_en_PR
  7_verificacion:
    accion: confirmar_estado_en_PR_si_hay_duda
    estado: trazabilidad_confirmada
```

La regla de oro es simple: **un documento, una aprobación, un commit, un push**.

---

## 12. Rama, PR y primer commit obligatorio

La rama semántica sugerida para v0.6 es:

```bash
docs/v0-6-activacion-diseno-funcional-ux
```

El primer documento que debe integrarse al repositorio es:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
```

El mensaje semántico sugerido para el primer commit es:

```bash
git commit -m "docs: iniciar activacion v0.6 diseno funcional ux"
```

El PR nuevo debe abrirse en modo draft y debe declarar explícitamente que v0.6 se limita a diseño funcional y UX.

---

## 13. Criterios de transición hacia v0.7

v0.6 podrá preparar la transición hacia v0.7 solo cuando existan insumos funcionales suficientes y aprobados. La transición no equivale a activar v0.7.

```yaml
criterios_transicion_v0_6_a_v0_7:
  requiere:
    - mapa_funcional_del_ecosistema_aprobado
    - modelo_de_experiencia_de_usuario_aprobado
    - flujos_funcionales_conceptuales_aprobados
    - criterios_de_interaccion_humano_IA_aprobados
    - criterios_de_accesibilidad_y_claridad_aprobados
    - requisitos_funcionales_preliminares_aprobados
    - deuda_funcional_y_UX_registrada
    - insumos_para_arquitectura_identificados_sin_decidir_stack
    - gate_de_transicion_v0_6_a_v0_7_aprobado
  prohibe:
    - activar_v0_7_implicitamente
    - convertir_requisitos_funcionales_en_arquitectura_final
    - seleccionar_stack_durante_v0_6
    - iniciar_implementacion
```

v0.7 solo podrá abrirse mediante una decisión humana explícita, una rama nueva, un PR nuevo y su propio kit de inicio de sesión.

---

## 14. Criterio de calidad de v0.6

Un documento de v0.6 será válido si cumple con estos criterios:

```yaml
criterio_calidad_v0_6:
  - mantiene_agencia_humana
  - distingue_arquetipos_de_personas_reales
  - usa_escenarios_sinteticos
  - evita_arquitectura_prematura
  - evita_implementacion
  - evita_validacion_con_personas
  - evita_datos_reales
  - conecta_con_v1_0_como_ecosistema_funcional_publicable
  - prepara_insumos_para_v0_7_sin_invadir_v0_7
  - mantiene_trazabilidad_con_PR19_y_v0_5_0
```

La brújula de esta fase es la claridad funcional: lo que el ecosistema debe hacer, para quiénes, con qué experiencia, bajo qué límites y con qué criterios de interacción responsable.

---

## 15. Declaración de apertura controlada

Con este kit, AI StoryLab 1 puede iniciar v0.6 únicamente como fase de **Diseño Funcional + UX**.

Esta apertura es controlada, trazable y reversible. No adelanta fases futuras. No convierte v0.6 en arquitectura, implementación, validación ni publicación. Su tarea es preparar el terreno funcional para que las decisiones técnicas posteriores nazcan con raíces y no con cables sueltos.

---

## 16. Estado de este documento

```yaml
estado_documento:
  nombre_borrador_origen: Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab_BORRADOR.md
  aprobacion_humana_explicita: true
  fecha_aprobacion: 2026-07-06
  version_aprobada: Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab_APROBADO.md
  nombre_canonico_para_repo: Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
  puede_integrarse_al_repo_con_nombre_canonico_sin_APROBADO: true
```

Esta versión aprobada debe integrarse al repositorio únicamente con nombre canónico, sin el sufijo `_APROBADO`.
