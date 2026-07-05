# Registro de Deuda : Arquitectura Conceptual AI StoryLab

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.6 Arquitectura Conceptual No Funcional  
**Documento:** Registro_Deuda_Arquitectura_Conceptual_AI_StoryLab.md  
**Estado:** aprobado para integración en PR #12  
**Documento previo:** Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md  
**Destino de integración:** PR #12  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha de preparación:** 2026-07-05  
**Fecha de aprobación:** 2026-07-05  

> **Guardarraíl constitucional v0.4.6**  
> Este registro de deuda no autoriza implementación funcional, código de aplicación, UI real, backend, cloud, autenticación, analíticas, IA externa por defecto, datos reales, captura, almacenamiento, cifrado, permisos o retención técnica, sincronización, respaldo real, exportaciones reales, automatización funcional, pruebas con personas, evaluación automática, investigación con datos reales ni arquitectura técnica ejecutable.

---

## 1. Propósito

Este documento consolida la **deuda documental, conceptual y constitucional** identificada durante la fase **v0.4.6 Arquitectura Conceptual No Funcional** de AI StoryLab 1.

Su función es distinguir:

```text
[ ] deuda heredada desde v0.4.5;
[ ] deuda parcialmente atendida durante v0.4.6;
[ ] deuda vigilada que no bloquea el cierre documental;
[ ] deuda bloqueante para fases futuras;
[ ] deuda transferida a v0.4.7, v0.5.x u otros documentos;
[ ] condiciones de reapertura;
[ ] acciones que permanecen no autorizadas.
```

Este registro no paga toda la deuda. La nombra, la clasifica, la ilumina y le pone una etiqueta en el timón para que ninguna fase futura navegue fingiendo que el agua está plana.

---

## 2. Alcance

Este registro aplica a la deuda relacionada con:

```text
[ ] consentimiento informado y situado;
[ ] datos y privacidad;
[ ] seguridad local-first;
[ ] threat model conceptual;
[ ] semillas arquitectónicas;
[ ] objetos de dominio;
[ ] evidencia;
[ ] portafolio;
[ ] visibilidad;
[ ] decisiones reversibles;
[ ] gates de transición;
[ ] revisión PH-IT-AT;
[ ] perfiles humanos;
[ ] límites entre concepto, diseño, prototipo e implementación.
```

Se permite:

```text
[✓] nombrar deuda;
[✓] clasificar deuda;
[✓] indicar origen;
[✓] registrar riesgo;
[✓] definir condición de pago;
[✓] indicar fase o documento destino;
[✓] declarar si bloquea acciones futuras;
[✓] transferir deuda sin resolverla artificialmente;
[✓] proteger continuidad documental.
```

No se permite:

```text
[!] resolver deuda con implementación;
[!] convertir deuda en permiso funcional;
[!] ocultar deuda por conveniencia;
[!] cerrar deuda sin evidencia documental;
[!] abrir prototipo;
[!] abrir pruebas con personas;
[!] abrir investigación con datos reales;
[!] crear arquitectura técnica;
[!] reducir deuda ética a tarea técnica.
```

---

## 3. Documentos base

Este registro se apoya en:

```text
Cierre_Sesion_Post_Merge_Specs_Nucleo_AI_StoryLab.md
Continuidad_Ruta_Desarrollo_AI_StoryLab.md
Prompt_Activacion_Arquitectura_Conceptual_AI_StoryLab.md

Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md
Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md

Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md
Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Matriz_Acciones_Sensibles_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Guia_Revision_PH_IT_AT_Triangular_AI_StoryLab_1_v0_4_5.md
Glosario_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
```

---

## 4. Definición de deuda

En AI StoryLab 1, **deuda** es una tensión, límite, pregunta, riesgo, decisión incompleta o condición pendiente que debe permanecer visible para evitar avances prematuros, confusiones constitucionales o pérdidas de agencia humana.

La deuda puede ser:

