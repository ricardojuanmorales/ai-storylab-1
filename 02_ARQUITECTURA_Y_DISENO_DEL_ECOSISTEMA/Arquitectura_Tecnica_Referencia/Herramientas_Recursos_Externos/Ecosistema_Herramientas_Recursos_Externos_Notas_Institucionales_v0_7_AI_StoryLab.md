# Ecosistema de Herramientas, Recursos Externos y Notas Institucionales v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Ecosistema_Herramientas_Recursos_Externos_Notas_Institucionales_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 10 · Ecosistema de herramientas, recursos externos y notas institucionales  
**Tipo de documento:** Documento técnico-conceptual, pedagógico, institucional y pre-implementativo  
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
- `Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md`
- `AI_Usage_Policy_v0_4_0.md`
- `src/data/tools.json`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Ecosistema_Herramientas_Recursos_Externos_Notas_Institucionales_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Herramientas_Recursos_Externos/Ecosistema_Herramientas_Recursos_Externos_Notas_Institucionales_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 10 aborda una pregunta central:

```text
¿Cómo debe AI StoryLab 1 organizar herramientas, recursos externos y notas institucionales sin convertir recomendaciones en integraciones, sin crear dependencia tecnológica y sin exponer datos?
```

La respuesta inicial es:

```text
AI StoryLab 1 debe tratar las herramientas externas como recursos pedagógicos orientados, clasificados y contextualizados, no como servicios integrados ni como infraestructura obligatoria.
```

Una herramienta puede abrir una puerta.  
La aplicación no debe empujar a nadie por esa puerta con los bolsillos llenos de datos.

---

## 1. Propósito

Este documento define el modelo conceptual para el ecosistema de herramientas, recursos externos y notas institucionales en AI StoryLab 1 v0.7.0.

Su función es:

- preservar el catálogo de herramientas heredado;
- transformar herramientas en recursos gobernados;
- distinguir herramienta, recurso, nota institucional y recomendación;
- clasificar niveles de privacidad;
- orientar uso responsable;
- evitar integraciones automáticas;
- evitar credenciales, APIs y envío de datos;
- proteger local-first;
- apoyar prompts e IA no embebida;
- preparar glosario, portafolio y entrega;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- principios de ecosistema de herramientas;
- taxonomía de herramientas y recursos;
- niveles de privacidad;
- notas institucionales;
- criterios de recomendación;
- criterios de advertencia;
- reglas para herramientas IA;
- reglas para herramientas de texto, imagen, audio, presentación, video y organización;
- relación con prompts;
- relación con privacidad;
- relación con seguridad;
- relación con trazabilidad;
- relación con portafolio y entrega;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- selecciona herramientas institucionales finales;
- aprueba contratos con proveedores;
- valida cumplimiento legal de terceros;
- integra cuentas externas;
- guarda credenciales;
- usa APIs de herramientas;
- usa APIs IA;
- define autenticación;
- define backend;
- define sincronización;
- define importación automática;
- define exportación automática hacia terceros;
- define telemetría de herramientas;
- define analíticas de uso;
- usa datos reales;
- valida con personas;
- implementa código;
- despliega.

---

## 4. Principio rector

```text
Las herramientas externas en AI StoryLab 1 deben ser opciones orientadas y contextualizadas, no dependencias invisibles ni canales automáticos de datos.
```

Corolarios:

- herramienta recomendada no equivale a herramienta obligatoria;
- herramienta listada no equivale a herramienta aprobada sin condiciones;
- cada herramienta debe tener nivel de privacidad;
- cada herramienta debe tener propósito pedagógico;
- las notas institucionales deben ser editables y gobernadas;
- deben priorizarse alternativas locales cuando sea posible;
- la app no debe guardar credenciales;
- la app no debe conectar cuentas;
- la app no debe enviar datos a terceros;
- la herramienta usada no es métrica de rendimiento;
- el uso de herramienta externa debe acompañarse con atribución y cuidado.

---

## 5. Herencia funcional del catálogo de herramientas

El archivo `src/data/tools.json` heredado ya incluye:

- `schema_version`;
- tipos de herramienta;
- niveles de dificultad;
- niveles de privacidad;
- categorías;
- descripciones;
- estrategias;
- `recommended_prompts`;
- `teacher_note`;
- herramientas concretas;
- fase;
- sesiones asociadas;
- dificultad;
- privacidad;
- ejemplo.

