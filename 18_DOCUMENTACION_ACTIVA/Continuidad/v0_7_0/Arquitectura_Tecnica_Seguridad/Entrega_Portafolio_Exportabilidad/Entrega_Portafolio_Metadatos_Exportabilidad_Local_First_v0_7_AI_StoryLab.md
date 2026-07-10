# Entrega Final, Portafolio, Metadatos y Exportabilidad Local-First v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Entrega_Portafolio_Metadatos_Exportabilidad_Local_First_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 12 · Entrega final, portafolio, metadatos y exportabilidad local-first  
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
- `Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md`
- `Ecosistema_Herramientas_Recursos_Externos_Notas_Institucionales_v0_7_AI_StoryLab.md`
- `Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md`
- `src/utils/finalSubmission.js`
- `src/components/FinalSubmissionPanel.jsx`
- `src/utils/validation.js`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Entrega_Portafolio_Metadatos_Exportabilidad_Local_First_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Entrega_Portafolio_Exportabilidad/Entrega_Portafolio_Metadatos_Exportabilidad_Local_First_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 12 aborda una pregunta central:

```text
¿Cómo debe AI StoryLab 1 conceptualizar portafolio, entrega final, metadatos y exportabilidad local-first sin almacenar archivos finales, sin exponer datos privados y sin convertir la entrega en vigilancia o publicación automática?
```

La respuesta inicial es:

```text
AI StoryLab 1 debe separar portafolio, progreso, exportación y entrega final; registrar solo metadatos mínimos; preservar control humano; y tratar todo archivo final, enlace privado y exportación como zona de alto cuidado.
```

La entrega no debe ser una aspiradora de archivos.  
Debe ser un umbral con lámpara: muestra qué sale, por qué sale y qué queda protegido.

---

## 1. Propósito

Este documento define el modelo conceptual para entrega final, portafolio, metadatos y exportabilidad local-first en AI StoryLab 1 v0.7.0.

Su función es:

- preservar la entrega final heredada como metadatos, no archivo;
- transformar portafolio emergente en portafolio curado;
- separar progreso, evidencia, portafolio, exportación y entrega;
- definir metadatos mínimos;
- proteger archivos finales;
- proteger enlaces privados;
- definir revisión de privacidad previa a entrega;
- orientar exportabilidad local-first;
- distinguir exportación individual y grupal;
- bloquear almacenamiento automático de archivos finales;
- bloquear publicación automática;
- preparar arquitectura modular;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- portafolio;
- entrega final;
- metadatos de entrega;
- archivos finales;
- enlaces privados;
- declaración IA;
- créditos y atribución;
- revisión de privacidad;
- licencia o condición de uso;
- interés en galería;
- exportación local-first;
- importación local-first;
- JSON individual;
- JSON grupal bajo auditoría;
- relación con Vista del Facilitador;
- relación con seguridad, privacidad y trazabilidad;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- implementa exportadores;
- define formato final de JSON;
- define UI final de entrega;
- define almacenamiento;
- sube archivos;
- almacena MP4, PPT, audio, imágenes o portafolios;
- crea galería pública;
- publica entregas;
- define backend;
- define autenticación;
- define sincronización;
- define repositorio remoto de entregas;
- define validación automática;
- define rúbricas finales;
- define contratos institucionales;
- usa datos reales;
- valida con personas;
- implementa código;
- despliega.

---

## 4. Principio rector

```text
La entrega final y la exportabilidad de AI StoryLab 1 deben permitir cerrar, compartir y conservar el trabajo con control humano, datos mínimos y separación clara entre archivo, evidencia, portafolio, metadatos y visibilidad.
```

Corolarios:

- el archivo final no se almacena automáticamente;
- el portafolio no es progreso completo;
- la exportación no debe ser captura total;
- los metadatos deben ser mínimos;
- la declaración IA debe ser manual y formativa;
- los créditos deben revisarse;
- la privacidad debe confirmarse antes de entregar;
- el enlace privado es dato de alto cuidado;
- la galería pública queda diferida;
- la Vista del Facilitador acompaña, no valida automáticamente;
- local-first implica control de salida, no acumulación.

---

## 5. Herencia funcional de entrega final

La herencia técnica v0.3 contiene un modelo de `final_submission` con campos como:

