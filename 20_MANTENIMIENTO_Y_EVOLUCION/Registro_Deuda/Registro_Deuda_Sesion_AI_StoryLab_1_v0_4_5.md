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


## 11. Pago amplio controlado de deuda posterior al Gate de Specs Núcleo

```text
fecha: 2026-07-04
gate_previo: GATE-SDD-001-SPECS-NUCLEO-v0_4_5
criterio_aprobado:
  profundidad: pago amplio controlado
  documentos: tres documentos canónicos breves
  herencia: solo con ruta, función, responsable conceptual y versión destino
```

### 11.1 Documentos creados para pago de deuda

```text
[+] Glosario_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
[+] Matriz_Acciones_Sensibles_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
[+] Guia_Revision_PH_IT_AT_Triangular_AI_StoryLab_1_v0_4_5.md
```

### 11.2 Deuda pagada

```text
DEUDA-SESION-001:
  resultado: pagada
  evidencia: Glosario Núcleo, términos de consentimiento

DEUDA-SESION-006:
  resultado: pagada
  evidencia: Glosario Núcleo, términos de datos y privacidad

DEUDA-SESION-012:
  resultado: pagada
  evidencia: Glosario Núcleo, términos de seguridad local-first

DEUDA-SESION-005:
  resultado: pagada
  evidencia: Gate de Specs Núcleo + Guía PH-IT-AT Triangular

DEUDA-SESION-011:
  resultado: pagada
  evidencia: Matriz Cruzada existente + Matriz de Acciones Sensibles

DEUDA-SESION-018:
  resultado: pagada
  evidencia: Gate de Specs Núcleo + Guía PH-IT-AT Triangular

DEUDA-PH-003:
  resultado: pagada_en_alcance_nucleo
  evidencia: Matriz de Acciones Sensibles + Checklist PH

DEUDA-SDD-IT-004:
  resultado: pagada_en_alcance_nucleo
  evidencia: Matriz de Acciones Sensibles
```

### 11.3 Deuda sustancialmente pagada con alcance núcleo

```text
DEUDA-SESION-002:
  resultado: sustancialmente_pagada
  evidencia: inventario mínimo PH-IT-AT en guía triangular
  heredable: guías extensas PH por versión futura

DEUDA-SESION-003:
  resultado: sustancialmente_pagada
  evidencia: regla triangular, matriz de acciones sensibles y checklist PH
  heredable: microcriterios por interfaz futura

DEUDA-SESION-004:
  resultado: sustancialmente_pagada
  evidencia: criterios mínimos por perfil de usuario
  heredable: ejemplos por edad y contexto escolar

DEUDA-SESION-007:
  resultado: sustancialmente_pagada
  evidencia: inventario IT en guía triangular
  heredable: guías extensas de datos, privacidad y minimización

DEUDA-SESION-008:
  resultado: sustancialmente_pagada_en_alcance_nucleo
  evidencia: matriz de acciones sensibles + checklist IT
  heredable: matriz ampliada por spec futura

DEUDA-SESION-009:
  resultado: sustancialmente_pagada_como_criterio_minimo
  evidencia: criterios por perfil y escalamiento de sensibilidad
  heredable: escenarios escolares ficticios

DEUDA-SESION-010:
  resultado: sustancialmente_pagada
  evidencia: checklist IT y criterios de minimización
  heredable: plantillas de campos por spec futura

DEUDA-SESION-013:
  resultado: sustancialmente_pagada
  evidencia: inventario de seguridad local-first en guía triangular
  heredable: guías extensas de seguridad local-first

DEUDA-SESION-014:
  resultado: sustancialmente_pagada
  evidencia: criterios local-first verificables
  heredable: verificación por spec futura

DEUDA-SESION-015:
  resultado: sustancialmente_pagada_en_alcance_nucleo
  evidencia: matriz de acciones sensibles y zonas de seguridad
  heredable: matriz técnica conceptual ampliada en v0.4.6

DEUDA-SESION-017:
  resultado: sustancialmente_pagada
  evidencia: checklist AT y seguridad habitable
  heredable: microcopias y patrones de experiencia v0.4.7

DEUDA-PH-001 a DEUDA-PH-010:
  resultado: sustancialmente_pagadas_como_guia_nucleo_breve
  evidencia: Guía PH-IT-AT Triangular
  heredable: guías PH extensas

DEUDA-SDD-IT-001 a DEUDA-SDD-IT-008:
  resultado: sustancialmente_pagadas_como_criterios_nucleo_breves
  evidencia: Guía PH-IT-AT Triangular + Matriz de Acciones Sensibles
  heredable: plantillas IT extensas y threat model detallado

DEUDA-AT-001 a DEUDA-AT-006:
  resultado: sustancialmente_pagadas_como_guia_nucleo_breve
  evidencia: Guía PH-IT-AT Triangular
  heredable: guías AT extensas de experiencia habitable
```

