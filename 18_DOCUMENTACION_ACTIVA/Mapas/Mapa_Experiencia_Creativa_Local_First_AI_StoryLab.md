# Mapa de Experiencia Creativa Local-First : AI StoryLab

**Proyecto:** AI StoryLab 1  
**Documento:** `Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md`  
**Fase:** v0.4.7 Diseño de Experiencia No Funcional  
**Subtítulo operativo:** Lenguaje Situado, Escenarios Ficticios y Controles Habitables  
**PR:** #13  
**Estado:** borrador inicial para revisión documental  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-05  

---

## 0. Declaración de alcance

Este documento define un **mapa conceptual de experiencia creativa local-first** para AI StoryLab 1.

No describe pantallas, componentes, navegación real, arquitectura técnica, backend, almacenamiento, permisos, cifrado, sincronización, exportación, analíticas, pruebas con personas ni prototipos.

Su propósito es orientar cómo una persona podría comprender, pausar, retirar, revisar y habitar una experiencia creativa antes de que exista cualquier diseño funcional autorizado.

```text
naturaleza:
  tipo: documentacion_SDD_no_funcional
  fase: v0.4.7
  uso: mapa_conceptual_revisable
  prohibicion: no_convertir_en_UI_flujo_o_prototipo
```

---

## 1. Propósito del mapa

El mapa busca responder una pregunta de diseño documental:

```text
¿Cómo puede describirse una experiencia creativa local-first de forma que preserve agencia humana, privacidad situada y posibilidad de regreso antes de cualquier construcción futura?
```

Este documento organiza:

```text
[ ] zonas conceptuales de experiencia;
[ ] momentos de agencia humana;
[ ] puntos de pausa;
[ ] puntos de retiro;
[ ] relación con evidencia ficticia;
[ ] relación con portafolio conceptual;
[ ] límites de visibilidad;
[ ] amenazas conceptuales;
[ ] controles habitables;
[ ] deuda documental asociada.
```

El resultado esperado no es un recorrido funcional. Es una carta náutica: marca costas, arrecifes y puertos seguros sin construir todavía el muelle.

---

## 2. Guardarraíl constitucional

Este mapa no autoriza:

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

Toda mención a experiencia, evidencia, portafolio, revisión o visibilidad debe entenderse como **conceptual, ficticia y revisable**.

---

## 3. Criterio rector triangular

Cada zona, acción sensible y control habitable debe poder revisarse con la pregunta triangular:

```text
Consentimiento:
  ¿La persona entiende, acepta, puede pausar y puede retirar?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca?

Seguridad local-first:
  ¿En qué zona ocurre, qué amenaza conceptual activa y qué control humano requiere?
```

Si una zona no puede responder esas preguntas, debe quedar marcada como deuda o riesgo, no como diseño autorizado.

---

## 4. Definición operacional de experiencia creativa local-first

Para v0.4.7, **experiencia creativa local-first** significa:

```text
experiencia_creativa_local_first:
  es:
    - una forma conceptual de imaginar creación con agencia humana;
    - una experiencia pensada desde el control local de la persona;
    - una práctica que evita extraer datos, evidencias o reflexiones;
    - una relación revisable entre intención, proceso, evidencia ficticia y portafolio conceptual;
    - un espacio donde pausar, retirar y revisar son capacidades centrales.
  no_es:
    - una aplicación;
    - una pantalla;
    - un flujo operativo;
    - una base de datos;
    - una arquitectura técnica;
    - un sistema de evaluación;
    - una prueba con personas;
    - una investigación con datos reales.
```

---

## 5. Principios de experiencia no funcional

### 5.1 Agencia antes que eficiencia

La experiencia debe priorizar que la persona pueda comprender, decidir, pausar, modificar o retirarse.

```text
criterio:
  si_un_mapa_aumenta_productividad_pero_reduce_agencia:
    resultado: no_aprobado
```

---

### 5.2 Cuidado antes que captura

La experiencia no debe orientarse a extraer evidencia, comportamiento, reflexión o desempeño.

```text
criterio:
  evidencia:
    estado: ficticia_o_conceptual
    prohibicion: captura_real
```