```text
documental:
  falta de documento, matriz, guía, glosario o cierre.

conceptual:
  falta de distinción suficiente entre ideas, objetos, relaciones o zonas.

ética:
  riesgo de afectar agencia, consentimiento, privacidad, cuidado o equidad.

epistémica:
  riesgo de confundir evidencia, dato, reflexión, interpretación, evaluación o investigación.

artística:
  riesgo de reducir creación, juego, proceso o ambigüedad a producto medible.

constitucional:
  riesgo de contradecir consentimiento, datos/privacidad o seguridad local-first.

transicional:
  asunto que debe pasar a gate, fase posterior o documento futuro.
```

La deuda no es fracaso. Es una forma honesta de memoria. Pero deuda sin registro es niebla con membrete.

---

## 5. Estados de deuda

```text
deuda_identificada:
  deuda nombrada pero aún no clasificada.

deuda_en_revision:
  deuda bajo análisis PH-IT-AT o pregunta triangular.

deuda_parcialmente_atendida:
  deuda trabajada en parte, pero no cerrada por completo.

deuda_vigilada:
  deuda que no bloquea cierre documental actual, pero condiciona fases futuras.

deuda_bloqueante:
  deuda que impide avanzar hacia una acción, documento, fase o transición.

deuda_transferida:
  deuda movida explícitamente a otro documento o fase.

deuda_cerrada_documentalmente:
  deuda resuelta dentro del alcance documental aprobado.

deuda_reabierta:
  deuda previamente considerada atendida que vuelve a activarse por una nueva decisión.

deuda_rechazada_como_fuera_de_fase:
  asunto no aceptado como deuda activa porque implicaría implementación o alcance no autorizado.
```

---

## 6. Tipos de bloqueo

Una deuda puede bloquear:

```text
bloquea_microcopy:
  no permite redactar lenguaje situado para usuarios finales.

bloquea_experiencia:
  no permite diseñar experiencia, recorrido o interacción.

bloquea_prototipo:
  no permite prototipo funcional o semifuncional.

bloquea_pruebas_con_personas:
  no permite trabajar con participantes reales.

bloquea_investigacion:
  no permite uso de evidencia o datos reales para investigación.

bloquea_visibilidad:
  no permite publicación, exposición, exportación o compartición.

bloquea_evaluacion:
  no permite calificación, scoring, rúbrica automática o inferencia.

bloquea_arquitectura_tecnica:
  no permite arquitectura ejecutable, seguridad técnica o persistencia.

bloquea_cierre_documental:
  impide cerrar la fase documental actual.
```

---

## 7. Matriz base de deuda

Toda deuda registrada debe poder describirse así:

```text
deuda:
  nombre:

estado:
  identificada |
  en_revision |
  parcialmente_atendida |
  vigilada |
  bloqueante |
  transferida |
  cerrada_documentalmente |
  reabierta |
  rechazada_como_fuera_de_fase

tipo:
  documental |
  conceptual |
  etica |
  epistemica |
  artistica |
  constitucional |
  transicional

origen:
  documento:
  seccion:
  fase:

riesgo:
  ...

pregunta_triangular:
  consentimiento:
    impacto:
    condicion:

  datos_privacidad:
    impacto:
    condicion:

  seguridad_local_first:
    impacto:
    condicion:

bloquea:
  - ...

condicion_de_pago:
  ...

destino:
  fase:
  documento:
  gate:

dictamen:
  mantener_vigilada |
  bloquear_transicion |
  transferir |
  cerrar_documentalmente |
  reabrir |
  rechazar_fuera_de_fase

no_autoriza:
  - implementacion
  - datos_reales
  - pruebas_con_personas
  - evaluacion_automatica
  - investigacion_con_datos_reales
  - arquitectura_tecnica_ejecutable
```

---

## 8. Deuda heredada desde v0.4.5

### 8.1 Threat model detallado local-first

