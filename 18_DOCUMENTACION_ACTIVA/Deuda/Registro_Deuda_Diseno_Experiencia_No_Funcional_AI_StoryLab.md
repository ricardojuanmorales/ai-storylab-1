# Registro de Deuda : Diseño de Experiencia No Funcional AI StoryLab

**Proyecto:** AI StoryLab 1  
**Documento:** `Registro_Deuda_Diseno_Experiencia_No_Funcional_AI_StoryLab.md`  
**Fase:** v0.4.7 Diseño de Experiencia No Funcional  
**Subtítulo operativo:** Lenguaje Situado, Escenarios Ficticios y Controles Habitables  
**PR:** #13  
**Estado:** borrador inicial para revisión documental  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-05  

---

## 1. Propósito

Este documento registra la deuda documental identificada durante la fase **v0.4.7 Diseño de Experiencia No Funcional** de AI StoryLab 1.

Su función es distinguir entre:

```text
deuda_pagada_documentalmente
deuda_vigilada_para_esta_fase
deuda_transferida_a_documentos_posteriores
deuda_bloqueada_hasta_fase_futura
riesgos_de_cruce_de_guardarrail
```

Este registro no autoriza implementación, prototipo, pruebas con personas, datos reales, investigación ni arquitectura técnica ejecutable.

La deuda no es una falla. Es una boya de navegación: marca zonas que todavía no deben cruzarse o que requieren revisión antes de avanzar.

---

## 2. Guardarraíl constitucional

Este registro no debe usarse para activar:

```text
[!] implementación funcional;
[!] código de aplicación;
[!] UI real;
[!] wireframes funcionales;
[!] prototipos;
[!] backend;
[!] cloud;
[!] autenticación;
[!] analíticas;
[!] IA externa por defecto;
[!] datos reales;
[!] captura de evidencia real;
[!] almacenamiento de evidencia real;
[!] cifrado, permisos o retención técnica;
[!] sincronización;
[!] respaldo real;
[!] exportación real;
[!] automatización funcional;
[!] pruebas con personas;
[!] evaluación automática;
[!] investigación con datos reales;
[!] arquitectura técnica ejecutable.
```

Cualquier deuda relacionada con esos elementos debe registrarse como:

```text
bloqueada
no_autorizada_en_v0_4_7
transferida_a_fase_futura_si_aplica
pendiente_de_gate
```

---

## 3. Criterio rector de deuda

Toda deuda registrada debe relacionarse con la pregunta triangular:

```text
Consentimiento:
  ¿La persona entiende, acepta, puede pausar y puede retirar?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca?

Seguridad local-first:
  ¿En qué zona ocurre, qué amenaza conceptual activa y qué control humano requiere?
```

Si una deuda no puede ubicarse en esta pregunta triangular, debe revisarse antes de conservarse en el registro.

---

## 4. Estados de deuda

```text
pagada_documentalmente:
  descripcion: La deuda fue atendida mediante un documento SDD no funcional aprobado.

vigilada_en_v0_4_7:
  descripcion: La deuda sigue activa, pero puede ser tratada dentro de la fase documental.

transferida_a_documento_posterior:
  descripcion: La deuda se moverá a un documento restante de v0.4.7.

bloqueada_hasta_fase_futura:
  descripcion: La deuda no puede pagarse en v0.4.7 sin violar guardarraíl.

no_autorizada:
  descripcion: La deuda propone una acción fuera del alcance actual y debe permanecer cerrada.

requiere_gate:
  descripcion: La deuda debe evaluarse en Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md.
```

---

## 5. Deuda heredada desde v0.4.6

### 5.1 ejemplos_por_edad_y_contexto

```text
id: DEUDA-V047-001
origen: v0.4.6 Arquitectura Conceptual No Funcional
descripcion:
  Faltaban ejemplos diferenciados por edad, perfil y contexto para revisar cómo lenguaje, agencia, privacidad y experiencia se comportan en situaciones situadas.
estado: pagada_documentalmente
pago_documental:
  Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md
criterio_triangular:
  consentimiento: escenarios revisan comprensión, pausa y retiro por perfil.
  datos_privacidad: escenarios distinguen evidencia ficticia, visibilidad y reflexión.
  seguridad_local_first: escenarios identifican zonas y amenazas conceptuales.
observacion:
  La deuda se paga solo como ficción documental. No autoriza actividades con estudiantes ni pruebas con personas.
```

---

### 5.2 guias_extensas_PH_IT_AT

