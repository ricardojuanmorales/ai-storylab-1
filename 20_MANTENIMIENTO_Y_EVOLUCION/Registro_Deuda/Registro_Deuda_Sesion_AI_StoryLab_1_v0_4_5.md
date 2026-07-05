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

## 6. Deuda derivada de SPEC-OP-008

### DEUDA-SESION-012 : Glosario general SDD sobre seguridad local-first

```text
tema: actualizar glosario general SDD con términos de seguridad local-first
origen: revisión paso a paso de SPEC-OP-008
prioridad: alta
estado: pendiente
ruta_sugerida:
  05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/
```

Términos candidatos:

```text
- local-first
- seguridad local-first
- zona de seguridad conceptual
- control humano
- dispositivo compartido
- exportación accidental
- amenaza conceptual
- seguridad sin rigidez creativa
```

### DEUDA-SESION-013 : Base de conocimiento SDD sobre seguridad local-first

```text
tema: identificar documentos necesarios para la base de conocimientos SDD sobre seguridad local-first
origen: revisión de local-first, amenaza conceptual y seguridad habitable
prioridad: alta
estado: pendiente de inventario
```

Documentos candidatos:

```text
- Guía PH para confianza situada en experiencias local-first.
- Guía IT para threat model conceptual.
- Guía AT para seguridad habitable en procesos creativos.
- Matriz de zonas de seguridad local-first.
- Matriz de acciones sensibles consentimiento-datos-seguridad.
- Checklist de dispositivos compartidos y contextos administrados.
- Criterios de exportación accidental y visibilidad por zona.
```

### DEUDA-SESION-014 : Local-first verificable

```text
tema: desarrollar criterios de local-first verificable para specs futuras
incluye:
  - local-first como criterio conceptual
  - diferencia entre local y privado
  - control situado en dispositivos personales, escolares o compartidos
  - experiencia creativa básica sin cuenta obligatoria
  - límites antes de arquitectura técnica
prioridad: alta
estado: pendiente
```

### DEUDA-SESION-015 : Matriz de zonas de seguridad conceptual

```text
tema: desarrollar matriz de zonas de seguridad conceptual
incluye:
  - transición entre zonas
  - dispositivo compartido o contexto administrado
  - pérdida local
  - visibilidad por zona
  - borrado conceptual
  - recuperación conceptual
  - retención conceptual
  - relación con consentimiento y datos
prioridad: alta
estado: pendiente
```

### DEUDA-SESION-016 : Threat model detallado de seguridad local-first

```text
tema: desarrollar threat model detallado de seguridad local-first
incluye:
  - amenazas por zona de seguridad
  - perfiles afectados
  - clases de datos y evidencias afectadas
  - consentimiento requerido
  - mitigaciones documentales
  - criterios PH-IT-AT
  - escalamiento de amenazas
  - deuda técnica futura
prioridad: alta
estado: pendiente
```

### DEUDA-SESION-017 : Seguridad habitable y no rígida

```text
tema: desarrollar criterios de seguridad habitable y no rígida
incluye:
  - seguridad proporcional al riesgo
  - avisos breves, situados y no intimidantes
  - controles visibles sin vigilancia permanente
  - pausa y cancelación
  - no castigo a la exploración creativa
  - protección de borradores, errores y versiones intermedias
prioridad: alta
estado: pendiente
```

### DEUDA-SESION-018 : Regla triangular de protección núcleo

```text
tema: consolidar regla triangular de protección núcleo
relación:
  - SPEC-OP-006 Consentimiento Informado y Situado
  - SPEC-OP-007 Datos y Privacidad
  - SPEC-OP-008 Seguridad Local-First
incluye:
  - consentimiento no sustituye privacidad
  - privacidad no sustituye seguridad
  - seguridad no sustituye consentimiento
  - local-first no sustituye threat model
  - minimización no sustituye control humano
  - control humano no sustituye agencia
prioridad: alta
estado: pendiente
```

### DEUDA-SESION-019 : Matriz común de acciones sensibles

```text
tema: crear matriz común de acciones sensibles para specs futuras
incluye:
  - acción sensible
  - consentimiento
  - clasificación de datos
  - privacidad por defecto
  - zona de seguridad
  - amenaza conceptual
  - control humano
  - deuda
  - gate aplicable
prioridad: alta
estado: pendiente
```

## 7. Deuda PH derivada de SPEC-OP-008