- `video_required`;
- `video_status`;
- `video_file_name`;
- `video_format`;
- `video_duration_minutes`;
- `video_size_mb`;
- `submission_location`;
- `private_link`;
- `submitted_at`;
- `powerpoint_file_name`;
- `portfolio_file_name`;
- `json_export_file_name`;
- `ai_use_declaration_confirmed`;
- `credits_confirmed`;
- `privacy_review_confirmed`;
- `license`;
- `gallery_candidate_interest`;
- `public_author_option`;
- `facilitator_validation_status`;
- `notes`.

La herencia declara explícitamente:

```text
El MP4 nunca se almacena ahí; solo metadatos y ubicación.
```

Dictamen:

```text
Estado: preservar principio, transformar gobernanza
```

---

## 6. Herencia funcional de exportación e importación

La validación heredada reconoce:

- `student_progress`;
- `group_progress`;
- `schema_version`;
- compatibilidad de versiones;
- `profile.student_code`;
- `sessions`;
- `progress.last_updated`;
- inicialización de `final_submission` si falta;
- validación ligera de exportación grupal.

Dictamen:

```text
Estado: preservar portabilidad, auditar alcance
```

La exportación individual puede sostener continuidad y respaldo.  
La exportación grupal puede convertirse en vigilancia si no se rediseña con límites.

---

## 7. Definiciones operativas

### Portafolio

```text
Colección curada de evidencias, decisiones, reflexiones, créditos y declaraciones que la persona selecciona para mostrar el sentido de su proceso y producto.
```

### Portafolio curado

```text
Portafolio construido progresivamente mediante selección humana, revisión de privacidad y propósito explícito.
```

### Progreso individual

```text
Registro local de avance, evidencias y estados de una persona o proyecto, no equivalente al portafolio.
```

### Entrega final

```text
Cierre documentado del proyecto mediante metadatos mínimos, confirmaciones y referencia externa al archivo final, sin almacenamiento automático del archivo.
```

### Metadatos de entrega

```text
Información mínima que acompaña la entrega para documentar formato, estado, créditos, declaración IA, privacidad, licencia y ubicación de entrega sin absorber el archivo final.
```

### Exportabilidad local-first

```text
Capacidad de sacar datos bajo control humano, en formato revisable y comprensible, sin sincronización ni envío automático.
```

### Enlace privado

```text
Referencia externa a un recurso o archivo compartido con permisos limitados; se considera dato de alto cuidado.
```

### Galería futura

```text
Posible espacio de publicación o exhibición que queda diferido y requiere gate propio de privacidad, consentimiento, derechos, seguridad y gobernanza.
```

---

## 8. Separaciones conceptuales obligatorias

| Elemento | No equivale a | Regla |
|---|---|---|
| Progreso | Portafolio | El progreso puede contener privado; el portafolio es curado. |
| Evidencia | Entrega final | La evidencia sostiene proceso; la entrega cierra producto. |
| Archivo final | Metadatos | Los metadatos describen; no almacenan el archivo. |
| Exportación JSON | Publicación | Exportar no es publicar. |
| Enlace privado | Recurso público | Un enlace privado sigue siendo sensible. |
| Interés en galería | Consentimiento final | Interés no autoriza publicación. |
| Validación facilitador | Evaluación automática | Es acompañamiento humano, no decisión algorítmica. |
| Declaración IA | Sospecha | Es transparencia, no castigo. |

Regla:

```text
Cerrar un proyecto no debe abrir todos sus datos.
```

---

## 9. Portafolio como curaduría, no extracción

El portafolio debe construirse desde:

- evidencias seleccionadas;
- decisiones humanas;
- reflexiones éticas seleccionadas;
- créditos;
- declaración IA;
- revisión de privacidad;
- propósito educativo;
- versión curada.

No debe construirse por defecto desde:

- progreso completo;
- borradores privados;
- prompts completos;
- chats IA;
- reflexiones completas;
- historial de edición;
- actividad minuto a minuto;
- archivos finales;
- enlaces privados;
- notas personales.

Regla:

```text
El portafolio es una galería curada del proceso, no una cámara de seguridad del taller.
```

---

## 10. Evidencias en portafolio

Una evidencia puede entrar al portafolio si:

- fue seleccionada por la persona;
- tiene propósito claro;
- no contiene datos privados innecesarios;
- tiene créditos si usa recursos externos;
- incluye decisión humana cuando aplique;
- incluye reflexión ética seleccionada cuando aplique;
- incluye declaración IA si aplica;
- pasó revisión de privacidad;
- se entiende en contexto.

