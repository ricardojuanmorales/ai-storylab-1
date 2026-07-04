# Registro de Deuda de Sesión : AI StoryLab 1 v0.4.5

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**PR:** #11  
**Estado:** activo  
**Fase:** specs operativas con semillas arquitectónicas

> **Guardarraíl constitucional v0.4.5**  
> Este registro documenta deuda conceptual, documental y metodológica. No autoriza implementación funcional, backend, cloud, autenticación, analíticas, IA externa, manejo de datos reales, subida automática ni automatizaciones funcionales.

## 1. Propósito

Registrar deuda de sesión derivada de la revisión unitaria de specs principales sin crear bitácoras separadas por spec.

## 2. Deuda derivada de SPEC-OP-006

### DEUDA-SESION-001 : Glosario general SDD

```text
tema: actualizar glosario general SDD con términos de consentimiento
origen: revisión paso a paso de SPEC-OP-006
prioridad: media-alta
estado: pendiente
ruta_sugerida:
  05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/
```

Términos candidatos:

```text
- consentimiento informado y situado
- acción sensible
- evidencia
- exportación
- compartir
- retiro del consentimiento
- mediación humana
```

### DEUDA-SESION-002 : Base de conocimiento SDD del PH

```text
tema: identificar documentos necesarios para la base de conocimiento SDD del PH
origen: revisión de consentimiento, agencia humana, no coerción y protección de estudiantes
prioridad: alta
estado: pendiente de inventario
```

Documentos candidatos:

```text
- Guía PH para revisión de consentimiento situado.
- Guía PH sobre agencia humana en specs SDD.
- Criterios PH para estudiantes de escuela superior.
- Criterios PH contra coerción, vigilancia y evaluación automática.
- Guía PH para revisar lenguaje comprensible y no legalista.
- Mapa PH de riesgos afectivos, pedagógicos e institucionales.
- Checklist PH para gates constitucionales.
- Relación PH con IT y AT en revisión simétrica.
```

### DEUDA-SESION-003 : Transición entre capas de consentimiento

```text
tema: desarrollar criterios de transición entre capas de consentimiento
relación:
  - SPEC-OP-006 Consentimiento Informado y Situado
  - SPEC-OP-007 Datos y Privacidad
  - SPEC-OP-008 Seguridad Local-First
prioridad: alta
estado: pendiente
```

### DEUDA-SESION-004 : Consentimiento para estudiantes de escuela superior

```text
tema: consolidar criterios de consentimiento para estudiantes de escuela superior
incluye:
  - lenguaje por edad y contexto
  - mediación docente sin sustitución automática
  - presión académica o institucional
  - diferencia entre requisito pedagógico, evidencia y uso adicional
  - protección contra evaluación automática
prioridad: alta
estado: pendiente
```

### DEUDA-SESION-005 : Regla triangular común para Specs Núcleo

```text
tema: crear regla triangular común para Specs Núcleo
relación:
  - consentimiento
  - datos y privacidad
  - seguridad local-first
prioridad: alta
estado: pendiente de consolidación
```

## 3. Deuda específica para base PH

### DEUDA-PH-001 : Consentimiento, mediación, coerción y fatiga

```text
tema: guía PH para distinguir consentimiento, mediación, coerción y fatiga de consentimiento
estado: pendiente
```

### DEUDA-PH-002 : Agencia estudiantil en contextos escolares

```text
tema: guía PH para consentimiento y agencia estudiantil en contextos escolares
estado: pendiente
```

### DEUDA-PH-003 : Checklist PH para acciones sensibles

```text
tema: checklist PH para acciones sensibles
estado: pendiente
preguntas_base:
  - ¿La persona entiende la acción?
  - ¿Puede decir no?
  - ¿Puede retirar consentimiento?
  - ¿Existe presión institucional?
  - ¿La acción toca datos, evidencia o reflexión?
  - ¿Existe riesgo por entorno escolar, local o compartido?
```

## 4. Dictamen

Esta deuda no bloquea la aprobación documental de SPEC-OP-006. Sí bloquea cualquier intento futuro de convertir consentimiento, datos, privacidad o seguridad local-first en implementación sin consolidación documental posterior.
