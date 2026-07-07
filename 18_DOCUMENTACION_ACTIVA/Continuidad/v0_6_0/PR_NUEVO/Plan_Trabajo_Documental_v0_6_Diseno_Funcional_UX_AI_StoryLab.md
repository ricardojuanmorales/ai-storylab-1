# Plan de Trabajo Documental v0.6 · Diseño Funcional + UX · AI StoryLab 1

**Versión:** APROBADO  
**Fase:** AI StoryLab 1 v0.6 · Diseño Funcional + UX  
**Tipo de documento:** Plan de trabajo documental  
**Estado:** Aprobado para integración canónica  
**PR asociado:** PR #20 · `docs: iniciar activacion v0.6 diseno funcional ux`  
**Rama asociada:** `docs/v0-6-activacion-diseno-funcional-ux`  
**Documento antecedente obligatorio:** `Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`  
**Fecha:** 2026-07-06  

---

## 1. Propósito del documento

Este documento establece el plan de trabajo documental para la fase **AI StoryLab 1 v0.6 · Diseño Funcional + UX**.

Su propósito es ordenar la producción documental de v0.6 bajo un protocolo controlado, trazable y secuencial, evitando desbordamientos hacia arquitectura técnica, implementación, validación, despliegue o preparación de marketplace.

Este plan define:

- el orden recomendado de documentos de la sesión;
- la función de cada documento;
- la secuencia de aprobación e integración;
- el tratamiento de bitácoras activas;
- la distinción entre documentos de apertura, documentos funcionales, documentos de transición e instrumentos de cierre;
- los límites metodológicos que deben mantenerse durante toda la fase v0.6.

---

## 2. Contexto canónico

La fase v0.6 se activa después del cierre y merge de **PR #19**, que consolidó **AI StoryLab 1 v0.5.0 · Gobernanza y Roadmap**.

La ruta canónica vigente hacia v1.0.0 queda establecida así:

1. **v0.5 · Gobernanza y roadmap**
2. **v0.6 · Diseño funcional + UX**
3. **v0.7 · Arquitectura técnica + seguridad**
4. **v0.8 · Implementación incremental**
5. **v0.9 · Validación + marketplace readiness**
6. **v1.0 · Publicación estable de ecosistema funcional**

v1.0.0 se entiende como **ecosistema funcional publicable**, no como cierre meramente documental.

v0.6 debe preceder a v0.7 porque la función, la experiencia, los recorridos y los criterios de interacción deben definirse antes de cualquier arquitectura técnica o decisión de implementación.

---

## 3. Naturaleza de v0.6

v0.6 inaugura una fase de **SDD funcional** limitada a:

- diseño funcional;
- experiencia de usuario;
- flujos conceptuales;
- recorridos sintéticos;
- requisitos funcionales preliminares;
- criterios de interacción humano-IA;
- accesibilidad, claridad y agencia humana;
- deuda funcional y UX;
- preparación de insumos para v0.7.

Esta fase no define cómo se construye técnicamente el ecosistema. Define qué debe permitir hacer, cómo debe sentirse conceptualmente la interacción y qué condiciones funcionales deben protegerse antes de entrar en arquitectura.

---

## 4. Alcance permitido de v0.6

Durante esta fase se permite trabajar:

```yaml
permitido_v0_6:
  - mapa_funcional_del_ecosistema
  - modelo_de_experiencia_de_usuario
  - flujos_funcionales_conceptuales
  - recorridos_de_usuario_sinteticos
  - perfiles_arquetipicos_no_reales
  - criterios_de_interaccion_humano_IA
  - criterios_de_accesibilidad_y_claridad
  - requisitos_funcionales_preliminares
  - deuda_funcional_y_UX
  - insumos_para_v0_7
```

---

## 5. Prohibiciones explícitas de v0.6

Durante esta fase no se permite:

```yaml
prohibido_v0_6:
  - definir_arquitectura_tecnica_final
  - seleccionar_stack_final
  - implementar_codigo
  - crear_producto_funcional
  - usar_datos_reales
  - investigar_con_personas
  - validar_con_personas
  - hacer_pruebas_productivas
  - desplegar
  - activar_marketplace_readiness
  - iniciar_mantenimiento_operativo
```

Cualquier asunto que sugiera arquitectura, stack, seguridad técnica, implementación, infraestructura, pruebas productivas o despliegue deberá registrarse únicamente como **insumo futuro para v0.7 o fase posterior**, no como decisión vigente de v0.6.

---

## 6. Protocolo documental obligatorio

Todo documento de v0.6 deberá seguir este ciclo:

```yaml
documentos:
  - trabajar_documentos_uno_a_uno
  - crear_borrador_md_descargable
  - esperar_aprobacion_humana_explicita
  - generar_version_APROBADO
  - integrar_en_repo_con_nombre_canonico_sin_APROBADO
```

El ciclo operativo será:

1. producir un único borrador `.md`;
2. entregar el borrador como archivo descargable;
3. esperar revisión y aprobación humana explícita;
4. generar la versión `_APROBADO.md`;
5. integrar al repositorio con nombre canónico, sin `_APROBADO`;
6. hacer commit individual;
7. hacer push;
8. verificar que el PR #20 refleja el archivo nuevo;
9. pasar al siguiente documento solo después de confirmar el ciclo anterior.

La aprobación humana no se presume. Debe ser explícita.

---

## 7. Protocolo de commits

Cada documento aprobado se integrará mediante commit individual.

```yaml
commits:
  - realizar_commits_individuales
  - usar_mensajes_semanticos
  - hacer_push_despues_de_cada_commit
```

Formato recomendado:

```bash
git add <ruta_del_documento>
git commit -m "docs: <accion semantica v0.6>"
git push
```

Ejemplos de mensajes semánticos:

```text
docs: planificar trabajo documental v0.6
docs: definir mapa funcional preliminar v0.6
docs: definir modelo ux conceptual v0.6
docs: registrar flujos funcionales conceptuales v0.6
docs: registrar recorridos sinteticos de usuario v0.6
docs: definir criterios interaccion humano ia v0.6
docs: registrar requisitos funcionales preliminares v0.6
docs: registrar insumos para v0.7 desde v0.6
docs: actualizar bitacoras cierre sesion v0.6
```

---

## 8. Tratamiento de bitácoras activas

Las bitácoras de v0.6 quedan **activas desde el inicio de la fase**, pero no se trabajarán como documentos iniciales salvo instrucción humana explícita.

Las bitácoras se actualizarán **en bloque al final de la sesión**, cuando exista contenido real suficiente para registrar continuidad, decisiones, deuda y transferencia.

Bitácoras e instrumentos activos:

```yaml
bitacoras:
  - activar_bitacora_de_sesion_v0_6
  - activar_bitacora_de_transferencia_simetrica_v0_6
  - activar_bitacora_del_capitan_v0_6
  - activar_registro_de_decisiones_v0_6
  - activar_registro_de_deuda_funcional_y_UX
```

### 8.1 Regla operativa

Durante la sesión:

- se preserva memoria operativa de decisiones y eventos;
- se identifican elementos que deberán registrarse;
- no se interrumpe el avance documental para crear bitácoras prematuras;
- no se integran bitácoras al inicio si todavía no existe materia de cierre;
- no se sustituye el trabajo funcional por registro administrativo anticipado.

Al cierre de sesión:

- se actualiza la Bitácora de Sesión v0.6;
- se actualiza la Bitácora de Transferencia Simétrica v0.6;
- se actualiza la Bitácora del Capitán v0.6;
- se actualiza el Registro de Decisiones v0.6;
- se actualiza el Registro de Deuda Funcional y UX v0.6;
- se produce una transferencia clara para continuidad futura.

---

## 9. Orden documental de esta sesión

El orden de trabajo documental de esta sesión será el siguiente.

---

### Documento 1 · Kit de Inicio de Sesión v0.6

**Nombre canónico:**  
`Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`

**Estado:** Completado e integrado.

**Rol:** Documento de activación formal de v0.6 y primer commit obligatorio del PR #20.

**Función:** Definir propósito, alcance, límites, prohibiciones, protocolo metodológico, bitácoras activas y criterios de transición hacia v0.7.

---

### Documento 2 · Plan de Trabajo Documental v0.6

**Nombre borrador:**  
`Plan_Trabajo_Documental_v0_6_Diseno_Funcional_UX_AI_StoryLab_BORRADOR.md`

**Nombre aprobado:**  
`Plan_Trabajo_Documental_v0_6_Diseno_Funcional_UX_AI_StoryLab_APROBADO.md`

**Nombre canónico para repo:**  
`Plan_Trabajo_Documental_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`

**Estado:** Documento vigente en preparación.

**Rol:** Ordenar el trabajo documental de la sesión y de la fase v0.6.

**Función:** Establecer secuencia, protocolo, límites, orden de documentos, tratamiento de bitácoras y criterios de avance.

---

### Documento 3 · Mapa Funcional Preliminar del Ecosistema

**Nombre sugerido:**  
`Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md`

