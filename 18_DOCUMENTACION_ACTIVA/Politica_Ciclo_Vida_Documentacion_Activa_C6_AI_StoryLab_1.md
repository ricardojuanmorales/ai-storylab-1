# Política de Ciclo de Vida de Documentación Activa · C6

**Identificador:** `DOC-DOC-033`
**Fecha:** 2026-07-13
**Fase:** C6
**Estado:** preparado para integración
**Ámbito:** `18_DOCUMENTACION_ACTIVA`

## 1. Propósito

`18_DOCUMENTACION_ACTIVA` conserva la memoria viva trazable del proyecto.
Su función primaria es permitir continuidad, reconstrucción de decisiones,
transferencia de contexto y lectura histórica del trabajo en curso.

No constituye una fuente general de autoridad sustantiva.

## 2. Ciclo de vida

```text
entrada
  → permanencia
  → referencia
  → cierre
  → retención o salida gobernada
```

### Entrada

Pueden entrar bitácoras, cierres, transferencias, kits, prompts, changelogs,
decisiones humanas registradas y materiales de continuidad.

### Permanencia

Toda pieza debe poder identificarse por fase, tipo, estado, vigencia,
fuente relacionada, criterio de cierre y destino al cierre.

### Referencia

Cuando exista una fuente funcional estable fuera de `18`, la autoridad se
ejerce desde esa fuente. `18` conserva el vínculo y la memoria, no una
autoridad paralela.

### Cierre

Cerrar una pieza de continuidad no la vuelve automáticamente histórica ni
autoriza moverla a `99`. La política de archivo corresponde a C8.

### Salida

Los movimientos, sustituciones físicas, deprecaciones y archivo requieren una
fase expresamente autorizada. C6 no los ejecuta.

## 3. Autoridad

```text
bitácoras, kits, cierres, transferencias y copias:
  canonical: no

decisiones humanas registradas:
  autoridad acotada por Decision ID

mapas y matrices ligados a decisiones activas:
  autoridad derivada como excepción controlada

fuentes sustantivas en HOLD o diferidas:
  autoridad pendiente según su gate
```

## 4. Excepciones activas

- `DOC-GOB-004`, `DOC-GOB-005` y `DOC-GOB-006` permanecen en `18` como
  conjunto decisional activo y excepción controlada.
- `DOC-UX-007` permanece en HOLD.
- `DOC-REF-002` permanece diferido a C9.

## 5. Integridad y límites

C6 no mueve, renombra, elimina, archiva ni copia documentos sustantivos.
C6 no abre C7, G5, v0.8.0 ni implementación.

`GATE-CORR-G4` permanece pendiente. C6 aporta referencias y reglas de
autoridad, pero la integridad global requiere C7 y C10.
