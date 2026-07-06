# Matriz de Acciones Sensibles de Experiencia No Funcional : AI StoryLab

**Proyecto:** AI StoryLab 1  
**Documento:** `Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md`  
**Fase:** v0.4.7 Diseño de Experiencia No Funcional  
**Subtítulo operativo:** Lenguaje Situado, Escenarios Ficticios y Controles Habitables  
**PR:** #13  
**Estado:** borrador inicial para revisión documental  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-05  

---

## 1. Propósito

Este documento define una matriz de acciones sensibles para revisar la experiencia no funcional de AI StoryLab 1.

Su función es identificar acciones conceptuales que, incluso en escenarios ficticios, tocan consentimiento, privacidad, evidencia, portafolio, visibilidad, interpretación o seguridad local-first.

Esta matriz no describe funciones de sistema, eventos técnicos, componentes, pantallas, permisos, almacenamiento, sincronización ni automatización. Es una herramienta documental para revisar lenguaje, escenarios y controles habitables antes de cualquier diseño funcional futuro.

```text
proposito:
  identificar_acciones_sensibles
  revisar_consentimiento
  revisar_datos_privacidad
  revisar_seguridad_local_first
  sostener_agencia_humana
  preparar_gates_documentales
  registrar_deuda_vigilada
```

---

## 2. Guardarraíl constitucional

Esta matriz no autoriza:

```text
[!] implementación funcional;
[!] código de aplicación;
[!] UI real;
[!] pantallas;
[!] wireframes;
[!] prototipos;
[!] flujos ejecutables;
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

Las acciones descritas son unidades de revisión documental. No son comandos, botones, endpoints, eventos, roles técnicos ni requisitos funcionales.

---

## 3. Criterio rector

Cada acción sensible debe revisarse con la pregunta triangular:

```text
Consentimiento:
  ¿La persona entiende, acepta, puede pausar y puede retirar?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca?

Seguridad local-first:
  ¿En qué zona ocurre, qué amenaza conceptual activa y qué control humano requiere?
```

Una acción sensible no queda validada hasta que las tres dimensiones estén respondidas o la deuda quede registrada.

---

## 4. Definición de acción sensible

Una acción sensible es cualquier operación conceptual que pueda cambiar cómo una persona:

```text
entiende_su_participacion
acepta_o_rechaza_una_invitacion
pausa_su_proceso
retira_una_pieza_o_reflexion
nombra_algo_como_evidencia
incluye_o_excluye_algo_de_un_portafolio
limita_visibilidad
recibe_una_interpretacion
pide_revision_humana
transfiere_deuda_documental
```

En v0.4.7, estas acciones se revisan solo como lenguaje, escenarios ficticios y controles habitables conceptuales.

---

## 5. Escala de sensibilidad documental

Cada acción puede clasificarse con una escala de sensibilidad:

```text
baja:
  toca orientacion general sin tocar evidencia, reflexion o visibilidad.

media:
  toca comprension, consentimiento, pausa o lenguaje situado.

alta:
  toca evidencia ficticia, portafolio conceptual, visibilidad o interpretacion.

critica:
  podria confundirse con datos reales, evaluacion, investigacion, vigilancia o implementacion.
```

La sensibilidad crítica no prohíbe la discusión documental, pero exige pausa, advertencia explícita o deuda.

---

## 6. Zonas conceptuales de experiencia

La matriz usa zonas conceptuales, no pantallas ni flujos:

```text
zona_invitacion:
  descripcion: lugar conceptual donde una persona entiende si desea participar.

zona_exploracion_privada:
  descripcion: espacio conceptual para pensar, jugar, escribir o imaginar sin visibilidad obligatoria.

zona_revision_humana:
  descripcion: espacio conceptual donde una persona puede pedir mirada, conversación o aclaración.

zona_evidencia_ficticia:
  descripcion: espacio conceptual donde algo puede nombrarse provisionalmente como evidencia ficticia.

zona_portafolio_conceptual:
  descripcion: espacio conceptual donde una selección puede formar parte de un portafolio no real.