---

### 5.3 Reversibilidad antes que cierre

Toda zona conceptual debe imaginar salida, pausa o retiro.

```text
criterio:
  zona_sin_salida:
    resultado: deuda_o_pausa
```

---

### 5.4 Lenguaje situado antes que instrucción universal

La experiencia no debe hablarle igual a todos los perfiles. Debe reconocer edad, contexto, rol, poder institucional y capacidad de decisión.

```text
perfiles_minimos:
  - estudiante_escuela_superior
  - estudiante_universitario
  - docente
  - investigador
```

---

### 5.5 Habitabilidad antes que flujo rígido

La experiencia debe poder imaginarse como espacio habitable, no como carril único.

```text
interfaz_no_rigida:
  metafora: espacio_con_pausas_y_rutas_alternas
  prohibicion: flujo_obligatorio
```

---

## 6. Zonas conceptuales de experiencia

Este mapa organiza la experiencia en ocho zonas conceptuales.

```text
zonas:
  Z0_umbral_de_entrada
  Z1_orientacion_situada
  Z2_intencion_creativa
  Z3_exploracion_y_juego
  Z4_nombralidad_de_evidencia_ficticia
  Z5_revision_humana
  Z6_portafolio_conceptual
  Z7_cierre_reversible_y_transferencia
```

Estas zonas no son pantallas. No son pasos obligatorios. No son navegación. Son regiones documentales para revisar riesgos, lenguaje y controles humanos.

---

## 7. Zona Z0 : Umbral de entrada

### 7.1 Función conceptual

La zona de umbral marca el momento en que una persona se aproxima a AI StoryLab 1 como posibilidad creativa, antes de aceptar participar en cualquier experiencia.

```text
Z0_umbral_de_entrada:
  funcion: aproximacion_sin_compromiso
  estado_de_la_persona: aun_no_participa
  decision_central: entrar_o_no_entrar
```

### 7.2 Agencia humana

La persona debe poder:

```text
[ ] comprender que la experiencia es opcional;
[ ] saber que puede no continuar;
[ ] distinguir exploración ficticia de participación real;
[ ] hacer preguntas antes de aceptar;
[ ] abandonar sin consecuencia.
```

### 7.3 Pregunta triangular

```text
Consentimiento:
  ¿La persona entiende que todavía no ha aceptado nada?

Datos/privacidad:
  ¿Se evita solicitar información, evidencia o reflexión real?

Seguridad local-first:
  ¿Se mantiene el umbral como zona de no captura y no obligación?
```

### 7.4 Amenazas conceptuales

```text
amenazas:
  - entrada_por_presion_institucional
  - confusion_entre_explorar_y_aceptar
  - lenguaje_que_simula_obligacion
  - invitacion_que_oculta_riesgos
```

### 7.5 Controles habitables

```text
controles:
  - declaracion_de_opcionalidad
  - pausa_antes_de_aceptar
  - explicacion_situada_por_perfil
  - salida_sin_registro_conceptual
```

### 7.6 Límites

No se permite convertir esta zona en onboarding real, formulario, login, registro, captura de datos ni actividad con estudiantes.

---

## 8. Zona Z1 : Orientación situada

### 8.1 Función conceptual

La orientación situada permite que una persona entienda qué tipo de experiencia se imagina, qué límites tiene y qué puede controlar.

```text
Z1_orientacion_situada:
  funcion: comprension_contextual
  foco: lenguaje_claro_por_perfil
  decision_central: entender_antes_de_continuar
```

### 8.2 Agencia humana

La persona debe poder:

```text
[ ] recibir explicación según edad y rol;
[ ] identificar qué es ficticio;
[ ] reconocer qué no se hará;
[ ] solicitar revisión humana conceptual;
[ ] pausar antes de imaginar evidencia o portafolio.
```

### 8.3 Pregunta triangular

```text
Consentimiento:
  ¿La explicación permite aceptar, pausar o retirarse sin presión?

Datos/privacidad:
  ¿Se aclara que no se solicita dato real ni evidencia real?

Seguridad local-first:
  ¿La orientación evita prometer seguridad técnica no diseñada?
```

