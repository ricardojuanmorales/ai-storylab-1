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
opening_mode: contract_readiness
current_unit: H08-2.1
current_process: H08_2_contract_readiness
current_branch: feat/v0.8-h08-2-consolidated-vertical-slice
current_PR: 59
PR_mode: consolidated_draft

baseline:
  main_sha: 9b941f185feb1e59f7a774ad07c976c415537dae
  H08_2_0_head: 46a3c05b3535e917b4681b4947794f058aa03de1

schema_version: 0.8.0-alpha.1
test_files: 12
tests: 65
runtime_dependencies: 0

architecture:
  domain: integrated
  ports: integrated
  application: contract_ready
  adapters: local_replaceable
  presentation: absent

persistence:
  current: ephemeral_in_memory
  H08_2_candidate: localStorage_behind_port
  decision_status: proposed_before_H08_2_4

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
  lifecycle: contract_readiness_active
  current_block: H08_2_1
  functional_implementation: not_started
  PR_strategy: one_consolidated_PR
```

H08-2 se desarrolla en el PR Draft #59 mediante bloques de commits
verificables. H08-2.0 abrió la planificación estratégica. H08-2.1 cierra las
reservas de contratos antes de crear presentación o persistencia.

---

## Secuencia canónica

```text
H08-1 cumplido
→ H08-1A cumplido con reservas
→ GATE-H08-1-READY-TO-CODE aprobado con reservas
→ H08-2.0 · apertura estratégica cumplida
→ H08-2.1 · readiness de contratos activa
→ H08-2.2 · shell accesible
→ H08-2.3 · ciclo creativo integrado
→ H08-2.4 · recuperación local y export preview
→ H08-2A · checkpoint independiente
```

Todos los bloques viven en el mismo PR Draft. El merge permanece prohibido
antes de H08-2A.

---

## Readiness H08-2.1

Este bloque incorpora:

- pruebas nominales para INV-009 e INV-010;
- contrato no serializado `MissionDefinition`;
- contratos de casos de uso de la vertical slice;
- ADR provisional de presentación;
- ADR propuesto de persistencia;
- criterios Given/When/Then;
- wireframes textuales;
- threat model proporcional;
- matriz de trazabilidad.

No incorpora React, Vite, DOM, `localStorage` ni funcionalidad visible.

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
→ previsualizar paquete de exportación validado
```

---

## Límites vigentes

- datos reales prohibidos;
- importación y roundtrip diferidos;
- migración v0.3 diferida;
- múltiples misiones diferidas;
- almacenamiento binario prohibido;
- Vista del Facilitador bloqueada;
- funciones grupales bloqueadas;
- IA embebida bloqueada;
- analíticas, nube y publicación automática bloqueadas.

---

## Documentación activa

- `18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_Apertura_Estrategica/`
- `18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_1_Readiness_Contratos/`

---

## Regla de oro

```text
Nada avanza por entusiasmo.
Todo avanza por evidencia, revisión humana y gate.
```
