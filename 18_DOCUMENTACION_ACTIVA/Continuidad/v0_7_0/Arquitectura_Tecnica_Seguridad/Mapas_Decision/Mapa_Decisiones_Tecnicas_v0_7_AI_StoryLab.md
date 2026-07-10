# Mapa de Decisiones Técnicas · AI StoryLab 1 v0.7.0

**Nombre canónico previsto:** `Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Tipo de documento:** Documento sustantivo inicial · mapa rector de decisiones técnicas  
**Estado:** Aprobado por revisión humana explícita para integración canónica semántica  
**Fecha de trabajo:** 2026-07-09  
**Zona horaria de referencia:** America/Puerto_Rico  
**Fuente canónica inmediata:** PR #22 merged  
**Merge commit PR #22:** `1e2b62856a1cc0ed7cb66c9acdd9ab375879e16a`  

---

## Nota protocolaria de trabajo

Este archivo se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.  
En el repositorio, el archivo deberá integrarse únicamente con su **nombre canónico semántico**, sin sufijos de estado:

```text
Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La fase `AI StoryLab 1 v0.7.0 · Arquitectura Técnica + Seguridad` queda formalmente abierta como fase documental, estratégica y técnica-conceptual posterior al merge de PR #22.

Esta fase debe trabajar desde dos fuerzas simultáneas:

1. **Principios rectores superiores:** local-first, privacidad por defecto, seguridad por diseño, agencia humana, no vigilancia, no ranking, no monitoreo continuo y no facilitador como administrador total.
2. **Herencia material del MVP v0.3:** misiones, prompts sugeridos, tablero de herramientas, glosario, portafolio emergente, entrega MP4, metadatos de entrega, `localStorage`, export/import JSON y dashboard grupal sin backend.

La fase **no autoriza**:

- implementación de código;
- selección de stack final;
- activación de backend;
- activación de APIs productivas;
- integración de IA embebida;
- despliegue;
- uso de datos reales;
- validación con personas;
- monitoreo continuo;
- ranking estudiantil;
- vigilancia;
- conversión del facilitador en administrador total.

El propósito de este documento es ordenar las decisiones técnicas que deberán discutirse durante v0.7.0, no resolverlas prematuramente.

---

## 1. Propósito del documento

Este mapa establece la estructura inicial para identificar, clasificar y gobernar las decisiones técnicas de `AI StoryLab 1 v0.7.0`.

Su función es:

- organizar familias de decisiones técnicas;
- distinguir decisiones abiertas, candidatas, diferidas y bloqueadas;
- preservar los principios rectores del proyecto;
- evitar selección prematura de stack;
- prevenir deriva hacia vigilancia, ranking o administración total;
- conectar arquitectura técnica con seguridad, privacidad, agencia humana y continuidad hacia `v1.0.0`;
- convertir la herencia del MVP v0.3 en insumo explícito, no en residuo histórico;
- mantener visible la deuda `DFUX-FAC-v0.6-001` como insumo obligatorio.

---

## 2. Correcciones estratégicas incorporadas en Borrador 3

Este borrador amplía el Borrador 2 con cinco ajustes mayores:

1. **POO y SOLID** se incorporan como criterios de arquitectura modular y objetos de dominio, no como implementación ni diseño final de clases.
2. **Herramientas del MVP v0.3** pasan a ser familia de decisión propia, por su relación con privacidad, prompts, notas docentes, recursos externos y gobernanza institucional.
3. **Glosario del MVP v0.3** pasa a ser familia de decisión propia, por su función como lenguaje canónico, ayuda contextual y capa de accesibilidad conceptual.
4. **Entrega final, portafolio y metadatos** se separan de exportabilidad genérica, porque constituyen un cierre pedagógico, ético, técnico y documental.
5. **Herencia funcional del MVP v0.3** se convierte en familia de decisión para asegurar trazabilidad entre lo ya existente y la arquitectura futura.

---

## 3. Alcance

Este documento incluye:

- mapa de familias de decisión;
- criterios de análisis técnico-ético;
- dependencias entre documentos posteriores;
- riesgos iniciales;
- controles documentales;
- decisiones explícitamente no tomadas;
- relación con la Vista del Facilitador;
- relación con herramientas, glosario, prompts, portafolio y entrega del MVP v0.3;
- criterios conceptuales para arquitectura modular, POO y SOLID;
- ruta sugerida para documentos siguientes.

---

## 4. Fuera de alcance

Este documento no:

- selecciona tecnologías finales;
- compara frameworks para elegir uno;
- diseña base de datos productiva;
- define APIs productivas;
- activa backend;
- define infraestructura de despliegue;
- integra modelos de IA;
- diseña experimentos con usuarios;
- usa datos reales;
- diseña clases finales;
- implementa patrones de código;
- resuelve definitivamente la Vista del Facilitador;
- cierra la deuda `DFUX-FAC-v0.6-001`.

---

## 5. Fuentes canónicas de entrada

| Fuente | Estado | Uso en este documento |
|---|---:|---|
| PR #22 | Merged | Apertura documental de v0.7.0 |
| Merge commit `1e2b62856a1cc0ed7cb66c9acdd9ab375879e16a` | Confirmado | Punto de partida post-merge |
| Kit de continuidad post PR #22 | Activo como insumo | Protocolo y límites iniciales |
| Matriz de decisiones técnicas iniciales v0.7.0 | Activa como insumo | Familias iniciales de decisión |
| Registro de deudas, riesgos y controles v0.7.0 | Activo como insumo | Riesgos y deuda crítica |
| Deuda `DFUX-FAC-v0.6-001` | Activa | Condiciona roles, visibilidad, trazabilidad y privacidad |
| MVP v0.3 histórico | Insumo obligatorio | Herramientas, glosario, prompts, portafolio, entrega, local-first y dashboard |
| Constitución SDD v0.4.4 | Marco rector | Bloqueo de implementación prematura y especificación antes de código |
| Ruta v0.7.0 → v1.0.0 | Activa | Orienta continuidad estratégica |

---

## 6. Herencia MVP v0.3 como insumo obligatorio

El MVP v0.3 no debe tratarse como prototipo descartable ni como implementación a replicar sin juicio. Debe analizarse como **depósito de decisiones funcionales, pedagógicas y técnicas** que v0.7.0 debe extraer, cuestionar, preservar, transformar o bloquear.

