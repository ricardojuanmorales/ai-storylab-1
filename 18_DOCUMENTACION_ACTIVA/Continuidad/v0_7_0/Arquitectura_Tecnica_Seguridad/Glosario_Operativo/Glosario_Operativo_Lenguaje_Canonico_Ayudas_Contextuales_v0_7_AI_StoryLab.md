# Glosario Operativo, Lenguaje Canónico y Ayudas Contextuales v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 11 · Glosario operativo, lenguaje canónico y ayudas contextuales  
**Tipo de documento:** Documento técnico-conceptual, pedagógico, lingüístico, UX y pre-implementativo  
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
- `src/data/glossary.json`
- `src/components/GlossaryView.jsx`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Glosario_Lenguaje_Ayudas/Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 11 aborda una pregunta central:

```text
¿Cómo debe AI StoryLab 1 nombrar, explicar y contextualizar sus conceptos para sostener agencia, seguridad, privacidad, no vigilancia y continuidad pedagógica sin imponer lenguaje punitivo, ambiguo o técnicamente engañoso?
```

La respuesta inicial es:

```text
AI StoryLab 1 debe tratar el lenguaje como infraestructura pedagógica y ética: cada término, ayuda contextual, etiqueta, estado y advertencia debe orientar acción humana, no ocultar poder técnico ni inducir vigilancia.
```

Un glosario no es un diccionario dormido.  
En v0.7.0, el glosario es señalética fina: evita que una palabra equivocada abra una puerta riesgosa.

---

## 1. Propósito

Este documento define el modelo conceptual de glosario operativo, lenguaje canónico y ayudas contextuales para AI StoryLab 1 v0.7.0.

Su función es:

- preservar el glosario heredado;
- transformar definiciones hacia v0.7.0;
- establecer lenguaje canónico;
- bloquear lenguaje punitivo o vigilante;
- definir criterios para ayudas contextuales;
- orientar tooltips, etiquetas, estados y advertencias;
- alinear glosario con privacidad, seguridad, trazabilidad, herramientas, IA y entrega;
- preparar portafolio, metadatos y exportabilidad;
- preparar arquitectura modular y objetos de dominio;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- principios de lenguaje canónico;
- glosario heredado;
- categorías de términos;
- términos nuevos candidatos;
- términos a preservar;
- términos a transformar;
- términos a bloquear;
- ayudas contextuales;
- microcopias;
- etiquetas;
- estados;
- advertencias;
- relación con Vista del Facilitador;
- relación con privacidad, seguridad y trazabilidad;
- relación con herramientas e IA;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- reescribe `glossary.json`;
- implementa tooltips;
- define UI final;
- define diseño visual;
- define buscador final;
- define arquitectura de internacionalización;
- define traducción completa;
- define accesibilidad final;
- define rúbricas finales;
- define validación con usuarios;
- usa datos reales;
- implementa código;
- despliega.

---

## 4. Principio rector

```text
El lenguaje de AI StoryLab 1 debe orientar sin vigilar, explicar sin infantilizar, advertir sin asustar y nombrar responsabilidades sin transferir autoridad a la tecnología.
```

Corolarios:

- cada término debe tener propósito operativo;
- cada definición debe ser clara y cuidada;
- cada etiqueta debe evitar castigo;
- cada advertencia debe explicar riesgo y acción;
- cada ayuda contextual debe preservar decisión humana;
- el glosario debe separar conceptos pedagógicos, éticos, técnicos y operacionales;
- el lenguaje debe distinguir recomendado, usado, compartido, exportado, aprobado, integrado y bloqueado;
- el lenguaje no debe ocultar diferencias entre local-first, privacidad y seguridad;
- el lenguaje no debe convertir acompañamiento en vigilancia;
- el lenguaje no debe convertir documentación en confesión.

---

## 5. Herencia funcional del glosario

El glosario heredado `src/data/glossary.json` incluye:

