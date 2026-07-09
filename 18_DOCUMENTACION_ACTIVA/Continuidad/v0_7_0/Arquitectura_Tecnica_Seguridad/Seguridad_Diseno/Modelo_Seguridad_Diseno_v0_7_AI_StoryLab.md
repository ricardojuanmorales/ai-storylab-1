# Modelo de Seguridad por Diseño v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 6 · Seguridad por diseño  
**Tipo de documento:** Documento técnico-conceptual, estratégico y pre-implementativo  
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
- `Registro_Deuda_Tecnica_Seguridad_Privacidad_v0_7_AI_StoryLab.md`
- `Governance_v0_4_0.md`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Seguridad_Diseno/Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 6 aborda una pregunta central:

```text
¿Cómo se diseña seguridad en AI StoryLab 1 v0.7.0 antes de implementar, sin backend, sin autenticación, sin IA embebida, sin datos reales y sin convertir seguridad en vigilancia?
```

La respuesta inicial es:

```text
Seguridad por diseño significa anticipar amenazas, limitar permisos, minimizar exposición, proteger datos locales y compartidos, preservar agencia humana y bloquear funciones peligrosas antes de escribir código.
```

Este documento no es una política técnica final. Es el primer modelo de seguridad conceptual de v0.7.0. Su trabajo es instalar barandas antes de que aparezca el puente.

---

## 1. Propósito

Este documento define el modelo de seguridad por diseño para AI StoryLab 1 v0.7.0.

Su función es:

- identificar activos a proteger;
- definir superficies de riesgo;
- modelar amenazas conceptuales;
- establecer controles preventivos;
- traducir familias anteriores a criterios de seguridad;
- proteger local-first sin falsa sensación de seguridad;
- proteger la Vista del Facilitador contra vigilancia;
- proteger export/import;
- proteger evidencia, portafolio y entrega;
- bloquear backend, APIs, IA embebida y datos reales en v0.7.0;
- preparar privacidad por defecto y trazabilidad formativa no vigilante;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- principios de seguridad por diseño;
- activos protegidos;
- actores y roles desde perspectiva de riesgo;
- superficies de amenaza;
- amenazas conceptuales;
- controles documentales y técnicos futuros;
- relación con local-first;
- relación con datos;
- relación con roles y permisos;
- relación con Vista del Facilitador;
- relación con export/import;
- relación con IA no embebida;
- relación con herramientas externas;
- relación con entrega final;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- implementa controles;
- selecciona stack;
- define autenticación;
- define autorización técnica;
- define cifrado final;
- define backend;
- define base de datos;
- define APIs;
- crea sistema de logs;
- crea monitoreo;
- crea alertas;
- crea dashboard de seguridad;
- usa datos reales;
- valida con personas;
- despliega;
- integra IA embebida;
- autoriza subida de archivos;
- autoriza sincronización automática.

---

## 4. Principio rector de seguridad

```text
La seguridad de AI StoryLab 1 debe proteger agencia, evidencia, privacidad, continuidad pedagógica y confianza sin introducir vigilancia, control excesivo ni dependencia técnica prematura.
```

Corolarios:

- seguridad antes de implementación;
- mínimo privilegio;
- minimización de datos;
- separación entre privado, compartido y público;
- defensa contra uso indebido de export/import;
- trazabilidad formativa, no vigilancia;
- revisión humana obligatoria;
- no datos reales en v0.7.0;
- no backend productivo;
- no IA embebida;
- no almacenamiento automático de archivos finales.

---

## 5. Herencia y deuda de seguridad

La gobernanza heredada del MVP estableció principios como local-first, sin autenticación en el MVP, sin Supabase, sin backend, sin subida de archivos, export/import JSON, revisión humana obligatoria y control de alcance.

El registro de deuda v0.7 identificó amenazas y mitigaciones como deuda pendiente, con prioridad alta, indicando que no atenderlas produce una arquitectura sin barandas.

Dictamen:

```text
Estado: preservar principios, transformar controles
```