```text
deuda:
  nombre: threat_model_detallado_local_first

estado:
  deuda_parcialmente_atendida

tipo:
  conceptual | constitucional | transicional

origen:
  fase: v0.4.5 Specs Núcleo
  documento: Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md

trabajo_realizado_en_v0_4_6:
  - Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
  - Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md

riesgo:
  confundir seguridad local-first conceptual con seguridad técnica implementable.

pregunta_triangular:
  consentimiento:
    impacto: amenazas pueden afectar comprensión, pausa y retiro.
    condicion: toda amenaza debe preservar control humano.

  datos_privacidad:
    impacto: evidencia, reflexión, metadato y visibilidad pueden exponerse.
    condicion: privacidad por defecto y minimización conceptual.

  seguridad_local_first:
    impacto: zonas y amenazas requieren cuidado antes de transición.
    condicion: no convertir threat model conceptual en arquitectura técnica.

bloquea:
  - arquitectura_tecnica
  - prototipo
  - almacenamiento
  - sincronizacion
  - exportacion
  - pruebas_con_personas

condicion_de_pago:
  si una fase futura propone diseño funcional, prototipo, almacenamiento, sincronización, exportación, seguridad técnica o uso de datos reales, deberá crear threat model técnico y ético específico antes de avanzar.

destino:
  fase: v0.5.x o fase futura de diseño/prototipo, si se autoriza
  documento: Threat_Model_Tecnico_Etico_Local_First_AI_StoryLab.md
  gate: gate_futuro_pre_prototipo

dictamen:
  deuda_parcialmente_pagada_y_transferida

no_autoriza:
  - implementacion
  - seguridad_tecnica
  - almacenamiento
  - cifrado
  - permisos
  - sincronizacion
  - exportacion
```

---

### 8.2 Ejemplos por edad y contexto

```text
deuda:
  nombre: ejemplos_por_edad_y_contexto

estado:
  deuda_vigilada

tipo:
  documental | etica | artistica | transicional

origen:
  fase: v0.4.5 Specs Núcleo
  documento: Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md

trabajo_realizado_en_v0_4_6:
  - se distinguieron cuatro subjetividades humanas;
  - se evitó redactar microcopy o experiencias de usuario;
  - se registró necesidad de cuidado diferenciado.

riesgo:
  producir lenguaje, actividades o ejemplos que no respeten edad, contexto, capacidad de comprensión o situación educativa.

pregunta_triangular:
  consentimiento:
    impacto: una persona puede aceptar sin comprender si el lenguaje no está situado.
    condicion: ejemplos futuros deben ser claros, apropiados y revisables.

  datos_privacidad:
    impacto: ejemplos pueden inducir exposición de información personal.
    condicion: ningún ejemplo debe requerir datos reales.

  seguridad_local_first:
    impacto: ejemplos pueden normalizar visibilidad o uso externo.
    condicion: privacidad por defecto y pausa explícita.

bloquea:
  - microcopy
  - experiencia
  - pruebas_con_personas
  - materiales_dirigidos_a_estudiantes
  - interacciones_por_perfil

condicion_de_pago:
  crear documento de ejemplos situados por edad, perfil y contexto antes de redactar materiales de usuario, microcopy, actividades piloto o experiencias con personas.

destino:
  fase: v0.4.7
  documento: Ejemplos_Situados_Edad_Contexto_AI_StoryLab.md
  gate: gate_pre_microcopy_y_experiencia

dictamen:
  deuda_vigilada_para_v0_4_7

no_autoriza:
  - microcopy_final
  - pruebas_con_estudiantes
  - experiencia_de_usuario
  - investigacion_con_personas
```

---

### 8.3 Guías PH-IT-AT ampliadas

