# Protocolo de Trabajo : Diseño de Experiencia No Funcional AI StoryLab

**Proyecto:** AI StoryLab 1  
**Documento:** Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md  
**Fase:** v0.4.7 Diseño de Experiencia No Funcional  
**Subtítulo operativo:** Lenguaje Situado, Escenarios Ficticios y Controles Habitables  
**Origen:** Post-merge PR #12, cierre de v0.4.6 Arquitectura Conceptual No Funcional  
**Rama documental propuesta:** `docs/v0.4.7-diseno-experiencia-no-funcional`  
**Ruta recomendada:** `18_DOCUMENTACION_ACTIVA/Protocolos/Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md`  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Estado:** propuesta inicial para revisión documental  
**Fecha:** 2026-07-05  

---

## 1. Dictamen de activación

La fase **v0.4.7 Diseño de Experiencia No Funcional** inicia después del merge de **PR #12**, que cerró y consolidó la fase **v0.4.6 Arquitectura Conceptual No Funcional**.

Esta fase no construye experiencia funcional. Su función es preparar, mediante documentación SDD, el modo en que una persona podría comprender, pausar, retirar, revisar y habitar la experiencia futura sin perder agencia, privacidad ni posibilidad de retorno.

```text
estado_heredado:
  PR_12: merged
  fase_cerrada: v0.4.6_arquitectura_conceptual_no_funcional
  fase_activada: v0.4.7_diseno_experiencia_no_funcional
  modo: documental_SDD
  implementacion: no_autorizada
  prototipo: no_autorizado
  datos_reales: no_autorizados
```

---

## 2. Propósito del protocolo

Este protocolo establece el modo de trabajo para v0.4.7. Su propósito es ordenar la travesía documental antes de producir documentos sustantivos de experiencia no funcional.

Debe servir para:

```text
[✓] mantener continuidad con PR #12;
[✓] activar el trabajo documento por documento;
[✓] preservar el guardarraíl no funcional;
[✓] coordinar los roles documentales;
[✓] aplicar la pregunta triangular en cada decisión;
[✓] distinguir lenguaje ficticio de copy final;
[✓] distinguir escenarios ficticios de pruebas con personas;
[✓] registrar deuda sin resolverla por implementación;
[✓] preparar gates documentales de revisión.
```

No debe servir para:

```text
[!] diseñar pantallas reales;
[!] definir UI funcional;
[!] crear wireframes;
[!] crear prototipos;
[!] producir onboarding real;
[!] escribir copy final de producto;
[!] activar pruebas con personas;
[!] capturar datos reales;
[!] definir arquitectura técnica;
[!] introducir backend, cloud, autenticación, analíticas o IA externa por defecto.
```

---

## 3. Guardarraíl constitucional de v0.4.7

Durante v0.4.7 queda prohibido autorizar, proponer o preparar como acción real:

```text
implementación funcional
código de aplicación
UI real
backend
cloud
autenticación
analíticas
IA externa por defecto
datos reales
captura de evidencia real
almacenamiento de evidencia real
cifrado, permisos o retención técnica
sincronización
respaldo real
exportación real
automatización funcional
pruebas con personas
evaluación automática
investigación con datos reales
arquitectura técnica ejecutable
prototipo
```

Estos temas pueden aparecer únicamente como:

```text
[✓] límite explícito;
[✓] riesgo conceptual;
[✓] deuda futura;
[✓] condición bloqueada;
[✓] materia para gate documental posterior.
```

---

## 4. Alcance autorizado

v0.4.7 puede producir documentación SDD sobre:

```text
mapas de experiencia conceptual
microcopy ficticia y revisable
escenarios ficticios por edad y contexto
guías de lenguaje situado
criterios de interfaz no rígida
controles habitables conceptuales
accesibilidad expresiva
matrices de acciones sensibles
gates documentales
deuda vigilada
bitácoras
```

La regla de oro es:

```text
Todo material debe poder revisarse sin convertirse en producto, prueba, instrumento, pantalla ni flujo ejecutable.
```

---

## 5. Criterio rector: pregunta triangular

Toda decisión documental de v0.4.7 debe pasar por la siguiente pregunta triangular:

```text
Consentimiento:
  ¿La persona entiende, acepta, puede pausar y puede retirar?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca?

Seguridad local-first:
  ¿En qué zona ocurre, qué amenaza conceptual activa y qué control humano requiere?
```

Ningún documento de v0.4.7 debe avanzar si no puede responder esta pregunta sin recurrir a implementación funcional, datos reales o pruebas con personas.

---

## 6. Roles operativos de la sesión

### 6.1 guardian_SDD_constitucional

Responsabilidades:

```text
[ ] verificar que el trabajo permanezca no funcional;
[ ] bloquear deriva hacia prototipo, UI real o arquitectura técnica;
[ ] exigir que cada documento declare alcance, límites y prohibiciones;
[ ] señalar deuda cuando una decisión no pueda resolverse documentalmente.
```

### 6.2 arquitecto_documental

Responsabilidades:

```text
[ ] organizar la secuencia documental;
[ ] proponer rutas de cartapacio;
[ ] mantener coherencia con PR #12 y el paquete v0.4.7 v2;
[ ] asegurar que cada documento prepare el siguiente sin adelantarlo indebidamente.
```

### 6.3 programador_humanista_PH

Responsabilidades:

```text
[ ] revisar agencia humana;
[ ] revisar claridad situada;
[ ] revisar reversibilidad;
[ ] revisar pausa, retiro y revisión humana;
[ ] detectar lenguaje coercitivo, extractivo o excesivamente técnico.
```

### 6.4 investigador_transdisciplinario_IT

Responsabilidades:

```text
[ ] distinguir documentación de investigación;
[ ] evitar instrumentos aplicables a personas reales;
[ ] revisar supuestos sobre edad, contexto y evidencia;
[ ] marcar cualquier deuda que requiera protocolo de investigación futuro.
```

### 6.5 artista_transdisciplinario_AT

Responsabilidades:

```text
[ ] cuidar la dimensión expresiva y lúdica;
[ ] proteger la imaginación no instrumental;
[ ] revisar accesibilidad expresiva;
[ ] evitar que el diseño documental reduzca creatividad a métricas, rendimiento o flujo rígido.
```

### 6.6 Bitacora_del_Capitan

Responsabilidades:

```text
[ ] registrar hitos de sesión;
[ ] registrar decisiones reversibles;
[ ] registrar deuda vigilada;
[ ] preparar transferencia simétrica al cierre;
[ ] mantener continuidad narrativa sin convertir la bitácora en autorización técnica.
```

---

## 7. Método de trabajo documento por documento

v0.4.7 trabajará con una secuencia de documentos individuales. Cada documento debe pasar por revisión antes de iniciar el siguiente.

```text
regla_de_avance:
  no_preparar_siguiente_documento_sin_aprobacion_explicita: true
  permitir_borrador_inicial: true
  permitir_revision: true
  permitir_deuda: true
  permitir_implementacion: false
```

Cada documento debe contener, como mínimo:

```text
[ ] propósito;
[ ] alcance autorizado;
[ ] límites explícitos;
[ ] relación con PR #12;
[ ] aplicación de la pregunta triangular;
[ ] riesgos de deriva funcional;
[ ] criterios de revisión PH, IT y AT;
[ ] deuda identificada;
[ ] condición de salida documental.
```

---

## 8. Secuencia documental v0.4.7

La secuencia recomendada para la fase es:

```text
[1] Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
[2] Plan_Revision_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
[3] Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md
[4] Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md
[5] Criterios_Interfaz_No_Rigida_AI_StoryLab.md
[6] Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md
[7] Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
[8] Registro_Deuda_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
[9] Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
[10] Changelog_PR_v0_4_7_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
[11] Transferencia_Simetrica_v0_4_7_AI_StoryLab.md
[12] Cierre_Sesion_v0_4_7_AI_StoryLab.md
[13] Cierre_Bitacora_Capitan_v0_4_7_AI_StoryLab.md
```

