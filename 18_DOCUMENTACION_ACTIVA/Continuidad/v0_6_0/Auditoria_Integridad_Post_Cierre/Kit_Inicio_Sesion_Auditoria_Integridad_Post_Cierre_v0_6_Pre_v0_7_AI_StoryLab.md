# Kit de Inicio de Sesión · Auditoría de Integridad Post Cierre v0.6 · Pre v0.7
## AI StoryLab 1

**Estado:** BORRADOR INICIAL PARA PR DE AUDITORÍA  
**Fecha de preparación:** 2026-07-07  
**Zona horaria de referencia:** America/Puerto_Rico  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**PR de referencia cerrado:** PR #20 · cierre documental condicionado de v0.6 · Diseño Funcional + UX  
**Fase que NO se activa:** `v0.7 · Arquitectura Técnica + Seguridad`  
**Naturaleza del tramo:** auditoría documental, revisión de integridad y pago de deuda pagable  
**Rama sugerida:** `docs/v0-6-auditoria-integridad-facilitador`  
**Título sugerido del PR:** `docs: auditar integridad v0.6 y deuda vista facilitador`  
**Ruta canónica propuesta:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Kit_Inicio_Sesion_Auditoria_Integridad_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md`  
**Primer commit recomendado:** este documento, integrado con nombre canónico y sin sufijo `_BORRADOR`  

---

## 0. Dictamen de entrada

Este kit abre una fase intermedia de trabajo documental entre el cierre condicionado de `v0.6 · Diseño Funcional + UX` y cualquier activación futura de `v0.7 · Arquitectura Técnica + Seguridad`.

El dictamen de entrada es claro:

```text
No se activa v0.7 todavía.
```

Antes de abrir el gate de v0.7, AI StoryLab 1 necesita un PR separado de auditoría de integridad documental, con atención prioritaria a la deuda de la vista del facilitador heredada del MVP v0.3.

Este tramo no contradice el cierre de v0.6. Lo limpia, lo vuelve más trazable y evita que una deuda funcional se endurezca como omisión arquitectónica en v0.7.

---

## 1. Estado de referencia

```text
PR #20: closed
Merged: true
Draft: false
Commits: 15
Changed files: 21
Additions: 11192
Deletions: 0
Head SHA: 47c5ac43d1a9dfcbf158d5025f529e9fa0222de8
Merge commit SHA: baf56e202e384577a32a4054a97d5e8fa86896d6
Merged at: 2026-07-07T07:01:24Z
```

PR #20 cerró documentalmente v0.6 como fase de diseño funcional y UX. Ese cierre se acepta como válido, pero condicionado: no elimina deudas, no autoriza salto automático a arquitectura técnica y no sustituye una revisión de integridad post cierre.

---

## 2. Propósito del PR de auditoría

El PR que se inicia con este kit tiene como propósito:

1. auditar rigurosamente la integridad documental de v0.6;
2. identificar deudas funcionales, UX, pedagógicas, éticas y de continuidad todavía abiertas;
3. establecer un estado de situación antes del gate de inicio v0.7;
4. recuperar explícitamente la deuda de la vista del facilitador heredada del MVP v0.3;
5. definir cómo se paga esa deuda sin convertirla en implementación ni arquitectura técnica final;
6. dejar v0.7 mejor posicionada para activarse después mediante otro PR separado.

Este PR funciona como antesala crítica. No construye la maquinaria; revisa el plano, revisa las bisagras y evita que una puerta importante quede dibujada como sombra.

---

## 3. Deuda crítica inicial

### Código recomendado

```text
DFUX-FAC-v0.6-001
```

### Nombre de la deuda

```text
Invisibilización parcial de la vista del facilitador heredada del MVP v0.3.
```

### Declaración breve

La vista del facilitador del MVP v0.3 quedó parcialmente invisibilizada en v0.6 al quedar subsumida bajo conceptos más amplios, tales como:

- asistencia docente;
- acompañamiento;
- curaduría;
- feedback;
- seguimiento;
- apoyo ético, creativo, técnico y crítico;
- revisión de evidencia;
- apoyo al portafolio.

La función del facilitador no desapareció, pero perdió suficiente nombre propio como vista funcional, experiencia UX diferenciada, familia de requisitos y riesgo futuro de seguridad/privacidad.

Esta deuda debe hacerse explícita, auditarse y consolidarse antes de activar v0.7.

---

## 4. Regla de método

Este PR de auditoría:

```yaml
no_activa:
  - v0_7
  - arquitectura_tecnica_final
  - implementacion
  - validacion_con_personas
  - uso_de_datos_reales
  - backend
  - APIs
  - IA_embebida
  - despliegue