```text
deuda:
  nombre: guias_extensas_PH_IT_AT

estado:
  deuda_vigilada

tipo:
  documental | etica | epistemica | artistica

origen:
  fase: v0.4.5 Specs Núcleo
  documento: Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md

trabajo_realizado_en_v0_4_6:
  - cada documento integró revisión PH-IT-AT;
  - se mantuvo la pregunta triangular;
  - se reforzó agencia, distinción epistémica y creatividad.

riesgo:
  casos complejos pueden requerir criterios más finos que la guía núcleo.

pregunta_triangular:
  consentimiento:
    impacto: PH debe proteger agencia en casos complejos.
    condicion: ampliar criterios de comprensión, pausa y retiro.

  datos_privacidad:
    impacto: IT debe evitar confusiones entre evidencia, dato, evaluación e investigación.
    condicion: ampliar criterios epistémicos.

  seguridad_local_first:
    impacto: AT y PH deben evitar que cuidado se vuelva burocracia o vigilancia.
    condicion: ampliar criterios de creatividad y protección contextual.

bloquea:
  - revision_casos_complejos
  - microcopy_sensible
  - experiencias_por_perfil
  - investigacion_futura
  - evaluacion_futura

condicion_de_pago:
  crear guías PH, IT y AT ampliadas antes de revisar casos complejos, experiencias situadas, ejemplos por edad o investigación futura.

destino:
  fase: v0.4.7
  documento: Guias_Revision_PH_IT_AT_Ampliadas_AI_StoryLab.md
  gate: gate_pre_experiencia_situada

dictamen:
  deuda_vigilada_para_v0_4_7

no_autoriza:
  - revision_funcional
  - evaluacion_automatica
  - investigacion_real
```

---

### 8.4 Matrices ampliadas por spec y acciones sensibles

```text
deuda:
  nombre: matrices_ampliadas_por_spec_y_acciones_sensibles

estado:
  deuda_vigilada

tipo:
  documental | conceptual | constitucional

origen:
  fase: v0.4.5 Specs Núcleo
  documento: Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md

trabajo_realizado_en_v0_4_6:
  - Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md identificó acciones sensibles conceptuales;
  - Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md identificó acciones de evidencia y portafolio;
  - Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md definió revisión de acciones sensibles.

riesgo:
  una spec futura podría tocar acciones sensibles sin matriz específica.

pregunta_triangular:
  consentimiento:
    impacto: cada acción sensible requiere comprensión, pausa y retiro.
    condicion: matriz específica por acción.

  datos_privacidad:
    impacto: cada acción puede tocar datos, evidencia, reflexión, metadatos o visibilidad.
    condicion: clasificación antes de avanzar.

  seguridad_local_first:
    impacto: cada acción activa zonas y amenazas distintas.
    condicion: controles humanos conceptuales antes de transición.

bloquea:
  - specs_futuras_con_acciones_sensibles
  - microcopy_de_acciones
  - experiencia_de_usuario
  - prototipo
  - pruebas_con_personas

condicion_de_pago:
  crear matrices ampliadas por acción sensible antes de abrir specs o experiencias que impliquen reconocer, contextualizar, incluir, retirar, interpretar, compartir, publicar, exportar, evaluar o investigar evidencias.

destino:
  fase: v0.4.7 o v0.5.x según alcance
  documento: Matrices_Acciones_Sensibles_Arquitectura_AI_StoryLab.md
  gate: gate_pre_spec_acciones_sensibles

dictamen:
  deuda_vigilada_transferida

no_autoriza:
  - acciones_funcionales
  - flujos_de_usuario
  - automatizacion
```

---

## 9. Deuda emergente de v0.4.6

### 9.1 Límite entre concepto, diseño, prototipo e implementación

```text
deuda:
  nombre: limite_concepto_diseno_prototipo_implementacion

estado:
  deuda_parcialmente_atendida

tipo:
  conceptual | constitucional | transicional

origen:
  fase: v0.4.6
  documentos:
    - Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
    - Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
    - Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md
    - Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md

riesgo:
  una fase posterior puede interpretar objetos, zonas, evidencias o gates como autorización implícita para construir.

pregunta_triangular:
  consentimiento:
    impacto: implementación prematura puede afectar comprensión y retiro.
    condicion: mantener consentimiento situado antes de toda experiencia real.

  datos_privacidad:
    impacto: diseño o prototipo puede tocar datos, evidencias y visibilidad.
    condicion: no avanzar sin matriz y threat model aplicable.

  seguridad_local_first:
    impacto: prototipo puede convertir zonas conceptuales en flujos técnicos.
    condicion: gate específico antes de diseño funcional.

bloquea:
  - prototipo
  - UI_real
  - arquitectura_tecnica
  - pruebas_con_personas
  - datos_reales

condicion_de_pago:
  crear criterios explícitos de transición entre concepto, diseño, prototipo e implementación antes de cualquier fase que proponga diseño funcional.

destino:
  fase: v0.4.7 o v0.5.x
  documento: Criterios_Transicion_Concepto_Diseno_Prototipo_AI_StoryLab.md
  gate: gate_pre_diseno_funcional

dictamen:
  deuda_vigilada_permanente

no_autoriza:
  - prototipo
  - arquitectura_tecnica
  - implementacion
```

