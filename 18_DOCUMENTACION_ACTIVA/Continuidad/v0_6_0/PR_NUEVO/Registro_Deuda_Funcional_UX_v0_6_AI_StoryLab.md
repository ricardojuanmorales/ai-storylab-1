# Registro de Deuda Funcional y UX v0.6 · AI StoryLab 1

**Versión:** APROBADO  
**Fase:** AI StoryLab 1 v0.6 · Diseño Funcional + UX  
**Tipo de documento:** Registro consolidado de deuda funcional y UX  
**Estado:** Aprobado para integración canónica  
**PR asociado:** PR #20 · `docs: iniciar activacion v0.6 diseno funcional ux`  
**Rama asociada:** `docs/v0-6-activacion-diseno-funcional-ux`  
**Fecha:** 2026-07-07  
**Zona horaria de referencia:** America/Puerto_Rico  

---

## 0. Nota de alcance

Este registro consolida deuda funcional, UX, pedagógica, documental, técnica futura y de seguridad futura generada durante v0.6.

No cierra automáticamente v0.6.

No activa v0.7.

No marca PR #20 como ready for review.

No hace merge.

No autoriza arquitectura técnica.

No autoriza implementación.

No autoriza validación con personas.

No autoriza uso de datos reales.

No autoriza backend, APIs, IA embebida ni despliegue.

La deuda aquí registrada no es falla. Es memoria de diseño para decisiones futuras.

---

## 0.1 Decisión humana de cierre

La persona responsable aprueba explícitamente el cierre documental condicionado de v0.6 en PR #20:

```text
Se aprueba cierre documental condicionado de v0.6 en PR #20.
```

Esta decisión permite integrar el paquete de bitácoras y registros activos como cierre protocolario previo a cualquier acción de ready for review o merge.

## 1. Estado operativo de referencia

```text
PR #20: abierto
Draft: true
Merged: false
Mergeable: true
Commits: 14
Changed files: 16
Additions: 10197
Deletions: 0
Head SHA: 130a2ec22380a8e12afe8768d3d7041fd972fe47
```

---

## 2. Criterios de deuda

Una deuda se registra si:

- deriva de documentos aprobados de v0.6;
- requiere atención futura;
- no debe resolverse en v0.6;
- necesita proteger local-first, agencia humana, portafolio, misión, accesibilidad o trazabilidad;
- prepara v0.7 sin activarla.

---

## 3. Deuda consolidada prioritaria

| Código | Deuda | Tipo | Prioridad | Fase sugerida | Estado |
|---|---|---|---:|---|---|
| DFUX-CIERRE-001 | Confirmar comentarios de hito recientes en PR #20 | Documental | Alta | Cierre v0.6 | Abierta |
| DFUX-CIERRE-002 | Integrar bitácoras y registros activos antes de merge | Documental | Alta | Cierre v0.6 | Aprobada para integración |
| DFUX-CIERRE-003 | Confirmar decisión humana explícita del gate antes de v0.7 | Gobernanza | Alta | Cierre v0.6 | Abierta |
| DFUX-CIERRE-004 | Verificar `mergeable` justo antes de ready/merge | Operativa | Alta | Cierre v0.6 | Abierta |
| DFUX-CIERRE-005 | Decidir si PR #20 pasa a ready for review | Gobernanza | Alta | Cierre v0.6 | Abierta |
| DFUX-CIERRE-006 | Decidir si PR #20 se mergea como cierre documental condicionado | Gobernanza | Alta | Cierre v0.6 | Abierta |

---

## 4. Deuda local-first y seguridad futura

| Código | Deuda | Prioridad | Fase sugerida |
|---|---|---:|---|
| DFUX-LF-001 | Definir arquitectura local-first verificable | Alta | v0.7 |
| DFUX-LF-002 | Definir almacenamiento local y recuperación segura | Alta | v0.7 |
| DFUX-LF-003 | Diseñar export/import por decisión humana | Alta | v0.7 |
| DFUX-LF-004 | Definir manejo seguro de referencias externas | Alta | v0.7 |
| DFUX-LF-005 | Definir sensibilidad de evidencias y enlaces | Alta | v0.7 |
| DFUX-LF-006 | Evitar lectura/importación/sincronización automática de enlaces externos | Alta | v0.7 |
| DFUX-LF-007 | Crear patrones de advertencia sobre privacidad, autoría y enlaces | Alta | v0.7 |

---

## 5. Deuda de misiones y producción

| Código | Deuda | Prioridad | Fase sugerida |
|---|---|---:|---|
| DFUX-MIS-001 | Modelar técnicamente misiones configurables sin rigidez | Alta | v0.7 |
| DFUX-MIS-002 | Diseñar ruta mínima + libertad creativa en estructura futura | Alta | v0.7 |
| DFUX-MIS-003 | Definir variantes escuela superior/universidad | Alta | v0.7 / v0.8 |
| DFUX-MIS-004 | Crear matriz misión-evento-herramienta-evidencia-portafolio | Alta | v0.7 |
| DFUX-MIS-005 | Precisar estados funcionales de misión | Alta | v0.7 |
| DFUX-MIS-006 | Definir completitud, calidad, curaduría y transferencia | Media | v0.7 / v0.8 |
| DFUX-MIS-007 | Reinterpretar S1-S9 como caso histórico sin fijar canon | Alta | v0.7 |