zona_visibilidad_ficticia:
  descripcion: espacio conceptual donde se revisa quién podría ver algo en un escenario inventado.

zona_interpretacion:
  descripcion: espacio conceptual donde una reflexión o pieza puede ser leída, discutida o cuestionada.

zona_deuda:
  descripcion: espacio documental para registrar lo que no debe resolverse todavía.
```

---

## 7. Matriz principal de acciones sensibles

| Acción sensible | Sensibilidad | Zona conceptual | Consentimiento | Datos/privacidad | Seguridad local-first | Control habitable conceptual | Riesgo a evitar | Estado v0.4.7 |
|---|---:|---|---|---|---|---|---|---|
| Invitar | Media | zona_invitacion | La persona debe entender que puede aceptar, pausar o no participar. | Puede tocar disponibilidad, interés o relación de autoridad. | Amenaza: invitación coercitiva. Control: lenguaje no obligatorio. | Invitación reversible y no punitiva. | Consentimiento implícito o presión institucional. | permitido_documental |
| Explicar | Media | zona_invitacion | La explicación debe ser comprensible y revisable. | Puede revelar qué se espera de la persona. | Amenaza: claridad aparente que oculta consecuencias. Control: explicación situada. | Explicación en capas, sin obligación de continuar. | Lenguaje técnico que reduce agencia. | permitido_documental |
| Pausar | Alta | zona_exploracion_privada | La persona puede detenerse sin justificar. | Puede tocar ritmo, cansancio, duda o incomodidad. | Amenaza: interpretar pausa como dato de desempeño. Control: pausa no evaluativa. | Pausa como derecho conceptual. | Pausa convertida en señal de bajo rendimiento. | permitido_documental |
| Retirar | Alta | zona_exploracion_privada | La persona puede retirar una pieza, reflexión o participación ficticia. | Toca evidencia, autoría, visibilidad o identidad. | Amenaza: retiro bloqueado o condicionado. Control: reversibilidad humana. | Retiro sin penalización conceptual. | Retiro tratado como anomalía. | permitido_documental |
| Nombrar evidencia ficticia | Alta | zona_evidencia_ficticia | La persona debe entender qué significa llamar algo evidencia. | Toca pieza, reflexión, proceso, metadato o sentido atribuido. | Amenaza: evidencia ficticia tratada como evidencia real. Control: etiquetado explícito. | Nombramiento provisional y revisable. | Convertir reflexión en dato. | permitido_documental_con_cautela |
| Contextualizar evidencia ficticia | Alta | zona_evidencia_ficticia | La persona puede matizar qué representa y qué no representa. | Toca interpretación, contexto, límites y visibilidad. | Amenaza: contexto usado para inferir más de lo autorizado. Control: revisión humana. | Contextualización mínima y situada. | Sobreinterpretación. | permitido_documental_con_cautela |
| Incluir en portafolio conceptual | Alta | zona_portafolio_conceptual | La persona debe aceptar la inclusión conceptual. | Toca selección, trayectoria, autoría y visibilidad. | Amenaza: portafolio como expediente totalizante. Control: selección reversible. | Inclusión revisable y parcial. | Portafolio como depósito total. | permitido_documental_con_cautela |
| Retirar del portafolio conceptual | Alta | zona_portafolio_conceptual | La persona puede retirar sin justificar. | Toca historial, selección, reputación o interpretación. | Amenaza: retiro bloqueado por lógica de completitud. Control: agencia sobre selección. | Retiro reversible y no punitivo. | Fijar una versión única de la persona. | permitido_documental |
| Compartir visibilidad ficticia | Crítica | zona_visibilidad_ficticia | La persona entiende quién podría ver algo en el escenario ficticio. | Toca exposición, autoría, grupo, institución o público. | Amenaza: visibilidad prematura o indebida. Control: visibilidad limitada conceptualmente. | Visibilidad separable, gradual y reversible. | Publicación real, presión grupal o exposición. | permitido_solo_como_ficcion |
| Interpretar reflexión ficticia | Crítica | zona_interpretacion | La persona puede cuestionar, rechazar o pedir otra lectura. | Toca intención, emoción, identidad o sentido creativo. | Amenaza: interpretación convertida en evaluación o investigación. Control: revisión humana y no automatización. | Interpretación disputable. | Evaluación encubierta o inferencia psicológica. | permitido_solo_como_ficcion |
| Pedir revisión humana | Alta | zona_revision_humana | La persona puede solicitar revisión sin perder control. | Puede tocar duda, desacuerdo o necesidad de apoyo. | Amenaza: revisión convertida en vigilancia. Control: revisión dialógica. | Revisión solicitada, no impuesta. | Supervisión no consentida. | permitido_documental |
| Transferir deuda | Media | zona_deuda | La persona o equipo entiende que algo no se resuelve todavía. | Puede tocar límites futuros de privacidad o evidencia. | Amenaza: deuda usada como permiso implícito. Control: bloqueo explícito de implementación. | Deuda visible y no activada. | Resolver por atajo técnico. | permitido_documental |
```

