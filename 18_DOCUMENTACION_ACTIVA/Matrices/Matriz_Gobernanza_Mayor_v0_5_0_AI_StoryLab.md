# Matriz de Gobernanza Mayor v0.5.0 : AI StoryLab 1

**Proyecto:** AI StoryLab 1  
**Documento:** `Matriz_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md`  
**Fase:** v0.5.0 Gobernanza Mayor y Consolidación de Ruta hacia v1.0.0  
**Estado:** matriz de gobernanza mayor  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-06  

---

## 1. Propósito

Esta matriz define las capas de gobernanza mayor necesarias para consolidar la ruta hacia v1.0.0 sin activar funcionalidad.

---

## 2. Principio rector

```text
gobernanza_mayor:
  aumenta_capacidad_de_decision
  no_aumenta_capacidad_de_ejecucion_funcional
```

---

## 3. Capas de gobernanza

| Capa | Función | Evidencia documental | Riesgo controlado |
|---|---|---|---|
| Autoridad humana | Determina qué se puede activar | Decisiones explícitas | Activación por inercia |
| Gate documental | Autoriza aperturas y cierres | Gates versionados | Cruce de alcance |
| Guardarraíl SDD | Mantiene límites no funcionales | Registros de no cruce | Implementación accidental |
| Deuda bloqueada | Evita convertir deseos en backlog | Registro de deuda | Funcionalización prematura |
| Transferencia PH/IT/AT | Preserva comprensión simétrica | Transferencias y guías | Dependencia de un solo perfil |
| Navegación canónica | Ubica documentos rectores | Índices y README | Fragmentación documental |
| Madurez documental | Evalúa preparación hacia v1.0.0 | Criterios y matrices | Cierre falso |

---

## 4. Estados permitidos

```text
verde:
  decision_documental
  protocolo
  matriz
  mapa
  indice
  bitacora
  transferencia
  gate
  deuda_bloqueada

amarillo:
  criterio_de_madurez
  mapa_de_ruta
  escenario_conceptual
  lenguaje_de_transicion
  condicion_futura

rojo:
  implementacion
  UI_real
  wireframe_funcional
  prototipo
  datos_reales
  investigacion_activa
  arquitectura_tecnica
  automatizacion
```

---

## 5. Relación con v1.0.0

```text
v1_0_0:
  puede_ser_preparado_documentalmente
  no_puede_ser_asumido_como_implementado
```

---

## 6. Criterio de paso

```text
una_decision_de_v0_5_0_puede_avanzar_si:
  - tiene_documento_canónico
  - tiene_gate_o_decision_asociada
  - conserva_guardarrail_no_funcional
  - no_convierte_deuda_en_backlog
  - puede_ser_entendida_por_PH_IT_AT
```

---

## 7. Dictamen

La matriz permite gobernar la complejidad mayor sin traducirla a ejecución funcional.