La seguridad v0.7 no debe abandonar local-first, pero tampoco debe asumir que local-first equivale a seguridad completa.

---

## 6. Activos a proteger

| Activo | Por qué importa | Riesgo principal |
|---|---|---|
| Agencia estudiantil | Núcleo ético del proyecto | Sustitución o control externo |
| Evidencia formativa | Documenta proceso creativo | Exposición, edición o uso punitivo |
| Decisión humana | Garantiza autoría y criterio | Automatización o invisibilización |
| Reflexión ética | Puede ser sensible | Exposición o interpretación punitiva |
| Prompt usado | Puede contener datos privados | Captura excesiva o exposición |
| Portafolio | Producto curado | Publicación o exportación indebida |
| Metadatos de entrega | Cierre responsable | Exceso de datos o enlaces privados expuestos |
| Perfil local | Continuidad operativa | Identificación innecesaria |
| Avatar local | Dato visual potencialmente sensible | Exportación o exposición |
| Glosario | Lenguaje canónico | Desalineación o manipulación |
| Herramientas recomendadas | Orientan uso externo | Riesgo de privacidad externa |
| Vista del Facilitador | Acompañamiento | Vigilancia o administrador total |
| Exportaciones JSON | Portabilidad | Filtración o reimportación riesgosa |
| Importaciones JSON | Continuidad | Datos corruptos o maliciosos |
| Documentación canónica | Gobernanza | Decisiones implícitas o desalineadas |
| Confianza del ecosistema | Adopción educativa | Pérdida por vigilancia o exposición |

---

## 7. Actores y capacidades de riesgo

Estos no son roles aprobados. Son actores de riesgo conceptual.

| Actor | Riesgo posible | Control conceptual |
|---|---|---|
| Estudiante | Compartir más de lo necesario, perder archivo, incluir datos sensibles | Revisión, advertencias, minimización |
| Facilitador | Ver demasiado, comparar, usar feedback punitivo | Permisos mínimos, no vigilancia |
| Docente responsable | Confundir acompañamiento con control institucional | Separación de roles |
| Mantenedor técnico-documental | Modificar documentación sin gate | Revisión humana y control de cambios |
| Persona externa | Acceder a archivos compartidos indebidamente | No publicación automática |
| Herramienta externa | Recibir datos copiados por usuario | Clasificación de privacidad |
| IA externa | Producir contenido opaco o sesgado | Declaración manual y agencia humana |
| Sistema local | Guardar o exponer de más si se diseña mal | Minimización y transparencia |
| Futuro backend | Centralizar datos prematuramente | Gate explícito |
| Export/import | Convertirse en base de datos manual | Validación, separación y límites |

---

## 8. Superficies de amenaza

| Superficie | Riesgo | Estado v0.7 |
|---|---|---|
| Local storage heredado | Datos persistentes en navegador | Auditar mecanismo |
| Exportación JSON | Exposición accidental | Controlar y minimizar |
| Importación JSON | Datos corruptos, excesivos o ajenos | Validar y advertir |
| Dashboard grupal heredado | Vigilancia | Transformar |
| Vista del Facilitador | Acceso excesivo | Diseñar con mínimos |
| Prompt usado | Datos privados | Tratar como sensible |
| Reflexión ética | Exposición punitiva | Compartición selectiva |
| Portafolio | Inclusión automática excesiva | Curaduría humana |
| Entrega final | Enlaces o archivos expuestos | Metadatos mínimos |
| Herramientas externas | Cuentas/nube/datos | Clasificación visible |
| IA externa | Opacidad, sesgo, dependencia | Uso manual documentado |
| Glosario/herramientas | Cambios sin revisión | Versionado y gobernanza |
| Futuro backend | Centralización prematura | Diferir y gate |
| Futuras analíticas | Monitoreo y ranking | Bloquear en v0.7 |
| Archivos finales | Almacenamiento o subida | Bloquear automático |

---

## 9. Amenazas conceptuales