- `schema_version`;
- categorías;
- términos;
- `term_id`;
- `term`;
- `category`;
- sesiones asociadas;
- tags;
- definición.

Las categorías heredadas son:

```text
IA
Ética
Narrativa
Multimedia
Derechos
Diseño Visual
Sonido
Evaluación
```

El componente `GlossaryView.jsx` presenta una vista buscable y filtrable por:

- término o definición;
- categoría;
- sesión;
- tags.

Dictamen:

```text
Estado: preservar estructura, transformar lenguaje y gobernanza
```

---

## 6. Definiciones operativas

### Glosario operativo

```text
Conjunto gobernado de términos, definiciones, categorías y relaciones que orienta el uso pedagógico, ético y técnico de AI StoryLab 1.
```

### Lenguaje canónico

```text
Conjunto de palabras, frases y distinciones aprobadas para nombrar conceptos centrales del proyecto de forma consistente.
```

### Ayuda contextual

```text
Mensaje breve situado cerca de una acción, campo, vista o decisión para explicar qué significa, por qué importa y qué cuidado requiere.
```

### Microcopia

```text
Texto breve de interfaz o documentación que guía una acción concreta.
```

### Advertencia cuidada

```text
Mensaje que comunica un riesgo sin culpar, asustar o bloquear injustificadamente la acción humana.
```

### Etiqueta operacional

```text
Palabra o frase breve que clasifica estado, visibilidad, privacidad, herramienta, evidencia o entrega.
```

---

## 7. Diferencia entre glosario, ayuda contextual y nota institucional

| Elemento | Función | Autoridad | Riesgo |
|---|---|---|---|
| Glosario | Define conceptos | Proyecto | Quedar abstracto |
| Ayuda contextual | Guía acción situada | Producto/documentación | Ser paternalista o vaga |
| Nota institucional | Adapta a contexto local | Institución/docente | Confundirse con política universal |
| Advertencia | Señala riesgo | Gobernanza | Asustar o culpar |
| Etiqueta | Clasifica estado | Sistema/documentación | Volverse punitiva |
| Mensaje de feedback | Acompaña mejora | Facilitador | Convertirse en expediente |

Regla:

```text
Cada texto debe saber qué tipo de texto es.
```

---

## 8. Categorías canónicas propuestas

Se preservan las categorías heredadas, pero se recomiendan categorías operativas adicionales para v0.7.0.

### Categorías heredadas a preservar

- IA;
- Ética;
- Narrativa;
- Multimedia;
- Derechos;
- Diseño Visual;
- Sonido;
- Evaluación.

### Categorías nuevas candidatas

- Arquitectura;
- Privacidad;
- Seguridad;
- Trazabilidad;
- Roles;
- Herramientas;
- Portafolio;
- Entrega;
- Gobernanza;
- Local-first;
- No vigilancia.

Dictamen:

```text
Las categorías heredadas sostienen el taller; las categorías nuevas sostienen v0.7.0.
```

---

## 9. Términos heredados a preservar

Deben preservarse, con posible ajuste de definición:

- Inteligencia Artificial (IA);
- Prompt;
- Decisión humana;
- Reflexión ética;
- Atribución;
- Licencia;
- Logline;
- Storyboard;
- VoiceOver;
- MP4;
- Declaración de uso de IA;
- Portafolio emergente;
- Manifiesto ético;
- Sesgo algorítmico;
- Transparencia en IA;
- Idea central;
- Audiencia objetivo;
- Propósito educativo;
- Avatar narrativo;
- Diseño de personaje;
- Identidad digital;
- Generador de imágenes IA;
- Estructura narrativa;
- Conflicto dramático;
- Escena;
- Guion;
- Moodboard;
- Estilo visual;
- Paleta de color;
- Recursos libres (CC);
- Narración dramática;
- Voz sintética (TTS);
- Emoción narrativa;
- Edición de audio;
- Prototipo;
- Retroalimentación entre pares;
- Iteración creativa;
- Integración multimedia;
- Curaduría;
- Control de calidad;
- Privacidad de datos;
- Pitch;
- Metadatos de entrega.

