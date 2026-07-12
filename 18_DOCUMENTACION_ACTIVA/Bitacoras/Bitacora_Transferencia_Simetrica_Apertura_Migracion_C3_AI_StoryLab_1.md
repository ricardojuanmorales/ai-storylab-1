# Bitácora de Transferencia Simétrica · Apertura de Migración C3

## AI StoryLab 1

**Fecha:** 2026-07-12
**Origen:** Reevaluación final post-PR36
**Destino:** Futura rama de migración controlada
**Estado de transferencia:** Preparada, no activada

---

## 1. Estado recibido

```text
C2: cerrado
C3: preparación, evaluación, clasificación y reevaluación completadas
GATE-CORR-G2: pending
DEBT-GOV-004: blocked
migración funcional: no iniciada
```

## 2. Secuencia transferida

```text
C3-A0 → DOC-ARQ-001
C3-C  → DOC-GOB-007 + DOC-UX-003
C3-B  → DOC-UX-002 + DOC-UX-004 + DOC-UX-006 + DOC-UX-005
C3-A2 → DOC-ARQ-002
```

## 3. Reglas transferidas

- movimientos puros y referencias en commits separados;
- hashes equivalentes;
- referencias históricas preservadas;
- referencias vivas actualizadas;
- reversión ensayada;
- cero mezcla con C4;
- ningún merge antes de G2;
- ninguna aprobación automática del gate.

## 4. Prohibiciones

```text
no mover DOC-UX-007
no iniciar C4
no abrir v0.8.0
no implementar
no resolver DEBT-GOV-004 antes del merge final
```

## 5. Punto de entrada futuro

La futura rama solo podrá abrirse mediante autorización humana explícita posterior a la integración de este paquete.
