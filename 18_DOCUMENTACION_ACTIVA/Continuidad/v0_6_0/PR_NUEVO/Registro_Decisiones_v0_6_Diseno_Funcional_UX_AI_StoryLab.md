# Registro de Decisiones v0.6 · Diseño Funcional + UX · AI StoryLab 1

**Versión:** APROBADO  
**Fase:** AI StoryLab 1 v0.6 · Diseño Funcional + UX  
**Tipo de documento:** Registro consolidado de decisiones  
**Estado:** Aprobado para integración canónica  
**PR asociado:** PR #20 · `docs: iniciar activacion v0.6 diseno funcional ux`  
**Rama asociada:** `docs/v0-6-activacion-diseno-funcional-ux`  
**Fecha:** 2026-07-07  
**Zona horaria de referencia:** America/Puerto_Rico  

---

## 0. Nota de alcance

Este registro consolida decisiones documentales, funcionales, UX y de gobernanza tomadas durante v0.6 en PR #20.

No cierra automáticamente v0.6.

No activa v0.7.

No marca PR #20 como ready for review.

No hace merge.

No autoriza arquitectura técnica.

No autoriza implementación.

No autoriza validación con personas.

No autoriza uso de datos reales.

No autoriza backend, APIs, IA embebida ni despliegue.

Su función es preservar decisiones para continuidad, auditoría, gate y fases futuras.

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

## 2. Decisiones marco

| Código | Decisión | Justificación | Estado |
|---|---|---|---|
| DEC-v0.6-001 | Activar v0.6 como diseño funcional + UX | v0.6 debía definir función antes de arquitectura | Consolidada |
| DEC-v0.6-002 | Mantener PR #20 en draft durante la construcción | Evita merge prematuro | Consolidada |
| DEC-v0.6-003 | Preservar protocolo de aprobación humana explícita | Protege gobernanza documental | Consolidada |
| DEC-v0.6-004 | Integrar documentos con nombre canónico sin `_APROBADO` | Mantiene limpieza del repo | Consolidada |
| DEC-v0.6-005 | Actualizar bitácoras en bloque al cierre | Evita bitácoras prematuras sin materia real | Consolidada |

---

## 3. Decisiones funcionales

| Código | Decisión | Documento principal | Estado |
|---|---|---|---|
| DEC-FUNC-v0.6-001 | Separar función ecosistémica de protocolo GitHub | Mapa funcional / Auditoría oficial | Consolidada |
| DEC-FUNC-v0.6-002 | Incluir memoria formativa, portafolio y reflexión como capa funcional | Mapa funcional | Consolidada |
| DEC-FUNC-v0.6-003 | Distinguir documentación, portafolio, evidencia, reflexión y curaduría | Mapa funcional / UX | Consolidada |
| DEC-FUNC-v0.6-004 | Definir portafolio como memoria viva | Modelo UX / Requisitos | Consolidada |
| DEC-FUNC-v0.6-005 | Tratar evidencia como rastro contextualizado | Modelo UX / Requisitos | Consolidada |
| DEC-FUNC-v0.6-006 | Considerar transferencia como continuidad, no publicación | Flujos / Accesibilidad | Consolidada |

---

## 4. Decisiones sobre misión

