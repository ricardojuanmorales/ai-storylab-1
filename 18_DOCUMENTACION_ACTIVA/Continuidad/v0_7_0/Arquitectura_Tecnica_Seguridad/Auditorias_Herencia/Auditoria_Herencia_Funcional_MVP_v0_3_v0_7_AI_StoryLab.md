# Auditoría de Herencia Funcional MVP v0.3 → v0.7.0 · AI StoryLab 1

**Nombre canónico previsto:** `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Tipo de documento:** Auditoría funcional, técnica-conceptual y estratégica de herencia MVP  
**Estado:** Aprobado por revisión humana explícita para integración canónica semántica  
**Fecha de trabajo:** 2026-07-09  
**Zona horaria de referencia:** America/Puerto_Rico  
**Fuente canónica inmediata:** PR #23 en curso + Mapa de Decisiones Técnicas v0.7.0 aprobado  
**Documento rector previo:** `Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Auditorias_Herencia/Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

El `Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md` aprobó que la herencia funcional del MVP v0.3 debe auditarse antes de preservar, transformar, diferir, bloquear o trasladar sus elementos hacia documentos técnicos posteriores.

La auditoría parte de un criterio central:

```text
El MVP v0.3 no debe copiarse acríticamente ni descartarse como prototipo viejo.
Debe leerse como memoria funcional viva: contiene decisiones pedagógicas, técnicas, de privacidad, de autoría, de entrega y de acompañamiento que v0.7.0 debe gobernar antes de cualquier implementación.
```

Esta auditoría no implementa código, no selecciona stack final, no activa backend, no conecta APIs, no integra IA embebida, no despliega, no usa datos reales y no valida con personas.

---

## 1. Propósito

Este documento audita la herencia funcional del MVP v0.3 para determinar qué elementos deben:

- preservarse;
- transformarse;
- diferirse;
- bloquearse;
- mantenerse en auditoría.

La auditoría busca crear una base limpia para documentos posteriores de v0.7.0, especialmente:

- arquitectura local-first;
- modelo conceptual de datos;
- roles y permisos;
- Vista del Facilitador no vigilante;
- herramientas y recursos externos;
- prompts recomendados e IA no embebida;
- glosario operativo;
- entrega, portafolio y metadatos;
- arquitectura modular, objetos de dominio y principios SOLID.

---

## 2. Alcance

Esta auditoría cubre los elementos funcionales heredados del MVP v0.3 y su relación con v0.7.0:

- misiones y fases;
- actividades lúdicas;
- prompts sugeridos;
- evidencia;
- decisión humana;
- reflexión ética;
- glosario;
- tablero de herramientas;
- categorías y niveles de privacidad de herramientas;
- portafolio emergente;
- insignias;
- perfil local y avatar;
- almacenamiento local;
- export/import JSON;
- dashboard grupal del facilitador;
- entrega final;
- metadatos de entrega;
- documentación histórica y changelog;
- componentes y estructuras de datos como insumo conceptual, no como arquitectura final.

---

## 3. Fuera de alcance

Este documento no:

- diseña arquitectura final;
- selecciona stack;
- define base de datos;
- define APIs;
- implementa clases u objetos finales;
- migra código;
- evalúa calidad de código;
- activa IA embebida;
- valida con estudiantes, docentes o facilitadores;
- cierra la deuda `DFUX-FAC-v0.6-001`;
- aprueba la Vista del Facilitador;
- autoriza dashboard de monitoreo.

---

## 4. Fuentes inspeccionadas

