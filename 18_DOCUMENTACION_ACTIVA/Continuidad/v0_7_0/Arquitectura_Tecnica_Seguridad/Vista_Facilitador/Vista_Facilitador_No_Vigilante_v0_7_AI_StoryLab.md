# Vista del Facilitador No Vigilante v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 5 · Vista del Facilitador  
**Tipo de documento:** Documento funcional-conceptual, ético-técnico y pre-implementativo  
**Estado:** Aprobado por revisión humana explícita para integración canónica semántica  
**Fecha de trabajo:** 2026-07-09  
**Zona horaria de referencia:** America/Puerto_Rico  
**Documento rector previo:** `Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`  
**Documentos de entrada inmediatos:**  
- `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md`
- `Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md`
- `Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md`
- `Modelo_Roles_Permisos_v0_7_AI_StoryLab.md`
- `Consolidacion_Funcional_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md`
- `Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Vista_Facilitador/Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 5 aborda una pregunta central:

```text
¿Cómo debe conceptualizarse la Vista del Facilitador para acompañar el proceso creativo-formativo sin vigilar, rankear, controlar ni sustituir la agencia estudiantil?
```

La respuesta inicial es:

```text
La Vista del Facilitador debe ser una experiencia de acompañamiento pedagógico local-first, limitada por roles, permisos, privacidad, seguridad y trazabilidad formativa no vigilante.
```

La Vista del Facilitador no es una simple pantalla. Es una frontera ética, funcional y técnica. Si se diseña mal, convierte el acompañamiento en vigilancia. Si se diseña bien, convierte la complejidad del proceso en cuidado legible.

---

## 1. Propósito

Este documento define la Vista del Facilitador como familia funcional de v0.7.0.

Su función es:

- recuperar la deuda `DFUX-FAC-v0.6-001` como insumo activo;
- traducir la consolidación funcional de v0.6 en criterios de v0.7.0;
- diseñar una vista conceptual no vigilante;
- establecer qué puede ver, hacer y producir la persona facilitadora;
- bloquear dashboard de vigilancia, ranking y monitoreo continuo;
- distinguir acompañamiento de administración total;
- preparar seguridad, privacidad y trazabilidad;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- definición de Vista del Facilitador;
- principios de no vigilancia aplicados;
- objetivos funcionales;
- límites explícitos;
- momentos de acompañamiento;
- capacidades conceptuales permitidas;
- capacidades bloqueadas;
- datos visibles conceptualmente;
- datos no visibles por defecto;
- salidas de la vista;
- relación con roles, permisos, modelo de datos y local-first;
- relación con portafolio y entrega;
- riesgos;
- controles;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- implementa la vista;
- define UI final;
- diseña componentes;
- define backend;
- define autenticación;
- define permisos técnicos;
- selecciona stack;
- activa dashboard grupal;
- activa `group_progress` como solución final;
- usa datos reales;
- valida con personas;
- crea analíticas;
- crea ranking;
- crea monitoreo continuo;
- define seguridad final;
- define privacidad final;
- define trazabilidad final;
- integra IA embebida.

---

## 4. Definición operativa

Para AI StoryLab 1 v0.7.0:

```text
La Vista del Facilitador es una experiencia funcional de acompañamiento pedagógico que permite orientar misiones, interpretar evidencias compartidas, ofrecer retroalimentación contextualizada, cuidar el ritmo formativo y sostener continuidad del proceso sin observar todo, sin controlar todo, sin producir por el estudiante y sin convertir datos en vigilancia.
```

La Vista del Facilitador existe para:

- ayudar a orientar;
- ayudar a interpretar;
- ayudar a cuidar;
- ayudar a retroalimentar;
- ayudar a sostener continuidad;
- ayudar a curar evidencia;
- ayudar a detectar necesidad de apoyo expresada o visible en evidencias compartidas.

No existe para:

- fiscalizar;
- comparar;
- rankear;
- castigar;
- monitorear actividad;
- perfilar;
- diagnosticar;
- producir;
- administrar todo.

---

## 5. Principio rector

```text
Acompañamiento sí; vigilancia no.
```

Este principio implica:

- visibilidad mínima necesaria;
- propósito pedagógico explícito;
- agencia estudiantil preservada;
- datos privados no visibles por defecto;
- evidencia compartida con límites;
- feedback formativo no punitivo;
- no inferencias sensibles;
- no monitoreo continuo;
- no ranking;
- no administrador total.

---

## 6. Relación con las familias ya aprobadas

### 6.1 Familia 1 · Herencia funcional MVP v0.3

La auditoría confirmó que el dashboard grupal heredado no puede pasar directamente a v0.7.0 como Vista del Facilitador.

Tratamiento:

```text
Auditar + transformar
```

### 6.2 Familia 2 · Arquitectura local-first

La vista debe poder conceptualizarse sin backend productivo, sin sincronización automática, sin APIs IA y sin almacenamiento remoto por defecto.

### 6.3 Familia 3 · Modelo conceptual de datos

La vista solo puede operar sobre zonas de datos justificadas: evidencia compartida, portafolio compartido, metadatos mínimos de entrega y señales de acompañamiento mínimas. No puede reclamar acceso total al progreso individual.

### 6.4 Familia 4 · Roles y permisos

La vista queda condicionada por el principio de permiso mínimo necesario. El facilitador puede acompañar, comentar y orientar. No puede editar, exportar, publicar o producir por el estudiante.

---

## 7. Qué NO es la Vista del Facilitador

La Vista del Facilitador no es:

| Confusión | Corrección |
|---|---|
| Dashboard grupal heredado | Debe rediseñarse desde no vigilancia. |
| Panel de vigilancia | Solo debe mostrar lo mínimo necesario. |
| Administrador total | El facilitador no controla todo el ecosistema. |
| Supervisor punitivo | El feedback es formativo, no castigo. |
| Vista de analíticas | Las métricas no sustituyen interpretación pedagógica. |
| Evaluador automático | La IA no evalúa ni decide. |
| Registro exhaustivo | No se captura todo. |
| Monitor en tiempo real | No observa actividad continua. |
| Herramienta de ranking | No compara estudiantes. |
| Extractor de evidencias | Solo trabaja con evidencias compartidas o autorizadas. |

---

## 8. Objetivos funcionales

La Vista del Facilitador debe permitir, conceptualmente:

| Código | Objetivo | Descripción |
|---|---|---|
| VF-OBJ-001 | Orientar misión | Aclarar propósito, criterios, ritmo y recursos. |
| VF-OBJ-002 | Acompañar proceso | Apoyar sin sustituir agencia estudiantil. |
| VF-OBJ-003 | Interpretar evidencia compartida | Leer evidencias autorizadas con contexto. |
| VF-OBJ-004 | Retroalimentar formativamente | Comentar, preguntar y sugerir rutas de mejora. |
| VF-OBJ-005 | Cuidar ética y agencia | Señalar dependencia excesiva, opacidad o pérdida de voz propia. |
| VF-OBJ-006 | Apoyar curaduría | Ayudar a decidir qué evidencia pasa al portafolio. |
| VF-OBJ-007 | Sostener continuidad | Conectar misión actual, evidencia previa y próximo paso. |
| VF-OBJ-008 | Acompañar entrega | Revisar metadatos mínimos y confirmaciones, sin almacenar archivos. |
| VF-OBJ-009 | Respetar pausa | Reconocer que no todo proceso debe ser visible. |
| VF-OBJ-010 | Activar ayuda humana | Facilitar intervención pedagógica, no alerta automática punitiva. |

---

## 9. Capacidades conceptuales permitidas

La vista puede contemplar estas capacidades:

### 9.1 Orientación

- ver descripción de misión;
- ver criterios de misión;
- ver recursos recomendados;
- ver prompts recomendados;
- ver términos de glosario asociados;
- sugerir rutas de apoyo.

### 9.2 Acompañamiento

- comentar evidencia compartida;
- formular preguntas guía;
- sugerir revisión;
- sugerir pausa;
- sugerir curaduría;
- apoyar toma de decisiones;
- acompañar cierre de misión.

### 9.3 Retroalimentación

- ofrecer feedback contextualizado;
- distinguir producto, proceso, decisión y reflexión;
- comentar claridad, ética, créditos o continuidad;
- sugerir próximos pasos;
- registrar observación pedagógica limitada.

### 9.4 Curaduría

- sugerir qué evidencia podría pasar al portafolio;
- sugerir qué necesita revisión antes de exportar;
- recomendar confirmar créditos y declaración IA;
- ayudar a preparar presentación final.

### 9.5 Entrega

- ver metadatos mínimos si fueron compartidos;
- confirmar recepción o revisión limitada, si se aprueba en documento posterior;
- comentar estado de créditos, privacidad y declaración IA;
- no almacenar archivo final.

---

## 10. Capacidades bloqueadas

La vista no puede contemplar:

- ver todo progreso individual completo por defecto;
- ver borradores privados;
- ver prompts completos por defecto;
- ver reflexiones privadas por defecto;
- ver actividad minuto a minuto;
- medir tiempo de uso;
- comparar estudiantes;
- rankear;
- etiquetar desempeño;
- inferir motivación, capacidad, salud, conducta o riesgo;
- generar alertas punitivas;
- editar evidencia ajena;
- producir entregable por estudiante;
- aprobar con IA automática;
- importar chats IA;
- subir archivos;
- almacenar videos;
- publicar portafolios;
- administrar cuentas;
- acceder como administrador total;
- extraer todos los datos disponibles.

---

## 11. Momentos de acompañamiento

La vista se organiza en cinco momentos.

### 11.1 Antes de la misión

Puede:

- contextualizar propósito;
- presentar criterios;
- sugerir recursos;
- explicar límites de acompañamiento;
- invitar a definir intención creativa.

No puede:

- exigir exposición prematura de borradores;
- imponer decisiones creativas;
- registrar predicciones de desempeño.

### 11.2 Durante la misión

Puede:

- formular preguntas guía;
- sugerir pausa o revisión;
- responder a solicitud de apoyo;
- cuidar ritmo sin controlar actividad.

No puede:

- observar cada acción;
- cronometrar productividad;
- intervenir automáticamente;
- marcar silencios como problema.

### 11.3 Después de la misión

Puede:

- revisar evidencia compartida;
- ofrecer feedback;
- sugerir mejora;
- apoyar reflexión;
- sugerir siguiente paso.

No puede:

- exigir toda reflexión privada;
- convertir feedback en nota punitiva;
- comparar contra otros estudiantes.

### 11.4 En portafolio

Puede:

- acompañar curaduría;
- sugerir organización;
- revisar coherencia;
- apoyar declaración IA y créditos.

No puede:

- decidir qué se incluye;
- editar portafolio sin autorización;
- publicar;
- exportar por la persona estudiante.

### 11.5 En entrega

Puede:

- revisar metadatos mínimos;
- recordar créditos;
- recordar revisión de privacidad;
- confirmar recepción si se define posteriormente.

No puede:

- almacenar archivos;
- subir video;
- generar enlace público;
- aprobar automáticamente con IA.

---

## 12. Información visible conceptualmente

Esta tabla no define permisos técnicos finales. Solo delimita posibilidades para revisión posterior.

| Información | Visibilidad conceptual | Propósito |
|---|---|---|
| Descripción de misión | Visible | Orientar |
| Criterios de misión | Visible | Aclarar expectativas |
| Recursos sugeridos | Visible | Apoyar |
| Prompts recomendados | Visible | Orientar uso externo |
| Glosario asociado | Visible | Lenguaje común |
| Evidencia compartida | Visible con límites | Retroalimentar |
| Reflexión seleccionada | Visible si se comparte | Metacognición |
| Decisión humana seleccionada | Visible si se comparte | Agencia |
| Solicitud de apoyo | Visible | Responder |
| Portafolio compartido | Visible si se comparte | Curaduría |
| Metadatos mínimos de entrega | Visible si se comparte | Cierre responsable |
| Confirmación de créditos | Visible si se comparte | Ética |
| Confirmación declaración IA | Visible si se comparte | Transparencia |
| Resumen agregado no identificante | Candidato | Cuidado grupal sin ranking |

---

## 13. Información no visible por defecto

| Información | Estado |
|---|---|
| Borradores privados | No visible |
| Reflexiones privadas completas | No visible |
| Prompt completo usado | No visible por defecto |
| Chats con IA | No visibles |
| Historial de edición | No visible |
| Actividad minuto a minuto | Bloqueada |
| Tiempo conectado | Bloqueado |
| Comparación entre estudiantes | Bloqueada |
| Ranking | Bloqueado |
| Datos emocionales inferidos | Bloqueados |
| Datos personales innecesarios | Bloqueados |
| Credenciales externas | Bloqueadas |
| Archivos finales | No almacenados |
| Video MP4 | No almacenado |
| PowerPoint final | No almacenado |
| Enlaces privados | Alto cuidado, no visibles por defecto |

---

## 14. Salidas de la Vista del Facilitador

La vista puede producir, conceptualmente:

| Salida | Descripción | Estado |
|---|---|---|
| Comentario formativo | Retroalimentación contextualizada sobre evidencia compartida. | Candidato |
| Pregunta guía | Pregunta que ayuda a pensar sin sustituir decisión. | Preservar |
| Ruta de apoyo | Sugerencia de revisar, pausar, curar, continuar o pedir ayuda. | Candidato |
| Observación pedagógica limitada | Nota breve con propósito explícito. | Auditar |
| Recomendación de curaduría | Sugerencia sobre portafolio. | Candidato |
| Recordatorio ético | Créditos, declaración IA, privacidad, autoría. | Candidato |
| Confirmación de recepción | Estado limitado de entrega. | Diferir |
| Señal agregada de cuidado | Lectura grupal no identificante. | Auditar |

La vista no debe producir:

- calificación automática;
- ranking;
- alerta punitiva;
- diagnóstico;
- perfil conductual;
- expediente completo;
- reporte de productividad;
- evaluación IA.

---

## 15. Prototipo conceptual de secciones

La Vista del Facilitador podría organizarse, conceptualmente, en estas secciones futuras. No son diseño UI final.

### 15.1 Orientación de misión

Incluye:

- propósito de misión;
- criterios;
- glosario asociado;
- herramientas sugeridas;
- prompts recomendados;
- preguntas guía.

### 15.2 Evidencias compartidas

Incluye:

- evidencias que la persona decidió compartir;
- estado de curaduría;
- comentarios formativos;
- próximos pasos sugeridos.

### 15.3 Solicitudes de apoyo

Incluye:

- pedido explícito de ayuda;
- tipo de apoyo solicitado;
- ruta sugerida;
- respuesta del facilitador.

### 15.4 Portafolio en curaduría

Incluye:

- entradas seleccionadas;
- áreas pendientes;
- sugerencias de organización;
- recordatorios de créditos y declaración IA.

### 15.5 Entrega responsable

Incluye:

- metadatos mínimos;
- confirmación de créditos;
- confirmación de privacidad;
- declaración IA;
- estado de recepción, si se aprueba.

### 15.6 Cuidado grupal no identificante

Incluye, solo si se aprueba posteriormente:

- señales agregadas no comparativas;
- necesidades de apoyo por misión;
- recursos más solicitados;
- recordatorios generales.

No incluye ranking ni tabla de desempeño individual.

---

## 16. Modelo de feedback

El feedback del facilitador debe seguir estas reglas:

- debe ser contextual;
- debe ser formativo;
- debe ser respetuoso de la agencia;
- debe formular preguntas además de comentarios;
- debe sugerir rutas, no imponer decisiones;
- debe distinguir observación de juicio;
- debe evitar etiquetas personales;
- debe evitar inferencias sensibles;
- debe evitar comparaciones;
- debe poder ser revisado por la persona estudiante;
- debe poder quedar fuera del portafolio.

### Fórmula recomendada

```text
Veo / interpreto / pregunto / sugiero / cuido
```

Ejemplo conceptual:

```text
Veo que tu evidencia muestra una decisión clara sobre el tono visual. 
Me pregunto cómo esa decisión conecta con tu regla ética inicial. 
Sugiero revisar el crédito de las imágenes antes de pasar esta entrada al portafolio.
```

---

## 17. Modelo de solicitud de apoyo

La solicitud de apoyo debe partir de la persona estudiante o de señales mínimas no invasivas.

Tipos candidatos:

- necesito aclarar misión;
- necesito revisar evidencia;
- necesito ayuda con herramienta;
- necesito revisar uso de IA;
- necesito apoyo con créditos;
- necesito preparar portafolio;
- necesito revisar entrega;
- necesito pausar o reorganizar.

No se deben generar automáticamente solicitudes basadas en inferencias sensibles.

---

## 18. Relación con datos

La Vista del Facilitador se conecta con la Familia 3 mediante una regla:

```text
La vista no consume datos completos. Consume datos mínimos, compartidos o derivados explícitamente para acompañamiento.
```

### Datos candidatos

| Dato | Tratamiento |
|---|---|
| Evidencia compartida | Visible con propósito |
| Decisión humana seleccionada | Visible si se comparte |
| Reflexión ética seleccionada | Visible si se comparte |
| Estado de misión | Sintético y limitado |
| Solicitud de apoyo | Visible |
| Comentario del facilitador | Visible para persona estudiante |
| Portafolio compartido | Visible si se comparte |
| Metadatos de entrega | Mínimos |
| Progreso grupal | No heredado directamente |
| Señales agregadas | Solo si no identifican ni comparan |

---

## 19. Relación con roles y permisos

La vista solo puede habilitar acciones ya permitidas por la Familia 4.

| Acción | Facilitador | Comentario |
|---|---|---|
| Ver misión | Sí | Información institucional |
| Ver evidencia compartida | Sí | Con límites |
| Comentar evidencia compartida | Sí | Formativo |
| Editar evidencia ajena | No | Bloqueado |
| Ver borradores privados | No | Bloqueado |
| Ver reflexión privada completa | No por defecto | Bloqueado salvo decisión explícita |
| Ver prompt completo usado | No por defecto | Alto cuidado |
| Exportar progreso ajeno | No | Bloqueado |
| Publicar portafolio ajeno | No | Bloqueado |
| Validar recepción | Candidato | Requiere documento posterior |
| Comparar estudiantes | No | Bloqueado |
| Rankear | No | Bloqueado |
| Administrar sistema | No | Rol separado y diferido |

---

## 20. Relación con local-first

La Vista del Facilitador debe respetar:

- sin backend productivo en v0.7.0;
- sin sincronización automática;
- sin datos reales;
- sin APIs IA;
- sin login;
- sin subida de archivos;
- sin almacenamiento remoto;
- sin monitoreo continuo.

Cualquier escenario futuro de intercambio de evidencias debe ser manual, local, sintético o explícitamente compartido, hasta que un gate posterior decida otra cosa.

---

## 21. Relación con seguridad por diseño

Este documento abre preguntas para la Familia 6:

- ¿cómo evitar acceso excesivo?
- ¿cómo proteger evidencia compartida?
- ¿cómo evitar modificación ajena?
- ¿cómo proteger comentarios?
- ¿cómo evitar exportación indebida?
- ¿cómo controlar metadatos de entrega?
- ¿cómo auditar sin vigilar?
- ¿cómo manejar archivos externos?
- ¿cómo evitar que un resumen revele identidad?

---

## 22. Relación con privacidad por defecto

Este documento abre preguntas para la Familia 7:

- ¿qué se oculta por defecto?
- ¿qué requiere consentimiento?
- ¿qué se minimiza?
- ¿qué se resume?
- ¿qué se excluye de exportaciones?
- ¿qué datos son sensibles?
- ¿qué datos no deben existir?
- ¿cómo se explica la visibilidad al estudiante?

---

## 23. Relación con trazabilidad formativa no vigilante

Este documento abre preguntas para la Familia 8:

- ¿qué evidencias dejan huella formativa?
- ¿qué feedback se conserva?
- ¿qué trazas se excluyen?
- ¿cómo se diferencia continuidad de monitoreo?
- ¿cómo se registra apoyo sin expediente punitivo?
- ¿cómo se respeta la pausa?

---

## 24. Relación con prompts e IA no embebida

La Vista del Facilitador puede:

- orientar uso responsable de prompts recomendados;
- comentar declaración de uso IA;
- sugerir reformulación ética;
- recordar atribución;
- pedir transparencia.

No puede:

- llamar IA;
- evaluar con IA;
- importar chats;
- exigir prompt completo por defecto;
- perfilar uso de IA;
- usar IA para comparar estudiantes.

---

## 25. Relación con herramientas externas

La Vista del Facilitador puede:

- ver catálogo de herramientas;
- orientar selección;
- recordar nivel de privacidad;
- sugerir alternativas locales;
- comentar uso responsable.

No puede:

- conectar herramientas externas;
- acceder a cuentas;
- recibir credenciales;
- enviar datos;
- medir productividad por herramienta usada.

---

## 26. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- facilitador como acompañante;
- orientación de misión;
- feedback contextualizado;
- apoyo a portafolio;
- cuidado ético;
- continuidad pedagógica;
- evidencia compartida;
- local-first;
- no vigilancia.

### Transformar

- dashboard grupal heredado;
- resumen grupal;
- importación múltiple;
- visualización de progreso;
- estado de misión;
- metadatos de entrega;
- validación de entrega;
- comentarios del facilitador;
- rutas de apoyo.

### Diferir

- UI final;
- componentes;
- autenticación;
- roles técnicos;
- validación con personas;
- sincronización;
- backend;
- galería;
- reportes institucionales;
- investigación.

### Bloquear

- ranking;
- monitoreo continuo;
- métricas comparativas;
- administrador total;
- edición de evidencia ajena;
- publicación ajena;
- evaluación automática IA;
- inferencias sensibles;
- captura de actividad minuto a minuto;
- almacenamiento automático de archivos finales.

### Mantener en auditoría

- señales agregadas;
- resumen de acompañamiento;
- recepción de entrega;
- notas pedagógicas;
- visibilidad de reflexión;
- visibilidad de prompts;
- interés en galería;
- indicadores de avance.

---

## 27. Decisiones candidatas

### DEC-FAC-001 · Vista del Facilitador como acompañamiento no vigilante

```text
Estado: Candidata para aprobación documental
```

La vista se define como experiencia de acompañamiento, no como dashboard de vigilancia.

### DEC-FAC-002 · Dashboard grupal heredado no aprobado

```text
Estado: Candidata para aprobación documental
```

El dashboard grupal del MVP v0.3 no se hereda directamente. Debe transformarse.

### DEC-FAC-003 · Evidencia compartida como base de visibilidad

```text
Estado: Candidata para aprobación documental
```

La vista trabaja con evidencia compartida o autorizada, no con borradores privados por defecto.

### DEC-FAC-004 · Feedback formativo no punitivo

```text
Estado: Candidata para aprobación documental
```

El facilitador puede comentar, preguntar y sugerir rutas, pero no castigar ni rankear.

### DEC-FAC-005 · No administrador total

```text
Estado: Candidata para aprobación documental
```

El facilitador no tiene permisos de administración total, exportación ajena ni publicación ajena.

### DEC-FAC-006 · No monitoreo continuo

```text
Estado: Candidata para aprobación documental
```

La vista no observa actividad minuto a minuto ni mide productividad continua.

### DEC-FAC-007 · Entrega final con metadatos mínimos

```text
Estado: Candidata para aprobación documental
```

La vista puede contemplar revisión limitada de metadatos, créditos y declaración IA, pero no almacenamiento de archivos.

### DEC-FAC-008 · Señales agregadas bajo auditoría

```text
Estado: Candidata para aprobación documental
```

Cualquier señal agregada de grupo queda en auditoría y deberá evitar identificación, comparación y ranking.

---

## 28. Riesgos

| Riesgo | Severidad | Control conceptual |
|---|---|---|
| Dashboard de vigilancia | Crítica | Rediseñar desde acompañamiento. |
| Facilitador administrador total | Crítica | Separar roles y permisos. |
| Exposición de borradores privados | Alta | No visibles por defecto. |
| Reflexión ética usada punitivamente | Alta | Feedback formativo y visibilidad selectiva. |
| Prompts completos expuestos | Alta | Tratar como dato sensible. |
| Ranking por avance | Crítica | Bloqueo explícito. |
| Monitoreo continuo | Crítica | Puntos de intervención, no observación constante. |
| Métricas pobres sustituyen juicio | Alta | Interpretación contextual. |
| Señales agregadas identifican estudiantes | Alta | Auditar agregación. |
| Entrega final convertida en almacén | Alta | Metadatos mínimos, no archivo. |
| IA usada para feedback automático | Crítica | Bloquear IA embebida. |
| Confusión entre docente y administrador | Alta | Separar responsabilidades. |
| Comentarios del facilitador como expediente punitivo | Alta | Definir trazabilidad formativa. |
| Pérdida de confianza | Crítica | Transparencia de visibilidad. |

---

## 29. Controles conceptuales

| Control | Descripción |
|---|---|
| Visibilidad mínima | Solo lo necesario para acompañar. |
| Evidencia compartida | No acceso automático a trabajo privado. |
| Separación de acciones | Ver no implica editar, exportar o publicar. |
| Comentario formativo | Feedback como apoyo, no castigo. |
| No ranking | Sin comparación entre estudiantes. |
| No monitoreo | Sin actividad minuto a minuto. |
| No IA evaluadora | Sin feedback automático IA. |
| Metadatos mínimos | Entrega sin almacenar archivo. |
| Transparencia | La persona debe saber qué se ve y por qué. |
| Gate posterior | Seguridad, privacidad y trazabilidad deben revisar todo. |

---

## 30. Preguntas abiertas

1. ¿Qué evidencia se comparte con el facilitador por defecto, si alguna?
2. ¿Debe toda evidencia requerir acción explícita de compartir?
3. ¿Cómo se presenta un comentario del facilitador a la persona estudiante?
4. ¿Puede un comentario formar parte del portafolio?
5. ¿Qué estado de misión es útil sin volverse vigilancia?
6. ¿Qué señales agregadas podrían ser no identificantes?
7. ¿Debe existir confirmación de recepción de entrega?
8. ¿Qué metadatos de entrega puede ver el facilitador?
9. ¿Cómo se maneja una cohorte pequeña?
10. ¿Qué pasa si un estudiante no comparte evidencia?
11. ¿Cómo se solicita ayuda sin activar estigma?
12. ¿Cómo se evita que “pendiente” signifique “problema”?
13. ¿Qué lenguaje debe usar la vista para evitar castigo?
14. ¿Cómo se comunica transparencia de visibilidad?
15. ¿Qué debe quedar para validación futura con personas?

---

## 31. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- la Vista del Facilitador queda definida como acompañamiento no vigilante;
- el dashboard grupal heredado no queda aprobado como solución final;
- el facilitador no es administrador total;
- la vista se limita por roles y permisos;
- la vista se basa en evidencia compartida o autorizada, no en acceso total;
- borradores privados no son visibles por defecto;
- prompts completos no son visibles por defecto;
- reflexiones privadas no son visibles por defecto;
- ranking queda bloqueado;
- monitoreo continuo queda bloqueado;
- evaluación automática IA queda bloqueada;
- entrega final no almacena archivos;
- señales agregadas quedan en auditoría;
- la deuda `DFUX-FAC-v0.6-001` queda parcialmente atendida, no necesariamente cerrada;
- ninguna decisión aquí activa implementación.

---

## 32. Impacto sobre próximas familias

| Familia posterior | Impacto |
|---|---|
| Seguridad por diseño | Debe proteger límites de visibilidad, feedback, exportación y entrega. |
| Privacidad por defecto | Debe definir ocultamiento, consentimiento, minimización y datos sensibles. |
| Trazabilidad formativa | Debe decidir qué feedback y evidencias dejan huella no punitiva. |
| Prompts e IA no embebida | Debe proteger prompt usado y evitar IA evaluadora. |
| Herramientas | Debe orientar privacidad de herramientas recomendadas. |
| Glosario | Debe sostener lenguaje no punitivo y accesible. |
| Entrega y portafolio | Debe definir curaduría, metadatos y exportabilidad. |
| Arquitectura modular | Debe traducir Vista, Comentario, SolicitudApoyo y EvidenciaCompartida como objetos. |
| Gobernanza técnica | Debe decidir gates para cualquier funcionalidad facilitadora futura. |

---

## 33. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra la Vista del Facilitador No Vigilante de AI StoryLab 1 v0.7.0 como quinta familia del Mapa de Decisiones Técnicas.

El documento define la Vista del Facilitador como experiencia de acompañamiento pedagógico local-first, limitada por roles, permisos, privacidad, seguridad y trazabilidad formativa no vigilante.

El hito establece que la vista trabaja con evidencia compartida o autorizada, feedback formativo, rutas de apoyo, curaduría de portafolio y metadatos mínimos de entrega. Bloquea la herencia directa del dashboard grupal, ranking, monitoreo continuo, administrador total, acceso a borradores privados, exposición de prompts completos por defecto, evaluación automática IA y almacenamiento automático de archivos finales.

Este hito no implementa código, no define UI final, no activa backend, autenticación, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar vista facilitador no vigilante v0.7" \
  -m "Hito: integra la quinta familia del Mapa de Decisiones Tecnicas v0.7.0. Define la Vista del Facilitador como acompanamiento pedagogico local-first no vigilante, limitado por roles, permisos y evidencia compartida. Bloquea dashboard de vigilancia, ranking, monitoreo continuo, administrador total, IA embebida e implementacion prematura."
```

