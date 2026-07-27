# Actualización de la Bitácora del Capitán · Apertura de v1.0.0

```yaml
project: AI StoryLab 1
date: 2026-07-24
port_of_origin: main_after_PR_64_merge
entry_head: 83cd5983ad3e66d43a442c090ce95f3bb22ee968
phase: v1.0.0
hito: V10-0
maneuver: FORMAL_ACTIVATION_AND_RELEASE_PHASE_CONTRACT
human_order: "Aprobado. Adelante de forma expedita."
engines:
  documentary: ON
  functional: SEALED
route: ONE_BRANCH_ONE_DRAFT_PR
next_hito: V10_1_BLOCKED
```

## Posición de la nave

La candidata v0.9.0 llegó al puerto de integración con ocho reservas explícitas,
cero hallazgos bloqueantes y 28 deudas aceptadas que no forman parte del motor
activo. PR #64 fue fusionado después del cierre documental de la sesión anterior.
Ese delta es una transición esperada, no una avería.

## Orden de cubierta

- abrir la travesía v1.0.0 mediante documentación;
- conservar un solo casco: rama y Draft PR únicos;
- ejecutar cada hito como un movimiento reanudable;
- mantener V10-1 cerrado hasta decisión humana;
- no confundir elegibilidad, integración y publicación;
- no encender trabajo funcional durante V10-0.

## Aprendizaje de navegación

Antes de trazar una maniobra debe recuperarse el sentido longitudinal del
proyecto, no solo el estado remoto. La capacidad de una herramienta para escribir
en GitHub no sustituye el canal acordado: la persona ejecuta desde VS Code, la IA
estructura y la máquina demuestra.

---

## Punto de navegación · V10-1

```yaml
hito: V10-1
maneuver: RELEASE_CONTRACT_AND_CLAIMS_DISCIPLINE
parent_commit: 7486b9f1b67e9f00e2a1bfad0742c5b54c2d4b6e
human_order: "Adelante con V10-1 expedito."
functional_engines: SEALED
course_definition:
  verified_claims: EVIDENCE_REQUIRED
  unsupported_claims: NOT_ALLOWED
  publication: HUMAN_SEPARATE_DECISION
next_hito: V10_2_BLOCKED
```

La travesía entra en aguas de precisión semántica: el nombre `v1.0.0` no será
una bandera decorativa, sino una afirmación que deberá cargar su propia evidencia.

---

## Carta de reservas · V10-2

```yaml
hito: V10-2
maneuver: DISPOSITION_OF_EIGHT_INHERITED_RESERVATIONS
parent_commit: b36f0e9e39861022b540d7ca1129e5037f7db118
human_order: "Adelante con V10-2 expedito."
reservations:
  resolved: 1
  accepted_limitation: 2
  not_claimed: 2
  deferred: 1
  blocking_for_release: 2
functional_engines: SEALED
next_hito: V10_3_BLOCKED
```

La tripulación no arrojó las reservas por la borda ni las convirtió en averías
imaginarias. Cada una recibió coordenadas, efecto y autoridad. RSV-03 y RSV-06
quedan como boyas rojas antes de la publicación; las demás delimitan el canal
sin encender reparaciones.

---

## Recorrido de visibilidad · V10-3

```yaml
hito: V10-3
maneuver: EXPERIENCE_ACCESSIBILITY_AND_DECLARED_COMPATIBILITY
parent_commit: 7cfd79bc087e90e286fb6e76d10716c6ef434555
human_order: "Adelante con V10-3 expedito."
declared_browsers: "Safari 26.5.2, Google Chrome 150.0.7871.184, Firefox 152.0.1"
VoiceOver: PASS
RSV_03: RESOLVED_BOUNDED
RSV_06: RESOLVED_BOUNDED
functional_engines: SEALED
next_hito: V10_4_BLOCKED
```

La nave probó sus instrumentos en aguas concretas, no en todos los océanos. La
matriz declara solo navegadores realmente recorridos y la revisión de VoiceOver
permanece acotada a la combinación observada.

---

## Inspección de casco y suministros · V10-4

```yaml
hito: V10-4
maneuver: SECURITY_PRIVACY_AND_SUPPLY_CHAIN_AUDIT
parent_commit: c4b5a5174b9617251effe6fd5a6b025d9f210d0f
human_order: "Adelante con V10-4 expedito."
security_gate: PASS
blocking_findings: 0
review_findings: 3
repairs: 0
dependencies_changed: false
workflows_changed: false
next_hito: V10_5_BLOCKED
```

