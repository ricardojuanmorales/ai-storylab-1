# Prompts, Documentación de Uso de IA y No IA Embebida v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 9 · Prompts recomendados, documentación de prompts del usuario e IA no embebida  
**Tipo de documento:** Documento técnico-conceptual, pedagógico, ético, operacional y pre-implementativo  
**Estado:** Aprobado por revisión humana explícita para integración canónica semántica  
**Fecha de trabajo:** 2026-07-09  
**Zona horaria de referencia:** America/Puerto_Rico  
**Documento rector previo:** `Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`  
**Documentos de entrada inmediatos:**  
- `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md`
- `Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md`
- `Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md`
- `Modelo_Roles_Permisos_v0_7_AI_StoryLab.md`
- `Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md`
- `Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md`
- `Modelo_Privacidad_Defecto_v0_7_AI_StoryLab.md`
- `Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md`
- `AI_Usage_Policy_v0_4_0.md`
- `src/data/tools.json`
- `src/data/sessions.json`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Prompts_IA_No_Embebida/Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 9 aborda una pregunta central:

```text
¿Cómo debe AI StoryLab 1 recomendar, documentar y acompañar el uso de prompts e IA externa sin integrar IA embebida, sin evaluar automáticamente, sin importar conversaciones y sin debilitar la agencia humana?
```

La respuesta inicial es:

```text
AI StoryLab 1 puede ofrecer prompts recomendados como andamiaje pedagógico y permitir documentación manual del uso de IA externa, pero no debe convertir la IA en motor interno, evaluador automático, recolector de prompts completos ni sustituto de decisiones humanas.
```

La IA puede ser brújula, taller externo y espejo crítico.  
No debe ser piloto automático, inspector oculto ni archivo de conversaciones.

---

## 1. Propósito

Este documento define el modelo conceptual para prompts recomendados, documentación de prompts del usuario e IA no embebida en AI StoryLab 1 v0.7.0.

Su función es:

- preservar prompts recomendados como andamiaje;
- distinguir prompt recomendado de prompt usado;
- definir cómo documentar uso de IA externa;
- proteger prompts usados como datos de alto cuidado;
- preservar agencia humana;
- bloquear IA embebida;
- bloquear importación automática de chats;
- bloquear evaluación automática por IA;
- orientar declaración de uso IA;
- orientar créditos y atribución;
- preparar ecosistema de herramientas externas;
- preparar portafolio, entrega y exportabilidad;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- principios de IA no embebida;
- taxonomía de prompts;
- prompts recomendados;
- prompts adaptados por usuario;
- prompts usados;
- documentación manual del uso de IA;
- declaración de IA;
- relación con herramientas externas;
- relación con privacidad;
- relación con seguridad;
- relación con trazabilidad;
- relación con portafolio;
- relación con entrega final;
- relación con Vista del Facilitador;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- integra IA en la aplicación;
- define APIs;
- selecciona proveedor IA;
- define modelos IA;
- define costos;
- define autenticación con herramientas IA;
- define envío automático de datos;
- define importación de chats;
- define evaluación automática;
- define detector de IA;
- define scoring de originalidad;
- define analíticas de uso IA;
- define política legal final de IA;
- usa datos reales;
- valida con personas;
- implementa código;
- despliega.

---

## 4. Principio rector

```text
La IA en AI StoryLab 1 debe ser externa, opcional, transparente, documentada manualmente y subordinada a la decisión humana.
```

Corolarios:

- la app no llama IA;
- la app no evalúa con IA;
- la app no importa chats IA;
- la app no exige prompts completos;
- la app no perfila uso de IA;
- la app no mide dependencia de IA;
- la app puede recomendar prompts;
- la persona puede adaptar prompts;
- la persona documenta uso de IA;
- la persona decide qué incluir en portafolio o entrega;
- el facilitador acompaña, no fiscaliza.

---

## 5. Herencia y fundamento

La política activa de uso de IA declara el principio:

```text
La IA asiste. La persona decide.
```

También establece revisión humana obligatoria, prohíbe usar datos reales de estudiantes en prompts, prohíbe exponer progreso estudiantil en repositorios públicos, y prohíbe incorporar tracking, analytics o telemetría sin consentimiento.