### 8.4 Amenazas conceptuales

```text
amenazas:
  - lenguaje_demasiado_tecnico
  - lenguaje_infantilizante
  - promesa_de_seguridad_no_autorizada
  - confusion_entre_control_conceptual_y_permiso_tecnico
  - microcopy_final_disfrazada_de_borrador
```

### 8.5 Controles habitables

```text
controles:
  - definiciones_breves
  - explicacion_por_perfil
  - marca_de_ficcion_y_revision
  - declaracion_de_no_implementacion
  - pausa_explicita_antes_de_avanzar
```

### 8.6 Límites

No se permite convertir orientación situada en manual de uso, onboarding real, flujo de aceptación, tutorial funcional ni consentimiento operativo.

---

## 9. Zona Z2 : Intención creativa

### 9.1 Función conceptual

La zona de intención creativa permite imaginar cómo una persona podría nombrar lo que desea explorar, crear o investigar de manera ficticia y situada.

```text
Z2_intencion_creativa:
  funcion: nombrar_proposito_creativo
  foco: deseo_pregunta_interes_o_cuidado
  decision_central: que_quiero_explorar_y_bajo_que_limites
```

### 9.2 Agencia humana

La persona debe poder:

```text
[ ] definir una intención sin convertirla en tarea obligatoria;
[ ] mantener ambigüedad creativa;
[ ] cambiar de intención;
[ ] pausar antes de generar evidencia ficticia;
[ ] retirar una intención conceptual;
[ ] pedir acompañamiento humano.
```

### 9.3 Pregunta triangular

```text
Consentimiento:
  ¿La persona puede nombrar o no nombrar intención sin presión?

Datos/privacidad:
  ¿La intención puede revelar interés, identidad, emoción o contexto sensible?

Seguridad local-first:
  ¿Qué control humano limita interpretación o visibilidad de esa intención?
```

### 9.4 Amenazas conceptuales

```text
amenazas:
  - convertir_intencion_en_objetivo_evaluable
  - forzar_productividad
  - capturar_vulnerabilidad_emocional
  - clasificar_intereses_como_datos
  - inferir_desempeno_desde_intencion
```

### 9.5 Controles habitables

```text
controles:
  - derecho_a_no_definir
  - derecho_a_cambiar
  - derecho_a_borrar_conceptualmente
  - revision_humana_de_sensibilidad
  - lenguaje_de_permiso_no_de_exigencia
```

### 9.6 Límites

No se permite convertir esta zona en prompt productivo con datos reales, formulario, rúbrica, instrumento de evaluación ni mecanismo de perfilamiento.

---

## 10. Zona Z3 : Exploración y juego

### 10.1 Función conceptual

La zona de exploración y juego permite imaginar un espacio de tanteo creativo, prueba simbólica, deriva y composición sin evaluación automática.

```text
Z3_exploracion_y_juego:
  funcion: experimentar_sin_captura
  foco: juego_creativo_y_aprendizaje_ludico
  decision_central: explorar_sin_ser_reducido_a_resultado
```

### 10.2 Agencia humana

La persona debe poder:

```text
[ ] explorar sin producir evidencia obligatoria;
[ ] abandonar una ruta creativa;
[ ] sostener borradores ficticios;
[ ] separar juego de evaluación;
[ ] revisar interpretaciones;
[ ] mantener zonas de no visibilidad.
```

### 10.3 Pregunta triangular

```text
Consentimiento:
  ¿La persona puede jugar, cambiar o detenerse sin penalidad?

Datos/privacidad:
  ¿La exploración podría revelar pensamiento, emoción, identidad o contexto?

Seguridad local-first:
  ¿La zona evita transformar exploración en captura o seguimiento?
```

### 10.4 Amenazas conceptuales

```text
amenazas:
  - ludificacion_coercitiva
  - vigilancia_del_proceso_creativo
  - evaluacion_automatica_encubierta
  - extraccion_de_borradores
  - conversion_de_juego_en_metricas
```

### 10.5 Controles habitables

