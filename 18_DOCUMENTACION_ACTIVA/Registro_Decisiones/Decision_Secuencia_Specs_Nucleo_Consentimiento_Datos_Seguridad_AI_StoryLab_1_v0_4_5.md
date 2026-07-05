# Decisión : Secuencia de Specs Núcleo 1 v0.4.5

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Estado:** decisión documental condicionada  
**Fase:** specs operativas con semillas arquitectónicas


> **Guardarraíl constitucional v0.4.5**  
> Este documento es una pieza de especificación operativa. No autoriza implementación funcional, backend, cloud, autenticación, analíticas, IA externa, manejo de datos reales, subida automática ni automatizaciones funcionales. Toda transición posterior requiere revisión humana PH-IT-AT, análisis de riesgo, consentimiento situado, criterios local-first y gate constitucional.


## 1. Decisión

Se adopta como primera secuencia de desarrollo documental núcleo:

```text
1. SPEC-OP-006 : Consentimiento informado y situado
2. SPEC-OP-007 : Datos y privacidad
3. SPEC-OP-008 : Seguridad local-first
```

## 2. Justificación

Esta secuencia antepone condiciones humanas, éticas y locales antes de cualquier diseño funcional:

```text
consentimiento → datos → seguridad → experiencia → interfaz → dominio → pruebas
```

La razón es constitucional: ninguna experiencia creativa puede considerarse segura si primero no define qué entiende el usuario, qué datos podrían tocarse, qué queda privado, qué puede retirarse, qué se guarda localmente y qué jamás se activa por defecto.

## 3. Estado de aprobación

```text
estado: aprobacion_documental_condicionada
no_autoriza: implementación funcional
requiere_antes_de_merge:
  - confirmar main local actualizado
  - leer Constitución SDD completa desde repo local
  - leer Índice de Documentos Rectores SDD completo
  - leer Gate Constitucional de Preimplementación completo
  - confirmar rutas canónicas reales
```

## 4. Condición de bloqueo

Queda bloqueado:

```text
- diseñar backend
- diseñar cloud
- diseñar autenticación
- diseñar analíticas
- activar IA externa
- manejar datos reales
- crear automatizaciones funcionales
- convertir semillas arquitectónicas en código
```

## 5. Dictamen

La primera tríada núcleo queda definida como esclusa de entrada. Si una futura spec creativa quiere navegar, primero debe pasar por estas aguas: consentimiento claro, datos mínimos y seguridad local-first.
