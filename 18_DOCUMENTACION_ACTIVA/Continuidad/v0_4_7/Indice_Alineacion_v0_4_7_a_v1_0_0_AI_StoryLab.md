# Índice de Alineación v0.4.7 a v1.0.0 : AI StoryLab

**Proyecto:** AI StoryLab 1  
**Documento:** Indice_Alineacion_v0_4_7_a_v1_0_0_AI_StoryLab.md  
**Fase:** v0.4.7 Diseño de Experiencia No Funcional  
**Horizonte:** v1.0.0 versión estable documentalmente gobernada  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-05  

---

## 1. Función de este índice

Este documento explica cómo el paquete v2 de v0.4.7 se alinea con la ruta de desarrollo hacia **v1.0.0**.

No define versión final. No autoriza implementación. Solo ubica la fase v0.4.7 dentro de la travesía completa.

---

## 2. Hilo de continuidad

```text
v0.4.5:
  Specs Núcleo
  consolidó:
    - consentimiento informado y situado;
    - datos y privacidad;
    - seguridad local-first.

v0.4.6:
  Arquitectura Conceptual No Funcional
  consolidó:
    - semillas arquitectónicas;
    - objetos de dominio;
    - threat model conceptual;
    - evidencia y portafolio;
    - decisiones reversibles;
    - gate de transición;
    - deuda de arquitectura conceptual.

v0.4.7:
  Diseño de Experiencia No Funcional
  debe consolidar:
    - lenguaje situado;
    - mapa de experiencia creativa;
    - escenarios ficticios;
    - criterios de interfaz no rígida;
    - controles habitables;
    - matrices ampliadas de acciones sensibles.

v1.0.0:
  horizonte:
    - sistema documentalmente estable;
    - gobernado por gates;
    - humano;
    - local-first por defecto;
    - auditable;
    - no extractivo;
    - con agencia humana protegida.
```

---

## 3. Alineación de v0.4.7

v0.4.7 conecta arquitectura conceptual con experiencia no funcional.

```text
arquitectura_conceptual:
  pregunta:
    ¿Qué entidades, relaciones, límites y amenazas existen?

experiencia_no_funcional:
  pregunta:
    ¿Cómo podría una persona comprender, pausar, retirar, revisar y habitar esas entidades sin perder agencia?

fase_futura:
  pregunta:
    ¿Qué condiciones documentales adicionales harían posible evaluar una transición sin violar guardarraíles?
```

---

## 4. Documentos v0.4.7 y su aporte hacia v1.0.0

```text
Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md:
  aporta:
    - método de trabajo;
    - secuencia segura;
    - revisión documento por documento.

Plan_Revision_Diseno_Experiencia_No_Funcional_AI_StoryLab.md:
  aporta:
    - criterios de revisión;
    - roles;
    - gates internos;
    - condiciones de pausa.

Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md:
  aporta:
    - zonas humanas de experiencia;
    - momentos de agencia;
    - puntos de pausa y retiro;
    - límites de visibilidad.

Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md:
  aporta:
    - lenguaje situado para cuatro perfiles;
    - claridad de consentimiento;
    - cuidado expresivo;
    - prevención de vigilancia.

Criterios_Interfaz_No_Rigida_AI_StoryLab.md:
  aporta:
    - principios de habitabilidad;
    - flexibilidad;
    - reversibilidad;
    - accesibilidad expresiva;
    - resistencia a flujos coercitivos.

Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md:
  aporta:
    - ejemplos seguros;
    - revisión por edad y contexto;
    - análisis sin personas reales;
    - preparación ética antes de cualquier experiencia.

Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md:
  aporta:
    - revisión de acciones sensibles;
    - criterios de consentimiento;
    - criterios de privacidad;
    - criterios de seguridad local-first.

Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md:
  aporta:
    - evaluación de cierre;
    - bloqueo de implementación prematura;
    - transferencia de deuda.
```

---

## 5. Relación con deuda heredada

```text
deuda: ejemplos_por_edad_y_contexto
v0.4.7:
  paga_con: Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md

deuda: guias_extensas_PH_IT_AT
v0.4.7:
  paga_con: Guia_Revision_PH_IT_AT_Diseno_Experiencia_AI_StoryLab.md

deuda: vocabulario_controlado_arquitectura_conceptual
v0.4.7:
  paga_con:
    - Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md
    - vocabulario controlado si se abre documento separado.

deuda: matrices_ampliadas_por_spec_y_acciones_sensibles
v0.4.7:
  paga_con: Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md

deuda: criterios_transicion_a_diseno_o_prototipo_futuro
v0.4.7:
  no_paga_completamente
  solo_prepara_condiciones_documentales
```

---

## 6. Límites de alineación

v0.4.7 está alineada con v1.0.0 solo si mantiene estos límites:

```text
[✓] trabaja experiencia como documentación;
[✓] usa escenarios ficticios;
[✓] usa microcopy conceptual, no final;
[✓] revisa acciones sensibles;
[✓] conserva local-first como principio;
[✓] conserva agencia humana;
[✓] documenta deuda;
[✓] cierra con gate.
```

Deja de estar alineada si:

```text
[!] crea prototipo;
[!] diseña UI real;
[!] usa personas reales;
[!] solicita datos reales;
[!] prueba flujos;
[!] automatiza evaluación;
[!] define arquitectura técnica;
[!] introduce cloud, auth o analíticas;
[!] convierte escenarios en actividades aplicables.
```

---

## 7. Señal de éxito

Al final de v0.4.7, el proyecto debe estar mejor preparado para una futura discusión de diseño, pero todavía sin haber cruzado hacia ella.

```text
éxito:
  experiencia_describible
  lenguaje_revisable
  escenarios_ficticios
  controles_habitables
  acciones_sensibles_mapeadas
  deuda_visible
  gate_ejecutado

fracaso:
  prototipo_disfrazado_de_documento
  microcopy_final
  UI_real
  investigación_implícita
  datos_reales
  automatización_encubierta
```

---

## 8. Dictamen de alineación

```text
paquete_v2:
  alineacion_con_v1_0_0: alta
  condicion: mantener_no_funcionalidad
  riesgo_principal: convertir_experiencia_en_prototipo
  mitigacion: gate + guardian_SDD + matrices_acciones_sensibles
  siguiente_paso: activar_v0_4_7_con_protocolo_documental
```

v0.4.7 debe ser el taller donde se dibuja cómo se habita el sistema antes de fabricar una puerta.