---

## 6. Deuda humano-IA

| Código | Deuda | Prioridad | Fase sugerida |
|---|---|---:|---|
| DFUX-HIA-001 | Crear banco canónico de prompts sugeridos por misión | Alta | v0.7 / v0.8 |
| DFUX-HIA-002 | Definir campos mínimos de registro de uso externo | Alta | v0.7 |
| DFUX-HIA-003 | Diseñar advertencias antes de copiar prompts | Alta | v0.7 |
| DFUX-HIA-004 | Mantener rutas alternativas sin herramienta externa | Alta | v0.7 / v0.8 |
| DFUX-HIA-005 | Definir criterios de atribución por herramienta | Alta | v0.8 |
| DFUX-HIA-006 | Crear checklist docente de uso responsable | Alta | v0.8 |
| DFUX-HIA-007 | Definir cómo registrar apoyo externo sin sobrecapturar | Alta | v0.7 |
| DFUX-HIA-008 | Auditar lenguaje para evitar IA embebida en PR futuros | Alta | v0.7 |

---

## 7. Deuda de evidencia y portafolio

| Código | Deuda | Prioridad | Fase sugerida |
|---|---|---:|---|
| DFUX-EVI-001 | Definir estructura de evidencia contextualizada | Alta | v0.7 |
| DFUX-EVI-002 | Definir sensibilidad de evidencia | Alta | v0.7 |
| DFUX-EVI-003 | Diseñar portafolio vivo como memoria local de proceso | Alta | v0.7 |
| DFUX-EVI-004 | Vincular evidencia, decisión, reflexión y continuidad | Alta | v0.7 |
| DFUX-EVI-005 | Diseñar estados de evidencia y curaduría | Alta | v0.7 |
| DFUX-EVI-006 | Evitar portafolio como carpeta pasiva | Alta | v0.7 / v0.8 |
| DFUX-EVI-007 | Definir narrativa de proceso transferible | Media | v0.8 |

---

## 8. Deuda de accesibilidad y claridad

| Código | Deuda | Prioridad | Fase sugerida |
|---|---|---:|---|
| DFUX-ACC-001 | Crear guía de lenguaje claro para misiones | Alta | v0.7 |
| DFUX-ACC-002 | Consolidar mensajes local-first canónicos | Alta | v0.7 |
| DFUX-ACC-003 | Diseñar patrones de advertencia por riesgo | Alta | v0.7 |
| DFUX-ACC-004 | Definir glosario funcional breve | Media | v0.7 |
| DFUX-ACC-005 | Diseñar criterios de carga cognitiva proporcional | Media | v0.7 / v0.8 |
| DFUX-ACC-006 | Preparar auditoría técnica de accesibilidad futura | Media | v0.8 |

---

## 9. Deuda de asistencia docente

| Código | Deuda | Prioridad | Fase sugerida |
|---|---|---:|---|
| DFUX-DOC-001 | Definir asistencia docente por tipo de misión | Alta | v0.7 / v0.8 |
| DFUX-DOC-002 | Crear guías para acompañar sin sustituir | Alta | v0.8 |
| DFUX-DOC-003 | Definir señales de alerta docente | Media | v0.8 |
| DFUX-DOC-004 | Diferenciar acompañamiento de escuela superior y universidad | Alta | v0.8 |

---

## 10. Deuda de trazabilidad y gobernanza

| Código | Deuda | Prioridad | Fase sugerida |
|---|---|---:|---|
| DFUX-TRZ-001 | Consolidar matriz requisito-documento-origen-deuda | Alta | Cierre v0.6 / v0.7 |
| DFUX-TRZ-002 | Crear checklist de no regresión documental | Alta | v0.7 |
| DFUX-TRZ-003 | Definir trazabilidad longitudinal entre misión, evidencia, decisión y deuda | Alta | v0.7 |
| DFUX-TRZ-004 | Mantener gate humano antes de activar fases | Alta | Todas |
| DFUX-TRZ-005 | Definir qué pasa a MVP técnico y qué queda posterior | Alta | v0.7 |

---

## 11. Deuda que no debe resolverse en v0.6

Quedan deliberadamente fuera de v0.6:

- arquitectura;
- stack;
- modelo de datos;
- backend;
- APIs;
- autenticación;
- IA embebida;
- implementación;
- validación con personas;
- pruebas productivas;
- despliegue;
- marketplace readiness.

---

## 12. Criterio de cierre de deuda

Una deuda solo podrá cerrarse cuando exista:

1. decisión documentada;
2. justificación;
3. documento o commit asociado;
4. verificación de no contradicción con v0.6;
5. actualización de bitácora;
6. impacto registrado;
7. aprobación humana explícita si afecta alcance.

---

## 13. Dictamen

La deuda consolidada de v0.6 está suficientemente organizada para alimentar v0.7 sin activarla.

Este registro queda como **APROBADO** para integración canónica documental. Se aprueba cierre documental condicionado de v0.6 en PR #20. Esta aprobación no autoriza arquitectura técnica, implementación, validación con personas ni despliegue.
