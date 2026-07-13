# Modelo de Datos Conceptual v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 3 · Modelo conceptual de datos  
**Tipo de documento:** Documento técnico-conceptual, estratégico y pre-implementativo  
**Estado:** Aprobado por revisión humana explícita para integración canónica semántica  
**Fecha de trabajo:** 2026-07-09  
**Zona horaria de referencia:** America/Puerto_Rico  
**Documento rector previo:** `Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`  
**Documentos de entrada inmediatos:**  
- `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md`
- `Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Modelo_Datos/Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 3 aborda una pregunta central:

```text
¿Qué datos necesita AI StoryLab 1 para sostener creación, evidencia, portafolio, entrega y acompañamiento formativo sin convertir el aprendizaje en vigilancia?
```

La respuesta inicial es:

```text
El modelo de datos de AI StoryLab 1 v0.7.0 debe organizar evidencia, decisiones humanas, reflexión ética, herramientas, prompts, portafolio y entrega como objetos pedagógicos bajo control humano, no como rastros de monitoreo.
```

Este documento distingue la Familia 3 de la Familia 7.

- Familia 3 define **qué datos existen conceptualmente, cómo se relacionan y qué papel cumplen**.
- Familia 7 definirá posteriormente **privacidad por defecto, minimización, tratamiento de datos sensibles, reglas de exposición y controles de protección**.

Privacidad aparece aquí como criterio transversal, pero no sustituye el documento específico de la Familia 7.

---

## 1. Propósito

Este documento define el modelo conceptual de datos para AI StoryLab 1 v0.7.0.

Su función es:

- inventariar entidades conceptuales;
- distinguir datos de trabajo, evidencia, portafolio, entrega, acompañamiento, configuración y gobernanza;
- separar datos privados, exportables, compartidos y bloqueados;
- establecer relaciones entre objetos de dominio;
- preparar los documentos de roles, permisos, Vista del Facilitador, seguridad, privacidad y trazabilidad;
- evitar que la estructura histórica del MVP v0.3 se convierta automáticamente en modelo final;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- entidades de dominio candidatas;
- zonas de datos;
- relaciones conceptuales;
- clasificación funcional de datos;
- datos heredados del MVP v0.3;
- datos mínimos, opcionales, sensibles y bloqueados;
- criterios de exportación e importación;
- criterios de versionado de esquema;
- relación con local-first;
- relación con portafolio;
- relación con entrega final;
- relación con prompts e IA no embebida;
- relación con herramientas externas;
- relación con Vista del Facilitador;
- riesgos y controles conceptuales;
- decisiones candidatas.

---

## 3. Fuera de alcance

Este documento no:

- diseña una base de datos;
- selecciona tecnología de almacenamiento;
- define tablas, colecciones o clases finales;
- implementa esquemas JSON finales;
- define APIs;
- define backend;
- define autenticación;
- define roles finales;
- aprueba dashboard grupal;
- aprueba sincronización;
- aprueba IA embebida;
- aprueba subida de archivos;
- valida con personas;
- usa datos reales.

---

## 4. Fuentes inspeccionadas

| Fuente | Ruta |
|---|---|
| Primer de contexto v0.3.0 | `18_DOCUMENTACION_ACTIVA/Primers_Continuidad/PRIMER_PROJECT_CONTEXT.md` |
| Sesiones | `src/data/sessions.json` |
| Herramientas | `src/data/tools.json` |
| Validación de progreso | `src/utils/validation.js` |
| Importación grupal | `src/utils/groupImport.js` |
| Entrega final | `src/utils/finalSubmission.js` |
| Changelog MVP | `CHANGELOG.md` y archivo histórico v0.3 |
| Auditoría aprobada | `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md` |
| Arquitectura local-first aprobada | `Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md` |

---

## 5. Principio rector del modelo de datos

El modelo conceptual de datos de AI StoryLab 1 debe cumplir este principio:

```text
Cada dato debe existir porque sostiene una decisión humana, una evidencia formativa, una continuidad creativa, una entrega responsable o una necesidad de acompañamiento explícitamente justificada.
```

Por tanto:

- no se recopilan datos “por si acaso”;
- no se modelan datos para vigilar;
- no se modelan datos para ranking;
- no se modelan datos para monitoreo continuo;
- no se modelan datos para evaluación automática final;
- no se modelan datos para integrar IA embebida;
- no se modelan datos para subir archivos o videos automáticamente.

---

## 6. Herencia MVP v0.3 relevante para el modelo de datos

El MVP v0.3 dejó una estructura útil, pero no final.

### Datos base heredados

| Archivo o módulo | Aporte conceptual |
|---|---|
| `sessions.json` | Fases, misiones, objetivos, actividades, prompts, evidencia y glosario por misión. |
| `glossary.json` | Términos, categorías, sesiones asociadas y definiciones. |
| `tools.json` | Categorías, herramientas, niveles de privacidad, estrategias, prompts recomendados y nota docente. |
| `badges.json` | Insignias asociadas a misiones o competencias. |
| `competencies.json` | Competencias del proceso. |
| Progreso individual | Perfil, proyecto, sesiones, evidencia, portafolio, progreso y entrega. |
| Progreso grupal | Resúmenes por estudiante e indicadores agregados. |
| `finalSubmission.js` | Metadatos de entrega final sin almacenar video. |
| `validation.js` | Validación de `student_progress` y `group_progress`. |
| `groupImport.js` | Resumen, fusión y agregación de progreso grupal. |

### Dictamen

```text
Estado: transformar conceptualmente
```

Estos elementos orientan el modelo, pero no deben copiarse como esquema final.

---

## 7. Zonas de datos

El modelo adopta las zonas aprobadas por la Familia 2.

| Zona | Tipo de dato | Tratamiento conceptual |
|---|---|---|
| Zona privada de trabajo | Borradores, decisiones preliminares, reflexión en progreso. | Local, privada, no compartida por defecto. |
| Zona de evidencia formativa | Evidencia de misión, decisión humana, reflexión ética seleccionada. | Exportable bajo control humano. |
| Zona de portafolio | Evidencias curadas y organizadas para presentación. | Revisable, editable, exportable. |
| Zona de entrega | Metadatos mínimos, declaración IA, créditos, validaciones. | Compartible con minimización. |
| Zona de acompañamiento | Señales necesarias para apoyo formativo. | Mínima, justificada, no vigilante. |
| Zona institucional | Glosario, herramientas, notas docentes, configuraciones. | Versionada y gobernada. |
| Zona técnica | Versión de esquema, timestamps mínimos, validaciones. | Mínima, funcional. |
| Zona prohibida | Datos sensibles innecesarios, inferencias conductuales, ranking. | Bloqueada. |

---

## 8. Entidades conceptuales candidatas

Estas entidades son objetos de dominio conceptuales, no clases finales.

| Entidad | Definición | Zona primaria |
|---|---|---|
| Persona usuaria | Sujeto que interactúa con AI StoryLab. | Privada / roles futura |
| Perfil local | Datos mínimos de identificación operativa o seudónima. | Privada |
| Proyecto creativo | Unidad de creación narrativa/multimedia. | Privada / portafolio |
| Fase | Agrupación pedagógica de misiones. | Institucional |
| Misión | Unidad de trabajo creativo-formativo. | Institucional + evidencia |
| Actividad lúdica | Experiencia de producción vinculada a una misión. | Evidencia |
| Salida lúdica | Resultado producido por la actividad. | Evidencia / portafolio |
| Evidencia | Registro de producto, proceso o decisión. | Evidencia |
| Decisión humana | Elección documentada por la persona. | Evidencia crítica |
| Reflexión ética | Reflexión sobre el proceso, IA, autoría o impacto. | Evidencia crítica |
| Herramienta | Recurso externo o local sugerido/usado. | Institucional / evidencia |
| Categoría de herramienta | Agrupación pedagógica o técnica de herramientas. | Institucional |
| Prompt recomendado | Andamiaje textual sugerido por misión o herramienta. | Institucional |
| Prompt usado | Documentación manual del uso de IA externa. | Evidencia sensible |
| Glosario | Lenguaje canónico del proyecto. | Institucional |
| Término de glosario | Concepto con definición, categoría y vínculos. | Institucional |
| Portafolio | Conjunto curado de evidencias. | Portafolio |
| Entrega final | Cierre del proyecto creativo. | Entrega |
| Metadato de entrega | Dato mínimo sobre formato, archivo externo, créditos o validación. | Entrega |
| Insignia | Reconocimiento lúdico no competitivo. | Progreso / motivación |
| Competencia | Marco de desarrollo formativo. | Institucional |
| Progreso individual | Estado local de avance. | Privada / evidencia |
| Resumen de acompañamiento | Vista mínima derivada para apoyo. | Acompañamiento |
| Grupo o cohorte | Agrupación educativa. | Acompañamiento / institucional |
| Configuración docente | Nota o ajuste contextual de uso. | Institucional |
| Bitácora documental | Registro de decisiones, hito o sesión. | Gobernanza |
| Deuda | Riesgo, brecha o decisión pendiente. | Gobernanza |

---

## 9. Modelo conceptual de relaciones

Relaciones principales:

```text
Proyecto creativo
  contiene Perfil local mínimo
  contiene Misiones realizadas
  contiene Evidencias
  produce Portafolio
  culmina en Entrega final
