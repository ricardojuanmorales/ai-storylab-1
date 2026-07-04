# Decisión : Modelo Evolutivo de Specs por Gates

**Proyecto:** AI StoryLab 1  
**Versión:** v0.4.5  
**Fecha:** 2026-07-04  
**Estado:** decisión rectora para PR #11  
**Fase:** specs operativas con semillas arquitectónicas  
**Ruta canónica:** `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Modelo_Evolutivo_Specs_por_Gates_AI_StoryLab_1_v0_4_5.md`

> **Guardarraíl constitucional v0.4.5**  
> Este documento es una pieza de especificación operativa y gobierno documental. No autoriza implementación funcional, código de aplicación, backend, cloud, autenticación, analíticas, IA externa por defecto, manejo de datos reales, subida automática ni automatizaciones funcionales. Toda transición posterior requiere revisión humana PH-IT-AT, análisis de riesgo, consentimiento informado y situado, criterios local-first, evidencia de gate y decisión documentada.


## 1. Decisión

AI StoryLab 1 adopta para v0.4.5 y la ruta hacia v1.0.0 un **modelo evolutivo de specs por gates**.

Esto significa que el proyecto **no intentará definir todas las specs futuras en v0.4.5**. En cambio, v0.4.5 define:

```text
[✓] specs núcleo necesarias para la primera protección constitucional;
[✓] criterios para crear nuevas specs;
[✓] índice oficial de gates;
[✓] mapa futuro de gates;
[✓] dependencias entre specs, gates, deuda y evidencia;
[✓] condiciones para transición a versiones posteriores.
```

Cada versión futura podrá crear, dividir, fusionar, refinar, aprobar, aplazar o convertir en deuda nuevas specs según:

```text
necesidad_del_gate;
riesgo_detectado;
madurez_conceptual;
evidencia_disponible;
dependencias_documentales;
revisión_PH_IT_AT;
criterios_local_first;
consentimiento_requerido;
deuda_aceptable_o_bloqueante.
```

## 2. Razón

La fase v0.4.5 no debe convertirse en una lista rígida de specs imaginadas antes de tiempo. Su tarea es más estratégica: enseñar al proyecto **cómo decidir cuándo una spec debe existir**.

El índice oficial de gates es suficiente porque no pretende contener todas las respuestas futuras. Contiene la estructura de decisión que permitirá llegar a v1.0.0 sin improvisar ética, privacidad, seguridad, experiencia, evidencia ni arquitectura.

## 3. Regla operativa

```text
Una spec nueva se crea cuando:
  - un gate la requiere;
  - una dependencia la vuelve necesaria;
  - un riesgo no puede controlarse sin ella;
  - una experiencia humana necesita protección explícita;
  - una transición de versión no puede cerrarse sin su evidencia.
```

```text
Una spec no debe crearse todavía cuando:
  - requiere datos reales no autorizados;
  - presupone backend, cloud, autenticación, analíticas o IA externa;
  - intenta resolver una arquitectura aún no aprobada;
  - convierte una semilla arquitectónica en implementación funcional;
  - no tiene criterios de revisión humana;
  - no puede declarar deuda de forma honesta.
```

## 4. Orden rector de planificación

Se confirma como orden longitudinal:

```text
A. Protección, consentimiento, privacidad y seguridad.
B. Experiencia creativa local-first.
C. Evidencia, trazabilidad e investigación-creación.
D. Semillas arquitectónicas y transición conceptual.
```

Este orden no elimina la creatividad ni la arquitectura. Las fundamenta. La experiencia creativa y las semillas arquitectónicas avanzan dentro de un marco de protección, evidencia y revisión humana.

## 5. Relación con el Índice Oficial de Gates

El índice oficial de gates queda reconocido como estructura suficiente para organizar la ruta hacia v1.0.0.

```text
Indice_Oficial_Gates_SDD_Ruta_v1_0_0
  -> Mapa_Gates_SDD_Ruta_v1_0_0
  -> Specs creadas evolutivamente por gate
  -> Evidencia y deuda por versión
  -> Decisiones de transición
```

## 6. Impacto en v0.4.5

v0.4.5 debe cerrar con:

```text
[ ] índice oficial de gates aprobado o aprobado con deuda menor;
[ ] mapa de gates redactado;
[ ] specs núcleo revisadas unitariamente;
[ ] criterios de creación evolutiva de specs documentados;
[ ] matriz de dependencias inicial;
[ ] registro de deuda v0.4.5 actualizado;
[ ] bitácoras activas actualizadas;
[ ] Bitácora del Capitán actualizada como hito narrativo.
```

## 7. Impacto PH-IT-AT

```text
PH:
  garantiza que cada spec nazca para proteger agencia humana,
  consentimiento, comprensión, no coerción y cuidado situado.

IT:
  garantiza que cada spec responda a evidencia, método,
  trazabilidad, validez, riesgo y revisión ética.

AT:
  garantiza que las specs no conviertan el proyecto en formulario rígido
  y que la experiencia creativa conserve juego, expresión y dimensión afectiva.
```

## 8. Impacto en perfiles de usuario

```text
estudiante_escuela_superior:
  no se diseñan specs que capturen, evalúen o expongan sin cuidado reforzado.

estudiante_universitario:
  se preserva autoría, reflexión, portafolio y agencia sobre evidencia.

docente:
  se evita convertir mediación pedagógica en vigilancia o evaluación automática.

investigador:
  se exige protocolo, trazabilidad, consentimiento y límites de uso secundario.
```

## 9. Deuda asociada

```text
deuda_nueva_v0_4_5:
  - desarrollar el Mapa_Gates_SDD_Ruta_v1_0_0 a partir del índice;
  - crear una matriz maestra de dependencias specs-gates-versiones;
  - definir criterios de cuándo una spec futura pasa de deuda a borrador;
  - ajustar changelog y prompts de continuidad para reflejar el modelo evolutivo.
```

## 10. Dictamen

Se aprueba el **modelo evolutivo de specs por gates** como hito rector de PR #11.

AI StoryLab 1 no crecerá por acumulación documental ni por prisa técnica. Crecerá por gates, evidencia, deuda explícita y revisión humana. Las specs serán semillas vivas: brotan cuando el terreno, el riesgo y la versión las necesitan.