Una evidencia no debe entrar automáticamente si:

- es borrador privado;
- contiene información sensible;
- contiene datos de otras personas;
- incluye prompt completo sensible;
- contiene chat IA;
- expone enlace privado;
- no fue curada;
- no tiene créditos necesarios.

---

## 11. Entrega final como metadatos mínimos

La entrega final puede registrar:

- estado de entrega;
- formato declarado;
- nombre de archivo declarado, si se justifica;
- duración aproximada, si aplica;
- tamaño aproximado, si aplica;
- ubicación de entrega;
- enlace privado, con alto cuidado;
- archivo PowerPoint relacionado, si se declara;
- archivo de portafolio relacionado, si se declara;
- archivo JSON exportado, si se declara;
- declaración IA confirmada;
- créditos confirmados;
- revisión de privacidad confirmada;
- licencia o condición de uso;
- interés en galería;
- opción de autoría pública;
- estado de revisión facilitadora;
- nota mínima.

No debe registrar por defecto:

- archivo final;
- contenido del MP4;
- audio fuente;
- imágenes fuente;
- presentación completa;
- portafolio completo;
- chat IA;
- prompts completos;
- historial de edición;
- datos reales;
- credenciales;
- tokens;
- enlaces públicos automáticos;
- ubicación física;
- datos personales innecesarios.

---

## 12. Archivo final

El archivo final puede ser:

- video;
- presentación;
- audio;
- imagen;
- documento;
- portafolio;
- paquete local;
- enlace externo;
- formato institucional futuro.

Reglas:

- no se almacena automáticamente en la app;
- no se sube automáticamente;
- no se publica automáticamente;
- no se analiza automáticamente;
- no se evalúa automáticamente;
- puede referenciarse por nombre o ubicación;
- puede estar en espacio definido por facilitador o institución;
- requiere revisión de privacidad;
- requiere créditos;
- requiere declaración IA si aplica.

Dictamen:

```text
El archivo final vive fuera del almacenamiento automático de AI StoryLab 1.
```

---

## 13. Enlaces privados

Un enlace privado debe tratarse como alto cuidado.

Puede registrarse solo si:

- tiene propósito de entrega;
- la persona entiende el riesgo;
- el permiso fue revisado;
- no se exporta públicamente por defecto;
- no se convierte en galería;
- no se comparte con grupo sin autorización;
- puede omitirse en exportaciones.

Ayuda contextual sugerida:

```text
Un enlace privado puede dar acceso al archivo. Revisa permisos antes de guardarlo o compartirlo.
```

Bloqueado:

- publicación automática del enlace;
- visibilidad por defecto en Vista del Facilitador ampliada;
- inclusión en reportes grupales;
- exportación pública;
- uso como galería.

---

## 14. Declaración IA en entrega y portafolio

La declaración IA debe ser:

- manual;
- breve;
- formativa;
- no punitiva;
- vinculada a decisión humana;
- vinculada a créditos si aplica;
- revisable;
- opcionalmente resumida.

Puede incluir:

- herramienta o tipo de herramienta;
- tipo de apoyo;
- decisión humana posterior;
- revisión de sesgos;
- revisión de privacidad;
- créditos.

No debe exigir:

- prompt completo;
- chat completo;
- output completo;
- detector IA;
- porcentaje automatizado;
- puntuación de originalidad;
- captura de pantalla;
- prueba de uso.

---

## 15. Créditos y atribución

Los créditos deben cubrir, cuando aplique:

- imágenes;
- música;
- voz;
- bancos de recursos;
- herramientas IA;
- texto externo;
- plantillas;
- efectos de sonido;
- colaboradores;
- licencias;
- recursos libres.

La confirmación de créditos no debe:

- recopilar cuentas personales;
- exigir enlaces privados;
- registrar datos de terceros innecesarios;
- castigar uso de recursos externos;
- convertirse en scoring automático.

Regla:

```text
Atribuir es cuidar la autoría propia y ajena.
```

---

## 16. Revisión de privacidad previa a entrega

Antes de entregar, debe confirmarse:

- no hay datos personales innecesarios;
- no hay enlaces privados sin revisión;
- no hay rostros/voz de terceros sin autorización;
- no hay prompts sensibles visibles;
- no hay chats IA completos;
- los créditos están claros;
- la declaración IA está lista si aplica;
- la licencia o condición de uso está entendida;
- el interés en galería no equivale a publicación;
- los metadatos son mínimos.