---

## 34. Dictamen de aprobación

La Familia 5 queda definida como la traducción funcional del acompañamiento pedagógico no vigilante.

Su decisión más importante es:

```text
La Vista del Facilitador no debe nacer de todo lo que puede verse, sino de lo mínimo que debe cuidarse.
```

Este documento cierra la quinta familia como marco funcional-conceptual aprobado para la Vista del Facilitador No Vigilante. No cierra seguridad, privacidad ni trazabilidad.  
Establece el marco para continuar con:

```text
Familia 6 · Seguridad por diseño
```

---

## 35. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- la Vista del Facilitador queda definida como acompañamiento pedagógico no vigilante;
- el dashboard grupal heredado no queda aprobado como solución final;
- el facilitador no queda definido como administrador total;
- la vista queda limitada por roles, permisos, privacidad, seguridad y trazabilidad formativa;
- la vista se basa en evidencia compartida o autorizada, no en acceso total;
- borradores privados no son visibles por defecto;
- prompts completos no son visibles por defecto;
- reflexiones privadas no son visibles por defecto;
- ranking queda bloqueado;
- monitoreo continuo queda bloqueado;
- evaluación automática con IA queda bloqueada;
- entrega final queda limitada a metadatos mínimos, sin almacenamiento de archivos;
- señales agregadas quedan en auditoría;
- la deuda `DFUX-FAC-v0.6-001` queda atendida como rediseño funcional-conceptual de la Vista del Facilitador, aunque sus controles técnicos se completarán en familias posteriores;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la sexta familia del mapa:

```text
Seguridad por diseño
```

No autoriza código, UI final, stack final, backend, autenticación, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
