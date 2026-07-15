# Operacionalización del Plan de Desarrollo de v0.8.0 Realineada

**Estado:** `APPROVED`
**Fecha:** 2026-07-14
**Baseline:** `24407e6abe0aba4f269b0bb3aeea4a247018869e`
**Autoriza H08-2:** no

## Arquitectura operacional

```text
PO-H08-1
→ H08-1
→ H08-1A
→ GATE-H08-1-READY-TO-CODE
→ H08-2
```

## PO-H08-1

### Objetivo

Cerrar alineación, continuidad, legado, fuentes y alcance antes del baseline
técnico.

### Definition of Done

- tratamiento r2 registrado;
- kit r3 construido y auditado;
- fuentes rectoras verificadas;
- frontera legacy documentada;
- unidades H08-1 formalizadas;
- riesgos y PH-IT-AT definidos;
- continuidad actualizada;
- decisión humana registrada.

## H08-1

### Objetivo

Construir un baseline técnico mínimo, reversible, local-first y verificable.

### Unidades oficiales

```text
H08-1.1 · ADR y frontera técnica
H08-1.2 · Dominio, contratos y schemas
H08-1.3 · Runner, pruebas y CI
H08-1.4 · Esqueleto modular y adaptadores
H08-1.5 · Seguridad, accesibilidad y cierre
```

## H08-1A

### Objetivo

Convertir la primera vertical slice en trabajo implementable sin invención
sustantiva.

### Productos

- spec;
- wireframes;
- estados y transiciones;
- interfaces;
- errores;
- criterios Given/When/Then;
- threat model;
- accesibilidad;
- backlog;
- pruebas;
- rollback.

## Gate

`GATE-H08-1-READY-TO-CODE` deberá decidir si H08-2 puede comenzar.

## Guardarraíles

- datos exclusivamente sintéticos;
- cero red obligatoria;
- cero H08-2 por inferencia;
- cero importación legacy por defecto;
- cero stack irreversible;
- capacidades sensibles apagadas;
- revisión PH-IT-AT;
- persona como autoridad de decisión.
