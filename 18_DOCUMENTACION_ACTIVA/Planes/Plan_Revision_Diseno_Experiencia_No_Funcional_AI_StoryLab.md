# Plan de Revisión : Diseño de Experiencia No Funcional AI StoryLab

**Proyecto:** AI StoryLab 1  
**Documento:** `Plan_Revision_Diseno_Experiencia_No_Funcional_AI_StoryLab.md`  
**Fase:** v0.4.7 Diseño de Experiencia No Funcional  
**Subtítulo operativo:** Lenguaje Situado, Escenarios Ficticios y Controles Habitables  
**PR:** #13  
**Estado:** borrador inicial para revisión documental  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-05  

---

## 1. Propósito del plan

Este documento define el plan de revisión para la fase **v0.4.7 Diseño de Experiencia No Funcional** de AI StoryLab 1.

Su función es establecer cómo se revisarán, aprobarán, pausarán o devolverán los documentos de esta fase antes de avanzar de un artefacto documental al siguiente.

La fase v0.4.7 no construye experiencia funcional. Revisa cómo la experiencia puede ser pensada, nombrada, limitada y cuidada antes de cualquier diseño funcional futuro.

```text
proposito:
  revisar_experiencia_como_documentacion
  proteger_agencia_humana
  diferenciar_microcopy_ficticia_de_copy_final
  diferenciar_escenarios_ficticios_de_pruebas_reales
  detectar_riesgos_de_prototipo_encubierto
  mantener_trazabilidad_SDD
```

---

## 2. Guardarraíl constitucional de revisión

Toda revisión en v0.4.7 debe confirmar que el documento evaluado no autoriza ni introduce:

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

Si cualquiera de estos elementos aparece como acción autorizada, el documento debe pausarse y devolverse a revisión.

Puede aparecer únicamente como:

```text
riesgo_conceptual
limite_explicito
deuda_futura
condicion_no_autorizada
alerta_de_guardarrail
```

---

## 3. Alcance revisable permitido

La revisión sí puede validar documentos que trabajen:

```text
[✓] mapas de experiencia conceptual;
[✓] microcopy ficticia y revisable;
[✓] escenarios ficticios por edad y contexto;
[✓] guías de lenguaje situado;
[✓] criterios de interfaz no rígida;
[✓] controles habitables conceptuales;
[✓] accesibilidad expresiva;
[✓] matrices de acciones sensibles;
[✓] gates documentales;
[✓] deuda vigilada;
[✓] bitácoras;
[✓] transferencia simétrica.
```

Estos materiales deben mantenerse como lenguaje de exploración documental, no como instrucciones de producto.

---

## 4. Pregunta triangular de revisión

Cada documento de v0.4.7 debe revisarse con la pregunta triangular heredada:

```text
Consentimiento:
  ¿La persona entiende, acepta, puede pausar y puede retirar?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca?

Seguridad local-first:
  ¿En qué zona ocurre, qué amenaza conceptual activa y qué control humano requiere?
```

La revisión no termina hasta que las tres dimensiones tengan respuesta explícita o deuda registrada.

---

## 5. Roles de revisión

### 5.1 guardian_SDD_constitucional

Responsable de verificar que el documento:

```text
[ ] mantiene el alcance no funcional;
[ ] bloquea implementación prematura;
[ ] diferencia documento, diseño, prototipo y sistema;
[ ] detecta verbos de acción real no autorizada;
[ ] exige pausa si aparece riesgo de cruce de frontera.
```

Dictamen posible:

```text
aprobado_constitucionalmente
requiere_revision_por_cruce_de_guardarrail
pausado_por_riesgo_de_implementacion
```

---

### 5.2 arquitecto_documental

Responsable de verificar que el documento:

```text
[ ] tiene ubicación documental clara;
[ ] conserva coherencia con PR #12 y paquete v0.4.7 v2;
[ ] sigue la secuencia aprobada;
[ ] no duplica innecesariamente documentos previos;
[ ] deja rutas de continuidad hacia documentos posteriores.
```

Dictamen posible:

```text
aprobado_documentalmente
requiere_reorganizacion
requiere_vinculacion_con_documentos_previos
```

---

### 5.3 programador_humanista_PH

Responsable de verificar que el documento:

