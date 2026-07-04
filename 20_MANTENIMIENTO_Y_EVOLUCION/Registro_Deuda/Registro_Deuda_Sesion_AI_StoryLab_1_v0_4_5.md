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

## 4. Deuda derivada de SPEC-OP-007

### DEUDA-SESION-006 : Glosario general SDD sobre datos y privacidad

```text
tema: actualizar glosario general SDD con términos de datos y privacidad
origen: revisión paso a paso de SPEC-OP-007
prioridad: alta
estado: pendiente
ruta_sugerida:
  05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/
```

Términos candidatos:

```text
- dato
- dato bloqueado
- dato no requerido
- dato local mínimo
- dato creativo voluntario
- evidencia seleccionada
- reflexión privada
- metadato conceptual
- visibilidad
- uso secundario
```

### DEUDA-SESION-007 : Base de conocimiento SDD sobre datos, privacidad y minimización

```text
tema: identificar documentos necesarios para la base de conocimientos SDD sobre datos, privacidad y minimización
prioridad: alta
estado: pendiente de inventario
```

### DEUDA-SESION-008 : Matriz de clasificación de datos

```text
tema: desarrollar matriz de clasificación de datos por sensibilidad, visibilidad, propósito, consentimiento, exportación y retención conceptual
prioridad: alta
estado: pendiente
```

### DEUDA-SESION-009 : Datos sensibles reforzados para estudiantes de escuela superior

```text
tema: desarrollar matriz de datos sensibles reforzados para estudiantes de escuela superior
prioridad: alta
estado: pendiente
```

### DEUDA-SESION-010 : Minimización por defecto para specs futuras

```text
tema: desarrollar criterios de minimización por defecto para specs futuras
prioridad: alta
estado: pendiente
```

### DEUDA-SESION-011 : Matriz de cruce consentimiento-datos-seguridad

```text
tema: desarrollar matriz de cruce consentimiento-datos-seguridad
prioridad: alta
estado: pendiente
```

## 5. Deuda específica PH-IT-AT desde SPEC-OP-007

### DEUDA-PH-004 : Protección frente a vigilancia pedagógica

```text
tema: guía PH para protección de estudiantes frente a vigilancia pedagógica
prioridad: alta
estado: pendiente
```

### DEUDA-PH-005 : Vigilancia pedagógica y presión evaluativa

```text
tema: guía PH para detectar vigilancia pedagógica y presión evaluativa
prioridad: alta
estado: pendiente
```

### DEUDA-PH-006 : Datos bajo consentimiento y seguridad local-first

```text
tema: criterios PH para revisar datos bajo consentimiento y seguridad local-first
prioridad: alta
estado: pendiente
```

### DEUDA-SDD-IT-001 : Clasificación conceptual de datos y minimización

```text
tema: guía IT para clasificación conceptual de datos y minimización
prioridad: alta
estado: pendiente
```

### DEUDA-SDD-IT-002 : Sensibilidad por combinación de datos

```text
tema: criterios IT para sensibilidad por combinación de datos
prioridad: alta
estado: pendiente
```

### DEUDA-SDD-IT-003 : Minimización, campos obligatorios y límites de propósito

```text
tema: guía IT para minimización, campos obligatorios y límites de propósito
prioridad: alta
estado: pendiente
```

### DEUDA-SDD-IT-004 : Matriz IT de cruce entre datos y seguridad

```text
tema: matriz IT de cruce entre clases de datos, zonas de seguridad y controles
prioridad: alta
estado: pendiente
```

### DEUDA-AT-001 : Privacidad del proceso creativo

```text
tema: guía AT para privacidad del proceso creativo
prioridad: media-alta
estado: pendiente
```

### DEUDA-AT-002 : Privacidad y seguridad sin rigidez creativa

```text
tema: criterios AT para evitar que privacidad y seguridad rigidicen la creación
prioridad: media-alta
estado: pendiente
```

## 6. Dictamen actualizado

Esta deuda no bloquea la aprobación documental de SPEC-OP-006 ni SPEC-OP-007. Sí bloquea cualquier intento futuro de convertir consentimiento, datos, privacidad o seguridad local-first en implementación sin consolidación documental posterior.