### 11.4 Deuda parcialmente pagada y heredable

```text
DEUDA-SESION-019:
  resultado: pagada_en_alcance_nucleo_y_heredable_para_ampliacion
  funcion_documental: matriz común de acciones sensibles
  ruta_sugerida: 00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/
  responsable_conceptual: PH + IT + AT
  version_destino: v0.4.6, v0.4.7 y v0.5.x según specs futuras
  razon_no_bloqueante: la matriz núcleo ya existe; faltan ampliaciones por specs futuras
  se_vuelve_bloqueante_si: una spec futura toca exportación, evaluación, investigación, portafolio o IA sin matriz específica
```

### 11.5 Deuda heredada no bloqueante con ruta, función y versión destino

```text
threat_model_detallado_local_first:
  origen: DEUDA-SESION-016
  funcion_documental: ampliar amenazas por zona, perfil y acción sensible
  ruta_sugerida: 00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/
  responsable_conceptual: IT con revisión PH y AT
  version_destino: v0.4.6
  razon_no_bloqueante: SPEC-OP-008 y el Gate contienen threat model conceptual mínimo
  se_vuelve_bloqueante_si: se propone arquitectura conceptual, prototipo o persistencia sin threat model ampliado

ejemplos_por_edad_y_contexto:
  origen: deudas PH y deuda permitida por Gate
  funcion_documental: traducir consentimiento y privacidad a lenguaje por perfil
  ruta_sugerida: 05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/
  responsable_conceptual: PH con apoyo AT
  version_destino: v0.4.7
  razon_no_bloqueante: el Gate no habilita pruebas con personas ni interfaz funcional
  se_vuelve_bloqueante_si: se redactan microcopias, pruebas o experiencias con estudiantes

guías_extensas_PH_IT_AT:
  origen: deudas PH, IT y AT sustancialmente pagadas como núcleo breve
  funcion_documental: convertir criterios breves en guías extensas por rol
  ruta_sugerida: 05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/
  responsable_conceptual: PH + IT + AT
  version_destino: v0.4.6 y v0.4.7
  razon_no_bloqueante: existe guía triangular breve suficiente para cierre v0.4.5
  se_vuelve_bloqueante_si: una spec futura requiere revisión especializada no cubierta por la guía núcleo

matrices_ampliadas_por_spec:
  origen: DEUDA-SESION-019 y matrices futuras
  funcion_documental: expandir acciones sensibles para evidencia, portafolio, exportación, evaluación, investigación e IA
  ruta_sugerida: 00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/
  responsable_conceptual: PH + IT + AT
  version_destino: v0.4.6, v0.4.7, v0.5.x
  razon_no_bloqueante: la matriz núcleo ya cubre acciones sensibles iniciales
  se_vuelve_bloqueante_si: se abre una spec futura sin matriz específica de acciones sensibles
```

### 11.6 Dictamen

```text
resultado: pago_amplio_controlado_realizado
estado_deuda_v0_4_5:
  - núcleo triangular pagado;
  - glosario núcleo pagado;
  - matriz común núcleo pagada;
  - guía PH-IT-AT núcleo pagada;
  - deuda restante heredada con ruta, función, responsable conceptual y versión destino.

no_autoriza:
  - implementación funcional;
  - código de aplicación;
  - pruebas con personas;
  - datos reales;
  - backend, cloud, autenticación, analíticas o IA externa.
```