```text
[ ] protege agencia humana;
[ ] evita lenguaje coercitivo;
[ ] permite pausa y retiro;
[ ] conserva revisión humana;
[ ] evita automatizar juicio, creatividad o valor;
[ ] cuida claridad para perfiles diversos.
```

Dictamen posible:

```text
aprobado_PH
requiere_mayor_agencia
requiere_lenguaje_menos_directivo
```

---

### 5.4 investigador_transdisciplinario_IT

Responsable de verificar que el documento:

```text
[ ] evita investigación con datos reales;
[ ] evita instrumentos de evaluación;
[ ] distingue evidencia ficticia de evidencia real;
[ ] declara límites de interpretación;
[ ] evita generalizaciones no justificadas;
[ ] registra deuda si aparece una pregunta futura de investigación.
```

Dictamen posible:

```text
aprobado_IT
requiere_limite_investigativo
requiere_deuda_futura
```

---

### 5.5 artista_transdisciplinario_AT

Responsable de verificar que el documento:

```text
[ ] sostiene apertura creativa;
[ ] evita reducir experiencia a flujo rígido;
[ ] permite juego, deriva, exploración y expresión;
[ ] reconoce diversidad de formas de creación;
[ ] conserva accesibilidad expresiva;
[ ] evita convertir creatividad en producción extractiva.
```

Dictamen posible:

```text
aprobado_AT
requiere_mayor_habitabilidad
requiere_mayor_apertura_expresiva
```

---

### 5.6 Bitacora_del_Capitan

Responsable de registrar:

```text
[ ] estado del documento;
[ ] aprobación o pausa;
[ ] deuda detectada;
[ ] decisión de avanzar o no avanzar;
[ ] relación con el próximo documento de la secuencia.
```

Dictamen posible:

```text
registrado_para_continuidad
requiere_anotacion_de_deuda
requiere_cierre_de_hito
```

---

## 6. Método de revisión por documento

Cada documento de v0.4.7 debe pasar por cinco rondas mínimas:

```text
ronda_1:
  nombre: revision_constitucional
  rol_principal: guardian_SDD_constitucional
  pregunta: ¿El documento se mantiene no funcional?

ronda_2:
  nombre: revision_arquitectura_documental
  rol_principal: arquitecto_documental
  pregunta: ¿El documento está bien ubicado, secuenciado y trazado?

ronda_3:
  nombre: revision_humana_PH
  rol_principal: programador_humanista_PH
  pregunta: ¿La experiencia protege agencia, pausa, retiro y claridad?

ronda_4:
  nombre: revision_transdisciplinaria_IT_AT
  roles_principales:
    - investigador_transdisciplinario_IT
    - artista_transdisciplinario_AT
  pregunta: ¿El documento evita investigación real y conserva apertura expresiva?

ronda_5:
  nombre: registro_bitacora
  rol_principal: Bitacora_del_Capitan
  pregunta: ¿Quedó claro qué se aprobó, qué se pausó y qué sigue?
```

Ningún documento sustantivo debe pasar al siguiente sin una señal explícita de aprobación.

---

## 7. Estados de revisión

Cada documento puede quedar en uno de los siguientes estados:

```text
borrador_inicial:
  descripcion: documento preparado para primera lectura.

en_revision:
  descripcion: documento bajo lectura por roles documentales.

aprobado_para_commit:
  descripcion: documento aprobado para incorporarse al PR.

aprobado_con_deuda:
  descripcion: documento aceptado, pero con deuda registrada.

requiere_revision:
  descripcion: documento debe ajustarse antes de commit o avance.

pausado_por_guardarrail:
  descripcion: documento activa un límite constitucional.

retirado_de_alcance:
  descripcion: documento no pertenece a v0.4.7 y se transfiere a fase futura.
```

---

## 8. Matriz mínima de revisión