```text
id: DEUDA-V047-002
origen: v0.4.6 Arquitectura Conceptual No Funcional
descripcion:
  Se requiere ampliar criterios de revisión desde los roles programador_humanista_PH, investigador_transdisciplinario_IT y artista_transdisciplinario_AT.
estado: transferida_a_documento_posterior
pago_documental_sugerido:
  Guia_Revision_PH_IT_AT_Diseno_Experiencia_AI_StoryLab.md
criterio_triangular:
  consentimiento: PH debe revisar agencia, pausa, retiro y claridad.
  datos_privacidad: IT debe revisar límites de evidencia, reflexión e investigación.
  seguridad_local_first: AT y PH deben revisar controles habitables, ritmo y no coerción.
observacion:
  Aunque el Plan de Revisión incluye roles mínimos, la guía extensa puede profundizar criterios sin convertirse en instrumento de evaluación.
```

---

### 5.3 vocabulario_controlado_arquitectura_conceptual

```text
id: DEUDA-V047-003
origen: v0.4.6 Arquitectura Conceptual No Funcional
descripcion:
  Se necesitaba traducir el vocabulario de arquitectura conceptual hacia lenguaje situado por perfiles.
estado: pagada_documentalmente_con_deuda_residual
pago_documental:
  Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md
deuda_residual:
  Vocabulario_Controlado_Diseno_Experiencia_AI_StoryLab.md puede abrirse en fase posterior si se detecta necesidad de glosario separado.
criterio_triangular:
  consentimiento: la guía diferencia invitación, pausa, retiro y revisión.
  datos_privacidad: la guía evita lenguaje extractivo sobre evidencia y portafolio.
  seguridad_local_first: la guía mantiene controles como capacidades humanas, no mecanismos técnicos.
observacion:
  La deuda queda suficientemente atendida para v0.4.7, salvo que el gate solicite glosario adicional.
```

---

### 5.4 matrices_ampliadas_por_spec_y_acciones_sensibles

```text
id: DEUDA-V047-004
origen: v0.4.6 Arquitectura Conceptual No Funcional
descripcion:
  Se requería ampliar matrices por acción sensible vinculadas a consentimiento, privacidad, evidencia, portafolio y seguridad local-first.
estado: pagada_documentalmente
pago_documental:
  Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
criterio_triangular:
  consentimiento: cada acción revisa entendimiento, aceptación, pausa y retiro.
  datos_privacidad: cada acción identifica dato, evidencia, reflexión, metadato o visibilidad conceptual.
  seguridad_local_first: cada acción ubica zona, amenaza conceptual y control humano.
observacion:
  La matriz no debe convertirse en backlog funcional, lista de eventos, permisos ni endpoints.
```

---

### 5.5 matriz_ampliada_acciones_sensibles_arquitectura_conceptual

```text
id: DEUDA-V047-005
origen: v0.4.6 Arquitectura Conceptual No Funcional
descripcion:
  La matriz sensible de arquitectura conceptual necesitaba traducción al plano de experiencia no funcional.
estado: pagada_documentalmente
pago_documental:
  Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
criterio_triangular:
  consentimiento: acciones sensibles traducidas a capacidades humanas.
  datos_privacidad: foco en visibilidad, evidencia ficticia y portafolio conceptual.
  seguridad_local_first: amenazas tratadas como conceptuales, no técnicas.
observacion:
  La deuda queda pagada para alcance v0.4.7. Cualquier ampliación técnica queda bloqueada.
```

---

## 6. Deuda generada por documentos v0.4.7

### 6.1 Protocolo de trabajo v0.4.7

```text
id: DEUDA-V047-006
origen: Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
descripcion:
  El protocolo establece la secuencia general, pero no ejecuta el gate final.
estado: transferida_a_documento_posterior
documento_destino:
  Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
riesgo:
  avanzar a fase futura sin evaluación formal.
control:
  ejecutar gate antes de cerrar PR o declarar transición.
```

---

### 6.2 Plan de revisión

```text
id: DEUDA-V047-007
origen: Plan_Revision_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
descripcion:
  El plan define rondas de revisión, pero no crea una guía extensa por roles PH, IT y AT.
estado: vigilada_en_v0_4_7
documento_destino:
  Guia_Revision_PH_IT_AT_Diseno_Experiencia_AI_StoryLab.md
riesgo:
  que los roles queden descritos de forma suficiente para revisión mínima, pero no suficientemente operacional para fases posteriores.
control:
  mantener la guía como documento SDD no funcional y no convertirla en rúbrica de evaluación.
```

---