```

```text
Misión
  pertenece a Fase
  incluye Actividad lúdica
  puede sugerir Prompt recomendado
  vincula Términos de glosario
  puede recomendar Herramientas
  produce Evidencia
```

```text
Evidencia
  puede incluir Salida lúdica
  puede incluir Herramienta usada
  puede incluir Prompt usado o resumen
  debe incluir Decisión humana
  debe incluir Reflexión ética cuando aplique
  puede alimentar Portafolio
```

```text
Portafolio
  selecciona Evidencias
  requiere curaduría humana
  puede incluir declaración IA
  puede exportarse manualmente
```

```text
Entrega final
  referencia archivo externo o ubicación
  registra Metadatos mínimos
  registra créditos y declaración IA
  no almacena archivo final
```

```text
Vista de acompañamiento
  deriva de datos mínimos
  no copia toda la evidencia
  no muestra reflexiones privadas por defecto
  no permite ranking
```

---

## 10. Clasificación funcional de datos

| Categoría | Ejemplos | Tratamiento inicial |
|---|---|---|
| Datos estructurales | fases, misiones, glosario, herramientas, competencias | Institucional, versionado |
| Datos de identidad operativa | seudónimo, código, cohorte, equipo | Minimizar y auditar |
| Datos creativos | logline, avatar narrativo, guion, moodboard, pitch | Privados o portafolio bajo control |
| Datos de evidencia | resumen, producto, decisión, reflexión | Local, exportable con revisión |
| Datos de IA | prompt recomendado, prompt usado, declaración de uso | Sensibles, manuales, no embebidos |
| Datos de herramienta | herramienta usada, categoría, privacidad | Transparencia, no métrica de rendimiento |
| Datos de progreso | misión completada, estado, fecha mínima | Auditar para no vigilancia |
| Datos de portafolio | entradas curadas, productos seleccionados | Exportables con decisión humana |
| Datos de entrega | nombre de archivo, duración, ubicación, créditos | Mínimos, no archivo |
| Datos grupales | resumen agregado o mínimo de acompañamiento | Auditar antes de Vista Facilitador |
| Datos técnicos | schema_version, export_type, last_updated | Mínimos y funcionales |
| Datos de gobernanza | decisiones, deudas, gates | Documentales |

---

## 11. Datos mínimos, opcionales, sensibles y bloqueados

### Datos mínimos candidatos

- versión de esquema;
- tipo de exportación;
- identificador local o seudónimo operativo;
- misión;
- estado de misión;
- evidencia mínima;
- decisión humana;
- reflexión ética cuando aplique;
- metadatos mínimos de entrega;
- declaración de uso de IA;
- créditos confirmados;
- revisión de privacidad confirmada.

### Datos opcionales candidatos

- nombre visible o seudónimo;
- título del proyecto;
- modalidad;
- equipo;
- herramientas usadas;
- resumen de prompt usado;
- avatar local;
- interés en galería;
- notas privadas;
- notas docentes institucionales.

### Datos sensibles o de alto cuidado

- prompts completos;
- reflexiones éticas personales;
- datos de identidad;
- avatar base64;
- enlaces privados;
- ubicación de archivo;
- cohortes pequeñas;
- estados individuales de avance;
- datos de voz, imagen o video;
- señales de dificultad, retraso o desempeño;
- interés en galería pública.

### Datos bloqueados

- ranking estudiantil;
- métricas comparativas individuales;
- historial de actividad minuto a minuto;
- monitoreo continuo;
- inferencias emocionales o psicológicas;
- datos biométricos;
- ubicación física;
- contacto personal innecesario;
- credenciales de herramientas externas;
- chats completos importados automáticamente;
- archivos finales almacenados automáticamente;
- calificaciones automáticas finales;
- datos “por si acaso”.

---

## 12. Modelo conceptual de progreso individual

El progreso individual debe entenderse como una estructura local de continuidad, no como expediente de vigilancia.

### Componentes conceptuales

| Componente | Función |
|---|---|
| Perfil mínimo | Mantener continuidad local y exportación identificable por la persona. |
| Proyecto | Nombrar y organizar la historia multimedia. |
| Misiones | Registrar avance y evidencia por sesión. |
| Evidencia | Documentar creación, decisión humana y reflexión ética. |
| Portafolio | Curar lo producido. |
| Entrega | Registrar cierre sin almacenar archivo final. |
| Progreso técnico | Mantener versión y fecha mínima para respaldo/importación. |

### Criterios

- El progreso pertenece primero a la persona usuaria.
- El progreso no debe usarse para ranking.
- El progreso no debe compartirse completo por defecto.
- El progreso exportado debe ser revisable.
- El progreso debe poder excluir datos sensibles.

---

## 13. Modelo conceptual de evidencia

La evidencia debe ser formativa, no fiscalizadora.

### Campos conceptuales candidatos

| Campo conceptual | Estado |
|---|---|
| resumen de evidencia | Transformar |
| producto de actividad | Preservar + transformar |
| herramienta usada | Preservar con minimización |
| prompt usado | Auditar + transformar |
| decisión humana | Preservar como crítico |
| reflexión ética | Preservar como crítico |
| vínculo a glosario | Preservar |
| estado de curaduría | Candidato |
| inclusión en portafolio | Candidato |
| visibilidad | Candidato para familias posteriores |

### Criterio central

```text
La evidencia existe para ayudar a la persona a pensar y mostrar su proceso, no para alimentar vigilancia.
```

---

## 14. Modelo conceptual de portafolio

El portafolio emerge de evidencias, pero no debe extraerse automáticamente sin control.

### Reglas conceptuales

- El portafolio se construye desde evidencias.
- La persona decide qué incluir.
- La persona puede editar, excluir o resumir.
- Reflexiones privadas no pasan automáticamente al portafolio.
- El portafolio exportable debe estar separado del progreso completo.
- El portafolio no debe incluir datos de acompañamiento.

### Datos candidatos del portafolio

- título del proyecto;
- resumen del proyecto;
- entradas seleccionadas por misión;
- productos de actividad;
- decisiones humanas seleccionadas;
- reflexiones éticas curadas;
- herramientas y recursos declarados;
- declaración de uso de IA;
- créditos;
- fecha de exportación.

---

## 15. Modelo conceptual de entrega final

La entrega final es una zona de cierre, no un almacén de archivos.

### Datos candidatos de entrega

- estado de entrega;
- formato;
- nombre de archivo declarado;
- duración aproximada;
- tamaño aproximado;
- ubicación externa declarada;
- nombre de archivo PowerPoint;
- nombre de archivo de portafolio;
- nombre de exportación JSON;
- confirmación de declaración IA;
- confirmación de créditos;
- confirmación de revisión de privacidad;
- licencia o condición de uso;
- interés en galería;
- opción de autoría pública;
- estado de validación por facilitador;
- notas.

### Datos bloqueados en la app

- archivo MP4;
- archivo PowerPoint;
- audio fuente;
- imágenes fuente;
- video subido automáticamente;
- enlace público generado automáticamente.

---

## 16. Modelo conceptual de herramientas

Las herramientas son orientación, no integración.

### Datos candidatos

- identificador de herramienta;
- nombre;
- tipo;
- categoría;
- fase o misión relacionada;
- dificultad;
- nivel de privacidad;
- descripción;
- ejemplo;
- estrategias de uso;
- prompts recomendados;
- nota institucional o docente.

### Criterios

- El nivel de privacidad es dato crítico.
- La nota docente requiere gobernanza.
- La herramienta usada por estudiante no debe convertirse en métrica de desempeño.
- Herramientas con cuenta o nube requieren advertencia.
- No se almacenan credenciales.
- No se envían datos automáticamente.

---

## 17. Modelo conceptual de prompts

Los prompts tienen dos naturalezas distintas.

| Tipo | Definición | Tratamiento |
|---|---|---|
| Prompt recomendado | Andamiaje institucional o pedagógico. | Versionado, local, reutilizable. |
| Prompt usado | Documentación manual de uso externo. | Sensible, opcionalmente resumible. |

### Reglas

- La app puede mostrar prompts recomendados.
- La app no llama APIs de IA.
- La app no importa chats.
- El prompt usado puede registrarse como resumen.
- Los prompts completos pueden contener datos sensibles.
- La documentación de prompts debe sostener transparencia, no vigilancia.

---

## 18. Modelo conceptual de glosario

El glosario es dato institucional y lenguaje canónico.

### Datos candidatos

- identificador de término;
- término;
- definición breve;
- categoría;
- sesiones asociadas;
- etiquetas;
- versión;
- estado;
- referencias internas.

### Criterios

- El glosario debe versionarse.
- Puede vincularse a misiones.
- Puede servir como ayuda contextual.
- No debe mezclar definiciones contradictorias.
- Debe sostener accesibilidad conceptual.

---

## 19. Modelo conceptual de acompañamiento

El acompañamiento es la zona más delicada del modelo.

### Datos potencialmente útiles

- misión actual;
- evidencias pendientes;
- entrega pendiente;
- confirmación de créditos;
- confirmación de declaración IA;
- señal agregada de avance;
- necesidad declarada de ayuda;
- bloqueos reportados por la persona.

### Datos que requieren cautela extrema

- estados individuales visibles en tabla grupal;
- fechas de actualización;
- número de insignias;
- avance comparado;
- interés en galería;
- validación por facilitador;
- reflexiones éticas;
- prompts usados;
- herramientas usadas.

### Dictamen

```text
El modelo de datos no aprueba todavía una Vista del Facilitador. Solo identifica candidatos que deberán pasar por roles, permisos, seguridad, privacidad y trazabilidad no vigilante.
```

---

## 20. Progreso grupal y agregación

La herencia `group_progress` debe permanecer en auditoría.

### Riesgos detectados

- fusión por `student_code`;
- selección de registro por `last_updated`;
- resumen individual en tabla;
- métricas de avance grupal;
- conteo de insignias;
- conteo de videos enviados;
- conteo de declaraciones IA;
- exportación grupal;
- posibilidad de reimportar progreso grupal.

### Tratamiento v0.7.0

```text
Estado: auditar + transformar
```

El progreso grupal no se bloquea como idea, pero sí se bloquea como herencia directa.

---

## 21. Versionado de esquema

Todo dato exportable debe tener versión conceptual.

### Criterios

- `schema_version` debe existir en exportaciones.
- `export_type` debe distinguir tipos de archivo.
- Las importaciones deben validar compatibilidad.
- Las migraciones deben ser explícitas.
- Los campos obsoletos deben documentarse.
- Las reparaciones automáticas deben ser mínimas y transparentes.
- Ninguna migración debe aumentar exposición de datos.

### Tipos de exportación candidatos

- `student_progress`;
- `student_portfolio`;
- `final_submission_metadata`;
- `tool_catalog`;
- `glossary_catalog`;
- `facilitator_support_summary`, pendiente de rediseño;
- `group_progress`, en auditoría, no aprobado como final.

---

## 22. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- `schema_version`;
- `export_type`;
- misiones como datos institucionales;
- evidencia por misión;
- decisión humana;
- reflexión ética;
- glosario;
- herramientas con nivel de privacidad;
- metadatos de entrega sin archivo;
- versionado de catálogos;
- portafolio emergente como principio.

### Transformar

- perfil local;
- `student_code`;
- `display_name`;
- `last_updated`;
- `prompt_used`;
- `ludic_output`;
- `portfolio_emergent`;
- export/import JSON;
- campos de video;
- notas;
- estados de misión;
- resumen grupal;
- métricas agregadas.

### Diferir

- modelo final de backend;
- autenticación;
- sincronización;
- base de datos remota;
- analíticas;
- galería pública;
- exportación institucional masiva;
- interoperabilidad con LMS.

### Bloquear

- ranking;
- monitoreo continuo;
- inferencias conductuales;
- importación automática de chats;
- almacenamiento automático de archivos finales;
- datos biométricos;
- credenciales externas;
- métricas comparativas individuales;
- evaluación automática final.

### Mantener en auditoría

- `group_progress`;
- dashboard grupal;
- importación múltiple de JSON;
- `student_code + last_updated`;
- badges como dato de progreso;
- galería candidata;
- validación por facilitador;
- avatar base64;
- enlaces privados;
- prompts completos.

---

## 23. Decisiones candidatas

### DEC-DATA-001 · Modelo conceptual antes que esquema técnico

```text
Estado: Candidata para aprobación documental
```

v0.7.0 debe definir primero entidades, zonas y relaciones conceptuales antes de diseñar esquemas técnicos.

### DEC-DATA-002 · Separación de progreso, portafolio y entrega

```text
Estado: Candidata para aprobación documental
```

El progreso individual, el portafolio exportable y los metadatos de entrega deben tratarse como estructuras distintas.

### DEC-DATA-003 · Evidencia como objeto formativo

```text
Estado: Candidata para aprobación documental
```

La evidencia se define como objeto formativo orientado a agencia humana, no como dato de vigilancia.

### DEC-DATA-004 · Prompt usado como dato sensible

```text
Estado: Candidata para aprobación documental
```

El prompt usado debe tratarse como dato sensible o potencialmente sensible. Puede registrarse como resumen, referencia o declaración, no necesariamente como texto completo.

### DEC-DATA-005 · Herramienta usada no es métrica de rendimiento

```text
Estado: Candidata para aprobación documental
```

El uso de herramientas debe documentarse para transparencia, no para comparar estudiantes.

### DEC-DATA-006 · Progreso grupal no heredado directamente

```text
Estado: Candidata para aprobación documental
```

`group_progress` y el dashboard grupal heredado permanecen en auditoría. No se aprueban como modelo final de acompañamiento.

### DEC-DATA-007 · Archivo final fuera del modelo de almacenamiento

```text
Estado: Candidata para aprobación documental
```

El modelo puede registrar metadatos de entrega, pero no almacenar archivos finales.

### DEC-DATA-008 · Zona prohibida explícita

```text
Estado: Candidata para aprobación documental
```

El modelo debe incluir una zona prohibida para datos que no deben existir en AI StoryLab 1.

---

## 24. Riesgos

| Riesgo | Severidad | Control conceptual |
|---|---|---|
| Modelo de datos derivado directamente del MVP | Alta | Transformar herencia antes de esquema. |
| Datos de progreso convertidos en vigilancia | Crítica | Separar evidencia, portafolio y acompañamiento. |
| `prompt_used` con datos sensibles | Alta | Permitir resumen o referencia. |
| Reflexiones privadas exportadas sin querer | Alta | Curaduría humana del portafolio. |
| `student_code` como identificador persistente | Alta | Auditar identificación operativa. |
| `last_updated` usado para monitoreo | Alta | Limitar función técnica. |
| Insignias como ranking | Media-alta | Tratar como motivación privada. |
| Grupo como base de datos manual | Crítica | Rediseñar Vista Facilitador. |
| Metadatos de entrega excesivos | Alta | Minimizar. |
| Enlaces privados expuestos | Alta | Cautela en entrega. |
| Avatar como dato sensible | Media-alta | Auditoría de exportación. |
| Herramientas externas como dependencia | Alta | Orientación, no integración. |

---

## 25. Relación con próximas familias

| Familia | Relación |
|---|---|
| Roles y permisos | Este modelo identifica qué datos podrían verse, pero no quién puede verlos. |
| Vista del Facilitador | Este modelo no aprueba la vista; delimita candidatos y riesgos. |
| Seguridad por diseño | Este modelo alimenta amenazas de exportación, importación y archivos. |
| Privacidad por defecto | Este modelo deja lista la clasificación para minimización. |
| Trazabilidad formativa | Este modelo separa evidencia de vigilancia. |
| Prompts e IA no embebida | Este modelo clasifica prompts recomendados y usados. |
| Herramientas | Este modelo define herramienta como dato orientador. |
| Glosario | Este modelo define glosario como dato institucional versionado. |
| Entrega y portafolio | Este modelo separa progreso, portafolio y entrega. |
| Arquitectura modular | Este modelo ofrece objetos de dominio candidatos. |

---

## 26. Preguntas abiertas

1. ¿Qué identificador mínimo sustituye o redefine `student_code`?
2. ¿Qué datos del perfil son realmente necesarios?
3. ¿Debe existir `display_name` o basta seudónimo local?
4. ¿Qué campos de evidencia son obligatorios?
5. ¿Debe el prompt usado guardarse completo, resumido o como declaración?
6. ¿Qué datos pasan al portafolio por defecto?
7. ¿Qué datos requieren revisión antes de exportar?
8. ¿Qué metadatos de entrega son mínimos?
9. ¿Cómo se versiona el glosario?
10. ¿Cómo se versiona el catálogo de herramientas?
11. ¿Qué datos puede ver un facilitador sin vigilancia?
12. ¿Cómo se maneja una cohorte pequeña sin identificar indirectamente?
13. ¿Qué datos deben excluirse siempre de exportaciones grupales?
14. ¿Qué estructura reemplaza `group_progress` si se rediseña?

---

## 27. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- el modelo conceptual no se confunde con esquema técnico final;
- la Familia 3 queda separada de la Familia 7;
- progreso, portafolio y entrega quedan diferenciados;
- evidencia se define como objeto formativo;
- decisión humana y reflexión ética quedan preservadas como datos críticos;
- prompt usado queda clasificado como dato sensible o potencialmente sensible;
- herramientas externas quedan como orientación, no integración;
- archivo final queda fuera del almacenamiento automático;
- `group_progress` queda en auditoría;
- dashboard grupal no queda aprobado;
- ranking, monitoreo continuo y vigilancia quedan bloqueados;
- ninguna decisión aquí activa implementación.

---

## 28. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el Modelo de Datos Conceptual de AI StoryLab 1 v0.7.0 como tercera familia del Mapa de Decisiones Técnicas.

El documento define entidades, zonas y relaciones conceptuales para progreso individual, evidencia, decisión humana, reflexión ética, prompts, herramientas, glosario, portafolio, entrega, metadatos y acompañamiento formativo.

El hito separa progreso, portafolio y entrega; clasifica prompt usado como dato sensible; preserva la evidencia como objeto formativo; mantiene group_progress y dashboard grupal en auditoría; y bloquea ranking, monitoreo continuo, vigilancia, almacenamiento automático de archivos finales e IA embebida.

Este hito no implementa código, no selecciona stack final, no diseña base de datos, no activa backend, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar modelo datos conceptual v0.7" \
  -m "Hito: integra la tercera familia del Mapa de Decisiones Tecnicas v0.7.0. Define entidades, zonas y relaciones conceptuales para progreso, evidencia, portafolio, entrega, prompts, herramientas, glosario y acompanamiento. Mantiene group_progress en auditoria y bloquea vigilancia, ranking, monitoreo continuo e implementacion prematura."
```

