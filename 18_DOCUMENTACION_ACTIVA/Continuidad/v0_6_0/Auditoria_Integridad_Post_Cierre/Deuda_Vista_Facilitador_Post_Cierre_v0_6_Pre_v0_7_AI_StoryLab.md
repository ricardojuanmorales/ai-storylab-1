# Deuda Vista del Facilitador · Post Cierre v0.6 · Pre v0.7 · AI StoryLab 1

**Estado:** APROBADO POR APROBACIÓN HUMANA EXPLÍCITA  
**Tipo de documento:** Registro detallado de deuda funcional, UX, pedagógica, ética y de continuidad  
**Momento metodológico:** Post cierre v0.6 · Pre apertura v0.7  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**PR de origen:** PR #20 · cierre documental condicionado de v0.6 · Diseño Funcional + UX  
**PR activo:** PR #21 · auditoría de integridad v0.6 y deuda vista facilitador  
**Rama activa:** `docs/v0-6-auditoria-integridad-facilitador`  
**Ruta canónica:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Deuda_Vista_Facilitador_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md`  
**Fecha:** 2026-07-07  
**Fecha de aprobación:** 2026-07-07  
**Zona horaria de referencia:** America/Puerto_Rico  

---

## 0. Nota de alcance

Este documento **no activa v0.7**.

No crea arquitectura técnica final.  
No autoriza implementación.  
No autoriza validación con personas.  
No autoriza uso de datos reales.  
No autoriza backend productivo.  
No autoriza APIs externas.  
No autoriza IA embebida.  
No autoriza despliegue.

Su función es registrar y analizar una deuda específica detectada después del cierre condicionado de v0.6: la invisibilización parcial de la vista del facilitador heredada del MVP v0.3.

Este documento puede recomendar una corrección documental limitada a v0.6, pero no reabre la fase completa ni convierte esa corrección en arquitectura, código o producto.

---

## 1. Estado de referencia

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

PR #20 cerró documentalmente v0.6 como fase de Diseño Funcional + UX. Ese cierre se reconoce como válido, pero no significa ausencia de deuda ni autorización automática para activar v0.7.

PR #21 existe para revisar la integridad documental post cierre de v0.6 antes de cualquier gate técnico.

---

## 2. Código y nombre de la deuda

### Código recomendado

```text
DFUX-FAC-v0.6-001
```

### Nombre de la deuda

```text
Invisibilización parcial de la vista del facilitador heredada del MVP v0.3.
```

### Clasificación

```yaml
clasificacion:
  tipo:
    - deuda_funcional
    - deuda_UX
    - deuda_pedagogica
    - deuda_etica
    - deuda_privacidad
    - deuda_seguridad_futura
    - deuda_trazabilidad
  severidad: alta
  urgencia: pre_v0_7
  estado: abierta
  debe_pagarse_antes_de_v0_7: true