### Elementos heredados relevantes

| Elemento heredado | Valor para v0.7.0 | Riesgo si se ignora |
|---|---|---|
| 9 misiones | Estructura pedagógica de flujo | Arquitectura desconectada del recorrido real |
| Prompts sugeridos por misión | Andamiaje externo de IA no embebida | IA tratada como abstracción sin práctica concreta |
| Registro de evidencia | Base de portafolio y trazabilidad | Pérdida de continuidad formativa |
| Decisión humana documentada | Protección de agencia | Sustitución invisible por IA |
| Reflexión ética | Núcleo de IA responsable | Uso instrumental sin pensamiento crítico |
| Glosario de 43 términos | Lenguaje canónico y ayuda contextual | Fragmentación conceptual |
| Tablero de herramientas | Orientación técnica-pedagógica | Stack o herramientas elegidas sin privacidad |
| Niveles de privacidad de herramientas | Clasificación inicial de riesgo | Recursos externos sin advertencias |
| Portafolio emergente | Continuidad de evidencia | Entrega final desconectada del proceso |
| Entrega MP4 + metadatos | Cierre pedagógico-técnico | Exportabilidad tratada como trámite |
| `localStorage` | Evidencia local-first histórica | Pérdida de autonomía local |
| Export/import JSON | Portabilidad inicial | Dependencia prematura de backend |
| Dashboard grupal sin backend | Herencia problemática para facilitador | Vigilancia o administración total |

### Criterio de extracción

Cada elemento heredado debe clasificarse como:

| Estado | Significado |
|---|---|
| Preservar | Mantener como principio o función conceptual. |
| Transformar | Adaptar a nueva arquitectura, seguridad o privacidad. |
| Diferir | Conservar como posibilidad posterior. |
| Bloquear | No permitir por riesgo ético, técnico o de seguridad. |
| Auditar | Requiere revisión antes de decidir. |

---

## 7. Principios no negociables

Toda decisión técnica de v0.7.0 debe evaluarse contra estos principios:

| Principio | Criterio operativo |
|---|---|
| Local-first | Lo esencial debe poder vivir localmente o bajo control cercano del usuario/institución antes de depender de servicios externos. |
| Privacidad por defecto | El sistema debe minimizar datos desde el diseño, no añadir privacidad como barniz tardío. |
| Seguridad por diseño | Cada decisión técnica debe anticipar riesgos, permisos, abuso, exposición y fallos. |
| Agencia humana | El sistema debe ampliar criterio y creación humana, no sustituirlos ni ocultarlos. |
| No vigilancia | Ninguna vista o registro debe transformarse en observación continua de estudiantes. |
| No ranking estudiantil | El sistema no debe ordenar, comparar o perfilar estudiantes como métrica competitiva. |
| No monitoreo continuo | La trazabilidad debe ser puntual, formativa y justificada. |
| Facilitador no administrador total | El facilitador acompaña, orienta y cuida; no controla todo ni accede a todo. |
| Vista del Facilitador como hito ético-técnico | Su diseño debe demostrar calidad funcional, seguridad, privacidad y ética pedagógica. |
| Especificación antes de implementación | Ninguna solución técnica avanza solo porque sea posible. |
| Modularidad responsable | La arquitectura debe separar responsabilidades sin crear complejidad ornamental. |

---

## 8. Estados de decisión

Para evitar cierres prematuros, cada decisión será clasificada en uno de estos estados:

| Estado | Definición | Puede pasar a implementación |
|---|---|---:|
| Abierta | Requiere discusión y análisis. | No |
| Candidata | Tiene criterios preliminares, pero no aprobación final. | No |
| Diferida | Debe resolverse en documento posterior o fase futura. | No |
| Bloqueada | No puede tomarse en v0.7.0 por límite explícito. | No |
| Aprobada documentalmente | Cuenta con aprobación humana para integrarse como criterio o definición. | No, salvo que otra fase autorice implementación |
| Deuda activa | Debe mantenerse visible hasta cierre explícito. | No |
| Heredada en auditoría | Existe en MVP previo y debe clasificarse antes de preservarse. | No |

---

## 9. Mapa ejecutivo de familias de decisión

| # | Familia | Pregunta rectora | Estado inicial | Documento posterior probable |
|---:|---|---|---|---|
| 1 | Herencia funcional MVP v0.3 | ¿Qué se preserva, transforma, difiere o bloquea del MVP histórico? | Abierta | `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md` |
| 2 | Arquitectura local-first | ¿Qué debe vivir localmente y con qué límites? | Abierta | `Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md` |
| 3 | Modelo conceptual de datos | ¿Qué datos se evitan, minimizan, abstraen o retienen? | Abierta | `Modelo_Datos_Conceptual_Privacidad_v0_7_AI_StoryLab.md` |
| 4 | Roles y permisos | ¿Qué puede ver y hacer cada subjetividad? | Abierta | `Modelo_Roles_Permisos_v0_7_AI_StoryLab.md` |
| 5 | Vista del Facilitador | ¿Qué visibilidad formativa es necesaria sin vigilancia? | Abierta · deuda activa | `Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md` |
| 6 | Seguridad por diseño | ¿Qué amenazas y controles deben anticiparse? | Abierta | `Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md` |
| 7 | Privacidad por defecto | ¿Qué se oculta, no se recopila o se protege desde origen? | Abierta | `Modelo_Privacidad_Minimizacion_v0_7_AI_StoryLab.md` |
| 8 | Trazabilidad formativa | ¿Qué eventos pueden registrarse sin monitoreo continuo? | Abierta | `Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md` |
| 9 | Prompts recomendados e IA no embebida | ¿Cómo orientar el uso externo y voluntario de IA mediante prompts sugeridos y documentación del proceso? | Abierta · uso externo documentado | `Prompts_Recomendados_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md` |
| 10 | Ecosistema de herramientas | ¿Cómo orientar herramientas externas sin convertirlas en integraciones automáticas? | Abierta | `Ecosistema_Herramientas_Recursos_Externos_v0_7_AI_StoryLab.md` |
| 11 | Glosario operativo | ¿Cómo sostener lenguaje canónico, accesibilidad conceptual y ayudas contextuales? | Abierta | `Glosario_Operativo_Lenguaje_Canonico_v0_7_AI_StoryLab.md` |
| 12 | Entrega, portafolio y metadatos | ¿Cómo cerrar el proceso con evidencia, autoría y exportabilidad local-first? | Abierta | `Entrega_Portafolio_Metadatos_v0_7_AI_StoryLab.md` |
| 13 | Arquitectura modular, POO y SOLID | ¿Qué objetos de dominio y responsabilidades deben reconocerse antes del código? | Abierta · pre-implementativa | `Arquitectura_Modular_Objetos_Dominio_SOLID_v0_7_AI_StoryLab.md` |
| 14 | Gobernanza técnica hacia v1.0.0 | ¿Qué decisiones preparan estabilidad sin sobredimensionar v0.7.0? | Abierta | `Gobernanza_Tecnica_v0_7_a_v1_0_0_AI_StoryLab.md` |