### 6.3 Mapa de experiencia creativa local-first

```text
id: DEUDA-V047-008
origen: Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md
descripcion:
  El mapa identifica zonas de experiencia, pero no debe convertirse en navegación real.
estado: vigilada_en_v0_4_7
documento_destino:
  Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
riesgo:
  leer zonas conceptuales como pantallas o flujos.
control:
  marcar explícitamente que zona no equivale a UI, ruta, componente ni evento técnico.
```

---

### 6.4 Guía de lenguaje por perfiles

```text
id: DEUDA-V047-009
origen: Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md
descripcion:
  La guía contiene microcopy ficticia, pero existe riesgo de que sea reutilizada como copy final.
estado: vigilada_en_v0_4_7
documento_destino:
  Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
riesgo:
  copy_final_encubierto
control:
  todo ejemplo debe permanecer etiquetado como ficticio, revisable y no aplicable.
```

---

### 6.5 Criterios de interfaz no rígida

```text
id: DEUDA-V047-010
origen: Criterios_Interfaz_No_Rigida_AI_StoryLab.md
descripcion:
  El documento define interfaz como concepto habitable, pero puede confundirse con diseño visual o prototipo.
estado: vigilada_en_v0_4_7
documento_destino:
  Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
riesgo:
  prototipo_disfrazado_de_documento
control:
  sostener separación entre interfaz conceptual, UI real, wireframe y prototipo.
```

---

### 6.6 Escenarios ficticios por edad y contexto

```text
id: DEUDA-V047-011
origen: Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md
descripcion:
  Los escenarios habilitan análisis situado, pero no deben convertirse en actividades reales o pruebas piloto.
estado: vigilada_en_v0_4_7
documento_destino:
  Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
riesgo:
  convertir_escenarios_en_actividades_con_personas
control:
  mantener personajes ficticios, contextos inventados y prohibición de uso con estudiantes reales.
```

---

### 6.7 Matriz de acciones sensibles

```text
id: DEUDA-V047-012
origen: Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
descripcion:
  La matriz organiza acciones sensibles, pero no debe convertirse en backlog, requerimiento funcional ni lista de eventos técnicos.
estado: vigilada_en_v0_4_7
documento_destino:
  Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
riesgo:
  funcionalizacion_de_acciones_sensibles
control:
  mantener cada acción como unidad de revisión conceptual, no como función del sistema.
```

---

## 7. Deuda bloqueada hasta fase futura

### 7.1 criterios_transicion_a_diseno_o_prototipo_futuro

```text
id: DEUDA-V047-013
origen: deuda_heredada_v0_4_6
descripcion:
  Se requieren criterios para discutir una transición futura hacia diseño o prototipo.
estado: bloqueada_hasta_fase_futura
permitido_en_v0_4_7:
  preparar_condiciones_documentales
no_permitido_en_v0_4_7:
  autorizar_diseño_funcional
  autorizar_prototipo
  definir_pantallas
  definir_flujos_ejecutables
documento_relacionado:
  Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
```

---

### 7.2 threat_model_tecnico_etico_futuro

```text
id: DEUDA-V047-014
origen: deuda_heredada_v0_4_6
descripcion:
  Existe deuda futura para un threat model técnico-ético si se autoriza fase posterior.
estado: bloqueada_hasta_fase_futura
permitido_en_v0_4_7:
  registrar_como_deuda
  mantener_amenazas_en_nivel_conceptual
no_permitido_en_v0_4_7:
  cifrado
  permisos
  retencion_tecnica
  sincronizacion
  almacenamiento
  autenticacion
  arquitectura_ejecutable
documento_relacionado:
  Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
```

---

### 7.3 protocolo_investigacion_futura_si_aplica

```text
id: DEUDA-V047-015
origen: deuda_heredada_v0_4_6
descripcion:
  Podría existir una fase futura de investigación, pero no está autorizada en v0.4.7.
estado: bloqueada_hasta_fase_futura
permitido_en_v0_4_7:
  declarar_no_autorizacion
  evitar_datos_reales
  evitar_pruebas_con_personas
no_permitido_en_v0_4_7:
  protocolo_IRB
  consentimiento_investigativo
  instrumentos
  reclutamiento
  analisis_de_datos
  investigacion_con_personas
documento_relacionado:
  Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
```

---

## 8. Matriz consolidada de deuda