```

---

## 3. Declaración de la deuda

Durante v0.6, la función del facilitador no desapareció. Sin embargo, quedó distribuida bajo nociones más amplias como:

- asistencia docente;
- acompañamiento;
- curaduría;
- feedback;
- seguimiento;
- apoyo ético, creativo, técnico y crítico;
- revisión de evidencia;
- apoyo al portafolio;
- continuidad pedagógica;
- mediación entre misión, evidencia y reflexión.

Esa distribución evitó un peligro real: convertir al facilitador en un panel de control o en una figura de supervisión invasiva.

Pero produjo otra deuda: la vista del facilitador perdió visibilidad como:

- módulo funcional explícito;
- experiencia UX diferenciada;
- familia de requisitos funcionales;
- actor con límites de visibilidad;
- figura pedagógica con acciones permitidas y prohibidas;
- riesgo de privacidad, seguridad y no vigilancia;
- pieza trazable entre MVP v0.3, v0.6 y v0.7.

La deuda no consiste en que v0.6 haya negado al facilitador. Consiste en que no lo consolidó con suficiente nitidez documental.

---

## 4. Tesis de este documento

La vista del facilitador debe recuperarse como **vista funcional diferenciada** antes de activar v0.7.

Esta recuperación debe hacerse como corrección documental limitada post cierre v0.6, no como implementación ni arquitectura técnica final.

Formulación recomendada:

```text
Corrección documental limitada post cierre v0.6 por deuda de integridad funcional/UX.
```

Esta corrección:

1. no invalida PR #20;
2. no reabre toda v0.6;
3. no altera el cierre documental ya realizado;
4. reconoce una deuda pagable;
5. consolida la vista del facilitador como rol/vista funcional;
6. preserva agencia estudiantil, local-first y privacidad por defecto;
7. prepara mejores preguntas para v0.7 sin resolverlas prematuramente.

---

## 5. Qué sí quedó visible en v0.6

v0.6 dejó visibles componentes importantes vinculados al rol del facilitador:

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

Estos elementos son una base valiosa. No deben descartarse ni duplicarse. Deben reorganizarse para reconocer que, en conjunto, apuntan a una vista funcional del facilitador.

---

## 6. Qué quedó insuficientemente visible

No quedó suficientemente explícito:

- la vista del facilitador como espacio funcional propio;
- el facilitador como actor diferenciado del estudiante y del administrador;
- los permisos funcionales del facilitador;
- los límites de observación;
- el tipo de progreso que puede ver;
- el tipo de evidencia que puede revisar;
- la diferencia entre acompañamiento y vigilancia;
- la diferencia entre retroalimentación y producción por el estudiante;
- la relación entre facilitador, evidencia, portafolio y feedback;
- la relación entre facilitador y rutas de apoyo;
- la dimensión ética de la visibilidad docente;
- los riesgos de privacidad derivados de una vista futura;
- la deuda técnica futura asociada a roles, permisos, registros y límites.

---

## 7. Herencia del MVP v0.3 que debe auditarse

Este documento no reconstruye todavía toda la historia del MVP v0.3. Esa tarea corresponde a una matriz de trazabilidad posterior.

Sin embargo, sí establece que la auditoría debe recuperar explícitamente qué elementos del MVP v0.3 estaban asociados a la vista del facilitador, incluyendo al menos:

```yaml
a_auditar_desde_v0_3:
  - proposito_de_la_vista_facilitador
  - acciones_previstas_para_facilitador
  - informacion_visible_para_facilitador
  - relacion_con_estudiante
  - relacion_con_misiones
  - relacion_con_evidencias
  - relacion_con_feedback
  - limites_implicitos_o_explicitos
  - riesgos_no_resueltos
  - elementos_absorbidos_por_v0_6
  - elementos_perdidos_o_invisibilizados_en_v0_6