El catálogo heredado de herramientas incluye:

- `recommended_prompts`;
- niveles de privacidad como `local`, `requiere cuenta`, `datos en la nube`;
- notas docentes editables;
- estrategias para usar IA como apoyo y no como sustitución;
- recordatorios de declarar uso de IA en imágenes, voz y presentación.

Dictamen:

```text
Estado: preservar andamiaje, transformar gobernanza
```

---

## 6. Definiciones operativas

### Prompt recomendado

```text
Plantilla o sugerencia pedagógica ofrecida por AI StoryLab 1 para orientar una tarea creativa, ética, técnica o reflexiva.
```

### Prompt adaptado

```text
Versión modificada por la persona usuaria a partir de un prompt recomendado.
```

### Prompt usado

```text
Instrucción o conjunto de instrucciones que la persona efectivamente usó en una herramienta externa de IA.
```

### Documentación de prompt

```text
Registro manual, resumido o referencial del uso de IA, realizado por la persona para sostener transparencia, atribución, reflexión y agencia.
```

### IA no embebida

```text
Modelo en el cual la aplicación no ejecuta, llama, integra ni automatiza servicios de IA; solo orienta su uso externo mediante prompts, criterios, advertencias y documentación manual.
```

---

## 7. Diferencia entre recomendado, adaptado y usado

| Tipo | Quién lo produce | Sensibilidad | Tratamiento |
|---|---|---|---|
| Prompt recomendado | Proyecto / currículo | Baja o media | Institucional, versionado |
| Prompt adaptado | Persona usuaria | Media o alta | Privado por defecto |
| Prompt usado | Persona usuaria en herramienta externa | Alto cuidado | Resumible, no visible por defecto |
| Output IA | Herramienta externa | Alto cuidado | Documentación selectiva |
| Declaración IA | Persona usuaria | Media | Exportable con revisión |
| Reflexión IA | Persona usuaria | Alto cuidado | Privada por defecto, seleccionable |

Regla:

```text
Un prompt recomendado no es evidencia de uso; un prompt usado no es dato público.
```

---

## 8. Qué puede hacer AI StoryLab 1 con prompts

Puede:

- ofrecer prompts recomendados;
- organizar prompts por misión;
- organizar prompts por herramienta o tipo de tarea;
- indicar nivel de privacidad de herramientas;
- sugerir adaptación;
- recomendar revisar privacidad antes de copiar datos;
- recomendar declarar uso de IA;
- recomendar atribuir herramientas;
- ofrecer campos para documentación manual;
- permitir resumen de uso IA;
- permitir reflexión ética;
- permitir declaración IA para portafolio o entrega;
- apoyar decisión humana posterior.

No puede:

- ejecutar el prompt;
- enviar el prompt a una API;
- completar automáticamente campos desde IA;
- importar conversaciones;
- exigir prompt completo;
- evaluar calidad con IA;
- comparar prompts entre estudiantes;
- medir cantidad de uso IA;
- inferir dependencia de IA;
- bloquear creatividad por uso IA;
- castigar por uso declarado;
- sustituir criterio humano.

---

## 9. Prompts recomendados como andamiaje

Los prompts recomendados deben funcionar como:

- iniciadores de pensamiento;
- apoyos de claridad;
- ayudas para revisión;
- guías de ética;
- apoyos para organización;
- sugerencias técnicas;
- rutas de accesibilidad;
- herramientas de exploración.

No deben funcionar como:

- respuesta única;
- plantilla obligatoria;
- sustitución de autoría;
- mecanismo de evaluación;
- guion cerrado;
- métrica de cumplimiento;
- canal de recolección de datos;
- herramienta de vigilancia.

Regla:

```text
Un prompt recomendado debe abrir posibilidades, no cerrar decisiones.
```

---

## 10. Reglas para redactar prompts recomendados

Todo prompt recomendado debe:

- evitar pedir datos personales;
- evitar pedir nombres reales si no son necesarios;
- evitar copiar reflexiones privadas;
- evitar pedir enlaces privados;
- evitar pedir archivos sensibles;
- pedir revisión humana;
- promover claridad del propósito;
- incluir contexto mínimo;
- usar lenguaje apropiado para estudiantes;
- promover atribución;
- promover agencia humana;
- permitir adaptación;
- evitar obediencia ciega a la IA;
- evitar generación de contenido inapropiado;
- evitar instrucciones de evaluación automática.