| Fuente | Ruta |
|---|---|
| README histórico MVP v0.3 | `99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/README.md` |
| Changelog histórico MVP | `99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/CHANGELOG.md` |
| Sesiones | `src/data/sessions.json` |
| Herramientas | `src/data/tools.json` |
| Glosario | `src/data/glossary.json` |
| Constitución SDD v0.4.4 | `00_CONTROL_MAESTRO/Spec_Driven_Development/Constitucion_SDD_AI_StoryLab_1_v0_4_4.md` |
| Documentos PR #21 sobre deuda Vista Facilitador | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/` |
| Mapa de Decisiones Técnicas v0.7.0 | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Mapas_Decision/Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md` |

---

## 5. Taxonomía de auditoría

Cada elemento heredado se clasifica con una de cinco decisiones provisionales:

| Estado | Definición | Implicación |
|---|---|---|
| Preservar | El elemento expresa un principio o función que debe mantenerse. | Puede pasar a documento técnico conceptual. |
| Transformar | El elemento tiene valor, pero requiere rediseño por seguridad, privacidad, UX o gobernanza. | Debe reformularse antes de specs. |
| Diferir | El elemento puede ser útil, pero no pertenece al foco inmediato de v0.7.0. | Se registra para fase posterior. |
| Bloquear | El elemento contradice principios actuales o crea riesgo inaceptable. | No debe avanzar salvo rediseño radical. |
| Auditar | El elemento requiere revisión adicional antes de decidir. | Permanece abierto como deuda o riesgo. |

---

## 6. Matriz ejecutiva de herencia funcional

| # | Elemento heredado | Estado provisional | Prioridad | Documento destino |
|---:|---|---|---|---|
| 1 | 4 fases pedagógicas | Preservar | Alta | Arquitectura conceptual / modelo de misiones |
| 2 | 9 misiones | Preservar + transformar | Alta | Auditoría funcional / modelo de dominio |
| 3 | Actividades lúdicas interactivas | Preservar + transformar | Alta | Modelo de experiencia / objetos de dominio |
| 4 | `ludic_config` por misión | Transformar | Alta | Modelo conceptual de datos |
| 5 | Prompts sugeridos por misión | Preservar + gobernar | Alta | Prompts recomendados e IA no embebida |
| 6 | Campo `prompt_used` | Transformar | Alta | Prompts / privacidad / trazabilidad |
| 7 | Decisión humana documentada | Preservar | Crítica | Agencia humana / evidencia |
| 8 | Reflexión ética | Preservar | Crítica | Evidencia / IA responsable |
| 9 | Registro de evidencia | Transformar | Alta | Modelo de datos / trazabilidad |
| 10 | Glosario de 43 términos | Preservar + versionar | Alta | Glosario operativo |
| 11 | Chips de conceptos por misión | Transformar | Media-alta | UX / glosario / accesibilidad |
| 12 | Tablero de herramientas | Preservar + transformar | Alta | Ecosistema de herramientas |
| 13 | Categorías de herramientas | Preservar | Alta | Herramientas |
| 14 | Niveles de privacidad de herramientas | Preservar + ampliar | Crítica | Privacidad / herramientas |
| 15 | `teacher_note` editable | Auditar + transformar | Alta | Gobernanza institucional |
| 16 | Herramientas externas con cuenta o nube | Auditar | Crítica | Privacidad / seguridad |
| 17 | Portafolio emergente | Preservar + transformar | Alta | Entrega, portafolio y metadatos |
| 18 | Texto listo para copiar | Transformar | Media | Exportabilidad |
| 19 | Insignias desbloqueables | Diferir + auditar | Media | Motivación / UX futura |
| 20 | Perfil local del estudiante | Auditar + transformar | Alta | Modelo de datos / privacidad |
| 21 | Avatar local base64 | Auditar | Media-alta | Privacidad / almacenamiento |
| 22 | `localStorage` | Transformar | Alta | Arquitectura local-first |
| 23 | Export/import JSON individual | Preservar + transformar | Crítica | Local-first / seguridad |
| 24 | Dashboard grupal facilitador | Auditar + transformar | Crítica | Vista del Facilitador no vigilante |
| 25 | Importación múltiple de JSON | Auditar | Crítica | Seguridad / no vigilancia |
| 26 | Indicadores agregados grupales | Auditar + transformar | Crítica | Vista del Facilitador |
| 27 | Exportación `group_progress.json` | Auditar | Alta | Seguridad / privacidad |
| 28 | Entrega final MP4 | Preservar como patrón, no único formato | Alta | Entrega y metadatos |
| 29 | Metadatos del video final | Preservar + transformar | Crítica | Entrega / privacidad |
| 30 | No almacenar archivo de video | Preservar | Crítica | Entrega / local-first |
| 31 | GitHub Pages/deploy | Diferir | Media | Gobernanza técnica futura |
| 32 | Lógica desacoplada en `utils/` | Auditar como indicio modular | Media | Arquitectura modular / SOLID |
| 33 | Componentes React MVP | Auditar, no preservar automáticamente | Media | Arquitectura modular |
| 34 | Datos base JSON | Transformar conceptualmente | Alta | Modelo conceptual de datos |
| 35 | Políticas y guías MVP | Auditar + preservar criterios | Alta | Gobernanza / documentación humana |

---

## 7. Herencia 1 · Fases y misiones

### Evidencia heredada

El MVP v0.3 organiza el taller en 4 fases:

- fundamentos;
- narrativa;
- producción;
- curaduría.

También estructura 9 sesiones o misiones, cada una con pregunta guía, objetivos, actividad, producto esperado, prompt sugerido, campos de evidencia y términos de glosario.

### Dictamen provisional

```text
Estado: Preservar + transformar
Prioridad: Alta
```

### Justificación

Las fases y misiones son el esqueleto pedagógico del proyecto. No deben reemplazarse sin causa fuerte. Sin embargo, v0.7.0 debe convertirlas en un modelo conceptual robusto, no depender del formato JSON histórico como arquitectura final.

### Requisitos para v0.7.0

- Definir `Mision` como objeto de dominio candidato.
- Separar contenido pedagógico, configuración de actividad, evidencia y metadatos.
- Permitir versionado de misiones.
- Evitar que las misiones impongan una sola ruta rígida.
- Mantener alineación con agencia humana y aprendizaje lúdico.

### Riesgos

- Tratar las 9 misiones como estructura cerrada e inmutable.
- Confundir secuencia pedagógica con flujo técnico rígido.
- Perder trazabilidad entre misión, evidencia, prompt, herramienta y glosario.

---

## 8. Herencia 2 · Actividades lúdicas y `ludic_config`

### Evidencia heredada

El changelog v0.3 indica que `LudicActivityWidget.jsx` incorporó 9 tipos de widget:

```text
ethics_dilemma, word_counter, card_form, three_acts, moodboard,
reflection_check, peer_feedback, checklist, reflection
```

Además, `sessions.json` incorporó `ludic_config` en las 9 sesiones.

### Dictamen provisional

```text
Estado: Preservar + transformar
Prioridad: Alta
```

### Justificación

Las actividades lúdicas son una de las piezas más valiosas del MVP porque convierten el aprendizaje en producción de portafolio. Sin embargo, su configuración debe auditarse como modelo de datos y como experiencia, no copiarse como estructura final.

### Requisitos para v0.7.0

- Definir tipos de actividad como conceptos, no componentes finales.
- Separar plantilla, instrucciones, campos, salida y evidencia.
- Evitar que cada actividad capture datos innecesarios.
- Definir qué salidas pasan al portafolio y cuáles permanecen privadas.
- Evaluar accesibilidad y claridad de instrucciones.

### Riesgos

- Formularios disfrazados de juego.
- Captura excesiva de datos.
- Actividades demasiado rígidas.
- Confusión entre producción creativa y evaluación.

---

## 9. Herencia 3 · Prompts sugeridos y documentación de prompts del usuario

### Evidencia heredada

El MVP v0.3 incluye prompts sugeridos por misión y un componente `SuggestedPromptBox.jsx` con botón para copiar y usar. También pre-llena `prompt_used`.

### Dictamen provisional

```text
Estado: Preservar + gobernar
Prioridad: Alta
```

### Justificación

Los prompts sugeridos materializan la decisión ya acordada para v0.7.0: IA externa, voluntaria, no embebida y guiada por agencia humana. No deben convertirse en llamadas automáticas, integraciones invisibles ni uso obligatorio de IA.

### Requisitos para v0.7.0

- Crear gobernanza de prompts recomendados.
- Distinguir prompt sugerido, prompt usado, resumen de prompt y referencia externa.
- Evitar almacenar prompts completos cuando haya sensibilidad.
- Añadir advertencias antes de copiar datos personales a herramientas externas.
- Registrar decisión humana posterior al uso.
- Versionar prompts recomendados.

### Riesgos

- Prompt sugerido como instrucción prescriptiva.
- Uso de IA externa tratado como requisito.
- Prellenado de `prompt_used` sin reflexión.
- Exposición de datos sensibles en servicios externos.
- Pérdida de autoría humana.

---

## 10. Herencia 4 · Evidencia, decisión humana y reflexión ética

### Evidencia heredada

Las misiones utilizan campos de evidencia como:

- `evidence_summary`;
- `tool_used`;
- `prompt_used`;
- `human_decision`;
- `ethical_reflection`.

La decisión humana y la reflexión ética aparecen como requisitos recurrentes.

### Dictamen provisional

```text
Estado: Preservar + transformar
Prioridad: Crítica
```

### Justificación

La decisión humana documentada y la reflexión ética son el núcleo de agencia responsable en AI StoryLab. La evidencia debe sostener el portafolio sin convertirse en vigilancia, ranking o evaluación automatizada.

### Requisitos para v0.7.0

- Preservar `human_decision` como campo crítico.
- Preservar `ethical_reflection` como campo crítico.
- Definir cuándo `tool_used` y `prompt_used` son necesarios.
- Separar evidencia privada, evidencia compartida y evidencia exportable.
- Diseñar trazabilidad formativa no vigilante.

### Riesgos

- Evidencia como cumplimiento mecánico.
- Reflexión ética como casilla decorativa.
- Trazabilidad convertida en monitoreo.
- `tool_used` usado como indicador de rendimiento.

---

## 11. Herencia 5 · Glosario operativo

### Evidencia heredada

El MVP v0.3 contiene un glosario con `schema_version: 0.3.0`, 8 categorías y 43 términos. Los términos se vinculan a sesiones, etiquetas y definiciones.

### Dictamen provisional

```text
Estado: Preservar + versionar
Prioridad: Alta
```

### Justificación

El glosario es lenguaje canónico, ayuda contextual y capa de accesibilidad conceptual. Debe preservarse como sistema vivo y versionado, no como archivo decorativo.

### Requisitos para v0.7.0

- Definir gobernanza del glosario.
- Separar glosario pedagógico, técnico e institucional.
- Mantener definiciones breves y situadas.
- Versionar cambios.
- Vincular términos a decisiones sensibles.
- Evaluar accesibilidad cognitiva.

### Riesgos

- Definiciones contradictorias entre documentos.
- Lenguaje técnico inaccesible.
- Glosario desconectado de la experiencia.
- Falta de versionado.

---

## 12. Herencia 6 · Tablero de herramientas

### Evidencia heredada

`tools.json` incluye:

- tipos de herramienta;
- niveles de dificultad;
- niveles de privacidad;
- categorías;
- estrategias;
- prompts recomendados;
- herramientas concretas;
- ejemplos;
- `teacher_note` editable.

### Dictamen provisional

```text
Estado: Preservar + transformar
Prioridad: Alta
```

### Justificación

El tablero de herramientas es una capa técnico-pedagógica crítica. Orienta recursos externos, privacidad, estrategias y decisiones docentes. No debe convertirse en stack, marketplace, integración automática ni recomendación institucional sin gobernanza.

### Requisitos para v0.7.0

- Mantener clasificación por privacidad.
- Ampliar categorías de riesgo.
- Definir gobernanza de `teacher_note`.
- Distinguir recomendación de herramienta vs. integración.
- Exigir advertencias para herramientas con cuenta o nube.
- Permitir alternativas locales.
- Registrar uso de herramientas como transparencia, no como métrica de rendimiento.

### Riesgos

- Endorsement institucional accidental.
- Servicios externos cambiantes.
- Desigualdad de acceso.
- Exposición de datos por herramientas en la nube.
- Conversión del tablero en dependencia técnica.

---

## 13. Herencia 7 · Perfil local, avatar y personalización

### Evidencia heredada

El MVP v0.2.0 introdujo perfil local del estudiante con seudónimo, grado, cohorte, modalidad, equipo, proyecto, docente, facilitador y sponsor. v0.3.0 añadió avatar local como base64.

### Dictamen provisional

```text
Estado: Auditar + transformar
Prioridad: Alta
```

### Justificación

El perfil sostiene personalización y continuidad, pero toca privacidad, identidad, menores, relación institucional y potencial exposición. El avatar local es compatible con local-first, pero debe auditarse por tamaño, sensibilidad, consentimiento y exportación.

### Requisitos para v0.7.0

- Minimizar campos de perfil.
- Distinguir datos necesarios, opcionales y prohibidos.
- Evaluar seudonimización.
- Definir si grado/cohorte/equipo son necesarios.
- Evitar datos personales sensibles.
- Definir manejo de avatar en exportaciones.

### Riesgos

- Perfil demasiado identificable.
- Exportaciones con datos personales.
- Avatar como dato sensible.
- Campos institucionales usados para vigilancia o ranking.

---

## 14. Herencia 8 · Local-first, `localStorage` y portabilidad

### Evidencia heredada

El MVP declara local-first: progreso en `localStorage`, export/import JSON, avatar base64 local, metadatos del video final y no almacenamiento del archivo de video. También declara que no envía datos a servidores, no requiere login y no se conecta a APIs externas.

### Dictamen provisional

```text
Estado: Preservar principio + transformar mecanismo
Prioridad: Crítica
```

### Justificación

Local-first es principio rector. `localStorage` fue solución histórica útil, pero no debe convertirse automáticamente en arquitectura final. Export/import JSON es valioso para portabilidad, pero requiere diseño de seguridad.

### Requisitos para v0.7.0

- Preservar control local.
- Auditar riesgos de `localStorage`.
- Definir esquema conceptual de exportación.
- Validar importación sin sobrescritura peligrosa.
- Evitar exposición accidental de datos.
- Considerar cifrado, separación de datos o exportación selectiva como criterios futuros, sin implementar.

### Riesgos

- Pérdida o corrupción local.
- Exportaciones con datos sensibles.
- Importaciones maliciosas o erróneas.
- JSON grupal como mecanismo de vigilancia.
- Falsa seguridad por “solo local”.

---

## 15. Herencia 9 · Portafolio emergente

### Evidencia heredada

El MVP describe un portafolio que se construye automáticamente a partir de evidencias de misión y produce texto listo para copiar.

### Dictamen provisional

```text
Estado: Preservar + transformar
Prioridad: Alta
```

### Justificación

El portafolio emergente es pedagógicamente fuerte porque evita que la entrega final sea un apéndice tardío. Pero “automático” debe rediseñarse con revisión humana, control de exportación y privacidad.

### Requisitos para v0.7.0

- Preservar portafolio como continuidad de evidencia.
- Permitir revisión, edición y exclusión humana.
- Separar borrador privado, portafolio exportable y evidencia compartida.
- Evitar que el portafolio automático publique reflexiones sensibles.
- Registrar autoría y decisiones humanas.

### Riesgos

- Portafolio como extracción automática de datos.
- Inclusión de reflexiones privadas sin revisión.
- Confusión entre portafolio y evaluación.
- Exportación excesiva.

---

## 16. Herencia 10 · Dashboard grupal y Vista del Facilitador

### Evidencia heredada

El MVP v0.2.0 incorporó dashboard grupal del facilitador que importa múltiples JSON, fusiona por `student_code + last_updated`, muestra tabla e indicadores agregados y exporta `group_progress.json`.

### Dictamen provisional

```text
Estado: Auditar + transformar
Prioridad: Crítica
Deuda vinculada: DFUX-FAC-v0.6-001
```

### Justificación

Este es el punto más delicado de la herencia MVP. Tiene valor para acompañamiento pedagógico, pero también riesgo directo de vigilancia, ranking, monitoreo continuo y facilitador como administrador total.

### Requisitos para v0.7.0

- Auditar cada dato visible al facilitador.
- Definir propósito formativo de la vista.
- Separar acompañamiento de administración.
- Evitar ranking, métricas comparativas y monitoreo continuo.
- Revisar importación de JSON individual como mecanismo de acceso.
- Definir agregación segura.
- Determinar qué requiere consentimiento.
- Mantener `DFUX-FAC-v0.6-001` activa hasta cierre técnico real.

### Riesgos

- Dashboard de vigilancia.
- Ranking indirecto.
- Tabla grupal con exposición individual excesiva.
- Acumulación de JSON como base de datos manual.
- Facilitador con acceso total.
- Exportación grupal insegura.

### Dictamen específico

```text
La Vista del Facilitador no puede heredarse directamente del dashboard grupal v0.3.
Debe rediseñarse desde no vigilancia, mínimo privilegio, agregación responsable y agencia humana.
```

---

## 17. Herencia 11 · Entrega final, MP4 y metadatos

### Evidencia heredada

El MVP culmina en S9: `Premier y Entrega Final`, con video MP4 entregado y metadatos registrados. También define estación de entrega final con metadatos del video, validaciones y no almacenamiento del archivo.

### Dictamen provisional

```text
Estado: Preservar + transformar
Prioridad: Crítica
```

### Justificación

La entrega final es cierre pedagógico, técnico y ético. No debe reducirse a un upload. Los metadatos sostienen autoría, créditos, declaración de IA, licencias y trazabilidad responsable, pero pueden exponer información sensible.

### Requisitos para v0.7.0

- Preservar entrega como cierre ritual y documental.
- Mantener principio de no almacenar archivo de video.
- Definir metadatos mínimos.
- Separar archivo final, evidencia, créditos y portafolio.
- Incorporar declaración de uso de IA.
- Definir formato MP4 como patrón heredado, no necesariamente único formato futuro.
- Proteger privacidad en metadatos.

### Riesgos

- Metadatos identificables.
- Subida automática de archivos.
- Entrega convertida en repositorio de videos.
- Declaración de IA incompleta o mecánica.
- MP4 impuesto sin accesibilidad alternativa.

---

## 18. Herencia 12 · Insignias, motivación y gamificación

### Evidencia heredada

El MVP incluye 9 insignias desbloqueables y muro de insignias.

### Dictamen provisional

```text
Estado: Diferir + auditar
Prioridad: Media
```

### Justificación

Las insignias pueden sostener motivación lúdica, pero también pueden generar jerarquía, comparación o presión de cumplimiento. No son prioridad técnica inmediata de v0.7.0 salvo por su relación con progreso, evidencia y no ranking.

### Requisitos para v0.7.0

- Evitar rankings de insignias.
- No convertir insignias en evaluación.
- Diseñar como reconocimiento personal o de proceso, no competencia.
- Auditar relación con Vista del Facilitador.

### Riesgos

- Gamificación competitiva.
- Presión por completar sobre reflexión.
- Métrica visible para comparar estudiantes.

---

## 19. Herencia 13 · Componentes, utils y modularidad

### Evidencia heredada

El changelog v0.2.0 indica lógica desacoplada en `src/utils/`, preparada para migrar a API. v0.3.0 añadió componentes como `LudicActivityWidget.jsx`, `SuggestedPromptBox.jsx`, `ToolCategoryView.jsx` y ajustes en `MissionView.jsx`.

### Dictamen provisional

```text
Estado: Auditar como indicio modular
Prioridad: Media
```

### Justificación

Los componentes y utilidades históricas pueden revelar objetos de dominio y responsabilidades, pero no deben convertirse en arquitectura final. v0.7.0 puede extraer criterios POO/SOLID, responsabilidades y límites conceptuales.

### Requisitos para v0.7.0

- Identificar objetos de dominio candidatos.
- Separar dominio, presentación, persistencia y exportación.
- Evaluar responsabilidades únicas.
- Evitar acoplamiento a React, Vite o implementación previa.
- No diseñar clases finales.

### Riesgos

- Copiar estructura React como arquitectura conceptual.
- Diseñar desde componentes, no desde dominio humano.
- Confundir utilidad técnica con modelo de datos.
- Migrar a API por inercia.

---

## 20. Objetos de dominio candidatos extraídos

Esta auditoría identifica los siguientes objetos de dominio candidatos para documentos posteriores. No son clases finales.

| Objeto candidato | Derivado de herencia | Documento destino |
|---|---|---|
| Proyecto creativo | Perfil + misiones + entrega | Arquitectura modular |
| Misión | `sessions.json` | Modelo de dominio |
| Fase | `phases[]` | Modelo de dominio |
| Actividad lúdica | `ludic_config` | Modelo UX / dominio |
| Evidencia | `evidence_fields` | Modelo de datos |
| Decisión humana | `human_decision` | Agencia / trazabilidad |
| Reflexión ética | `ethical_reflection` | IA responsable |
| Prompt recomendado | `suggested_prompt` | Prompts no embebidos |
| Prompt usado | `prompt_used` | Privacidad / prompts |
| Herramienta | `tools[]` | Ecosistema herramientas |
| Categoría de herramienta | `categories[]` | Herramientas |
| Nota institucional | `teacher_note` | Gobernanza institucional |
| Término de glosario | `glossary.json` | Glosario operativo |
| Portafolio | `portfolio.js` / README | Entrega y portafolio |
| Entrega final | S9 | Entrega y metadatos |
| Metadato de entrega | Estación de entrega | Privacidad / entrega |
| Perfil local | Perfil estudiante | Modelo de datos |
| Vista del Facilitador | Dashboard grupal | Roles / no vigilancia |
| Exportación individual | JSON individual | Local-first / seguridad |
| Exportación grupal | `group_progress.json` | Seguridad / no vigilancia |
| Deuda | DFUX-FAC-v0.6-001 | Registro de deuda |

---

## 21. Deudas y riesgos generados por la herencia

| Deuda o riesgo | Severidad | Documento que debe resolverlo |
|---|---|---|
| Dashboard grupal puede convertirse en vigilancia | Crítica | Vista_Facilitador_No_Vigilante |
| Importación múltiple de JSON puede crear base de datos manual | Crítica | Seguridad / Vista Facilitador |
| `student_code + last_updated` puede sostener trazabilidad identificable | Alta | Modelo de datos / privacidad |
| `prompt_used` puede contener datos sensibles | Alta | Prompts / privacidad |
| Herramientas en nube pueden exponer datos | Alta | Herramientas / privacidad |
| `teacher_note` editable sin gobernanza puede introducir riesgo institucional | Alta | Herramientas / gobernanza |
| Perfil local puede contener identificación excesiva | Alta | Modelo de datos |
| Avatar base64 puede ser dato sensible | Media-alta | Privacidad local-first |
| Portafolio automático puede incluir reflexiones privadas | Alta | Portafolio / trazabilidad |
| Insignias pueden inducir ranking | Media | UX / no ranking |
| MP4 como único formato puede limitar accesibilidad | Media | Entrega / accesibilidad |
| Componentes previos pueden sesgar arquitectura futura | Media | Arquitectura modular |

---

## 22. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- 4 fases pedagógicas.
- 9 misiones como estructura base.
- Decisión humana documentada.
- Reflexión ética.
- IA como herramienta, no autora.
- Prompts recomendados como andamiaje externo.
- Glosario como lenguaje canónico.
- Herramientas como orientación, no integración.
- Portafolio emergente como principio.
- Local-first como principio.
- No almacenar archivo final de video.
- Entrega con metadatos mínimos.

### Transformar

- Formato histórico de `sessions.json`.
- `ludic_config`.
- Evidencia y campos de registro.
- `prompt_used`.
- Tablero de herramientas.
- `teacher_note`.
- Perfil local.
- Avatar local.
- `localStorage`.
- Export/import JSON.
- Portafolio automático.
- Entrega MP4 como formato no exclusivo.
- Metadatos de entrega.

### Diferir

- Insignias como sistema motivacional completo.
- GitHub Pages/deploy.
- Automatización de generación de documentos finales.
- Integraciones futuras con APIs.
- Autenticación o base de datos remota.
- Subida de archivos o videos.
- IA embebida productiva.

### Bloquear

- Dashboard de vigilancia.
- Ranking estudiantil.
- Monitoreo continuo.
- Facilitador administrador total.
- Importación automática de chats IA.
- Conexiones automáticas a herramientas externas.
- Uso obligatorio de IA externa.
- Evaluación automatizada como juez final.
- Subida automática de archivos o videos.
- Recolección de datos “por si acaso”.

### Mantener en auditoría

- Dashboard grupal heredado.
- Exportación `group_progress.json`.
- Importación múltiple de JSON.
- Uso de `student_code + last_updated`.
- Niveles actuales de privacidad de herramientas.
- Campos exactos del perfil.
- Manejo de avatar base64.
- Validaciones de entrega final.
- Relación entre badges, progreso y motivación.

---

## 23. Recomendaciones para documentos posteriores

### Documento inmediato recomendado

```text
Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md
```

Razón: la auditoría confirma que el dashboard grupal heredado es el punto de mayor riesgo por su relación con `DFUX-FAC-v0.6-001`.

### Documento alterno recomendado

```text
Ecosistema_Herramientas_Recursos_Externos_v0_7_AI_StoryLab.md
```

Razón: las herramientas atraviesan privacidad, IA externa, prompts, accesibilidad, experiencia docente y entrega.

### Secuencia sugerida

1. `Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md`
2. `Modelo_Datos_Conceptual_Privacidad_v0_7_AI_StoryLab.md`
3. `Ecosistema_Herramientas_Recursos_Externos_v0_7_AI_StoryLab.md`
4. `Prompts_Recomendados_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md`
5. `Entrega_Portafolio_Metadatos_v0_7_AI_StoryLab.md`
6. `Glosario_Operativo_Lenguaje_Canonico_v0_7_AI_StoryLab.md`
7. `Arquitectura_Modular_Objetos_Dominio_SOLID_v0_7_AI_StoryLab.md`

---

## 24. Criterios de aprobación humana de esta auditoría

Para aprobar esta auditoría, la persona responsable debe confirmar explícitamente que:

- la herencia MVP v0.3 quedó suficientemente inventariada;
- la clasificación preservar-transformar-diferir-bloquear-auditar es correcta o aceptable;
- la deuda `DFUX-FAC-v0.6-001` permanece activa;
- el dashboard grupal no queda aprobado como Vista del Facilitador;
- local-first queda preservado como principio, no como dependencia automática de `localStorage`;
- prompts sugeridos quedan preservados como andamiaje externo no embebido;
- herramientas quedan tratadas como orientación, no integración;
- glosario queda preservado como lenguaje canónico;
- entrega final y metadatos quedan tratados como cierre ético-técnico;
- ningún elemento heredado autoriza implementación.

---

## 25. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra la Auditoría de Herencia Funcional MVP v0.3 hacia v0.7.0 como documento sustantivo de Arquitectura Técnica + Seguridad.

El documento inventaría y clasifica los elementos heredados del MVP v0.3 bajo la matriz preservar, transformar, diferir, bloquear y auditar. La auditoría cubre misiones, actividades lúdicas, prompts sugeridos, evidencia, decisión humana, reflexión ética, glosario, herramientas, portafolio, localStorage, export/import JSON, dashboard grupal, entrega final y metadatos.

El hito preserva local-first, privacidad por defecto, seguridad por diseño, agencia humana, no vigilancia, no ranking estudiantil, no monitoreo continuo y mantiene activa la deuda DFUX-FAC-v0.6-001.

Este hito no implementa código, no selecciona stack final, no activa backend, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar auditoria herencia funcional mvp v0.3" \
  -m "Hito: integra auditoria de herencia funcional MVP v0.3 hacia v0.7.0. Clasifica misiones, herramientas, glosario, prompts, portafolio, entrega, localStorage, export/import JSON y dashboard grupal bajo preservar, transformar, diferir, bloquear y auditar. No implementa codigo ni selecciona stack final."
```

