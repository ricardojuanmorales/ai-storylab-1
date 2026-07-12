# Matriz de Lotes, Elegibilidad y Reversión C3

**Identificador:** `DOC-DOC-016`
**Fecha:** 2026-07-12
**Estado:** Propuesta para revisión humana
**Gate:** `GATE-CORR-G2 · pending`

---

## 1. Matriz

| Lote | Documentos | Ruta objetivo | Condiciones antes de mover | Estrategia futura | Reversión |
|---|---|---|---|---|---|
| C3-A | `DOC-ARQ-001`, `DOC-ARQ-002` | `02/.../Arquitectura_Funcional/` | identidad, vigencia, enlaces y conflicto C4 verificados | commit puro de `git mv`; metadatos en commit separado | `git revert` del commit del lote |
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
C3-A1 movimiento puro arquitectura funcional
C3-A2 enlaces y metadatos arquitectura funcional
C3-C1 movimiento atómico marco de misión + flujos
C3-C2 enlaces y metadatos del par documental
C3-B1 movimiento puro diseño funcional y UX restante
C3-B2 enlaces y metadatos diseño funcional y UX restante
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
