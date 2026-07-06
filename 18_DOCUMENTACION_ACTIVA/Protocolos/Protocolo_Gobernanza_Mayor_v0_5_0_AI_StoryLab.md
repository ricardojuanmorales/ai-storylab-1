# Protocolo de Gobernanza Mayor v0.5.0 : AI StoryLab 1

**Proyecto:** AI StoryLab 1  
**Documento:** `Protocolo_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md`  
**Fase:** v0.5.0 Gobernanza Mayor y Consolidación de Ruta hacia v1.0.0  
**Estado:** protocolo de gobernanza mayor  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-06  

---

## 1. Propósito

Este protocolo regula cómo v0.5.0 puede tomar decisiones de mayor escala sin romper el guardarraíl SDD no funcional.

---

## 2. Reglas operativas

```text
reglas:
  - toda_decision_mayor_requiere_documento_de_decision
  - todo_cambio_de_alcance_requiere_gate
  - toda_referencia_a_v1_0_0_debe_indicar_si_es_horizonte_o_fase_activa
  - deuda_bloqueada_no_es_backlog
  - ruta_hacia_v1_0_0_no_es_implementacion
  - madurez_documental_no_es_funcionalidad
  - preparacion_no_es_activacion_tecnica
  - continuidad_no_es_permiso_automatico
```

---

## 3. Roles de revisión

```text
PH:
  revisa_no_cruce_a_codigo_arquitectura_tecnica_o_automatizacion

IT:
  revisa_no_cruce_a_investigacion_datos_reales_o_pruebas_con_personas

AT:
  revisa_no_cruce_a_UI_final_prototipo_o_assets_funcionales

Guardian_SDD:
  verifica_guardarrail_no_funcional_y_gates

Bitacora_Capitan:
  registra_maniobras_decisiones_y_riesgos
```

---

## 4. Procedimiento de decisión mayor

```text
paso_1:
  nombrar_decision

paso_2:
  verificar_si_afecta_guardarrail

paso_3:
  clasificar_como_verde_amarillo_rojo

paso_4:
  crear_documento_canónico_si_procede

paso_5:
  registrar_en_bitacora

paso_6:
  bloquear_si_cruza_a_funcionalidad
```

---

## 5. Fórmulas de control

```text
si_parece_funcional:
  detener
  reclasificar
  registrar_deuda_o_gate_futuro

si_parece_v1_0_0:
  aclarar_si_es_horizonte_o_fase

si_parece_backlog:
  revisar_deuda_bloqueada
```

---

## 6. Dictamen

El protocolo permite deliberar con mayor escala sin confundir deliberación con construcción.
