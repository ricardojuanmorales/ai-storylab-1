# Arquitectura Conceptual Local-First v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 2 · Arquitectura local-first  
**Tipo de documento:** Documento técnico-conceptual, estratégico y pre-implementativo  
**Estado:** Aprobado por revisión humana explícita para integración canónica semántica  
**Fecha de trabajo:** 2026-07-09  
**Zona horaria de referencia:** America/Puerto_Rico  
**Documento rector previo:** `Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`  
**Documento de entrada inmediato:** `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Arquitectura_Local_First/Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 2 aborda una pregunta central:

```text
¿Qué significa local-first para AI StoryLab 1 v0.7.0 después de auditar el MVP v0.3, sin quedar atrapados en localStorage ni brincar prematuramente a backend?
```

El MVP v0.3 expresó una promesa fuerte: aplicación 100% local-first, sin backend, sin cuentas, sin subir datos, sin APIs externas y con progreso controlado desde el navegador. Esa promesa debe preservarse como principio.

Sin embargo, v0.7.0 no debe convertir `localStorage` en arquitectura final ni asumir que export/import JSON, dashboard grupal o almacenamiento local histórico son soluciones definitivas.

Dictamen central:

```text
Local-first debe pasar de solución técnica histórica a principio arquitectónico gobernado.
```

---

## 1. Propósito

Este documento define el marco conceptual local-first para AI StoryLab 1 v0.7.0.

Su función es:

- preservar control local, privacidad y agencia humana;
- distinguir principio local-first de mecanismo específico;
- auditar la herencia `localStorage` y export/import JSON;
- evitar salto prematuro a backend, nube o sincronización;
- definir zonas conceptuales de datos;
- establecer criterios para portabilidad, exportación, importación y retención;
- preparar decisiones posteriores de modelo de datos, privacidad, seguridad y Vista del Facilitador;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento incluye:

- definición local-first para AI StoryLab 1;
- herencia MVP v0.3 relacionada con local-first;
- principios arquitectónicos;
- zonas conceptuales de datos;
- matriz local/remoto/diferido/bloqueado;
- criterios para export/import;
- criterios para almacenamiento de evidencias;
- relación con portafolio, entrega final y metadatos;
- relación con herramientas externas e IA no embebida;
- relación con Vista del Facilitador;
- riesgos y controles;
- decisiones candidatas;
- decisiones bloqueadas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- selecciona stack final;
- define base de datos;
- define backend;
- implementa almacenamiento;
- define API;
- selecciona IndexedDB, SQLite, Supabase, Firebase u otra tecnología;
- activa autenticación;
- activa sincronización;
- activa IA embebida;
- permite subida de archivos o videos;
- diseña dashboard grupal final;
- usa datos reales;
- valida con personas;
- despliega.

---

## 4. Principio rector local-first

Para AI StoryLab 1 v0.7.0, local-first significa:

```text
La experiencia pedagógica esencial, la creación del estudiante, la evidencia formativa, la decisión humana, la reflexión ética y la construcción del portafolio deben poder existir bajo control local o cercano de la persona usuaria y de la institución, sin depender por defecto de servidores, cuentas, APIs externas, IA embebida o almacenamiento remoto.
```

Este principio implica:

- control humano sobre guardar, exportar, importar y compartir;
- minimización de datos;
- reversibilidad;
- portabilidad;
- transparencia sobre qué se guarda;
- separación entre trabajo privado, evidencia exportable y vista compartida;
- no vigilancia;
- no ranking;
- no monitoreo continuo.

---

## 5. Lo que local-first NO significa

Local-first no significa:

- que `localStorage` sea la solución final;
- que todo dato deba guardarse siempre;
- que exportar JSON sea automáticamente seguro;
- que importar múltiples archivos sea una Vista del Facilitador aprobada;
- que no exista nunca backend futuro;
- que no pueda existir sincronización futura;
- que la institución renuncie a seguridad;
- que los datos locales no requieran protección;
- que cualquier herramienta externa sea compatible por defecto;
- que los archivos finales deban almacenarse en la app.

Local-first no es nostalgia técnica. Es una brújula de autonomía.

---

## 6. Herencia MVP v0.3 vinculada a local-first

La auditoría aprobada identifica estos elementos heredados:

| Elemento heredado | Lectura v0.7.0 |
|---|---|
| `localStorage` | Mecanismo histórico útil, no decisión final. |
| Export/import JSON individual | Patrón valioso de portabilidad, requiere seguridad. |
| Avatar base64 local | Compatible con local-first, requiere auditoría de privacidad. |
| Metadatos de video final | Preservar con minimización. |
| No almacenar archivo de video | Preservar como control crítico. |
| Sin backend | Preservar como límite de v0.7.0, no dogma eterno. |
| Sin login | Preservar como reducción de fricción y datos. |
| Sin APIs externas | Preservar para v0.7.0. |
| Dashboard grupal por JSON | Auditar por riesgo de vigilancia. |
| `group_progress.json` | Auditar por agregación y exposición. |
| Fusión por `student_code + last_updated` | Auditar por trazabilidad identificable. |

---

## 7. Decisiones candidatas

Estas decisiones pueden aprobarse como criterios conceptuales, sin implementar código.

### DEC-LF-001 · Local-first como principio arquitectónico superior

```text
Estado: Candidata para aprobación documental
```

AI StoryLab 1 debe preservar local-first como principio superior de diseño. Cualquier dependencia remota futura debe justificarse, documentarse y pasar por gate humano.

### DEC-LF-002 · `localStorage` no es arquitectura final

```text
Estado: Candidata para aprobación documental
```

`localStorage` queda reconocido como mecanismo heredado del MVP v0.3, no como decisión final de v0.7.0.

### DEC-LF-003 · Export/import como portabilidad, no vigilancia

```text
Estado: Candidata para aprobación documental
```

Export/import JSON se preserva como patrón de portabilidad, pero no puede usarse para crear monitoreo continuo, ranking o base de datos grupal manual sin rediseño.

### DEC-LF-004 · Archivos finales fuera de almacenamiento automático

```text
Estado: Candidata para aprobación documental
```

La aplicación no debe almacenar automáticamente archivos finales, videos, audios, imágenes o documentos pesados. Puede registrar metadatos mínimos bajo control humano.

### DEC-LF-005 · Sin backend productivo en v0.7.0

```text
Estado: Candidata para aprobación documental
```

v0.7.0 no activa backend. Puede discutir criterios futuros, pero no diseñar ni implementar backend.

### DEC-LF-006 · Sin IA embebida ni APIs automáticas

```text
Estado: Candidata para aprobación documental
```

El uso de IA en v0.7.0 permanece externo, voluntario y documentado manualmente. Local-first bloquea llamadas automáticas de IA desde la app.

### DEC-LF-007 · Separación entre datos privados, exportables y compartidos

```text
Estado: Candidata para aprobación documental
```

La arquitectura conceptual debe distinguir datos privados de trabajo, datos de evidencia exportable y datos compartidos para acompañamiento.

---

## 8. Zonas conceptuales de datos

AI StoryLab 1 debe organizar sus datos conceptualmente en zonas.

| Zona | Descripción | Visibilidad inicial | Estado local-first |
|---|---|---|---|
| Zona privada de trabajo | Borradores, reflexiones, decisiones preliminares, actividad en progreso. | Persona usuaria | Local por defecto |
| Zona de evidencia formativa | Resúmenes, productos de misión, decisión humana, reflexión ética seleccionada. | Persona usuaria; posible docente/facilitador bajo criterios | Local + exportable |
| Zona de portafolio | Evidencias curadas por la persona para cierre o presentación. | Controlada por persona usuaria | Exportable |
| Zona de entrega | Metadatos mínimos de entrega, formato, créditos, declaración IA. | Compartible bajo decisión humana | Registro mínimo |
| Zona de acompañamiento | Información necesaria para apoyo formativo. | Facilitador/docente con límites | Agregada o mínima |
| Zona institucional | Configuraciones, glosario, herramientas, notas docentes. | Institución/docente según gobernanza | Versionada |
| Zona técnica | Versión, esquema, timestamps mínimos, validación de importación. | Sistema/persona usuaria | Mínima |
| Zona prohibida | Datos innecesarios, sensibles, inferencias conductuales, ranking, vigilancia. | Nadie | Bloqueada |

---

## 9. Matriz local, externo, diferido y bloqueado

| Elemento | Local-first v0.7.0 | Externo opcional | Diferido | Bloqueado |
|---|---:|---:|---:|---:|
| Misiones | Sí | No | No | No |
| Actividades lúdicas | Sí | No | No | No |
| Evidencia | Sí | Exportable manual | No | Captura excesiva |
| Decisión humana | Sí | Exportable manual | No | Sustitución automatizada |
| Reflexión ética | Sí | Exportable manual | No | Exposición automática |
| Prompts recomendados | Sí | Uso externo voluntario | No | Llamada automática IA |
| Prompt usado | Sí, mínimo o resumen | Manual | No | Captura obligatoria completa |
| Herramientas recomendadas | Sí como catálogo | Uso externo voluntario | No | Integración automática |
| Glosario | Sí | No | No | No |
| Portafolio | Sí | Exportable manual | No | Publicación automática |
| Entrega final | Metadatos mínimos | Archivo externo elegido por usuario | Sí para almacenamiento | Subida automática |
| Dashboard facilitador | No heredado directamente | No | Rediseño | Vigilancia/ranking |
| Backend | No | No | Futuro gate | Activación v0.7.0 |
| APIs IA | No | Uso externo manual | Futuro gate | IA embebida v0.7.0 |
| Base de datos remota | No | No | Futuro gate | Activación v0.7.0 |
| Login/autenticación | No | No | Futuro gate | Requisito v0.7.0 |

---

## 10. Portabilidad y exportación

La portabilidad es una virtud local-first solo cuando aumenta agencia humana.

### Criterios

Toda exportación debe:

- ser iniciada por una persona;
- explicar qué contiene;
- permitir revisión previa cuando aplique;
- minimizar datos;
- evitar datos sensibles innecesarios;
- distinguir exportación individual, portafolio y entrega;
- preservar compatibilidad de versiones;
- incluir advertencias si contiene prompts, reflexiones, herramientas o metadatos;
- evitar funcionar como canal de vigilancia.

### Tipos de exportación conceptual

| Tipo | Propósito | Riesgo |
|---|---|---|
| Exportación de progreso individual | Continuidad y respaldo | Exposición de identidad o reflexión privada |
| Exportación de portafolio | Presentación y cierre | Incluir evidencia no curada |
| Exportación de entrega | Registrar cierre y metadatos | Exponer datos personales o archivo final |
| Exportación institucional | Configuración, glosario, herramientas | Cambios sin gobernanza |
| Exportación grupal | Acompañamiento agregado | Vigilancia, ranking o base de datos manual |

---

## 11. Importación

Toda importación debe tratarse como una operación sensible.

### Criterios

Una importación futura debe:

- validar esquema;
- advertir antes de reemplazar datos;
- mostrar resumen de lo que se importará;
- evitar sobrescritura accidental;
- separar importación individual de importación grupal;
- rechazar datos inesperados;
- bloquear campos no permitidos;
- registrar versión de esquema;
- no convertir el acto de importar en monitoreo.

### Dictamen sobre importación múltiple

La importación múltiple de JSON heredada del dashboard grupal queda en estado:

```text
Auditar + transformar
```

No puede pasar directamente a Vista del Facilitador.

---

## 12. Relación con la Vista del Facilitador

La arquitectura local-first debe preparar, pero no resolver todavía, la Vista del Facilitador.

### Criterio

```text
La Vista del Facilitador no debe nacer de “todo lo que puede importarse”, sino de “lo mínimo que necesita verse para acompañar sin vigilar”.
```

### Implicaciones

- No se hereda dashboard grupal como solución.
- No se aprueba tabla individual completa.
- No se aprueba ranking.
- No se aprueba monitoreo continuo.
- No se aprueba fusión por JSON como arquitectura final.
- Toda visibilidad debe pasar por roles, permisos, privacidad y trazabilidad.

---

## 13. Relación con herramientas externas

Local-first permite recomendar herramientas, pero no integrarlas automáticamente.

### Criterios

- El catálogo de herramientas puede ser local o versionado.
- El uso de herramientas externas debe ser voluntario.
- Toda herramienta debe tener clasificación de privacidad.
- Herramientas con cuenta o nube requieren advertencia.
- La app no debe enviar datos a herramientas externas.
- La persona usuaria decide qué copiar, exportar o compartir.
- El registro de herramienta usada debe ser mínimo y pedagógico.

---

## 14. Relación con IA no embebida

Local-first sostiene la decisión de IA no embebida.

### Criterios

- La app puede ofrecer prompts recomendados.
- La persona usuaria puede copiar prompts manualmente.
- La persona usuaria puede documentar uso externo de IA.
- La documentación puede ser prompt completo, resumen o referencia contextual.
- La app no llama APIs IA.
- La app no importa chats automáticamente.
- La app no procesa outputs de IA automáticamente.
- La IA no evalúa estudiantes.

---

## 15. Relación con portafolio y entrega

El portafolio y la entrega final son zonas local-first críticas.

### Criterios

- El portafolio emerge de evidencias, pero debe ser curado por decisión humana.
- La exportación del portafolio debe ser revisable.
- La entrega final debe registrar metadatos mínimos.
- El archivo final no debe almacenarse automáticamente.
- MP4 queda como patrón heredado, no necesariamente formato único.
- La declaración de IA debe ser parte del cierre.
- Créditos, herramientas y recursos deben documentarse con minimización.

---

## 16. Riesgos

| Riesgo | Severidad | Control propuesto |
|---|---|---|
| Confundir local-first con `localStorage` permanente | Alta | Separar principio y mecanismo. |
| Exportar datos sensibles en JSON | Crítica | Minimización, revisión y advertencias. |
| Importación grupal como vigilancia | Crítica | Rediseño de Vista del Facilitador. |
| Falsa seguridad por no tener backend | Alta | Modelo de amenazas local. |
| Pérdida de datos locales | Alta | Portabilidad y respaldo manual. |
| Archivos pesados guardados accidentalmente | Alta | Metadatos, no archivo. |
| Avatar como dato sensible | Media-alta | Exportación selectiva o exclusión. |
| Prompt usado con información privada | Alta | Resumen opcional y advertencias. |
| Herramientas externas sin clasificación | Alta | Catálogo con privacidad visible. |
| Backend futuro por inercia | Alta | Gate explícito y justificación. |
| Sincronización futura sin consentimiento | Crítica | Bloqueo en v0.7.0. |
| Dashboard grupal como base de datos manual | Crítica | Auditar + transformar. |

---

## 17. Controles documentales

Toda decisión local-first posterior debe declarar:

- qué dato afecta;
- por qué se necesita;
- dónde vive;
- quién lo controla;
- quién puede verlo;
- cómo se exporta;
- cómo se importa;
- cómo se elimina o excluye;
- qué riesgos genera;
- qué principio protege;
- qué familia del mapa toca;
- si requiere aprobación humana.

---

## 18. Preguntas abiertas

Estas preguntas quedan abiertas para documentos posteriores:

1. ¿Qué mecanismo sustituiría o complementaría `localStorage` en una arquitectura futura?
2. ¿Qué datos mínimos requiere una exportación individual?
3. ¿Qué datos deben excluirse siempre de exportaciones?
4. ¿Cómo se valida un JSON sin convertirlo en backend disfrazado?
5. ¿Qué debe ver el facilitador si no hay dashboard de vigilancia?
6. ¿Debe existir exportación grupal o solo agregación voluntaria?
7. ¿Cómo manejar versiones de glosario, herramientas y misiones?
8. ¿Cómo distinguir respaldo personal de entrega institucional?
9. ¿Qué metadatos de entrega son estrictamente necesarios?
10. ¿Qué criterios permitirían considerar backend en una fase futura?
11. ¿Qué condiciones bloquearían permanentemente una función remota?
12. ¿Cómo diseñar portabilidad sin exponer estudiantes?

---

## 19. Decisiones bloqueadas en Familia 2

Durante v0.7.0 quedan bloqueadas desde esta familia:

- backend productivo;
- base de datos remota;
- autenticación obligatoria;
- APIs externas productivas;
- IA embebida;
- sincronización automática;
- importación automática de chats;
- subida automática de archivos;
- almacenamiento automático de videos;
- dashboard de vigilancia;
- ranking estudiantil;
- monitoreo continuo;
- facilitador administrador total;
- exportación grupal como solución aprobada;
- uso de `localStorage` como decisión final sin auditoría.

---

## 20. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- local-first queda definido como principio arquitectónico, no como tecnología específica;
- `localStorage` queda reconocido como mecanismo heredado, no solución final;
- export/import JSON queda preservado como patrón de portabilidad, pero no como dashboard aprobado;
- no se autoriza backend en v0.7.0;
- no se autoriza IA embebida;
- no se autoriza sincronización automática;
- no se autoriza subida de archivos o videos;
- la Vista del Facilitador queda pendiente de rediseño no vigilante;
- los archivos finales quedan fuera de almacenamiento automático;
- el documento puede orientar las familias 3, 4 y 5;
- ninguna decisión aquí activa implementación.

---

## 21. Impacto sobre las próximas familias

| Familia posterior | Impacto de este documento |
|---|---|
| Modelo conceptual de datos | Define zonas de datos y criterios de minimización. |
| Roles y permisos | Establece control local y visibilidad mínima. |
| Vista del Facilitador | Bloquea herencia directa del dashboard grupal. |
| Seguridad por diseño | Abre modelo de amenazas local y export/import. |
| Privacidad por defecto | Refuerza no recopilar y no compartir por defecto. |
| Trazabilidad formativa | Distingue portabilidad de monitoreo. |
| Prompts e IA no embebida | Bloquea llamadas automáticas e importación de chats. |
| Herramientas | Exige clasificación visible de privacidad. |
| Entrega y portafolio | Define metadatos mínimos y no almacenamiento de archivo final. |
| Gobernanza técnica | Define gates para cualquier remoto futuro. |

---

## 22. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra la Arquitectura Conceptual Local-First de AI StoryLab 1 v0.7.0 como segunda familia del Mapa de Decisiones Técnicas.

El documento preserva local-first como principio arquitectónico superior, distingue el principio del mecanismo histórico localStorage y establece criterios para portabilidad, export/import JSON, metadatos, archivos finales, prompts externos, herramientas, portafolio y Vista del Facilitador.

El hito bloquea backend productivo, APIs externas productivas, IA embebida, sincronización automática, subida automática de archivos o videos, ranking estudiantil, monitoreo continuo y dashboard de vigilancia en v0.7.0.

Este hito no implementa código, no selecciona stack final, no define base de datos, no activa backend, no usa datos reales ni valida con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar arquitectura conceptual local-first v0.7" \
  -m "Hito: integra la segunda familia del Mapa de Decisiones Tecnicas v0.7.0. Define local-first como principio arquitectonico, separa el principio del mecanismo localStorage y establece criterios para export/import, portabilidad, metadatos, herramientas, prompts externos, portafolio y Vista del Facilitador. No implementa codigo ni selecciona stack final."
```