---

## 10. Términos heredados que requieren transformación

### Portafolio emergente

Definición heredada:

```text
Portafolio que se construye automáticamente a partir de las evidencias que registras en cada misión, sin necesidad de redactarlo al final.
```

Transformación requerida:

- no debe implicar extracción automática total;
- debe incorporar curaduría humana;
- debe separar evidencia privada, evidencia compartida y portafolio;
- debe respetar privacidad por defecto.

Definición candidata:

```text
Portafolio que se construye progresivamente a partir de evidencias seleccionadas y curadas por la persona, con apoyo del proceso formativo y revisión de privacidad.
```

### Control de calidad

Riesgo:

- sonar evaluativo o punitivo;
- confundirse con inspección automática.

Transformación requerida:

```text
Revisión formativa y humana de contenido, ética, créditos, accesibilidad, privacidad y presentación antes de compartir o entregar.
```

### Metadatos de entrega

Riesgo:

- interpretarse como archivo completo o expediente.

Transformación requerida:

```text
Información mínima que acompaña una entrega para documentar autoría, formato, créditos, declaración IA y revisión de privacidad sin almacenar el archivo final.
```

### Prompt

Riesgo:

- no distingue recomendado, adaptado y usado.

Transformación requerida:

```text
Instrucción o pregunta dirigida a una herramienta de IA. En AI StoryLab 1 se distingue entre prompt recomendado, prompt adaptado y prompt usado; el prompt usado es dato de alto cuidado.
```

---

## 11. Términos nuevos candidatos

### Local-first

```text
Principio arquitectónico según el cual la experiencia esencial, el trabajo creativo y los datos principales deben permanecer bajo control local o cercano, sin depender por defecto de servidores, cuentas, APIs externas o sincronización automática.
```

### Privacidad por defecto

```text
Regla de diseño según la cual los datos comienzan privados, mínimos o no existentes, y solo se comparten con propósito explícito y control humano.
```

### Seguridad por diseño

```text
Práctica de anticipar riesgos, limitar permisos y bloquear funciones peligrosas antes de implementar.
```

### Trazabilidad formativa

```text
Memoria pedagógica mínima que ayuda a comprender avances, evidencias, decisiones, feedback y entrega sin vigilar el proceso completo.
```

### No vigilancia

```text
Principio según el cual acompañar no autoriza monitorear continuamente, comparar, rankear, inferir estados sensibles ni capturar todo lo posible.
```

### Vista del Facilitador

```text
Experiencia de acompañamiento pedagógico limitada por roles, permisos, privacidad y trazabilidad no vigilante.
```

### Evidencia compartida

```text
Evidencia que la persona decide hacer visible para recibir feedback, apoyar portafolio o documentar entrega.
```

### Evidencia privada

```text
Borrador, idea, producto o registro que permanece bajo control de la persona y no es visible por defecto.
```

### Prompt recomendado

```text
Plantilla o sugerencia pedagógica ofrecida para orientar una tarea, sin obligar ni demostrar uso.
```

### Prompt usado

```text
Prompt que la persona realmente usó en una herramienta externa de IA; se considera dato de alto cuidado y puede documentarse como resumen.
```

### IA no embebida

```text
Modelo en el cual la app no ejecuta, llama ni integra IA; solo orienta uso externo mediante prompts, criterios y documentación manual.
```

### Herramienta externa

```text
Aplicación, servicio o recurso fuera de AI StoryLab 1 que puede apoyar el proyecto, sin estar integrado automáticamente a la app.
```

### Nota institucional

```text
Orientación editable por la institución, docente o facilitador para contextualizar herramientas, restricciones, alternativas o cuidados.
```

### Revisión de privacidad

```text
Acción humana de verificar qué datos, enlaces, archivos, créditos y declaraciones se compartirán o entregarán.
```

### Declaración IA