---

### 9.2 Ejecución final del gate de transición

```text
deuda:
  nombre: ejecucion_final_gate_transicion_v0_4_6

estado:
  deuda_identificada

tipo:
  documental | transicional

origen:
  fase: v0.4.6
  documento: Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md

riesgo:
  aprobar el instrumento del gate sin ejecutar el dictamen final podría cerrar PR #12 sin evaluación explícita.

pregunta_triangular:
  consentimiento:
    impacto: cierre de fase debe confirmar agencia y pausa.
    condicion: ejecutar matriz del gate antes del cierre documental.

  datos_privacidad:
    impacto: cierre debe confirmar distinciones de dato, evidencia, reflexión y visibilidad.
    condicion: revisar documentos integrados.

  seguridad_local_first:
    impacto: cierre debe confirmar amenazas, zonas y controles humanos conceptuales.
    condicion: emitir dictamen de gate.

bloquea:
  - cierre_PR12
  - paso_a_ready_for_review
  - merge_documental

condicion_de_pago:
  ejecutar el gate en documento o sección de cierre antes de marcar PR #12 como listo para revisión final.

destino:
  fase: v0.4.6 cierre
  documento: Dictamen_Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md o Cierre_Sesion_PR12_Arquitectura_Conceptual_AI_StoryLab.md
  gate: este_gate

dictamen:
  deuda_bloqueante_para_cierre_PR12

no_autoriza:
  - cierre_sin_gate
  - merge_sin_dictamen_documental
```

---

### 9.3 Changelog y transferencia simétrica de PR #12

```text
deuda:
  nombre: changelog_y_transferencia_simetrica_PR12

estado:
  deuda_identificada

tipo:
  documental | transicional

origen:
  fase: v0.4.6
  documentos:
    - Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
    - Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md

riesgo:
  una fase posterior puede perder continuidad sobre decisiones, deuda y límites no funcionales.

pregunta_triangular:
  consentimiento:
    impacto: continuidad debe preservar decisiones sobre agencia, pausa y retiro.
    condicion: transferencia debe nombrar decisiones activas.

  datos_privacidad:
    impacto: continuidad debe preservar límites sobre evidencia, reflexión, datos y visibilidad.
    condicion: transferencia debe registrar no autorizaciones.

  seguridad_local_first:
    impacto: continuidad debe preservar amenazas y zonas conceptuales.
    condicion: transferencia debe registrar deuda y gates futuros.

bloquea:
  - cierre_PR12
  - inicio_fase_posterior_sin_contexto

condicion_de_pago:
  crear changelog de PR #12 y documento de transferencia simétrica antes de cierre o merge.

destino:
  fase: v0.4.6 cierre
  documentos:
    - Changelog_PR12_Arquitectura_Conceptual_AI_StoryLab.md
    - Transferencia_Simetrica_PR12_Arquitectura_Conceptual_AI_StoryLab.md
  gate: gate_cierre_PR12

dictamen:
  deuda_bloqueante_para_cierre_PR12

no_autoriza:
  - merge_sin_changelog
  - inicio_de_fase_sin_transferencia
```

---

### 9.4 Matriz ampliada de acciones sensibles de arquitectura conceptual