```

Y sí permite:

```yaml
permite:
  - auditoria_documental
  - revision_de_integridad
  - registro_de_deuda_funcional_y_UX
  - consolidacion_conceptual_de_la_vista_del_facilitador
  - matriz_de_trazabilidad_v0_3_v0_6_v0_7
  - criterios_de_no_vigilancia
  - criterios_local_first_para_facilitador
  - identificacion_de_insumos_para_v0_7
  - preparacion_de_condiciones_pre_gate_v0_7
```

---

## 5. Alcance permitido

Durante este PR se puede trabajar exclusivamente en el plano documental y metodológico:

```yaml
alcance_permitido:
  integridad_v0_6:
    - detectar_omisiones
    - registrar_deudas_pagables
    - diferenciar_deuda_abierta_de_deuda_diferible
  vista_facilitador:
    - nombrar_rol_y_vista
    - distinguir_asistencia_docente_de_vista_funcional
    - establecer_limites_de_visibilidad
    - definir_criterios_de_no_vigilancia
    - formular_requisitos_funcionales_preliminares
    - preparar_insumos_de_seguridad_para_v0_7
  continuidad:
    - actualizar_estado_de_situacion
    - documentar_impacto_en_v0_6
    - preparar_condiciones_pre_gate_v0_7
```

El PR puede reconocer que integrar la vista del facilitador de forma más plena implica una corrección documental a v0.6. Esa corrección debe formularse como adenda de integridad o pago de deuda pagable, no como reapertura total de v0.6 ni como arquitectura anticipada.

---

## 6. Prohibiciones explícitas

```yaml
prohibido_en_este_PR:
  - activar_v0_7
  - definir_modelo_tecnico_final_de_roles_y_permisos
  - seleccionar_stack
  - implementar_codigo
  - crear_backend
  - conectar_APIs
  - integrar_IA_embebida
  - usar_datos_reales
  - validar_con_estudiantes_docentes_o_facilitadores
  - hacer_pruebas_productivas
  - desplegar
  - convertir_la_vista_del_facilitador_en_dashboard_de_vigilancia
  - tratar_al_facilitador_como_administrador_total
  - resolver_seguridad_con_supuestos_tecnicos_no_documentados