---

## 29. Dictamen de aprobación

La Familia 3 queda definida como el mapa de “qué datos existen y por qué”.

Su decisión más importante es:

```text
AI StoryLab 1 no debe modelar datos para controlar estudiantes; debe modelar datos para sostener creación, agencia, evidencia, portafolio, entrega responsable y acompañamiento humano.
```

Este documento cierra la tercera familia como modelo conceptual de datos aprobado. No cierra privacidad por defecto ni roles finales.  
Establece el marco para continuar con:

```text
Familia 4 · Roles y permisos
```

---

## 30. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- el modelo conceptual de datos queda separado del esquema técnico final;
- la Familia 3 queda separada de la Familia 7, preservando privacidad por defecto como familia propia;
- progreso, portafolio y entrega quedan diferenciados;
- evidencia queda definida como objeto formativo;
- decisión humana y reflexión ética quedan preservadas como datos críticos;
- prompt usado queda clasificado como dato sensible o potencialmente sensible;
- herramientas externas quedan como orientación, no integración;
- archivo final queda fuera del almacenamiento automático;
- `group_progress` queda en auditoría;
- dashboard grupal no queda aprobado;
- ranking, monitoreo continuo y vigilancia quedan bloqueados;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la cuarta familia del mapa:

```text
Roles y permisos
```

No autoriza código, stack final, backend, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
