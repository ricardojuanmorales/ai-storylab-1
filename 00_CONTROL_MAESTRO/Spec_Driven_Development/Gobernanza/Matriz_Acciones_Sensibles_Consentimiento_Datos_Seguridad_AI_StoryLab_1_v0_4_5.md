# Matriz de Acciones Sensibles : Consentimiento, Datos y Seguridad v0.4.5

**Proyecto:** AI StoryLab 1  
**Versión de trabajo:** v0.4.5  
**Fecha:** 2026-07-04  
**PR:** #11  
**Estado:** matriz núcleo ampliada, pago de deuda documental  
**Familia documental:** gobernanza SDD, acciones sensibles  
**Deudas atendidas:** DEUDA-SESION-019, DEUDA-PH-003, DEUDA-SDD-IT-004

> **Guardarraíl constitucional v0.4.5**  
> Esta matriz no autoriza implementación funcional, código de aplicación, UI real, backend, cloud, autenticación, analíticas, IA externa, uso de datos reales, exportaciones reales, pruebas con personas ni automatizaciones. Solo consolida criterios documentales para revisar acciones sensibles futuras.

## 1. Propósito

Esta matriz amplía la matriz cruzada ya aprobada para convertirla en una herramienta reutilizable de revisión SDD. Su función es pagar la deuda de matriz común de acciones sensibles para Specs Núcleo, sin convertirla en flujo técnico, interfaz o automatización.

## 2. Regla de lectura

```text
Una acción sensible debe declarar:
  - acción;
  - zona de seguridad;
  - capa de consentimiento;
  - dato, evidencia o reflexión afectada;
  - sensibilidad;
  - visibilidad por defecto;
  - control humano;
  - estado v0.4.5;
  - gate o spec futura requerida.
```

## 3. Matriz núcleo de acciones sensibles

| Acción sensible | Zona de seguridad | Consentimiento | Dato/evidencia/reflexión | Sensibilidad | Visibilidad por defecto | Control humano | Estado v0.4.5 | Gate/spec futura |
|---|---|---|---|---|---|---|---|---|
| Crear sin guardar | Exploración privada | No requiere si no hay captura | Borrador no persistente | baja si no se conserva | privada | pausa voluntaria | permitido conceptual | experiencia creativa |
| Guardar localmente | Guardado local | situado | dato local mínimo o creativo voluntario | media si hay dispositivo compartido | privada local | confirmación situada | especificable, no implementable | portafolio local |
| Escribir reflexión | Exploración privada o guardado local | reforzado si se vincula, guarda o comparte | reflexión privada | alta si toca identidad, emoción, contexto escolar o vulnerabilidad | privada | pausa, retiro, mediación si aplica | especificable con cuidado reforzado | reflexión usuario |
| Marcar evidencia | Evidencia seleccionada | separado | evidencia seleccionada | media-alta | no compartida por defecto | revisión humana | especificable | evidencia creativa |
| Retirar evidencia | Evidencia seleccionada | derecho de retiro conceptual | evidencia previamente seleccionada | media | privada o retirada | confirmación de retiro | especificable | evidencia/portafolio |
| Exportar manualmente | Exportación manual | separado y explícito | dato o evidencia exportable | alta | sale de entorno local | confirmación reforzada | bloqueado | SPEC-OP-010 futura |
| Compartir con docente | Compartir externo controlado | separado, con mediación | evidencia compartible | alta en contexto escolar | no compartida por defecto | revisión humana y límites pedagógicos | bloqueado | spec docente/evaluación |
| Compartir con investigador | Compartir externo investigativo | protocolo y consentimiento reforzado | dato de investigación o evidencia reutilizable | alta | no compartida por defecto | revisión PH-IT-AT | bloqueado | spec investigativa |
| Usar como evaluación | Uso pedagógico/evaluativo | consentimiento y criterio pedagógico separado | evidencia evaluable | alta | no evaluable por defecto | revisión docente humana, no automática | bloqueado | spec evaluación |
| Activar IA externa | IA futura | reforzado y separado | potencialmente sensible | alta o crítica | externo | gate constitucional | bloqueado por defecto | spec IA responsable |
| Usar dispositivo compartido | Contexto administrado | aviso situado | datos locales, historial, visibilidad | media-alta | incierta | mediación y revisión de entorno | especificable | seguridad local-first |
| Recuperar o borrar | Persistencia conceptual | consentimiento según estado | dato local, evidencia o reflexión | variable | privada o retirada | confirmación humana | conceptual, no técnico | arquitectura conceptual |
| Crear portafolio local | Portafolio futuro | situado por selección | evidencia curada | media-alta | privada por defecto | selección humana | bloqueado hasta spec | portafolio local |
| Cambiar visibilidad | Transición entre zonas | separado | cualquier dato/evidencia/reflexión | aumenta según exposición | no cambia por defecto | control visible | bloqueado sin spec | matriz de visibilidad |

## 4. Reglas de escalamiento

```text
La acción escala a revisión reforzada si toca:
  - estudiante de escuela superior;
  - reflexión privada;
  - evidencia seleccionada;
  - contexto escolar;
  - dispositivo compartido;
  - exportación;
  - uso investigativo;
  - evaluación;
  - IA futura;
  - cambio de visibilidad;
  - combinación de datos que aumente sensibilidad.
```

## 5. Mínimo PH-IT-AT por acción

| Perfil | Pregunta obligatoria |
|---|---|
| PH | ¿La persona entiende, acepta, puede pausar y puede retirar sin coerción? |
| IT | ¿Qué dato, evidencia, reflexión o metadato se toca, con qué sensibilidad y visibilidad? |
| AT | ¿El control protege sin convertir la creación en vigilancia, formulario rígido o castigo al borrador? |

## 6. Estados permitidos para v0.4.5

```text
permitido_conceptual:
  acción describible sin captura, implementación ni prueba humana.

especificable_no_implementable:
  acción puede ser descrita por spec futura, pero no construida todavía.

bloqueado_hasta_spec:
  acción requiere spec propia, riesgo, consentimiento, revisión PH-IT-AT y gate.

bloqueado_por_defecto:
  acción no debe activarse salvo decisión futura explícita y reforzada.
```

## 7. Impacto por perfil

```text
estudiante_escuela_superior:
  protección reforzada ante presión escolar, vigilancia pedagógica, evaluación automática y dispositivos compartidos.

estudiante_universitario:
  protección de reflexión, agencia creativa, portafolio voluntario y separación entre creación, evidencia e investigación.

docente:
  límites claros: no acceso automático, no evaluación automática, no evidencia por defecto.

investigador:
  límites claros: no datos por defecto, no uso secundario, no investigación sin protocolo y consentimiento.
```

## 8. Dictamen

```text
resultado: matriz_acciones_sensibles_nucleo_pagada
paga_o_sustancialmente_paga:
  - DEUDA-SESION-019, en alcance núcleo v0.4.5
  - DEUDA-PH-003, como checklist PH mínimo integrado
  - DEUDA-SDD-IT-004, como matriz núcleo de cruce datos/seguridad
hereda:
  - ampliaciones por versión, zona, perfil y spec futura
no_autoriza:
  - implementación funcional
  - exportación real
  - evaluación automática
  - IA externa
```
