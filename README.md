# AI StoryLab 1

## Constructor ético de historias multimedia con IA responsable

AI StoryLab 1 es un ecosistema transdisciplinario de investigación-creación,
aprendizaje lúdico y producción multimedia asistida por inteligencia artificial
responsable.

Su evolución se gobierna mediante Spec-Driven Development, documentación
activa, pruebas reproducibles, revisiones humanas y gates independientes.

> La persona conserva la agencia. La tecnología amplía posibilidades sin
> apropiarse del criterio creativo, pedagógico o ético.

---

## Estado actual

```yaml
version_line: v0.8.0
opening_mode: open_limited
current_unit: H08-1.5
current_PR: 57
PR_state: draft_pending_human_review_and_merge

schema_version: 0.8.0-alpha.1
test_files: 11
tests: 48
runtime_dependencies: 0

architecture:
  domain: integrated
  ports: integrated
  application: minimal_use_cases
  adapters: local_replaceable
  presentation: absent

security:
  architecture_audit: passed
  secret_audit: passed
  privacy_audit: passed
  safe_error_boundary: implemented

accessibility:
  preferences_contract: implemented
  update_use_case: implemented
  presentation_review: future_required

persistence:
  current: ephemeral_in_memory
  durable_technology: not_selected

data:
  mode: synthetic_only
  real_data: prohibited

H08_1: in_progress_until_merge_PR_57
H08_1A: blocked_until_merge_and_new_conversation
GATE_H08_1_READY_TO_CODE: pending
H08_2: blocked
```

La fase H08-1.5 dispone de implementación, pruebas y cierre documental. Su
integración solo se hará efectiva mediante decisión humana de merge sobre PR
#57.

---

## Secuencia canónica

```text
PO-H08-1
→ H08-1
  → H08-1.1 · ADR y frontera técnica
  → H08-1.2 · Dominio, contratos y schemas
  → H08-1.3 · Runner, pruebas y CI
  → H08-1.4 · Esqueleto modular y adaptadores
  → H08-1.5 · Seguridad, accesibilidad y cierre
→ H08-1A · checkpoint independiente
→ GATE-H08-1-READY-TO-CODE
→ H08-2
```

H08-1A no es una continuación automática de H08-1.5. Requiere su propio kit,
una conversación nueva y una evaluación independiente.

H08-2 no puede abrirse antes de completar H08-1A y aprobar el gate aplicable.

---

## Qué existe en el baseline técnico

La raíz técnica provisional vive en:

`apps/storylab/`

Capas disponibles:

```text
src/domain       reglas, tipos, invariantes y contratos de accesibilidad
src/ports        capacidades requeridas por el núcleo
src/application  casos de uso mínimos
src/adapters     mecanismos locales sustituibles
src/schemas      fronteras serializadas JSON Schema 2020-12
src/tests        pruebas de dominio, schemas, aplicación y adaptadores
tools            auditorías arquitectónicas, de secretos y privacidad
```

Primeros casos de uso:

- `createProject`;
- `saveProject`;
- `loadProject`;
- `removeProject`;
- `updateAccessibilityPreferences`.

Primeros adaptadores:

- `InMemoryProjectRepository`;
- `SystemClock`;
- `RandomUuidGenerator`.

La aplicación no tiene todavía capa `presentation`.

---

## Principios técnicos vigentes

```text
dominio independiente del framework
puertos antes que infraestructura
adaptadores sustituibles
persistencia durable diferida
identificadores opacos y no personales
errores públicos mínimos
datos sintéticos
capacidades diferidas en false
pruebas antes de integración
CI como evidencia, no como autoridad humana
```

La versión histórica v0.3 puede funcionar como oráculo de comportamiento y
fuente de pruebas, pero no como fundamento arquitectónico automático.

---

## Límites vigentes

No están autorizados:

- interfaz funcional o primera vertical slice;
- backend, autenticación o nube;
- persistencia durable;
- datos reales o grupales;
- Vista del Facilitador;
- dashboard o analíticas;
- IA embebida;
- publicación automática;
- importación directa del legacy;
- H08-2.

---

## Documentación canónica de H08-1

### Arquitectura y especificación técnica

- `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/H08_1_1_ADR_Frontera_Tecnica/`
- `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/H08_1_2_Dominio_Contratos_Schemas/`
- `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/H08_1_3_Runner_Pruebas_CI/`
- `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/H08_1_4_Esqueleto_Modular_Adaptadores/`
- `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/H08_1_5_Seguridad_Accesibilidad_Cierre/`

### Memoria y continuidad

- `18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_1_1_ADR_Frontera_Tecnica/`
- `18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_1_2_Dominio_Contratos_Schemas/`
- `18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_1_3_Runner_Pruebas_CI/`
- `18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_1_4_Esqueleto_Modular_Adaptadores/`
- `18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_1_5_Seguridad_Accesibilidad_Cierre/`

### Gobernanza

- `00_CONTROL_MAESTRO/Spec_Driven_Development/`
- `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/`
- `18_DOCUMENTACION_ACTIVA/Gates/`

---

## Protocolo posterior a PR #57

Después del merge de PR #57 se seguirá esta secuencia exacta:

1. En esta misma conversación se verificará el merge y el nuevo baseline.
2. En esta misma conversación se preparará el kit de inicio y continuidad de
   H08-1A.
3. H08-1A no se ejecutará en esta conversación.
4. El checkpoint H08-1A se activará en una conversación nueva.
5. El gate `GATE-H08-1-READY-TO-CODE` permanecerá pendiente hasta recibir el
   dictamen independiente.
6. H08-2 permanecerá bloqueado.

---

## Archivo del README anterior

La versión del README reemplazada durante este cierre se conserva como evidencia
histórica no vigente en:

`99_ARCHIVO_HISTORICO/Snapshots_README_Raiz/README_AI_StoryLab_1_Pre_Cierre_H08_1_5_2026-07-15.md`

Su ingreso cumple la política de `99_ARCHIVO_HISTORICO`: hash SHA-256,
inventario, manifiesto, sucesor canónico y declaración de no autoridad.

---

## Regla de oro

```text
Nada avanza por entusiasmo.
Todo avanza por evidencia, revisión humana y gate.
```
