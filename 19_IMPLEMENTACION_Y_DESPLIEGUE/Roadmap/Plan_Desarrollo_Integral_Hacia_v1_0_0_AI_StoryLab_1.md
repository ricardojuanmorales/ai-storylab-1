# Plan de Desarrollo Integral hacia AI StoryLab 1 v1.0.0
## Aplicación local-first y ecosistema mínimo estable

**Versión:** `v1.0-regent-approved-2026-07-14`
**Fecha:** 2026-07-14
**Baseline de formulación:** `78685ec23fe35e9c5c8266a5a3f9d54cbdb3b625`
**Naturaleza:** plan rector de desarrollo, validación, publicación y mantenimiento
**Estado:** `APPROVED_FOR_CANONICAL_INTEGRATION`
**Aprobación humana:** explícita, emitida el 2026-07-14
**Vigencia:** efectiva al fusionarse el PR documental de realineación
**Documento rector antecedente:** `Mapa_Ruta_v0_5_a_v1_0_Ecosistema_Funcional_AI_StoryLab.md`
**Sucesión:** este plan lo sucede semánticamente al entrar en vigor; su preservación física en el archivo histórico permanece como acción documental obligatoria

---

## 0. Tesis rectora

> **AI StoryLab 1 v1.0.0 será equivalente a v0.3.0 en completitud experiencial, pero superior en arquitectura, seguridad, accesibilidad, trazabilidad, agencia humana y mantenibilidad.**

`v1.0.0` será un **ecosistema mínimo estable** cuyo producto central será una aplicación local-first funcional para completar una experiencia creativa de principio a fin.

La aplicación no será la totalidad intelectual del ecosistema, pero será su núcleo operativo visible.

---

## 1. Propósito

Este plan:

- define el destino funcional de `v1.0.0`;
- gobierna la ruta desde `v0.8.0`;
- delimita la relación con `v0.3.0`;
- establece hitos, gates y evidencias;
- completa el ciclo SDD;
- evita expansión ilimitada;
- protege local-first, privacidad, seguridad, accesibilidad y agencia humana;
- separa implementación, validación y publicación;
- establece condiciones de mantenimiento.

---

## 2. Definición del producto estable

```yaml
producto_v1:
  nombre: AI_StoryLab_1
  version: v1.0.0
  naturaleza: ecosistema_minimo_estable
  centro: aplicacion_local_first
  usuario_funcional_primario: creador_estudiante
  experiencia: completa_de_inicio_a_fin
  datos_reales_requeridos: false
  conexion_requerida: false
  backend_requerido: false
  autenticacion_requerida: false
  IA_embebida_requerida: false
```

### 2.1 Experiencia mínima

```text
perfil local
→ proyecto
→ misión 1
→ misión 2
→ misión 3
→ misión 4
→ evidencias
→ reflexión
→ decisiones humanas
→ portafolio curado
→ revisión final
→ exportación
→ importación y recuperación
```

### 2.2 Misiones candidatas

| ID | Misión | Resultado principal |
|---|---|---|
| M1 | Intención creadora | propósito, audiencia, premisa y límites |
| M2 | Arquitectura narrativa | personajes, mundo, conflicto y estructura |
| M3 | Producción multimodal | evidencias y documentación del proceso |
| M4 | Curaduría y cierre | reflexión, selección, revisión y exportación |

La nomenclatura, el número y el contenido final requerirán validación pedagógica.

---

## 3. Ecosistema mínimo estable

### 3.1 Aplicación

Obligatorio:

- perfil local mínimo;
- proyecto creativo;
- secuencia de misiones;
- borradores;
- persistencia local;
- validación de datos;
- evidencias;
- reflexión;
- decisión humana;
- portafolio curado;
- exportación/importación;
- recuperación;
- manejo de errores;
- accesibilidad;
- pruebas automatizadas.

### 3.2 Metodología

Obligatorio:

- propósito pedagógico;
- marco de agencia humana;
- competencias esenciales;
- guía de uso de IA externa;
- criterios de reflexión;
- orientación de autoría y privacidad.

### 3.3 Documentación

Obligatorio:

- guía de usuario;
- guía técnica;
- guía de instalación o ejecución;
- privacidad;
- seguridad;
- accesibilidad;
- release notes;
- changelog;
- plan de mantenimiento;
- registro de decisiones.

### 3.4 Gobernanza

Obligatorio:

- specs;
- criterios de aceptación;
- riesgos;
- pruebas;
- gates;
- trazabilidad;
- bitácora;
- transferencia simétrica;
- deuda visible;
- gobernanza post-release.

---

## 4. Alcance diferido

```yaml
diferido:
  Vista_del_Facilitador: post_v1
  dashboard_grupal: post_v1
  backend: no_requerido
  autenticacion: no_requerida
  IA_embebida: no_requerida
  analiticas: post_v1
  telemetria: prohibited_by_default
  galeria_publica: post_v1
  marketplace: optional_future_gate
  datos_reales: independent_gate
  investigacion_con_personas: independent_ethics_gate
  colaboracion_sincronica: post_v1
```

---

## 5. Públicos

### 5.1 Estudiante de escuela superior

Atención funcional:

- lenguaje guiado;
- ayudas contextuales;
- actividades creativas;
- reflexión accesible;
- decisiones humanas;
- portafolio;
- privacidad.

### 5.2 Estudiante universitario

Atención funcional o configurable:

- mayor profundidad;
- investigación-creación;
- justificación;
- análisis de autoría;
- reflexión crítica;
- documentación de proceso.

### 5.3 Docente

Atención documental y metodológica en v1:

- guía;
- competencias;
- rúbricas;
- adaptación;
- paquetes exportables;
- límites de no vigilancia.

Interfaz especializada diferida.

### 5.4 Investigador

Atención documental y estructural en v1:

- trazabilidad;
- metadatos;
- modelos de evidencia;
- límites éticos;
- exportabilidad.

Interfaz especializada y datos reales diferidos.

---

## 6. Estrategia de legado v0.3

### 6.1 Regla

```text
v0.3 es evidencia funcional y memoria histórica
v0.3 no es arquitectura de destino
```

### 6.2 Patrón

```text
reconstrucción limpia
+
reutilización selectiva auditada
```

### 6.3 Proceso de reutilización

1. inventariar;
2. clasificar;
3. justificar;
4. aislar;
5. probar;
6. revisar seguridad;
7. adaptar a contratos nuevos;
8. documentar procedencia;
9. integrar;
10. verificar que no introduce acoplamiento legacy.

### 6.4 Artefactos requeridos

- matriz de herencia;
- pruebas de caracterización;
- inventario de contenidos;
- inventario de utilidades;
- registro de componentes rechazados;
- ADR de frontera legacy;
- reporte de diferencias experienciales.

---

## 7. Arquitectura objetivo

### 7.1 Capas

```text
presentation
application
domain
ports
adapters
schemas
fixtures
tests
```

### 7.2 Principios

- dominio independiente de React;
- persistencia detrás de puerto;
- schemas versionados;
- UI sin decisiones de dominio críticas;
- errores tipados;
- transiciones explícitas;
- funciones sensibles bajo feature flags;
- importación no confiable por defecto;
- exportación revisable;
- dependencia de red igual a cero para el flujo principal.

### 7.3 Módulos iniciales

- Profile;
- Project;
- Mission;
- Activity;
- Evidence;
- Reflection;
- HumanDecision;
- Portfolio;
- ExportPackage;
- ImportValidation;
- LocalPersistence;
- AccessibilityPreferences;
- FeatureFlags.

---

## 8. Ciclo SDD obligatorio

Cada feature central debe contener:

```yaml
feature_record:
  necesidad: required
  publico: required
  principio: required
  competencia: required
  spec: required
  criterios_aceptacion: required
  riesgos: required
  threat_model_proporcional: required
  arquitectura: required
  contratos: required
  pruebas: required
  implementacion: required
  validacion: required
  documentacion: required
  gate: required
  trazabilidad: required
```