---

## 8. Acciones sensibles por perfil

### 8.1 Estudiante de escuela superior

```text
acciones_prioritarias:
  - invitar
  - explicar
  - pausar
  - retirar
  - limitar_visibilidad_ficticia
  - pedir_revision_humana

riesgos_principales:
  - presion_por_autoridad
  - exposicion_prematura
  - lenguaje_no_comprensible
  - dificultad_para_retirarse
  - confundir_juego_con_obligacion

controles_habitables:
  - permiso_de_no_participar
  - pausa_sin_explicacion
  - retiro_sin_penalizacion
  - lenguaje_breve_y_cuidadoso
  - revision_humana_no_evaluativa
```

### 8.2 Estudiante universitario

```text
acciones_prioritarias:
  - nombrar_evidencia_ficticia
  - contextualizar_evidencia_ficticia
  - incluir_en_portafolio_conceptual
  - retirar_del_portafolio_conceptual
  - interpretar_reflexion_ficticia
  - pedir_revision_humana

riesgos_principales:
  - evaluacion_encubierta
  - visibilidad_academica_no_deseada
  - sobreinterpretacion_de_reflexiones
  - portafolio_como_expediente

controles_habitables:
  - consentimiento_por_pieza
  - disputa_de_interpretacion
  - seleccion_reversible
  - claridad_sobre_ficcion_documental
```

### 8.3 Docente

```text
acciones_prioritarias:
  - explicar
  - revisar_evidencia_ficticia
  - contextualizar_evidencia_ficticia
  - pedir_revision_humana
  - transferir_deuda

riesgos_principales:
  - vigilancia_pedagogica
  - presion_de_completitud
  - evaluar_sin_autorizacion
  - convertir_acompanamiento_en_monitoreo

controles_habitables:
  - acompanamiento_no_automatico
  - lenguaje_no_punitivo
  - revision_dialógica
  - separacion_entre_cuidado_y_evaluacion
```

### 8.4 Investigador

```text
acciones_prioritarias:
  - interpretar_reflexion_ficticia
  - contextualizar_evidencia_ficticia
  - compartir_visibilidad_ficticia
  - transferir_deuda

riesgos_principales:
  - investigacion_implicita
  - datos_reales_por_deslizamiento
  - generalizacion_desde_escenarios_ficticios
  - convertir_patrones_documentales_en_resultados

controles_habitables:
  - bloqueo_de_investigacion_real
  - etiquetado_de_ficcion_documental
  - deuda_futura_explicita
  - no_inferencia_sobre_personas_reales
```

---

## 9. Matriz de preguntas por acción