| Código | Decisión | Documento principal | Estado |
|---|---|---|---|
| DEC-MISION-v0.6-001 | Misión como unidad pedagógico-creativa de producción | Marco de Misión | Consolidada |
| DEC-MISION-v0.6-002 | Toda misión tiene núcleo mínimo y libertad creativa | Marco de Misión | Consolidada |
| DEC-MISION-v0.6-003 | Diferenciar escuela superior y universidad por capas | Marco / Recorridos | Consolidada |
| DEC-MISION-v0.6-004 | Asistencia docente como componente funcional | Marco / Recorridos | Consolidada |
| DEC-MISION-v0.6-005 | Herramientas asociadas al evento de producción | Marco / Flujos | Consolidada |
| DEC-MISION-v0.6-006 | IA como andamiaje externo opcional | Marco / Humano-IA | Consolidada |
| DEC-MISION-v0.6-007 | Referencias externas declaradas bajo control humano | Marco / Flujos / Requisitos | Consolidada |
| DEC-MISION-v0.6-008 | Misión aporta al portafolio vivo | Marco / Requisitos | Consolidada |
| DEC-MISION-v0.6-009 | Producción como cadena iterativa | Marco / Flujos | Consolidada |
| DEC-MISION-v0.6-010 | Completitud no equivale a excelencia | Marco / Flujos | Consolidada |
| DEC-MISION-v0.6-011 | v0.6 prepara evaluación futura, pero no valida | Marco / Recorridos | Consolidada |
| DEC-MISION-v0.6-012 | Toda misión debe prever adaptación | Marco / Accesibilidad | Consolidada |

---

## 5. Decisiones humano-IA

| Código | Decisión | Justificación | Estado |
|---|---|---|---|
| DEC-HIA-v0.6-001 | No asumir IA embebida en v0.6 | Protege local-first | Consolidada |
| DEC-HIA-v0.6-002 | Usar prompts sugeridos editables y opcionales | Evita dependencia | Consolidada |
| DEC-HIA-v0.6-003 | Toda misión debe poder completarse sin herramienta externa | Accesibilidad y equidad | Consolidada |
| DEC-HIA-v0.6-004 | Registrar uso externo con contexto humano | Trazabilidad proporcional | Consolidada |
| DEC-HIA-v0.6-005 | Reflexión debe ser humana o apropiada por la persona | Protege voz y autoría | Consolidada |
| DEC-HIA-v0.6-006 | Docente acompaña sin producir por estudiante | Preserva agencia | Consolidada |

---

## 6. Decisiones sobre v0.3.0 heredado

| Código | Decisión | Estado |
|---|---|---|
| DEC-HIST-v0.6-001 | Las misiones S1-S9 de v0.3.0 son antecedente histórico | Consolidada |
| DEC-HIST-v0.6-002 | v0.6 usa una gramática configurable de misiones | Consolidada |
| DEC-HIST-v0.6-003 | La correspondencia con S1-S9 queda como referencia secundaria | Consolidada |

---

## 7. Decisiones de gate y cierre

| Código | Decisión | Estado |
|---|---|---|
| DEC-GATE-v0.6-001 | Gate ubicado entre cierre técnico-documental y v0.7 | Consolidada |
| DEC-GATE-v0.6-002 | Nombre recomendado: Gate de Transición Controlada v0.6 → v0.7 | Consolidada |
| DEC-GATE-v0.6-003 | Dictamen recomendado: Decisión B · Pasar condicionado | Consolidada |
| DEC-GATE-v0.6-004 | v0.7 no se activa por acta, auditoría, bitácora ni merge | Consolidada |
| DEC-CIERRE-v0.6-001 | Adoptar ruta limpia antes del merge | Aprobada para integración |
| DEC-CIERRE-v0.6-002 | Completar paquete de bitácoras y registros activos antes de merge | Aprobada para integración |

---

## 8. Decisiones pendientes antes del merge

1. Aprobar o revisar este paquete de cierre.
2. Generar versiones `_APROBADO.md`.
3. Integrar documentos canónicos.
4. Verificar PR #20.
5. Confirmar comentarios de hito.
6. Marcar ready for review.
7. Autorizar merge explícitamente.

---

## 9. Dictamen

Las decisiones de v0.6 están suficientemente consolidadas para sostener cierre documental condicionado, siempre que este registro y los demás instrumentos activos queden aprobados e integrados.

Este registro queda como **APROBADO** para integración canónica documental. Se aprueba cierre documental condicionado de v0.6 en PR #20. Esta aprobación no autoriza arquitectura técnica, implementación, validación con personas ni despliegue.