---

## 10. Familia 1 · Herencia funcional MVP v0.3 y trazabilidad de extracción

### Pregunta rectora

¿Qué elementos del MVP v0.3 deben preservarse, transformarse, diferirse, bloquearse o auditarse antes de convertirse en arquitectura v0.7.0?

### Subdecisiones iniciales

- Identificar estructuras heredadas con valor canónico.
- Separar decisiones pedagógicas de decisiones técnicas accidentales.
- Determinar qué componentes fueron soluciones provisionales.
- Detectar elementos que contradicen principios actuales.
- Mapear deuda heredada hacia documentos v0.7.0.
- Establecer trazabilidad entre MVP v0.3, v0.6.0, PR #22 y v0.7.0.

### Elementos a auditar

| Elemento | Estado inicial sugerido |
|---|---|
| 9 misiones | Preservar como estructura pedagógica, auditar nomenclatura |
| Actividades lúdicas | Preservar y transformar |
| Prompt sugerido por misión | Preservar y gobernar |
| Registro de evidencia | Transformar con privacidad |
| Decisión humana obligatoria | Preservar |
| Reflexión ética | Preservar |
| Portafolio emergente | Preservar y rediseñar conceptualmente |
| Glosario | Preservar, normalizar y versionar |
| Herramientas | Preservar como orientación, no integración |
| Dashboard grupal | Auditar por riesgo de vigilancia |
| Export/import JSON | Preservar como principio de portabilidad, rediseñar seguridad |
| `localStorage` | Auditar como solución histórica local-first, no decisión final |
| Entrega MP4 | Preservar como tipo de entrega, no como único formato eterno |
| Metadatos de entrega | Preservar y fortalecer |

### Riesgos

- Repetir el MVP sin rediseño.
- Descartar aprendizajes funcionales valiosos.
- Heredar deuda sin nombrarla.
- Convertir soluciones temporales en arquitectura permanente.
- Invisibilizar la tensión entre dashboard grupal y no vigilancia.

### Estado

Abierta. Requiere auditoría específica de herencia funcional.

---

## 11. Familia 2 · Arquitectura local-first

### Pregunta rectora

¿Qué partes de AI StoryLab 1 deben operar localmente, bajo control directo del usuario o de la institución, antes de depender de servicios remotos?

### Subdecisiones iniciales

- Determinar qué contenido debe estar disponible sin conexión.
- Definir qué datos nunca deben salir del entorno local.
- Separar experiencia local, sincronización futura y servicios remotos opcionales.
- Identificar qué funciones pueden degradarse de manera segura si no hay conexión.
- Definir controles de portabilidad para evitar encierro tecnológico.
- Evaluar la herencia `localStorage` y export/import JSON sin convertirlas automáticamente en decisiones finales.

### Riesgos

- Convertir local-first en consigna estética sin consecuencias técnicas.
- Diseñar dependencias remotas invisibles.
- Crear una arquitectura local que luego no pueda sincronizarse responsablemente.
- Sobredimensionar capacidades locales antes de conocer necesidades reales.
- Mantener `localStorage` como solución final sin auditoría.

### Criterios iniciales

- Lo pedagógicamente esencial debe tener prioridad local.
- Lo sensible debe minimizar exposición externa.
- Toda sincronización futura debe ser explícita, reversible y auditable.
- La experiencia local no debe convertirse en silo cerrado.
- La portabilidad debe sostener agencia humana.

### Estado

Abierta. Requiere documento conceptual propio.

---

## 12. Familia 3 · Modelo conceptual de datos

### Pregunta rectora

¿Qué datos necesita AI StoryLab 1 para funcionar, cuáles debe evitar y cuáles deben abstraerse para proteger privacidad, agencia y seguridad?

### Subdecisiones iniciales

- Definir categorías de datos: contenido creativo, evidencias, bitácoras, configuración, progreso, permisos, glosario, herramientas, prompts, metadatos de entrega.
- Distinguir datos individuales, grupales, institucionales y técnicos.
- Identificar datos prohibidos o no necesarios.
- Definir minimización, retención, exportación y eliminación.
- Evitar inferencias sensibles o perfiles conductuales.
- Separar datos de proceso creativo de datos de comportamiento.
- Distinguir archivo final, metadatos de entrega y portafolio.

### Riesgos

- Recopilar datos “por si acaso”.
- Tratar evidencia formativa como métrica de vigilancia.
- Crear trazas demasiado detalladas.
- Permitir inferencias sobre rendimiento, conducta, personalidad o vulnerabilidad.
- Mezclar prompts, reflexiones, outputs y evaluaciones en una masa sin control.

### Criterios iniciales

- Cada dato debe tener propósito explícito.
- Todo dato sensible debe justificar necesidad, acceso y retención.
- La ausencia de dato puede ser una decisión ética de diseño.
- La exportabilidad debe favorecer agencia humana.
- El modelo debe permitir documentación mínima de prompts y herramientas sin captura automática.

### Estado

Abierta. Requiere modelo conceptual sin base de datos productiva.

---

## 13. Familia 4 · Roles y permisos

### Pregunta rectora

¿Qué puede ver, hacer, editar, acompañar, exportar o auditar cada sujeto del ecosistema?

### Subjetividades mínimas

- estudiante de escuela superior;
- estudiante universitario;
- docente;
- investigador;
- facilitador;
- equipo técnico/documental;
- institución o programa, si aplica.

### Subdecisiones iniciales

