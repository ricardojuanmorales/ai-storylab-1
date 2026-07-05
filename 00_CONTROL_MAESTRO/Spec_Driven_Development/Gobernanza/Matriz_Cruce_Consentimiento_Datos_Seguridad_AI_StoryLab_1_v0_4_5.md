# Matriz Cruzada : Consentimiento, Datos y Seguridad v0.4.5

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Estado:** matriz operativa  
**Specs relacionadas:** SPEC-OP-006, SPEC-OP-007, SPEC-OP-008


> **Guardarraíl constitucional v0.4.5**  
> Este documento es una pieza de especificación operativa. No autoriza implementación funcional, backend, cloud, autenticación, analíticas, IA externa, manejo de datos reales, subida automática ni automatizaciones funcionales. Toda transición posterior requiere revisión humana PH-IT-AT, análisis de riesgo, consentimiento situado, criterios local-first y gate constitucional.


## 1. Propósito

Verificar que las primeras tres specs núcleo se sostienen mutuamente y que ninguna abre una grieta hacia implementación prematura, captura de datos o falsa seguridad.

## 2. Cruce por acción conceptual

| Acción conceptual | Consentimiento | Datos/privacidad | Seguridad local-first | Estado v0.4.5 |
|---|---|---|---|---|
| Crear sin guardar | No requiere consentimiento si no captura datos | Sin datos requeridos | Exploración privada | Permitido como flujo conceptual |
| Guardar localmente | Consentimiento situado | Dato local mínimo o creativo voluntario | Riesgo de dispositivo compartido | Especificable, no implementable |
| Marcar evidencia | Consentimiento separado | Evidencia seleccionada | Riesgo de vigilancia pedagógica | Especificable con revisión humana |
| Escribir reflexión | Consentimiento si se vincula o comparte | Reflexión privada por defecto | Riesgo emocional y de exposición | Especificable con cuidado reforzado |
| Exportar | Consentimiento separado | Datos exportables manuales | Riesgo de fuga | Bloqueado hasta SPEC-OP-010 |
| Compartir con docente | Consentimiento y mediación | Evidencia compartible | Riesgo de evaluación automática | Bloqueado hasta spec docente/evaluación |
| Compartir con investigador | Consentimiento, protocolo y revisión | Datos de investigación | Riesgo de uso secundario | Bloqueado hasta spec investigativa |
| Activar IA externa | Consentimiento separado reforzado | Datos potencialmente sensibles | Superficie externa de riesgo | Bloqueado por defecto |

## 3. Invariantes constitucionales

```text
[✓] Ninguna acción sensible se agrupa bajo consentimiento genérico.
[✓] Ningún dato creativo se convierte automáticamente en evidencia.
[✓] Ninguna evidencia se convierte automáticamente en evaluación.
[✓] Ninguna reflexión se analiza automáticamente.
[✓] Ninguna exportación ocurre automáticamente.
[✓] Ningún docente recibe datos por defecto.
[✓] Ningún investigador recibe datos por defecto.
[✓] Ninguna IA externa se activa por defecto.
```

## 4. Riesgos cruzados

| Riesgo | Spec que lo detecta | Spec que lo controla | Deuda asociada |
|---|---|---|---|
| Fatiga de consentimiento | SPEC-OP-006 | SPEC-OP-011 futura | textos por capas |
| Sobrerrecolección | SPEC-OP-007 | SPEC-OP-006 | taxonomía de datos |
| Exportación accidental | SPEC-OP-008 | SPEC-OP-010 futura | exportación controlada |
| Vigilancia pedagógica | SPEC-OP-007 | SPEC-OP-004 / SPEC-OP-013 | evidencia vs evaluación |
| Falsa seguridad local | SPEC-OP-008 | threat model | modelo de amenazas detallado |
| Formulario rígido | SPEC-OP-006 | SPEC-OP-002 / SPEC-OP-011 | accesibilidad expresiva |

## 5. Dictamen

La tríada funciona como cerradura de tres vueltas. Consentimiento decide, privacidad minimiza y seguridad verifica. Si una falta, el sistema no debe avanzar.
