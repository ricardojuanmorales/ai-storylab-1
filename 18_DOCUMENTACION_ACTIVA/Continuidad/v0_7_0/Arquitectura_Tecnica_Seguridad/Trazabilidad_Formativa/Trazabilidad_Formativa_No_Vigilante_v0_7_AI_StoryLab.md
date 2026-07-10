# Trazabilidad Formativa No Vigilante v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 8 · Trazabilidad formativa no vigilante  
**Tipo de documento:** Documento técnico-conceptual, pedagógico, ético y pre-implementativo  
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
- `Deuda_Vista_Facilitador_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md`
- `Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Trazabilidad_Formativa/Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 8 aborda una pregunta central:

```text
¿Qué debe quedar trazado en AI StoryLab 1 para sostener aprendizaje, evidencia, continuidad y acompañamiento sin convertir el proceso creativo en vigilancia?
```

La respuesta inicial es:

```text
La trazabilidad formativa no vigilante registra huellas pedagógicas significativas para sostener continuidad, reflexión, feedback, portafolio y entrega, pero bloquea rastros de control, monitoreo, ranking, telemetría conductual e inferencias sensibles.
```

Trazar no es perseguir.  
Trazar, en AI StoryLab 1, debe significar dejar migas de pan para volver al sentido del proceso, no instalar cámaras en el bosque.

---

## 1. Propósito

Este documento define el modelo conceptual de trazabilidad formativa no vigilante para AI StoryLab 1 v0.7.0.

Su función es:

- distinguir continuidad formativa de monitoreo;
- definir qué huellas pedagógicas pueden existir;
- bloquear rastros invasivos;
- proteger la pausa, el ensayo privado y la duda;
- orientar la Vista del Facilitador;
- proteger evidencia, reflexión, prompts, portafolio y entrega;
- evitar ranking, métricas reductivas y comparación;
- preparar prompts e IA no embebida;
- preparar portafolio, metadatos y exportabilidad;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- principios de trazabilidad formativa;
- distinción entre huella formativa y rastro vigilante;
- unidades de trazabilidad permitidas;
- unidades bloqueadas;
- reglas por zona de datos;
- relación con evidencias;
- relación con decisiones humanas;
- relación con reflexión ética;
- relación con prompts;
- relación con feedback;
- relación con portafolio;
- relación con entrega;
- relación con grupos y cohortes;
- relación con Vista del Facilitador;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- implementa logging;
- define telemetría;
- define analíticas;
- define base de datos;
- define dashboards;
- define indicadores finales;
- define UI;
- define backend;
- define autenticación;
- crea mecanismos de auditoría técnica;
- usa datos reales;
- valida con personas;
- crea métricas institucionales;
- crea evaluación automática;
- crea ranking;
- crea monitoreo continuo;
- integra IA embebida.

---

## 4. Principio rector

```text
La trazabilidad de AI StoryLab 1 debe conservar memoria pedagógica suficiente para aprender, acompañar, curar y entregar, sin convertir la experiencia creativa en objeto de vigilancia.
```

Corolarios:

- trazabilidad con propósito;
- trazabilidad mínima;
- trazabilidad comprensible;
- trazabilidad revisable;
- trazabilidad bajo control humano;
- trazabilidad separada de ranking;
- trazabilidad separada de monitoreo continuo;
- trazabilidad separada de evaluación automática;
- trazabilidad compatible con privacidad por defecto;
- trazabilidad compatible con local-first.

---

## 5. Herencia y deuda

La deuda `DFUX-FAC-v0.6-001` ya reconocía que el facilitador quedó insuficientemente visible como actor con límites de visibilidad, permisos funcionales, relación con evidencias, feedback, portafolio y riesgos de privacidad, seguridad y trazabilidad.

v0.6 también dejó visibles componentes importantes:

- asistencia docente no sustitutiva;
- acompañamiento antes, durante y después de la misión;
- retroalimentación contextualizada;
- curaduría pedagógica;
- evidencia contextualizada;
- portafolio vivo;
- reflexión y transferencia;
- decisión humana;
- local-first;
- privacidad por defecto;
- interacción humano-IA no sustitutiva.

Dictamen:

```text
Estado: preservar continuidad, bloquear vigilancia
```

---

## 6. Definición operativa

### Trazabilidad formativa

```text
Registro mínimo, contextual y revisable de evidencias, decisiones, reflexiones, feedback, curaduría y entregas que ayuda a comprender la trayectoria de aprendizaje y creación.
```

### Trazabilidad no vigilante

```text
Trazabilidad que excluye monitoreo continuo, ranking, actividad minuto a minuto, inferencias sensibles, vigilancia conductual y acumulación de datos sin propósito.
```

### Diferencia central

| Trazabilidad formativa | Vigilancia |
|---|---|
| Ayuda a recordar sentido | Busca controlar conducta |
| Se basa en evidencias seleccionadas | Captura todo lo disponible |
| Es contextual | Es totalizante |
| Respeta pausa y borrador | Convierte silencio en sospecha |
| Sostiene feedback | Produce castigo o ranking |
| Es revisable | Es opaca |
| Minimiza datos | Acumula por si acaso |
| Protege agencia | Reduce agencia |

---

## 7. Qué puede quedar trazado

Pueden quedar trazadas, conceptualmente, estas huellas:

| Huella | Propósito | Condición |
|---|---|---|
| Estado de misión | Continuidad | Sintético, no punitivo |
| Evidencia seleccionada | Aprendizaje y feedback | Selección humana |
| Decisión humana | Agencia y autoría | Campo crítico |
| Reflexión ética seleccionada | Metacognición | Privada por defecto, compartible |
| Prompt recomendado usado como guía | Andamiaje | No registra uso automático |
| Prompt usado resumido | Transparencia IA | Alto cuidado |
| Herramienta declarada | Contexto de producción | No métrica de rendimiento |
| Comentario formativo | Retroalimentación | No punitivo |
| Pregunta guía | Acompañamiento | No imposición |
| Ruta de apoyo | Continuidad | No alerta disciplinaria |
| Curaduría de portafolio | Selección y sentido | Control humano |
| Metadatos mínimos de entrega | Cierre responsable | Sin archivo final |
| Declaración IA | Transparencia | Manual |
| Créditos confirmados | Ética | Revisión humana |
| Revisión de privacidad | Cuidado | Confirmación mínima |
| Deuda documental | Gobernanza | No sobre estudiantes |

---

## 8. Qué no debe quedar trazado

Quedan bloqueadas estas huellas:

- actividad minuto a minuto;
- tiempo conectado;
- historial completo de edición;
- clics;
- pulsaciones;
- telemetría conductual;
- velocidad de producción;
- frecuencia de pausas;
- silencios como señales de riesgo;
- comparaciones individuales;
- ranking;
- métricas de productividad;
- inferencias emocionales;
- inferencias psicológicas;
- inferencias de capacidad;
- inferencias de motivación;
- chats IA completos importados;
- prompts completos por defecto;
- borradores privados;
- enlaces privados por defecto;
- datos reales para investigación;
- alertas punitivas;
- calificaciones automáticas.

Regla:

```text
Una huella que no ayuda a acompañar o aprender no debe existir.
```

---

## 9. Unidades conceptuales de trazabilidad

| Unidad | Definición | Estado |
|---|---|---|
| Hito de misión | Marca sintética de avance o cierre. | Candidato |
| Evidencia seleccionada | Producto o registro elegido por la persona. | Preservar |
| Decisión humana | Registro de criterio humano. | Preservar |
| Reflexión ética seleccionada | Fragmento o resumen elegido. | Alto cuidado |
| Comentario formativo | Feedback contextualizado. | Candidato |
| Pregunta guía | Intervención no directiva. | Candidato |
| Ruta de apoyo | Sugerencia de continuidad, pausa, revisión o recurso. | Candidato |
| Entrada de portafolio | Evidencia curada con sentido. | Preservar |
| Declaración IA | Registro manual de uso de IA externa. | Candidato |
| Crédito confirmado | Registro de atribución. | Candidato |
| Revisión de privacidad | Confirmación de cuidado antes de exportar/entregar. | Candidato |
| Metadato de entrega | Información mínima de cierre. | Candidato |
| Deuda documental | Registro de riesgo o pendiente del proyecto. | Preservar |
| Señal agregada no identificante | Lectura grupal sin ranking. | Auditar |

---

## 10. Estados formativos permitidos

Los estados formativos deben evitar lenguaje punitivo.

### Estados candidatos

- no iniciado;
- explorando;
- en proceso;
- listo para revisión;
- revisado;
- en curaduría;
- listo para portafolio;
- listo para entrega;
- entregado;
- pausado por decisión;
- requiere apoyo;
- requiere revisión de privacidad;
- requiere créditos;
- requiere declaración IA.

### Estados bloqueados

- atrasado;
- deficiente;
- incumplidor;
- inactivo;
- bajo rendimiento;
- riesgo alto;
- sospechoso;
- problemático;
- no productivo;
- peor que promedio;
- último lugar.

Regla:

```text
El estado debe orientar el próximo cuidado, no etiquetar a la persona.
```

---

## 11. Trazabilidad por zona de datos

| Zona | Trazabilidad permitida | Trazabilidad bloqueada |
|---|---|---|
| Privada de trabajo | Guardado local, borrador bajo control personal | Exposición al facilitador, historial total |
| Evidencia formativa | Evidencia seleccionada, decisión, reflexión elegida | Captura automática de todo |
| Portafolio | Entradas curadas, créditos, declaración IA | Extracción total del progreso |
| Entrega | Metadatos mínimos, confirmaciones | Archivo final, enlace público automático |
| Acompañamiento | Comentarios, preguntas, rutas de apoyo | Alertas punitivas, ranking |
| Institucional | Versiones de glosario y herramientas | Datos estudiantiles reales |
| Técnica | Esquema, export_type, compatibilidad | Telemetría conductual |
| Prohibida | Ninguna | Cualquier traza |

---

## 12. Trazabilidad de evidencia

La evidencia debe poder sostener memoria del proceso sin volverse expediente de vigilancia.

### Puede registrar

- misión asociada;
- título o resumen;
- tipo de evidencia;
- decisión humana asociada;
- reflexión seleccionada;
- herramienta usada declarada;
- prompt usado resumido si aplica;
- estado de curaduría;
- si se incluye en portafolio;
- visibilidad seleccionada;
- feedback recibido.

### No debe registrar por defecto

- todos los borradores;
- todos los cambios;
- tiempo de edición;
- historial de intentos;
- actividad continua;
- errores privados;
- prompts completos;
- chats IA;
- metadatos excesivos.

---

## 13. Trazabilidad de decisión humana

La decisión humana es una huella de agencia.

### Reglas

- debe registrarse como criterio, no como trámite;
- debe poder revisarse;
- debe poder resumirse;
- debe poder vincularse a evidencia;
- no debe ser reemplazada por IA;
- no debe usarse para ranking;
- no debe tratarse como cumplimiento mecánico;
- debe conservar tono humano y contextual.

---

## 14. Trazabilidad de reflexión ética

La reflexión ética es de alto cuidado.

### Puede registrarse

- como texto privado;
- como resumen seleccionado;
- como fragmento curado;
- como referencia para portafolio;
- como confirmación de revisión ética.

### No debe registrarse

- como diagnóstico;
- como evaluación automática;
- como señal de riesgo;
- como métrica de desempeño;
- como dato visible por defecto;
- como objeto de comparación.

---

## 15. Trazabilidad de prompts e IA externa

La trazabilidad de IA debe sostener transparencia, no fiscalización.

### Puede registrar

- si se usó IA externa;
- tipo de apoyo recibido;
- herramienta declarada;
- prompt usado resumido;
- decisión humana posterior;
- crédito o declaración IA;
- reflexión ética sobre uso.

### No debe registrar

- chats completos;
- prompts completos por defecto;
- outputs extensos automáticamente;
- cuentas externas;
- tokens;
- inferencias sobre dependencia;
- puntuaciones de originalidad;
- evaluación automática de uso IA.

Regla:

```text
La trazabilidad de IA debe demostrar agencia humana, no sospechar de la persona.
```

---

## 16. Trazabilidad del feedback

El feedback del facilitador debe poder acompañar continuidad.

### Puede registrar

- comentario formativo;
- pregunta guía;
- ruta de apoyo;
- recomendación de curaduría;
- recordatorio ético;
- solicitud de revisión;
- confirmación de recepción, si aplica.

### No debe registrar

- castigos;
- etiquetas personales;
- comparaciones;
- inferencias sensibles;
- alertas automáticas;
- calificaciones finales automáticas;
- decisiones por la persona estudiante.

---

## 17. Trazabilidad del portafolio

El portafolio debe trazar selección y sentido.

### Puede registrar

- evidencia incluida;
- razón de inclusión;
- versión curada;
- créditos;
- declaración IA;
- reflexión seleccionada;
- revisión de privacidad;
- estado de exportación.

### No debe registrar

- todo el progreso completo;
- evidencia excluida por defecto;
- reflexiones completas no seleccionadas;
- prompts completos no seleccionados;
- historial total de edición;
- ranking de calidad.

---

## 18. Trazabilidad de entrega

La entrega final requiere trazabilidad mínima.

### Puede registrar

- estado de entrega;
- formato declarado;
- nombre de archivo declarado, si se considera necesario;
- duración aproximada, si aplica;
- ubicación externa declarada con alto cuidado;
- confirmación de créditos;
- confirmación de declaración IA;
- confirmación de revisión de privacidad;
- licencia o condición de uso;
- interés en galería, si aplica.

### No debe registrar

- archivo final;
- MP4;
- PowerPoint;
- audio;
- imágenes fuente;
- enlace público automático;
- enlace privado visible por defecto;
- análisis automático del contenido;
- calificación automática.

---

## 19. Trazabilidad grupal

La trazabilidad grupal es una zona de alto riesgo.

### Puede considerarse, bajo auditoría

- necesidades agregadas de apoyo;
- recursos más solicitados;
- misiones que requieren aclaración;
- cantidad general de entregas recibidas;
- temas frecuentes de feedback;
- señales de cuidado no identificantes.

### Bloqueado

- ranking de estudiantes;
- tabla comparativa individual;
- avance individual visible por defecto;
- `last_updated` como actividad reciente;
- insignias como clasificación;
- promedio por estudiante;
- alertas por inactividad;
- identificación en grupos pequeños;
- exportación grupal como solución final aprobada.

Regla:

```text
Lo grupal debe servir para ajustar el acompañamiento, no para ordenar personas.
```

---

## 20. Trazabilidad documental

No toda trazabilidad es estudiantil. El proyecto también necesita trazabilidad documental.

Puede trazarse:

- decisiones aprobadas;
- deudas activas;
- rutas canónicas;
- familias completadas;
- límites explícitos;
- riesgos diferidos;
- criterios de aprobación;
- comentarios de hito;
- matrices de continuidad;
- cambios de nombre o ruta;
- gates futuros.

Esta trazabilidad sí debe ser robusta, porque protege la memoria del proyecto sin exponer estudiantes.

---

## 21. Relación con Vista del Facilitador

La Vista del Facilitador solo debe usar trazabilidad formativa mínima.

### Puede ver

- evidencia compartida;
- estado sintético de misión;
- solicitud de apoyo;
- comentario previo;
- ruta de apoyo;
- portafolio compartido;
- metadatos mínimos de entrega.

### No puede ver por defecto

- progreso completo;
- actividad continua;
- borradores privados;
- prompts completos;
- reflexiones completas;
- historial de edición;
- tiempos de trabajo;
- comparaciones;
- ranking.

Gate:

```text
Si una traza solo existe para que el facilitador observe más, debe bloquearse.
```

---

## 22. Relación con privacidad por defecto

La trazabilidad debe obedecer la privacidad, no vencerla.

Por tanto:

- lo privado no se traza para terceros;
- lo compartido se traza con propósito;
- lo exportado se revisa;
- lo sensible se minimiza;
- lo grupal se audita;
- lo bloqueado no existe;
- lo diferido no se simula.

---

## 23. Relación con seguridad por diseño

Seguridad por diseño exige que toda traza tenga:

1. propósito;
2. actor autorizado;
3. dato mínimo;
4. visibilidad limitada;
5. duración o permanencia justificada;
6. riesgo identificado;
7. control asociado;
8. revisión humana cuando aplique.

Si falta uno de esos elementos, la traza no debe aprobarse.

---

## 24. Relación con local-first

Local-first permite trazabilidad bajo control local, pero no justifica acumulación.

### Reglas

- trazas locales deben ser comprensibles;
- exportación de trazas debe ser revisable;
- importación de trazas debe validarse;
- trazas grupales no deben reconstruir vigilancia;
- respaldo local no debe convertirse en expediente total;
- la persona debe entender qué guarda el sistema.

---

## 25. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- evidencia formativa;
- decisión humana;
- reflexión ética;
- feedback contextualizado;
- portafolio curado;
- metadatos mínimos de entrega;
- declaración IA;
- créditos;
- continuidad documental;
- deuda visible.

### Transformar

- progreso individual;
- estados de misión;
- insignias;
- `last_updated`;
- `student_code`;
- `group_progress`;
- dashboard grupal;
- comentarios del facilitador;
- rutas de apoyo;
- resumen de acompañamiento.

### Diferir

- analíticas;
- visualizaciones finales;
- indicadores institucionales;
- reportes agregados;
- investigación;
- interoperabilidad LMS;
- auditoría técnica;
- logs técnicos;
- backend;
- autenticación.

### Bloquear

- monitoreo continuo;
- actividad minuto a minuto;
- ranking;
- métricas comparativas;
- inferencias sensibles;
- historial completo de edición;
- telemetría conductual;
- alertas punitivas;
- evaluación automática;
- chats IA completos importados;
- datos reales;
- expediente total.

### Mantener en auditoría

- señales agregadas;
- grupos pequeños;
- resumen de acompañamiento;
- estado de entrega;
- interés en galería;
- uso de insignias;
- `last_updated`;
- validación de facilitador;
- exportación grupal.

---

## 26. Decisiones candidatas

### DEC-TRACE-001 · Trazabilidad con propósito formativo

```text
Estado: Candidata para aprobación documental
```

Toda traza debe sostener aprendizaje, acompañamiento, curaduría, entrega o gobernanza.

### DEC-TRACE-002 · No monitoreo continuo

```text
Estado: Candidata para aprobación documental
```

La actividad minuto a minuto, telemetría conductual y tiempos de uso quedan bloqueados.

### DEC-TRACE-003 · Evidencia seleccionada, no captura total

```text
Estado: Candidata para aprobación documental
```

La trazabilidad se basa en evidencia seleccionada y curada, no en extracción total.

### DEC-TRACE-004 · Feedback como continuidad, no castigo

```text
Estado: Candidata para aprobación documental
```

Los comentarios del facilitador deben apoyar decisiones futuras, no producir expediente punitivo.

### DEC-TRACE-005 · Prompt e IA bajo trazabilidad mínima

```text
Estado: Candidata para aprobación documental
```

El uso de IA puede documentarse mediante declaración, resumen o referencia, no mediante importación automática.

### DEC-TRACE-006 · Portafolio separado del progreso completo

```text
Estado: Candidata para aprobación documental
```

El portafolio traza curaduría, no todo el historial.

### DEC-TRACE-007 · Entrega con metadatos mínimos

```text
Estado: Candidata para aprobación documental
```

La entrega traza confirmaciones y metadatos mínimos, no archivos finales.

### DEC-TRACE-008 · Trazabilidad grupal bajo auditoría

```text
Estado: Candidata para aprobación documental
```

Cualquier traza grupal debe evitar identificación, ranking y comparación.

---

## 27. Riesgos

| Riesgo | Severidad | Control conceptual |
|---|---|---|
| Trazabilidad convertida en vigilancia | Crítica | Propósito formativo y mínimo dato |
| Estado de misión usado como ranking | Alta | Lenguaje no punitivo |
| Feedback usado como expediente | Alta | Feedback revisable y formativo |
| Prompts usados expuestos | Alta | Resumen o referencia |
| Reflexión ética punitiva | Alta | Privada por defecto |
| Progreso grupal identificante | Alta | Auditoría y minimización |
| Pausa interpretada como problema | Alta | Derecho a pausa |
| Metadatos excesivos | Alta | Mínimos |
| Portafolio como extracción total | Alta | Curaduría humana |
| IA como sospecha | Alta | Agencia humana y declaración |
| Analíticas por inercia | Crítica | Bloqueo v0.7.0 |

---

## 28. Controles conceptuales

| Control | Descripción |
|---|---|
| Propósito explícito | Cada traza debe justificar para qué existe. |
| Mínimo dato | Registrar lo mínimo suficiente. |
| Control humano | La persona decide selección, curaduría y exportación. |
| Lenguaje no punitivo | Estados y feedback orientan cuidado, no castigo. |
| Separación de zonas | Privado, evidencia, portafolio, entrega y acompañamiento se separan. |
| No ranking | Sin comparación individual. |
| No monitoreo | Sin actividad continua. |
| No inferencias sensibles | Sin diagnóstico o perfilado. |
| Revisión de exportación | Antes de sacar datos. |
| Auditoría de agregados | Especial cuidado en grupos pequeños. |

---

## 29. Preguntas abiertas

1. ¿Qué estados formativos son suficientes para acompañar sin vigilar?
2. ¿Debe existir un estado “requiere apoyo” o debe formularse de otro modo?
3. ¿Qué comentarios del facilitador permanecen en el historial?
4. ¿Quién decide si un comentario entra al portafolio?
5. ¿Cómo se respeta el derecho a pausa?
6. ¿Qué traza mínima requiere la entrega final?
7. ¿Qué traza mínima requiere la declaración IA?
8. ¿Cómo se resume un prompt usado sin exponerlo?
9. ¿Qué señales grupales no identifican estudiantes?
10. ¿Cuándo un agregado se vuelve riesgoso?
11. ¿Qué trazas deben excluirse siempre de exportación?
12. ¿Qué trazas deben aparecer en una vista previa de exportación?
13. ¿Cómo se maneja trazabilidad en proyectos de equipo?
14. ¿Qué trazabilidad documental debe pasar a la bitácora de continuidad?
15. ¿Qué debe quedar para validación futura con personas?

---

## 30. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- trazabilidad formativa queda definida como memoria pedagógica mínima;
- trazabilidad no vigilante queda diferenciada de monitoreo;
- toda traza requiere propósito;
- actividad minuto a minuto queda bloqueada;
- telemetría conductual queda bloqueada;
- ranking queda bloqueado;
- estados punitivos quedan bloqueados;
- feedback queda definido como formativo, no expediente punitivo;
- reflexión ética queda protegida;
- prompt usado queda protegido;
- portafolio queda separado del progreso completo;
- entrega final queda limitada a metadatos mínimos;
- trazabilidad grupal queda en auditoría;
- ninguna decisión aquí activa implementación.

---

## 31. Impacto sobre próximas familias

| Familia posterior | Impacto |
|---|---|
| Prompts e IA no embebida | Define cómo documentar IA sin vigilancia ni importación automática. |
| Herramientas | Define herramienta usada como contexto, no métrica de rendimiento. |
| Glosario | Requiere lenguaje no punitivo para estados, feedback y apoyo. |
| Entrega y portafolio | Define trazas mínimas para curaduría, créditos, declaración IA y privacidad. |
| Arquitectura modular | Aporta objetos: Traza, EvidenciaCompartida, Feedback, RutaApoyo, EstadoFormativo. |
| Gobernanza técnica | Aporta gates para analíticas, reportes, investigación y grupos. |

---

## 32. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el documento Trazabilidad Formativa No Vigilante de AI StoryLab 1 v0.7.0 como octava familia del Mapa de Decisiones Técnicas.

El documento define trazabilidad formativa como memoria pedagógica mínima para aprendizaje, evidencia, feedback, portafolio y entrega, diferenciándola de vigilancia, monitoreo continuo, ranking, telemetría conductual, inferencias sensibles y acumulación de datos sin propósito.

El hito establece qué huellas pueden existir, cuáles quedan bloqueadas, cómo deben tratarse evidencias, decisiones humanas, reflexiones éticas, prompts, feedback, portafolio, entrega, grupos y documentación. Mantiene group_progress, señales agregadas, last_updated, exportación grupal y validación de facilitador bajo auditoría.

Este hito no implementa código, no define logs técnicos, no activa analíticas, dashboard, backend, autenticación, APIs productivas, IA embebida, sincronización, despliegue, datos reales ni validación con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar trazabilidad formativa no vigilante v0.7" \
  -m "Hito: integra la octava familia del Mapa de Decisiones Tecnicas v0.7.0. Define trazabilidad formativa como memoria pedagogica minima, diferencia continuidad de vigilancia y bloquea monitoreo continuo, ranking, telemetria conductual, inferencias sensibles, analiticas prematuras, datos reales e implementacion prematura."
```