Ejemplo de estructura segura:

```text
Ayúdame a mejorar [tipo de producto] para [propósito]. 
No cambies mi idea principal. 
Dame 3 sugerencias y explica por qué cada una podría ayudar. 
Yo decidiré cuáles usar.
```

---

## 11. Prompt usado como dato de alto cuidado

El prompt usado puede contener:

- ideas privadas;
- datos personales;
- nombres;
- detalles del proyecto;
- dudas;
- errores;
- reflexiones;
- fragmentos de evidencia;
- decisiones creativas;
- información copiada a herramientas externas.

Por tanto:

- no debe ser visible por defecto;
- no debe exigirse completo;
- puede resumirse;
- puede describirse por tipo;
- puede referenciarse;
- puede omitirse si contiene información sensible;
- no debe usarse para ranking;
- no debe usarse para evaluación automática;
- no debe ser importado desde chats.

Regla:

```text
Documentar uso de IA no significa entregar la intimidad del proceso.
```

---

## 12. Modelos aceptables de documentación manual

La persona puede documentar uso de IA mediante:

### Declaración breve

```text
Usé una herramienta de IA para recibir sugerencias de claridad sobre mi guion.
```

### Resumen de prompt

```text
Pedí sugerencias para hacer más claro el conflicto principal de mi historia.
```

### Categoría de apoyo

```text
Apoyo recibido: revisión de texto, ideas visuales, organización, créditos, voz, accesibilidad.
```

### Herramienta usada

```text
Herramienta: generador de texto externo / generador de imagen / TTS / corrector.
```

### Decisión humana posterior

```text
Acepté una sugerencia, descarté dos y cambié el final por decisión propia.
```

### Reflexión ética

```text
Revisé que la IA no sustituyera mi mensaje principal ni mis créditos.
```

No debe requerirse:

- chat completo;
- prompt completo;
- output completo;
- capturas de pantalla;
- cuenta usada;
- URL privada;
- historial de iteraciones;
- cantidad de prompts;
- tiempo de uso.

---

## 13. Declaración de uso IA

La declaración de IA debe sostener transparencia sin castigo.

### Debe poder incluir

- herramienta o tipo de herramienta;
- tipo de apoyo recibido;
- decisión humana posterior;
- créditos o atribución;
- revisión ética;
- revisión de privacidad.

### No debe exigir

- prompt completo;
- conversación completa;
- output completo;
- prueba de uso;
- detector de IA;
- porcentaje de autoría automatizado;
- puntuación de originalidad;
- credenciales;
- enlace privado.

### Fórmula conceptual

```text
Usé IA para [tipo de apoyo]. 
La decisión final fue mía porque [decisión humana]. 
Revisé [créditos / privacidad / sesgos / adecuación].
```

---

## 14. IA externa y local-first

La IA externa rompe parcialmente el perímetro local.

Por eso:

- su uso es voluntario;
- debe advertirse si la herramienta requiere cuenta;
- debe advertirse si la herramienta procesa datos en la nube;
- debe recomendarse no copiar datos privados;
- debe recomendarse usar texto sintético o anonimizado cuando sea posible;
- debe recomendarse no subir archivos sensibles;
- debe recordarse que la app no controla políticas de terceros;
- debe documentarse el uso de forma manual;
- debe preservar decisión humana.

Dictamen:

```text
La IA externa es recurso, no infraestructura de AI StoryLab 1.
```

---

## 15. IA no embebida

En v0.7.0 queda bloqueado:

- API IA productiva;
- proveedor IA integrado;
- chatbot interno;
- generación automática dentro de la app;
- evaluación automática;
- retroalimentación automática IA;
- clasificación automática de estudiantes;
- importación automática de chats;
- completado automático de evidencias;
- análisis automático de portafolio;
- detector de IA;
- scoring de originalidad;
- recomendaciones personalizadas por perfilado;
- sincronización con cuentas IA.

Regla:

```text
AI StoryLab 1 puede enseñar a conversar con IA, pero no debe convertirse en una IA que conversa por dentro.
```

---

## 16. Relación con evidencia

La evidencia producida con apoyo de IA debe poder documentarse, pero no quedar automáticamente marcada como sospechosa.

### Puede incluir

- tipo de apoyo IA;
- decisión humana;
- herramienta declarada;
- crédito;
- reflexión ética;
- revisión de privacidad;
- versión curada.

### No debe incluir por defecto

- prompt completo;
- output completo;
- chat completo;
- historial de iteraciones;
- puntuación de originalidad;
- etiqueta punitiva;
- comparación con otros.

---

## 17. Relación con reflexión ética

La reflexión ética sobre IA debe ayudar a pensar:

- qué aportó la herramienta;
- qué decidió la persona;
- qué se descartó;
- qué sesgos se revisaron;
- qué se atribuyó;
- qué se protegió;
- qué dudas quedaron.

No debe convertirse en:

- confesión obligatoria;
- evaluación moral punitiva;
- diagnóstico de dependencia;
- filtro de autenticidad;
- justificación defensiva.

---

## 18. Relación con portafolio

El portafolio puede incluir:

- declaración IA breve;
- créditos;
- evidencia curada;
- reflexión seleccionada;
- decisión humana;
- nota sobre herramientas;
- revisión de privacidad.

No debe incluir por defecto:

- prompts completos;
- conversaciones;
- outputs extensos;
- borradores descartados;
- evidencia privada;
- capturas de chats;
- historial de iteraciones.

Regla:

```text
El portafolio muestra criterio, no vigilancia del proceso.
```

---

## 19. Relación con entrega final

La entrega final debe incluir solo lo necesario:

- declaración de uso IA;
- créditos;
- confirmación de revisión de privacidad;
- metadatos mínimos;
- licencia o condición de uso si aplica.

No debe incluir:

- archivo IA fuente;
- chat IA completo;
- prompts completos;
- credenciales;
- capturas de cuenta;
- enlace privado no revisado;
- datos reales.

---

## 20. Relación con Vista del Facilitador

La Vista del Facilitador puede acompañar uso de IA mediante:

- preguntas guía;
- recordatorios de atribución;
- recordatorios de privacidad;
- sugerencias de reformulación;
- apoyo para declaración IA;
- apoyo para revisar sesgos;
- apoyo para curaduría.

No puede:

- exigir chats;
- exigir prompts completos;
- evaluar automáticamente uso IA;
- sospechar por frecuencia de uso;
- comparar estudiantes;
- rankear uso de herramientas;
- aprobar automáticamente outputs IA;
- producir el trabajo por el estudiante;
- acceder a cuentas externas.

Gate:

```text
Si una función de IA aumenta vigilancia, dependencia o extracción de datos, queda bloqueada.
```

---

## 21. Relación con herramientas externas

Este documento prepara la Familia 10.

Principios:

- una herramienta listada no equivale a herramienta aprobada sin condiciones;
- cada herramienta debe tener nivel de privacidad;
- cada herramienta debe tener nota institucional;
- si requiere cuenta, debe advertirse;
- si usa nube, debe advertirse;
- si procesa voz, imagen o video, debe tratarse con cuidado;
- si genera contenido, debe requerir atribución;
- si permite alternativas locales, deben priorizarse;
- la app no debe guardar credenciales;
- la app no debe enviar datos automáticamente.

---

## 22. Relación con seguridad, privacidad y trazabilidad

### Seguridad

La IA externa es superficie de riesgo.

Controles:

- no API embebida;
- no tokens;
- no credenciales;
- no chats importados;
- no datos reales;
- no archivos sensibles.

### Privacidad

El prompt usado es dato de alto cuidado.

Controles:

- no visible por defecto;
- resumible;
- excluible;
- revisión antes de exportación;
- no exposición automática.

### Trazabilidad

La documentación de IA debe ser mínima y formativa.

Controles:

- declaración;
- tipo de apoyo;
- decisión humana;
- crédito;
- reflexión ética;
- no telemetría;
- no ranking.

---

## 23. Taxonomía conceptual de uso de IA