```text
controles:
  - juego_sin_puntuacion
  - borrador_no_obligatorio
  - pausa_creativa
  - retiro_de_ruta
  - revision_humana_de_interpretacion
  - visibilidad_conceptual_limitada
```

### 10.6 Límites

No se permite definir actividades aplicables con estudiantes, pruebas piloto, scoring, analíticas de comportamiento ni automatización de evaluación.

---

## 11. Zona Z4 : Nombralidad de evidencia ficticia

### 11.1 Función conceptual

La zona de nombralidad de evidencia ficticia permite analizar cómo una persona podría nombrar algo como evidencia sin que exista captura ni almacenamiento real.

```text
Z4_nombralidad_de_evidencia_ficticia:
  funcion: distinguir_objeto_creativo_de_evidencia
  foco: criterio_humano_y_contexto
  decision_central: que_podria_contar_como_evidencia_y_por_que
```

### 11.2 Agencia humana

La persona debe poder:

```text
[ ] decidir si algo se considera evidencia ficticia;
[ ] explicar contexto sin entregar dato real;
[ ] retirar la etiqueta de evidencia;
[ ] cuestionar interpretaciones;
[ ] separar evidencia de evaluación;
[ ] mantener evidencia fuera de portafolio conceptual.
```

### 11.3 Pregunta triangular

```text
Consentimiento:
  ¿La persona acepta nombrar algo como evidencia y puede retirarlo?

Datos/privacidad:
  ¿Qué información sensible podría emerger al llamar algo evidencia?

Seguridad local-first:
  ¿Qué control humano evita captura, visibilidad o interpretación indebida?
```

### 11.4 Amenazas conceptuales

```text
amenazas:
  - evidencia_como_captura
  - evidencia_como_prueba_de_desempeno
  - evidencia_como_objeto_investigable
  - metadatos_inferidos
  - visibilidad_no_deseada
  - permanencia_no_autorizada
```

### 11.5 Controles habitables

```text
controles:
  - nombrar_sin_guardar
  - etiquetar_como_ficticio
  - retirar_etiqueta
  - separar_de_evaluacion
  - revision_humana_del_contexto
  - deuda_si_no_hay_control_claro
```

### 11.6 Límites

No se permite capturar evidencia real, almacenar evidencia, definir retención, exportar, sincronizar, usar rúbricas reales ni crear instrumentos de investigación.

---

## 12. Zona Z5 : Revisión humana

### 12.1 Función conceptual

La zona de revisión humana garantiza que las interpretaciones, decisiones sensibles y transiciones de visibilidad no dependan de automatización.

```text
Z5_revision_humana:
  funcion: deliberar_antes_de_avanzar
  foco: criterio_humano_situado
  decision_central: revisar_antes_de_nominar_compartir_o_cerrar
```

### 12.2 Agencia humana

La persona debe poder:

```text
[ ] pedir revisión humana;
[ ] discrepar de una interpretación;
[ ] corregir lenguaje;
[ ] detener una transición;
[ ] retirar un elemento conceptual;
[ ] transferir duda a deuda documental.
```

### 12.3 Pregunta triangular

```text
Consentimiento:
  ¿La revisión fortalece la decisión de la persona en vez de sustituirla?

Datos/privacidad:
  ¿Qué interpretación, evidencia o visibilidad se está revisando?

Seguridad local-first:
  ¿Qué amenaza conceptual requiere juicio humano antes de continuar?
```

### 12.4 Amenazas conceptuales

```text
amenazas:
  - revision_como_control_institucional
  - autoridad_humana_sin_transparencia
  - automatizacion_disfrazada_de_revision
  - presion_para_aceptar_interpretacion
  - invisibilizacion_de_disenso
```

### 12.5 Controles habitables

```text
controles:
  - derecho_a_disentir
  - derecho_a_reformular
  - pausa_por_incomodidad
  - transferencia_a_deuda
  - lenguaje_de_acompanamiento_no_de_veredicto
```

### 12.6 Límites

No se permite convertir revisión humana en evaluación formal, investigación, calificación, aprobación institucional o flujo operativo.

---

## 13. Zona Z6 : Portafolio conceptual