Los niveles de privacidad heredados son:

```text
local
requiere cuenta
datos en la nube
```

Las categorías heredadas son:

- Texto;
- Imagen;
- Audio;
- Presentación;
- Video;
- Organización.

Dictamen:

```text
Estado: preservar estructura, transformar gobernanza
```

---

## 6. Definiciones operativas

### Herramienta

```text
Aplicación, servicio, recurso digital, recurso local o práctica técnica que puede apoyar una fase del proyecto creativo.
```

### Recurso externo

```text
Herramienta, banco, plataforma, guía, repositorio, plantilla o servicio que existe fuera de AI StoryLab 1.
```

### Nota institucional

```text
Texto editable por la institución, docente o facilitador responsable para indicar herramientas preferidas, restricciones, alternativas o advertencias contextuales.
```

### Catálogo de herramientas

```text
Conjunto gobernado de categorías, estrategias, prompts, notas y recursos recomendados para apoyar el proyecto.
```

### Herramienta aprobada

```text
Herramienta cuyo uso ha sido validado explícitamente por una institución, docente o facilitador bajo criterios externos al sistema.
```

### Herramienta recomendada

```text
Herramienta sugerida como posible apoyo, sin obligación ni aprobación universal.
```

---

## 7. Diferencia entre listar, recomendar, aprobar e integrar

| Acción | Significado | Riesgo | Estado v0.7 |
|---|---|---|---|
| Listar | Aparece como opción o ejemplo | Puede confundirse con aprobación | Permitido con advertencia |
| Recomendar | Se sugiere por propósito pedagógico | Puede volverse obligatorio | Permitido con alternativa |
| Aprobar | Institución valida su uso | Requiere política local | Diferido/contextual |
| Integrar | La app conecta o envía datos | Riesgo alto | Bloqueado |
| Automatizar | La app usa la herramienta por el usuario | Sustituye agencia | Bloqueado |

Regla:

```text
Una herramienta puede estar nombrada sin estar integrada, aprobada o exigida.
```

---

## 8. Niveles de privacidad

Se preservan los niveles heredados y se amplía su interpretación conceptual.

### Local

```text
La herramienta puede usarse sin enviar datos a un servicio externo, o principalmente bajo control del dispositivo o entorno local.
```

Cuidado:

- local no significa sin riesgo;
- puede haber dispositivo compartido;
- puede haber archivos locales sensibles;
- puede haber exportaciones manuales;
- puede haber pérdida de datos.

### Requiere cuenta

```text
La herramienta exige registro, inicio de sesión o identificación ante un tercero.
```

Cuidado:

- no usar cuentas personales sin orientación institucional;
- no compartir credenciales;
- revisar términos;
- evitar datos sensibles;
- considerar alternativas.

### Datos en la nube

```text
La herramienta procesa, guarda o sincroniza datos en servidores externos.
```

Cuidado:

- no subir información privada;
- no subir archivos sensibles;
- no subir datos reales;
- no subir reflexiones privadas;
- revisar permisos de enlace;
- revisar privacidad antes de compartir.

### Nivel futuro candidato: institucional

```text
Herramienta aprobada bajo política local o licencia institucional.
```

Estado:

```text
Diferido a gobernanza institucional futura.
```

---

## 9. Criterios para recomendar herramientas

Una herramienta puede recomendarse si:

- apoya una tarea concreta;
- tiene propósito pedagógico claro;
- ofrece alternativa local o de baja exposición cuando sea posible;
- puede explicarse en lenguaje accesible;
- permite atribución o créditos cuando aplica;
- no exige compartir datos sensibles para tareas básicas;
- no sustituye decisión humana;
- no obliga a crear cuenta si hay alternativa;
- no requiere pago inesperado;
- no introduce vigilancia;
- no recoge datos del proyecto automáticamente desde la app;
- no contradice principios de privacidad, seguridad o no vigilancia.

---

## 10. Criterios para advertir o restringir herramientas

Debe advertirse o restringirse cuando una herramienta:

- requiere cuenta;
- guarda datos en la nube;
- procesa voz, imagen, video o rostro;
- genera contenido con IA;
- usa archivos subidos;
- crea enlaces públicos;
- puede exponer metadatos;
- mezcla trabajo escolar con cuenta personal;
- tiene límites de edad o términos complejos;
- dificulta atribución;
- tiene contenido no apropiado para contexto escolar;
- induce publicación automática;
- requiere credenciales externas;
- recolecta telemetría de uso;
- no permite control claro de privacidad.