### THR-SEC-001 · Vigilancia por expansión de vista

```text
Riesgo: la Vista del Facilitador crece desde “acompañar” hacia “ver todo”.
Severidad: crítica
Control: visibilidad mínima, evidencia compartida, no acceso a borradores privados.
```

### THR-SEC-002 · Facilitador administrador total

```text
Riesgo: el facilitador adquiere permisos de edición, exportación, publicación o administración.
Severidad: crítica
Control: separación de roles y permisos.
```

### THR-SEC-003 · Exportación excesiva

```text
Riesgo: un JSON incluye más datos de los necesarios.
Severidad: alta
Control: revisión previa, tipos de exportación separados, minimización.
```

### THR-SEC-004 · Importación riesgosa

```text
Riesgo: se importa archivo corrupto, ajeno, viejo, excesivo o manipulado.
Severidad: alta
Control: validación, resumen previo, rechazo de campos inesperados.
```

### THR-SEC-005 · Datos privados expuestos como evidencia

```text
Riesgo: borradores, reflexiones o prompts completos pasan a vista compartida.
Severidad: alta
Control: separación privado/compartido/portafolio.
```

### THR-SEC-006 · Prompt usado con información sensible

```text
Riesgo: el prompt documentado contiene datos personales o privados.
Severidad: alta
Control: permitir resumen o referencia, no exigir texto completo.
```

### THR-SEC-007 · Reflexión ética usada punitivamente

```text
Riesgo: reflexión personal se usa para castigo, ranking o juicio.
Severidad: alta
Control: feedback formativo, visibilidad selectiva, no punitivo.
```

### THR-SEC-008 · Falsa seguridad local-first

```text
Riesgo: asumir que por no tener backend no hay riesgo.
Severidad: alta
Control: modelo de amenazas local, export/import y dispositivos compartidos.
```

### THR-SEC-009 · Herramientas externas sin advertencia

```text
Riesgo: usuarios copian datos a herramientas con cuenta o nube sin entender exposición.
Severidad: alta
Control: niveles de privacidad visibles y notas institucionales.
```

### THR-SEC-010 · IA embebida prematura

```text
Riesgo: la app llama IA, evalúa o perfila antes de controles.
Severidad: crítica
Control: bloquear APIs IA productivas en v0.7.0.
```

### THR-SEC-011 · Metadatos de entrega excesivos

```text
Riesgo: enlaces privados, nombres de archivos o datos de video exponen información.
Severidad: alta
Control: metadatos mínimos y revisión de privacidad.
```

### THR-SEC-012 · Archivos finales almacenados

```text
Riesgo: la app almacena MP4, PowerPoint, audio o imágenes.
Severidad: alta
Control: no almacenamiento automático, solo metadatos.
```

### THR-SEC-013 · Ranking por progreso

```text
Riesgo: estados, insignias o conteos se convierten en comparación.
Severidad: crítica
Control: bloquear ranking y métricas comparativas.
```

### THR-SEC-014 · Señales agregadas identificantes

```text
Riesgo: en cohortes pequeñas, agregados revelan individuos.
Severidad: alta
Control: auditar agregación y diferir reglas de privacidad.
```

### THR-SEC-015 · Decisiones técnicas implícitas

```text
Riesgo: documentos o commits activan arquitectura sin aprobación.
Severidad: alta
Control: gates, comentarios de hito y revisión humana explícita.
```

---

## 10. Controles de seguridad por diseño

