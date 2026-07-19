# Decisión humana · Cardinalidad de evidencias y reflexiones en H08-4

```yaml
date: 2026-07-18
canonical_unit: H08-4
human_label: v0.8.4
release_train: v0.8.0
decision_authority: human_responsible
status: RATIFIED
baseline: 7fb21b66aaf1f541d99797d582585adcc09b4f55
```

## Decisión

Se adopta una cardinalidad híbrida para el arco M1–M4:

| Misión | Evidencia | Reflexión privada | Decisión humana |
|---|---|---|---|
| M1 · Intención creadora | una evidencia editable | cero o una editable | cero o una vigente por evidencia |
| M2 · Arquitectura narrativa | una evidencia editable | cero o una editable | cero o una vigente por evidencia |
| M3 · Producción multimodal | una o múltiples evidencias editables | cero o una editable para la misión | cero o una vigente por cada evidencia |
| M4 · Curaduría y cierre | un registro de curaduría editable | cero o una editable | cierre y selección exclusivamente humanos |

## Alcance técnico

- La decisión no autoriza un cambio de schema ni de storage format.
- `CreativeProject.evidence` y `CreativeProject.reflections` continúan siendo colecciones.
- M1, M2 y M4 aplican unicidad operacional por misión.
- M3 puede crear evidencias adicionales y editar cada una por identificador.
- No se incorpora historial de versiones. La edición reemplaza la versión vigente.
- Una reflexión vacía significa retirar la reflexión única de esa misión.
- Ninguna decisión se preselecciona o genera automáticamente.

## Fronteras

Esta decisión no autoriza binarios, carga de archivos, red, publicación, exportación,
importación, roundtrip, portafolio final ni capacidades de H08-5.

## Consecuencias verificables

1. Los casos de uso deben diferenciar `create` y `update` para evidencias de M3.
2. Las pruebas deben demostrar que M1, M2 y M4 no acumulan evidencias duplicadas.
3. Las pruebas deben demostrar que M3 conserva varias evidencias independientes.
4. Cada evidencia de M3 mantiene su propia decisión humana vigente.
5. La reapertura de M3 debe preservar el contenido y retirar solamente decisiones o
   curaduría que el contrato de reapertura invalide.