---

## 11. Notas institucionales

Las notas institucionales deben permitir adaptación local sin cambiar la arquitectura.

### Pueden indicar

- herramientas preferidas por la institución;
- alternativas locales;
- herramientas no autorizadas;
- restricciones por edad;
- restricciones por cuenta;
- instrucciones de entrega;
- criterios de privacidad;
- enlaces a guías internas;
- recordatorios de atribución;
- recursos aprobados para música, imágenes o video;
- contacto o ruta de ayuda institucional.

### No deben incluir

- datos reales de estudiantes;
- credenciales;
- enlaces privados;
- claves de acceso;
- tokens;
- información sensible;
- instrucciones para evadir políticas;
- autorizaciones universales sin revisión;
- lenguaje punitivo o de vigilancia.

### Regla

```text
La nota institucional orienta el contexto; no sustituye consentimiento, privacidad ni criterio docente.
```

---

## 12. Herramientas de texto

Propósito:

- redactar manifiestos;
- revisar claridad;
- corregir gramática;
- organizar ideas;
- preparar guiones;
- documentar evidencia.

Controles:

- escribir primero en borrador propio;
- usar IA para revisión, no sustitución total;
- no pegar datos sensibles;
- no pegar reflexiones privadas completas;
- revisar cambios;
- preservar voz propia;
- declarar uso IA si aplica;
- guardar versión local cuando sea posible.

Riesgos:

- sustitución de autoría;
- pérdida de estilo;
- datos copiados a nube;
- prompts con información privada;
- confusión entre corrección y creación total.

---

## 13. Herramientas de imagen

Propósito:

- explorar estilo visual;
- crear moodboards;
- buscar imágenes libres;
- generar referencias visuales;
- ilustrar escenas;
- construir consistencia estética.

Controles:

- verificar licencias;
- atribuir recursos;
- evitar datos personales;
- evitar subir fotos de estudiantes sin política;
- declarar imagen IA si aplica;
- evitar contenido inapropiado;
- revisar sesgos visuales;
- usar bancos libres cuando sea posible;
- distinguir imagen generada, imagen propia e imagen CC.

Riesgos:

- derechos de autor;
- sesgo visual;
- uso de rostros;
- generación de personas identificables;
- subida de imágenes privadas;
- confusión entre referencia e imagen final.

---

## 14. Herramientas de audio

Propósito:

- grabar voz propia;
- editar sonido;
- generar narración TTS;
- seleccionar música;
- organizar efectos de sonido.

Controles:

- preferir grabación local cuando sea posible;
- declarar voz IA;
- revisar licencias de música;
- no subir voces sensibles sin autorización;
- no clonar voces;
- no usar voces de terceros sin permiso;
- atribuir recursos;
- revisar calidad y claridad.

Riesgos:

- voz como dato sensible;
- TTS con datos en nube;
- clonación de voz;
- música sin licencia;
- exposición de identidad;
- manipulación no autorizada.

---

## 15. Herramientas de presentación

Propósito:

- ensamblar diapositivas;
- organizar guion visual;
- insertar narración;
- preparar créditos;
- exportar borradores;
- revisar coherencia narrativa.

Controles:

- mantener una idea principal por diapositiva;
- incluir créditos;
- no publicar enlaces sin revisión;
- revisar permisos si se usa nube;
- guardar respaldo local;
- revisar privacidad antes de compartir;
- evitar datos personales innecesarios.

Riesgos:

- enlaces compartidos públicamente;
- permisos mal configurados;
- datos en nube;
- trabajo grupal con cuentas personales;
- imágenes sin atribución;
- archivo final confundido con evidencia pública.

---

## 16. Herramientas de video

Propósito:

- exportar presentación final;
- comprimir archivo;
- revisar compatibilidad;
- preparar entrega;
- verificar audio/video.

Controles:

- no subir automáticamente el archivo a la app;
- no publicar automáticamente;
- revisar video completo antes de entregar;
- confirmar créditos;
- confirmar declaración IA;
- revisar privacidad;
- no guardar archivo final en localStorage;
- usar metadatos mínimos.

Riesgos:

- archivo pesado;
- exposición de rostro/voz;
- enlace privado publicado;
- metadatos sensibles;
- almacenamiento indebido;
- entrega confundida con galería pública.