### DEUDA-PH-007 : Confianza situada en experiencias local-first

```text
tema: guía PH para confianza situada en experiencias local-first
estado: pendiente
```

### DEUDA-PH-008 : Seguridad en contextos escolares o compartidos

```text
tema: guía PH para revisar seguridad en contextos escolares o compartidos
estado: pendiente
```

### DEUDA-PH-009 : Amenazas de confianza, coerción y exposición

```text
tema: guía PH para amenazas de confianza, coerción y exposición en local-first
estado: pendiente
```

### DEUDA-PH-010 : Seguridad sin coerción

```text
tema: guía PH para revisar seguridad sin coerción
estado: pendiente
```

## 8. Deuda IT derivada de SPEC-OP-008

### DEUDA-SDD-IT-005 : Local, privado, compartido, exportable y externo

```text
tema: criterios IT para distinguir local, privado, compartido, exportable y externo
estado: pendiente
```

### DEUDA-SDD-IT-006 : Matriz de zonas local-first

```text
tema: matriz IT de zonas local-first, visibilidad, pérdida y recuperación
estado: pendiente
```

### DEUDA-SDD-IT-007 : Plantilla de threat model conceptual

```text
tema: plantilla IT para threat model conceptual
estado: pendiente
```

### DEUDA-SDD-IT-008 : Controles proporcionales al riesgo

```text
tema: criterios IT para controles de seguridad proporcionales al riesgo
estado: pendiente
```

## 9. Deuda AT derivada de SPEC-OP-008

### DEUDA-AT-003 : Creación local sin fricción innecesaria

```text
tema: criterios AT para creación local sin fricción innecesaria
estado: pendiente
```

### DEUDA-AT-004 : Seguridad por zonas sin interrumpir flujo creativo

```text
tema: criterios AT para seguridad por zonas sin interrumpir el flujo creativo
estado: pendiente
```

### DEUDA-AT-005 : Mitigaciones de seguridad habitables

```text
tema: guía AT para mitigaciones de seguridad habitables
estado: pendiente
```

### DEUDA-AT-006 : Seguridad habitable en procesos creativos

```text
tema: guía AT para seguridad habitable en procesos creativos
estado: pendiente
```

## 10. Dictamen actualizado de deuda

La deuda registrada desde SPEC-OP-006, SPEC-OP-007 y SPEC-OP-008 no bloquea la aprobación documental de Specs Núcleo. Sí bloquea cualquier intento futuro de convertir consentimiento, datos, privacidad o seguridad local-first en implementación sin consolidación documental posterior, revisión PH-IT-AT y gate constitucional.


## 7. Pago y reclasificación inicial tras Gate de Specs Núcleo

```text
fecha: 2026-07-04
gate: GATE-SDD-001-SPECS-NUCLEO-v0_4_5
estado_gate: gate_aprobado_con_deuda_controlada
```

### Deuda pagada o sustancialmente pagada

```text
DEUDA-SESION-005:
  resultado: pagada_por_gate
  evidencia:
    - regla triangular común consolidada por SPEC-OP-006, SPEC-OP-007, SPEC-OP-008;
    - Gate de Specs Núcleo aprobado;
    - Matriz Cruzada creada.

DEUDA-SESION-011:
  resultado: pagada_por_matriz_cruzada
  evidencia:
    - Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md.

DEUDA-SESION-018:
  resultado: pagada_por_gate
  evidencia:
    - Gate de Specs Núcleo consolida consentimiento + datos/privacidad + seguridad local-first;
    - decisión formal del Gate aprobada.
```

### Deuda parcialmente pagada y heredable

```text
DEUDA-SESION-019:
  resultado: parcialmente_pagada_y_heredable
  evidencia:
    - Matriz Cruzada cubre acciones sensibles núcleo;
    - falta expansión para specs futuras de experiencia, evidencia, portafolio, exportación e IA.
```

### Deuda no bloqueante heredada

```text
Se heredan como deuda no bloqueante:
  - glosarios específicos;
  - guías PH, IT y AT;
  - ejemplos por edad o contexto;
  - escenarios ficticios complementarios;
  - threat model detallado futuro;
  - matrices ampliadas por perfil, zona o versión.
```

Esta reclasificación no autoriza implementación funcional. Solo permite cerrar documentalmente el Gate de Specs Núcleo y preparar el cierre de sesión.