---

## 26. Dictamen de aprobación

La herencia funcional del MVP v0.3 es valiosa, pero no puede pasar completa y sin filtro hacia v0.7.0.

La auditoría recomienda:

- preservar la estructura pedagógica;
- transformar datos, almacenamiento, exportación y portafolio;
- gobernar prompts y herramientas;
- versionar glosario;
- rediseñar la Vista del Facilitador desde no vigilancia;
- mantener bloqueada toda implementación prematura;
- mantener activa `DFUX-FAC-v0.6-001`.

Esta auditoría cierra la primera familia como inventario y clasificación inicial de herencia funcional. No cierra las decisiones técnicas derivadas; las convierte en una mesa de decisión limpia para documentos técnicos posteriores.

---

## 27. Registro de aprobación humana

La persona responsable aprobó esta auditoría durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- la herencia MVP v0.3 queda suficientemente inventariada para esta etapa;
- la matriz preservar-transformar-diferir-bloquear-auditar queda aceptada como base de trabajo;
- la deuda `DFUX-FAC-v0.6-001` permanece activa;
- el dashboard grupal heredado no queda aprobado como Vista del Facilitador;
- local-first queda preservado como principio, no como dependencia automática de `localStorage`;
- prompts sugeridos quedan preservados como andamiaje externo no embebido;
- herramientas quedan tratadas como orientación, no integración;
- glosario queda preservado como lenguaje canónico;
- entrega final y metadatos quedan tratados como cierre ético-técnico;
- ningún elemento heredado autoriza implementación.

Esta aprobación autoriza continuar con la segunda familia del mapa:

```text
Arquitectura local-first
```

No autoriza código, stack final, backend, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
