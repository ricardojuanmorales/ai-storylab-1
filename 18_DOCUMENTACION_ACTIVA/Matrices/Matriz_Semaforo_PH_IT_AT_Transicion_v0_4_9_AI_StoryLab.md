# Matriz Semáforo PH IT AT de Transición v0.4.9 : AI StoryLab 1

**Proyecto:** AI StoryLab 1  
**Documento:** `Matriz_Semaforo_PH_IT_AT_Transicion_v0_4_9_AI_StoryLab.md`  
**Fase:** v0.4.9 Gobernanza de Transición y Preparación de Fase Mayor  
**Estado:** matriz de revisión por perfiles  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-06  

---

## 1. Propósito

Esta matriz permite revisar decisiones de transición desde los perfiles PH, IT y AT.

Su función es detectar cruce funcional, investigativo o de diseño final antes de que ocurra.

---

## 2. Semáforo general

| Color | Significado | Acción |
|---|---|---|
| Verde | Documentación de gobernanza segura | continuar |
| Amarillo | Concepto sensible o ambiguo | revisar y etiquetar |
| Rojo | Cruce funcional o investigativo | bloquear y registrar deuda |

---

## 3. Revisión PH

| Señal | Color | Acción |
|---|---|---|
| Índices, decisiones, protocolos | Verde | continuar |
| Criterios local-first conceptuales | Amarillo | aclarar que no es arquitectura |
| Componentes, endpoints, modelos de datos | Rojo | bloquear |
| Automatizaciones ejecutables | Rojo | bloquear |

---

## 4. Revisión IT

| Señal | Color | Acción |
|---|---|---|
| Preguntas éticas y criterios de investigación futura | Verde | documentar |
| Lenguaje de validación o evidencia | Amarillo | revisar alcance |
| Pruebas con personas | Rojo | bloquear |
| Datos reales o consentimientos operativos | Rojo | bloquear |

---

## 5. Revisión AT

| Señal | Color | Acción |
|---|---|---|
| Lenguaje de experiencia conceptual | Verde | conservar |
| Microcopy o flujo narrativo | Amarillo | marcar como conceptual |
| UI final, pantalla o prototipo | Rojo | bloquear |
| Assets de producto final | Rojo | bloquear |

---

## 6. Dictamen

La matriz preserva transferencia simétrica y evita que un perfil empuje accidentalmente a los otros hacia funcionalidad.