| Control | Descripción | Familia relacionada |
|---|---|---|
| C-SEC-001 · Mínimo privilegio | Cada rol solo tiene lo necesario. | Roles y permisos |
| C-SEC-002 · Visibilidad mínima | La vista no muestra todo. | Vista Facilitador |
| C-SEC-003 · Separación privado/compartido | Borradores, evidencia y portafolio se separan. | Datos |
| C-SEC-004 · Exportaciones separadas | Progreso, portafolio y entrega no son lo mismo. | Datos / Local-first |
| C-SEC-005 · Validación de importación | Rechazar esquemas incompatibles o campos inesperados. | Seguridad |
| C-SEC-006 · Advertencias de privacidad | Explicar qué se exporta, comparte o entrega. | Privacidad |
| C-SEC-007 · Prompt usado sensible | Permitir resumen en vez de texto completo. | IA no embebida |
| C-SEC-008 · No archivo final | No almacenar MP4/PowerPoint/audio/imágenes. | Entrega |
| C-SEC-009 · No IA embebida | Sin llamadas API IA productivas. | IA |
| C-SEC-010 · No ranking | Bloqueo de comparación individual. | Trazabilidad |
| C-SEC-011 · No monitoreo continuo | Sin actividad minuto a minuto. | Trazabilidad |
| C-SEC-012 · Gate de decisiones | Todo cambio significativo requiere aprobación. | Gobernanza |
| C-SEC-013 · Datos sintéticos | No usar datos reales en esta fase. | Seguridad |
| C-SEC-014 · Notas institucionales gobernadas | Herramientas/glosario requieren revisión. | Gobernanza |
| C-SEC-015 · Deudas visibles | Riesgos pendientes no se esconden. | Gobernanza |

---

## 11. Matriz de amenaza y control

| Amenaza | Severidad | Control primario | Estado |
|---|---:|---|---|
| Vigilancia por expansión de vista | Crítica | Visibilidad mínima | Candidato |
| Facilitador administrador total | Crítica | Separación de roles | Candidato |
| Exportación excesiva | Alta | Revisión y minimización | Candidato |
| Importación riesgosa | Alta | Validación y resumen previo | Candidato |
| Prompt usado sensible | Alta | Registro resumible | Candidato |
| Reflexión usada punitivamente | Alta | Feedback formativo | Candidato |
| Falsa seguridad local-first | Alta | Modelo de amenazas local | Candidato |
| Herramientas externas riesgosas | Alta | Clasificación privacidad | Candidato |
| IA embebida prematura | Crítica | Bloqueo v0.7.0 | Candidato |
| Metadatos excesivos | Alta | Metadatos mínimos | Candidato |
| Archivos finales almacenados | Alta | Bloqueo almacenamiento | Candidato |
| Ranking por progreso | Crítica | Bloqueo explícito | Candidato |
| Agregados identificantes | Alta | Auditoría privacidad | Diferir a Familia 7 |
| Decisiones implícitas | Alta | Gate documental | Candidato |

---

## 12. Seguridad local-first

Local-first reduce ciertos riesgos, pero crea otros.

### Riesgos que reduce

- exposición por backend central;
- dependencia de cuentas;
- transmisión automática;
- API externa productiva;
- base de datos remota;
- almacenamiento masivo institucional.

### Riesgos que NO elimina

- pérdida de dispositivo;
- navegador compartido;
- archivos exportados sin cuidado;
- JSON reenviado;
- metadatos sensibles;
- datos copiados a herramientas externas;
- errores de importación;
- capturas de pantalla;
- publicación manual no revisada;
- confusión entre privado y compartido.

### Dictamen

```text
Local-first es principio de reducción de exposición, no escudo mágico.
```

---

## 13. Seguridad de exportación

Toda exportación futura debe cumplir criterios:

- iniciada por persona usuaria;
- tipo de exportación claro;
- resumen previo de contenido;
- advertencia de datos sensibles;
- opción de excluir campos;
- nombre de archivo no identificante cuando sea posible;
- versión de esquema;
- fecha de exportación;
- no incluir archivos finales;
- no mezclar progreso completo con portafolio;
- no exportar borradores privados por defecto;
- no exportar prompts completos por defecto;
- no exportar reflexiones privadas por defecto.

Tipos de exportación conceptuales:

| Tipo | Riesgo | Control |
|---|---|---|
| Progreso individual | Exposición amplia | Revisión y minimización |
| Portafolio | Publicación de evidencia no curada | Curaduría humana |
| Metadatos de entrega | Enlaces privados | Mínimos y advertencia |
| Catálogo institucional | Desalineación | Versionado |
| Resumen de acompañamiento | Vigilancia | Auditoría |
| Grupo | Identificación/ranking | Mantener en auditoría |

