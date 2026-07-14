# Plan de Hitos · Implementación Incremental v0.8.0

## H08-0 · Preparación del gate

Producto: este kit.
Código funcional: cero.
Salida: decisión humana sobre `GATE-V08-OPEN-001`.

## H08-1 · Baseline técnico

Producto:

- esqueleto modular;
- runner de pruebas;
- contratos y schemas;
- fixtures sintéticos;
- feature flags;
- CI mínimo cuando sea autorizado.

No entrega todavía el flujo funcional completo.

## H08-2 · MVP Núcleo Creativo Local-First

Producto: primer corte vertical desde misión hasta exportación revisable.

Este es el MVP técnico candidato.

## H08-3 · Prueba de extensibilidad

Producto: segundo tipo de actividad o segunda misión sin reescribir el núcleo.

## H08-4 · Fortalecimiento

Producto:

- refactor controlado;
- accesibilidad técnica;
- actualización de deuda;
- documentación;
- revisión de riesgos.

## H08-5 · Cierre v0.8.0

Producto:

- pruebas verificadas;
- integración incremental documentada;
- deuda actualizada;
- riesgos revisados;
- bitácora y decision log;
- gate de cierre separado.

## Política de PR

```text
PR-A: H08-0, kit pre-gate, sin código
decisión humana del gate
PR-B: H08-1, solo después del gate
PR-C: H08-2, corte vertical MVP
PR-D: H08-3, extensibilidad
PR-E: H08-4, fortalecimiento
PR-F: H08-5, cierre
```

La cantidad de PR puede cambiar mediante decisión explícita. El hito y sus
criterios no deben diluirse para acomodar la mecánica de Git.


## Decisión de activación

<!-- H08_0_MILESTONE_DECISION -->

```yaml
H08_0:
  status: completed_effective_on_merge_PR_50
H08_1:
  status: authorized_after_merge_PR_50
H08_2:
  status: blocked_pending_H08_1_and_human_checkpoint
```
