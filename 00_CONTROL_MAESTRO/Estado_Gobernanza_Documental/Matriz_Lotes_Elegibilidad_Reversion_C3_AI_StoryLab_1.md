# Matriz de Lotes, Elegibilidad y Reversión C3

**Identificador:** `DOC-DOC-016`
**Fecha:** 2026-07-12
**Estado:** Ejecutada en rama controlada; pendiente de G2 y merge
**Gate:** `GATE-CORR-G2 · pending`

---

## 1. Matriz

| Lote | Documentos | Ruta objetivo | Condiciones antes de mover | Estrategia futura | Reversión |
|---|---|---|---|---|---|
| C3-A0 | `DOC-ARQ-001` | `02/.../Arquitectura_Funcional/` | identidad, vigencia, referencias y destino verificados | commit puro de `git mv`; referencias en commit separado | `git revert` del commit C3-A0 |
| C3-A2 | `DOC-ARQ-002` | `02/.../Arquitectura_Funcional/` | ejecutar después de C3-A0, C3-C y C3-B; validar los nueve antecedentes declarados | commit puro de `git mv`; referencias finales en commit separado | `git revert` del commit C3-A2 |
| C3-B | `DOC-UX-002`, `DOC-UX-004`–`DOC-UX-006` | `02/.../Diseno_Funcional_UX/` | identidad, vigencia, enlaces, accesibilidad y coherencia UX verificadas | commit puro de `git mv`; metadatos en commit separado | `git revert` del commit del lote |
| C3-C | `DOC-GOB-007`, `DOC-UX-003` | `02/.../Arquitectura_Funcional/` + `02/.../Diseno_Funcional_UX/` | autoridad y destino resueltos; referencias, hashes y reversión verificados; aprobación humana G2 | un commit atómico de movimiento para el par; metadatos y enlaces en commit separado | `git revert` del commit atómico C3-C |
| C3-H2 | `DOC-UX-007` | pendiente | separación UX, roles, seguridad y dependencia C4 | no mover | no aplica |

## 2. Checks obligatorios por lote

```text
fuente existe
destino no existe
document_id estable
contenido sin cambios en commit de movimiento
hash antes y después equivalente
enlaces entrantes inventariados
README de destino vigente
cero mezcla con C4
reversión ensayada
aprobación humana
```

## 3. Secuencia futura recomendada

```text
C3-P0 preparación documental
C3-A0.1 movimiento puro del mapa funcional
C3-A0.2 referencias y metadatos del mapa funcional
C3-C1 movimiento atómico marco de misión + flujos
C3-C2 referencias y metadatos del par documental
C3-B1 movimiento puro del bloque UX restante
C3-B2 referencias y metadatos del bloque UX
C3-A2.1 movimiento puro de requisitos funcionales
C3-A2.2 referencias finales y validación integral
GATE-CORR-G2 decisión humana
merge
cierre documental C3
```

## 4. Reglas de detención

La operación futura se detiene si:

- cambia el head del PR;
- aparece una fuente competidora;
- un documento carece de identificador estable;
- el destino ya contiene otra fuente;
- se detecta dependencia técnica de C4;
- cambia contenido durante un commit de movimiento;
- falla la reversión;
- no existe aprobación humana.

## 5. Efecto de esta matriz

Esta matriz no aprueba lotes ni autoriza movimientos.

Solo define cómo podrían ejecutarse y revertirse.

---

## 6. Resultado de reevaluación post-PR36

```text
C3-A0: apto para preparar migración
C3-C: apto para preparar migración atómica
C3-B: apto para preparar migración después de C3-C
C3-A2: apto para preparar migración al cierre de secuencia
C3-H2: fuera de alcance; permanece C3-C4
GATE-CORR-G2: pending
aptitud_aprobacion_G2: no_todavia
```

La reevaluación habilita recomendar una rama independiente de migración controlada.

No autoriza movimientos ni aprueba el gate.

<!-- C3_EXECUTION_EVIDENCE_START -->
## 7. Evidencia de ejecución en rama controlada

| Lote | Commit puro | Commit de referencias | Estado |
|---|---|---|---|
| `C3-A0` | `169339a273d28bed8cf2df71d171886bb1e6c1d7` | `a5fd5f579bbca2ad452b3dd07748d79880622eb5` | `ejecutado_en_rama_pending_G2` |
| `C3-C` | `fa18235905b6733a5f67fd99890e0c90726326b1` | `2cbd61054eb244cb6c15f40432c931b4698a13c2` | `ejecutado_en_rama_pending_G2` |
| `C3-B` | `14ef4ab2ba5711db3a710764e7fb3c943c00cd34` | `99a6b955bd3e56eb4bfc46a320db46bdb33fae5b` | `ejecutado_en_rama_pending_G2` |
| `C3-A2` | `f1f9bb10e3c8a625ef83ea4f545b0cf6e814b1d9` | `3eba007f32bfaa3aeea4d49d9f7ef1ad2131d841` | `ejecutado_en_rama_pending_G2` |

```text
GATE-CORR-G2: pending
merge_authorized: false
DEBT-GOV-004: blocked
```

La ejecución en rama produce evidencia. No autoriza el merge.
<!-- C3_EXECUTION_EVIDENCE_END -->
