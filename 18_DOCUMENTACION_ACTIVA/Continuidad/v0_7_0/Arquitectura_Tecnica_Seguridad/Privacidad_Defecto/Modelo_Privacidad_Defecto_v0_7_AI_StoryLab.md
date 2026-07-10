# Modelo de Privacidad por Defecto v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Modelo_Privacidad_Defecto_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 7 · Privacidad por defecto  
**Tipo de documento:** Documento técnico-conceptual, ético-operacional y pre-implementativo  
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
- `Privacy_Local_First_v0_4_0.md`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Modelo_Privacidad_Defecto_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Privacidad_Defecto/Modelo_Privacidad_Defecto_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 7 aborda una pregunta central:

```text
¿Qué debe permanecer privado por defecto en AI StoryLab 1 v0.7.0, qué puede compartirse, bajo qué condiciones y con qué límites?
```

La respuesta inicial es:

```text
Privacidad por defecto significa que AI StoryLab 1 debe diseñar cada dato, vista, exportación, evidencia, prompt, reflexión, portafolio y entrega desde la mínima exposición necesaria, con control humano explícito y sin vigilancia.
```

Este documento traduce seguridad por diseño en reglas de privacidad: qué no se recopila, qué no se muestra, qué no se comparte, qué no se exporta y qué no se almacena.

---

## 1. Propósito

Este documento define el modelo de privacidad por defecto para AI StoryLab 1 v0.7.0.

Su función es:

- establecer reglas de minimización;
- distinguir privado, compartible, exportable y bloqueado;
- proteger evidencia, decisiones humanas, reflexiones éticas, prompts usados y portafolio;
- preservar agencia estudiantil;
- limitar la Vista del Facilitador;
- orientar export/import;
- proteger metadatos de entrega;
- proteger uso de herramientas externas e IA externa;
- preparar trazabilidad formativa no vigilante;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- principios de privacidad por defecto;
- datos privados por defecto;
- datos compartibles;
- datos exportables;
- datos bloqueados;
- reglas para evidencias;
- reglas para prompts;
- reglas para reflexión ética;
- reglas para portafolio;
- reglas para entrega final;
- reglas para Vista del Facilitador;
- reglas para herramientas externas;
- reglas para export/import;
- reglas para cohortes y agregados;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- define política institucional legal final;
- reemplaza asesoría legal;
- implementa privacidad técnica;
- define consentimiento legal operativo;
- define autenticación;
- define backend;
- define cifrado final;
- define base de datos;
- define contratos con terceros;
- usa datos reales;
- valida con personas;
- despliega;
- integra IA embebida;
- autoriza sincronización;
- autoriza almacenamiento remoto;
- autoriza analíticas.

---

## 4. Principio rector de privacidad

```text
En AI StoryLab 1, lo privado es el punto de partida; lo compartido debe justificarse.
```

Corolarios:

- mínimo dato necesario;
- mínima visibilidad necesaria;
- mínima persistencia necesaria;
- mínima exportación necesaria;
- mínima identificación necesaria;
- control humano explícito;
- revisión antes de compartir;
- separación entre trabajo privado, evidencia compartida, portafolio y entrega;
- no vigilancia;
- no ranking;
- no monitoreo continuo;
- no datos reales en v0.7.0.

---

## 5. Herencia de privacidad local-first

La política local-first previa establecía que el MVP guardaba progreso localmente en el navegador mediante `localStorage` y no subía datos a una base de datos.

También fijaba reglas iniciales:

- no recopilar datos personales innecesarios;
- usar códigos o seudónimos;
- no subir JSON reales de estudiantes al repositorio público;
- no subir videos estudiantiles no validados;
- no publicar enlaces privados;
- no guardar archivos grandes en `localStorage`;
- entregar video final en un espacio administrado por el facilitador.

Dictamen:

```text
Estado: preservar principios, ampliar reglas
```

v0.7.0 debe transformar esas reglas en un modelo de privacidad aplicable a datos, roles, vistas, exportaciones, prompts, herramientas y entrega.

