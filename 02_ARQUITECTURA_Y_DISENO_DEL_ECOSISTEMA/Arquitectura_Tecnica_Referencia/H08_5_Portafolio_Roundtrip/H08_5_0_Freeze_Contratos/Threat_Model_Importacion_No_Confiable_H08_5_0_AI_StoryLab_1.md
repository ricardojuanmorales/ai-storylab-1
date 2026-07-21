# Threat model · Importación no confiable H08-5.0

| ID | Amenaza | Frontera | Control | Prueba |
|---|---|---|---|---|
| T-01 | archivo excesivo | selección | límite de 1 MiB antes de lectura | fixture generado |
| T-02 | JSON malformado | parsing | error tipado sin mutación | `malformed-json.txt` |
| T-03 | anidamiento abusivo | preflight | profundidad 32 y 20 000 nodos | prueba de seguridad |
| T-04 | claves inesperadas | schema | `additionalProperties: false` | fixture |
| T-05 | versión futura | compatibilidad | rechazo explícito | fixture |
| T-06 | legacy sin migrador | compatibilidad | `LEGACY_MIGRATION_REQUIRED` | contrato |
| T-07 | digest alterado | integridad | SHA-256 antes de migrar | fixture |
| T-08 | reflexión privada | privacidad | allowlist y schema adicional | fixture |
| T-09 | sobrescritura | persistencia | importar siempre como copia | integración |
| T-10 | mutación parcial | aplicación | staging inmutable y un solo save | spy de repositorio |
| T-11 | decisión automática | UI | confirmación humana sin default | accesibilidad |
| T-12 | red o telemetría | ejecución | auditorías offline y privacidad | auditoría |
| T-13 | prototype pollution | parsing/uso | datos tratados como records planos y clonados | seguridad |
| T-14 | error revela datos | presentación | mensajes seguros y detalles limitados | prueba |
| T-15 | falsa equivalencia | recovery | comparación normalizada con diff tipado | roundtrip |

## Activos protegidos

- intención creativa;
- textos y evidencias;
- decisiones humanas;
- orden del portafolio;
- reflexiones privadas;
- preferencias de accesibilidad;
- estado local preexistente.

## Confianza

Solo el proyecto que supera parsing, límites, schema, checksum, migración,
invariantes y privacidad puede convertirse en candidato de preview. La
confirmación humana no sustituye ninguna validación técnica.