Una feature no está completa si solo existe código.

---

## 9. Ruta versionada

### 9.1 v0.8.0 · Implementación incremental

Propósito:

- construir la nueva base;
- demostrar la experiencia;
- completar el prototipo funcional;
- usar datos sintéticos;
- generar evidencia técnica.

Resultado de salida:

```text
prototipo funcional integrado
experiencia completa
arquitectura v1 demostrada
sin declaración de release candidate
```

### 9.2 v0.9.0 · Validación y release readiness

Propósito:

- validar;
- corregir;
- endurecer;
- documentar;
- empaquetar;
- preparar release candidate.

Resultado de salida:

```text
release candidate aprobado
```

### 9.3 v1.0.0 · Publicación estable

Propósito:

- publicar lo ya validado;
- formalizar mantenimiento;
- activar gobernanza post-release.

Regla:

```text
v1.0 no es una fase para añadir capacidades mayores
```

---

## 10. Hitos y gates

| Hito/Gate | Función | Resultado |
|---|---|---|
| H08-1 | baseline técnico | base verificable |
| H08-1A | implementation readiness | specs ejecutables |
| GATE-H08-1-READY-TO-CODE | autorización humana | apertura H08-2 |
| H08-2 | primera vertical slice | flujo mínimo funcional |
| H08-3 | núcleo y persistencia | dominio reusable |
| H08-4 | experiencia de misiones | arco creativo completo |
| H08-5 | portafolio y roundtrip | cierre de experiencia |
| H08-6 | accesibilidad, seguridad y deuda | estabilización |
| GATE-V08-CLOSE | cierre de implementación | entrada a v0.9 |
| GATE-V09-OPEN | apertura de validación | plan de validación |
| GATE-V09-RC | aprobación de RC | candidato aceptado |
| GATE-V1-PUBLISH | publicación | release estable |

Los identificadores posteriores a H08-1 quedan aprobados como arquitectura de planificación. Cada hito conserva su gate y requiere autorización humana independiente antes de ejecutarse.

---

## 11. Criterios de cierre de v0.8.0

- experiencia completa con datos sintéticos;
- perfil mínimo;
- misiones estables;
- portafolio;
- export/import roundtrip;
- schemas versionados;
- persistencia recuperable;
- pruebas unitarias;
- pruebas de integración;
- manejo de errores;
- accesibilidad inicial verificada;
- seguridad y privacidad verificadas;
- deuda actualizada;
- documentación técnica;
- trazabilidad SDD;
- revisión PH-IT-AT;
- no datos reales;
- no release estable.

---

## 12. Criterios de cierre de v0.9.0

- v0.8 cerrada;
- suite de pruebas estable;
- accesibilidad revisada;
- pruebas de usabilidad;
- auditoría de dependencias;
- revisión de seguridad;
- revisión de privacidad;
- documentación de usuario;
- guía técnica;
- empaquetado;
- compatibilidad de importación;
- defectos críticos resueltos;
- deudas críticas resueltas o aceptadas;
- release candidate;
- decisión humana.

---

## 13. Criterios de publicación v1.0.0

### Aplicación

- build reproducible;
- flujo completo;
- persistencia;
- roundtrip;
- errores controlados;
- accesibilidad;
- pruebas;
- seguridad;
- privacidad.

### Ecosistema

- metodología;
- guías;
- documentación;
- specs;
- registro de decisiones;
- release notes;
- mantenimiento;
- gobernanza post-release;
- archivo histórico preservado;
- ciclo SDD demostrado.

### No permitido

- funciones nuevas no validadas;
- deuda crítica invisible;
- datos reales sin gate;
- vigilancia;
- publicación automática de evidencias;
- dependencia obligatoria de red.

---

## 14. Cronograma de referencia

### Escenario parcial