---

## 6. Definición operativa

Privacidad por defecto significa:

```text
Todo dato permanece local, mínimo, privado o no existente hasta que una necesidad pedagógica, creativa, ética o de entrega justifique su uso, visibilidad o exportación bajo control humano explícito.
```

Privacidad por defecto no significa:

- ausencia de acompañamiento;
- imposibilidad de compartir evidencia;
- bloqueo del portafolio;
- inexistencia de entrega;
- ausencia de feedback;
- incapacidad de coordinación docente.

Significa que compartir debe ser deliberado, transparente y limitado.

---

## 7. Clasificación de privacidad

| Clase | Definición | Tratamiento |
|---|---|---|
| Privado por defecto | Solo la persona usuaria debe verlo inicialmente. | No visible, no exportado salvo decisión. |
| Compartible con propósito | Puede compartirse para feedback o acompañamiento. | Requiere acción o regla explícita. |
| Exportable con revisión | Puede salir del entorno local. | Requiere resumen y advertencia. |
| Institucional público | Catálogos, glosario, prompts recomendados. | Versionado, no contiene datos personales. |
| Alto cuidado | Puede contener información sensible. | Minimizar, resumir o excluir. |
| Bloqueado | No debe recopilarse ni existir. | Prohibido. |
| Diferido | Podría existir en fase futura con gate. | No autorizado en v0.7.0. |

---

## 8. Datos privados por defecto

Deben permanecer privados por defecto:

- borradores;
- ideas preliminares;
- reflexiones éticas completas;
- prompts usados completos;
- conversaciones con IA externa;
- notas privadas;
- productos no seleccionados;
- versiones intermedias;
- evidencia no compartida;
- decisiones creativas preliminares;
- errores, pausas y dudas;
- enlaces privados;
- avatar local;
- datos de identidad;
- archivos fuente;
- archivo final;
- ubicación de entrega;
- comentarios personales no destinados a portafolio.

Regla:

```text
Lo privado no se vuelve visible por estar técnicamente disponible.
```

---

## 9. Datos compartibles con propósito

Pueden compartirse si existe propósito pedagógico explícito:

- evidencia seleccionada;
- decisión humana seleccionada;
- reflexión ética curada;
- solicitud de apoyo;
- entrada de portafolio;
- metadatos mínimos de entrega;
- declaración de uso de IA;
- créditos;
- herramienta usada, si se justifica;
- estado sintético de misión;
- comentario del facilitador;
- pregunta guía;
- ruta de apoyo.

Condición:

```text
Compartir debe responder a una necesidad de acompañamiento, retroalimentación, curaduría o entrega.
```

---

## 10. Datos exportables con revisión

Toda exportación debe pasar por revisión humana.

Tipos de datos exportables candidatos:

| Dato | Exportación permitida | Condición |
|---|---|---|
| Progreso individual | Sí, alto cuidado | Revisión previa y advertencia |
| Portafolio | Sí | Curaduría humana |
| Metadatos de entrega | Sí, mínimos | Sin archivo final |
| Glosario | Sí | Institucional |
| Herramientas | Sí | Institucional |
| Prompts recomendados | Sí | Institucional |
| Resumen de acompañamiento | Auditar | No vigilancia |
| Grupo/cohorte | Auditar | Evitar identificación/ranking |

No se deben exportar por defecto:

- borradores privados;
- prompts completos usados;
- reflexiones completas;
- chats IA;
- archivos finales;
- enlaces privados;
- datos personales innecesarios;
- señales de actividad;
- rankings;
- inferencias sensibles.

---

## 11. Datos bloqueados

No deben recopilarse, modelarse ni inferirse en v0.7.0:

- ubicación física;
- datos biométricos;
- historial minuto a minuto;
- tiempo conectado;
- pulsaciones, clics o telemetría conductual;
- inferencias emocionales;
- inferencias psicológicas;
- inferencias de capacidad;
- ranking;
- calificaciones automáticas;
- alertas punitivas;
- credenciales de herramientas externas;
- tokens de API;
- chats completos importados automáticamente;
- archivos finales almacenados;
- datos reales para investigación;
- datos para publicidad;
- datos “por si acaso”.