- Definir permisos por rol sin jerarquía totalizante.
- Separar acompañamiento, evaluación, administración técnica y análisis.
- Evitar permisos globales innecesarios.
- Definir límites de visibilidad por contexto.
- Establecer consentimiento y control sobre evidencias.
- Determinar quién puede editar herramientas recomendadas, notas institucionales y glosario.
- Separar rol docente, facilitador, administrador técnico e investigador.

### Riesgos

- Diseñar un facilitador con acceso total.
- Confundir acompañamiento pedagógico con supervisión.
- Permitir visibilidad grupal que exponga individuos.
- Convertir permisos administrativos en poder pedagógico absoluto.
- Permitir edición institucional de herramientas sin gobernanza.

### Criterios iniciales

- Mínimo privilegio.
- Separación de responsabilidades.
- Transparencia de visibilidad.
- Control humano sobre compartir evidencias.
- Revocabilidad cuando aplique.
- Edición de contenidos institucionales con trazabilidad documental.

### Estado

Abierta. Vinculada directamente con `DFUX-FAC-v0.6-001`.

---

## 14. Familia 5 · Vista del Facilitador

### Pregunta rectora

¿Qué necesita ver el facilitador para acompañar de forma formativa sin vigilar, rankear ni monitorear continuamente?

### Relación con deuda activa

La deuda `DFUX-FAC-v0.6-001` permanece activa porque la Vista del Facilitador heredada del MVP v0.3 quedó parcialmente invisibilizada y no está resuelta técnicamente.

No debe cerrarse hasta definir:

- propósito formativo de la vista;
- visibilidad mínima necesaria;
- roles y permisos;
- controles contra vigilancia;
- trazabilidad formativa;
- límites de administración;
- protección de estudiantes;
- relación con privacidad local-first;
- relación con dashboard grupal heredado;
- manejo de export/import JSON o equivalentes futuros.

### Subdecisiones iniciales

- Definir qué información agregada puede ser útil sin exponer individuos innecesariamente.
- Definir cuándo una alerta es orientación y cuándo se vuelve monitoreo.
- Determinar qué acciones puede iniciar el facilitador.
- Determinar qué acciones requieren consentimiento o mediación humana.
- Evitar métricas comparativas entre estudiantes.
- Replantear el dashboard grupal sin backend desde criterios de no vigilancia.
- Separar respaldo, acompañamiento y análisis institucional.

### Riesgos

- Dashboard de vigilancia con nombre pedagógico.
- Ranking encubierto.
- Alertas permanentes.
- Facilitador convertido en administrador total.
- Invisibilización del estudiante como agente.
- Importación de JSON grupal como mecanismo de monitoreo.

### Criterios iniciales

- Visibilidad mínima necesaria.
- Foco en acompañamiento, no control.
- No ranking.
- No monitoreo continuo.
- No acceso total.
- Capacidad de explicar por qué algo es visible.
- Diseño comprensible para estudiantes y docentes.
- Toda agregación debe evitar exposición indebida.

### Estado

Abierta · deuda crítica activa. Debe convertirse en hito de calidad técnica, ética, funcional, de seguridad y privacidad.

---

## 15. Familia 6 · Seguridad por diseño

### Pregunta rectora

¿Qué amenazas, errores, abusos y exposiciones debe anticipar la arquitectura antes de cualquier implementación?

### Subdecisiones iniciales

- Definir modelo inicial de amenazas.
- Identificar superficies de exposición futura.
- Diseñar separación entre datos, roles y vistas.
- Definir controles de acceso conceptuales.
- Establecer criterios de seguridad para futuras dependencias.
- Definir manejo de errores sin exposición de datos.
- Evaluar riesgos de export/import JSON.
- Evaluar riesgos de herramientas externas y cuentas de terceros.
- Evaluar riesgos de archivos finales, metadatos y recursos multimedia.

### Riesgos

- Diseñar seguridad como checklist posterior.
- Confiar en permisos implícitos.
- Exponer metadatos sensibles.
- Habilitar exportaciones inseguras.
- Permitir acumulación de privilegios.
- Documentar prompts o herramientas externas de forma que exponga identidad o información sensible.

### Criterios iniciales

- Mínimo privilegio.
- Defensa en profundidad.
- Transparencia de acceso.
- Registro mínimo y justificado.
- Seguridad proporcional al riesgo.
- Documentación antes de implementación.
- Seguridad en exportación, importación, edición institucional y entrega final.

### Estado

Abierta. Requiere documento específico de seguridad conceptual.

---

## 16. Familia 7 · Privacidad por defecto

### Pregunta rectora

¿Qué debe quedar protegido, oculto, minimizado, abstraído o no recopilado desde el diseño?

### Subdecisiones iniciales

- Definir categorías de privacidad.
- Establecer datos no recopilables en v0.7.0.
- Definir criterios para anonimización, seudonimización o agregación.
- Separar privacidad individual, grupal e institucional.
- Definir límites de observabilidad técnica.
- Clasificar herramientas por nivel de privacidad.
- Definir advertencias antes de usar herramientas externas.
- Evitar almacenamiento innecesario de prompts completos.
- Proteger metadatos de entrega.

### Riesgos

- Recopilar evidencias formativas como datos de rendimiento.
- Asociar creatividad con perfilado personal.
- Transformar bitácoras en vigilancia.
- Exponer menores o estudiantes vulnerables mediante metadatos.
- Sugerir herramientas “requiere cuenta” o “datos en la nube” sin advertencia.

### Criterios iniciales

- Privacidad como punto de partida.
- Datos mínimos.
- Propósito explícito.
- Retención limitada.
- Exportación controlada por agencia humana.
- No inferencias sensibles.
- Clasificación visible de privacidad por herramienta o recurso externo.

### Estado

Abierta. Debe coordinarse con modelo de datos, herramientas y Vista del Facilitador.

---

## 17. Familia 8 · Trazabilidad formativa no vigilante

### Pregunta rectora

¿Qué trazas son necesarias para aprendizaje, reflexión, continuidad y seguridad sin caer en monitoreo continuo?

### Subdecisiones iniciales

- Definir qué eventos pueden registrarse.
- Distinguir bitácora reflexiva, auditoría técnica y evidencia pedagógica.
- Determinar qué se registra localmente.
- Definir qué trazas son visibles para estudiantes, docentes o facilitadores.
- Diseñar mecanismos de revisión y exportación.
- Distinguir documentación de prompts, herramientas usadas, créditos y metadatos.
- Separar portafolio emergente de analíticas conductuales.