---

## 17. Herramientas de organización

Propósito:

- planificar escenas;
- asignar tareas;
- organizar créditos;
- coordinar equipo;
- preparar calendario;
- visualizar flujo.

Controles:

- evitar datos personales innecesarios;
- usar tableros físicos o locales cuando sea posible;
- no convertir tareas en ranking;
- no usar seguimiento minuto a minuto;
- no publicar tableros;
- revisar permisos de herramientas colaborativas.

Riesgos:

- vigilancia de equipo;
- comparación de productividad;
- datos de estudiantes visibles;
- tableros públicos;
- dependencia de cuentas;
- confusión entre organización y monitoreo.

---

## 18. Herramientas IA externas

Las herramientas IA externas requieren reglas adicionales.

### Permitido

- apoyo de ideas;
- revisión de claridad;
- sugerencias visuales;
- apoyo de organización;
- TTS declarado;
- generación de imagen declarada;
- revisión de créditos;
- ayuda técnica contextual.

### Bloqueado

- IA embebida;
- API productiva;
- chatbot interno;
- evaluación automática;
- ranking;
- detector IA;
- importación automática de chats;
- credenciales o tokens;
- datos reales en prompts;
- generación completa del trabajo por la app;
- perfilado de dependencia.

### Regla

```text
La herramienta IA externa apoya una decisión humana; no produce autoridad interna.
```

---

## 19. Recursos externos no herramienta

AI StoryLab 1 también puede orientar recursos que no son “herramientas” en sentido estricto.

Ejemplos conceptuales:

- bancos de imágenes libres;
- bibliotecas de música libre;
- guías de licencias;
- plantillas;
- tutoriales;
- manuales institucionales;
- repositorios de recursos educativos;
- ejemplos sintéticos;
- rúbricas institucionales;
- guías de accesibilidad;
- políticas escolares.

Controles:

- verificar fuente;
- revisar licencia;
- usar enlaces públicos estables;
- evitar enlaces privados;
- evitar recursos con datos reales;
- no depender de recursos externos únicos;
- incluir alternativas cuando sea posible.

---

## 20. Herramientas y créditos

Toda herramienta o recurso que afecte el producto final puede requerir atribución.

Debe registrarse:

- recurso usado;
- autor/fuente si aplica;
- licencia si aplica;
- herramienta IA si aplica;
- tipo de contribución;
- fecha de consulta si aplica;
- decisión humana posterior.

No debe registrarse por defecto:

- cuenta personal;
- enlace privado;
- credenciales;
- prompt completo;
- chat completo;
- archivo fuente privado.

---

## 21. Herramientas y portafolio

El portafolio puede incluir:

- herramienta usada;
- motivo de selección;
- producto curado;
- créditos;
- declaración IA;
- reflexión seleccionada;
- revisión de privacidad.

No debe incluir por defecto:

- historial de uso;
- tiempo de uso;
- número de iteraciones;
- capturas de cuenta;
- conversaciones completas;
- borradores privados;
- archivos privados.

Regla:

```text
El portafolio muestra criterio y selección, no inventario de cada clic.
```

---

## 22. Herramientas y entrega final

La entrega final puede incluir:

- herramientas usadas;
- créditos;
- declaración IA;
- confirmación de privacidad;
- metadatos mínimos;
- licencia o condición de uso.

No debe incluir:

- archivo fuente;
- credenciales;
- enlaces privados sin revisión;
- historial de herramienta;
- métricas de uso;
- chats;
- prompts completos;
- archivos subidos a terceros sin autorización.

---

## 23. Herramientas y Vista del Facilitador

La Vista del Facilitador puede:

- sugerir alternativas;
- explicar niveles de privacidad;
- recordar créditos;
- orientar uso responsable;
- recomendar revisión de privacidad;
- apoyar declaración IA;
- responder dudas;
- señalar riesgos generales.

No puede:

- ver cuentas externas;
- exigir credenciales;
- exigir capturas;
- exigir chats;
- exigir historial de uso;
- rankear herramientas usadas;
- inferir desempeño por herramienta;
- monitorear actividad en herramientas;
- enviar datos a herramientas;
- aprobar automáticamente contenido externo.

---

## 24. Herramientas y trazabilidad

Puede trazarse:

- herramienta declarada;
- tipo de herramienta;
- nivel de privacidad;
- propósito de uso;
- crédito;
- declaración IA;
- revisión de privacidad.