---

## 12. Minimización de identidad

El modelo debe evitar identidad innecesaria.

### Reglas

- usar seudónimo o código cuando sea suficiente;
- evitar nombre legal si no es necesario;
- evitar datos de contacto;
- evitar fecha de nacimiento;
- evitar dirección;
- evitar ubicación;
- evitar identificadores permanentes si no son necesarios;
- evitar mezclar identificador con cohortes pequeñas;
- auditar `student_code`;
- auditar `display_name`;
- auditar avatar;
- permitir exportaciones con menos identidad.

### Dictamen

```text
Identificar menos es diseñar mejor.
```

---

## 13. Privacidad de evidencia

La evidencia no es automáticamente pública ni visible para facilitador.

### Reglas

- evidencia empieza privada;
- evidencia puede marcarse como compartible;
- evidencia puede pasar a portafolio mediante curaduría;
- evidencia puede resumirse;
- evidencia puede excluirse;
- evidencia compartida debe tener propósito;
- evidencia no debe usarse para ranking;
- evidencia no debe activar monitoreo;
- evidencia no debe exponer chats completos o prompts sensibles por defecto.

---

## 14. Privacidad de decisión humana

La decisión humana es dato crítico.

### Reglas

- debe preservarse como parte del proceso formativo;
- no debe usarse para castigar;
- puede compartirse selectivamente;
- puede resumirse para portafolio;
- debe conservar agencia de la persona;
- no debe ser sobrescrita por IA;
- no debe convertirse en métrica de cumplimiento mecánico.

---

## 15. Privacidad de reflexión ética

La reflexión ética puede contener pensamiento personal, duda, tensión o vulnerabilidad.

### Reglas

- privada por defecto;
- compartible solo si se selecciona;
- exportable solo con revisión;
- resumible para portafolio;
- no visible completa para facilitador por defecto;
- no usada punitivamente;
- no utilizada para inferencias sensibles;
- no usada para diagnóstico;
- no usada para ranking.

---

## 16. Privacidad de prompts usados

El prompt usado puede contener:

- tema personal;
- nombres;
- datos de proyecto;
- fragmentos de texto propio;
- señales de dificultad;
- decisiones creativas;
- información copiada a herramienta externa.

### Reglas

- tratar como dato de alto cuidado;
- no exigir texto completo por defecto;
- permitir resumen;
- permitir referencia;
- permitir declaración general;
- advertir antes de exportar;
- no mostrar al facilitador por defecto;
- no importar chats automáticamente;
- no usar para evaluación;
- no usar para perfilar.

---

## 17. Privacidad del portafolio

El portafolio es curado, no una extracción automática de todo.

### Reglas

- la persona decide qué entra;
- borradores no entran por defecto;
- reflexiones completas no entran por defecto;
- prompts completos no entran por defecto;
- créditos y declaración IA sí deben revisarse;
- evidencias pueden editarse o resumirse;
- exportación de portafolio debe ser separada del progreso completo;
- publicación requiere gate futuro;
- galería pública no autorizada en v0.7.0.

---

## 18. Privacidad de entrega final

La entrega final es una zona de alto cuidado.

### Reglas

- no almacenar archivo final;
- no subir MP4;
- no subir PowerPoint;
- no subir audio o imágenes fuente;
- no generar enlace público;
- no publicar sin autorización;
- registrar solo metadatos mínimos;
- advertir sobre enlaces privados;
- confirmar revisión de privacidad;
- confirmar créditos;
- confirmar declaración IA;
- diferir galería pública.

---

## 19. Privacidad de la Vista del Facilitador

La Vista del Facilitador debe operar con privacidad por defecto.

### Visible solo con propósito