```

Cualquier idea que cruce estas líneas debe reformularse como pregunta, deuda, criterio o insumo diferido para v0.7.

---

## 7. Pregunta rectora

```text
¿Está AI StoryLab 1 suficientemente íntegro, trazable y libre de deudas pagables críticas como para abrir el gate de inicio de v0.7, o requiere primero una reparación documental post cierre v0.6?
```

La respuesta preliminar de este kit es:

```text
Requiere primero una reparación documental post cierre v0.6, especialmente respecto a la vista del facilitador.
```

---

## 8. Documentos iniciales del PR

Este PR debe comenzar con este kit y luego avanzar documento por documento.

### Documento 1 · Kit de inicio de sesión

```text
Kit_Inicio_Sesion_Auditoria_Integridad_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
```

Función:

```text
Abrir la fase intermedia de auditoría sin activar v0.7.
```

### Documento 2 · Deuda de la vista del facilitador

```text
Deuda_Vista_Facilitador_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
```

Función:

```text
Nombrar, justificar, localizar y priorizar la deuda DFUX-FAC-v0.6-001.
```

### Documento 3 · Auditoría de deuda e integridad

```text
Auditoria_Deuda_Integridad_Post_Cierre_v0_6_Pre_Apertura_v0_7_AI_StoryLab.md
```

Función:

```text
Evaluar el estado general de integridad documental post cierre v0.6 y pre gate v0.7.
```

### Documentos derivados posibles

Si la auditoría lo confirma, podrán crearse documentos adicionales:

```text
Consolidacion_Funcional_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
Matriz_Trazabilidad_Vista_Facilitador_v0_3_v0_6_v0_7_AI_StoryLab.md
Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
Acta_Pre_Gate_Inicio_v0_7_AI_StoryLab.md
```

Estos documentos no implementan nada. Funcionan como puente documental entre una deuda funcional reconocida y los insumos que v0.7 tendrá que considerar después.

---

## 9. Criterio de impacto sobre v0.6

Este PR puede concluir que v0.6 requiere una corrección documental limitada si se confirma que la vista del facilitador quedó insuficientemente integrada.

Esa corrección debe cumplir las siguientes condiciones:

1. no invalida PR #20;
2. no reabre todo v0.6;
3. no altera retroactivamente la lógica del cierre documental;
4. explicita una deuda pagable;
5. consolida la vista del facilitador como rol/vista funcional y experiencia UX diferenciada;
6. registra límites éticos, pedagógicos y de privacidad;
7. produce insumos para v0.7 sin resolver arquitectura final.

Formulación recomendada:

```text
Corrección documental limitada post cierre v0.6 por deuda de integridad funcional/UX.
```

---

## 10. Criterios mínimos de pago de deuda antes de v0.7

Antes de activar v0.7 debe existir respuesta documental suficiente a:

1. ¿Qué es la vista del facilitador?
2. ¿Qué no es?
3. ¿Qué hereda del MVP v0.3?
4. ¿Cómo se diferencia de asistencia docente?
5. ¿Qué puede ver el facilitador?
6. ¿Qué no puede ver?
7. ¿Qué acciones puede realizar?
8. ¿Qué acciones están prohibidas?
9. ¿Cómo se evita vigilancia?
10. ¿Cómo se preserva local-first?
11. ¿Qué requisitos funcionales abre?
12. ¿Qué riesgos de seguridad pasan a v0.7?
13. ¿Qué queda explícitamente fuera de implementación?

---

## 11. Condición de entrada futura a v0.7

La futura apertura de v0.7 requiere que este PR de auditoría haya dejado un dictamen claro:

```yaml
pre_gate_v0_7:
  vista_facilitador:
    deuda_registrada: true
    deuda_auditada: true
    criterios_no_vigilancia: definidos_o_programados
    trazabilidad_v0_3_v0_6_v0_7: definida_o_programada
    insumos_seguridad_privacidad: identificados
  decision_humana:
    requerida: true
  activacion_v0_7:
    permitida_en_este_PR: false
```

Solo un PR posterior y separado podrá abrir formalmente v0.7.

---

## 12. Protocolo de trabajo

Durante este PR se mantiene el protocolo de trabajo documental:

```yaml
protocolo:
  rama:
    nombre: docs/v0-6-auditoria-integridad-facilitador
    base: main_post_PR20
  PR:
    titulo: "docs: auditar integridad v0.6 y deuda vista facilitador"
    estado_inicial: draft
  documentos:
    modo: uno_a_uno
    aprobacion_humana_explicita: requerida
    integracion: nombre_canonico_sin_sufijo_BORRADOR_o_APROBADO
  commits:
    tipo: individuales_y_semanticos
    primer_commit: kit_inicio_sesion_auditoria
  continuidad:
    registrar_decisiones: true
    registrar_deudas: true
    registrar_impacto_v0_6: true
    no_activar_v0_7: true
```

---

## 13. Mensaje de commit recomendado

```text
docs: iniciar auditoria integridad post cierre v0.6
```

---

## 14. Cierre operativo

Este kit deja establecido que AI StoryLab 1 entra en una pausa inteligente antes de v0.7.

La prioridad inmediata no es abrir la puerta técnica. Es revisar la casa documental, ubicar la deuda del facilitador, decidir cuánto debe corregirse en v0.6 y preparar una transición más limpia hacia arquitectura técnica y seguridad.

Dictamen final de este kit:

```text
Abrir PR intermedio de auditoría post cierre v0.6 y pre apertura v0.7. No activar v0.7 todavía.
```
