# Protocolo de Trabajo : Arquitectura Conceptual AI StoryLab

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.6 Arquitectura Conceptual No Funcional  
**Estado:** borrador para revisión documental  
**Punto de partida:** post-merge PR #11  
**Fase anterior cerrada:** v0.4.5 Specs Núcleo  
**Destino de integración:** PR #12  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha de preparación:** 2026-07-05  

> **Guardarraíl constitucional v0.4.6**  
> Este protocolo no autoriza implementación funcional, código de aplicación, UI real, backend, cloud, autenticación, analíticas, IA externa por defecto, datos reales, captura, almacenamiento, cifrado, permisos o retención técnica, sincronización, respaldo real, exportaciones reales, automatización funcional, pruebas con personas, evaluación automática, investigación con datos reales ni arquitectura técnica ejecutable.

---

## 1. Declaración de apertura

La fase **v0.4.6 Arquitectura Conceptual No Funcional** inicia después del merge de PR #11, que cerró la fase **v0.4.5 Specs Núcleo** como trabajo documental SDD.

PR #11 dejó aprobada la primera tríada constitucional de AI StoryLab 1:

```text
SPEC-OP-006: Consentimiento Informado y Situado.
SPEC-OP-007: Datos y Privacidad.
SPEC-OP-008: Seguridad Local-First.
```

Esta tríada no se interpreta como funcionalidad construida. Se interpreta como cerradura documental, ética y conceptual para toda fase posterior.

La fase v0.4.6 no pregunta todavía cómo construir. Pregunta primero:

```text
¿Qué conceptos existen?
¿Qué relaciones son legítimas?
¿Qué límites no deben cruzarse?
¿Qué amenazas conceptuales aparecen antes de cualquier prototipo?
¿Qué decisiones deben permanecer reversibles?
```

---

## 2. Propósito de la fase

La función de v0.4.6 es crear arquitectura conceptual no funcional para AI StoryLab 1.

Esta arquitectura debe describir:

```text
[ ] objetos de dominio;
[ ] relaciones conceptuales;
[ ] límites entre persona, evidencia, portafolio, narrativa, investigación y evaluación;
[ ] zonas conceptuales local-first;
[ ] amenazas conceptuales;
[ ] acciones sensibles;
[ ] decisiones reversibles;
[ ] criterios de transición hacia fases posteriores.
```

La arquitectura conceptual debe poder entenderse, revisarse y auditarse sin requerir:

```text
[ ] código;
[ ] base de datos;
[ ] API;
[ ] cuentas;
[ ] nube;
[ ] IA externa;
[ ] datos reales;
[ ] interfaz funcional;
[ ] automatización;
[ ] pruebas con personas.
```

---

## 3. Alcance autorizado

Durante v0.4.6 se autoriza únicamente trabajo documental y conceptual.

Se permite:

```text
[✓] definir conceptos;
[✓] clasificar relaciones;
[✓] declarar límites;
[✓] nombrar amenazas conceptuales;
[✓] proponer zonas no funcionales;
[✓] redactar criterios de revisión;
[✓] definir evidencia documental requerida;
[✓] registrar deuda;
[✓] preparar gates;
[✓] actualizar bitácora y transferencia simétrica cuando corresponda.
```

No se permite:

```text
[!] implementar funciones;
[!] crear código de aplicación;
[!] diseñar UI real;
[!] definir backend;
[!] definir infraestructura cloud;
[!] crear autenticación;
[!] crear analíticas;
[!] asumir IA externa por defecto;
[!] usar datos reales;
[!] definir captura, almacenamiento, cifrado, permisos o retención técnica;
[!] crear sincronización o respaldo real;
[!] crear exportaciones reales;
[!] automatizar procesos funcionales;
[!] realizar pruebas con personas;
[!] evaluar automáticamente;
[!] investigar con datos o evidencias reales;
[!] producir arquitectura técnica ejecutable.
```

---

## 4. Método de trabajo

La fase trabajará en rondas documentales.

Cada ronda debe:

```text
[ ] declarar objetivo;
[ ] identificar documentos base;
[ ] producir un documento o avance delimitado;
[ ] revisar contra la tríada constitucional;
[ ] registrar deuda si aparece;
[ ] evitar aprobación en bloque;
[ ] preservar continuidad documental.
```