- evidencia compartida;
- solicitud de apoyo;
- reflexión seleccionada;
- decisión humana seleccionada;
- portafolio compartido;
- metadatos mínimos de entrega;
- estado sintético de misión.

### No visible por defecto

- progreso completo;
- borradores;
- prompts completos;
- chats IA;
- reflexión completa;
- actividad minuto a minuto;
- historial de edición;
- tiempo conectado;
- ranking;
- comparaciones;
- enlaces privados;
- archivos finales.

Regla:

```text
El facilitador no ve más porque acompaña; acompaña mejor porque ve menos y con propósito.
```

---

## 20. Privacidad de herramientas externas

Las herramientas externas son frontera de salida.

### Reglas

- clasificar privacidad de herramienta;
- advertir si requiere cuenta;
- advertir si usa nube;
- recomendar alternativas locales cuando sea posible;
- no enviar datos automáticamente;
- no guardar credenciales;
- no almacenar tokens;
- no asumir que una herramienta recomendada es institucionalmente aprobada;
- no medir rendimiento por herramienta usada;
- no ocultar riesgos de terceros.

---

## 21. Privacidad de IA externa

La IA externa no tiene rol interno.

### Reglas

- uso voluntario;
- uso manual;
- documentación manual;
- declaración de uso IA;
- no API productiva;
- no IA evaluadora;
- no IA que perfila;
- no importación automática de conversaciones;
- no exigencia de prompts completos;
- no exposición automática de outputs;
- no decisión automática.

---

## 22. Privacidad de grupos y cohortes

Los datos grupales son especialmente delicados.

### Riesgos

- cohorte pequeña identifica individuos;
- agregados revelan estado de estudiantes;
- conteos se convierten en ranking;
- progreso grupal se usa como vigilancia;
- `last_updated` sugiere actividad reciente;
- insignias y avance se vuelven comparación.

### Reglas

- mantener `group_progress` en auditoría;
- no aprobar dashboard grupal heredado;
- no mostrar tabla comparativa por defecto;
- evitar agregados en grupos pequeños;
- no mostrar rankings;
- no mostrar actividad reciente;
- no mostrar conteos individuales como desempeño;
- diseñar señales de cuidado no identificantes;
- diferir reglas específicas a trazabilidad y privacidad operacional futura.

---

## 23. Privacidad documental

Los documentos del proyecto no deben incluir:

- datos reales de estudiantes;
- JSON reales;
- videos reales;
- enlaces privados;
- capturas con datos;
- nombres legales innecesarios;
- prompts privados reales;
- reflexiones reales;
- entregas reales;
- credenciales;
- tokens;
- claves.

Los documentos sí pueden incluir:

- datos sintéticos;
- ejemplos anónimos;
- criterios;
- matrices;
- rutas;
- decisiones;
- riesgos;
- deudas.

---

## 24. Reglas para export/import desde privacidad

### Exportación

Toda exportación debe responder:

1. ¿Qué contiene?
2. ¿Para qué se exporta?
3. ¿Quién la recibirá?
4. ¿Incluye datos privados?
5. ¿Incluye reflexión ética?
6. ¿Incluye prompt usado?
7. ¿Incluye enlaces privados?
8. ¿Incluye identidad?
9. ¿Incluye metadatos de entrega?
10. ¿Puede excluir algo?
11. ¿Puede resumirse?
12. ¿Qué riesgo tiene?

### Importación

Toda importación debe responder:

1. ¿Qué tipo de archivo es?
2. ¿Qué versión tiene?
3. ¿Qué datos trae?
4. ¿Trae datos inesperados?
5. ¿Trae datos de otra persona?
6. ¿Sobrescribe información?
7. ¿Crea visibilidad nueva?
8. ¿Puede alimentar vigilancia?
9. ¿Debe rechazarse?
10. ¿Debe resumirse antes de aceptar?

---

## 25. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- privacidad local-first;
- no datos personales innecesarios;
- seudónimos/códigos;
- no JSON reales en repo;
- no videos no validados;
- no enlaces privados;
- no archivos grandes en localStorage;
- portafolio curado;
- declaración IA;
- revisión humana.