Ayuda contextual sugerida:

```text
Antes de entregar, revisa qué información saldrá del entorno local y quién podrá verla.
```

---

## 17. Licencia o condición de uso

La licencia o condición de uso puede registrar:

- Creative Commons;
- uso escolar;
- no publicación;
- uso interno;
- permiso institucional;
- pendiente de definir;
- otra condición aprobada.

No debe activar:

- publicación automática;
- cesión de derechos;
- galería pública;
- distribución externa;
- reutilización sin autorización.

Regla:

```text
Nombrar una licencia no equivale a publicar.
```

---

## 18. Interés en galería pública

El interés en galería es solo una señal futura.

No equivale a:

- consentimiento final;
- permiso de publicación;
- autorización de autoría pública;
- transferencia de archivo;
- licencia pública;
- validación institucional.

Debe mantenerse:

```text
Estado: diferido y bajo gate futuro
```

Gate futuro requerido:

- consentimiento explícito;
- revisión de privacidad;
- revisión de derechos;
- revisión de créditos;
- autorización de autoría pública;
- revisión institucional;
- mecanismo de retiro;
- condiciones de exhibición;
- protección de menores si aplica;
- no datos reales sensibles.

---

## 19. Validación del facilitador

La validación del facilitador en la herencia incluye estados como:

- pendiente;
- aprobado;
- requiere cambios.

Transformación requerida:

- no debe ser evaluación automática;
- no debe ser calificación final;
- no debe convertirse en ranking;
- no debe permitir administrador total;
- debe ser feedback formativo;
- debe indicar revisión de entrega, créditos, privacidad y completitud mínima;
- debe respetar agencia estudiantil.

Lenguaje recomendado:

```text
Revisión facilitadora
```

o

```text
Estado de acompañamiento de entrega
```

Lenguaje a auditar:

```text
Validación del facilitador
```

Lenguaje bloqueado:

```text
Aprobación automática
```

```text
Calificación final IA
```

---

## 20. Exportación local-first

La exportación local-first debe ser:

- iniciada por la persona;
- revisable antes de generar;
- comprensible;
- separada por propósito;
- mínima;
- excluyente por defecto de datos privados;
- con versión de esquema;
- con tipo de exportación;
- con advertencia de privacidad;
- sin envío automático;
- sin sincronización;
- sin publicación.

Tipos conceptuales:

- exportación individual de continuidad;
- exportación de portafolio;
- exportación de entrega;
- exportación institucional diferida;
- exportación grupal bajo auditoría;
- exportación de configuración;
- exportación de glosario/herramientas como recurso público.

---

## 21. Exportación individual

Puede incluir:

- versión de esquema;
- tipo de exportación;
- perfil mínimo o seudónimo;
- misión y estado formativo;
- evidencias seleccionadas o referencias;
- decisiones humanas seleccionadas;
- reflexiones seleccionadas;
- portafolio curado;
- declaración IA;
- créditos;
- revisión de privacidad;
- metadatos mínimos de entrega.

No debe incluir por defecto:

- borradores privados;
- prompts completos;
- chats IA;
- reflexiones completas;
- archivos finales;
- enlaces privados;
- historial completo;
- tiempo de uso;
- telemetría;
- datos personales innecesarios.

---

## 22. Exportación de portafolio

Debe ser distinta de progreso completo.

Puede incluir:

- título de proyecto;
- propósito;
- evidencias curadas;
- razones de selección;
- decisiones humanas;
- reflexiones seleccionadas;
- créditos;
- declaración IA;
- licencia;
- revisión de privacidad;
- metadatos mínimos.

No debe incluir por defecto:

- evidencias excluidas;
- borradores;
- notas privadas;
- prompt completo;
- chat IA;
- actividad;
- datos de herramientas;
- comparaciones.

---

## 23. Exportación de entrega

Puede incluir:

- estado de entrega;
- formato;
- nombre de archivo declarado;
- ubicación de entrega, si se justifica;
- enlace privado, si se permite y con advertencia;
- créditos confirmados;
- declaración IA confirmada;
- revisión privacidad confirmada;
- licencia;
- interés en galería, si se desea registrar;
- revisión facilitadora.

No debe incluir:

- archivo final;
- archivo PowerPoint;
- video;
- audio;
- imagen fuente;
- portafolio completo salvo exportación separada;
- chats;
- prompts completos;
- credenciales;
- tokens.