### 13.1 Función conceptual

La zona de portafolio conceptual permite imaginar cómo una persona podría reunir, ordenar o narrar evidencia ficticia sin crear portafolio real ni almacenamiento.

```text
Z6_portafolio_conceptual:
  funcion: organizar_sentido_sin_almacenamiento
  foco: curaduria_humana_y_narrativa
  decision_central: que_se_incluiria_o_no_en_un_portafolio_futuro
```

### 13.2 Agencia humana

La persona debe poder:

```text
[ ] decidir qué queda fuera;
[ ] cambiar la narrativa;
[ ] retirar elementos;
[ ] limitar visibilidad conceptual;
[ ] distinguir portafolio de evaluación;
[ ] evitar cierre definitivo.
```

### 13.3 Pregunta triangular

```text
Consentimiento:
  ¿La persona acepta incluir algo y puede retirarlo?

Datos/privacidad:
  ¿Qué evidencia, reflexión, metadato o visibilidad se toca?

Seguridad local-first:
  ¿Qué control humano evita permanencia, exposición o uso secundario?
```

### 13.4 Amenazas conceptuales

```text
amenazas:
  - portafolio_como_vigilancia
  - acumulacion_de_evidencia
  - exposicion_de_proceso_creativo
  - narrativa_impuesta
  - permanencia_no_discutida
  - uso_futuro_no_autorizado
```

### 13.5 Controles habitables

```text
controles:
  - inclusion_reversible
  - retiro_conceptual
  - visibilidad_minima
  - narrativa_editable
  - separacion_de_evaluacion
  - deuda_de_retencion_tecnica_futura
```

### 13.6 Límites

No se permite definir almacenamiento real, exportación, sincronización, permisos técnicos, retención ni formatos de portafolio funcional.

---

## 14. Zona Z7 : Cierre reversible y transferencia

### 14.1 Función conceptual

La zona de cierre reversible permite concluir una experiencia conceptual sin convertirla en entrega final, evaluación o dato persistente.

```text
Z7_cierre_reversible_y_transferencia:
  funcion: cerrar_sin_clausurar
  foco: aprendizaje_documental_y_deuda
  decision_central: que_se_aprueba_que_se_retira_y_que_se_transfiere
```

### 14.2 Agencia humana

La persona debe poder:

```text
[ ] revisar lo ocurrido conceptualmente;
[ ] retirar elementos;
[ ] marcar incomodidades;
[ ] conservar ambigüedad;
[ ] transferir deuda;
[ ] negarse a convertir experiencia en evidencia.
```

### 14.3 Pregunta triangular

```text
Consentimiento:
  ¿El cierre permite retirar y no solo confirmar?

Datos/privacidad:
  ¿Qué queda visible, narrado o transferido como deuda?

Seguridad local-first:
  ¿Qué amenaza queda abierta y qué control humano la acompaña?
```

### 14.4 Amenazas conceptuales

```text
amenazas:
  - cierre_como_entrega_obligatoria
  - resumen_automatico
  - inferencia_de_logro
  - transferencia_sin_contexto
  - deuda_invisible
```

### 14.5 Controles habitables

```text
controles:
  - cierre_no_definitivo
  - retiro_antes_de_cierre
  - nota_de_deuda
  - derecho_a_no_resumir
  - revision_humana_final
  - continuidad_documental_no_funcional
```

### 14.6 Límites

No se permite generar reportes reales, analíticas, certificados, calificaciones, exportaciones ni instrumentos de evaluación.

---

## 15. Matriz de zonas y acciones sensibles

| Zona | Acción sensible conceptual | Riesgo principal | Control habitable | Estado permitido |
|---|---|---|---|---|
| Z0 Umbral | Invitar | Presión o confusión | Opcionalidad explícita | Ficticio/revisable |
| Z1 Orientación | Explicar | Lenguaje coercitivo o técnico | Lenguaje situado | Ficticio/revisable |
| Z2 Intención | Nombrar propósito | Perfilamiento o vulnerabilidad | Derecho a no definir | Ficticio/revisable |
| Z3 Exploración | Jugar/derivar | Métrica encubierta | Juego sin puntuación | Ficticio/revisable |
| Z4 Evidencia | Nombrar evidencia | Captura o evaluación | Nombrar sin guardar | Ficticio/revisable |
| Z5 Revisión | Interpretar | Sustitución del juicio humano | Derecho a disentir | Ficticio/revisable |
| Z6 Portafolio | Incluir/retirar | Permanencia o visibilidad | Inclusión reversible | Ficticio/revisable |
| Z7 Cierre | Transferir deuda | Clausura prematura | Cierre no definitivo | Ficticio/revisable |