---

## 23. Dictamen de aprobación

La Familia 2 queda definida como puente entre la auditoría de herencia funcional y las familias de datos, roles, privacidad, seguridad y Vista del Facilitador.

Su decisión más importante es:

```text
AI StoryLab 1 debe preservar local-first como principio de agencia, privacidad y portabilidad, pero no debe quedar atrapado en localStorage ni brincar prematuramente hacia backend.
```

Este documento cierra la segunda familia como marco conceptual local-first aprobado. No cierra decisiones técnicas de implementación.  
Establece el marco para continuar con:

```text
Familia 3 · Modelo conceptual de datos
```

---

## 24. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- local-first queda definido como principio arquitectónico superior;
- `localStorage` queda reconocido como mecanismo heredado, no como arquitectura final;
- export/import JSON queda preservado como patrón de portabilidad, no como mecanismo de vigilancia;
- los archivos finales quedan fuera de almacenamiento automático;
- no se autoriza backend productivo en v0.7.0;
- no se autoriza IA embebida ni llamadas automáticas a APIs externas;
- no se autoriza sincronización automática;
- la Vista del Facilitador queda pendiente de rediseño no vigilante;
- el documento orienta las familias siguientes: modelo de datos, roles y permisos, seguridad, privacidad y trazabilidad;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la tercera familia del mapa:

```text
Modelo conceptual de datos
```

No autoriza código, stack final, backend, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
