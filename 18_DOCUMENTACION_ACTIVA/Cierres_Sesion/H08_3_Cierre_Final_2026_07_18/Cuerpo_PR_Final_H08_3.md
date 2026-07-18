# H08-3 · Persistencia y schemas endurecidos

## Estado final atestiguado

```yaml
baseline: 7c783aa4f55df0aeeec1e0ad7e65f58149d43e16
branch: feat/v0.8-h08-3-persistence-schema-hardening
checkpoint_commit: a8f6c379d5397a376d35855d85fe161d4f9201c6
closure_commit: 236593cf00356dc12ee31259f6380edc149e7075

H08_3:
  lifecycle: CLOSED_DOCUMENTALLY
  technical_result: PASS
  human_governance: PASS

H08_3A:
  human_verdict: PASS
  publication: COMPLETE

closure_CI:
  workflow: H08-1.3 Baseline
  run: 29662093574
  Node_22: PASS
  Node_24: PASS
  url: https://github.com/ricardojuanmorales/ai-storylab-1/actions/runs/29662093574

PR_mode: DRAFT
ready_for_review: PENDING_SEPARATE_HUMAN_AUTHORIZATION
merge: BLOCKED
```

## Propósito alcanzado

H08-3 endurece la persistencia local y la evolución de schemas sin
ampliar el arco funcional de AI StoryLab 1. Conserva la experiencia
local-first de H08-2 y añade contratos verificables para migración,
integridad, escritura recuperable, corrupción, cuota, reparación y
observabilidad local segura.

## Bloques completados

1. **H08-3.0 · entrada y contratos**
   - gate humano aprobado con reserva procedural;
   - arquitectura, amenazas, riesgos, criterios y backlog ratificados.

2. **H08-3.1 · versionado y migración**
   - schema `0.8.0-alpha.1` histórico;
   - schema `0.8.0-alpha.2` actual;
   - migración explícita, determinista, idempotente y no destructiva;
   - rechazo seguro de versiones futuras y legacy sin contrato.

3. **H08-3.2 · envelope, índice y escritura recuperable**
   - envelope v1 con digest SHA-256 para corrupción accidental;
   - índice metadata-only;
   - puntero recent independiente;
   - staging y roll-forward sin afirmar atomicidad inexistente.

4. **H08-3.3 · corrupción, cuota y recuperación**
   - errores tipados;
   - preservación de fuentes;
   - cuarentena metadata-only;
   - reparación determinista;
   - cuota con conservación del último snapshot confirmado.

5. **H08-3.4 · integración y observabilidad**
   - flujo alpha.1 → alpha.2 → envelope v1;
   - recuperación integral de proyectos H08-2;
   - coherencia entre snapshot, índice y recent;
   - observabilidad exclusivamente local.

6. **H08-3A · checkpoint independiente**
   - 5 suites focalizadas y 40 pruebas PASS;
   - 24 archivos y 164 pruebas PASS;
   - PASS humano publicado;
   - cero hallazgos bloqueantes.

## Verificación

```yaml
local:
  typecheck: PASS
  build: PASS
  architecture_audit: PASS
  secrets_audit: PASS
  privacy_audit: PASS
  vertical_slice_audit: PASS
  test_files: 24
  tests: 164

remote:
  Node_22: PASS
  Node_24: PASS
```

## Alcance preservado

```yaml
backend: false
cloud: false
network: false
telemetry: false
analytics: false
IndexedDB: false
full_multi_project_UI: false
import: false
roundtrip: false
automatic_download: false
M2_M3_M4_functional: false
runtime_dependencies_changed: false
package_files_changed: false
```

## Riesgos, reservas y deuda

- `RES-H08-3-ENTRY-CI-001`: **resuelta**, con evidencia Node 22/24.
- Riesgos de destrucción de fuente, escrituras parciales, corrupción,
  cuota y filtración de metadatos: **mitigados y probados**.
- `DEBT-H08-3A-CI-ACTIONS-001`: **abierta y no bloqueante**.
- IndexedDB permanece diferido hasta existir detonantes verificables.

## Protocolo candidato

**Doble canal y tres ritmos** fue validado como protocolo candidato.
Su entrada al SDD sigue diferida hasta demostrar generalización en otro
ciclo independiente.

## Snapshot del cierre canónico

```yaml
commits: 12
changed_files: 185
additions: 10388
deletions: 301
snapshot_commit: 236593cf00356dc12ee31259f6380edc149e7075
```

## Regla de atestación

Este documento registra el cierre publicado y su CI. La atestación
post-publicación vive en un commit posterior para evitar una referencia
circular al hash del propio commit.

## Frontera final

H08-3 está cerrado documental y técnicamente. El PR permanece Draft.
Ready for Review y merge requieren decisiones humanas separadas.