| Acción | Pregunta de consentimiento | Pregunta de privacidad | Pregunta local-first |
|---|---|---|---|
| Invitar | ¿La invitación permite decir no? | ¿La respuesta revela interés o disponibilidad? | ¿La invitación evita presión institucional? |
| Explicar | ¿La persona entiende sin aceptar automáticamente? | ¿La explicación revela expectativas sensibles? | ¿La explicación nombra límites antes de avanzar? |
| Pausar | ¿La pausa está disponible sin castigo? | ¿La pausa evita convertirse en dato? | ¿La pausa queda bajo control humano? |
| Retirar | ¿El retiro es posible y comprensible? | ¿Qué deja de ser visible o interpretable? | ¿Qué control evita retención conceptual? |
| Nombrar evidencia ficticia | ¿La persona acepta ese nombre? | ¿Qué sentido personal queda asociado? | ¿Cómo se marca que no es evidencia real? |
| Contextualizar evidencia ficticia | ¿La persona puede matizar? | ¿El contexto revela más de lo necesario? | ¿Quién controla la interpretación? |
| Incluir en portafolio conceptual | ¿La persona decide incluir? | ¿Qué trayectoria se sugiere? | ¿Cómo se conserva reversibilidad? |
| Retirar del portafolio conceptual | ¿La persona puede retirar sin justificar? | ¿Qué interpretación debe cesar? | ¿Qué deuda queda si el retiro no está claro? |
| Compartir visibilidad ficticia | ¿La persona entiende la visibilidad imaginada? | ¿Qué exposición se simula? | ¿Qué amenaza conceptual activa la visibilidad? |
| Interpretar reflexión ficticia | ¿La persona puede disputar la lectura? | ¿La lectura toca identidad o emoción? | ¿Qué impide evaluación automática? |
| Pedir revisión humana | ¿La revisión fue solicitada? | ¿Qué duda o desacuerdo revela? | ¿Qué evita vigilancia? |
| Transferir deuda | ¿La deuda se entiende como no resuelta? | ¿Qué riesgo futuro queda marcado? | ¿Qué impide activarla prematuramente? |

---

## 10. Lenguaje permitido y lenguaje de alerta

### 10.1 Lenguaje permitido como microcopy ficticia

```text
Puedes pausar aquí.
Esto puede quedarse como borrador ficticio.
Antes de nombrarlo como evidencia, puedes revisar qué significa.
Puedes retirar esta pieza del portafolio conceptual.
Esta interpretación no define tu proceso.
Puedes pedir otra mirada humana.
Esta escena es ficticia y no representa datos reales.
```

### 10.2 Lenguaje de alerta

```text
Sube tu evidencia.
Guarda tu reflexión.
Acepta para continuar.
Comparte con tu grupo.
Tu desempeño será analizado.
Esta evidencia será parte de tu historial.
El sistema evaluará tu proceso.
Publica tu portafolio.
```

El lenguaje de alerta puede estudiarse como riesgo, pero no debe autorizarse como microcopy de v0.4.7.

---

## 11. Controles habitables asociados

Los controles habitables son capacidades humanas conceptuales:

```text
control_pausa:
  descripcion: la persona puede detener la acción sin explicar.

control_retiro:
  descripcion: la persona puede retirar pieza, reflexión o visibilidad ficticia.

control_revision_previa:
  descripcion: la persona puede revisar antes de nombrar, incluir o compartir.

control_visibilidad_limitada:
  descripcion: la persona puede limitar quién ve algo dentro del escenario ficticio.

control_disputa_interpretativa:
  descripcion: la persona puede cuestionar una lectura.

control_no_participacion:
  descripcion: la persona puede no entrar en la acción sensible.

control_deuda:
  descripcion: el equipo puede marcar algo como no resuelto y bloquear activación prematura.
```

Estos controles no son permisos técnicos, roles, cifrado, autenticación ni configuración ejecutable.

---

## 12. Relación con documentos previos

```text
Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md:
  aporta: guardarrail, secuencia y modo de trabajo.

Plan_Revision_Diseno_Experiencia_No_Funcional_AI_StoryLab.md:
  aporta: rondas, estados y criterios de pausa.

Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md:
  aporta: zonas conceptuales de experiencia.

Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md:
  aporta: lenguaje situado y microcopy ficticia.

Criterios_Interfaz_No_Rigida_AI_StoryLab.md:
  aporta: habitabilidad, agencia y no rigidez.

Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md:
  aporta: casos inventados que activan acciones sensibles.
```