```text
Texto breve donde la persona explica si usó IA, para qué tipo de apoyo, qué decidió humanamente y qué revisó.
```

### Metadatos mínimos

```text
Información estrictamente necesaria para documentar una entrega sin almacenar el producto final ni datos sensibles innecesarios.
```

---

## 12. Lenguaje canónico obligatorio

### Para agencia humana

Usar:

- decisión humana;
- criterio humano;
- revisión humana;
- curaduría humana;
- elección consciente;
- responsabilidad compartida;
- autoría situada;
- decisión final de la persona.

Evitar:

- la IA decidió;
- el sistema sabe;
- el algoritmo aprobó;
- automático por defecto;
- el estudiante debe obedecer;
- la plataforma determina.

### Para privacidad

Usar:

- privado por defecto;
- compartido con propósito;
- revisión de privacidad;
- dato de alto cuidado;
- visible solo si se selecciona;
- exportable con revisión;
- mínimo necesario.

Evitar:

- oculto por sospecha;
- secreto;
- obligatorio mostrar;
- pega todo;
- comparte todo;
- evidencia total;
- expediente.

### Para trazabilidad

Usar:

- memoria pedagógica;
- huella formativa;
- estado sintético;
- ruta de apoyo;
- continuidad;
- feedback formativo.

Evitar:

- monitoreo;
- tracking;
- vigilancia;
- actividad minuto a minuto;
- desempeño en tiempo real;
- alerta de inactividad;
- riesgo del estudiante.

### Para herramientas

Usar:

- herramienta recomendada;
- recurso externo;
- alternativa local;
- nivel de privacidad;
- nota institucional;
- uso declarado;
- atribución.

Evitar:

- herramienta obligatoria;
- aprobada universalmente;
- conectada automáticamente;
- autorizada sin revisión;
- usa esta cuenta;
- sube todo.

---

## 13. Lenguaje bloqueado

Queda bloqueado o no recomendado en v0.7.0:

- ranking;
- tabla de posiciones;
- peor/mejor estudiante;
- incumplidor;
- sospechoso;
- riesgo alto;
- bajo rendimiento;
- inactivo;
- detector de IA;
- prueba de originalidad;
- confesión de uso IA;
- dependencia de IA;
- vigilancia;
- monitoreo continuo;
- tracking del estudiante;
- expediente automático;
- evaluación automática final;
- administrador total;
- alerta punitiva;
- actividad minuto a minuto;
- productividad individual;
- métricas comparativas.

Excepción:

```text
Estos términos pueden aparecer solo para documentar explícitamente que están bloqueados, auditados o no permitidos.
```

---

## 14. Estados canónicos

### Estados formativos permitidos

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

### Estados técnicos/documentales permitidos

- borrador;
- aprobado por revisión humana;
- candidato;
- diferido;
- bloqueado;
- en auditoría;
- deuda activa;
- integrado;
- pendiente de gate;
- fuera de alcance.

### Estados bloqueados para estudiantes

- atrasado;
- deficiente;
- incumplidor;
- inactivo;
- bajo rendimiento;
- sospechoso;
- último lugar;
- riesgo alto;
- no productivo.

Regla:

```text
Un estado debe describir una próxima acción posible, no fijar una identidad.
```

---

## 15. Ayudas contextuales

Las ayudas contextuales deben ser:

- breves;
- situadas;
- accionables;
- no punitivas;
- comprensibles;
- orientadas a decisión humana;
- compatibles con privacidad;
- compatibles con seguridad;
- compatibles con no vigilancia.

### Fórmula recomendada

```text
Qué significa + Por qué importa + Qué puedes hacer
```

Ejemplo:

```text
Prompt usado: resume qué le pediste a una herramienta de IA. No tienes que pegar el prompt completo si contiene detalles privados.
```

---

## 16. Tipos de ayudas contextuales