No debe trazarse:

- tiempo de uso;
- frecuencia de uso;
- historial de acciones;
- métricas internas;
- actividad minuto a minuto;
- cuentas;
- tokens;
- patrones de productividad;
- comparación entre estudiantes.

---

## 25. Herramientas y privacidad

Reglas de privacidad:

- no copiar datos personales innecesarios;
- no subir reflexiones privadas;
- no subir prompts sensibles;
- no subir archivos finales sin revisión;
- no compartir enlaces privados;
- no usar cuentas personales sin orientación;
- no exponer nombres reales si no es necesario;
- usar ejemplos sintéticos cuando sea posible;
- revisar configuración de enlace;
- preferir alternativas locales o institucionales.

---

## 26. Herramientas y seguridad

Reglas de seguridad:

- no almacenar credenciales;
- no almacenar tokens;
- no usar APIs productivas;
- no conectar cuentas;
- no sincronizar automáticamente;
- no descargar o ejecutar archivos desconocidos desde fuentes dudosas;
- no aceptar extensiones obligatorias sin revisión;
- no usar herramientas que requieran permisos excesivos;
- no convertir recursos externos en dependencia crítica sin gate.

---

## 27. Modelo conceptual de ficha de herramienta

Campos conceptuales candidatos, no esquema final:

| Campo | Propósito |
|---|---|
| `tool_id` | Identificador conceptual |
| `name` | Nombre visible |
| `category` | Texto, imagen, audio, presentación, video, organización |
| `purpose` | Para qué sirve |
| `phase` | Fase o misión asociada |
| `difficulty` | Básica, intermedia, avanzada |
| `privacy_level` | Local, requiere cuenta, datos en nube |
| `institutional_note` | Orientación contextual |
| `recommended_use` | Uso sugerido |
| `risks` | Riesgos principales |
| `alternatives` | Opciones locales o de menor exposición |
| `credit_required` | Si requiere atribución |
| `ai_related` | Si usa IA |
| `data_to_avoid` | Qué no copiar/subir |
| `export_notes` | Consideraciones para entrega/portafolio |
| `status` | Recomendada, ejemplo, institucional, restringida, diferida |

Regla:

```text
Una ficha de herramienta debe enseñar a elegir, no inducir a obedecer.
```

---

## 28. Estados conceptuales de herramienta

| Estado | Significado |
|---|---|
| Ejemplo | Se menciona como posibilidad, sin aprobación. |
| Recomendada | Se sugiere por utilidad pedagógica. |
| Alternativa local | Preferible para privacidad o accesibilidad. |
| Institucional | Validada por política local. Diferido. |
| Restringida | Requiere cuidado o autorización. |
| No recomendada | Riesgo alto o inadecuada. |
| Diferida | Se evaluará en fase posterior. |
| Bloqueada | Incompatible con principios v0.7.0. |

---

## 29. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- catálogo de herramientas;
- categorías por tipo;
- niveles de dificultad;
- niveles de privacidad heredados;
- estrategias de uso;
- prompts recomendados;
- notas docentes editables;
- herramientas locales;
- créditos;
- declaración IA;
- revisión de privacidad.

### Transformar

- `teacher_note`;
- `privacy_levels`;
- `recommended_prompts`;
- ejemplos de herramientas;
- herramientas IA;
- herramientas nube;
- bancos de imágenes;
- TTS;
- planificación digital;
- entrega por video;
- fichas de herramientas.

### Diferir

- aprobación institucional final;
- contratos;
- listas oficiales por escuela;
- proveedores IA;
- integración LMS;
- autenticación;
- backend;
- sincronización;
- interoperabilidad;
- automatización de recursos;
- galería pública.

### Bloquear

- integración automática;
- credenciales;
- tokens;
- APIs productivas;
- envío automático de datos;
- importación automática;
- ranking por herramientas;
- tracking de uso;
- analíticas de productividad;
- publicación automática;
- cuentas obligatorias sin alternativa;
- herramientas que exijan datos reales;
- herramientas de vigilancia.

### Mantener en auditoría

- herramientas con cuenta;
- herramientas con nube;
- TTS;
- imagen IA;
- video en plataformas externas;
- enlaces privados;
- herramientas colaborativas;
- herramientas institucionales futuras;
- recursos con licencias complejas;
- uso en grupos pequeños.

---

## 30. Decisiones candidatas