---

## 24. Exportación grupal bajo auditoría

La exportación grupal es de alto riesgo.

Puede considerarse solo para:

- necesidades agregadas de apoyo;
- recursos más solicitados;
- cantidad general de entregas recibidas;
- temas frecuentes de revisión;
- misiones que requieren aclaración;
- señales no identificantes;
- planificación docente.

Debe bloquear:

- tabla individual comparativa;
- ranking;
- actividad reciente por estudiante;
- `last_updated` como señal de vigilancia;
- avance individual visible por defecto;
- insignias como clasificación;
- datos de grupos pequeños identificables;
- enlaces privados;
- archivos finales;
- prompts;
- reflexiones;
- chats IA.

Dictamen:

```text
La exportación grupal no debe reconstruir una sala de control.
```

---

## 25. Importación local-first

La importación debe:

- validar tipo de exportación;
- validar versión;
- mostrar resumen antes de importar;
- advertir datos sensibles;
- evitar sobrescritura silenciosa;
- separar individual, portafolio, entrega y grupo;
- rechazar campos inesperados de alto riesgo;
- permitir cancelar;
- no importar archivos finales;
- no importar chats IA;
- no importar multimedia;
- no convertir grupo en dashboard vigilante.

Regla:

```text
Importar es recibir con cuidado, no absorber todo.
```

---

## 26. Vista previa de exportación

Toda exportación sensible debe poder mostrar:

- qué tipo de exportación es;
- qué contiene;
- qué no contiene;
- si incluye identidad;
- si incluye evidencia;
- si incluye reflexión;
- si incluye prompt;
- si incluye enlace;
- si incluye metadatos;
- quién podría recibirla;
- riesgos principales;
- opción de cancelar.

Ayuda contextual:

```text
Revisa esta salida antes de exportar. Una vez fuera del entorno local, el archivo puede compartirse o copiarse.
```

---

## 27. Relación con Vista del Facilitador

La Vista del Facilitador puede acompañar:

- revisión de créditos;
- revisión de declaración IA;
- revisión de privacidad;
- completitud mínima;
- estado de entrega;
- ruta de corrección;
- dudas sobre formato;
- ubicación de entrega institucional.

No puede:

- descargar archivos finales automáticamente;
- ver progreso completo;
- acceder a borradores privados;
- exigir prompt completo;
- exigir chats IA;
- publicar entregas;
- convertir interés en galería en consentimiento;
- rankear entregas;
- evaluar automáticamente;
- acceder a enlaces privados sin propósito y permiso.

---

## 28. Relación con privacidad

La privacidad por defecto exige:

- portafolio curado;
- metadatos mínimos;
- revisión previa;
- exclusión por defecto de datos sensibles;
- enlace privado tratado como alto cuidado;
- declaración IA sin chat ni prompt completo;
- exportación separada por propósito;
- galería diferida;
- no archivos finales automáticos.

Regla:

```text
Lo que se entrega no debe revelar más de lo necesario para cerrar el proyecto.
```

---

## 29. Relación con seguridad

La seguridad por diseño exige:

- no almacenamiento automático de archivos finales;
- no subida automática;
- no publicación automática;
- no credenciales;
- no tokens;
- no enlaces públicos automáticos;
- validación de exportación;
- validación de importación;
- control de esquema;
- advertencias;
- separación de tipos;
- gate para galería, backend, sincronización o repositorio remoto.

---

## 30. Relación con trazabilidad

La trazabilidad formativa permite:

- estado de entrega;
- evidencia curada;
- decisión humana;
- reflexión seleccionada;
- créditos;
- declaración IA;
- revisión de privacidad;
- metadatos mínimos.

Bloquea:

- historial completo;
- tiempo de trabajo;
- actividad minuto a minuto;
- comparativas;
- ranking;
- telemetría;
- expediente total;
- análisis automático del archivo final.

---

## 31. Relación con lenguaje canónico

Lenguaje recomendado:

- portafolio curado;
- metadatos mínimos;
- revisión de privacidad;
- entrega final registrada;
- archivo entregado aparte;
- enlace privado de alto cuidado;
- declaración IA;
- créditos confirmados;
- exportación revisable;
- importación validada;
- interés en galería.

Lenguaje bloqueado:

- exportar todo;
- publicar automáticamente;
- subir archivo final a la app;
- validar con IA;
- aprobar automáticamente;
- progreso total;
- historial completo;
- ranking de entregas;
- galería autorizada por defecto.

