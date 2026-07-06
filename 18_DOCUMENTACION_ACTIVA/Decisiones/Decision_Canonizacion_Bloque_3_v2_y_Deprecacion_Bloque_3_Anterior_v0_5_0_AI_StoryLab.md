# Decisión de Canonización Bloque 3 v2 y Deprecación Bloque 3 Anterior : AI StoryLab 1

**Proyecto:** AI StoryLab 1  
**Documento:** `Decision_Canonizacion_Bloque_3_v2_y_Deprecacion_Bloque_3_Anterior_v0_5_0_AI_StoryLab.md`  
**Fase:** v0.5.0 Gobernanza Mayor y Consolidación de Ruta hacia v1.0.0  
**Estado:** decisión de canonización y limpieza  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-06  

---

## 1. Propósito

Este documento canoniza el **Bloque 3 v2** como versión vigente de la ruta hacia `v1.0.0` y declara obsoleta la interpretación anterior.

---

## 2. Decisión

```text
decision:
  canonico: Bloque_3_v2_Ruta_v1_0_0_Ecosistema_Funcional
  obsoleto: Bloque_3_anterior_Ruta_v1_0_0_solo_horizonte_documental
```

---

## 3. Razón

El Bloque 3 anterior podía interpretarse como si `v1.0.0` fuera solo un horizonte documental.

Esa interpretación contradice la ruta acordada:

```text
v1_0_0:
  es_ecosistema_funcional_publicable
  incluye_aplicacion_funcional
  incluye_documentacion_guías_specs_seguridad_pruebas_validacion_despliegue_mantenimiento
```

---

## 4. Archivos del Bloque 3 anterior recomendados para remoción del PR

```text
18_DOCUMENTACION_ACTIVA/Bitacoras/Actualizacion_Bitacora_Capitan_v0_5_0_Bloque_3_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Criterios/Criterios_Preparacion_v1_0_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Gate_Consolidacion_Ruta_v1_0_0_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Mapas/Mapa_Ruta_Documental_v0_5_0_a_v1_0_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Matrices/Matriz_Alineacion_v0_5_0_v1_0_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Planes/Plan_Trabajo_Consolidacion_Ruta_v1_0_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Transferencias/Transferencia_Parcial_Ruta_v1_0_0_PH_IT_AT_AI_StoryLab.md
```

El archivo `README_Bloque_3_Consolidacion_Ruta_v1_0_0_v0_5_0_AI_StoryLab.md` queda sobrescrito por la versión v2 y no debe eliminarse.

---

## 5. Regla canónica

```text
v0_5:
  no_implementa

v1_0:
  no_es_solo_documentacion

ruta:
  v0_5_gobierna
  v0_6_disena
  v0_7_estructura
  v0_8_construye
  v0_9_valida
  v1_0_publica
```

---

## 6. Dictamen

El Bloque 3 v2 queda como fuente canónica.

La brújula corregida manda sobre la brújula anterior.