---

## 14. Seguridad de importación

Toda importación futura debe cumplir criterios:

- validar JSON;
- validar `export_type`;
- validar `schema_version`;
- advertir campos inesperados;
- bloquear sobrescritura silenciosa;
- mostrar resumen previo;
- separar importación individual y grupal;
- rechazar archivos con datos no permitidos;
- mantener trazabilidad de importación sin vigilancia;
- no aceptar chats IA;
- no aceptar archivos multimedia;
- no usar importación grupal como dashboard aprobado.

Riesgo central:

```text
Importar no debe convertirse en absorber todo.
```

---

## 15. Seguridad de la Vista del Facilitador

La vista requiere controles:

- evidencia compartida como base;
- no borradores privados;
- no prompts completos por defecto;
- no reflexiones privadas por defecto;
- no actividad minuto a minuto;
- no ranking;
- no comparación;
- no señales punitivas;
- no edición ajena;
- no exportación ajena;
- no publicación ajena;
- no administrador total;
- transparencia de visibilidad;
- feedback formativo.

Gate:

```text
Ninguna Vista del Facilitador puede pasar a implementación si no demuestra no vigilancia.
```

---

## 16. Seguridad de datos de IA

Datos relacionados con IA incluyen:

- prompt recomendado;
- prompt usado;
- output externo de IA;
- declaración de uso IA;
- créditos;
- herramientas usadas;
- reflexiones sobre uso IA.

Controles:

- IA externa, no embebida;
- uso voluntario;
- documentación manual;
- prompt usado puede resumirse;
- no importar chats;
- no llamar APIs;
- no evaluar con IA;
- no perfilar uso de IA;
- no almacenar outputs extensos automáticamente;
- no exigir copia completa de conversaciones.

---

## 17. Seguridad de herramientas externas

Las herramientas externas son una frontera de riesgo.

Controles:

- nivel de privacidad visible;
- nota institucional gobernada;
- advertencia si requiere cuenta;
- advertencia si usa nube;
- recomendación de alternativas locales;
- no credenciales;
- no conexión automática;
- no envío automático de datos;
- no métricas de rendimiento por herramienta;
- no autorización implícita por aparecer en catálogo.

---

## 18. Seguridad de entrega final

La entrega final debe tratarse como zona de alto cuidado.

Controles:

- no almacenamiento automático del archivo final;
- no subida automática;
- no enlace público automático;
- no validación IA;
- metadatos mínimos;
- confirmación de créditos;
- confirmación de declaración IA;
- confirmación de revisión de privacidad;
- advertencia sobre enlaces privados;
- diferenciación entre entrega institucional y galería pública futura;
- publicación diferida a gate posterior.

---

## 19. Seguridad documental y gobernanza

La seguridad también protege decisiones.

Controles:

- documento por documento;
- aprobación humana explícita;
- sufijos `_BORRADOR` y `_APROBADO` solo para sesión/descarga;
- repo con nombres canónicos limpios;
- comentarios de hito en PR;
- rutas semánticas;
- deuda activa visible;
- no cerrar deuda sin evidencia;
- no implementar desde un documento conceptual;
- no saltar familias del mapa;
- no crear documentos suplementarios como atajo;
- no activar v0.8 sin gate.

---

## 20. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- local-first;
- sin backend v0.7.0;
- sin autenticación v0.7.0;
- sin APIs productivas;
- sin subida de archivos;
- revisión humana obligatoria;
- decisión humana;
- reflexión ética;
- portafolio curado;
- metadatos mínimos de entrega;
- niveles de privacidad de herramientas;
- no vigilancia.

### Transformar

- `localStorage` como mecanismo;
- export/import JSON;
- dashboard grupal;
- `group_progress`;
- `student_code`;
- `last_updated`;
- prompts usados;
- reflexiones compartibles;
- señales agregadas;
- validación de entrega;
- notas de facilitador;
- catálogo de herramientas.