---

## 16. Matriz triangular por zona

| Zona | Consentimiento | Datos/privacidad | Seguridad local-first |
|---|---|---|---|
| Z0 Umbral | Puede no entrar | No se solicita dato | Zona de no captura |
| Z1 Orientación | Entiende antes de aceptar | Se aclaran límites | No promete técnica no diseñada |
| Z2 Intención | Puede no nombrar | Intención puede ser sensible | Control humano de interpretación |
| Z3 Exploración | Puede jugar o detenerse | Borradores pueden revelar contexto | No seguimiento ni métricas |
| Z4 Evidencia | Puede nombrar o retirar | Evidencia puede exponer proceso | Nombrar sin guardar |
| Z5 Revisión | Puede disentir | Interpretación toca sentido | Juicio humano situado |
| Z6 Portafolio | Puede incluir o retirar | Visibilidad conceptual sensible | Reversibilidad y deuda futura |
| Z7 Cierre | Puede cerrar sin entregar | Transferencia puede fijar narrativa | Cierre reversible |

---

## 17. Límites de visibilidad conceptual

La visibilidad debe tratarse como una condición sensible, no como una configuración técnica.

```text
visibilidad_conceptual:
  niveles_revisables:
    privado_para_la_persona
    compartido_para_revision_humana_ficticia
    incluido_en_portafolio_conceptual
    transferido_como_deuda_documental
  prohibiciones:
    - publicar_realmente
    - exportar
    - compartir_con_personas_reales
    - activar_permisos_tecnicos
    - definir_roles_de_acceso
```

### 17.1 Preguntas de revisión de visibilidad

```text
[ ] ¿Quién podría ver esto en el escenario ficticio?
[ ] ¿La persona entiende esa visibilidad?
[ ] ¿Puede limitarla conceptualmente?
[ ] ¿Puede retirarla?
[ ] ¿La visibilidad genera deuda técnica futura?
[ ] ¿La visibilidad podría convertirse en vigilancia?
```

---

## 18. Evidencia ficticia y portafolio conceptual

### 18.1 Evidencia ficticia

```text
evidencia_ficticia:
  definicion: objeto_o_reflexion_inventada_para_revisar_riesgos
  puede_ser:
    - fragmento_creativo_inventado
    - descripcion_simulada
    - reflexion_no_real
    - decision_conceptual
    - ejemplo_de_lenguaje
  no_puede_ser:
    - trabajo_real_de_estudiante
    - reflexion_real
    - dato_identificable
    - muestra_de_investigacion
    - evidencia_para_evaluacion
```

### 18.2 Portafolio conceptual

```text
portafolio_conceptual:
  definicion: agrupacion_ficticia_para_discutir_curaduria_agencia_y_visibilidad
  puede_revisar:
    - inclusion
    - exclusion
    - retiro
    - narrativa
    - visibilidad
    - deuda
  no_puede_definir:
    - almacenamiento
    - exportacion
    - permisos
    - sincronizacion
    - formatos_finales
    - retencion
```

---

## 19. Controles habitables transversales

Los controles habitables son capacidades humanas conceptuales que deben acompañar toda zona.

```text
controles_transversales:
  pausa:
    descripcion: posibilidad_de_detenerse_sin_penalidad
  retiro:
    descripcion: posibilidad_de_sacar_un_elemento_de_la_experiencia_conceptual
  revision:
    descripcion: posibilidad_de_reconsiderar_lenguaje_interpretacion_o_visibilidad
  no_participacion:
    descripcion: posibilidad_de_no_entrar_o_no_continuar
  disentimiento:
    descripcion: posibilidad_de_cuestionar_una_interpretacion
  deuda:
    descripcion: posibilidad_de_marcar_lo_no_resuelto_sin_forzarlo
```