| Periodo | Resultado |
|---|---|
| Mes 1 | H08-1, H08-1A y primera vertical slice |
| Meses 2-3 | experiencia de misiones y núcleo |
| Meses 4-5 | portafolio, roundtrip y estabilización |
| Meses 6-8 | validación v0.9 |
| Meses 8-10 | publicación v1.0 |

### Escenario intensivo

| Periodo | Resultado |
|---|---|
| Mes 1 | baseline, readiness y vertical slice |
| Meses 2-3 | prototipo completo v0.8 |
| Meses 4-5 | validación y RC |
| Meses 5-7 | v1.0 estable |

Los tiempos se recalibrarán después del gate Ready-to-Code.

---

## 15. Roles de decisión

```text
persona:
  decide propósito, alcance, riesgo, aceptación y gates

máquina:
  verifica tests, schemas, hashes, builds y estados

IA:
  orquesta fuentes, genera alternativas, explica y documenta

PH:
  protege propósito humano y pedagógico

IT:
  protege arquitectura, pruebas y mantenibilidad

AT:
  protege accesibilidad y tecnologías de apoyo
```

---

## 16. Riesgos y controles

| Riesgo | Control |
|---|---|
| Alcance infinito | Minimum Stable Ecosystem |
| Cuatro públicos como cuatro apps | núcleo compartido |
| Copiar v0.3 | frontera legacy |
| Reescritura sin aprendizaje | memoria funcional y caracterización |
| Code-first | gate Ready-to-Code |
| Seguridad tardía | controles en specs |
| Accesibilidad tardía | criterios y pruebas desde H08 |
| SDD ceremonial | trazabilidad ejecutable |
| Marketplace como bloqueo | optional future gate |
| Release sin mantenimiento | gate de publicación |

---

## 17. Gobernanza de cambios

Todo cambio mayor deberá declarar:

- motivo;
- fase;
- alcance;
- impacto en v1;
- impacto pedagógico;
- impacto ético;
- impacto técnico;
- compatibilidad;
- migración;
- pruebas;
- documentación;
- gate.

Cambios de alcance de v1 requieren decisión humana explícita.

---

## 18. Sucesión documental

Al integrarse canónicamente este plan:

1. se convertirá en fuente regente de desarrollo hacia v1;
2. el mapa vigente de v0.5 a v1 se moverá al archivo histórico;
3. se conservará referencia de procedencia;
4. se actualizarán índices de vigencia;
5. se actualizarán decisiones, gates y continuidad;
6. no se eliminará la memoria histórica.

---

## 19. Aprobación, vigencia y límites de autorización

```yaml
approval:
  decision: approved
  date: 2026-07-14
  authority: responsable_humano_AI_StoryLab_1
  document_status: approved_for_canonical_integration
  canonical_role_on_merge: plan_regente_desarrollo_hacia_v1_0_0
  baseline: 78685ec23fe35e9c5c8266a5a3f9d54cbdb3b625

authorization_effect:
  H08_1:
    status: authorized_with_existing_reservations
  H08_1A:
    status: approved_as_required_planning_and_readiness_hito
    execution: pending_operationalization
  GATE_H08_1_READY_TO_CODE:
    status: approved_as_required_human_checkpoint
  H08_2:
    status: blocked
  later_hitos:
    authorization_by_inference: prohibited

pending_documentary_continuity:
  - preservar_fisicamente_el_mapa_antecedente_en_archivo_historico
  - actualizar_indices_de_vigencia
  - actualizar_registros_de_decisiones_y_gates
  - actualizar_bitacora_y_transferencia_simetrica
```

La aprobación de este plan establece la ruta acordada. Su vigencia canónica comienza
con el merge del PR documental. El merge no autoriza implementación funcional
posterior a H08-1 ni permite omitir la reevaluación del kit pausado.

La sucesión física del mapa rector antecedente y las actualizaciones de índices
deberán completarse como acción de continuidad documental antes de declarar
operacionalizado el inicio de los trabajos de v0.8.0.