No se aprobarán múltiples documentos a la vez. Cada pieza debe poder revisarse como unidad documental.

---

## 5. Roles activos

La revisión de v0.4.6 operará mediante roles simultáneos.

### guardian_SDD_constitucional

Protege gates, límites de fase, continuidad documental, deuda visible y no implementación prematura.

Pregunta principal:

```text
¿Este documento mantiene la fase dentro de arquitectura conceptual no funcional?
```

### arquitecto_documental

Organiza la estructura, rutas, nombres, dependencias, trazabilidad y relación con la ruta hacia v1.0.0.

Pregunta principal:

```text
¿Este documento se ubica correctamente en la arquitectura documental del proyecto?
```

### programador_humanista_PH

Protege agencia humana, consentimiento, pausa, retiro, comprensión, dignidad y control humano.

Pregunta principal:

```text
¿La persona conserva agencia antes, durante y después de cualquier acción conceptual?
```

### investigador_transdisciplinario_IT

Protege claridad epistémica, límites de evidencia, trazabilidad conceptual y distinción entre investigación, reflexión y evaluación.

Pregunta principal:

```text
¿Qué se considera evidencia, quién puede interpretarla y qué límites impiden convertirla en vigilancia?
```

### artista_transdisciplinario_AT

Protege experiencia creativa, aprendizaje lúdico, no rigidez, imaginación situada y expresión plural.

Pregunta principal:

```text
¿La arquitectura conceptual deja espacio para juego, ambigüedad fértil y creación humana?
```

### Bitacora_del_Capitan

Registra continuidad narrativa sin sustituir documentos normativos.

Pregunta principal:

```text
¿Qué rumbo se abrió, qué advertencia queda y qué brújula no debe olvidarse?
```

---

## 6. Pregunta triangular obligatoria

Toda decisión conceptual de v0.4.6 debe pasar por esta pregunta triangular:

```text
Consentimiento:
  ¿La persona entiende, acepta, puede pausar y puede retirar?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca?

Seguridad local-first:
  ¿En qué zona ocurre, qué amenaza conceptual activa y qué control humano requiere?
```

Si una decisión no puede responder estas tres preguntas, no está lista para avanzar.

---

## 7. Documentos canónicos activos

La fase v0.4.6 hereda como documentos activos mínimos:

```text
Cierre_Sesion_Post_Merge_Specs_Nucleo_AI_StoryLab.md
Continuidad_Ruta_Desarrollo_AI_StoryLab.md
Prompt_Activacion_Arquitectura_Conceptual_AI_StoryLab.md

Indice_Oficial_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
Tablero_Maestro_Dependencias_Specs_Gates_Versiones_AI_StoryLab_1_v0_4_5.md

Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md

Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Matriz_Acciones_Sensibles_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Gate_Aprobacion_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Glosario_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Guia_Revision_PH_IT_AT_Triangular_AI_StoryLab_1_v0_4_5.md

Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
Bitacora_Sesion_Activa_AI_StoryLab_1_v0_4_5.md
Bitacora_Transferencia_Simetrica_Activa_AI_StoryLab_1_v0_4_5.md
Changelog_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
```

---

## 8. Deuda heredada que se vuelve bloqueante

La siguiente deuda heredada debe tratarse como bloqueante si se intenta avanzar arquitectura conceptual sin encuadre:

```text
threat_model_detallado_local_first:
  estado: bloqueante para arquitectura conceptual sustantiva
  razon: no debe proponerse arquitectura conceptual, prototipo o persistencia sin amenazas ampliadas.

criterios_de_objeto_de_dominio:
  estado: bloqueante para nombrar entidades centrales
  razon: no deben definirse objetos conceptuales sin límites, legitimidad, agencia y relación con la tríada.

decisiones_reversibles:
  estado: bloqueante para fijar relaciones conceptuales
  razon: toda relación importante debe poder revisarse, pausarse, retirarse o revertirse documentalmente.

matriz_acciones_sensibles_arquitectura:
  estado: bloqueante para specs futuras de arquitectura
  razon: las acciones sensibles deben mapearse específicamente para esta fase.

limites_entre_concepto_diseno_prototipo_implementacion:
  estado: bloqueante transversal
  razon: cualquier ambigüedad puede deslizar la fase hacia implementación prematura.

guias_PH_IT_AT_ampliadas:
  estado: deuda vigilada
  razon: se vuelve bloqueante si una spec requiere revisión especializada no cubierta por la guía triangular núcleo.
```

