# Contratos de casos de uso · H08-2.1

## Frontera

La presentación futura consumirá `CreativeCycleUseCases`. No modificará
directamente `CreativeProject`.

## Casos previstos

| Contrato | Propósito | Resultado |
|---|---|---|
| `startMission` | abrir una misión configurada | proyecto actualizado |
| `saveTextActivity` | crear o editar respuesta | proyecto actualizado |
| `createTextEvidence` | convertir actividad en evidencia | proyecto actualizado |
| `saveReflection` | guardar reflexión privada | proyecto actualizado |
| `decideEvidence` | aceptar, revisar, rechazar o diferir | proyecto actualizado |
| `curatePortfolio` | incorporar evidencia aceptada | proyecto actualizado |
| `removePortfolioItem` | retirar sin destruir evidencia | proyecto actualizado |
| `previewExport` | producir paquete revisable | `ExportPackage` |

## Reglas

- todos los resultados son tipados;
- toda mutación sensible pasa por aplicación;
- decisión y curaduría son humanas;
- la reflexión permanece privada por defecto;
- no existe publicación automática;
- los contratos no seleccionan adaptadores.