| Tipo de uso | Permitido | Condición |
|---|---|---|
| Lluvia de ideas | Sí | Decisión humana posterior |
| Revisión de claridad | Sí | No sustituye estilo personal |
| Corrección gramatical | Sí | Revisión humana |
| Organización de tareas | Sí | Ajuste contextual |
| Sugerencias visuales | Sí | Créditos y adecuación |
| Generación de imagen externa | Sí, con cuidado | Declaración, privacidad y licencia |
| TTS externo | Sí, con cuidado | Declarar voz IA |
| Revisión de créditos | Sí | Verificación humana |
| Generación completa del trabajo | No | Sustituye agencia |
| Evaluación automática | No | Bloqueado |
| Importación de chat | No | Bloqueado |
| Detector de IA | No | Bloqueado |
| Perfilado de estudiante | No | Bloqueado |

---

## 24. Campos conceptuales candidatos

Estos campos son conceptuales, no esquema final.

| Campo | Propósito | Sensibilidad |
|---|---|---|
| `ai_used` | Indicar si hubo IA externa | Media |
| `ai_tool_type` | Tipo general de herramienta | Media |
| `ai_tool_name_optional` | Nombre de herramienta si se decide registrar | Media |
| `ai_support_type` | Tipo de apoyo recibido | Media |
| `prompt_summary` | Resumen del prompt usado | Alto cuidado |
| `human_decision_after_ai` | Decisión humana posterior | Alta importancia |
| `ai_use_reflection` | Reflexión ética seleccionada | Alto cuidado |
| `credits_confirmed` | Atribución revisada | Media |
| `privacy_review_confirmed` | Revisión de privacidad | Media |
| `full_prompt_stored` | Debe ser falso por defecto | Alto cuidado / auditar |
| `chat_imported` | Debe ser falso | Bloqueado |

Regla:

```text
Los campos deben probar agencia humana, no recolectar intimidad.
```

---

## 25. Lenguaje recomendado

Usar:

- “documenta”;
- “declara”;
- “resume”;
- “explica tu decisión”;
- “revisa créditos”;
- “revisa privacidad”;
- “elige qué incluir”;
- “puedes omitir detalles sensibles”.

Evitar:

- “confiesa”;
- “demuestra que no copiaste”;
- “prueba originalidad”;
- “pega todo el chat”;
- “muestra tus prompts completos”;
- “la IA evaluará”;
- “se detectará uso indebido”;
- “nivel de dependencia”.

---

## 26. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- prompts recomendados;
- estrategias de uso responsable;
- niveles de privacidad de herramientas;
- notas docentes;
- declaración de uso IA;
- decisión humana;
- reflexión ética;
- créditos;
- revisión humana;
- uso externo de IA como opción.

### Transformar

- `recommended_prompts`;
- `prompt_used`;
- outputs IA;
- herramientas IA;
- voz IA;
- imagen IA;
- declaración IA;
- créditos;
- notas docentes;
- ejemplos de prompts;
- portafolio con IA.

### Diferir

- proveedores IA;
- API IA;
- chatbot interno;
- integración con cuentas;
- detector de IA;
- analíticas de IA;
- rúbricas automáticas;
- investigación sobre uso IA;
- interoperabilidad con LMS;
- política legal final de IA.

### Bloquear

- IA embebida;
- APIs productivas IA;
- evaluación automática IA;
- importación automática de chats;
- prompts completos obligatorios;
- datos reales en prompts;
- credenciales externas;
- tokens;
- tracking de uso IA;
- ranking por uso IA;
- scoring de originalidad;
- perfilado de dependencia;
- generación completa del trabajo por la app.

### Mantener en auditoría

- prompt completo voluntario;
- nombre de herramienta;
- output IA;
- capturas de chat;
- TTS con voz sintética;
- generación de imagen;
- uso de herramientas con nube;
- declaración IA en galería futura;
- derechos de autor y licencias;
- investigación futura.

---

## 27. Decisiones candidatas

### DEC-AI-001 · IA externa, opcional y no embebida

```text
Estado: Candidata para aprobación documental
```

AI StoryLab 1 no integra IA productiva en v0.7.0. Solo orienta uso externo.

