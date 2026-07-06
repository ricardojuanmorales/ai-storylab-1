# Mapa de Decisiones de Gobernanza Mayor v0.5.0 : AI StoryLab 1

**Proyecto:** AI StoryLab 1  
**Documento:** `Mapa_Decisiones_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md`  
**Fase:** v0.5.0 Gobernanza Mayor y Consolidación de Ruta hacia v1.0.0  
**Estado:** mapa inicial de decisiones mayores  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-06  

---

## 1. Propósito

Este mapa identifica las decisiones que v0.5.0 debe ordenar antes de cualquier cierre mayor o transición futura.

---

## 2. Decisiones mayores identificadas

```text
DEC-V050-001:
  nombre: confirmar_alcance_documental_de_v0_5_0
  estado: activa

DEC-V050-002:
  nombre: definir_criterios_de_madurez_hacia_v1_0_0
  estado: en_desarrollo

DEC-V050-003:
  nombre: organizar_deuda_bloqueada_para_fases_futuras
  estado: pendiente

DEC-V050-004:
  nombre: definir_condiciones_para_cierre_documental_mayor
  estado: pendiente

DEC-V050-005:
  nombre: preservar_transferencia_PH_IT_AT
  estado: pendiente

DEC-V050-006:
  nombre: distinguir_v1_0_0_horizonte_vs_v1_0_0_fase
  estado: pendiente
```

---

## 3. Ruta de decisión

```text
v0_5_0_activacion
  -> gobernanza_mayor
  -> criterios_madurez
  -> consolidacion_ruta_v1_0_0
  -> revision_deuda_bloqueada
  -> transferencia_PH_IT_AT
  -> gate_cierre_v0_5_0
```

---

## 4. Señales de riesgo

```text
riesgos:
  - llamar_v1_0_0_a_un_prototipo
  - tratar_madurez_como_implementacion
  - convertir_criterios_en_tareas_tecnicas
  - olvidar_gates
  - perder_contexto_post_PR16
```

---

## 5. Dictamen

El mapa ordena decisiones, no tareas funcionales.
