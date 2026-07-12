# Dictamen de Aptitud para Apertura de Migración Controlada · C3

**Identificador:** `DOC-DOC-025`
**Fecha:** 2026-07-12
**Estado:** Recomendación para decisión humana
**Gate:** `GATE-CORR-G2 · pending`

---

## 1. Dictamen

```text
APERTURA_DE_RAMA_MIGRACION: RECOMENDADA
AUTORIZACION_DE_MOVIMIENTOS: NO CONCEDIDA POR ESTE DOCUMENTO
GATE-CORR-G2: NO APROBADO
```

## 2. Alcance recomendado para una futura autorización

Una decisión humana posterior podrá autorizar exclusivamente:

- crear una rama desde el merge del paquete de reevaluación;
- ejecutar movimientos con `git mv` según la secuencia aprobada;
- separar movimientos de referencias;
- registrar hashes;
- ensayar y documentar reversiones;
- abrir un PR en draft;
- preparar el expediente final de G2.

## 3. Exclusiones

La futura autorización no deberá permitir automáticamente:

- marcar el PR Ready;
- fusionar;
- aprobar G2;
- resolver `DEBT-GOV-004`;
- iniciar C4;
- mover `DOC-UX-007`;
- abrir v0.8.0;
- implementar.

## 4. Condición de G2

G2 solo podrá decidirse cuando exista un PR de migración completo, validado y fijado a un SHA específico.