```

La matriz recomendada deberá conectar:

```text
MVP v0.3
→ v0.6 Diseño Funcional + UX
→ deuda DFUX-FAC-v0.6-001
→ corrección documental limitada
→ insumos para v0.7
```

---

## 8. Causa probable

La deuda surge de una tensión de diseño legítima:

```text
evitar convertir al facilitador en panel de control
vs.
hacer visible al facilitador como experiencia funcional necesaria
```

v0.6 privilegió correctamente la agencia estudiantil, el enfoque local-first, la asistencia no sustitutiva y la prevención de vigilancia.

Sin embargo, al evitar una lógica de dashboard, la vista del facilitador perdió nombre propio.

La deuda no nace de una mala decisión, sino de una decisión prudente que necesita una segunda pasada documental.

---

## 9. Impacto de integrar la vista del facilitador de manera integral

Integrar la vista del facilitador de manera integral implica una corrección real a v0.6, pero no una ruptura.

### 9.1 Impacto funcional

Debe reconocerse una nueva agrupación funcional:

```text
Vista del Facilitador
```

Funciones mínimas:

- orientar misión;
- contextualizar objetivos;
- revisar estado de avance sin vigilancia invasiva;
- identificar necesidad de apoyo;
- ofrecer retroalimentación contextualizada;
- sugerir rutas de apoyo;
- acompañar curaduría;
- observar evidencias compartidas bajo criterios definidos;
- ayudar a interpretar progreso;
- sostener continuidad pedagógica;
- apoyar reflexión y transferencia.

### 9.2 Impacto UX

Debe reconocerse una experiencia diferenciada:

```text
Estudiante: crear, decidir, evidenciar, reflexionar, transferir.
Facilitador: orientar, acompañar, observar con límites, retroalimentar, cuidar ritmo, curar.
```

La vista del facilitador no debe duplicar la experiencia del estudiante ni absorber su agencia.

### 9.3 Impacto pedagógico

El facilitador debe entenderse como figura de acompañamiento, no como operador de control.

Su función pedagógica es ampliar claridad, cuidado, continuidad y calidad de retroalimentación, no producir por el estudiante ni vigilarlo.

### 9.4 Impacto ético

La visibilidad del facilitador debe estar subordinada a criterios de:

- necesidad pedagógica;
- consentimiento o decisión humana donde aplique;
- minimización de datos;
- respeto al ritmo del estudiante;
- no vigilancia;
- no evaluación punitiva automatizada;
- separación entre acompañamiento y fiscalización.

### 9.5 Impacto para v0.7

v0.7 deberá considerar roles, permisos, visibilidad, registros, seguridad y privacidad. Pero este documento no define esos modelos técnicos.

Solo identifica que esos temas no pueden llegar a v0.7 como fantasmas sin nombre.

---

## 10. Riesgos si no se paga la deuda

| Riesgo | Severidad | Descripción |
|---|---:|---|
| Pérdida de rol docente/facilitador | Alta | El ecosistema futuro podría centrarse solo en estudiante, misión y portafolio. |
| Diseño técnico incompleto en v0.7 | Alta | La arquitectura podría no contemplar roles, permisos ni límites de visibilidad. |
| UX fragmentada | Media | El facilitador podría aparecer como añadido tardío. |
| Vigilancia accidental | Alta | Si se improvisa después, puede convertirse en monitoreo invasivo. |
| Feedback débil | Media | La retroalimentación contextualizada podría quedar submodelada. |
| Deuda de seguridad | Alta | No definir qué puede ver el facilitador crea riesgo de privacidad. |
| Pérdida de trazabilidad pedagógica | Media | Se debilita la continuidad entre misión, evidencia, revisión y acompañamiento. |
| Confusión de roles | Alta | Facilitador, docente, administrador y sistema podrían mezclarse sin límites. |

---

## 11. Dónde debe pagarse la deuda

La deuda no se paga en un solo gesto. Debe consolidarse en una cadena documental:

```text
Registro explícito de deuda
→ Auditoría de integridad
→ Consolidación funcional mínima
→ Criterios de no vigilancia
→ Matriz de trazabilidad v0.3 → v0.6 → v0.7
→ Condición pre-gate v0.7
```

### 11.1 Registro explícito

Este documento cumple el primer pago:

```text
Deuda_Vista_Facilitador_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
```

Resultado esperado:

```text
La deuda queda nombrada, localizada, justificada y priorizada.
```

### 11.2 Auditoría de integridad

Debe revisarse si v0.6 dejó invisibilizados otros elementos similares.

Resultado esperado:

```text
Estado de situación post cierre v0.6 antes de abrir v0.7.
```

### 11.3 Consolidación funcional mínima

Si la auditoría lo confirma, debe crearse una adenda:

```text
Consolidacion_Funcional_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
```

Esa adenda no debe reabrir v0.6 por completo. Debe funcionar como corrección de integridad.

### 11.4 Matriz de trazabilidad

Debe crearse una matriz que conecte:

```text
v0.3 MVP
→ v0.6 asistencia docente / acompañamiento / curaduría / feedback
→ deuda identificada
→ pago documental
→ insumo v0.7
```

### 11.5 Criterio de entrada a v0.7

Debe agregarse una condición pre-gate:

```text
No activar v0.7 hasta que la vista del facilitador esté reconocida como rol/vista funcional y riesgo de seguridad/privacidad.
```

---

## 12. Familia preliminar de requisitos funcionales

Esta familia no implementa nada. Sirve como semilla funcional para auditoría y eventual insumo v0.7.

```text
RF-FAC-v0.6-AUD-001 · El ecosistema debe contemplar una vista del facilitador como rol funcional diferenciado.
RF-FAC-v0.6-AUD-002 · La vista del facilitador debe permitir acompañamiento sin vigilancia invasiva.
RF-FAC-v0.6-AUD-003 · La vista del facilitador debe respetar local-first y privacidad por defecto.
RF-FAC-v0.6-AUD-004 · La vista del facilitador no debe permitir producir por el estudiante.
RF-FAC-v0.6-AUD-005 · La vista del facilitador debe permitir retroalimentación contextualizada.
RF-FAC-v0.6-AUD-006 · La vista del facilitador debe distinguir progreso, evidencia, reflexión y portafolio.
RF-FAC-v0.6-AUD-007 · La vista del facilitador debe operar en esta fase solo con datos sintéticos, locales o documentales, no datos reales.
RF-FAC-v0.6-AUD-008 · La vista del facilitador debe diferenciar observación pedagógica limitada de monitoreo continuo.
RF-FAC-v0.6-AUD-009 · La vista del facilitador debe reconocer límites de visibilidad antes de pasar a arquitectura técnica.
RF-FAC-v0.6-AUD-010 · La vista del facilitador debe quedar trazada desde MVP v0.3 hacia v0.6 y hacia insumos de v0.7.
```

---

## 13. Criterios preliminares de no vigilancia

La vista del facilitador no debe convertirse en vigilancia.

Criterios preliminares:

1. No debe mostrar monitoreo continuo del estudiante.
2. No debe crear puntuaciones opacas de desempeño.
3. No debe permitir control total del portafolio del estudiante.
4. No debe registrar más información de la necesaria.
5. No debe usar datos reales en esta fase.
6. No debe sustituir juicio docente ni decisión humana.
7. No debe permitir producción directa por el estudiante.
8. No debe mezclar acompañamiento con castigo, ranking o fiscalización.
9. No debe tratar toda inactividad como problema.
10. No debe convertir reflexión íntima en dato visible por defecto.

Estos criterios deberán ampliarse en un documento propio si la auditoría lo confirma.

---

## 14. Criterios local-first para la vista del facilitador

La vista del facilitador debe respetar el principio local-first.

En este tramo, eso significa:

```yaml
local_first_facilitador:
  datos_reales: prohibidos
  datos_sinteticos: permitidos_para_modelado_documental
  control_local: requerido
  minimizacion_de_datos: requerida
  visibilidad_por_defecto: limitada
  transferencia_a_backend: no_autorizada
  integracion_APIs: no_autorizada
  IA_embebida: no_autorizada
  despliegue: no_autorizado
