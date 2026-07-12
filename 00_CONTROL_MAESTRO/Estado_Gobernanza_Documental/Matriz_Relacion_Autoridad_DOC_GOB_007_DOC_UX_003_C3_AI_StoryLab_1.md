# Matriz de Relación de Autoridad · DOC-GOB-007 y DOC-UX-003

**Identificador:** `DOC-DOC-021`
**Fecha:** 2026-07-12
**Estado:** Evidencia preparatoria C3
**Lote:** `C3-C`
**Movimiento autorizado:** No

---

## 1. Relación documental

| Dimensión | `DOC-GOB-007` | `DOC-UX-003` | Regla conjunta |
|---|---|---|---|
| Tipo | Marco normativo funcional acotado | Flujos funcionales conceptuales | No compiten; se complementan |
| Función | Define la gramática de misión | Expresa la gramática como secuencias | Preservar trazabilidad bilateral |
| Autoridad | Normativa dentro de misión | Operativa-conceptual dentro de flujos | La estructura precede al flujo |
| Destino | `Arquitectura_Funcional/` | `Diseno_Funcional_UX/` | Dos destinos, un lote atómico |
| Estado actual | Canónico en ruta transitoria | Canónico en ruta transitoria | Ninguna ruta cambia con este dictamen |
| G2 | Pendiente | Pendiente | Requiere una sola decisión humana |
| Reversión | Conjunta | Conjunta | Revertir el commit C3-C |

## 2. Dependencias

```text
DOC-ARQ-001
  → DOC-GOB-007
  → DOC-UX-003
  → DOC-ARQ-002
  → DOC-UX-004
  → DOC-UX-005
  → DOC-UX-006
```

La flecha representa dependencia funcional o derivación, no sustitución.

## 3. Reglas del futuro movimiento

```text
fuentes existen
destinos no existen
document_id estable
contenido inalterado
hash antes = hash después
un commit de movimiento C3-C
un commit separado de referencias
reversión conjunta ensayada
GATE-CORR-G2 aprobado por decisión humana
```

## 4. Estado

```text
clasificacion_DOC_GOB_007: resuelta_pre_gate
destino_DOC_GOB_007: candidato_definido
DOC_UX_003: condicionado_lote_conjunto
GATE-CORR-G2: pending
DEBT-GOV-004: blocked
movimientos: 0
```
