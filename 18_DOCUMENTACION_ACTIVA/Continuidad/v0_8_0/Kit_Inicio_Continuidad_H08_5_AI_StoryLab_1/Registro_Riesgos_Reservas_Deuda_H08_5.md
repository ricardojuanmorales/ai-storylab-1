# Riesgos, Reservas y Deuda · H08-5

## Riesgos

| ID | Riesgo | Control |
|---|---|---|
| R-01 | importación muta estado antes de validar | staging inmutable |
| R-02 | payload excesivo | límite previo |
| R-03 | versión futura aceptada | rechazo seguro |
| R-04 | claves inesperadas | schema estricto |
| R-05 | reflexión privada exportada | allowlist |
| R-06 | roundtrip superficial | comparación semántica |
| R-07 | descarga automática | acción humana |
| R-08 | sobrescritura de proyecto | estrategia explícita |
| R-09 | compatibilidad ilimitada | matriz ratificada |
| R-10 | absorción de H08-6 | frontera documental |
| R-11 | ceremonia sin reflexión | preguntas y acuerdo humano |
| R-12 | IA adelanta decisiones | gate de alineamiento |

## Reservas

1. Estrategia de importación.
2. Límite de tamaño.
3. Algoritmo de checksum.
4. Definición exacta de equivalencia semántica.
5. Política de identificadores regenerables.

## Deuda diferida

- firma criptográfica;
- cifrado;
- sincronización;
- publicación;
- binarios;
- datos reales;
- usabilidad con participantes;
- endurecimiento H08-6.