### DEC-AI-002 · La IA asiste, la persona decide

```text
Estado: Candidata para aprobación documental
```

La decisión humana sigue siendo condición central de autoría, ética y evaluación formativa.

### DEC-AI-003 · Prompt recomendado como andamiaje

```text
Estado: Candidata para aprobación documental
```

Los prompts recomendados orientan, pero no obligan ni sustituyen criterio.

### DEC-AI-004 · Prompt usado como dato de alto cuidado

```text
Estado: Candidata para aprobación documental
```

El prompt usado no es visible por defecto y puede documentarse mediante resumen.

### DEC-AI-005 · Declaración IA manual y formativa

```text
Estado: Candidata para aprobación documental
```

La documentación de IA debe sostener transparencia, atribución y reflexión, no vigilancia.

### DEC-AI-006 · No importación automática de chats

```text
Estado: Candidata para aprobación documental
```

Las conversaciones con IA externa no deben importarse ni sincronizarse.

### DEC-AI-007 · No evaluación automática con IA

```text
Estado: Candidata para aprobación documental
```

La IA no evalúa, rankea, perfila ni determina calidad final.

### DEC-AI-008 · Herramientas IA como frontera de riesgo

```text
Estado: Candidata para aprobación documental
```

Toda herramienta IA externa debe tratarse bajo privacidad, seguridad, atribución y notas institucionales.

---

## 28. Riesgos

| Riesgo | Severidad | Control conceptual |
|---|---|---|
| IA embebida prematura | Crítica | Bloqueo v0.7.0 |
| Prompt usado expuesto | Alta | Resumen, privacidad por defecto |
| Chat IA importado | Alta | Bloqueo |
| Datos reales en prompts | Crítica | Prohibición |
| Evaluación automática | Crítica | Bloqueo |
| Detector de IA punitivo | Alta | Bloqueo |
| Declaración IA como castigo | Alta | Lenguaje formativo |
| Herramienta nube sin advertencia | Alta | Nivel de privacidad |
| Falta de créditos | Media/alta | Confirmación |
| Sustitución de agencia | Crítica | Decisión humana |
| Comparación por uso IA | Alta | No ranking |
| Capturas de chat en portafolio | Media/alta | Excluir por defecto |

---

## 29. Controles conceptuales

| Control | Descripción |
|---|---|
| Prompt recomendado versionado | Prompts institucionales revisables. |
| Prompt usado resumible | No exigir texto completo. |
| Declaración IA mínima | Transparencia sin vigilancia. |
| Decisión humana posterior | Evidencia de agencia. |
| Revisión de privacidad | Antes de compartir o exportar. |
| Revisión de créditos | Atribución responsable. |
| No API IA | Sin integración productiva. |
| No importación de chats | Sin extracción de conversaciones. |
| No evaluación IA | Sin scoring ni detector. |
| Nivel privacidad herramienta | Advertir cuenta/nube/local. |
| Lenguaje formativo | Evitar sospecha y castigo. |
| Gate futuro | Cualquier IA embebida requiere aprobación posterior. |

---

## 30. Preguntas abiertas

1. ¿Qué categorías de apoyo IA son suficientes?
2. ¿Debe registrarse nombre de herramienta o solo tipo?
3. ¿Cuándo conviene permitir prompt completo voluntario?
4. ¿Cómo se avisa que un prompt puede contener datos sensibles?
5. ¿Cómo se redacta declaración IA para estudiantes?
6. ¿Cómo se diferencia uso de IA en texto, imagen, audio y video?
7. ¿Qué créditos exige cada tipo de herramienta?
8. ¿Cómo se documenta TTS o voz IA?
9. ¿Cómo se documenta imagen generada con IA?
10. ¿Qué lenguaje evita que declarar IA se sienta punitivo?
11. ¿Qué necesita el facilitador para acompañar sin fiscalizar?
12. ¿Qué campos pasan a entrega final?
13. ¿Qué campos pasan al portafolio?
14. ¿Qué debe quedar fuera de exportación?
15. ¿Qué requeriría un gate futuro de IA embebida?

---