| ID | Deuda | Estado | Documento destino o pago | Riesgo principal |
|---|---|---|---|---|
| DEUDA-V047-001 | ejemplos por edad y contexto | pagada documentalmente | Escenarios ficticios | uso como actividad real |
| DEUDA-V047-002 | guías extensas PH IT AT | transferida | Guía PH IT AT | convertir en rúbrica |
| DEUDA-V047-003 | vocabulario controlado | pagada con deuda residual | Guía de lenguaje | glosario no consolidado |
| DEUDA-V047-004 | matrices por acciones sensibles | pagada | Matriz de acciones sensibles | backlog funcional |
| DEUDA-V047-005 | matriz sensible conceptual | pagada | Matriz de acciones sensibles | lectura técnica |
| DEUDA-V047-006 | gate no ejecutado | transferida | Gate de transición | transición prematura |
| DEUDA-V047-007 | revisión PH IT AT ampliada | vigilada | Guía PH IT AT | evaluación encubierta |
| DEUDA-V047-008 | zonas de experiencia | vigilada | Gate | UI encubierta |
| DEUDA-V047-009 | microcopy ficticia | vigilada | Gate | copy final encubierto |
| DEUDA-V047-010 | interfaz no rígida | vigilada | Gate | prototipo encubierto |
| DEUDA-V047-011 | escenarios ficticios | vigilada | Gate | prueba con personas |
| DEUDA-V047-012 | acciones sensibles | vigilada | Gate | funcionalización |
| DEUDA-V047-013 | transición a prototipo futuro | bloqueada | fase futura | autorización prematura |
| DEUDA-V047-014 | threat model técnico futuro | bloqueada | fase futura | arquitectura técnica |
| DEUDA-V047-015 | investigación futura | bloqueada | fase futura | datos reales |

---

## 9. Criterios para cerrar deuda en v0.4.7

Una deuda puede cerrarse en v0.4.7 solo si se paga mediante:

```text
documentacion_SDD
escenarios_ficticios
lenguaje_revisable
matrices_conceptuales
gates_documentales
registro_de_limites
transferencia_simetrica
bitacora
```

No puede cerrarse mediante:

```text
codigo
prototipo
UI_real
prueba_con_personas
datos_reales
formularios
instrumentos_de_investigacion
automatizacion
arquitectura_tecnica
```

---

## 10. Criterios de escalamiento al gate

Una deuda debe escalar al gate si:

```text
[ ] afecta transición de fase;
[ ] puede confundirse con prototipo;
[ ] puede activar datos reales;
[ ] puede activar investigación;
[ ] puede transformar lenguaje ficticio en copy final;
[ ] puede transformar acciones sensibles en funciones;
[ ] puede introducir diseño técnico;
[ ] puede alterar consentimiento, privacidad o seguridad local-first.
```

---

## 11. Deuda pendiente para documentos restantes

Antes del cierre de v0.4.7, todavía deben prepararse o evaluarse:

```text
[ ] Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
[ ] Changelog_PR_v0_4_7_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
[ ] Transferencia_Simetrica_v0_4_7_AI_StoryLab.md
[ ] Cierre_Sesion_v0_4_7_AI_StoryLab.md
[ ] Cierre_Bitacora_Capitan_v0_4_7_AI_StoryLab.md
```

Documento opcional recomendado si la fase lo necesita:

```text
[ ] Guia_Revision_PH_IT_AT_Diseno_Experiencia_AI_StoryLab.md
```

---

## 12. Dictamen inicial

```text
guardian_SDD_constitucional:
  estado: guardarrail_activo
  dictamen: deuda_registrada_sin_activar_implementacion

arquitecto_documental:
  estado: deuda_organizada_por_origen_estado_y_destino
  dictamen: continuar_hacia_gate_documental

programador_humanista_PH:
  estado: agencia_pausa_retiro_preservadas_como_criterios_de_cierre
  dictamen: vigilar_microcopy_y_escenarios_para_no_coaccion

investigador_transdisciplinario_IT:
  estado: investigacion_real_bloqueada
  dictamen: mantener_protocolo_investigacion_como_deuda_futura

artista_transdisciplinario_AT:
  estado: habitabilidad_protegida
  dictamen: vigilar_rigidez_y_productividad_forzada

Bitacora_del_Capitan:
  estado: deuda_cartografiada
  siguiente_marca: preparar_gate_de_transicion_documental
```

---

## 13. Cierre

Este registro conserva las marcas del viaje: lo pagado, lo pendiente, lo que debe vigilarse y lo que todavía no se puede tocar.

La deuda no se esconde bajo cubierta. Se deja visible, con etiqueta, cuerda y boya, para que ninguna fase futura confunda una pregunta abierta con permiso para construir.