---

## 33. Dictamen de aprobación

La Familia 8 queda definida como el marco de memoria pedagógica mínima de v0.7.0.

Su decisión más importante es:

```text
AI StoryLab 1 debe recordar lo necesario para aprender, no registrar todo lo posible para controlar.
```

Este documento cierra la octava familia como modelo de trazabilidad formativa no vigilante aprobado. No cierra prompts, IA no embebida ni herramientas externas.  
Establece el marco para continuar con:

```text
Familia 9 · Prompts recomendados, documentación de prompts del usuario e IA no embebida
```

---

## 34. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- trazabilidad formativa queda definida como memoria pedagógica mínima;
- trazabilidad no vigilante queda diferenciada de monitoreo;
- toda traza requiere propósito;
- actividad minuto a minuto queda bloqueada;
- telemetría conductual queda bloqueada;
- ranking queda bloqueado;
- estados punitivos quedan bloqueados;
- feedback queda definido como formativo, no expediente punitivo;
- reflexión ética queda protegida;
- prompt usado queda protegido;
- portafolio queda separado del progreso completo;
- entrega final queda limitada a metadatos mínimos;
- trazabilidad grupal queda en auditoría;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la novena familia del mapa:

```text
Prompts recomendados, documentación de prompts del usuario e IA no embebida
```

No autoriza código, logs técnicos, analíticas, dashboard, backend, autenticación, APIs productivas, IA embebida, sincronización, despliegue, datos reales ni validación con personas.
