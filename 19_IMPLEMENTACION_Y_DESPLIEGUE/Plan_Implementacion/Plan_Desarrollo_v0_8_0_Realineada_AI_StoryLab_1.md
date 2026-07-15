# Plan de Desarrollo de AI StoryLab 1 v0.8.0 Realineada
## De baseline técnico a prototipo funcional integrado

**Versión:** `v0.8.0-realigned-approved-2026-07-14`
**Fecha:** 2026-07-14
**Baseline:** `78685ec23fe35e9c5c8266a5a3f9d54cbdb3b625`
**Fase:** Implementación incremental
**Estado:** `APPROVED_FOR_CANONICAL_INTEGRATION`
**Aprobación humana:** explícita, emitida el 2026-07-14
**Efectividad operacional:** condicionada al merge, la reevaluación del kit H08-1 y el gate aplicable
**Alcance:** datos sintéticos, local-first, sin backend, sin auth, sin IA embebida
**Relación:** subordinado al Plan de Desarrollo Integral hacia v1.0.0

---

## 0. Propósito

Construir y estabilizar la nueva aplicación central de AI StoryLab 1 hasta obtener un prototipo funcional integrado que:

- complete una experiencia creativa de principio a fin;
- demuestre la arquitectura v1;
- use un perfil local mínimo;
- incluya una secuencia estable de misiones;
- preserve agencia humana;
- opere sin red;
- exporte e importe paquetes validados;
- produzca evidencia suficiente para entrar a v0.9.

`v0.8.0` no publica estable. Construye y demuestra.

---

## 1. Resultado esperado de la fase

```yaml
salida_v0_8:
  aplicacion: prototipo_funcional_integrado
  experiencia: completa
  perfil: minimo_local
  misiones: secuencia_estable
  persistencia: local_y_recuperable
  portafolio: curado
  roundtrip: export_import_validado
  datos: sinteticos
  pruebas: unitarias_e_integracion
  accesibilidad: baseline_verificado
  seguridad: controles_baseline
  IA_embebida: false
  Vista_Facilitador: false
  release_estable: false
```

---

## 2. Alcance funcional

### 2.1 Perfil local

Campos candidatos:

- seudónimo;
- contexto o nivel opcional;
- modalidad;
- título del proyecto;
- preferencias de accesibilidad.

Reglas:

- datos mínimos;
- ningún campo real obligatorio;
- edición y borrado local;
- sin cuenta;
- sin red.

### 2.2 Proyecto

- identificador local;
- título;
- fecha local;
- configuración de ruta;
- estado;
- versión de schema;
- historial mínimo de cambios.

### 2.3 Misiones

Secuencia candidata:

1. Intención creadora.
2. Arquitectura narrativa.
3. Producción multimodal.
4. Curaduría y cierre.

Cada misión tendrá:

- propósito;
- instrucciones;
- actividad;
- evidencia;
- reflexión;
- decisión humana;
- estado;
- criterios de finalización;
- posibilidad de regresar y editar.

### 2.4 Portafolio

- incorporación voluntaria;
- edición;
- retiro reversible;
- ordenamiento;
- metadatos mínimos;
- relación con misión y competencia;
- vista previa de exportación.

### 2.5 Exportación e importación

- schema versionado;
- vista previa;
- confirmación;
- checksum cuando aplique;
- validación estricta;
- errores comprensibles;
- roundtrip;
- migración o rechazo controlado.

---

## 3. No alcance

- Vista del Facilitador;
- group dashboard;
- perfiles reales;
- datos reales;
- backend;
- autenticación;
- cloud;
- API de IA;
- IA embebida;
- analíticas;
- telemetría;
- marketplace;
- galería;
- colaboración sincrónica;
- publicación automática;
- almacenamiento de videos;
- investigación con participantes.

---

## 4. Arquitectura de trabajo

```text
apps/
  storylab/

src/
  domain/
  application/
  ports/
  adapters/
  presentation/
  schemas/
  fixtures/
  feature-flags/
  accessibility/
  tests/
```

La estructura final se decidirá en H08-1A. Este mapa expresa separación de responsabilidades, no un stack irreversible.

---

## 5. Objetos de dominio candidatos

| Objeto | Responsabilidad |
|---|---|
| LocalProfile | identidad mínima local |
| CreativeProject | contenedor del proceso |
| MissionDefinition | configuración de misión |
| MissionProgress | estado del usuario |
| ActivityResponse | borrador o resultado |
| Evidence | producto creativo documentado |
| Reflection | reflexión privada editable |
| HumanDecision | aceptación, rechazo o modificación |
| PortfolioItem | evidencia curada |
| ExportPackage | paquete revisable |
| ImportResult | resultado tipado de validación |
| AccessibilityPreferences | preferencias locales |