```

Cualquier propuesta futura que requiera backend, sincronización, analítica, permisos técnicos o IA embebida debe pasar a v0.7 como pregunta o insumo de seguridad, no como decisión tomada en este PR.

---

## 15. Riesgos de seguridad y privacidad que pasan como insumo a v0.7

Este documento no resuelve seguridad. Solo identifica riesgos que v0.7 deberá atender.

```text
SEG-FAC-v0.7-001 · Definir límites de visibilidad del facilitador.
SEG-FAC-v0.7-002 · Definir qué información requiere consentimiento o decisión humana.
SEG-FAC-v0.7-003 · Evitar métricas invasivas o vigilancia continua.
SEG-FAC-v0.7-004 · Registrar feedback sin capturar más datos de los necesarios.
SEG-FAC-v0.7-005 · Mantener separación entre acompañamiento pedagógico y supervisión punitiva.
SEG-FAC-v0.7-006 · Definir separación entre rol facilitador, rol administrador y rol sistema.
SEG-FAC-v0.7-007 · Definir criterios de auditoría local sin datos reales.
SEG-FAC-v0.7-008 · Modelar privacidad de reflexiones, evidencias y portafolios.
```

---

## 16. Qué NO cuenta como pago de la deuda

No cuenta como pago:

- mencionar “asistencia docente” sin vista funcional;
- añadir un dashboard sin criterios éticos;
- agregar permisos técnicos sin modelo pedagógico;
- crear arquitectura de roles sin requisitos;
- asumir que facilitador equivale a administrador;
- convertir seguimiento en vigilancia;
- usar datos reales para probar la vista;
- resolver con implementación antes de auditoría;
- abrir v0.7 sin matriz de trazabilidad;
- ocultar la deuda bajo términos genéricos de acompañamiento.

---

## 17. Criterios de cierre documental de esta deuda

La deuda podrá considerarse pagada documentalmente cuando existan:

1. registro explícito de deuda;
2. auditoría de integridad post cierre v0.6;
3. decisión sobre si se requiere adenda funcional;
4. familia mínima de requisitos del facilitador;
5. criterios de no vigilancia;
6. criterios de local-first aplicados al facilitador;
7. trazabilidad v0.3 → v0.6 → auditoría → v0.7;
8. condición de gate v0.7 actualizada;
9. aprobación humana explícita;
10. integración en PR de auditoría separado de PR de activación v0.7.

---

## 18. Decisión recomendada

```text
Registrar DFUX-FAC-v0.6-001 como deuda alta y continuar con auditoría de integridad antes de activar v0.7.
```

La decisión recomendada no es implementar la vista del facilitador, sino reconocerla suficientemente para que v0.7 no herede una omisión funcional.

---

## 19. Dictamen preliminar

La vista del facilitador debe recuperarse como deuda pagable antes de activar v0.7.

No debe resolverse con implementación ni con arquitectura prematura. Debe pagarse primero como integridad funcional y UX, para que v0.7 pueda diseñar roles, permisos, límites de visibilidad, seguridad y privacidad desde una base limpia.

Dictamen final preliminar:

```text
v0.6 está cerrada documentalmente, pero requiere corrección documental limitada para integrar explícitamente la vista del facilitador antes de activar v0.7.
```