### Diferir

- autenticación;
- backend;
- cifrado final;
- roles técnicos;
- auditoría técnica;
- logging técnico;
- galería pública;
- investigación;
- interoperabilidad LMS;
- sincronización;
- almacenamiento remoto.

### Bloquear

- datos reales;
- IA embebida;
- APIs productivas IA;
- ranking;
- monitoreo continuo;
- administrador total;
- evaluación automática;
- inferencias sensibles;
- importación automática de chats;
- almacenamiento automático de archivos finales;
- publicación automática;
- credenciales externas;
- analíticas de productividad.

### Mantener en auditoría

- señales agregadas;
- exportación grupal;
- importación múltiple;
- Vista del Facilitador;
- metadatos de entrega;
- enlaces privados;
- avatar base64;
- prompt completo usado;
- reflexión ética compartida;
- interés en galería.

---

## 21. Decisiones candidatas

### DEC-SEC-001 · Seguridad antes de implementación

```text
Estado: Candidata para aprobación documental
```

Toda función futura debe pasar por análisis de amenaza antes de implementación.

### DEC-SEC-002 · Local-first no equivale a seguridad total

```text
Estado: Candidata para aprobación documental
```

El modelo reconoce riesgos locales, de exportación, importación, dispositivos compartidos y herramientas externas.

### DEC-SEC-003 · Export/import como superficie crítica

```text
Estado: Candidata para aprobación documental
```

Exportar e importar datos debe tratarse como operación sensible.

### DEC-SEC-004 · Vista del Facilitador como superficie crítica

```text
Estado: Candidata para aprobación documental
```

La vista requiere controles específicos de no vigilancia, mínimo privilegio y evidencia compartida.

### DEC-SEC-005 · Prompt usado y reflexión ética como datos de alto cuidado

```text
Estado: Candidata para aprobación documental
```

Ambos datos pueden contener información sensible y requieren tratamiento diferenciado.

### DEC-SEC-006 · Archivos finales fuera de almacenamiento automático

```text
Estado: Candidata para aprobación documental
```

La app no debe almacenar MP4, PowerPoint, audio, imágenes o archivos finales automáticamente.

### DEC-SEC-007 · No IA embebida en v0.7.0

```text
Estado: Candidata para aprobación documental
```

No se autorizan llamadas productivas a IA, evaluación automática ni importación automática de chats.

### DEC-SEC-008 · Gate de seguridad para fases futuras

```text
Estado: Candidata para aprobación documental
```

Cualquier backend, autenticación, galería, sincronización, investigación o IA embebida requiere gate posterior.

---

## 22. Preguntas abiertas

1. ¿Qué campos deben excluirse siempre de una exportación?
2. ¿Qué advertencias debe mostrar una exportación?
3. ¿Cómo se valida un JSON sin aceptar datos inesperados?
4. ¿Cómo se protege una cohorte pequeña frente a agregados identificantes?
5. ¿Qué datos de entrega son realmente mínimos?
6. ¿Cómo se trata un enlace privado?
7. ¿Cómo se maneja un dispositivo compartido?
8. ¿Qué recomendaciones se dan para respaldos locales?
9. ¿Qué riesgos introduce el avatar local?
10. ¿Cómo se audita el catálogo de herramientas?
11. ¿Qué metadatos técnicos son necesarios y cuáles invasivos?
12. ¿Qué requeriría un gate futuro para backend?
13. ¿Qué requeriría un gate futuro para autenticación?
14. ¿Qué requeriría un gate futuro para IA embebida?
15. ¿Qué requeriría un gate futuro para investigación con datos anonimizados?

---