---

## 32. Modelo conceptual de metadatos mínimos

Campos conceptuales candidatos, no esquema final:

| Campo | Propósito | Sensibilidad |
|---|---|---|
| `submission_status` | Estado de entrega | Media |
| `declared_format` | Formato del producto | Baja |
| `declared_file_name` | Nombre declarado | Media |
| `duration_estimate` | Duración aproximada | Baja/media |
| `size_estimate` | Tamaño aproximado | Baja/media |
| `submission_location` | Ubicación de entrega | Alto cuidado |
| `private_link` | Enlace privado | Alto cuidado |
| `portfolio_reference` | Referencia al portafolio | Media |
| `json_export_reference` | Referencia a exportación | Media |
| `ai_declaration_confirmed` | Confirmación IA | Media |
| `credits_confirmed` | Confirmación créditos | Media |
| `privacy_review_confirmed` | Confirmación privacidad | Alta importancia |
| `license_condition` | Licencia o uso | Media |
| `gallery_interest` | Interés futuro | Alto cuidado |
| `public_author_option` | Autoría pública futura | Alto cuidado |
| `facilitator_review_status` | Revisión humana | Media |
| `notes_minimal` | Nota mínima | Auditar |

Regla:

```text
Si un metadato no ayuda a entregar, atribuir, cuidar privacidad o sostener continuidad, no debe existir.
```

---

## 33. Modelo conceptual de portafolio curado

Campos conceptuales candidatos:

| Campo | Propósito |
|---|---|
| `portfolio_title` | Título visible |
| `project_purpose` | Propósito del proyecto |
| `selected_evidence` | Evidencias curadas |
| `selection_reason` | Por qué se incluye |
| `human_decision` | Decisión humana vinculada |
| `ethical_reflection_selected` | Reflexión seleccionada |
| `tools_or_resources_declared` | Recursos usados |
| `credits` | Atribución |
| `ai_declaration` | Declaración IA |
| `privacy_review` | Confirmación de privacidad |
| `license_condition` | Condición de uso |
| `export_ready` | Estado revisado |

No incluye por defecto:

- progreso completo;
- borradores privados;
- prompts completos;
- chats IA;
- archivos fuente;
- archivo final;
- enlaces privados;
- historial.

---

## 34. Estados canónicos de entrega

### Permitidos

- no iniciado;
- preparando entrega;
- requiere créditos;
- requiere declaración IA;
- requiere revisión de privacidad;
- listo para entrega;
- entregado;
- revisión facilitadora pendiente;
- requiere ajustes;
- cierre completado;
- diferido por decisión.

### Bloqueados

- fallido;
- incompleto como etiqueta personal;
- sospechoso;
- bajo rendimiento;
- último;
- atrasado;
- rechazado automáticamente;
- detectado por IA;
- riesgo alto.

Regla:

```text
El estado de entrega debe orientar el próximo cuidado, no etiquetar a la persona.
```

---

## 35. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- entrega final con metadatos;
- no almacenamiento de MP4 en app;
- confirmación de declaración IA;
- confirmación de créditos;
- confirmación de privacidad;
- licencia;
- estado de entrega;
- portafolio;
- exportación JSON;
- esquema versionado;
- validación de exportación;
- local-first.

### Transformar

- portafolio emergente;
- final_submission;
- private_link;
- gallery_candidate_interest;
- public_author_option;
- facilitator_validation_status;
- notes;
- json_export_file_name;
- group_progress;
- last_updated;
- export/import;
- metadatos de tamaño/duración;
- archivo PowerPoint;
- archivo portafolio.

### Diferir

- galería pública;
- publicación;
- consentimiento legal operativo;
- repositorio remoto de entregas;
- backend;
- autenticación;
- sincronización;
- almacenamiento institucional;
- exportación institucional final;
- interoperabilidad LMS;
- rúbrica final;
- validación con personas;
- formato JSON final.

### Bloquear

- almacenamiento automático de archivos finales;
- subida automática;
- publicación automática;
- evaluación automática;
- validación IA;
- importación automática de chats;
- exportar todo;
- progreso completo por defecto;
- ranking de entregas;
- analíticas de entrega;
- enlaces públicos automáticos;
- credenciales;
- tokens;
- datos reales;
- telemetría.

### Mantener en auditoría

