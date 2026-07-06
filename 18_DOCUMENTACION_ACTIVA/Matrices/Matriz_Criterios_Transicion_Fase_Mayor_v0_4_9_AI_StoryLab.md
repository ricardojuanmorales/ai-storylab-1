# Matriz de Criterios de Transición a Fase Mayor v0.4.9 : AI StoryLab 1

**Proyecto:** AI StoryLab 1  
**Documento:** `Matriz_Criterios_Transicion_Fase_Mayor_v0_4_9_AI_StoryLab.md`  
**Fase:** v0.4.9 Gobernanza de Transición y Preparación de Fase Mayor  
**Estado:** matriz inicial de criterios  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-06  

---

## 1. Propósito

Esta matriz define criterios documentales para evaluar cuándo AI StoryLab 1 podría considerar una fase mayor futura.

No autoriza implementación, UI real, prototipo, investigación, datos reales, arquitectura técnica ni automatización funcional.

---

## 2. Principio rector

```text
principio:
  una_fase_mayor_no_se_abre_por_acumulacion_de_documentos
  se_abre_por_evidencia_de_gobernanza_preparada_y_gate_explicito
```

---

## 3. Criterios principales

| Criterio | Pregunta guía | Estado requerido | Autoriza funcionalidad |
|---|---|---|---|
| Agencia humana | ¿El avance preserva pausa, retiro, revisión y decisión humana? | obligatorio | no |
| Transferibilidad PH/IT/AT | ¿Puede entenderse y retomarse por PH, IT y AT? | obligatorio | no |
| No cruce funcional | ¿El avance evita implementación, UI real y prototipo? | obligatorio | no |
| Deuda bloqueada | ¿La deuda técnica e investigativa sigue diferenciada de backlog? | obligatorio | no |
| Gate explícito | ¿Existe gate formal para cualquier transición? | obligatorio | no |
| Evidencia documental | ¿La decisión está trazada en documentos canónicos? | obligatorio | no |
| Riesgo ético | ¿Se identificaron riesgos de agencia, privacidad y coerción? | obligatorio | no |
| Seguridad conceptual | ¿Se preserva local-first como criterio, no como arquitectura ejecutable? | obligatorio | no |
| Continuidad post-merge | ¿Se puede reconstruir la ruta desde PR #14? | obligatorio | no |

---

## 4. Criterios de bloqueo

```text
bloquea_transicion:
  - ausencia_de_gate
  - presion_por_implementar
  - lenguaje_de_UI_final
  - datos_reales
  - pruebas_con_personas
  - arquitectura_tecnica_ejecutable
  - automatizacion_funcional
  - deuda_bloqueada_convertida_en_tarea
  - falta_de_transferencia_PH_IT_AT
```

---

## 5. Criterios de preparación suficiente

```text
preparacion_suficiente:
  - gobernanza_documentada
  - deuda_ordenada
  - mapa_de_riesgos_creado
  - protocolo_de_transicion_definido
  - gate_de_preparacion_de_fase_mayor_redactado
  - decision_humana_explicita_posterior
```

---

## 6. Dictamen

Esta matriz permite evaluar preparación futura. No abre la fase mayor.