El documento no debe saltar directamente al núcleo sustantivo sin protocolo y plan de revisión.

---

## 9. Deuda heredada prioritaria

v0.4.7 recibe deuda de PR #12. Este protocolo la reconoce como brújula de trabajo, no como autorización para implementación.

```text
ejemplos_por_edad_y_contexto:
  pago_documental_sugerido:
    Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md
  limite:
    solo escenarios inventados, no aplicados, no personas reales

guias_extensas_PH_IT_AT:
  pago_documental_sugerido:
    Guia_Revision_PH_IT_AT_Diseno_Experiencia_AI_StoryLab.md
  limite:
    revisión documental, no evaluación de usuarios

vocabulario_controlado_arquitectura_conceptual:
  pago_documental_sugerido:
    Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md
  limite:
    lenguaje situado ficticio, no copy final de producto

matrices_ampliadas_por_spec_y_acciones_sensibles:
  pago_documental_sugerido:
    Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
  limite:
    acciones conceptuales, no flujos ejecutables

matriz_ampliada_acciones_sensibles_arquitectura_conceptual:
  pago_documental_sugerido:
    Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
  limite:
    revisión de sensibilidad, no automatización funcional
```

---

## 10. Deuda que no se paga en v0.4.7

La siguiente deuda no debe resolverse en v0.4.7, salvo como condición documental futura:

```text
criterios_transicion_a_diseno_o_prototipo_futuro:
  decision:
    no_pagar_completamente_en_v0_4_7
  tratamiento:
    preparar_condiciones_documentales

threat_model_tecnico_etico_futuro:
  decision:
    no_activar
  tratamiento:
    deuda_futura_bloqueada

protocolo_investigacion_futura_si_aplica:
  decision:
    no_activar
  tratamiento:
    deuda_futura_bloqueada
```

---

## 11. Criterios para microcopy ficticia

La microcopy de v0.4.7 debe ser:

```text
[✓] ficticia;
[✓] revisable;
[✓] no final;
[✓] marcada como ejemplo conceptual;
[✓] útil para detectar riesgos de consentimiento, privacidad y seguridad local-first.
```

No debe ser:

```text
[!] texto listo para interfaz real;
[!] instrucción de producto;
[!] onboarding aplicable;
[!] solicitud de datos reales;
[!] guía de almacenamiento, exportación o publicación;
[!] instrumento de prueba o investigación.
```

Formato recomendado para cualquier ejemplo:

```text
microcopy_ficticia:
  estado: ejemplo_no_final
  perfil: estudiante_escuela_superior | estudiante_universitario | docente | investigador
  situacion: inventada
  proposito: revisión_documental
  riesgo_a_revisar:
    consentimiento: pendiente
    datos_privacidad: pendiente
    seguridad_local_first: pendiente
```

---

## 12. Criterios para escenarios ficticios

Los escenarios ficticios deben usar personajes, situaciones y contextos inventados. Deben evitar cualquier semejanza identificable con personas reales.

Cada escenario deberá declarar:

```text
[ ] perfil ficticio;
[ ] edad o tramo educativo general;
[ ] contexto inventado;
[ ] situación creativa no aplicada;
[ ] acción sensible conceptual;
[ ] pregunta triangular;
[ ] control habitable conceptual;
[ ] deuda o riesgo detectado.
```

No debe incluir:

```text
[!] nombres de estudiantes reales;
[!] casos reales;
[!] evidencias reales;
[!] reflexiones reales;
[!] datos de aula;
[!] datos institucionales identificables;
[!] pruebas piloto;
[!] instrumentos de evaluación o investigación.
```

---

## 13. Controles habitables conceptuales

En v0.4.7, un control habitable es una forma documental de proteger agencia humana sin convertir la experiencia en mecanismo técnico.