---

## 13. Deuda que esta matriz ayuda a pagar

```text
matrices_ampliadas_por_spec_y_acciones_sensibles:
  estado: pago_documental_parcial
  salida: matriz_conceptual_de_acciones_sensibles

matriz_ampliada_acciones_sensibles_arquitectura_conceptual:
  estado: pago_documental_parcial
  salida: acciones_revisadas_por_consentimiento_privacidad_local_first

vocabulario_controlado_arquitectura_conceptual:
  estado: apoyo_documental
  salida: acciones_y_controles_nombrados_de_forma_consistente
```

---

## 14. Deuda que no debe activarse

```text
threat_model_tecnico_etico_futuro:
  no_activar: esta matriz solo revisa amenazas conceptuales.

criterios_transicion_a_diseno_o_prototipo_futuro:
  no_pagar_completamente: solo prepara condiciones documentales.

protocolo_investigacion_futura_si_aplica:
  no_activar: no hay personas reales ni datos reales.
```

---

## 15. Criterios de pausa documental

Pausar si la matriz empieza a transformarse en:

```text
lista_de_requisitos_funcionales
lista_de_eventos_de_UI
modelo_de_permisos
modelo_de_datos
flujo_de_backend
sistema_de_roles
protocolo_de_prueba
instrumento_de_evaluacion
instrumento_de_investigacion
checklist_para_uso_real
```

Pausar también si una acción sensible se redacta como mandato operativo:

```text
guardar
subir
capturar
sincronizar
exportar
publicar
autenticar
evaluar
puntuar
analizar_comportamiento
```

---

## 16. Criterios de aprobación

Este documento puede aprobarse si:

```text
[ ] las acciones se mantienen conceptuales;
[ ] no se convierten en funciones;
[ ] no se definen pantallas ni flujos;
[ ] cada acción responde la pregunta triangular;
[ ] se protege pausa y retiro;
[ ] se distingue evidencia ficticia de evidencia real;
[ ] se bloquea investigación implícita;
[ ] se bloquea evaluación automática;
[ ] se registra deuda sin activarla;
[ ] se mantiene la secuencia v0.4.7.
```

---

## 17. Ubicación documental propuesta

```text
18_DOCUMENTACION_ACTIVA/Matrices/Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
```

---

## 18. Relación con el próximo documento

Una vez aprobada esta matriz, el siguiente documento recomendado será:

```text
Registro_Deuda_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
```

Ese documento deberá consolidar deuda heredada, deuda pagada parcialmente y deuda nueva detectada durante v0.4.7.

No deberá activar implementación, threat model técnico, investigación real, prototipo ni transición funcional.

---

## 19. Dictamen inicial

```text
guardian_SDD_constitucional:
  estado: guardarrail_activo
  dictamen: matriz_no_funcional_de_revision_conceptual

arquitecto_documental:
  estado: matriz_ubicada_en_secuencia
  dictamen: conecta_escenarios_lenguaje_mapa_y_deuda

programador_humanista_PH:
  estado: agencia_pausa_retiro_priorizados
  dictamen: controles_habitables_no_tecnicos

investigador_transdisciplinario_IT:
  estado: datos_reales_e_investigacion_bloqueados
  dictamen: acciones_no_empiricas_no_evaluativas

artista_transdisciplinario_AT:
  estado: experiencia_no_reducida_a_flujo
  dictamen: proteger_apertura_creativa_y_expresiva

Bitacora_del_Capitan:
  estado: acciones_sensibles_cartografiadas
  siguiente_marca: registro_deuda_diseno_experiencia_no_funcional
```

---

## 20. Cierre

Esta matriz funciona como carta náutica de zonas delicadas. No marca botones ni rutas obligatorias. Marca corrientes: dónde una invitación puede volverse presión, dónde una pausa puede ser malinterpretada, dónde una reflexión ficticia puede comenzar a parecer dato y dónde un portafolio conceptual puede endurecerse como expediente.

La revisión de v0.4.7 debe mantener esas corrientes visibles antes de cualquier travesía futura.