---

## 9. Evidencia requerida por documento

Cada documento de v0.4.6 debe incluir, cuando aplique:

```text
[ ] propósito;
[ ] alcance no funcional;
[ ] documentos base;
[ ] relación con consentimiento;
[ ] relación con datos/privacidad;
[ ] relación con seguridad local-first;
[ ] límites explícitos;
[ ] riesgos conceptuales;
[ ] decisiones reversibles;
[ ] deuda abierta;
[ ] criterio de revisión PH-IT-AT;
[ ] condición de transición o cierre.
```

La ausencia de evidencia debe registrarse como deuda, no esconderse bajo alfombra ceremonial.

---

## 10. Secuencia documental autorizada

La secuencia base de v0.4.6 será:

```text
[1] Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
[2] Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
[3] Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
[4] Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
[5] Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
[6] Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
[7] Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md
[8] Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
[9] Registro_Deuda_v0_4_6_AI_StoryLab.md
[10] Changelog y transferencia simétrica de cierre
```

La numeración anterior expresa orden de trabajo, no prefijos de archivo.

---

## 11. Orden de aprobación para PR #12

PR #12 debe integrar los documentos de v0.4.6 de forma secuencial, no en bloque.

Criterio operativo:

```text
[ ] redactar un documento;
[ ] revisar el documento contra el protocolo;
[ ] corregir hallazgos;
[ ] aprobar el documento;
[ ] añadir solo ese documento o su conjunto mínimo de trazabilidad;
[ ] avanzar al siguiente documento.
```

No se debe usar `git add .`.

---

## 12. Gate esperado

La fase v0.4.6 debe preparar un gate de transición que evalúe si la arquitectura conceptual:

```text
[ ] explica el sistema sin construirlo;
[ ] distingue concepto, diseño, prototipo e implementación;
[ ] protege consentimiento situado;
[ ] minimiza datos y visibilidad;
[ ] mantiene seguridad local-first como principio conceptual;
[ ] identifica amenazas ampliadas;
[ ] define objetos de dominio con límites;
[ ] preserva decisiones reversibles;
[ ] evita evaluación automática;
[ ] evita investigación con datos reales;
[ ] deja deuda clasificada, visible y controlada.
```

El gate no debe declarar preparación funcional. Solo puede declarar preparación conceptual suficiente para pasar a la siguiente fase documental.

---

## 13. Relación con la ruta hacia v1.0.0

v0.4.6 prepara la base conceptual para fases posteriores, pero no adelanta su trabajo.

Relación de continuidad:

```text
v0.4.6:
  define arquitectura conceptual no funcional.

v0.4.7:
  podrá diseñar experiencia no funcional si v0.4.6 cierra con gate aprobado.

v0.5.x:
  podrá considerar prototipo local-first mínimo solo si existen gates previos,
  datos ficticios definidos y threat model ampliado.

v0.6.x:
  podrá preparar pruebas controladas solo con protocolo formal,
  consentimiento por perfil y revisión institucional si aplica.

v1.0.0:
  solo puede alcanzarse con deuda crítica cero,
  trazabilidad documental y revisión humana.
```

---

## 14. Dictamen de activación

```text
fase: v0.4.6 Arquitectura Conceptual No Funcional
estado: borrador_preparado_para_revision
implementacion: no_autorizada
primer_documento: Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
destino: PR #12
metodo: rondas documentales con revisión PH-IT-AT
gate_esperado: Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
deuda_bloqueante: visible_y_activa
criterio_rector: consentimiento + datos/privacidad + seguridad local-first
```

AI StoryLab 1 entra a arquitectura conceptual como quien entra a una sala de mapas: no para fundar ciudades todavía, sino para aprender qué territorios exigen permiso, cuidado y retorno posible.