## 23. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- seguridad por diseño queda definida como etapa previa a implementación;
- local-first queda reconocido como reducción de exposición, no seguridad total;
- export/import queda definido como superficie crítica;
- Vista del Facilitador queda definida como superficie crítica;
- prompts usados y reflexiones éticas quedan clasificados como datos de alto cuidado;
- herramientas externas quedan clasificadas como frontera de riesgo;
- archivos finales quedan fuera del almacenamiento automático;
- backend, autenticación, APIs productivas, IA embebida, sincronización, galería e investigación quedan diferidos;
- ranking, monitoreo continuo, administrador total, evaluación automática e inferencias sensibles quedan bloqueados;
- ninguna decisión aquí activa implementación.

---

## 24. Impacto sobre próximas familias

| Familia posterior | Impacto |
|---|---|
| Privacidad por defecto | Toma activos, amenazas y controles para minimización. |
| Trazabilidad formativa | Distingue seguridad documental de vigilancia técnica. |
| Prompts e IA no embebida | Recibe controles para prompt usado y no importación de chats. |
| Herramientas | Recibe frontera de riesgo y niveles de privacidad. |
| Glosario | Recibe gobernanza de lenguaje seguro y no punitivo. |
| Entrega y portafolio | Recibe controles de exportación, metadatos y no archivo final. |
| Arquitectura modular | Recibe objetos Amenaza, Control, Gate, Activo, Riesgo. |
| Gobernanza técnica | Recibe gates futuros para backend, auth, IA, datos reales e investigación. |

---

## 25. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el Modelo de Seguridad por Diseño de AI StoryLab 1 v0.7.0 como sexta familia del Mapa de Decisiones Técnicas.

El documento define seguridad como etapa previa a implementación, identifica activos, actores de riesgo, superficies de amenaza, amenazas conceptuales y controles para local-first, export/import, Vista del Facilitador, prompts, herramientas externas, portafolio, entrega final y gobernanza documental.

El hito reconoce que local-first reduce exposición pero no equivale a seguridad total; clasifica export/import y Vista del Facilitador como superficies críticas; trata prompts usados y reflexiones éticas como datos de alto cuidado; y bloquea backend, autenticación, APIs productivas, IA embebida, sincronización, ranking, monitoreo continuo, administrador total, evaluación automática, datos reales y almacenamiento automático de archivos finales.

Este hito no implementa código, no define controles técnicos finales, no selecciona stack, no activa backend, autenticación, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar modelo seguridad diseno v0.7" \
  -m "Hito: integra la sexta familia del Mapa de Decisiones Tecnicas v0.7.0. Define seguridad por diseno antes de implementacion, identifica activos, amenazas, superficies de riesgo y controles. Bloquea backend, autenticacion, IA embebida, ranking, monitoreo continuo, administrador total, datos reales, almacenamiento automatico de archivos finales e implementacion prematura."
```

---

## 26. Dictamen de aprobación

La Familia 6 queda definida como el sistema de barandas de v0.7.0.

Su decisión más importante es:

```text
AI StoryLab 1 no debe esperar a tener código para hablar de seguridad; debe hablar de seguridad para decidir qué código merece existir.
```

Este documento cierra la sexta familia como modelo de seguridad por diseño aprobado. No cierra privacidad por defecto ni trazabilidad.  
Establece el marco para continuar con:

```text
Familia 7 · Privacidad por defecto
```

---

## 27. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- seguridad por diseño queda definida como etapa previa a implementación;
- local-first queda reconocido como reducción de exposición, no seguridad total;
- export/import queda definido como superficie crítica;
- Vista del Facilitador queda definida como superficie crítica;
- prompts usados y reflexiones éticas quedan clasificados como datos de alto cuidado;
- herramientas externas quedan clasificadas como frontera de riesgo;
- archivos finales quedan fuera del almacenamiento automático;
- backend, autenticación, APIs productivas, IA embebida, sincronización, galería e investigación quedan diferidos;
- ranking, monitoreo continuo, administrador total, evaluación automática e inferencias sensibles quedan bloqueados;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la séptima familia del mapa:

```text
Privacidad por defecto
```

No autoriza código, controles técnicos finales, stack final, backend, autenticación, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
