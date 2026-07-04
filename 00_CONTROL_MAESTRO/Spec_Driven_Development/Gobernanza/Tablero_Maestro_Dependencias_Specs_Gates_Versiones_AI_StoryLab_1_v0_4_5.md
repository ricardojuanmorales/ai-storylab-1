# Tablero Maestro de Dependencias : Specs, Gates y Versiones hacia v1.0.0

**Proyecto:** AI StoryLab 1  
**Versión de trabajo:** v0.4.5  
**Fecha:** 2026-07-04  
**Estado:** aprobado como documento relativo del hito de mapa en PR #11  
**Estado previo:** borrador complementario del Mapa de Gates SDD  
**Función documental:** síntesis de dependencias longitudinales

> **Guardarraíl constitucional v0.4.5**  
> Este documento organiza dependencias y no autoriza implementación funcional, código, backend, cloud, autenticación, analíticas, IA externa por defecto, datos reales, subida automática ni automatizaciones funcionales.

## 1. Propósito

Este tablero acompaña el `Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md` y permite ver cómo las specs nacen, maduran o se aplazan según gates, riesgos, evidencia y deuda.

## 2. Regla de lectura

```text
una_spec_se_prioriza_si:
  - desbloquea un gate;
  - reduce riesgo crítico;
  - protege un perfil humano;
  - permite evidencia necesaria;
  - evita implementación prematura;
  - clarifica deuda bloqueante.
```

## 3. Tablero longitudinal

| Versión | Gate | Specs mínimas requeridas | Specs que pueden nacer | Evidencia clave | Deuda bloqueante |
|---|---|---|---|---|---|
| v0.4.5 | Gate 1 | Consentimiento, Datos/Privacidad, Seguridad Local-First | Índice, Mapa, Modelo Evolutivo, Matriz Cruzada | revisión unitaria y gate núcleo | ausencia de tríada núcleo |
| v0.4.6 | Gate 2 | Tríada núcleo cerrada | Objeto de dominio, Threat model, Modelo conceptual | modelos sin código | arquitectura funcional prematura |
| v0.4.7 | Gate 3 | Experiencia creativa, Interfaz no rígida, Reflexión | Lenguaje por perfiles, Accesibilidad expresiva | pruebas de escritorio | interfaz coercitiva |
| v0.5.x | Gate 4 | Prototipo local-first, Evidencia, Portafolio | Escenarios ficticios, No captura accidental | datos ficticios y threat model | datos reales o cloud |
| v0.6.x | Gate 5 | Protocolo de pruebas, Consentimiento de pruebas | Registro de incidentes, Ajustes post-prueba | informe de pruebas | prueba sin protocolo |
| v0.8.x | Gate 6 | Exportación controlada, Mantenimiento deuda | Escalamiento, Uso secundario de datos | matriz de riesgos actualizada | deuda crítica |
| v0.9.x | Gate 7 | Auditoría RC, Checklist liberación | Regresión documental, Cumplimiento final | deuda crítica cero | brecha constitucional |
| v1.0.0 | Gate 8 | Auditoría final, Decisión de liberación | Continuidad post-v1 | dictamen final PH-IT-AT | deuda crítica abierta |

## 4. Familias de specs

```text
familia_proteccion:
  - consentimiento
  - datos_privacidad
  - seguridad_local_first
  - threat_model

familia_experiencia:
  - experiencia_creativa_local_first
  - interfaz_no_rigida
  - reflexion_usuario
  - accesibilidad_expresiva

familia_evidencia:
  - evidencia_creativa
  - portafolio_local
  - trazabilidad
  - investigacion_creacion

familia_transicion:
  - objeto_dominio
  - arquitectura_conceptual
  - exportacion_controlada
  - release_candidate
  - auditoria_final
```

## 5. Dictamen

El tablero confirma que v0.4.5 no debe cargar con todas las specs futuras. Su tarea es crear la primera tríada núcleo, el índice, el mapa y la regla evolutiva que permitirá que cada spec aparezca cuando su gate la requiera.