```text
deuda:
  nombre: matriz_ampliada_acciones_sensibles_arquitectura_conceptual

estado:
  deuda_vigilada

tipo:
  documental | conceptual | constitucional

origen:
  fase: v0.4.6
  documentos:
    - Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
    - Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md
    - Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md

riesgo:
  acciones como reconocer evidencia, incluir en portafolio, interpretar, compartir visibilidad futura o transferir a investigación pueden avanzar sin matriz específica.

pregunta_triangular:
  consentimiento:
    impacto: cada acción requiere comprensión, aceptación, pausa y retiro.
    condicion: matriz por acción sensible.

  datos_privacidad:
    impacto: cada acción toca evidencia, reflexión, metadato o visibilidad.
    condicion: clasificación de sensibilidad.

  seguridad_local_first:
    impacto: cada acción activa zonas y amenazas.
    condicion: control humano conceptual.

bloquea:
  - experiencias_con_evidencia
  - portafolio_funcional
  - visibilidad
  - investigacion_futura
  - evaluacion_futura
  - prototipo

condicion_de_pago:
  construir matriz ampliada antes de cualquier spec o fase que convierta acciones conceptuales en experiencias, flujos o prototipos.

destino:
  fase: v0.4.7 o v0.5.x
  documento: Matriz_Acciones_Sensibles_Arquitectura_Conceptual_AI_StoryLab.md
  gate: gate_pre_acciones_sensibles

dictamen:
  deuda_vigilada_transferida

no_autoriza:
  - accion_funcional
  - UI_real
  - datos_reales
```

---

### 9.5 Vocabulario controlado de arquitectura conceptual

```text
deuda:
  nombre: vocabulario_controlado_arquitectura_conceptual

estado:
  deuda_vigilada

tipo:
  documental | conceptual

origen:
  fase: v0.4.6
  documentos:
    - Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
    - Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
    - Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
    - Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md

riesgo:
  términos como objeto, evidencia, portafolio, zona, acción, decisión, gate o threat model pueden interpretarse técnicamente fuera de contexto.

pregunta_triangular:
  consentimiento:
    impacto: lenguaje ambiguo reduce comprensión.
    condicion: glosario o vocabulario controlado.

  datos_privacidad:
    impacto: términos ambiguos pueden normalizar uso de datos.
    condicion: definiciones con límites.

  seguridad_local_first:
    impacto: términos técnicos pueden sugerir controles reales.
    condicion: distinguir siempre nivel conceptual.

bloquea:
  - microcopy
  - onboarding
  - materiales_de_formacion
  - comunicacion_externa
  - diseño_funcional

condicion_de_pago:
  crear glosario/vocabulario controlado antes de materiales dirigidos a usuarios, formación o transición a diseño.

destino:
  fase: v0.4.7
  documento: Glosario_Arquitectura_Conceptual_AI_StoryLab.md
  gate: gate_pre_comunicacion_usuario

dictamen:
  deuda_vigilada_para_v0_4_7

no_autoriza:
  - lenguaje_final_de_usuario
  - UI_real
```

---

### 9.6 Criterios de transición a diseño no funcional o prototipo futuro

```text
deuda:
  nombre: criterios_transicion_a_diseno_o_prototipo_futuro

estado:
  deuda_bloqueante

tipo:
  transicional | constitucional | conceptual

origen:
  fase: v0.4.6
  documento: Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md

riesgo:
  pasar de arquitectura conceptual a diseño o prototipo sin criterios de frontera.

pregunta_triangular:
  consentimiento:
    impacto: diseño puede inducir expectativas, aceptación o uso real.
    condicion: criterios de frontera y consentimiento situado.

  datos_privacidad:
    impacto: prototipo puede tocar evidencia, reflexión o visibilidad.
    condicion: no usar datos reales sin protocolo.

  seguridad_local_first:
    impacto: prototipo puede requerir controles técnicos.
    condicion: threat model futuro y gate específico.

bloquea:
  - diseño_funcional
  - prototipo
  - pruebas_con_personas
  - arquitectura_tecnica

condicion_de_pago:
  antes de cualquier fase de diseño o prototipo, crear gate de transición y criterios de frontera entre documentación, diseño no funcional, prototipo y sistema.

destino:
  fase: v0.5.x si se aprueba
  documento: Gate_Pre_Diseno_Prototipo_AI_StoryLab.md
  gate: gate_pre_diseno_prototipo

dictamen:
  deuda_bloqueante_para_prototipo

no_autoriza:
  - diseño_funcional
  - prototipo
  - implementación
```

