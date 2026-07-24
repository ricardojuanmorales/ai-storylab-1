# Revisión perceptual humana · H08-6.2

**Estado final:** `COMPLETE`

Complete esta hoja durante la revisión local de la aplicación.

## Recorrido esencial

| Verificación | PASS / FINDING | Nota breve |
|---|---|---|
| El enlace “Saltar al contenido principal” aparece y mueve el foco | PASS |  |
| Todo el arco puede recorrerse solo con teclado | PASS |  |
| El foco visible es claro en cada control | PASS |  |
| El orden de foco coincide con el orden visual y narrativo | PASS |  |
| Los cambios importantes se anuncian sin interrumpir | PASS |  |
| Contraste alto conserva jerarquía y comprensión | PASS |  |
| Texto grande y extra grande no ocultan controles | PASS |  |
| Movimiento reducido elimina transiciones innecesarias | PASS |  |
| A 320 px no hay pérdida funcional ni desplazamiento horizontal crítico | PASS |  |
| A 200 % de zoom el contenido sigue siendo operable | PASS |  |
| Errores y recuperación explican qué ocurrió y qué puede hacer la persona | PASS |  |
| Exportación e importación mantienen confirmación y reversibilidad | PASS |  |
| La interfaz no depende solo de color, posición o movimiento | PASS |  |
| La secuencia M1–M4 se entiende sin conocimiento previo del proyecto | PASS |  |

## Dictamen humano

```yaml
manual_review:
  status: COMPLETE
  blocking_findings: []
  non_blocking_findings: ["Algunos textos secundarios se perciben pequeños en la escala predeterminada, aunque permanecen legibles y operables al ampliar el texto."]
  strengths: [ "Todo el arco puede recorrerse solo con teclado.", "El foco visible permanece claro en los controles.", "El contraste alto y el texto ampliado conservan la operabilidad.", "Exportación e importación mantienen confirmación y reversibilidad."]
  recommended_disposition: PASS_WITH_NON_BLOCKING_FINDINGS
```