La inspección abrió las cajas, leyó los sellos y revisó el casco sin reemplazar
piezas. Cada hallazgo conserva severidad, efecto y autoridad humana.

---

## Carta de identidad de la candidata · V10-5

```yaml
hito: V10-5
maneuver: VERSION_SCHEMA_AND_ARTIFACT_POLICY
parent_commit: 5cf66e862f0d414a3fdbe532d87c32e52ab75f91
human_order: "Adelante con V10-5 expedito."
artifact_gate: PASS
source_commit: 5cf66e862f0d414a3fdbe532d87c32e52ab75f91
application_tree: 2b64a7ecaae3b5c86cb465fd00a952e8f48d04bd
probe_artifact_sha256: 594a60d8f5b2a5b58b3c435d30b52cde2c7998ace8712f0b8363c7e0d15cbad5
RC_assigned: false
stable_assigned: false
artifact_published: false
next_hito: V10_6_BLOCKED
```

Se midieron dos cascos construidos desde el mismo plano y en el mismo astillero.
Sus hashes coinciden, pero la nave final todavía no ha sido
ensamblada ni botada.

---

## Botadura retenida · V10-6

Source `533fcf28a0c9053b7da79ca70ded80450d94cf35`, candidata `1.0.0-rc.1`, SHA-256 `6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c`, publicación retenida.

---

## Cartas de navegación para el gate · V10-7

```yaml
hito: V10-7
maneuver: RELEASE_DOSSIER_AND_FINAL_CLAIMS
parent_commit: f888bb35abc65e6b3a6b70374b2865a96d6d7e5a
source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
candidate_version: 1.0.0-rc.1
artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
dossier_gate: PASS
publication_hold: ACTIVE
next_hito: V10_A_BLOCKED
```

La nave sigue en dique seco, pero ahora cada escotilla, límite y sello tiene una
leyenda verificable. V10-A recibe el mapa, no la llave de publicación.

---

## Auditoría del astillero · V10-A

```yaml
hito: V10-A
maneuver: PROCEDURAL_INDEPENDENT_AUDIT
parent_commit: ace90849e74cc14937e3cf9782fff90854b7849e
source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
candidate_version: 1.0.0-rc.1
artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
audit_gate: PASS
controls_passed: 24
controls_failed: 0
publication_hold: ACTIVE
GATE_V10_RELEASE: BLOCKED
```

Se volvió al plano original, se reconstruyó el casco y se comparó byte por byte.
El informe prepara la puerta del gate, pero no gira su llave.

---

## Cuatro llaves en sobres separados · GATE-V10-RELEASE

```yaml
gate: GATE-V10-RELEASE
parent_commit: 2201cd183237ce8a5038c4eb2bd4f2f8360e9457
candidate_version: 1.0.0-rc.1
source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
gate_result: PASS
controls_passed: 18
controls_failed: 0
publication_hold: ACTIVE
actions_executed: 0
```

El gate inspeccionó cuatro llaves, pero ninguna salió de su sobre. La primera
puede presentarse a decisión humana; las otras esperan su turno y sus pruebas.

---

## Luces del muelle · V10-PUBLIC
```yaml
hito: V10-PUBLIC
parent_commit: 5e811917ad5906112bee8b23a44fcd88b8cf9e88
candidate_version: 1.0.0-rc.1
public_documents: 10
public_surface_gate: PASS
GitHub_Pages: BLOCKED
stable_ZIP: BLOCKED
Ready_for_Review: PAUSED_BY_NEW_HEAD
```
La nave ya tiene letreros para visitantes, pero el muelle web y el paquete estable esperan sus propias inspecciones.

---

## Muelle web sin abrir · V10-PAGES
```yaml
base: /ai-storylab-1/
planned_url: https://ricardojuanmorales.github.io/ai-storylab-1/
local_smoke: PASS
workflow: BUILD_ALWAYS_DEPLOY_MANUAL_MAIN_ONLY
deployment_performed_by_V10_PAGES: false
preexisting_configured: true
preexisting_live_endpoint_observed: true
configuration_compatibility: SOURCE_SWITCH_REQUIRED_BEFORE_DEPLOYMENT
```
El muelle ya soporta peso. V10-PAGES no movió la configuración remota preexistente.

---

## Puente de memoria · V10-LEGACY-BRIDGE

```yaml
live_MVP: https://ricardojuanmorales.github.io/ai-storylab-1/
legacy_route_prepared: /ai-storylab-1/legacy/v0.3.0/
backup_bridge_prepared: /ai-storylab-1/legacy/bridge/
source_keys_preserved: true
deployment: false
```
