# Expediente Técnico Pre-G2 · Migración Funcional C3

**Identificador:** `DOC-DOC-026`
**Fecha:** 2026-07-12
**Base:** `3a4f300524eb6ba7308d35c0c139f4ad788a0b36`
**Rama:** `docs/c3-migracion-funcional-controlada-g2`
**Gate:** `GATE-CORR-G2 · pending`
**Deuda:** `DEBT-GOV-004 · blocked`
**Merge autorizado:** No

---

## 1. Alcance ejecutado

```text
C3-A0 → DOC-ARQ-001
C3-C  → DOC-GOB-007 + DOC-UX-003
C3-B  → DOC-UX-002 + DOC-UX-004 + DOC-UX-006 + DOC-UX-005
C3-A2 → DOC-ARQ-002
```

## 2. Resultado técnico

```text
fuentes movidas en rama: 8
movimientos puros: 4
commits de referencias: 4
reversiones ensayadas: 4
hashes equivalentes en movimiento: 8 de 8
fuentes antiguas presentes: 0
destinos presentes: 8
DOC-UX-007 modificado: no
Registro Maestro de Gates modificado: no
Registro Maestro de Deuda modificado: no
```

## 3. Regla de canonicidad

La rama contiene rutas candidatas y coherentes para revisión.

```text
canonical_en_main: no
merge_authorized: false
GATE-CORR-G2: pending
```

Las nuevas rutas solo se volverán canónicas si una decisión humana aprueba G2 sobre un head fijo y posteriormente se fusiona el PR.

## 4. Actualizaciones de enlaces sustantivos

No fue necesario modificar destinos de enlaces Markdown dentro de las fuentes sustantivas.

Las modificaciones de enlaces, cuando existen, están separadas de los commits puros de movimiento y no alteran el contenido conceptual.

## 5. Evidencia requerida para la siguiente decisión

- PR en draft;
- head SHA fijo;
- ocho destinos exactos;
- cuatro commits puros;
- cuatro commits de referencias;
- expediente y matriz de hashes;
- revisión remota del diff;
- decisión humana de `GATE-CORR-G2`.

## 6. Límites preservados

Este expediente no:

- aprueba G2;
- autoriza Ready;
- autoriza merge;
- resuelve `DEBT-GOV-004`;
- inicia C4;
- mueve `DOC-UX-007`;
- abre v0.8.0;
- autoriza implementación.