### Transformar

- `localStorage`;
- `student_code`;
- `display_name`;
- avatar base64;
- `prompt_used`;
- reflexión ética;
- export/import;
- `group_progress`;
- dashboard grupal;
- metadatos de entrega;
- herramientas externas;
- interés en galería.

### Diferir

- consentimiento legal operativo;
- backend;
- autenticación;
- cifrado final;
- galería pública;
- investigación;
- analíticas;
- sincronización;
- interoperabilidad;
- publicación pública.

### Bloquear

- datos reales;
- ranking;
- monitoreo continuo;
- inferencias sensibles;
- actividad minuto a minuto;
- credenciales externas;
- chats importados automáticamente;
- archivos finales almacenados;
- publicación automática;
- datos para publicidad;
- datos “por si acaso”.

### Mantener en auditoría

- señales agregadas;
- cohortes pequeñas;
- `last_updated`;
- enlaces privados;
- avatar;
- prompt completo;
- reflexión compartida;
- metadatos de entrega;
- estado de galería;
- validación por facilitador.

---

## 26. Decisiones candidatas

### DEC-PRIV-001 · Privado por defecto, compartido por justificación

```text
Estado: Candidata para aprobación documental
```

Todo dato comienza privado o no existente. Compartir requiere propósito.

### DEC-PRIV-002 · Minimización de identidad

```text
Estado: Candidata para aprobación documental
```

El modelo debe usar seudónimos o códigos y evitar identidad innecesaria.

### DEC-PRIV-003 · Evidencia privada hasta selección

```text
Estado: Candidata para aprobación documental
```

La evidencia no es visible para facilitador ni portafolio por defecto.

### DEC-PRIV-004 · Reflexión ética de alto cuidado

```text
Estado: Candidata para aprobación documental
```

La reflexión ética es privada por defecto y no debe usarse punitivamente.

### DEC-PRIV-005 · Prompt usado resumible

```text
Estado: Candidata para aprobación documental
```

El prompt usado puede documentarse como resumen o referencia, no necesariamente texto completo.

### DEC-PRIV-006 · Portafolio separado del progreso completo

```text
Estado: Candidata para aprobación documental
```

El portafolio exportable debe ser curado y separado del progreso completo.

### DEC-PRIV-007 · Vista del Facilitador con visibilidad limitada

```text
Estado: Candidata para aprobación documental
```

El facilitador solo ve datos compartidos o mínimos con propósito.

### DEC-PRIV-008 · Group progress bajo auditoría

```text
Estado: Candidata para aprobación documental
```

Los datos grupales no quedan aprobados como modelo final de privacidad.

---

## 27. Preguntas abiertas

1. ¿Qué campos deben ser excluibles en exportación?
2. ¿Qué campos deben estar apagados por defecto?
3. ¿Cómo se presenta una advertencia de privacidad?
4. ¿Cómo se comunica qué verá el facilitador?
5. ¿Debe existir una vista previa antes de compartir evidencia?
6. ¿Cómo se maneja un estudiante que no quiere compartir reflexión?
7. ¿Qué nivel de seudónimo es suficiente?
8. ¿Cómo se evita identificar en grupos pequeños?
9. ¿Qué metadatos de entrega son mínimos?
10. ¿Qué sucede con enlaces privados?
11. ¿Qué datos puede incluir una galería futura?
12. ¿Cómo se maneja investigación futura con datos anonimizados?
13. ¿Qué debe contener una política para estudiantes?
14. ¿Qué lenguaje evita miedo o vigilancia?

---

