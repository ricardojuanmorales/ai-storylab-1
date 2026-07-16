# AI StoryLab 1

## Constructor ético de historias multimedia con IA responsable

AI StoryLab 1 es un ecosistema transdisciplinario de investigación-creación,
aprendizaje lúdico y producción multimedia asistida por inteligencia artificial
responsable.

Su evolución se gobierna mediante Spec-Driven Development, documentación
activa, pruebas reproducibles, revisión humana y gates independientes.

> La persona conserva la agencia. La tecnología amplía posibilidades sin
> apropiarse del criterio creativo, pedagógico o ético.

---

## Estado actual

```yaml
version_line: v0.8.0
opening_mode: strategic_planning
current_unit: H08-2.0
current_process: H08_2_strategic_planning
current_branch: feat/v0.8-h08-2-consolidated-vertical-slice
current_PR: pending_creation
PR_mode: consolidated_draft

baseline:
  main_sha: 9b941f185feb1e59f7a774ad07c976c415537dae
  source_PR: 58
  merged_head_sha: 8469f1fd499309876ea6fc4441ace81227550112

schema_version: 0.8.0-alpha.1
test_files: 12
tests: 63
runtime_dependencies: 0

architecture:
  domain: integrated
  ports: integrated
  application: minimal_use_cases
  adapters: local_replaceable
  presentation: absent

persistence:
  current: ephemeral_in_memory
  concrete_H08_2_adapter: pending_ADR

data:
  mode: synthetic_only
  real_data: prohibited

H08_1:
  lifecycle: fulfilled

H08_1A:
  lifecycle: fulfilled
  verdict: pass_with_reservations

GATE_H08_1_READY_TO_CODE:
  decision: approve_with_reservations
  status: approved_with_reservations

H08_2:
  lifecycle: strategic_planning_open
  implementation: not_started
  PR_strategy: one_consolidated_PR
```

El PR #58 fue fusionado y estableció el baseline canónico
`9b941f185feb1e59f7a774ad07c976c415537dae`. La verificación posterior al merge pasó localmente y en
GitHub Actions para Node 22 y Node 24.

H08-2 se desarrollará en un único PR Draft consolidado mediante bloques de
commits verificables y comentarios de hito. El merge solamente podrá ocurrir
después del checkpoint H08-2A sobre un SHA congelado.

---

## Secuencia canónica

```text
H08-1 cumplido
→ H08-1A cumplido con reservas
→ GATE-H08-1-READY-TO-CODE aprobado con reservas
→ H08-2.0 · apertura estratégica
→ H08-2.1 · readiness de contratos
→ H08-2.2 · shell accesible
→ H08-2.3 · ciclo creativo integrado
→ H08-2.4 · recuperación local y export preview
→ H08-2A · checkpoint independiente
→ decisión humana de integración
```

Todos los bloques H08-2.0 a H08-2.4 viven en el mismo PR Draft.

---

## Primera vertical slice

```text
perfil sintético
→ crear proyecto
→ abrir una misión configurable
→ completar actividad textual
→ crear evidencia
→ escribir reflexión privada
→ registrar decisión humana
→ incorporar o retirar del portafolio
→ recuperar estado local
→ previsualizar un paquete de exportación validado
```

Quedan diferidos:

- importación y roundtrip completo;
- migración desde v0.3;
- múltiples misiones;
- almacenamiento multimedia binario;
- endurecimiento de persistencia;
- Vista del Facilitador;
- funciones grupales;
- IA embebida;
- analíticas;
- nube;
- datos reales;
- publicación automática.

---

## Baseline técnico existente

La raíz técnica provisional vive en `apps/storylab/`.

```text
src/domain       reglas, tipos e invariantes
src/ports        capacidades requeridas
src/application  casos de uso mínimos
src/adapters     mecanismos locales sustituibles
src/schemas      JSON Schema 2020-12
src/tests        pruebas reproducibles
tools            auditorías
```

La aplicación todavía no tiene capa `presentation`.

---

## Reservas transferidas

1. Crear pruebas nominales para INV-009 e INV-010 antes de expandir portafolio.
2. Mantener explícita la limitación heurística de la auditoría de privacidad.
3. Conservar el modelo de gobernanza de mantenedor único.
4. Seleccionar persistencia concreta solamente mediante ADR.
5. Mantener todas las capacidades diferidas bloqueadas.

---

## Documentación activa H08-2

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_Apertura_Estrategica/`

---

## Regla de oro

```text
Nada avanza por entusiasmo.
Todo avanza por evidencia, revisión humana y gate.
```
