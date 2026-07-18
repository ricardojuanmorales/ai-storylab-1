# Threat model proporcional · H08-3

| Amenaza | Impacto | Control |
|---|---|---|
| JSON alterado | proyecto inválido | schema + invariantes |
| versión futura | interpretación incorrecta | rechazo seguro |
| migración parcial | pérdida o mezcla | staging + fuente intacta |
| cuota durante commit | estado inconsistente | recuperación por etapas |
| índice manipulado | referencia huérfana | reconstrucción validada |
| script del mismo origen | lectura local | datos sintéticos, sin secretos |
| checksum engañoso | falsa integridad | no tratar checksum como autenticación |
| duplicación de reflexiones | exposición adicional | índice sin contenido |
| borrado automático | pérdida de agencia | confirmación humana |
| expansión a nube | cambio de riesgo | prohibición y gate separado |

El checksum detecta daño accidental. No prueba autoría ni protege contra un
actor con acceso al mismo origen.