Ejemplos autorizados como conceptos:

```text
[✓] punto de pausa;
[✓] punto de retiro;
[✓] recordatorio de revisión humana;
[✓] lenguaje de no vigilancia;
[✓] advertencia de visibilidad ficticia;
[✓] criterio de reversibilidad;
[✓] zona de cuidado expresivo;
[✓] marca de deuda cuando algo no pueda resolverse sin fase futura.
```

Ejemplos no autorizados como acciones reales:

```text
[!] botón funcional;
[!] permiso técnico;
[!] cifrado real;
[!] almacenamiento local real;
[!] exportación real;
[!] sincronización real;
[!] control de acceso real;
[!] automatización de decisión.
```

---

## 14. Criterios de pausa inmediata

Debe pausarse la preparación de un documento si aparece cualquiera de las siguientes señales como acción real:

```text
guardar
almacenar
capturar
subir
sincronizar
exportar
publicar
autenticar
procesar automáticamente
evaluar
puntuar
analizar comportamiento
crear pantalla
implementar
construir
probar con estudiantes
investigar con datos reales
```

La pausa no cancela el trabajo. Activa revisión documental:

```text
pausa:
  accion:
    - nombrar_la_deriva
    - reclasificar_como_riesgo_o_deuda
    - reformular_en_modo_no_funcional
    - registrar_en_bitacora_si_corresponde
```

---

## 15. Reglas de Git documental

Rama propuesta:

```bash
git checkout main
git pull --ff-only
git status --short
git switch -c docs/v0.4.7-diseno-experiencia-no-funcional
```

Regla de staging:

```text
prohibido:
  git add .

permitido:
  git add <ruta_explicita_del_documento>
```

Para este documento:

```bash
git add 18_DOCUMENTACION_ACTIVA/Protocolos/Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
```

---

## 16. Condición de salida del protocolo

Este protocolo estará listo para avanzar al siguiente documento cuando cumpla estas condiciones:

```text
[ ] declara estado heredado de PR #12;
[ ] reitera guardarraíl no funcional;
[ ] define alcance permitido y prohibido;
[ ] activa roles documentales;
[ ] establece método documento por documento;
[ ] integra pregunta triangular;
[ ] reconoce deuda heredada;
[ ] bloquea deuda futura no autorizada;
[ ] establece criterios de pausa;
[ ] propone rama documental;
[ ] conserva reglas de Git con rutas explícitas;
[ ] no contiene implementación, UI real, prototipo, datos reales ni pruebas con personas.
```

---

## 17. Dictamen preliminar del equipo documental

```text
guardian_SDD_constitucional:
  dictamen: apto_para_revision
  condicion: mantener_no_funcionalidad

arquitecto_documental:
  dictamen: secuencia_documental_ordenada
  condicion: aprobar_este_protocolo_antes_del_plan_de_revision

programador_humanista_PH:
  dictamen: agencia_humana_preservada_como_criterio
  condicion: ampliar_lenguaje_situado_en_documento_posterior

investigador_transdisciplinario_IT:
  dictamen: investigacion_real_bloqueada
  condicion: mantener_escenarios_como_ficticios_no_aplicados

artista_transdisciplinario_AT:
  dictamen: experiencia_entendida_como_habitabilidad_y_no_flujo_rigido
  condicion: cuidar_accesibilidad_expresiva_en_documentos_sustantivos

Bitacora_del_Capitan:
  dictamen: bitacora_de_travesia_activada
  condicion: registrar_aprobacion_y_deuda_en_cada_cierre_documental
```

---

## 18. Nota de navegación

v0.4.7 no construye la nave. Dibuja la cubierta, los pasamanos, las salidas, los lugares de pausa y las señales que permiten regresar al puerto.

La experiencia futura solo podrá discutirse responsablemente si antes queda claro cómo una persona conserva agencia, privacidad, comprensión, revisión humana y derecho a retirarse.