---

## 20. Señales de deriva prohibida

Este mapa debe pausarse si empieza a convertirse en:

```text
[!] flujo de usuario;
[!] navegación de producto;
[!] arquitectura de información funcional;
[!] wireframe textual;
[!] especificación de componente;
[!] modelo de permisos;
[!] diseño de almacenamiento;
[!] onboarding;
[!] actividad educativa aplicable;
[!] protocolo de prueba;
[!] instrumento de investigación;
[!] rúbrica;
[!] sistema de evaluación.
```

---

## 21. Lenguaje permitido y lenguaje de riesgo

### 21.1 Lenguaje permitido

```text
permitido:
  - podria
  - conceptual
  - ficticio
  - revisable
  - zona
  - capacidad_humana
  - pausa
  - retiro
  - deuda
  - visibilidad_conceptual
  - control_habitable
```

### 21.2 Lenguaje de riesgo

```text
riesgo_si_aparece_como_accion:
  - guardar
  - subir
  - enviar
  - sincronizar
  - exportar
  - publicar
  - autenticar
  - registrar
  - analizar
  - evaluar
  - puntuar
  - generar_reporte
  - implementar
```

Estos términos solo pueden aparecer como límites, riesgos o deuda futura.

---

## 22. Revisión por perfiles

### 22.1 Estudiante de escuela superior

La experiencia debe cuidar asimetría de poder, edad, consentimiento situado y lenguaje no coercitivo.

```text
riesgos:
  - sentir_obligacion_de_participar
  - no_distinguir_ficcion_de_uso_real
  - revelar_contexto_personal
  - asumir_que_creatividad_sera_calificada

controles:
  - lenguaje_claro_y_no_infantilizante
  - opcion_de_no_participar
  - pausa_visible_en_el_lenguaje
  - explicacion_de_no_evaluacion
```

### 22.2 Estudiante universitario

La experiencia debe cuidar autonomía, autoría, privacidad creativa y no extracción de proceso.

```text
riesgos:
  - convertir_exploracion_en_desempeno
  - presion_por_productividad
  - confusion_con_portafolio_evaluable
  - uso_secundario_de_reflexiones

controles:
  - autorregulacion_de_visibilidad
  - retiro_de_evidencia_ficticia
  - derecho_a_reformular_intencion
  - separacion_de_evaluacion
```

### 22.3 Docente

La experiencia debe cuidar que el docente no sea convertido en supervisor de captura ni en ejecutor de evaluación automática.

```text
riesgos:
  - traducir_mapa_en_actividad_real
  - usar_escenarios_como_prueba_piloto
  - convertir_evidencia_en_rubrica
  - introducir_vigilancia_pedagogica

controles:
  - marco_no_funcional_explicito
  - distincion_entre_escenario_y_actividad
  - pausa_documental
  - transferencia_de_deuda
```

### 22.4 Investigador

La experiencia debe cuidar que el investigador no active investigación, datos reales ni instrumentos de análisis.

```text
riesgos:
  - tratar_escenarios_como_datos
  - inferir_comportamiento
  - diseñar_instrumentos
  - preparar_recoleccion_real

controles:
  - prohibicion_de_datos_reales
  - ficcion_explicitada
  - deuda_investigativa_futura
  - revision_etica_documental
```

---

## 23. Matriz de revisión por perfiles

| Perfil | Pregunta de agencia | Riesgo de privacidad | Control humano mínimo |
|---|---|---|---|
| Estudiante escuela superior | ¿Puede no participar sin presión? | Revelar identidad o contexto | Lenguaje no coercitivo y pausa |
| Estudiante universitario | ¿Puede reformular intención? | Exposición del proceso creativo | Retiro y revisión humana |
| Docente | ¿Puede evitar convertir mapa en actividad? | Captura pedagógica indirecta | Distinción escenario/actividad |
| Investigador | ¿Puede no activar estudio? | Tratamiento de ficción como dato | Bloqueo de investigación real |

