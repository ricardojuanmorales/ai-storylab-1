# Kit de Inicio de Sesión v0.7 · Arquitectura Técnica + Seguridad · AI StoryLab 1

**Versión de trabajo:** Preparación controlada post PR #21  
**Fase referida:** `v0.7 · Arquitectura Técnica + Seguridad`  
**Tipo de documento:** Kit de inicio de sesión y control metodológico  
**Estado:** Documento operativo inicial · NO activa v0.7  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**Rama de trabajo sugerida:** `docs/v0-7-preparacion-kit-inicio`  
**PR sugerido:** `docs: preparar kit inicio v0.7 arquitectura tecnica seguridad`  
**Ruta canónica:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Kit_Inicio_Sesion_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md`  
**Fecha de preparación:** 2026-07-09  
**Zona horaria de referencia:** America/Puerto_Rico  

---

## 0. Dictamen de entrada

Este kit prepara la activación controlada de `v0.7 · Arquitectura Técnica + Seguridad`, pero no activa la fase por sí solo.

La fase v0.7 queda en estado:

```yaml
v0_7:
  estado: no_activada
  arquitectura_final: no_definida
  stack_final: no_selecciona
  implementacion: no_autorizada
  codigo_productivo: no_autorizado
  backend: no_autorizado
  APIs: no_autorizadas
  IA_embebida: no_autorizada
  despliegue: no_autorizado
  datos_reales: no_autorizados
  validacion_con_personas: no_autorizada
  activacion_requiere_aprobacion_humana_explicita: true
```

Este documento debe funcionar como brújula y baranda: orienta el inicio de la conversación técnica, pero no permite saltar a construcción.

---

## 1. Verificación de continuidad GitHub

### 1.1 PR #20 · cierre documental condicionado de v0.6

```text
PR #20: closed
Merged: true
Draft: false
Commits: 15
Changed files: 21
Additions: 11192
Deletions: 0
Head SHA: 47c5ac43d1a9dfcbf158d5025f529e9fa0222de8
Merge commit SHA: baf56e202e384577a32a4054a97d5e8fa86896d6
Merged at: 2026-07-07T07:01:24Z
```

Dictamen:

```text
PR #20 queda confirmado como cierre documental condicionado de v0.6 · Diseño Funcional + UX.
```

### 1.2 PR #21 · auditoría documental post cierre v0.6 y pre apertura v0.7

```text
PR #21: closed
Merged: true
Draft: false
Commits: 8
Changed files: 10
Additions: 3168
Deletions: 0
Head SHA: 7a9ba31a58934a359ce2d36e9b5bb2d99b98fc00
Merge commit SHA: db2f56025b14eb50f21a9e424d0173279fc0b935
Merged at: 2026-07-08T02:23:02Z
Merged at local reference: 2026-07-07 America/Puerto_Rico
```

Dictamen:

```text
PR #21 queda confirmado como fuente canónica inmediata para preparar v0.7.
```

PR #21 no activó v0.7. PR #21 limpió, auditó, trazó y encauzó deuda documental para que v0.7 no herede una omisión funcional crítica.

---

## 2. Fuente canónica inmediata para v0.7

La preparación de v0.7 debe tomar PR #21 como fuente canónica inmediata.

Esto significa que toda conversación técnica de v0.7 debe pasar primero por la deuda, la trazabilidad y los criterios de no vigilancia consolidados en PR #21.

Documentos canónicos post PR #21:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Kit_Inicio_Sesion_Auditoria_Integridad_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md

18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Deuda_Vista_Facilitador_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md

18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Auditoria_Deuda_Integridad_Post_Cierre_v0_6_Pre_Apertura_v0_7_AI_StoryLab.md

18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Consolidacion_Funcional_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md

18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Matriz_Trazabilidad_Vista_Facilitador_v0_3_v0_6_v0_7_AI_StoryLab.md

18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md

18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Acta_Pre_Gate_Inicio_v0_7_AI_StoryLab.md

18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Bitacora_Sesion_PR21_Auditoria_Integridad_Facilitador_AI_StoryLab.md

18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Bitacora_Transferencia_Simetrica_PR21_Auditoria_Integridad_Facilitador_AI_StoryLab.md

18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Kit_Inicio_Sesion_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab_PREPARACION_POST_PR21.md
```

---

## 3. Logros documentales heredados de PR #21

PR #21 deja los siguientes logros como insumos obligatorios para v0.7:

1. Reconoció que PR #20 cerró v0.6 documentalmente, pero de forma condicionada.
2. Identificó y nombró la deuda `DFUX-FAC-v0.6-001`.
3. Consolidó la Vista del Facilitador como rol funcional y experiencia UX diferenciada.
4. Estableció que la Vista del Facilitador no debe transformarse en vigilancia.
5. Trazó la continuidad v0.3 → v0.6 → PR #21 → v0.7.
6. Separó facilitador, docente, estudiante, sistema y administrador total como figuras que no deben confundirse.
7. Definió criterios mínimos de no vigilancia, minimización de datos, privacidad por defecto y acompañamiento pedagógico.
8. Dejó insumos para roles, permisos, visibilidad, evidencia compartida, feedback, portafolio y seguridad.
9. Confirmó que PR #21 no implementa, no define arquitectura final y no activa v0.7.
10. Preparó el pre-gate para que v0.7 se abra solo mediante decisión humana explícita y PR posterior separado.

---

## 4. Propósito de v0.7

v0.7 existe para traducir los hallazgos funcionales, UX, pedagógicos, éticos y de continuidad de v0.6 y PR #21 a criterios técnicos preliminares de arquitectura y seguridad.

Su propósito no es construir el producto.

Su propósito es crear condiciones responsables para que una futura v0.8 pueda implementar de manera incremental sin improvisar, sin vigilancia encubierta y sin desplazar la agencia humana.

v0.7 debe producir arquitectura pensada, no arquitectura precipitada.

---

## 5. Pregunta rectora de v0.7

```text
¿Qué arquitectura técnica y qué criterios de seguridad necesita AI StoryLab 1 para sostener un ecosistema local-first, trazable, seguro, accesible y coherente con v0.6, incorporando explícitamente la Vista del Facilitador como rol funcional delimitado, experiencia UX propia y condición técnica de seguridad/privacidad, sin convertirla en vigilancia, monitoreo continuo, ranking, control total ni sustitución de agencia estudiantil?
```

---

## 6. Alcance permitido de v0.7

v0.7 puede trabajar documentos conceptuales y técnicos preliminares sobre:

- arquitectura técnica conceptual;
- arquitectura local-first;
- modelo técnico preliminar de roles, vistas y permisos;
- separación entre estudiante, facilitador, docente, administrador y sistema;
- modelo de datos conceptual;
- estructura preliminar de almacenamiento local;
- criterios de seguridad por diseño;
- criterios de privacidad por defecto;
- amenazas y mitigaciones en nivel documental;
- límites de visibilidad del facilitador;
- trazabilidad técnica de misiones, evidencias, feedback, decisiones y portafolio;
- distinción entre datos sintéticos, locales y reales;
- criterios de exportación e importación local;
- requisitos técnicos para acompañamiento sin vigilancia;
- matriz de transición hacia implementación incremental futura;
- registro de deuda técnica y decisiones diferidas.

---

## 7. Prohibiciones explícitas de v0.7 en esta entrada

v0.7 no puede, en esta entrada documental:

- seleccionar stack final;
- implementar código productivo;
- crear producto funcional;
- crear features productivas;
- usar datos reales;
- validar con personas;
- desplegar;
- activar marketplace readiness;
- integrar IA embebida;
- conectar APIs externas;
- crear backend productivo;
- introducir autenticación productiva;
- automatizar envío de datos;
- publicar evidencia automáticamente;
- monitorear continuamente estudiantes;
- producir rankings o comparaciones reductivas;
- generar alertas punitivas;
- inferir estados emocionales, motivacionales, de salud, conducta o capacidad como hechos;
- convertir la Vista del Facilitador en dashboard de vigilancia;
- tratar al facilitador como administrador total;
- sustituir agencia estudiantil;
- resolver deuda funcional como si fuera arquitectura final ya decidida.

---

## 8. Hito obligatorio: Vista del Facilitador

La Vista del Facilitador debe tratarse en v0.7 como:

```yaml
vista_facilitador_v0_7:
  rol_funcional: requerido
  experiencia_UX_diferenciada: requerida
  condicion_tecnica_seguridad_privacidad: requerida
  dashboard_vigilancia: prohibido
  monitoreo_continuo: prohibido
  ranking_estudiantil: prohibido
  administrador_total: prohibido
  sustitucion_agencia_estudiantil: prohibido
```

### 8.1 Traducción técnica mínima obligatoria

v0.7 deberá traducir el hito del facilitador a preguntas técnicas sobre:

- quién puede ver qué;
- bajo qué propósito pedagógico;
- en qué momento del proceso;
- con qué nivel de granularidad;
- con qué límites de retención;
- con qué separación entre evidencia compartida y borrador privado;
- cómo se registran comentarios sin crear fiscalización;
- cómo se preserva local-first;
- cómo se protege la agencia estudiantil;
- cómo se impide que el facilitador herede permisos de administrador total.

### 8.2 Lo que debe quedar fuera

La Vista del Facilitador no debe diseñarse como:

- panel de control total;
- sala de observación minuto a minuto;
- herramienta de productividad cronometrada;
- sistema de comparación entre estudiantes;
- motor de alertas punitivas;
- historial completo de interacción con IA;
- acceso irrestricto a borradores privados;
- sustituto de decisiones estudiantiles;
- capa de administración técnica general.

---

## 9. Principios técnicos de entrada

v0.7 debe iniciar con estos principios:

### 9.1 Local-first como punto de partida

El diseño técnico debe priorizar control local, reducción de dependencia externa y protección de privacidad desde el inicio.

### 9.2 Privacidad por defecto

Toda visibilidad debe justificarse por propósito pedagógico y necesidad mínima.

### 9.3 Seguridad por diseño

Las restricciones no deben añadirse al final como barniz. Deben formar parte de roles, permisos, datos, vistas y flujos desde la primera conversación técnica.

### 9.4 Trazabilidad sin vigilancia

La trazabilidad debe permitir continuidad, auditoría documental y comprensión del proceso sin transformarse en observación totalizante.

### 9.5 Agencia humana preservada

La arquitectura debe servir al proceso creativo humano. No debe convertir al estudiante en objeto de medición ni al facilitador en operador de control.

---

## 10. Protocolo de trabajo

Durante v0.7 se preserva el protocolo documento por documento:

```yaml
protocolo_v0_7:
  metodo: documento_por_documento
  borrador_markdown_descargable: requerido
  aprobacion_humana_explicita_antes_de_integrar: requerida_cuando_aplique
  nombre_canonico_sin_sufijos_de_estado: requerido
  commit_semantico: requerido
  push: requerido
  PR_verificado: requerido
  bitacoras_actualizadas_en_bloque_al_cierre: por_defecto
  avance_a_implementacion: prohibido_sin_gate
```

Ningún documento debe convertirse en sustituto de aprobación humana para transición, cierre, merge o activación de fase.

---

## 11. Primer documento de la fase

Este kit es el primer documento operativo de preparación para v0.7.

Integración canónica propuesta:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Kit_Inicio_Sesion_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md
```

Commit semántico sugerido:

```text
docs: preparar kit inicio v0.7 post pr21
```

PR draft sugerido:

```text
docs: preparar kit inicio v0.7 arquitectura tecnica seguridad
```

El PR debe declarar explícitamente que:

```text
Este PR prepara la activación controlada de v0.7, pero no activa arquitectura final, implementación, backend, APIs, IA embebida, despliegue, uso de datos reales ni validación con personas.
```

---

## 12. Secuencia documental recomendada

Después de este kit, y solo documento por documento, v0.7 puede avanzar hacia:

1. `Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`
2. `Modelo_Roles_Vistas_Permisos_v0_7_AI_StoryLab.md`
3. `Privacidad_No_Vigilancia_Facilitador_v0_7_AI_StoryLab.md`
4. `Arquitectura_Local_First_v0_7_AI_StoryLab.md`
5. `Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md`
6. `Amenazas_Mitigaciones_Seguridad_v0_7_AI_StoryLab.md`
7. `Matriz_Trazabilidad_Tecnica_v0_7_AI_StoryLab.md`
8. `Registro_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`
9. `Registro_Deuda_Tecnica_v0_7_AI_StoryLab.md`
10. `Acta_Gate_Transicion_v0_7_v0_8_AI_StoryLab.md`

Esta lista no autoriza producción simultánea. Solo organiza la ruta del mapa.

---

## 13. Criterios de aceptación del kit

Este kit puede considerarse listo cuando cumpla lo siguiente:

```yaml
criterios_aceptacion:
  PR20_verificado_closed_merged: true
  PR21_verificado_closed_merged: true
  PR21_fuente_canonica_inmediata: true
  v0_7_no_activada_por_este_documento: true
  logros_PR21_incorporados: true
  deuda_DFUX_FAC_v0_6_001_reconocida: true
  vista_facilitador_como_rol_UX_seguridad_privacidad: true
  no_vigilancia_explicita: true
  no_stack_final: true
  no_codigo_productivo: true
  no_backend_APIs_IA_despliegue: true
  no_datos_reales: true
  no_validacion_personas: true
  protocolo_documento_por_documento_preservado: true
```

---

## 14. Cierre operativo

Dictamen de este kit:

```text
AI StoryLab 1 puede preparar la apertura controlada de v0.7 usando PR #21 como fuente canónica inmediata. Esta preparación no activa v0.7, no selecciona stack, no implementa producto, no usa datos reales, no valida con personas y no autoriza backend, APIs, IA embebida ni despliegue.
```

El próximo paso documental debe ser decidido con aprobación humana explícita.

