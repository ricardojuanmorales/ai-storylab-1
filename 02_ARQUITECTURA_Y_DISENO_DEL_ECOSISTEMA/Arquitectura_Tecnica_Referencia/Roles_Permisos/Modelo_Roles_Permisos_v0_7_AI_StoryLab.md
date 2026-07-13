# Modelo de Roles y Permisos v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Modelo_Roles_Permisos_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 4 · Roles y permisos  
**Tipo de documento:** Documento técnico-conceptual, estratégico y pre-implementativo  
**Estado:** Aprobado por revisión humana explícita para integración canónica semántica  
**Fecha de trabajo:** 2026-07-09  
**Zona horaria de referencia:** America/Puerto_Rico  
**Documento rector previo:** `Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`  
**Documentos de entrada inmediatos:**  
- `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md`
- `Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md`
- `Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md`
- `Consolidacion_Funcional_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md`
- `Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Modelo_Roles_Permisos_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Roles_Permisos/Modelo_Roles_Permisos_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 4 aborda una pregunta central:

```text
¿Quién puede hacer qué en AI StoryLab 1 v0.7.0 sin romper agencia estudiantil, privacidad local-first, no vigilancia y acompañamiento humano?
```

La respuesta inicial es:

```text
Los roles y permisos de AI StoryLab 1 deben organizar acompañamiento, creación, curaduría, retroalimentación y gobernanza, no control total ni vigilancia.
```

Este documento no define permisos técnicos finales. Define un marco conceptual previo para que las familias siguientes, especialmente Vista del Facilitador, Seguridad, Privacidad y Trazabilidad, no nazcan con permisos inflados.

---

## 1. Propósito

Este documento define el modelo conceptual de roles y permisos para AI StoryLab 1 v0.7.0.

Su función es:

- distinguir roles pedagógicos, funcionales, documentales y técnicos;
- establecer límites de acción por rol;
- separar acompañamiento de administración;
- preservar agencia estudiantil;
- evitar que el facilitador opere como administrador total;
- impedir ranking, monitoreo continuo y vigilancia;
- preparar la Vista del Facilitador como experiencia con permisos mínimos;
- preparar seguridad, privacidad y trazabilidad;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- roles conceptuales candidatos;
- responsabilidades por rol;
- acciones permitidas, restringidas y bloqueadas;
- matriz conceptual de permisos;
- relación entre roles y zonas de datos;
- relación con local-first;
- relación con evidencia, portafolio y entrega;
- relación con prompts e IA no embebida;
- relación con herramientas externas;
- relación con facilitador y no vigilancia;
- riesgos y controles;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- define autenticación;
- define login;
- define RBAC técnico;
- define ABAC técnico;
- define base de datos;
- define permisos en código;
- crea cuentas;
- define backend;
- define panel administrativo;
- define Vista del Facilitador final;
- aprueba dashboard grupal;
- aprueba sincronización;
- aprueba datos reales;
- aprueba validación con personas;
- implementa seguridad;
- implementa privacidad.

---

## 4. Principio rector de roles y permisos

```text
Cada rol debe tener solo las capacidades necesarias para sostener su responsabilidad pedagógica, creativa, documental o técnica, sin adquirir acceso irrestricto ni sustituir la agencia de otros roles.
```

Corolarios:

- permiso mínimo necesario;
- transparencia de visibilidad;
- separación entre acompañamiento y control;
- separación entre rol pedagógico y rol técnico;
- agencia estudiantil preservada;
- no vigilancia por diseño;
- no ranking;
- no monitoreo continuo;
- no administrador total;
- no IA evaluadora.

---

## 5. Herencia funcional relevante

La documentación anterior deja tres herencias principales.

### 5.1 Herencia del MVP v0.3

El MVP v0.3 incluyó perfil local, dashboard del estudiante, export/import de progreso, dashboard grupal del facilitador y entrega final. Esa herencia reconoce al menos dos experiencias: estudiante y facilitador. Sin embargo, el MVP no resuelve roles y permisos como arquitectura gobernada.

### 5.2 Herencia v0.6 sobre Vista del Facilitador

La consolidación v0.6 definió la vista del facilitador como experiencia funcional de acompañamiento pedagógico, no como administrador total ni supervisor punitivo.

### 5.3 Herencia v0.6 de no vigilancia

Los criterios de no vigilancia establecieron que el facilitador puede acompañar y ver información mínima necesaria, pero no observar todo, extraer todo, cuantificar todo ni comparar estudiantes como objetos de rendimiento.

### Dictamen

```text
Estado: preservar principios, transformar permisos
```

Los roles conceptuales se preservan. Sus permisos deben rediseñarse.

---

## 6. Roles conceptuales candidatos

Los roles aquí son conceptuales. No son cuentas, grupos técnicos, claims, tokens ni permisos de backend.

| Rol | Definición conceptual | Estado |
|---|---|---|
| Estudiante creador/a | Persona que crea, decide, documenta evidencia, reflexiona y cura su portafolio. | Preservar |
| Facilitador/a | Persona que orienta, acompaña, retroalimenta y ayuda a sostener continuidad sin vigilar. | Preservar + transformar |
| Docente responsable | Persona con responsabilidad pedagógica formal sobre el proceso educativo. Puede coincidir con facilitador. | Definir |
| Equipo creativo | Grupo de estudiantes que colabora en un proyecto. | Auditar |
| Revisor/a pedagógico | Persona que revisa evidencias o entregas bajo criterios formativos definidos. | Diferir |
| Curador/a de portafolio | Rol humano que ayuda a organizar evidencia para presentación, sin alterar agencia del estudiante. | Candidato |
| Administrador/a institucional | Rol de configuración institucional futura, distinto del facilitador. | Diferir |
| Mantenedor/a técnico-documental | Persona que gestiona documentación, configuración o repositorio, no datos estudiantiles. | Definir |
| Investigador/a | Rol futuro para análisis con datos anonimizados o sintéticos. | Diferir + bloquear datos reales |
| Invitado/a o espectador/a | Persona que puede ver una presentación o galería pública si existe consentimiento. | Diferir |
| Sistema local | Funciones automáticas locales, limitadas y transparentes. No es agente decisorio. | Definir |
| IA externa | Herramienta usada fuera de la app por decisión humana. No tiene rol interno. | Bloquear como rol interno |

---

## 7. Roles que NO deben existir en v0.7.0

Estos roles quedan bloqueados como diseño conceptual:

| Rol bloqueado | Motivo |
|---|---|
| Facilitador administrador total | Rompe mínimo privilegio y no vigilancia. |
| Supervisor punitivo | Convierte acompañamiento en fiscalización. |
| Evaluador automático IA | Sustituye juicio humano y agencia pedagógica. |
| Analista de comportamiento | Introduce inferencias sensibles no autorizadas. |
| Ranking manager | Convierte el proceso creativo en competencia reductiva. |
| Operador de monitoreo en tiempo real | Rompe no vigilancia y derecho a pausa. |
| Integrador automático de chats IA | Rompe IA no embebida y privacidad. |
| Recolector de datos para futuro indefinido | Rompe minimización. |
| Administrador de archivos finales | Riesgo de almacenamiento indebido. |
| Gestor de credenciales externas | La app no debe custodiar credenciales. |

---

## 8. Responsabilidades por rol

### 8.1 Estudiante creador/a

Responsabilidades:

- crear proyecto;
- completar misiones;
- realizar actividades lúdicas;
- documentar evidencia;
- registrar decisión humana;
- reflexionar éticamente;
- usar herramientas externas si decide hacerlo;
- documentar uso de IA cuando aplique;
- curar portafolio;
- decidir qué exportar o compartir;
- preparar entrega final;
- confirmar créditos, declaración IA y revisión de privacidad.

No debe ser reducido a objeto de monitoreo.

### 8.2 Facilitador/a

Responsabilidades:

- orientar misión;
- contextualizar criterios;
- formular preguntas guía;
- acompañar proceso;
- ofrecer retroalimentación contextualizada;
- sugerir rutas de apoyo;
- apoyar curaduría;
- cuidar ritmo, agencia y ética;
- interpretar evidencias compartidas;
- sostener continuidad pedagógica.

No produce por el estudiante. No decide por el estudiante. No vigila.

### 8.3 Docente responsable

Responsabilidades candidatas:

- definir marco pedagógico;
- aprobar criterios de uso en contexto educativo;
- seleccionar o adaptar herramientas recomendadas;
- revisar cumplimiento institucional;
- establecer ritmos de entrega;
- coordinar facilitadores si aplica;
- custodiar criterios éticos y formativos.

Debe mantenerse separado de permisos técnicos excesivos.

### 8.4 Equipo creativo

Responsabilidades candidatas:

- colaborar en proyecto compartido;
- distribuir tareas;
- acordar decisiones creativas;
- documentar contribuciones;
- preparar entrega colectiva.

Requiere diseño posterior, porque equipos pueden introducir complejidades de privacidad, autoría y permisos internos.

### 8.5 Mantenedor/a técnico-documental

Responsabilidades:

- mantener documentación;
- organizar rutas canónicas;
- actualizar glosarios, guías o catálogos bajo revisión;
- registrar decisiones;
- preparar artefactos de continuidad;
- no acceder a datos reales de estudiantes.

### 8.6 Sistema local

Responsabilidades:

- guardar localmente bajo control humano;
- validar estructura de exportación;
- ayudar a construir portafolio emergente;
- mostrar prompts recomendados;
- recordar campos requeridos;
- generar metadatos mínimos;
- advertir sobre riesgos de exportación o entrega.

El sistema local no decide, no evalúa, no perfila y no vigila.

---

## 9. Acciones conceptuales

Las acciones conceptuales son verbos de permiso. No son endpoints ni funciones técnicas.

### Acciones de creación

- crear;
- editar;
- guardar;
- revisar;
- descartar;
- curar;
- exportar;
- entregar.

### Acciones de acompañamiento

- orientar;
- comentar;
- sugerir;
- retroalimentar;
- señalar cuidado ético;
- recomendar ruta de apoyo;
- solicitar revisión;
- validar recepción.

### Acciones de visibilidad

- ver datos propios;
- ver evidencia compartida;
- ver resumen mínimo;
- ver portafolio compartido;
- ver metadatos de entrega;
- ver configuración institucional.

### Acciones de gobernanza

- aprobar documento;
- registrar decisión;
- abrir deuda;
- cerrar deuda;
- versionar catálogo;
- actualizar glosario;
- aprobar criterios institucionales.

### Acciones bloqueadas

- vigilar;
- rankear;
- monitorear continuamente;
- inferir estados sensibles;
- evaluar automáticamente;
- extraer todo;
- producir por estudiante;
- editar evidencia ajena sin consentimiento;
- publicar sin autorización;
- subir archivos automáticamente;
- importar chats automáticamente.

---

## 10. Matriz conceptual de permisos por rol

| Acción / Rol | Estudiante | Facilitador | Docente responsable | Mantenedor documental | Sistema local |
|---|---:|---:|---:|---:|---:|
| Crear proyecto | Sí | No | No | No | Apoya |
| Editar proyecto propio | Sí | No | No | No | Apoya |
| Completar misión | Sí | No | No | No | Valida localmente |
| Registrar evidencia propia | Sí | No | No | No | Apoya |
| Registrar decisión humana propia | Sí | No | No | No | Requiere campo |
| Registrar reflexión ética propia | Sí | No | No | No | Apoya |
| Ver evidencia privada | Sí | No por defecto | No por defecto | No | No interpreta |
| Compartir evidencia | Sí | Recibe si compartida | Puede recibir según contexto | No | Apoya exportación |
| Comentar evidencia compartida | No aplica | Sí | Sí, si definido | No | No |
| Editar evidencia ajena | No | No | No | No | No |
| Curar portafolio propio | Sí | Acompaña | Puede orientar | No | Apoya |
| Exportar portafolio propio | Sí | No | No | No | Ejecuta bajo solicitud |
| Ver portafolio compartido | Si propio o compartido | Sí, si compartido | Sí, si definido | No | No interpreta |
| Registrar entrega final propia | Sí | No | No | No | Apoya |
| Validar recepción de entrega | No | Candidato | Candidato | No | No decide |
| Ver metadatos de entrega | Propios | Mínimos si compartidos | Mínimos si definido | No | No interpreta |
| Ver progreso individual completo | Sí | No por defecto | No por defecto | No | No interpreta |
| Ver resumen de acompañamiento | Propio | Candidato mínimo | Candidato mínimo | No | Genera si aprobado |
| Ver grupo completo | No | No aprobado | No aprobado | No | No |
| Comparar estudiantes | No | Bloqueado | Bloqueado | No | Bloqueado |
| Ranking | Bloqueado | Bloqueado | Bloqueado | Bloqueado | Bloqueado |
| Monitoreo continuo | Bloqueado | Bloqueado | Bloqueado | Bloqueado | Bloqueado |
| Actualizar glosario | No | Sugerir | Aprobar o solicitar | Documentar | No |
| Actualizar herramientas | No | Sugerir | Aprobar o solicitar | Documentar | No |
| Aprobar documentos canónicos | No | No, salvo rol responsable | Sí si corresponde | Apoya | No |
| Acceder a datos reales para investigación | No | No | No sin gate | No | No |
| Usar IA externa | Sí, manual | Puede orientar | Puede orientar | No | No llama IA |
| IA embebida | Bloqueado | Bloqueado | Bloqueado | Bloqueado | Bloqueado |

---

## 11. Permisos por zona de datos

| Zona | Estudiante | Facilitador | Docente responsable | Mantenedor documental | Sistema local |
|---|---|---|---|---|---|
| Privada de trabajo | Control primario | Sin acceso por defecto | Sin acceso por defecto | Sin acceso | Guarda/apoya |
| Evidencia formativa | Control primario | Solo compartida | Según criterios | Sin acceso | Organiza localmente |
| Portafolio | Control primario | Solo compartido | Según criterios | Sin acceso | Genera/exporta bajo solicitud |
| Entrega | Control primario | Metadatos mínimos si compartidos | Según criterios | Sin acceso | Registra metadatos |
| Acompañamiento | Puede ver propio | Mínimo necesario | Mínimo necesario | Sin acceso | Deriva solo si aprobado |
| Institucional | Puede consultar | Puede consultar/sugerir | Puede aprobar | Documenta | Muestra |
| Técnica | Puede ver advertencias | Puede ver mínimas necesarias | Puede ver mínimas necesarias | Documenta versiones | Valida |
| Prohibida | Sin acceso, no debe existir | Sin acceso, no debe existir | Sin acceso, no debe existir | Sin acceso | Bloquea |

---

## 12. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- estudiante como agente creativo principal;
- facilitador como acompañante pedagógico;
- decisión humana como campo crítico;
- reflexión ética como campo crítico;
- portafolio bajo control humano;
- herramientas como orientación;
- prompts recomendados como andamiaje;
- local-first como límite de permisos;
- no almacenamiento automático de archivos finales.

### Transformar

- dashboard grupal heredado;
- permisos implícitos del facilitador;
- visibilidad de progreso;
- importación múltiple;
- validación de entrega;
- uso de `student_code`;
- uso de `last_updated`;
- insignias como dato visible;
- estado de video;
- interés en galería.

### Diferir

- autenticación;
- roles técnicos finales;
- permisos de backend;
- roles institucionales reales;
- investigación con datos anonimizados;
- galería pública;
- interoperabilidad con LMS;
- administración de cuentas.

### Bloquear

- facilitador administrador total;
- ranking estudiantil;
- monitoreo continuo;
- evaluación automática final;
- IA embebida como evaluadora;
- inferencias sensibles;
- acceso a borradores privados;
- publicación automática;
- subida automática de archivos;
- acceso a credenciales externas.

### Mantener en auditoría

- Vista del Facilitador;
- `group_progress`;
- dashboard grupal;
- exportación grupal;
- resumen de acompañamiento;
- métricas agregadas;
- permisos sobre evidencias compartidas;
- validación de entrega por facilitador;
- interés en galería.

---

## 13. Modelo de permiso mínimo necesario

Todo permiso conceptual debe responder:

1. ¿Qué rol lo necesita?
2. ¿Para qué acción?
3. ¿Sobre qué dato?
4. ¿Con qué propósito pedagógico?
5. ¿Durante qué momento del proceso?
6. ¿Qué puede ver exactamente?
7. ¿Qué no puede ver?
8. ¿Puede editar o solo comentar?
9. ¿Puede exportar?
10. ¿Puede compartir?
11. ¿Hay alternativa menos invasiva?
12. ¿Qué riesgo introduce?
13. ¿Qué familia posterior debe revisarlo?
14. ¿Requiere aprobación humana?

Si alguna respuesta es ambigua, el permiso no debe aprobarse todavía.

---

## 14. Momentos de intervención del facilitador

La consolidación v0.6 identificó momentos de acompañamiento. Familia 4 los traduce a permisos conceptuales mínimos.

| Momento | Puede hacer | No puede hacer |
|---|---|---|
| Antes de la misión | Orientar propósito, criterios y recursos | Ver borradores privados inexistentes o exigir exposición previa |
| Durante la misión | Formular preguntas guía, sugerir pausa o revisión | Monitorear actividad continua o controlar ritmo minuto a minuto |
| Después de la misión | Comentar evidencia compartida | Acceder a toda reflexión privada |
| En portafolio | Acompañar curaduría | Editar portafolio por el estudiante |
| En transiciones | Sugerir continuidad, revisión o cierre | Bloquear avance sin criterio transparente |
| En entrega | Validar recepción o comentar metadatos mínimos si aplica | Almacenar archivos finales automáticamente |

---

## 15. Relación con la Vista del Facilitador

Este documento no diseña la Vista del Facilitador. La prepara.

### Regla central

```text
La Vista del Facilitador solo podrá mostrar lo que el Modelo de Roles y Permisos permita justificar como acompañamiento mínimo necesario.
```

### Implicaciones

- no se hereda dashboard grupal directamente;
- no se muestra todo progreso individual;
- no se muestran borradores privados;
- no se muestran prompts completos por defecto;
- no se muestran reflexiones privadas por defecto;
- no se comparan estudiantes;
- no se crean rankings;
- no se monitorea continuamente;
- no se convierte feedback en castigo;
- no se confunde facilitador con administrador.

---

## 16. Relación con seguridad por diseño

Familia 4 aporta a seguridad:

- principio de mínimo privilegio;
- separación de responsabilidades;
- bloqueo de permisos excesivos;
- identificación de zonas prohibidas;
- frontera entre rol pedagógico y rol técnico;
- control de exportación e importación;
- límites para datos de entrega;
- límites de visibilidad del facilitador.

La Familia 6 deberá traducir estos criterios en amenazas, controles y gates.

---

## 17. Relación con privacidad por defecto

Familia 4 aporta a privacidad:

- quién puede ver qué;
- qué no se ve por defecto;
- qué requiere compartir;
- qué queda privado;
- qué queda bloqueado;
- qué requiere transparencia;
- qué requiere revisión humana.

La Familia 7 deberá convertir esto en reglas de minimización y exposición.

---

## 18. Relación con trazabilidad formativa no vigilante

La trazabilidad futura debe distinguir:

| Trazabilidad permitida | Trazabilidad bloqueada |
|---|---|
| Evidencia seleccionada | Actividad minuto a minuto |
| Decisión humana documentada | Inferencia de motivación |
| Reflexión ética compartida | Perfil psicológico |
| Portafolio curado | Historial total de edición |
| Metadatos mínimos de entrega | Señales de productividad |
| Feedback contextualizado | Alertas punitivas |

---

## 19. Relación con IA no embebida

La IA externa no tiene rol interno en AI StoryLab 1 v0.7.0.

### Reglas

- la app puede sugerir prompts;
- la persona puede usar IA externa manualmente;
- la persona puede documentar el uso;
- el facilitador puede orientar sobre uso responsable;
- el sistema no llama IA;
- la IA no evalúa;
- la IA no decide;
- la IA no comenta automáticamente;
- la IA no perfila;
- la IA no accede a datos locales.

---

## 20. Relación con herramientas externas

Las herramientas externas no reciben permisos internos.

### Reglas

- se describen;
- se clasifican por privacidad;
- se recomiendan con cautela;
- pueden tener notas institucionales;
- no se integran automáticamente;
- no reciben datos desde la app;
- no guardan credenciales en la app;
- no se convierten en métrica de desempeño.

---

## 21. Decisiones candidatas

### DEC-ROLE-001 · Roles conceptuales antes que permisos técnicos

```text
Estado: Candidata para aprobación documental
```

v0.7.0 debe definir roles conceptuales antes de diseñar autenticación o permisos técnicos.

### DEC-ROLE-002 · Estudiante como agente creativo primario

```text
Estado: Candidata para aprobación documental
```

El estudiante conserva control primario sobre creación, evidencia, decisión humana, reflexión, portafolio y entrega.

### DEC-ROLE-003 · Facilitador como acompañante, no administrador total

```text
Estado: Candidata para aprobación documental
```

El facilitador orienta, acompaña, comenta y retroalimenta con límites. No controla todo el sistema.

### DEC-ROLE-004 · Permiso mínimo necesario

```text
Estado: Candidata para aprobación documental
```

Todo permiso debe justificarse por propósito pedagógico, dato específico, momento y riesgo.

### DEC-ROLE-005 · Separación entre ver, comentar, editar, exportar y publicar

```text
Estado: Candidata para aprobación documental
```

Un rol puede tener permiso para comentar sin tener permiso para editar, exportar o publicar.

### DEC-ROLE-006 · Datos privados no visibles por defecto

```text
Estado: Candidata para aprobación documental
```

Borradores, reflexiones privadas, prompts completos y trabajo en progreso no son visibles al facilitador por defecto.

### DEC-ROLE-007 · IA externa sin rol interno

```text
Estado: Candidata para aprobación documental
```

La IA externa no tiene permisos internos. Su uso se documenta manualmente.

### DEC-ROLE-008 · Roles técnicos futuros diferidos

```text
Estado: Candidata para aprobación documental
```

Roles como administrador institucional, investigador o revisor formal quedan diferidos a fases posteriores y gates específicos.

---

## 22. Riesgos

| Riesgo | Severidad | Control conceptual |
|---|---|---|
| Facilitador como administrador total | Crítica | Separación explícita de roles. |
| Dashboard de vigilancia | Crítica | Permisos mínimos y no vigilancia. |
| Acceso a borradores privados | Alta | Privado por defecto. |
| Reflexiones éticas expuestas | Alta | Compartición selectiva. |
| Prompt usado visible completo | Alta | Tratar como sensible. |
| Exportación por rol incorrecto | Alta | Exportación bajo control del estudiante. |
| Validación de entrega como evaluación punitiva | Alta | Validación limitada y formativa. |
| Docente con permisos técnicos excesivos | Alta | Separación pedagógico/técnico. |
| IA como evaluadora invisible | Crítica | Bloqueo de IA embebida. |
| Herramientas externas como integraciones | Alta | Orientación, no conexión. |
| Roles futuros sin gate | Alta | Diferir formalmente. |
| Equipo creativo sin permisos internos claros | Media-alta | Auditar en fase posterior. |

---

## 23. Permisos bloqueados explícitamente

Quedan bloqueados en v0.7.0:

- ver toda la actividad;
- ver borradores privados por defecto;
- ver prompts completos por defecto;
- ver reflexiones privadas por defecto;
- editar trabajo ajeno;
- exportar progreso ajeno;
- publicar portafolio ajeno;
- subir archivo final ajeno;
- comparar estudiantes;
- generar ranking;
- monitorear continuamente;
- producir entregable por estudiante;
- evaluar automáticamente;
- inferir estados sensibles;
- usar IA embebida para feedback;
- acceder como administrador total;
- acumular datos sin propósito;
- activar backend o autenticación;
- usar datos reales.

---

## 24. Preguntas abiertas

1. ¿El docente responsable y facilitador serán siempre la misma persona?
2. ¿Cómo se diferencia facilitador de docente en contextos escolares reales?
3. ¿Debe existir rol de equipo creativo dentro de la app o solo como guía pedagógica?
4. ¿Qué evidencia puede ser compartida con facilitador?
5. ¿Qué reflexión debe permanecer privada por defecto?
6. ¿Debe el facilitador validar entrega o solo recepción?
7. ¿Qué puede comentar el facilitador?
8. ¿Puede un comentario del facilitador quedar dentro del portafolio?
9. ¿Quién aprueba notas institucionales de herramientas?
10. ¿Quién versiona glosario y prompts recomendados?
11. ¿Qué rol puede abrir o cerrar deudas documentales?
12. ¿Qué roles futuros requieren autenticación si alguna fase posterior la considera?
13. ¿Qué permisos necesita una galería pública futura?
14. ¿Qué permisos serían necesarios para investigación con datos anonimizados?

---

## 25. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- roles y permisos quedan definidos conceptualmente, no técnicamente;
- estudiante queda como agente creativo primario;
- facilitador queda como acompañante, no administrador total;
- docente responsable no recibe permisos técnicos por defecto;
- sistema local no decide, no evalúa y no vigila;
- IA externa no tiene rol interno;
- permisos de backend, autenticación y administración quedan diferidos;
- ver, comentar, editar, exportar y publicar quedan separados;
- datos privados no son visibles por defecto;
- Vista del Facilitador queda condicionada a permiso mínimo necesario;
- ranking, monitoreo continuo y vigilancia quedan bloqueados;
- ninguna decisión aquí activa implementación.

---

## 26. Impacto sobre próximas familias

| Familia posterior | Impacto |
|---|---|
| Vista del Facilitador | Define límites de rol antes de diseñar la vista. |
| Seguridad por diseño | Aporta mínimo privilegio y separación de responsabilidades. |
| Privacidad por defecto | Define visibilidad por rol y zona de datos. |
| Trazabilidad formativa | Bloquea trazabilidad vigilante. |
| Prompts e IA no embebida | Define IA externa sin rol interno. |
| Herramientas | Define herramientas como recursos sin permisos internos. |
| Glosario | Diferencia consulta, sugerencia, aprobación y versionado. |
| Entrega y portafolio | Separa control estudiantil, acompañamiento y validación. |
| Arquitectura modular | Provee objetos de dominio: Rol, Permiso, Acción, Zona, Visibilidad. |
| Gobernanza técnica | Difiere roles institucionales futuros a gates explícitos. |

---

## 27. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el Modelo de Roles y Permisos de AI StoryLab 1 v0.7.0 como cuarta familia del Mapa de Decisiones Técnicas.

El documento define roles conceptuales, responsabilidades, acciones y permisos mínimos para estudiante, facilitador, docente responsable, equipo creativo, mantenedor documental, sistema local y roles futuros diferidos.

El hito establece al estudiante como agente creativo primario, al facilitador como acompañante no administrador total, al sistema local como soporte no decisorio y a la IA externa como herramienta sin rol interno. Separa ver, comentar, editar, exportar y publicar; condiciona la Vista del Facilitador al principio de permiso mínimo necesario; y bloquea ranking, monitoreo continuo, vigilancia, evaluación automática, IA embebida, acceso a borradores privados y administración total.

Este hito no implementa código, no define autenticación, no selecciona stack final, no activa backend, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar modelo roles permisos v0.7" \
  -m "Hito: integra la cuarta familia del Mapa de Decisiones Tecnicas v0.7.0. Define roles conceptuales, responsabilidades, acciones y permisos minimos. Establece al estudiante como agente creativo primario, al facilitador como acompanante no administrador total y bloquea vigilancia, ranking, monitoreo continuo, evaluacion automatica, IA embebida e implementacion prematura."
```

---

## 28. Dictamen de aprobación

La Familia 4 queda definida como la frontera de responsabilidad y visibilidad antes de diseñar la Vista del Facilitador.

Su decisión más importante es:

```text
AI StoryLab 1 debe diseñar roles para sostener agencia, acompañamiento y cuidado, no para concentrar control.
```

Este documento cierra la cuarta familia como modelo conceptual de roles y permisos aprobado. No cierra la Vista del Facilitador.  
Establece el marco para continuar con:

```text
Familia 5 · Vista del Facilitador
```

---

## 29. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- roles y permisos quedan definidos conceptualmente, no técnicamente;
- estudiante queda como agente creativo primario;
- facilitador queda como acompañante, no administrador total;
- docente responsable no recibe permisos técnicos por defecto;
- sistema local no decide, no evalúa y no vigila;
- IA externa no tiene rol interno;
- permisos de backend, autenticación y administración quedan diferidos;
- ver, comentar, editar, exportar y publicar quedan separados;
- datos privados no son visibles por defecto;
- Vista del Facilitador queda condicionada a permiso mínimo necesario;
- ranking, monitoreo continuo y vigilancia quedan bloqueados;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la quinta familia del mapa:

```text
Vista del Facilitador
```

No autoriza código, stack final, backend, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
