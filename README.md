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
opening_mode: accessible_shell
current_unit: H08-2.2
current_process: H08_2_accessible_shell
current_branch: feat/v0.8-h08-2-consolidated-vertical-slice
current_PR: 59
PR_mode: consolidated_draft

baseline:
  main_sha: 9b941f185feb1e59f7a774ad07c976c415537dae
  H08_2_0_head: 46a3c05b3535e917b4681b4947794f058aa03de1
  H08_2_1_head: a237b1882ad27e17480d51b524038d996793d6fa

schema_version: 0.8.0-alpha.1
test_files: 13
tests: 72
runtime_dependencies: 2

architecture:
  domain: integrated
  ports: integrated
  application: contract_ready
  adapters: local_replaceable
  presentation: accessible_shell

presentation:
  framework: React_19_2_7
  build_tool: Vite_8_1_4
  visible_shell: true
  creative_cycle_connected: false

persistence:
  current: ephemeral_in_memory
  durable_adapter: not_implemented
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
  lifecycle: accessible_shell_active
  current_block: H08_2_2
  creative_cycle_implementation: not_started
  PR_strategy: one_consolidated_PR
```

H08-2 se desarrolla en el PR Draft #59 mediante bloques verificables. H08-2.1
cerró el readiness de contratos. H08-2.2 incorpora la primera interfaz visible,
sin adelantar la implementación del ciclo creativo ni la persistencia.

---

## Secuencia canónica

```text
H08-2.0 · apertura estratégica cumplida
→ H08-2.1 · readiness de contratos cumplida
→ H08-2.2 · shell accesible activa
→ H08-2.3 · ciclo creativo integrado
→ H08-2.4 · recuperación local y export preview
→ H08-2A · checkpoint independiente
```

Todos los bloques viven en el mismo PR Draft. El merge permanece prohibido
antes de H08-2A.

---

## Alineación estratégica ratificada

```yaml
v0_8_close: complete_canonical_experience
missions:
  - M1_intencion_creadora
  - M2_arquitectura_narrativa
  - M3_produccion_multimodal
  - M4_curaduria_y_cierre
experience_model: guided_iterative_arc
implementation:
  H08_2_3: M1_and_reusable_engine
  H08_3: persistence
  H08_4: M2_M3_M4
  H08_5: portfolio_and_roundtrip
```

H08-2A revisa la primera vertical slice, pero no sustituye
`GATE-V08-CLOSE`.

---

## Shell accesible H08-2.2

Este bloque incorpora:

- React y React DOM como únicas dependencias runtime;
- Vite como herramienta de construcción;
- landmarks semánticos y enlace de salto;
- navegación por teclado;
- foco visible;
- contraste alto;
- reducción de movimiento;
- escala de texto;
- región viva para anunciar cambios;
- mapa visible del ciclo creativo;
- pruebas de presentación con JSDOM y Testing Library;
- auditorías ampliadas a `.tsx` y a la capa `presentation`.

El shell no crea proyectos, misiones, evidencias, reflexiones ni portafolios.
Esas operaciones permanecen gobernadas por los contratos de H08-2.1 y se
implementarán en H08-2.3.

---

## Límites vigentes

- datos reales prohibidos;
- persistencia durable ausente;
- importación y roundtrip diferidos;
- migración v0.3 diferida;
- almacenamiento binario prohibido;
- Vista del Facilitador bloqueada;
- funciones grupales bloqueadas;
- IA embebida bloqueada;
- analíticas, nube y publicación automática bloqueadas.

---

## Documentación activa

- `18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_Apertura_Estrategica/`
- `18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_1_Readiness_Contratos/`
- `18_DOCUMENTACION_ACTIVA/Continuidad/v0_8_0/H08_2_2_Shell_Accesible/`

---

## Regla de oro

```text
La interfaz hace visible el sistema.
No reemplaza sus contratos ni decide por la persona.
```