- enlaces privados;
- ubicación de entrega;
- interés en galería;
- autoría pública;
- estado facilitador;
- notas de entrega;
- exportación grupal;
- nombres de archivo;
- tamaño/duración;
- licencia;
- JSON exportado;
- grupos pequeños.

---

## 36. Decisiones candidatas

### DEC-DELIV-001 · Archivo final fuera del almacenamiento automático

```text
Estado: Candidata para aprobación documental
```

AI StoryLab 1 no almacena automáticamente archivos finales.

### DEC-DELIV-002 · Entrega final con metadatos mínimos

```text
Estado: Candidata para aprobación documental
```

La entrega registra solo lo necesario para estado, formato, créditos, declaración IA, privacidad y ubicación.

### DEC-DELIV-003 · Portafolio curado, no progreso completo

```text
Estado: Candidata para aprobación documental
```

El portafolio se construye por selección humana y revisión de privacidad.

### DEC-DELIV-004 · Exportación local-first revisable

```text
Estado: Candidata para aprobación documental
```

Toda exportación debe ser iniciada, revisada y controlada por la persona.

### DEC-DELIV-005 · Enlace privado como dato de alto cuidado

```text
Estado: Candidata para aprobación documental
```

Los enlaces privados no se exponen, publican ni exportan por defecto.

### DEC-DELIV-006 · Galería pública diferida

```text
Estado: Candidata para aprobación documental
```

El interés en galería no equivale a consentimiento ni publicación.

### DEC-DELIV-007 · Importación validada y limitada

```text
Estado: Candidata para aprobación documental
```

La importación debe validar tipo, versión, contenido y riesgos antes de aceptar datos.

### DEC-DELIV-008 · Exportación grupal bajo auditoría

```text
Estado: Candidata para aprobación documental
```

La exportación grupal no debe reconstruir vigilancia ni comparaciones individuales.

---

## 37. Riesgos

| Riesgo | Severidad | Control conceptual |
|---|---|---|
| Portafolio como extracción automática | Alta | Curaduría humana |
| Archivo final almacenado | Crítica | Bloqueo |
| Enlace privado expuesto | Alta | Alto cuidado |
| Exportación excesiva | Alta | Vista previa y exclusión |
| Galería interpretada como consentimiento | Crítica | Gate futuro |
| Validación facilitador punitiva | Alta | Revisión formativa |
| JSON como expediente total | Alta | Exportación por propósito |
| Exportación grupal vigilante | Crítica | Auditoría |
| Metadatos excesivos | Alta | Mínimos |
| Publicación automática | Crítica | Bloqueo |
| Importación sobrescribe datos | Alta | Validación/resumen |
| Archivo con datos personales | Alta | Revisión privacidad |

---

## 38. Controles conceptuales

| Control | Descripción |
|---|---|
| Metadatos mínimos | Solo lo necesario para cierre. |
| No archivo final | El producto vive fuera del almacenamiento automático. |
| Portafolio curado | Selección humana, no extracción total. |
| Declaración IA | Transparencia manual. |
| Créditos confirmados | Atribución revisada. |
| Revisión privacidad | Confirmación antes de entrega/exportación. |
| Vista previa exportación | La persona revisa antes de sacar datos. |
| Exportación por propósito | Progreso, portafolio y entrega separados. |
| Importación validada | Tipo, versión y campos revisados. |
| Enlace alto cuidado | No visible ni exportable por defecto. |
| Galería diferida | Requiere gate futuro. |
| No ranking | Entrega no produce comparación. |

---

## 39. Preguntas abiertas

1. ¿Qué metadatos mínimos son suficientes para entrega?
2. ¿Debe conservarse nombre de archivo o solo formato?
3. ¿Cuándo se justifica registrar tamaño y duración?
4. ¿Cómo se registra ubicación de entrega sin exponer privacidad?
5. ¿Debe permitirse enlace privado en exportación?
6. ¿Qué formato tendrá el portafolio curado?
7. ¿Qué campos de portafolio se exportan?
8. ¿Qué campos de progreso quedan fuera por defecto?
9. ¿Qué diferencia habrá entre exportación individual y portafolio?
10. ¿Cómo se manejará entrega en equipo?
11. ¿Cómo se manejará autoría pública futura?
12. ¿Qué gate requiere una galería?
13. ¿Qué rol tiene facilitador en revisión de entrega?
14. ¿Cómo evitar que `last_updated` se use como vigilancia?
15. ¿Cómo validar importación sin implementar todavía?