| Tipo | Función | Ejemplo conceptual |
|---|---|---|
| Tooltip | Explica campo breve | “Este dato no se comparte por defecto.” |
| Nota contextual | Explica decisión | “Puedes resumir tu prompt.” |
| Advertencia cuidada | Señala riesgo | “Esta herramienta usa datos en la nube.” |
| Confirmación | Revisa antes de actuar | “Verifica créditos antes de entregar.” |
| Estado | Orienta continuidad | “Requiere revisión de privacidad.” |
| Ayuda de facilitador | Apoya sin imponer | “Puedes pedir feedback sobre esta evidencia.” |
| Ayuda de exportación | Evita exposición | “Revisa qué campos saldrán del entorno local.” |

---

## 17. Advertencias cuidadas

Una advertencia debe evitar miedo y culpa.

### Estructura

```text
Riesgo + Acción recomendada + Control humano
```

Ejemplo:

```text
Esta herramienta puede guardar datos en la nube. Evita copiar información privada y revisa qué necesitas compartir antes de usarla.
```

No usar:

```text
Cuidado: si usas esto, tus datos pueden estar en peligro.
```

---

## 18. Mensajes para IA externa

Lenguaje recomendado:

```text
Puedes usar IA externa como apoyo, pero la decisión final debe ser tuya.
```

```text
Declara qué tipo de apoyo recibiste y qué decidiste tú.
```

```text
No necesitas pegar el chat completo. Puedes resumir el uso de IA.
```

Lenguaje bloqueado:

```text
Demuestra que no copiaste.
```

```text
Pega todos tus prompts.
```

```text
La IA evaluará tu trabajo.
```

---

## 19. Mensajes para herramientas externas

Lenguaje recomendado:

```text
Esta herramienta es una opción. Revisa su nivel de privacidad antes de usarla.
```

```text
Si requiere cuenta, consulta las reglas de tu institución o usa una alternativa local.
```

```text
Si el recurso aparece en tu entrega final, recuerda registrar créditos.
```

Lenguaje bloqueado:

```text
Debes usar esta herramienta.
```

```text
Conecta tu cuenta para continuar.
```

```text
Sube tu archivo final aquí.
```

---

## 20. Mensajes para Vista del Facilitador

Lenguaje recomendado:

```text
Evidencia compartida para acompañamiento.
```

```text
Ruta de apoyo sugerida.
```

```text
Comentario formativo.
```

```text
Requiere revisión de privacidad antes de entregar.
```

Lenguaje bloqueado:

```text
Estudiante en riesgo.
```

```text
Actividad baja.
```

```text
No ha trabajado suficiente.
```

```text
Comparar con grupo.
```

---

## 21. Mensajes para exportación

Lenguaje recomendado:

```text
Revisa qué información incluirá esta exportación.
```

```text
Los borradores privados y prompts completos no se incluyen por defecto.
```

```text
Puedes excluir información sensible antes de exportar.
```

Lenguaje bloqueado:

```text
Exportar todo.
```

```text
Enviar historial completo.
```

```text
Compartir progreso total.
```

---

## 22. Mensajes para entrega

Lenguaje recomendado:

```text
Confirma créditos, declaración IA y revisión de privacidad antes de entregar.
```

```text
La app registra metadatos mínimos; no almacena el archivo final.
```

```text
Verifica que cualquier enlace privado tenga permisos adecuados.
```

Lenguaje bloqueado:

```text
Sube el MP4 a la app.
```

```text
Publicar automáticamente.
```

```text
Validación automática final.
```

---

## 23. Glosario y objetos de dominio

La Familia 11 prepara vocabulario para la Familia 13.

Objetos candidatos asociados:

- TérminoGlosario;
- CategoríaGlosario;
- DefiniciónCanónica;
- AyudaContextual;
- AdvertenciaCuidada;
- EtiquetaOperacional;
- EstadoFormativo;
- EstadoDocumental;
- NotaInstitucional;
- MensajeFacilitador;
- TextoExportación;
- TextoEntrega;
- LenguajeBloqueado;
- AliasTermino;
- RelacionTermino.