| Criterio | Pregunta de revisión | Resultado esperado |
|---|---|---|
| No funcionalidad | ¿El documento evita implementación, prototipo y UI real? | Sí, o pausa |
| Consentimiento | ¿La persona puede entender, aceptar, pausar y retirar? | Sí, o deuda |
| Datos/privacidad | ¿Se identifica qué toca dato, evidencia, reflexión o visibilidad? | Sí, aunque sea conceptual |
| Seguridad local-first | ¿Se identifica zona, amenaza conceptual y control humano? | Sí, o deuda |
| Lenguaje situado | ¿El lenguaje se adapta a perfil y contexto sin volverse copy final? | Sí |
| Escenarios ficticios | ¿Los casos son inventados, no aplicables como prueba real? | Sí |
| Controles habitables | ¿El control se expresa como capacidad humana, no como mecanismo técnico? | Sí |
| Accesibilidad expresiva | ¿Permite distintas formas de comprender, crear y revisar? | Sí |
| Deuda vigilada | ¿Lo no resuelto queda registrado sin activarse? | Sí |
| Trazabilidad SDD | ¿El documento se relaciona con fase, PR y secuencia? | Sí |

---

## 9. Criterios de pausa

La revisión debe pausar si un documento utiliza estos verbos como acción real autorizada:

```text
guardar
almacenar
capturar
subir
sincronizar
exportar
publicar
autenticar
procesar automaticamente
evaluar
puntuar
analizar comportamiento
crear pantalla
implementar
construir
probar con estudiantes
investigar con datos reales
```

Estos verbos pueden permanecer solo si aparecen como:

```text
riesgo
limite
no_autorizado
deuda_futura
ejemplo_de_cruce_prohibido
```

---

## 10. Revisión de microcopy ficticia

La microcopy en v0.4.7 debe revisarse como material ficticio y no final.

### 10.1 Debe cumplir

```text
[ ] declara que es ficticia;
[ ] no solicita datos reales;
[ ] no instruye a personas reales;
[ ] no funciona como onboarding;
[ ] no simula pantalla real;
[ ] permite pausa y retiro;
[ ] evita presión, vigilancia o culpa;
[ ] se puede revisar, descartar o reemplazar.
```

### 10.2 Debe evitar

```text
[!] lenguaje final de producto;
[!] instrucciones de uso real;
[!] llamadas a guardar, subir, enviar o exportar;
[!] promesas de privacidad técnica;
[!] promesas de seguridad ejecutable;
[!] activación de flujos;
[!] evaluación de desempeño.
```

---

## 11. Revisión de escenarios ficticios

Los escenarios ficticios deben permitir análisis sin personas reales.

### 11.1 Deben cumplir

```text
[ ] usan personajes inventados;
[ ] no describen casos identificables;
[ ] no solicitan evidencia real;
[ ] no activan actividad educativa real;
[ ] no se presentan como prueba piloto;
[ ] distinguen edad, contexto y perfil;
[ ] revisan agencia, privacidad y seguridad local-first.
```

### 11.2 Deben evitar

```text
[!] nombres de estudiantes reales;
[!] contextos identificables;
[!] reflexiones reales;
[!] rúbricas aplicables;
[!] instrumentos de investigación;
[!] observación de conducta real;
[!] evaluación automática.
```

---

## 12. Revisión de controles habitables

Los controles habitables deben entenderse como capacidades humanas conceptuales, no como mecanismos técnicos.

### 12.1 Deben poder responder

```text
[ ] ¿Qué puede pausar la persona?
[ ] ¿Qué puede retirar?
[ ] ¿Qué puede revisar antes de aceptar?
[ ] ¿Qué visibilidad puede limitar conceptualmente?
[ ] ¿Qué interpretación puede cuestionar?
[ ] ¿Qué deuda debe transferirse si el control no está resuelto?
```

### 12.2 No deben convertirse en

```text
[!] permisos reales;
[!] roles técnicos;
[!] cifrado;
[!] autenticación;
[!] almacenamiento;
[!] reglas de backend;
[!] flujos de sincronización;
[!] diseño ejecutable de seguridad.
```

---

## 13. Revisión por perfiles

Los documentos de lenguaje, escenarios y experiencia deben considerar al menos cuatro perfiles:

```text
estudiante_escuela_superior
estudiante_universitario
docente
investigador
```

La revisión debe verificar que ningún perfil sea tratado como:

```text
dato
usuario_generico
sujeto_de_prueba
fuente_de_evidencia
productor_de_metricas
objeto_de_vigilancia
```

Cada perfil debe conservar:

```text
agencia
contexto
ritmo
derecho_a_pausa
derecho_a_retiro
derecho_a_revision_humana
capacidad_de_no_participar
```

---