---

## 24. Relación con documentos posteriores

Este mapa prepara, pero no sustituye, los documentos siguientes:

```text
Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md:
  recibira:
    - necesidades de lenguaje situado por zona y perfil

Criterios_Interfaz_No_Rigida_AI_StoryLab.md:
  recibira:
    - principios de habitabilidad y no rigidez

Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md:
  recibira:
    - zonas para construir casos inventados

Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md:
  recibira:
    - acciones sensibles identificadas en cada zona

Registro_Deuda_Diseno_Experiencia_No_Funcional_AI_StoryLab.md:
  recibira:
    - deudas no resueltas sobre visibilidad, portafolio, evidencia y controles
```

---

## 25. Deuda detectada por este mapa

```text
deuda_v0_4_7:
  lenguaje_por_zona_y_perfil:
    destino: Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md
    estado: pendiente

  criterios_habitabilidad_interfaz_no_rigida:
    destino: Criterios_Interfaz_No_Rigida_AI_StoryLab.md
    estado: pendiente

  ejemplos_ficticios_por_edad_y_contexto:
    destino: Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md
    estado: pendiente

  matriz_acciones_sensibles_ampliada:
    destino: Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
    estado: pendiente

  visibilidad_retencion_y_permisos_tecnicos:
    destino: fase_futura_no_autorizada
    estado: no_activar_en_v0_4_7
```

---

## 26. Criterios de aprobación del mapa

Este documento puede aprobarse si:

```text
[ ] mantiene carácter no funcional;
[ ] no define pantallas ni flujos reales;
[ ] responde la pregunta triangular;
[ ] define zonas conceptuales;
[ ] identifica momentos de agencia;
[ ] identifica puntos de pausa y retiro;
[ ] trata evidencia como ficticia;
[ ] trata portafolio como conceptual;
[ ] define límites de visibilidad;
[ ] identifica amenazas conceptuales;
[ ] transfiere deuda sin activarla;
[ ] prepara documentos posteriores sin sustituirlos.
```

---

## 27. Ubicación documental propuesta

```text
18_DOCUMENTACION_ACTIVA/Mapas/Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md
```

Si el cartapacio `Mapas/` no existe, puede crearse como ubicación documental semántica para mapas conceptuales de la fase v0.4.7.

---

## 28. Commit recomendado

Una vez aprobado explícitamente:

```bash
git add \
  18_DOCUMENTACION_ACTIVA/Mapas/Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md

git commit -m "docs: agregar mapa de experiencia creativa local-first"
```

No usar `git add .`.

---

## 29. Dictamen inicial por roles

```text
guardian_SDD_constitucional:
  estado: guardarrail_activo
  dictamen: mapa_no_funcional_sin_UI_sin_prototipo

arquitecto_documental:
  estado: zonas_conceptuales_definidas
  dictamen: documento_prepara_guia_lenguaje_criterios_interfaz_escenarios_y_matriz

programador_humanista_PH:
  estado: agencia_pausa_retiro_y_disenso_integrados
  dictamen: experiencia_orientada_a_capacidad_humana

investigador_transdisciplinario_IT:
  estado: datos_reales_e_investigacion_bloqueados
  dictamen: evidencia_y_portafolio_permanecen_ficticios_conceptuales

artista_transdisciplinario_AT:
  estado: juego_deriva_y_habitabilidad_protegidos
  dictamen: mapa_evade_flujo_rigido_y_productividad_extractiva

Bitacora_del_Capitan:
  estado: mapa_preparado_para_revision
  siguiente_marca: aprobacion_explicita_antes_de_commit_y_antes_de_guia_lenguaje
```

---

## 30. Cierre

Este mapa no diseña una interfaz. Dibuja una costa conceptual.

Marca dónde una persona podría entrar, orientarse, imaginar, jugar, nombrar evidencia ficticia, pedir revisión, componer un portafolio conceptual y cerrar sin quedar atrapada por la ruta.

La navegación sigue siendo documental. La brújula permanece en agencia humana, privacidad situada y seguridad local-first como principio, no como arquitectura técnica ejecutable.