---

## 24. Modelo conceptual de término

Campos conceptuales candidatos, no esquema final:

| Campo | Propósito |
|---|---|
| `term_id` | Identificador semántico o estable |
| `term` | Término visible |
| `definition` | Definición clara |
| `category` | Categoría operativa |
| `tags` | Relaciones temáticas |
| `applies_to` | Vistas o familias donde aplica |
| `visibility` | Público, interno, facilitador, estudiante |
| `sensitivity` | Normal, alto cuidado, bloqueado |
| `canonical_status` | Preservar, transformar, diferir, bloquear, auditar |
| `preferred_terms` | Lenguaje recomendado |
| `avoid_terms` | Lenguaje a evitar |
| `contextual_help` | Ayuda breve asociada |
| `examples` | Ejemplos sintéticos |
| `related_terms` | Relaciones conceptuales |
| `version` | Versión documental |
| `approved_by_human` | Estado de aprobación |

Regla:

```text
Un término operativo debe decir qué significa y cómo debe usarse.
```

---

## 25. Modelo conceptual de ayuda contextual

Campos conceptuales candidatos, no esquema final:

| Campo | Propósito |
|---|---|
| `help_id` | Identificador |
| `surface` | Campo, vista, exportación, entrega, herramienta |
| `trigger` | Dónde aparece |
| `message` | Texto breve |
| `risk_level` | Bajo, medio, alto |
| `action` | Qué puede hacer la persona |
| `related_term` | Término asociado |
| `privacy_note` | Si aplica |
| `security_note` | Si aplica |
| `non_surveillance_note` | Si aplica |
| `tone` | Formativo, advertencia, confirmación |
| `status` | Candidato, aprobado, bloqueado |

---

## 26. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- glosario heredado;
- categorías base;
- términos IA, ética, narrativa, multimedia, derechos, diseño, sonido y evaluación;
- vista buscable y filtrable;
- sesiones asociadas;
- tags;
- definición pedagógica clara;
- términos de atribución, licencia, declaración IA, decisión humana y reflexión ética.

### Transformar

- Portafolio emergente;
- Prompt;
- Control de calidad;
- Metadatos de entrega;
- Privacidad de datos;
- Retroalimentación;
- Curaduría;
- términos de evaluación;
- categorías para v0.7.0;
- ayudas contextuales;
- lenguaje de estados;
- advertencias.

### Diferir

- internacionalización;
- traducción completa;
- accesibilidad final;
- tooltips implementados;
- búsqueda semántica;
- glosario multirol;
- glosario institucional;
- glosario para validación con personas;
- política editorial final;
- versión pública final.

### Bloquear

- lenguaje punitivo;
- lenguaje de ranking;
- lenguaje de vigilancia;
- detector IA;
- confesión de uso IA;
- evaluación automática;
- administrador total;
- tracking;
- progreso total;
- exportar todo;
- inactivo/bajo rendimiento;
- riesgo alto aplicado a estudiante;
- términos que oculten integración automática.

### Mantener en auditoría

- “control de calidad”;
- “evaluación”;
- “seguimiento”;
- “progreso”;
- “validación”;
- “dashboard”;
- “actividad”;
- “estado”;
- “alerta”;
- “herramienta aprobada”;
- “metadatos”;
- “portafolio emergente”.

---

## 27. Decisiones candidatas

### DEC-LANG-001 · Lenguaje como infraestructura ética

```text
Estado: Candidata para aprobación documental
```

El lenguaje de AI StoryLab 1 debe tratarse como parte de la arquitectura ética, pedagógica y técnica.

### DEC-LANG-002 · Glosario heredado preservado y transformado

```text
Estado: Candidata para aprobación documental
```

El glosario v0.3 se preserva como base, pero debe transformarse para incorporar v0.7.0.

### DEC-LANG-003 · Lenguaje no vigilante obligatorio

```text
Estado: Candidata para aprobación documental
```