## 14. Revisión de deuda heredada

v0.4.7 debe trabajar con esta deuda prioritaria:

```text
ejemplos_por_edad_y_contexto:
  documento_destino: Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md

guias_extensas_PH_IT_AT:
  documento_destino: Guia_Revision_PH_IT_AT_Diseno_Experiencia_AI_StoryLab.md

vocabulario_controlado_arquitectura_conceptual:
  documento_destino: Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md

matrices_ampliadas_por_spec_y_acciones_sensibles:
  documento_destino: Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md

matriz_ampliada_acciones_sensibles_arquitectura_conceptual:
  documento_destino: Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
```

La revisión debe confirmar que esta deuda se paga documentalmente, no mediante implementación.

---

## 15. Deuda que no debe activarse

La revisión debe bloquear cualquier intento de pagar completamente en v0.4.7:

```text
criterios_transicion_a_diseno_o_prototipo_futuro:
  estado: no_pagar_completamente
  accion_permitida: preparar_condiciones_documentales

threat_model_tecnico_etico_futuro:
  estado: no_activar
  accion_permitida: registrar_como_deuda_futura

protocolo_investigacion_futura_si_aplica:
  estado: no_activar
  accion_permitida: registrar_como_deuda_futura
```

---

## 16. Secuencia de revisión por documentos

La fase debe avanzar en este orden, salvo decisión documental explícita:

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

El documento siguiente no debe prepararse como commit hasta que el documento actual reciba aprobación explícita.

---

## 17. Criterios para aprobación de documento

Un documento puede aprobarse si cumple:

```text
[ ] no cruza a implementación;
[ ] responde la pregunta triangular;
[ ] define su alcance;
[ ] declara límites;
[ ] ubica deuda;
[ ] diferencia ficción de realidad;
[ ] conserva agencia humana;
[ ] evita pruebas con personas;
[ ] evita datos reales;
[ ] se integra a la secuencia v0.4.7.
```

---

## 18. Criterios para aprobación de commit

Un commit documental puede realizarse si:

```text
[ ] el documento fue aprobado explícitamente;
[ ] la ruta del archivo es clara;
[ ] el commit contiene solo archivos relacionados;
[ ] no usa git add .;
[ ] el mensaje de commit describe el cambio documental;
[ ] no mezcla documentos futuros no aprobados;
[ ] no introduce archivos de implementación.
```

Mensaje recomendado para este documento:

```bash
git commit -m "docs: agregar plan de revision v0.4.7"
```

---

## 19. Ubicación documental propuesta

```text
18_DOCUMENTACION_ACTIVA/Planes/Plan_Revision_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
```

---

## 20. Relación con el próximo documento

Una vez aprobado este plan, el siguiente documento recomendado será:

```text
Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md
```

Ese documento deberá mapear zonas de experiencia conceptual, momentos de agencia, puntos de pausa, puntos de retiro, relación con evidencia ficticia, portafolio conceptual, límites de visibilidad y amenazas conceptuales.

No deberá definir pantallas, navegación real, componentes, backend, almacenamiento, permisos ni eventos técnicos.

---

## 21. Dictamen inicial

```text
guardian_SDD_constitucional:
  estado: guardarrail_activo
  dictamen: revision_documental_no_funcional

arquitecto_documental:
  estado: secuencia_de_revision_definida
  dictamen: continuar_documento_por_documento

programador_humanista_PH:
  estado: agencia_pausa_retiro_priorizados
  dictamen: revisar_lenguaje_por_capacidad_humana

investigador_transdisciplinario_IT:
  estado: datos_reales_bloqueados
  dictamen: escenarios_ficticios_sin_investigacion

artista_transdisciplinario_AT:
  estado: habitabilidad_y_expresion_protegidas
  dictamen: evitar_flujos_rigidos

Bitacora_del_Capitan:
  estado: plan_registrado_para_PR13
  siguiente_marca: aprobacion_explicita_antes_del_mapa_de_experiencia
```

---

## 22. Cierre

Este plan convierte la revisión de v0.4.7 en una práctica de navegación documental.

No se pregunta todavía cómo funcionará la nave. Se pregunta cómo evitar que el mapa obligue a una sola ruta, cómo marcar puertos de regreso y cómo cuidar que cada persona pueda detenerse antes de cruzar una frontera.