---

## 6. Estados y transiciones base

### Proyecto

```text
new
→ active
→ review
→ completed
→ archived
```

### Misión

```text
not_started
→ in_progress
→ ready_for_review
→ completed
↘ reopened
```

### Evidencia

```text
draft
→ reviewed
→ accepted_for_portfolio
→ removed
```

### Exportación

```text
not_prepared
→ preview
→ validated
→ confirmed
→ exported
```

Toda transición sensible requiere acción humana explícita.

---

## 7. Catálogo inicial de errores

| Código | Situación | Comportamiento |
|---|---|---|
| ERR-SCHEMA-001 | paquete inválido | rechazar sin alterar estado |
| ERR-SCHEMA-002 | versión incompatible | ofrecer explicación |
| ERR-STORAGE-001 | escritura local fallida | conservar borrador en memoria |
| ERR-STORAGE-002 | cuota agotada | informar y ofrecer exportación |
| ERR-IMPORT-001 | archivo corrupto | rechazar |
| ERR-IMPORT-002 | contenido incompleto | reportar campos |
| ERR-STATE-001 | transición inválida | bloquear y registrar |
| ERR-EXPORT-001 | validación fallida | impedir exportación |
| ERR-ACCESS-001 | interacción inaccesible | bloquear cierre del criterio |
| ERR-LEGACY-001 | dato v0.3 no reconocido | migrar explícitamente o rechazar |

Los códigos finales deberán definirse en H08-1A.

---

## 8. Hitos propuestos

### H08-1 · Baseline técnico

**Objetivo:** establecer la plataforma mínima verificable sin funcionalidad de producto activa.

Entregables:

- esqueleto modular;
- runner;
- contratos preliminares;
- schemas;
- fixtures;
- feature flags;
- CI mínimo;
- pruebas smoke;
- controles iniciales;
- bitácora y continuidad.

Criterios de salida:

- build reproducible;
- tests ejecutables;
- cero funciones sensibles activas;
- paths y dependencias verificadas;
- datos sintéticos;
- revisión humana.

### H08-1A · Implementation Readiness

**Objetivo:** convertir el primer incremento en trabajo programable sin ambigüedad sustantiva.

Entregables:

- spec vertical slice;
- wireframes concretos;
- modelo de dominio;
- interfaces;
- máquina de estados;
- catálogo de errores;
- schemas definitivos;
- fixtures;
- criterios Given/When/Then;
- threat model proporcional;
- checklist de accesibilidad;
- backlog estimado;
- ADR provisional.

Criterios de salida:

- ninguna contradicción crítica abierta;
- pruebas principales pueden escribirse;
- interfaces definidas;
- alcance cerrado;
- riesgos aceptados o mitigados.

### GATE-H08-1-READY-TO-CODE

Resultados:

- approved;
- approved_with_reservations;
- changes_required;
- rejected.

No abre H08-2 por inferencia.

### H08-2 · Primera vertical slice

Flujo:

```text
perfil sintético
→ crear proyecto
→ abrir misión
→ guardar actividad
→ crear evidencia
→ reflexionar
→ decidir
→ incorporar al portafolio
→ persistir
```

Criterios:

- offline;
- recoverable;
- reversible;
- probado;
- accesible;
- sin publicación automática.

### H08-3 · Persistencia, schemas y migración

- puerto de persistencia;
- adaptador local;
- versionado;
- recuperación;
- errores de cuota;
- migraciones;
- pruebas de corrupción.

### H08-4 · Secuencia de misiones

- cuatro misiones candidatas;
- navegación;
- progreso;
- edición;
- reapertura;
- lenguaje no punitivo;
- competencias y reflexión.

### H08-5 · Portafolio y roundtrip

- curaduría;
- vista previa;
- exportación;
- importación;
- checks;
- compatibilidad;
- pruebas roundtrip.

### H08-6 · Estabilización

- accesibilidad;
- seguridad;
- rendimiento;
- dependencias;
- documentación;
- deuda;
- PH-IT-AT;
- regresión.

### GATE-V08-CLOSE

Decide si el prototipo puede entrar a validación `v0.9.0`.

---

## 9. Specs mínimas requeridas

