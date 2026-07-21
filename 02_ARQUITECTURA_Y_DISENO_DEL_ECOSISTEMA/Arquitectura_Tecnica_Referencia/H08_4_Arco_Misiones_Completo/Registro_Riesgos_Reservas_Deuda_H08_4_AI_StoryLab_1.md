# Riesgos, reservas y deuda · H08-4

## Riesgos bloqueantes si aparecen

| ID | Riesgo | Control |
|---|---|---|
| R-H08-4-001 | degradar M1 al generalizar | pruebas de caracterización |
| R-H08-4-002 | acoplar motor a UI o storage | auditoría de capas |
| R-H08-4-003 | cambiar schema por inferencia | decisión separada |
| R-H08-4-004 | fingir almacenamiento multimodal | contrato text/metadata-only |
| R-H08-4-005 | invadir H08-5 | pruebas negativas de export/import |
| R-H08-4-006 | filtrar reflexiones | pruebas de privacidad |
| R-H08-4-007 | secuencia punitiva | revisión UX y lenguaje |
| R-H08-4-008 | pérdida tras reapertura | integración y recuperación |
| R-H08-4-009 | duplicar evidencia en M1, M2 o M4 | política explícita y pruebas de unicidad |
| R-H08-4-010 | sobrescribir evidencia equivocada en M3 | actualización obligatoria por `evidenceId` |
| R-H08-4-011 | borrar reflexiones fuera de la misión objetivo | operación singular y prueba negativa |
| R-H08-4-012 | confundir múltiples evidencias con versionado | lenguaje y contrato sin historial implícito |

## Deuda heredada

`DEBT-H08-3A-CI-ACTIONS-001` permanece abierta y no bloqueante:
`actions/checkout@v4` y `actions/setup-node@v4` declaran Node 20.

## Reservas de activación

No existen reservas de entrada. Las siguientes son fronteras, no deuda:

- schema y storage format no cambian sin decisión;
- binarios y red continúan bloqueados;
- H08-5 conserva portafolio final y roundtrip;
- publicación y merge siguen bajo autoridad humana.

## Decisión cerrada en H08-4.0

La cardinalidad ya no es una ambigüedad abierta: solo M3 admite múltiples evidencias.
El schema y el storage format permanecen sin cambios.