Estados, etiquetas y ayudas deben evitar vigilancia, ranking, castigo e inferencias sensibles.

### DEC-LANG-004 · Ayudas contextuales con propósito

```text
Estado: Candidata para aprobación documental
```

Toda ayuda contextual debe explicar significado, importancia y acción posible.

### DEC-LANG-005 · Advertencias cuidadas

```text
Estado: Candidata para aprobación documental
```

Las advertencias deben comunicar riesgo sin culpa, miedo ni bloqueo innecesario.

### DEC-LANG-006 · Separación entre recomendado, usado, aprobado e integrado

```text
Estado: Candidata para aprobación documental
```

El lenguaje debe distinguir claramente recomendación, uso, aprobación e integración.

### DEC-LANG-007 · Estados formativos no punitivos

```text
Estado: Candidata para aprobación documental
```

Los estados deben orientar continuidad y apoyo, no etiquetar desempeño o identidad.

### DEC-LANG-008 · Lenguaje bloqueado documentado explícitamente

```text
Estado: Candidata para aprobación documental
```

Los términos peligrosos deben registrarse como bloqueados para evitar su reaparición futura.

---

## 28. Riesgos

| Riesgo | Severidad | Control conceptual |
|---|---|---|
| Glosario queda pedagógico pero no operativo | Media/alta | Categorías v0.7.0 |
| Términos ambiguos activan malas decisiones técnicas | Alta | Definiciones canónicas |
| “Seguimiento” se convierte en vigilancia | Alta | Lenguaje no vigilante |
| “Control de calidad” se vuelve punitivo | Media/alta | Definición formativa |
| “Portafolio emergente” sugiere extracción automática | Alta | Curaduría humana |
| “Herramienta aprobada” se confunde con recomendada | Alta | Separación canónica |
| Advertencias asustan o culpan | Media | Advertencias cuidadas |
| Estados etiquetan personas | Alta | Estados no punitivos |
| IA se describe como decisora | Crítica | Agencia humana |
| Exportación sugiere “todo” | Alta | Revisión y exclusión |
| Metadatos se expanden | Alta | Mínimos |

---

## 29. Controles conceptuales

| Control | Descripción |
|---|---|
| Definición canónica | Cada término clave tiene definición aprobada. |
| Lenguaje recomendado | Se indican palabras preferidas. |
| Lenguaje a evitar | Se bloquean términos peligrosos. |
| Estado formativo | Estados orientan próxima acción, no identidad. |
| Ayuda contextual | Explica significado, riesgo y acción. |
| Advertencia cuidada | Comunica riesgo sin culpa ni miedo. |
| Revisión humana | Términos sensibles requieren aprobación. |
| Separación semántica | Recomendado ≠ usado ≠ aprobado ≠ integrado. |
| Categoría v0.7.0 | Nuevos términos se ubican en arquitectura/privacidad/seguridad/etc. |
| Auditoría de términos | Términos ambiguos quedan bajo revisión. |

---

## 30. Preguntas abiertas

1. ¿Qué términos heredados deben reescribirse primero?
2. ¿Debe mantenerse “Portafolio emergente” o renombrarse?
3. ¿Cómo se nombra “control de calidad” sin sonar punitivo?
4. ¿Qué términos técnicos requieren definición para estudiantes?
5. ¿Qué términos técnicos son solo internos?
6. ¿Debe existir un glosario por rol?
7. ¿Qué ayudas contextuales aparecen en exportación?
8. ¿Qué ayudas contextuales aparecen en entrega?
9. ¿Qué ayudas contextuales aparecen en prompts?
10. ¿Qué ayudas contextuales aparecen en herramientas?
11. ¿Qué lenguaje institucional debe poder editarse?
12. ¿Qué términos deben bloquearse explícitamente en UI?
13. ¿Cómo se manejarán variantes regionales de lenguaje?
14. ¿Cómo se validará comprensión futura con personas?
15. ¿Qué necesita la Familia 12 de este glosario?