**Rol:** Primer documento funcional sustantivo de v0.6.

**Función:** Identificar las funciones principales, secundarias y de apoyo del ecosistema AI StoryLab 1 desde una perspectiva funcional, no técnica.

**Debe incluir:**

- funciones centrales del ecosistema;
- funciones de orientación;
- funciones de creación;
- funciones de revisión;
- funciones de continuidad;
- funciones de gobernanza funcional;
- dependencias funcionales entre áreas;
- exclusiones técnicas explícitas.

**No debe incluir:**

- arquitectura;
- stack;
- base de datos;
- APIs;
- infraestructura;
- implementación;
- despliegue.

---

### Documento 4 · Modelo de Experiencia de Usuario

**Nombre sugerido:**  
`Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md`

**Rol:** Definir el modelo conceptual de experiencia de usuario para el ecosistema.

**Función:** Describir cómo debe orientarse, sentirse y organizarse la experiencia del usuario sin convertirla en interfaz final ni implementación.

**Debe incluir:**

- principios de experiencia;
- claridad de navegación conceptual;
- agencia humana;
- acompañamiento por IA;
- accesibilidad;
- reducción de fricción;
- continuidad narrativa del usuario;
- momentos de decisión humana;
- límites de automatización.

**No debe incluir:**

- diseño visual final;
- wireframes definitivos;
- componentes UI técnicos;
- arquitectura frontend;
- selección de herramientas.

---

### Documento 5 · Flujos Funcionales Conceptuales

**Nombre sugerido:**  
`Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md`

**Rol:** Describir flujos funcionales desde la perspectiva de acciones, decisiones y transformaciones del usuario.

**Función:** Mapear secuencias conceptuales de uso del ecosistema sin convertirlas en flujos técnicos.

**Debe incluir:**

- flujo de entrada al ecosistema;
- flujo de creación de proyecto;
- flujo de acompañamiento creativo;
- flujo de revisión;
- flujo de documentación;
- flujo de transferencia;
- flujo de cierre funcional.

**No debe incluir:**

- diagramas de arquitectura;
- endpoints;
- lógica de backend;
- integración de servicios;
- automatizaciones productivas.

---

### Documento 6 · Recorridos de Usuario Sintéticos

**Nombre sugerido:**  
`Recorridos_Usuario_Sinteticos_AI_StoryLab_v0_6.md`

**Rol:** Explorar recorridos conceptuales desde perfiles arquetípicos no reales.

**Función:** Probar narrativamente el diseño funcional sin usar datos reales ni validar con personas.

**Debe incluir:**

- perfiles arquetípicos sintéticos;
- objetivos de cada perfil;
- puntos de entrada;
- obstáculos probables;
- decisiones humanas clave;
- formas de acompañamiento por IA;
- resultados funcionales esperados.

**No debe incluir:**

- datos personales reales;
- entrevistas;
- resultados de pruebas con usuarios;
- afirmaciones de validación;
- segmentación comercial real.

---

### Documento 7 · Criterios de Interacción Humano-IA

**Nombre sugerido:**  
`Criterios_Interaccion_Humano_IA_AI_StoryLab_v0_6.md`

**Rol:** Definir criterios funcionales y éticos para la interacción entre personas e IA.

**Función:** Establecer cómo debe colaborar la IA sin desplazar agencia, juicio, creatividad ni responsabilidad humana.

**Debe incluir:**

- agencia humana;
- confirmación explícita;
- trazabilidad de decisiones;
- límites de automatización;
- claridad de intervención de IA;
- responsabilidad compartida;
- prevención de sustitución indebida;
- acompañamiento creativo.

**No debe incluir:**

- políticas técnicas de seguridad;
- arquitectura de permisos;
- controles técnicos finales;
- implementación de guardrails.

---

### Documento 8 · Requisitos Funcionales Preliminares

**Nombre sugerido:**  
`Requisitos_Funcionales_Preliminares_AI_StoryLab_v0_6.md`

**Rol:** Consolidar requisitos funcionales preliminares derivados de los documentos anteriores.

**Función:** Definir qué debe permitir el ecosistema desde una perspectiva funcional.

**Debe incluir:**

- requisitos funcionales de alto nivel;
- requisitos de experiencia;
- requisitos de continuidad;
- requisitos de trazabilidad funcional;
- requisitos de interacción humano-IA;
- requisitos de accesibilidad y claridad;
- requisitos de documentación.

**No debe incluir:**

- user stories técnicas cerradas;
- épicas de implementación;
- arquitectura;
- stack;
- criterios técnicos de aceptación productiva;
- tareas de desarrollo.