---

## 40. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- entrega final queda definida como metadatos mínimos, no almacenamiento de archivo;
- archivo final queda fuera del almacenamiento automático;
- portafolio queda definido como curado, no progreso completo;
- exportación local-first debe ser revisable e iniciada por la persona;
- exportaciones deben separarse por propósito;
- enlace privado queda clasificado como dato de alto cuidado;
- declaración IA, créditos y revisión de privacidad son confirmaciones clave;
- galería pública queda diferida y bajo gate futuro;
- importación queda validada y limitada conceptualmente;
- exportación grupal queda bajo auditoría;
- publicación automática, subida automática, ranking, evaluación automática, validación IA y datos reales quedan bloqueados;
- ninguna decisión aquí activa implementación.

---

## 41. Impacto sobre próximas familias

| Familia posterior | Impacto |
|---|---|
| Arquitectura modular | Aporta objetos: EntregaFinal, PortafolioCurado, MetadatoEntrega, ExportacionLocal, EnlacePrivado. |
| Gobernanza técnica | Aporta gates para galería, backend, almacenamiento remoto, exportaciones institucionales y validación futura. |
| v1.0.0 | Define límites para cualquier implementación de entrega, portafolio y exportación. |

---

## 42. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el documento Entrega Final, Portafolio, Metadatos y Exportabilidad Local-First de AI StoryLab 1 v0.7.0 como duodécima familia del Mapa de Decisiones Técnicas.

El documento preserva la herencia de entrega final como registro de metadatos, no almacenamiento de archivo; transforma el portafolio emergente en portafolio curado; separa progreso, evidencia, portafolio, exportación y entrega; y define metadatos mínimos, revisión de privacidad, créditos, declaración IA, licencia, enlace privado y exportabilidad local-first.

El hito establece que el archivo final vive fuera del almacenamiento automático de la app; la exportación debe ser revisable, iniciada por la persona y separada por propósito; los enlaces privados son datos de alto cuidado; la galería pública queda diferida; y la exportación grupal queda bajo auditoría.

Este hito bloquea almacenamiento automático de archivos finales, subida automática, publicación automática, evaluación automática, validación IA, importación automática de chats, exportar todo, progreso completo por defecto, ranking de entregas, analíticas, enlaces públicos automáticos, backend, sincronización, datos reales e implementación prematura.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar entrega portafolio exportabilidad v0.7" \
  -m "Hito: integra la duodecima familia del Mapa de Decisiones Tecnicas v0.7.0. Define entrega final con metadatos minimos, portafolio curado y exportabilidad local-first, bloqueando almacenamiento automatico de archivos finales, publicacion automatica, evaluacion IA, ranking, analiticas, datos reales e implementacion prematura."
```

---

## 43. Dictamen de aprobación

La Familia 12 queda definida como el marco de cierre, conservación y salida controlada del proyecto.

Su decisión más importante es:

```text
AI StoryLab 1 debe permitir entregar sin absorber, exportar sin exponer y conservar sin vigilar.
```

Este documento cierra la duodécima familia como modelo aprobado de entrega final, portafolio, metadatos y exportabilidad local-first. No cierra arquitectura modular, objetos de dominio, POO ni principios SOLID.  
Establece el marco para continuar con:

```text
Familia 13 · Arquitectura modular, objetos de dominio, POO y principios SOLID
```

---

## 44. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- entrega final queda definida como metadatos mínimos, no almacenamiento de archivo;
- archivo final queda fuera del almacenamiento automático;
- portafolio queda definido como curado, no progreso completo;
- exportación local-first debe ser revisable e iniciada por la persona;
- exportaciones deben separarse por propósito;
- enlace privado queda clasificado como dato de alto cuidado;
- declaración IA, créditos y revisión de privacidad son confirmaciones clave;
- galería pública queda diferida y bajo gate futuro;
- importación queda validada y limitada conceptualmente;
- exportación grupal queda bajo auditoría;
- publicación automática, subida automática, ranking, evaluación automática, validación IA y datos reales quedan bloqueados;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la decimotercera familia del mapa:

```text
Arquitectura modular, objetos de dominio, POO y principios SOLID
```

No autoriza código, implementación de exportadores, formato JSON final, UI final, almacenamiento, subida de archivos, galería pública, backend, autenticación, sincronización, validación automática, rúbricas finales, despliegue, datos reales ni validación con personas.