---

## 10. Deudas no bloqueantes para cierre documental de PR #12

Estas deudas no bloquean el cierre documental de PR #12 si quedan registradas y transferidas:

```text
[ ] ejemplos_por_edad_y_contexto;
[ ] guias_extensas_PH_IT_AT;
[ ] matrices_ampliadas_por_spec_y_acciones_sensibles;
[ ] limite_concepto_diseno_prototipo_implementacion;
[ ] matriz_ampliada_acciones_sensibles_arquitectura_conceptual;
[ ] vocabulario_controlado_arquitectura_conceptual.
```

Condición:

```text
deben quedar visibles en transferencia simétrica y changelog.
```

---

## 11. Deudas bloqueantes para cierre documental de PR #12

Estas deudas sí bloquean el cierre documental de PR #12 hasta ser atendidas en documentos de cierre:

```text
[!] ejecucion_final_gate_transicion_v0_4_6;
[!] changelog_y_transferencia_simetrica_PR12.
```

Condición de pago mínima:

```text
[ ] ejecutar o registrar dictamen de gate;
[ ] crear changelog de PR #12;
[ ] crear transferencia simétrica o cierre de sesión suficiente;
[ ] confirmar que no se autoriza implementación.
```

---

## 12. Deudas bloqueantes para fases futuras

Estas deudas no bloquean PR #12, pero bloquean fases posteriores si se intenta avanzar hacia diseño, prototipo, uso con personas o investigación:

```text
[!] threat_model_tecnico_etico_futuro;
[!] ejemplos_por_edad_y_contexto;
[!] guias_PH_IT_AT_ampliadas;
[!] matrices_ampliadas_acciones_sensibles;
[!] criterios_transicion_a_diseno_o_prototipo_futuro;
[!] protocolo_investigacion_futura_si_aplica;
[!] criterios_visibilidad_publicacion_exportacion_si_aplica;
```

---

## 13. Acciones explícitamente no autorizadas por este registro

Este registro no autoriza:

```text
[!] implementar;
[!] prototipar;
[!] diseñar UI real;
[!] crear backend;
[!] usar cloud;
[!] crear autenticación;
[!] crear analíticas;
[!] activar IA externa;
[!] usar datos reales;
[!] capturar evidencia real;
[!] almacenar evidencia real;
[!] exportar;
[!] publicar;
[!] sincronizar;
[!] hacer backup real;
[!] probar con personas;
[!] evaluar automáticamente;
[!] investigar con datos reales;
[!] cerrar gate sin dictamen.
```

---

## 14. Relación con pregunta triangular

Toda deuda debe poder responder:

```text
Consentimiento:
  ¿Qué aspecto de comprensión, aceptación, pausa o retiro queda pendiente?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad podría quedar insuficientemente protegido?

Seguridad local-first:
  ¿Qué zona, amenaza o control humano queda pendiente de definición?
```

Si una deuda no puede responder la pregunta triangular, debe reformularse o rechazarse como deuda mal definida.

---

## 15. Relación con decisiones reversibles

Cada deuda debe indicar qué operación reversible aplica:

```text
pausar:
  detener avance hasta resolver la deuda.

retirar:
  remover una decisión que genera deuda innecesaria.

reformular:
  cambiar lenguaje, alcance o límite para reducir riesgo.

transferir:
  mover deuda a fase, documento o gate posterior.

rechazar:
  cerrar una decisión por incompatibilidad constitucional.

cerrar_documentalmente:
  declarar deuda atendida dentro del alcance aprobado.
```

---

## 16. Tabla resumen