### DEC-TOOLS-001 · Herramientas como recursos orientados, no integraciones

```text
Estado: Candidata para aprobación documental
```

El catálogo orienta, pero no conecta ni automatiza.

### DEC-TOOLS-002 · Nivel de privacidad obligatorio

```text
Estado: Candidata para aprobación documental
```

Toda herramienta debe tener clasificación de privacidad.

### DEC-TOOLS-003 · Nota institucional editable y gobernada

```text
Estado: Candidata para aprobación documental
```

Las notas institucionales permiten adaptación local sin modificar arquitectura.

### DEC-TOOLS-004 · Alternativas locales preferentes

```text
Estado: Candidata para aprobación documental
```

Cuando sea posible, se deben ofrecer alternativas locales o de menor exposición.

### DEC-TOOLS-005 · Herramienta usada no es métrica de rendimiento

```text
Estado: Candidata para aprobación documental
```

El uso de herramientas no debe convertirse en ranking, productividad ni evaluación automática.

### DEC-TOOLS-006 · Recursos externos con atribución

```text
Estado: Candidata para aprobación documental
```

Herramientas y recursos que impactan el producto final deben acompañarse de créditos o declaración.

### DEC-TOOLS-007 · Herramientas IA como frontera de riesgo

```text
Estado: Candidata para aprobación documental
```

Toda herramienta IA externa debe tratarse con privacidad, atribución, decisión humana y no integración.

### DEC-TOOLS-008 · Sin credenciales ni APIs en v0.7.0

```text
Estado: Candidata para aprobación documental
```

No se autorizan cuentas conectadas, tokens, APIs productivas ni sincronización.

---

## 31. Riesgos

| Riesgo | Severidad | Control conceptual |
|---|---|---|
| Herramienta recomendada interpretada como obligatoria | Media/alta | Estado y alternativa |
| Herramienta listada interpretada como aprobada | Alta | Nota institucional |
| Datos copiados a nube | Alta | Nivel privacidad y advertencia |
| Cuenta personal expuesta | Alta | No credenciales, orientación |
| Herramienta usada como ranking | Alta | Bloqueo de métricas |
| Falta de créditos | Media/alta | Atribución |
| IA externa sin declaración | Media/alta | Declaración IA |
| TTS con voz sensible | Alta | Advertencia |
| Imagen IA con sesgos | Media/alta | Revisión humana |
| Enlace privado publicado | Alta | Revisión privacidad |
| Dependencia de proveedor | Media/alta | Alternativas locales |
| Integración por inercia | Crítica | Gate futuro |

---

## 32. Controles conceptuales

| Control | Descripción |
|---|---|
| Clasificación de privacidad | Local, requiere cuenta, nube u otro futuro. |
| Nota institucional | Contextualiza uso local. |
| Alternativa local | Reduce dependencia y exposición. |
| Advertencia de cuenta | Señala riesgo de identidad. |
| Advertencia de nube | Señala salida de datos. |
| Revisión de créditos | Evita uso sin atribución. |
| Revisión de privacidad | Antes de compartir o entregar. |
| No credenciales | La app no almacena ni pide cuentas. |
| No API | La app no integra herramientas externas. |
| No ranking | Herramienta usada no mide desempeño. |
| Estado de herramienta | Ejemplo, recomendada, restringida, etc. |
| Gate futuro | Integraciones requieren aprobación posterior. |

---

## 33. Preguntas abiertas

1. ¿Qué campos mínimos debe tener una ficha de herramienta?
2. ¿Debe conservarse la taxonomía de seis categorías heredadas?
3. ¿Conviene añadir categoría de accesibilidad?
4. ¿Conviene añadir categoría de recursos abiertos?
5. ¿Cómo se define una herramienta institucional?
6. ¿Cómo se validan herramientas con límites de edad?
7. ¿Cómo se comunican riesgos de nube sin desalentar creatividad?
8. ¿Qué alternativas locales deben priorizarse?
9. ¿Qué herramientas deben quedar bloqueadas explícitamente?
10. ¿Cómo se maneja una herramienta que cambia sus términos?
11. ¿Qué nota institucional puede editar el docente?
12. ¿Qué nota requiere aprobación institucional?
13. ¿Qué entra al portafolio sobre herramientas usadas?
14. ¿Qué entra a la entrega final sobre herramientas usadas?
15. ¿Qué requeriría un gate futuro de integración?