### Riesgos

- Registrar demasiados eventos.
- Convertir trazabilidad en cronómetro conductual.
- Medir presencia, velocidad o frecuencia como sustituto de aprendizaje.
- Hacer visibles patrones que puedan estigmatizar.
- Tratar uso de herramientas como indicador de rendimiento.

### Criterios iniciales

- Trazabilidad con propósito pedagógico o de seguridad explícito.
- No monitoreo continuo.
- No ranking.
- No vigilancia invisible.
- Derecho a comprender qué se registra.
- Separación entre reflexión personal y análisis institucional.
- La trazabilidad de prompts y herramientas debe sostener transparencia, no control.

### Estado

Abierta. Debe producir documento propio.

---

## 18. Familia 9 · Prompts recomendados, documentación de prompts del usuario e IA no embebida

### Dictamen de corrección

Esta familia no debe formularse principalmente como “IA futura” en abstracto.

La decisión previamente acordada para AI StoryLab 1 es más precisa:

- no habrá IA interna, embebida o productiva dentro de la aplicación en esta fase;
- el sistema no debe asumir llamadas externas a modelos de IA dentro de sus flujos funcionales;
- la IA puede aparecer como práctica externa, voluntaria y elegida por la persona usuaria;
- el sistema puede ofrecer **prompts recomendados** como apoyo pedagógico-creativo;
- el usuario puede documentar los prompts que decidió usar, junto con reflexión, evidencia y decisiones humanas;
- conversaciones con chatbots, documentos cloud o herramientas externas se tratan como **referencias externas registradas manualmente**, no como conexiones automáticas, importaciones silenciosas o integraciones productivas.

### Pregunta rectora

¿Cómo debe AI StoryLab 1 orientar, registrar y reflexionar sobre el uso externo de IA mediante prompts recomendados y documentación de prompts del usuario, sin integrar IA embebida ni automatizar flujos funcionales?

### Alcance permitido en v0.7.0

Durante v0.7.0 se permite diseñar conceptualmente:

- una biblioteca o banco de prompts recomendados;
- prompts por misión, fase, nivel de complejidad o tipo de evidencia;
- guías de uso responsable de prompts;
- campos de documentación para prompts usados por el usuario;
- criterios para registrar proceso, decisión humana y reflexión ética;
- advertencias de privacidad antes de usar herramientas externas;
- criterios para no copiar datos sensibles en servicios externos;
- plantillas de bitácora para documentar interacción con IA externa;
- límites entre sugerencia pedagógica y automatización;
- relación entre prompts de misión y prompts por categoría de herramienta.

### Fuera de alcance

Esta familia no autoriza:

- integrar modelos de IA en la aplicación;
- conectar APIs de IA;
- enviar datos reales a herramientas externas;
- importar automáticamente conversaciones de chatbot;
- sincronizar documentos cloud;
- procesar outputs de IA dentro de flujos productivos;
- generar recomendaciones automáticas sobre estudiantes;
- evaluar estudiantes mediante IA;
- convertir prompts en instrucciones invisibles del sistema;
- tratar el uso de IA externa como obligatorio.

### Campos sugeridos para documentar prompts del usuario

| Campo | Propósito | Riesgo a evitar |
|---|---|---|
| Propósito del prompt | Explicar para qué se usó IA externa. | Uso opaco o decorativo. |
| Prompt usado o resumen | Documentar la intención sin obligar a revelar información sensible. | Exponer datos personales o contenido privado. |
| Herramienta externa usada | Registrar contexto de producción. | Asumir integración automática. |
| Tipo de resultado obtenido | Indicar si fue texto, imagen, sonido, estructura, idea o retroalimentación. | Confundir output con autoría final. |
| Decisión humana | Explicar qué aceptó, editó, rechazó o transformó la persona. | Sustitución de agencia humana. |
| Reflexión ética | Identificar sesgos, privacidad, atribución, límites o dudas. | Uso acrítico de IA. |
| Evidencia asociada | Conectar el uso con portafolio o misión. | Acumular trazas innecesarias. |
| Nivel de sensibilidad | Señalar si hubo riesgo de datos personales o institucionales. | Copia de información sensible en herramientas externas. |

Estos campos deben diseñarse bajo minimización. No todo uso de IA requiere guardar el prompt completo.

### Estado

Abierta · uso externo documentado.

---

## 19. Familia 10 · Ecosistema de herramientas, recursos externos y notas institucionales

### Pregunta rectora

¿Cómo debe AI StoryLab 1 orientar el uso de herramientas externas sin convertirlas en integraciones automáticas, dependencias obligatorias o canales de exposición de datos?

### Contexto heredado

El MVP v0.3 ya contenía un tablero de herramientas con:

- tipos de herramienta;
- niveles de dificultad;
- niveles de privacidad;
- categorías por fase;
- estrategias de uso;
- prompts recomendados;
- lista de herramientas;
- ejemplos;
- notas editables del profesor.

Esta estructura debe tratarse como insumo técnico-pedagógico importante.

### Subdecisiones iniciales

- Definir si el tablero de herramientas será contenido estático, configurable o gobernado institucionalmente.
- Determinar quién puede editar notas institucionales.
- Definir cómo versionar herramientas recomendadas.
- Mantener clasificación de privacidad clara.
- Distinguir herramientas locales, herramientas con cuenta y herramientas con datos en la nube.
- Separar recomendación de herramienta de integración técnica.
- Diseñar advertencias de privacidad y atribución.
- Determinar relación con prompts recomendados.
- Definir cómo documenta el usuario qué herramienta usó.
- Evitar endorsement institucional accidental de servicios externos.

### Riesgos

- Convertir herramientas recomendadas en stack obligatorio.
- Sugerir servicios externos sin advertir riesgos de privacidad.
- Tratar “requiere cuenta” como detalle menor.
- Permitir notas docentes sin trazabilidad.
- Depender de herramientas comerciales cambiantes.
- Introducir desigualdad de acceso entre estudiantes.
- Confundir tablero de herramientas con marketplace o integración.

### Criterios iniciales