## 31. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- IA queda definida como externa, opcional y no embebida;
- prompts recomendados quedan preservados como andamiaje;
- prompt usado queda clasificado como dato de alto cuidado;
- prompt usado puede documentarse como resumen o referencia;
- declaración IA queda definida como manual y formativa;
- decisión humana posterior queda preservada;
- créditos y revisión de privacidad quedan vinculados al uso IA;
- Vista del Facilitador no puede exigir chats ni prompts completos;
- herramientas IA externas quedan como frontera de riesgo;
- API IA, chatbot interno, evaluación automática, importación de chats, detector IA, ranking y perfilado quedan bloqueados;
- ninguna decisión aquí activa implementación.

---

## 32. Impacto sobre próximas familias

| Familia posterior | Impacto |
|---|---|
| Herramientas externas | Define IA externa como frontera de riesgo y requiere niveles de privacidad. |
| Glosario | Aporta lenguaje canónico para prompts, declaración IA, agencia y no embebida. |
| Entrega y portafolio | Define campos mínimos para declaración IA, créditos y revisión de privacidad. |
| Arquitectura modular | Aporta objetos: PromptRecomendado, PromptUsadoResumen, DeclaracionIA, HerramientaIAExterna. |
| Gobernanza técnica | Aporta gate futuro para IA embebida, APIs, proveedores y políticas IA. |

---

## 33. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el documento Prompts, Documentación de Uso de IA y No IA Embebida de AI StoryLab 1 v0.7.0 como novena familia del Mapa de Decisiones Técnicas.

El documento preserva los prompts recomendados como andamiaje pedagógico, distingue prompt recomendado, prompt adaptado y prompt usado, clasifica el prompt usado como dato de alto cuidado, define documentación manual de uso IA, declaración IA, créditos, decisión humana posterior y revisión de privacidad.

El hito establece que la IA permanece externa, opcional y no embebida; bloquea APIs IA productivas, chatbot interno, evaluación automática, importación automática de chats, detector IA, ranking, perfilado, credenciales, tokens, datos reales en prompts y generación completa del trabajo por la app.

Este hito no implementa código, no selecciona proveedor IA, no define APIs, no activa integración IA, autenticación, backend, sincronización, despliegue, datos reales ni validación con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar prompts ia no embebida v0.7" \
  -m "Hito: integra la novena familia del Mapa de Decisiones Tecnicas v0.7.0. Preserva prompts recomendados como andamiaje, define documentacion manual de uso IA, clasifica prompt usado como dato de alto cuidado y bloquea IA embebida, APIs IA, evaluacion automatica, importacion de chats, ranking, perfilado, datos reales e implementacion prematura."
```

---

## 34. Dictamen de aprobación

La Familia 9 queda definida como el marco de uso externo, documentado y gobernado de IA en v0.7.0.

Su decisión más importante es:

```text
AI StoryLab 1 puede enseñar a usar IA sin convertirse en una IA que decide, vigila o recopila.
```

Este documento cierra la novena familia como modelo aprobado de prompts recomendados, documentación manual de uso de IA y no IA embebida. No cierra el ecosistema completo de herramientas externas ni las notas institucionales.  
Establece el marco para continuar con:

```text
Familia 10 · Ecosistema de herramientas, recursos externos y notas institucionales
```

---

## 35. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- IA queda definida como externa, opcional y no embebida;
- prompts recomendados quedan preservados como andamiaje;
- prompt recomendado, prompt adaptado y prompt usado quedan diferenciados;
- prompt usado queda clasificado como dato de alto cuidado;
- prompt usado puede documentarse como resumen o referencia;
- declaración IA queda definida como manual y formativa;
- decisión humana posterior queda preservada;
- créditos y revisión de privacidad quedan vinculados al uso IA;
- Vista del Facilitador no puede exigir chats ni prompts completos;
- herramientas IA externas quedan como frontera de riesgo;
- API IA, chatbot interno, evaluación automática, importación de chats, detector IA, ranking y perfilado quedan bloqueados;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la décima familia del mapa:

```text
Ecosistema de herramientas, recursos externos y notas institucionales
```

No autoriza código, proveedor IA, APIs, integración IA, autenticación, backend, sincronización, despliegue, datos reales ni validación con personas.