---

### Documento 9 · Insumos para v0.7

**Nombre sugerido:**  
`Insumos_para_v0_7_Arquitectura_Tecnica_y_Seguridad_AI_StoryLab.md`

**Rol:** Preparar transferencia futura hacia v0.7 sin activarla.

**Función:** Recoger preguntas, dependencias y consideraciones que deberán atenderse en arquitectura técnica + seguridad.

**Debe incluir:**

- preguntas técnicas futuras;
- dependencias funcionales que requerirán arquitectura;
- riesgos que deberán analizarse en v0.7;
- necesidades de seguridad derivadas de función y UX;
- criterios que deberán preservarse técnicamente después.

**No debe incluir:**

- selección de stack;
- arquitectura final;
- decisiones de infraestructura;
- diseño de base de datos;
- implementación;
- pruebas;
- despliegue.

---

## 10. Documentos de cierre de sesión

Los documentos de cierre no se crearán al inicio.

Al final de la sesión, se actualizarán en bloque los siguientes instrumentos:

---

### 10.1 Bitácora de Sesión v0.6

**Nombre sugerido:**  
`Bitacora_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`

**Función:** Registrar eventos, documentos, aprobaciones, commits, límites preservados y continuidad de la sesión.

---

### 10.2 Bitácora de Transferencia Simétrica v0.6

**Nombre sugerido:**  
`Bitacora_Transferencia_Simetrica_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`

**Función:** Garantizar que una próxima sesión pueda continuar sin pérdida de contexto, decisiones ni criterios metodológicos.

---

### 10.3 Bitácora del Capitán v0.6

**Nombre sugerido:**  
`Bitacora_Capitan_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`

**Función:** Registrar orientación estratégica, criterios de mando documental y observaciones rectoras de la fase.

---

### 10.4 Registro de Decisiones v0.6

**Nombre sugerido:**  
`Registro_Decisiones_v0_6_Diseno_Funcional_UX_AI_StoryLab.md`

**Función:** Consolidar decisiones tomadas, su justificación, su estado y su impacto sobre documentos futuros.

---

### 10.5 Registro de Deuda Funcional y UX v0.6

**Nombre sugerido:**  
`Registro_Deuda_Funcional_UX_v0_6_AI_StoryLab.md`

**Función:** Registrar asuntos funcionales y de UX detectados pero no resueltos durante la sesión.

---

## 11. Criterios de avance entre documentos

Un documento podrá considerarse cerrado para avanzar al siguiente cuando:

1. exista borrador descargable;
2. haya revisión humana;
3. exista aprobación explícita;
4. se genere versión `_APROBADO.md`;
5. se integre al repo con nombre canónico sin `_APROBADO`;
6. se haga commit individual;
7. se haga push;
8. se verifique el PR #20;
9. se confirme que no se violaron límites de v0.6.

---

## 12. Criterios de pausa

La sesión deberá pausar si ocurre cualquiera de las siguientes condiciones:

- se intenta avanzar sin aprobación humana explícita;
- se propone arquitectura técnica;
- se sugiere selección de stack;
- se introduce implementación de código;
- se usan datos reales;
- se propone validación con personas;
- se intenta abrir v0.7;
- se acumulan varios documentos sin commits individuales;
- se pierde claridad sobre el estado del PR.

En caso de pausa, se deberá volver al último documento aprobado e integrado.

---

## 13. Criterios de transición hacia v0.7

Este plan no autoriza la apertura de v0.7.

v0.7 solo podrá considerarse después de que v0.6 haya producido suficientes documentos funcionales y de UX aprobados, especialmente:

- mapa funcional del ecosistema;
- modelo de experiencia de usuario;
- flujos funcionales conceptuales;
- recorridos sintéticos;
- criterios de interacción humano-IA;
- requisitos funcionales preliminares;
- insumos explícitos para arquitectura técnica + seguridad.

La apertura de v0.7 requerirá:

- cierre real de v0.6;
- gate independiente;
- autorización humana explícita;
- PR nuevo o mecanismo documental definido;
- confirmación de que no quedan ambigüedades funcionales críticas.

---

## 14. Dictamen metodológico

El trabajo de v0.6 debe avanzar como una hilera de faroles, no como incendio de papeles: un documento a la vez, con aprobación explícita, integración limpia, commit individual y verificación en PR.

El próximo documento sustantivo, una vez aprobado e integrado este plan, será:

`Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md`

Hasta entonces, este plan queda como **APROBADO** y no autoriza por sí mismo integración, arquitectura, implementación, validación ni despliegue.