---

## 34. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- herramientas externas quedan definidas como recursos orientados, no integraciones;
- herramienta listada no equivale a herramienta obligatoria;
- herramienta listada no equivale a herramienta aprobada sin condiciones;
- toda herramienta debe tener nivel de privacidad;
- notas institucionales quedan definidas como editables y gobernadas;
- alternativas locales deben priorizarse cuando sea posible;
- herramienta usada no es métrica de rendimiento;
- recursos externos requieren atribución cuando impactan el producto final;
- herramientas IA externas quedan como frontera de riesgo;
- credenciales, tokens, APIs productivas, envío automático de datos, tracking de uso, ranking, analíticas y publicación automática quedan bloqueados;
- ninguna decisión aquí activa implementación.

---

## 35. Impacto sobre próximas familias

| Familia posterior | Impacto |
|---|---|
| Glosario operativo | Aporta términos: herramienta, recurso externo, nota institucional, privacidad de herramienta. |
| Entrega y portafolio | Define créditos, declaración IA, herramientas usadas y revisión de privacidad. |
| Arquitectura modular | Aporta objetos: Herramienta, RecursoExterno, NotaInstitucional, NivelPrivacidad, FichaHerramienta. |
| Gobernanza técnica | Aporta gates para integración, proveedores, herramientas institucionales y listas oficiales. |

---

## 36. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el documento Ecosistema de Herramientas, Recursos Externos y Notas Institucionales de AI StoryLab 1 v0.7.0 como décima familia del Mapa de Decisiones Técnicas.

El documento preserva el catálogo heredado de herramientas, categorías, niveles de privacidad, estrategias, prompts recomendados y notas docentes editables, transformándolo en un ecosistema gobernado de recursos orientados, no integraciones automáticas.

El hito establece que herramienta listada no equivale a herramienta obligatoria ni aprobada sin condiciones; toda herramienta debe tener nivel de privacidad; las notas institucionales deben ser editables y gobernadas; se deben priorizar alternativas locales cuando sea posible; herramientas IA externas son frontera de riesgo; y herramienta usada no es métrica de rendimiento.

Este hito bloquea credenciales, tokens, APIs productivas, envío automático de datos, importación automática, tracking de uso, ranking por herramientas, analíticas de productividad, publicación automática, integración con cuentas externas, backend, sincronización, datos reales e implementación prematura.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar ecosistema herramientas recursos v0.7" \
  -m "Hito: integra la decima familia del Mapa de Decisiones Tecnicas v0.7.0. Define herramientas externas como recursos orientados, preserva niveles de privacidad y notas docentes, y bloquea integraciones automaticas, credenciales, APIs productivas, tracking, ranking, analiticas, datos reales e implementacion prematura."
```

---

## 37. Dictamen de aprobación

La Familia 10 queda definida como el marco de orientación, clasificación y gobernanza del ecosistema externo de herramientas y recursos.

Su decisión más importante es:

```text
AI StoryLab 1 puede recomendar herramientas, pero no debe convertir una recomendación en dependencia, vigilancia ni transferencia automática de datos.
```

Este documento cierra la décima familia como modelo aprobado de ecosistema de herramientas, recursos externos y notas institucionales. No cierra glosario operativo, portafolio, entrega ni arquitectura modular.  
Establece el marco para continuar con:

```text
Familia 11 · Glosario operativo, lenguaje canónico y ayudas contextuales
```

---

## 38. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- herramientas externas quedan definidas como recursos orientados, no integraciones;
- herramienta listada no equivale a herramienta obligatoria;
- herramienta listada no equivale a herramienta aprobada sin condiciones;
- toda herramienta debe tener nivel de privacidad;
- notas institucionales quedan definidas como editables y gobernadas;
- alternativas locales deben priorizarse cuando sea posible;
- herramienta usada no es métrica de rendimiento;
- recursos externos requieren atribución cuando impactan el producto final;
- herramientas IA externas quedan como frontera de riesgo;
- credenciales, tokens, APIs productivas, envío automático de datos, tracking de uso, ranking, analíticas y publicación automática quedan bloqueados;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la undécima familia del mapa:

```text
Glosario operativo, lenguaje canónico y ayudas contextuales
```

No autoriza código, selección institucional final de herramientas, contratos, proveedores, cuentas conectadas, APIs, backend, sincronización, integración automática, despliegue, datos reales ni validación con personas.