## 28. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- privacidad por defecto queda definida como punto de partida;
- compartir requiere propósito explícito;
- identidad debe minimizarse;
- evidencia empieza privada;
- reflexión ética queda clasificada como alto cuidado;
- prompt usado queda clasificado como alto cuidado y resumible;
- portafolio queda separado del progreso completo;
- entrega final queda limitada a metadatos mínimos;
- Vista del Facilitador queda limitada a datos compartidos o mínimos;
- herramientas externas quedan como frontera de salida;
- IA externa queda sin rol interno;
- datos grupales quedan en auditoría;
- datos reales, ranking, monitoreo continuo, inferencias sensibles y archivos finales almacenados quedan bloqueados;
- ninguna decisión aquí activa implementación.

---

## 29. Impacto sobre próximas familias

| Familia posterior | Impacto |
|---|---|
| Trazabilidad formativa | Define qué trazas no pueden existir y qué trazas requieren propósito. |
| Prompts e IA no embebida | Define prompt usado como alto cuidado y resumible. |
| Herramientas | Define herramientas como frontera de salida con clasificación visible. |
| Glosario | Debe usar lenguaje de privacidad claro y no punitivo. |
| Entrega y portafolio | Define separación entre progreso, portafolio y entrega. |
| Arquitectura modular | Aporta objetos: Privacidad, Visibilidad, Consentimiento, Exportación, DatoAltoCuidado. |
| Gobernanza técnica | Aporta gates para datos reales, galería, investigación y backend. |

---

## 30. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el Modelo de Privacidad por Defecto de AI StoryLab 1 v0.7.0 como séptima familia del Mapa de Decisiones Técnicas.

El documento define privacidad por defecto como punto de partida para datos, evidencias, prompts, reflexiones, portafolio, entrega, Vista del Facilitador, export/import, herramientas externas, IA externa, grupos y documentación.

El hito establece que compartir requiere propósito explícito; minimiza identidad; clasifica reflexión ética y prompt usado como datos de alto cuidado; separa portafolio de progreso completo; limita la entrega final a metadatos mínimos; mantiene group_progress bajo auditoría; y bloquea datos reales, ranking, monitoreo continuo, inferencias sensibles, chats importados automáticamente, publicación automática y almacenamiento automático de archivos finales.

Este hito no implementa código, no define política legal final, no activa backend, autenticación, APIs productivas, IA embebida, sincronización, despliegue, datos reales ni validación con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar modelo privacidad defecto v0.7" \
  -m "Hito: integra la septima familia del Mapa de Decisiones Tecnicas v0.7.0. Define privacidad por defecto, minimizacion, datos privados, compartibles, exportables y bloqueados. Protege evidencias, reflexiones, prompts, portafolio, entrega, Vista del Facilitador, herramientas externas e IA externa, y bloquea datos reales, ranking, monitoreo continuo, inferencias sensibles e implementacion prematura."
```

---

## 31. Dictamen de aprobación

La Familia 7 queda definida como el marco de mínima exposición de v0.7.0.

Su decisión más importante es:

```text
En AI StoryLab 1, la privacidad no es una puerta que se cierra al final; es la habitación desde la que empieza el diseño.
```

Este documento cierra la séptima familia como modelo de privacidad por defecto aprobado. No cierra trazabilidad formativa.  
Establece el marco para continuar con:

```text
Familia 8 · Trazabilidad formativa no vigilante
```

---

## 32. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- privacidad por defecto queda definida como punto de partida;
- compartir requiere propósito explícito;
- identidad debe minimizarse;
- evidencia empieza privada;
- reflexión ética queda clasificada como alto cuidado;
- prompt usado queda clasificado como alto cuidado y resumible;
- portafolio queda separado del progreso completo;
- entrega final queda limitada a metadatos mínimos;
- Vista del Facilitador queda limitada a datos compartidos o mínimos;
- herramientas externas quedan como frontera de salida;
- IA externa queda sin rol interno;
- datos grupales quedan en auditoría;
- datos reales, ranking, monitoreo continuo, inferencias sensibles y archivos finales almacenados quedan bloqueados;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la octava familia del mapa:

```text
Trazabilidad formativa no vigilante
```

No autoriza código, política legal final, backend, autenticación, APIs productivas, IA embebida, sincronización, despliegue, datos reales ni validación con personas.