| Spec | Capacidad |
|---|---|
| SPEC-PROFILE-001 | perfil local mínimo |
| SPEC-PROJECT-001 | proyecto creativo |
| SPEC-MISSION-001 | definición y progreso |
| SPEC-EVIDENCE-001 | evidencia |
| SPEC-REFLECTION-001 | reflexión privada |
| SPEC-DECISION-001 | decisión humana |
| SPEC-PORTFOLIO-001 | curaduría |
| SPEC-PERSIST-001 | persistencia local |
| SPEC-EXPORT-001 | exportación |
| SPEC-IMPORT-001 | importación |
| SPEC-ACCESS-001 | accesibilidad |
| SPEC-LEGACY-001 | frontera v0.3 |

---

## 10. Contratos ejecutables candidatos

```ts
interface ProjectRepository {
  load(projectId: string): Promise<CreativeProject | null>
  save(project: CreativeProject): Promise<SaveResult>
  remove(projectId: string): Promise<RemoveResult>
}

interface MissionService {
  start(project: CreativeProject, missionId: string): TransitionResult
  saveDraft(progress: MissionProgress, response: ActivityResponse): TransitionResult
  complete(progress: MissionProgress): TransitionResult
  reopen(progress: MissionProgress): TransitionResult
}

interface PortfolioService {
  accept(evidence: Evidence, decision: HumanDecision): PortfolioResult
  edit(item: PortfolioItem): PortfolioResult
  remove(itemId: string): PortfolioResult
}

interface PackageService {
  preview(project: CreativeProject): ExportPreview
  validate(pkg: unknown): ValidationResult
  export(pkg: ExportPackage): ExportResult
  import(pkg: unknown): ImportResult
}
```

Estos contratos son ilustrativos. H08-1A determinará lenguaje, tipos y forma final.

---

## 11. Criterios de aceptación ejecutables

```gherkin
Feature: Curaduría humana

  Scenario: No incorporar evidencia automáticamente
    Given una evidencia revisada
    When la persona no confirma su incorporación
    Then la evidencia no aparece en el portafolio

  Scenario: Revertir una decisión
    Given una evidencia incorporada
    When la persona la retira
    Then el portafolio deja de mostrarla
    And la evidencia permanece disponible como borrador
```

```gherkin
Feature: Roundtrip local

  Scenario: Exportar e importar un proyecto válido
    Given un proyecto completo con datos sintéticos
    When se exporta y luego se importa el paquete
    Then se recupera el mismo estado semántico
    And el schema continúa válido
```

---

## 12. Estrategia de pruebas

### Unitarias

- invariantes;
- transiciones;
- validadores;
- decisiones;
- curaduría;
- migraciones;
- manejo de errores.

### Contrato

- puertos;
- schemas;
- adaptadores;
- fixtures;
- feature flags.

### Integración

- vertical slice;
- persistencia;
- export/import;
- recuperación;
- reapertura.

### Accesibilidad

- teclado;
- foco;
- etiquetas;
- contraste;
- mensajes de error;
- estructura semántica;
- reducción de movimiento cuando aplique.

### Seguridad

- archivos malformados;
- payloads grandes;
- contenido inesperado;
- prototype pollution cuando aplique;
- sanitización;
- dependencia de red igual a cero.

### Regresión

- comportamientos esenciales de v0.3 convertidos en pruebas de caracterización.

---

## 13. Estrategia de v0.3

### Inventario inicial

- flujo;
- contenidos;
- modelos de datos;
- utilidades;
- componentes;
- assets;
- pruebas;
- dependencias.

### Regla de incorporación

```text
nada se copia por conveniencia
todo se incorpora por decisión trazable
```

### Productos

- matriz de herencia;
- ADR;
- pruebas comparativas;
- registro de reutilización;
- registro de rechazo.

---

## 14. Accesibilidad

Accesibilidad será criterio de entrada, no limpieza final.

Cada spec deberá indicar:

- interacción por teclado;
- foco;
- lectura por tecnología de apoyo;
- estructura;
- contraste;
- errores;
- carga cognitiva;
- instrucciones;
- alternativas;
- preferencias.

Un defecto de accesibilidad que impida completar el flujo será bloqueante.

---

## 15. Seguridad y privacidad

Invariantes:

```text
ningún dato real es necesario
ninguna red es necesaria
ninguna evidencia se publica automáticamente
ninguna reflexión se comparte automáticamente
ninguna IA decide valor creativo
toda exportación requiere revisión
toda importación se trata como no confiable
toda curaduría es reversible
```

---

## 16. CI mínimo

Pipeline candidato:

1. install reproducible;
2. lint o chequeo estático;
3. typecheck cuando aplique;
4. tests unitarios;
5. tests de contrato;
6. tests de integración;
7. build;
8. auditoría de dependencias;
9. verificación de schemas;
10. artifact de evidencia.

No se exige despliegue automático.

---

## 17. Feature flags

```yaml
flags:
  facilitator_view: false
  group_dashboard: false
  embedded_ai: false
  analytics: false
  public_gallery: false
  cloud_sync: false
  real_profiles: false
  experimental_migrations: false
```

Los flags no sustituyen gates.

---

## 18. Revisión PH-IT-AT

### PH

- propósito;
- agencia;
- lenguaje;
- experiencia;
- reflexión;
- competencias.

### IT

- arquitectura;
- contratos;
- pruebas;
- errores;
- seguridad;
- mantenibilidad.

### AT

- teclado;
- foco;
- lectores;
- carga cognitiva;
- mensajes;
- adaptaciones.

Cada hito deberá registrar consultas, decisiones y deuda.

---

## 19. Criterios de salida de v0.8

```yaml
gate_close_v0_8:
  required:
    - experiencia_completa
    - perfil_minimo
    - misiones_estables
    - persistencia_recuperable
    - portafolio_curado
    - roundtrip_validado
    - pruebas_unitarias
    - pruebas_integracion
    - accesibilidad_baseline
    - seguridad_baseline
    - documentacion_tecnica
    - trazabilidad_SDD
    - deuda_visible
    - revision_PH_IT_AT
  prohibited:
    - datos_reales
    - release_estable
    - backend
    - auth
    - IA_embebida
    - Vista_Facilitador
```

---

## 20. Cronograma de referencia de v0.8

| Bloque | Duración orientativa |
|---|---:|
| H08-1 | 1 a 3 semanas |
| H08-1A | 1 a 3 semanas |
| H08-2 | 2 a 4 semanas |
| H08-3 | 2 a 4 semanas |
| H08-4 | 4 a 7 semanas |
| H08-5 | 2 a 4 semanas |
| H08-6 | 3 a 6 semanas |

Duración total estimada: **15 a 31 semanas**, con solapamientos posibles después de validar la primera vertical slice.

---

## 21. Primer bloque de cuatro días

### Día 1

- aprobar destino;
- revisar legacy;
- cerrar alcance de vertical slice.

### Día 2

- specs;
- estados;
- contratos;
- wireframes;
- errores;
- aceptación.

### Día 3

- esqueleto;
- schemas;
- fixtures;
- runner;
- CI.

### Día 4

- pruebas;
- auditoría;
- PH-IT-AT;
- gate readiness.

No se ejecutará este bloque hasta integrar los documentos rectores, revisar el kit pausado y emitir la autorización humana operacional correspondiente.

---

## 22. Relación con el kit H08-1 pausado

El kit anterior deberá compararse contra este plan.

Criterios de decisión:

- incluye o permite H08-1A;
- refleja la nueva definición de v1;
- no presupone cuatro interfaces;
- conserva datos sintéticos;
- separa legacy;
- incluye accesibilidad;
- incluye seguridad;
- incluye gate Ready-to-Code;
- no abre H08-2;
- no selecciona stack irreversible.

Resultados:

```text
usar
corregir
regenerar
sustituir
```

---

## 23. Aprobación, efectividad y guardarraíles

```yaml
approval:
  decision: approved
  date: 2026-07-14
  authority: responsable_humano_AI_StoryLab_1
  document_status: approved_for_canonical_integration
  baseline: 78685ec23fe35e9c5c8266a5a3f9d54cbdb3b625

effective_on:
  documentary_effect: merge_of_realignment_PR
  operational_effect:
    - reevaluation_of_paused_H08_1_kit
    - explicit_human_decision
    - applicable_gate

current_limits:
  H08_1_kit: paused_pending_reassessment
  H08_2: blocked
  real_data: prohibited
  backend: prohibited
  authentication: prohibited
  embedded_AI: prohibited
  facilitator_view: deferred
  automatic_merge: prohibited
```

Este plan queda aprobado como referencia operacional de `v0.8.0` realineada. Su
integración no ejecuta el plan automáticamente.

Después del merge se deberá:

1. verificar el estado limpio y el nuevo baseline de `main`;
2. auditar el kit H08-1 pausado contra este plan;
3. decidir si el kit se usa, corrige, regenera o sustituye;
4. formalizar H08-1A y `GATE-H08-1-READY-TO-CODE`;
5. autorizar por separado cualquier trabajo funcional posterior.