---

## 31. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- lenguaje queda definido como infraestructura pedagógica, ética y técnica;
- glosario heredado queda preservado y sujeto a transformación;
- categorías heredadas quedan preservadas;
- categorías v0.7.0 quedan propuestas como candidatas;
- términos heredados sensibles quedan identificados para transformación;
- términos nuevos candidatos quedan propuestos;
- lenguaje punitivo y vigilante queda bloqueado;
- estados formativos deben ser no punitivos;
- ayudas contextuales deben orientar acción humana;
- advertencias deben ser cuidadas;
- recomendado, usado, aprobado e integrado deben distinguirse;
- ninguna decisión aquí activa implementación.

---

## 32. Impacto sobre próximas familias

| Familia posterior | Impacto |
|---|---|
| Entrega final y portafolio | Define lenguaje de metadatos, créditos, privacidad, declaración IA y exportación. |
| Arquitectura modular | Aporta objetos: TérminoGlosario, AyudaContextual, EstadoFormativo, AdvertenciaCuidada. |
| Gobernanza técnica | Aporta control de lenguaje bloqueado, definiciones canónicas y auditoría semántica. |

---

## 33. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el documento Glosario Operativo, Lenguaje Canónico y Ayudas Contextuales de AI StoryLab 1 v0.7.0 como undécima familia del Mapa de Decisiones Técnicas.

El documento preserva el glosario heredado, sus categorías, términos, sesiones y tags, y lo transforma en infraestructura lingüística para privacidad, seguridad, trazabilidad, roles, herramientas, IA no embebida, portafolio, entrega, local-first y no vigilancia.

El hito define lenguaje canónico, términos nuevos candidatos, términos heredados a transformar, lenguaje recomendado, lenguaje bloqueado, estados formativos no punitivos, ayudas contextuales, advertencias cuidadas, mensajes para IA externa, herramientas, Vista del Facilitador, exportación y entrega.

Este hito no implementa código, no reescribe glossary.json, no define UI final, no activa tooltips, backend, APIs, IA embebida, despliegue, datos reales ni validación con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar glosario lenguaje ayudas v0.7" \
  -m "Hito: integra la undecima familia del Mapa de Decisiones Tecnicas v0.7.0. Preserva el glosario heredado y lo transforma en lenguaje canonico, ayudas contextuales, estados no punitivos y advertencias cuidadas, bloqueando lenguaje de vigilancia, ranking, evaluacion automatica, tracking, datos reales e implementacion prematura."
```

---

## 34. Dictamen de aprobación

La Familia 11 queda definida como el marco lingüístico y contextual de v0.7.0.

Su decisión más importante es:

```text
En AI StoryLab 1, nombrar bien también es diseñar bien.
```

Este documento cierra la undécima familia como modelo aprobado de glosario operativo, lenguaje canónico y ayudas contextuales. No cierra portafolio, entrega, metadatos ni exportabilidad local-first.  
Establece el marco para continuar con:

```text
Familia 12 · Entrega final, portafolio, metadatos y exportabilidad local-first
```

---

## 35. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- lenguaje queda definido como infraestructura pedagógica, ética y técnica;
- glosario heredado queda preservado y sujeto a transformación;
- categorías heredadas quedan preservadas;
- categorías v0.7.0 quedan propuestas como candidatas;
- términos heredados sensibles quedan identificados para transformación;
- términos nuevos candidatos quedan propuestos;
- lenguaje punitivo y vigilante queda bloqueado;
- estados formativos deben ser no punitivos;
- ayudas contextuales deben orientar acción humana;
- advertencias deben ser cuidadas;
- recomendado, usado, aprobado e integrado deben distinguirse;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la duodécima familia del mapa:

```text
Entrega final, portafolio, metadatos y exportabilidad local-first
```

No autoriza código, reescritura directa de `glossary.json`, UI final, tooltips, backend, APIs, IA embebida, despliegue, datos reales ni validación con personas.