```text
deuda                                                     estado                         bloquea_PR12   destino
--------------------------------------------------------  -----------------------------  ------------  ----------------
threat_model_detallado_local_first                        parcialmente_atendida           no            v0.5.x si aplica
ejemplos_por_edad_y_contexto                              vigilada                       no            v0.4.7
guias_extensas_PH_IT_AT                                   vigilada                       no            v0.4.7
matrices_ampliadas_por_spec_y_acciones_sensibles          vigilada_transferida            no            v0.4.7/v0.5.x
limite_concepto_diseno_prototipo_implementacion           parcialmente_atendida           no            permanente/v0.5.x
ejecucion_final_gate_transicion_v0_4_6                    identificada_bloqueante         si            cierre_PR12
changelog_y_transferencia_simetrica_PR12                  identificada_bloqueante         si            cierre_PR12
matriz_ampliada_acciones_sensibles_arquitectura           vigilada_transferida            no            v0.4.7/v0.5.x
vocabulario_controlado_arquitectura_conceptual            vigilada                       no            v0.4.7
criterios_transicion_a_diseno_o_prototipo_futuro          bloqueante_para_prototipo       no            v0.5.x
```

---

## 17. Dictamen de deuda para PR #12

```text
deuda_para_cierre_PR12:
  bloqueante:
    - ejecucion_final_gate_transicion_v0_4_6
    - changelog_y_transferencia_simetrica_PR12

  vigilada:
    - ejemplos_por_edad_y_contexto
    - guias_extensas_PH_IT_AT
    - matrices_ampliadas_por_spec_y_acciones_sensibles
    - limite_concepto_diseno_prototipo_implementacion
    - matriz_ampliada_acciones_sensibles_arquitectura_conceptual
    - vocabulario_controlado_arquitectura_conceptual

  parcialmente_atendida:
    - threat_model_detallado_local_first

  bloqueante_para_fases_futuras:
    - criterios_transicion_a_diseno_o_prototipo_futuro
    - threat_model_tecnico_etico_futuro_si_aplica
    - protocolo_investigacion_futura_si_aplica
```

Dictamen:

```text
PR12_no_debe_cerrarse_hasta:
  [ ] ejecutar dictamen de gate;
  [ ] crear changelog PR12;
  [ ] crear transferencia simétrica o cierre de sesión;
  [ ] confirmar continuidad documental;
  [ ] confirmar no implementación.
```

---

## 18. Ruta canónica propuesta

```text
18_DOCUMENTACION_ACTIVA/Deuda/Registro_Deuda_Arquitectura_Conceptual_AI_StoryLab.md
```

---

## 19. Comandos manuales seguros

```bash
mkdir -p 18_DOCUMENTACION_ACTIVA/Deuda

cp ~/Downloads/Registro_Deuda_Arquitectura_Conceptual_AI_StoryLab.md \
  18_DOCUMENTACION_ACTIVA/Deuda/Registro_Deuda_Arquitectura_Conceptual_AI_StoryLab.md

git status --short

git add \
  18_DOCUMENTACION_ACTIVA/Deuda/Registro_Deuda_Arquitectura_Conceptual_AI_StoryLab.md

git diff --cached -- \
  18_DOCUMENTACION_ACTIVA/Deuda/Registro_Deuda_Arquitectura_Conceptual_AI_StoryLab.md
```

Commit sugerido solo después de aprobación:

```bash
git commit -m "docs: registrar deuda arquitectura conceptual v0.4.6"
```

---

## 20. Relación con el siguiente documento

Este registro prepara los documentos de cierre de PR #12:

```text
Dictamen_Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
Changelog_PR12_Arquitectura_Conceptual_AI_StoryLab.md
Transferencia_Simetrica_PR12_Arquitectura_Conceptual_AI_StoryLab.md
Cierre_Sesion_PR12_Arquitectura_Conceptual_AI_StoryLab.md
```

El próximo documento recomendado es:

```text
Dictamen_Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
```

---

## 21. Dictamen de preparación

```text
documento: Registro_Deuda_Arquitectura_Conceptual_AI_StoryLab.md
estado: aprobado_para_integracion_PR12
fase: v0.4.6 Arquitectura Conceptual No Funcional
destino: PR #12
commit_previsto: commit_10
implementacion: no_autorizada
siguiente_documento: Dictamen_Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
criterio_rector: consentimiento + datos/privacidad + seguridad local-first
```

La deuda bien registrada no es lastre. Es una brújula con memoria: recuerda dónde el barco no debe encallar dos veces.