- El tablero orienta, no ejecuta.
- Las herramientas externas son opcionales y contextuales.
- Todo recurso externo debe tener nivel de privacidad visible.
- La nota institucional debe ser editable con gobernanza.
- El sistema debe permitir alternativas locales o de baja fricción.
- El uso de herramienta debe documentarse como parte de transparencia, no como métrica de rendimiento.
- Las recomendaciones deben poder actualizarse sin romper evidencia histórica.

### Documento posterior recomendado

```text
Ecosistema_Herramientas_Recursos_Externos_v0_7_AI_StoryLab.md
```

### Estado

Abierta. Prioridad alta por relación con privacidad, prompts, experiencia docente y entrega final.

---

## 20. Familia 11 · Glosario operativo, lenguaje canónico y ayudas contextuales

### Pregunta rectora

¿Cómo debe AI StoryLab 1 sostener un lenguaje común, accesible y versionado para guiar decisiones pedagógicas, técnicas, éticas y creativas?

### Contexto heredado

El MVP v0.3 incluía un glosario estructurado con:

- `schema_version`;
- categorías;
- términos;
- relación con sesiones;
- etiquetas;
- definiciones breves;
- conceptos asociados a IA, ética, narrativa, multimedia, derechos, diseño visual, sonido y evaluación.

Este glosario es más que una lista de términos. Es una capa de comprensión, accesibilidad y consistencia pedagógica.

### Subdecisiones iniciales

- Definir si el glosario será contenido canónico versionado.
- Determinar relación entre glosario y misiones.
- Definir si los términos pueden variar por nivel educativo.
- Establecer gobernanza de edición.
- Diferenciar glosario pedagógico, glosario técnico y glosario institucional.
- Definir ayudas contextuales en interfaz sin sobrecarga.
- Evaluar relación con accesibilidad cognitiva y lenguaje claro.
- Determinar qué términos son obligatorios para seguridad y privacidad.

### Riesgos

- Fragmentar lenguaje entre documentos, interfaz y guías.
- Crear definiciones contradictorias.
- Usar lenguaje técnico inaccesible.
- Convertir el glosario en decoración sin función.
- No versionar cambios terminológicos.
- Mezclar conceptos pedagógicos y técnicos sin claridad.

### Criterios iniciales

- El glosario debe ser semántico, estable y versionado.
- Las definiciones deben ser breves, comprensibles y situadas.
- Los términos críticos de privacidad, IA y autoría deben aparecer cerca de decisiones sensibles.
- El glosario debe apoyar agencia, no infantilizar.
- Las ayudas contextuales deben poder crecer sin invadir la experiencia creativa.

### Documento posterior recomendado

```text
Glosario_Operativo_Lenguaje_Canonico_v0_7_AI_StoryLab.md
```

### Estado

Abierta. Prioridad media-alta por impacto en experiencia, accesibilidad y coherencia documental.

---

## 21. Familia 12 · Entrega final, portafolio, metadatos y exportabilidad local-first

### Pregunta rectora

¿Cómo debe AI StoryLab 1 cerrar el proceso creativo con evidencia, autoría, transparencia, portabilidad y protección de privacidad?

### Contexto heredado

El MVP v0.3 estableció una entrega final como video MP4 con VoiceOver, acompañada por metadatos. También incluyó portafolio emergente, export/import JSON y registro local. Esta familia transforma la exportabilidad en un problema pedagógico-técnico completo.

### Subdecisiones iniciales

- Definir qué constituye una entrega final.
- Separar archivo final, evidencia, portafolio y metadatos.
- Determinar si MP4 es formato principal, ejemplo o uno de varios formatos.
- Definir metadatos mínimos de entrega.
- Incluir declaración de uso de IA.
- Registrar herramientas usadas sin exponer datos sensibles.
- Definir créditos, licencias y atribuciones.
- Definir exportación local del portafolio.
- Determinar si se preserva import/export JSON como principio o mecanismo.
- Evitar subida automática de archivos o videos.
- Definir relación con la Vista del Facilitador.

### Riesgos

- Almacenar archivos finales sin autorización.
- Exponer datos personales en metadatos.
- Tratar entrega como simple upload.
- Mezclar evidencia formativa con evaluación o ranking.
- Hacer obligatoria una herramienta o formato.
- Automatizar portafolio sin permitir revisión humana.

### Criterios iniciales

- El cierre debe preservar autoría humana.
- La declaración de IA debe ser transparente y comprensible.
- Los metadatos deben ser mínimos, útiles y controlados.
- La exportación debe favorecer portabilidad.
- Ningún archivo final debe subirse automáticamente.
- El portafolio debe poder revisarse, editarse y exportarse por decisión humana.
- La entrega no debe habilitar vigilancia ni comparación.

### Documento posterior recomendado

```text
Entrega_Portafolio_Metadatos_v0_7_AI_StoryLab.md
```

### Estado

Abierta. Prioridad alta por ser cierre del ciclo formativo.

---

## 22. Familia 13 · Arquitectura modular, objetos de dominio, POO y principios SOLID

### Pregunta rectora

¿Qué objetos de dominio, responsabilidades y fronteras modulares deben reconocerse conceptualmente antes de cualquier implementación?

### Dictamen de fase

La Programación Orientada a Objetos y los principios SOLID pertenecen a v0.7.0 como **criterios de arquitectura conceptual y calidad futura**, no como implementación.

v0.7.0 puede definir:

- objetos de dominio candidatos;
- responsabilidades;
- límites de módulos;
- criterios de cohesión;
- criterios de acoplamiento;
- responsabilidades únicas;
- dependencias a evitar;
- eventos conceptuales;
- interfaces conceptuales futuras.

v0.7.0 no puede definir:

- clases finales;
- archivos de código;
- framework;
- librerías;
- patrón irreversible;
- implementación productiva.

### Objetos de dominio candidatos

Estos objetos no son clases finales. Son candidatos conceptuales para discusión:

| Objeto de dominio candidato | Responsabilidad conceptual |
|---|---|
| Proyecto creativo | Agrupar misión, evidencias, portafolio y entrega. |
| Misión | Representar etapa del proceso pedagógico-creativo. |
| Evidencia | Documentar producción, decisión humana y reflexión. |
| Prompt recomendado | Servir como andamiaje externo no embebido. |
| Prompt usado | Registrar uso voluntario de IA externa con minimización. |
| Herramienta | Orientar recursos externos con privacidad y dificultad. |
| Categoría de herramienta | Agrupar estrategias, prompts y notas institucionales. |
| Término de glosario | Proveer definición contextual y lenguaje canónico. |
| Portafolio | Reunir evidencias revisables y exportables. |
| Entrega final | Registrar cierre, formato y metadatos. |
| Metadato de entrega | Sostener autoría, créditos, licencia y declaración IA. |
| Rol | Determinar permisos y visibilidad. |
| Permiso | Definir acción o acceso mínimo. |
| Vista del Facilitador | Presentar acompañamiento formativo sin vigilancia. |
| Bitácora | Registrar continuidad documental, no monitoreo conductual. |
| Deuda | Mantener problemas activos hasta cierre explícito. |

### Relación con SOLID

| Principio | Traducción conceptual para v0.7.0 |
|---|---|
| Responsabilidad única | Cada módulo conceptual debe tener una razón clara para existir. |
| Abierto/cerrado | La arquitectura debe permitir extensión sin alterar núcleos sensibles. |
| Sustitución de Liskov | Las variantes futuras no deben romper expectativas éticas o funcionales. |
| Segregación de interfaces | Los roles no deben recibir permisos o vistas que no necesitan. |
| Inversión de dependencias | Las decisiones de alto nivel no deben depender de herramientas externas concretas. |

### Riesgos

- Convertir POO/SOLID en excusa para empezar código.
- Sobrearquitectura antes de comprender flujo pedagógico.
- Definir objetos desde estructura técnica y no desde experiencia humana.
- Acoplar objetos a herramientas externas específicas.
- Crear abstracciones que oculten vigilancia o permisos excesivos.

### Criterios iniciales

- Primero dominio, luego implementación.
- Primero responsabilidades humanas, luego módulos técnicos.
- Primero límites éticos, luego patrones.
- Los objetos candidatos deben mapearse a riesgos, datos, roles y evidencias.
- SOLID debe usarse como brújula de claridad, no como religión de arquitectura.

### Documento posterior recomendado

```text
Arquitectura_Modular_Objetos_Dominio_SOLID_v0_7_AI_StoryLab.md
```

### Estado

Abierta · pre-implementativa.

---

## 23. Familia 14 · Gobernanza técnica hacia v1.0.0

### Pregunta rectora

¿Qué decisiones debe tomar v0.7.0 para preparar v1.0.0 sin sobredimensionar la arquitectura ni cerrar posibilidades prematuramente?

### Subdecisiones iniciales

- Definir gates técnicos futuros.
- Identificar documentos obligatorios antes de prototipo.
- Crear criterios de madurez.
- Distinguir decisiones reversibles e irreversibles.
- Establecer controles de versionado y aprobación.
- Determinar cuándo una decisión pasa de conceptual a especificación.
- Determinar cuándo una especificación puede preparar implementación.
- Mantener línea de continuidad desde MVP v0.3 hasta v1.0.0.

### Riesgos

- Convertir v0.7.0 en implementación encubierta.
- Cerrar stack antes de conocer requisitos ético-técnicos.
- Crear documentos sin trazabilidad hacia decisiones.
- Llegar a v1.0.0 con deuda invisible.
- Saltar de objetos candidatos a clases finales.

### Criterios iniciales

- Documentar antes de construir.
- Aprobar antes de integrar.
- Mantener decisiones reversibles cuando sea posible.
- Registrar deuda.
- Definir gates claros hacia v0.8.0, v0.9.0 y v1.0.0.
- Conservar vínculo explícito entre arquitectura, seguridad, privacidad y experiencia pedagógica.

### Estado

Abierta. Debe sostener continuidad estratégica.

---

## 24. Decisiones explícitamente bloqueadas en este documento

Este documento bloquea las siguientes acciones durante su propia producción:

| Acción | Estado |
|---|---|
| Seleccionar stack final | Bloqueada |
| Crear backend | Bloqueada |
| Diseñar API productiva | Bloqueada |
| Integrar IA embebida | Bloqueada |
| Desplegar sistema | Bloqueada |
| Usar datos reales | Bloqueada |
| Validar con personas | Bloqueada |
| Crear dashboards de vigilancia | Bloqueada |
| Crear ranking estudiantil | Bloqueada |
| Activar monitoreo continuo | Bloqueada |
| Dar permisos totales al facilitador | Bloqueada |
| Diseñar clases finales | Bloqueada |
| Implementar POO | Bloqueada |
| Elegir framework por SOLID | Bloqueada |
| Integrar herramientas externas | Bloqueada |
| Subir archivos o videos | Bloqueada |
| Importar chats o documentos cloud automáticamente | Bloqueada |

---

## 25. Decisiones que sí pueden discutirse

Durante la revisión de este documento se permite discutir:

- criterios de local-first;
- límites de privacidad;
- amenazas conceptuales;
- familias de roles;
- necesidades mínimas del facilitador;
- clasificación de decisiones;
- documentos siguientes;
- relaciones entre seguridad, privacidad y experiencia pedagógica;
- criterios para diferir decisiones;
- definición de gates;
- lenguaje canónico;
- objetos de dominio candidatos;
- criterios POO/SOLID pre-implementativos;
- herencia del MVP v0.3;
- tablero de herramientas;
- glosario;
- portafolio;
- entrega final;
- metadatos;
- prompts recomendados y documentación de prompts del usuario.

---

## 26. Riesgos transversales

| Riesgo | Descripción | Control inicial |
|---|---|---|
| Implementación prematura | Convertir la fase documental en construcción técnica. | Bloqueo explícito de código, stack, clases y backend. |
| Vigilancia encubierta | Usar lenguaje formativo para justificar observación continua. | Criterios de no vigilancia y visibilidad mínima. |
| Ranking indirecto | Crear métricas que comparan estudiantes aunque no se llamen ranking. | Prohibición de comparación competitiva. |
| Sobrerrecolección | Guardar datos sin propósito inmediato. | Minimización y propósito explícito. |
| Facilitador administrador total | Dar acceso o control excesivo al facilitador. | Mínimo privilegio y separación de roles. |
| IA prematura | Diseñar o activar IA antes de autorización. | IA no embebida, solo prompts y documentación externa. |
| Pérdida de agencia | Sustituir juicio humano por automatización. | Decisiones humanas explícitas y reversibilidad. |
| Deuda invisible | Tratar problemas abiertos como resueltos. | Registro vivo de deudas y estados. |
| Herencia acrítica | Copiar MVP v0.3 sin auditoría. | Clasificación preservar-transformar-diferir-bloquear. |
| Herramientas como integración | Convertir recomendaciones en dependencias técnicas. | Tablero orientativo, no ejecución automática. |
| Glosario decorativo | Mantener términos sin función pedagógica real. | Lenguaje canónico vinculado a misiones y decisiones sensibles. |
| SOLID prematuro | Empezar diseño de clases antes de aprobar specs. | POO/SOLID solo como criterio conceptual. |
| Entrega como upload | Reducir cierre formativo a subida de archivo. | Entrega, metadatos y portafolio como cierre ético-técnico. |

---

## 27. Dependencias documentales propuestas

Este mapa recomienda producir después, en orden tentativo:

1. `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md`
2. `Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md`
3. `Modelo_Roles_Permisos_v0_7_AI_StoryLab.md`
4. `Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md`
5. `Modelo_Datos_Conceptual_Privacidad_v0_7_AI_StoryLab.md`
6. `Ecosistema_Herramientas_Recursos_Externos_v0_7_AI_StoryLab.md`
7. `Prompts_Recomendados_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md`
8. `Glosario_Operativo_Lenguaje_Canonico_v0_7_AI_StoryLab.md`
9. `Entrega_Portafolio_Metadatos_v0_7_AI_StoryLab.md`
10. `Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md`
11. `Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md`
12. `Arquitectura_Modular_Objetos_Dominio_SOLID_v0_7_AI_StoryLab.md`
13. `Gobernanza_Tecnica_v0_7_a_v1_0_0_AI_StoryLab.md`

Este orden no queda aprobado por este borrador. Solo se propone para discusión.

---

## 28. Criterios de aprobación humana de este documento

Para aprobar este mapa, la persona responsable debe confirmar explícitamente que:

- el alcance es correcto;
- los límites son suficientes;
- las familias de decisión están completas o aceptablemente abiertas;
- la deuda `DFUX-FAC-v0.6-001` queda correctamente preservada;
- la herencia MVP v0.3 queda correctamente incorporada;
- herramientas y glosario tienen tratamiento suficiente;
- entrega final, portafolio y metadatos quedan visibles;
- POO/SOLID quedan correctamente ubicados como criterios pre-implementativos;
- no se seleccionó stack final;
- no se activó implementación;
- la Vista del Facilitador quedó tratada como hito crítico, no como dashboard;
- el documento puede pasar de `_BORRADOR` a `_APROBADO` como marca de trabajo;
- el archivo final canónico en repo deberá subirse sin sufijo de estado.

---

## 29. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con su nombre canónico semántico.

```text
Hito: integra el Mapa de Decisiones Técnicas de AI StoryLab 1 v0.7.0 como primer documento sustantivo de Arquitectura Técnica + Seguridad.

El documento organiza las familias de decisiones técnicas, sus estados, riesgos, límites y dependencias hacia documentos posteriores, preservando local-first, privacidad por defecto, seguridad por diseño, agencia humana, no vigilancia, no ranking estudiantil, no monitoreo continuo y la deuda activa DFUX-FAC-v0.6-001.

Este mapa incorpora explícitamente la herencia funcional del MVP v0.3, incluyendo herramientas, glosario, prompts sugeridos, portafolio emergente, entrega final, metadatos, exportabilidad local-first y dashboard grupal como insumos a auditar. También ubica POO y principios SOLID como criterios pre-implementativos de arquitectura modular, sin autorizar diseño de clases ni código.

Este hito no implementa código, no selecciona stack final, no activa backend, APIs productivas, IA embebida, despliegue, datos reales ni validación con personas.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar mapa decisiones tecnicas v0.7" \
  -m "Hito: integra el primer documento sustantivo de v0.7.0 para organizar familias de decisiones tecnicas, limites, riesgos y dependencias. Incorpora herencia MVP v0.3, herramientas, glosario, entrega, prompts y criterios POO/SOLID pre-implementativos. No implementa codigo, no selecciona stack final, no activa backend, APIs productivas, IA embebida, despliegue, datos reales ni validacion con personas."
```

---

## 30. Preguntas estratégicas para revisión humana

Antes de redactar una versión aprobada, se recomienda revisar:

1. ¿La herencia MVP v0.3 debe ser el primer documento posterior o basta con que el mapa la incorpore?
2. ¿Herramientas y prompts deben ir en documentos separados o en un documento combinado?
3. ¿El glosario debe tratarse como contenido pedagógico, componente técnico o ambos?
4. ¿Entrega final y portafolio deben aparecer antes del modelo de datos?
5. ¿POO/SOLID deben quedar como familia propia o como criterio transversal?
6. ¿La Vista del Facilitador debe aparecer antes o después del modelo de roles/permisos?
7. ¿El dashboard grupal heredado debe pasar a auditoría de riesgo antes de cualquier rediseño?
8. ¿El formato MP4 debe seguir como formato principal o como ejemplo histórico?
9. ¿La nota docente editable de herramientas requiere un modelo de gobernanza propio?
10. ¿Hay que añadir una familia específica de accesibilidad universal y diseño inclusivo?
11. ¿Hay que añadir resiliencia institucional como familia separada o dentro de gobernanza técnica?
12. ¿Hay que crear una matriz preservar-transformar-diferir-bloquear para todos los elementos v0.3?

---

## 31. Dictamen de aprobación

Este documento queda aprobado como mapa rector inicial de decisiones técnicas de v0.7.0, con base completa y funcional para orientar documentos posteriores.

La versión incorpora:

- principios rectores;
- límites de fase;
- herencia MVP v0.3;
- herramientas;
- glosario;
- prompts recomendados;
- documentación de prompts del usuario;
- entrega final;
- portafolio;
- metadatos;
- exportabilidad local-first;
- Vista del Facilitador;
- POO/SOLID como criterios conceptuales;
- gobernanza hacia v1.0.0.

Esta aprobación no autoriza implementación.  
Esta aprobación autoriza usar este mapa como base para producir documentos técnicos conceptuales posteriores, uno por uno, bajo aprobación humana explícita.
