# Decisión humana de aprobación y activación de v0.9.0

```yaml
project: AI StoryLab 1
version: v0.9.0
hito: H09-0
decision_date: 2026-07-24
plan_route: APPROVED_BY_HUMAN
pedagogical_scope_alignment: HUMAN_RATIFIED
activation_H09_0: AUTHORIZED
branch_creation: AUTHORIZED
first_documentary_commit: AUTHORIZED
push: PENDING_SEPARATE_HUMAN_AUTHORIZATION
Draft_PR: BLOCKED
functional_work: BLOCKED
H09_1: BLOCKED
GATE_V09_RC: NOT_AUTHORIZED
protocol: v3.2
```

## Decisiones humanas registradas

La persona aprobó el Plan de Ruta de AI StoryLab 1 v0.9.0 con la adición controlada de alcance pedagógico y deuda aceptada.

Posteriormente autorizó la activación de la apertura de v0.9.0 con:

- creación de la rama de la fase;
- primer commit estrictamente documental;
- incorporación del Plan de Ruta aprobado;
- aplicación del Protocolo de Trabajo v3.2 en modalidad expedita, estricta y reanudable.

La orden de ejecución fue confirmada después de aclarar que:

- el trabajo se ejecuta en la terminal integrada de VS Code desde el root del repositorio;
- los operadores se manejan desde `Downloads`;
- la persona autoriza y ejecuta;
- la IA diseña, delimita, interpreta y transfiere;
- la máquina verifica, escribe, calcula y demuestra;
- la documentación conserva la continuidad.

## Alcance autorizado

```yaml
authorized:
  - activate_H09_0
  - create_local_phase_branch
  - generate_allowlisted_documentation
  - create_one_documentary_commit

not_authorized:
  - functional_changes
  - push_without_separate_token
  - Draft_PR
  - H09_1
  - repairs
  - workflows
  - tag
  - release_candidate
  - GATE_V09_RC
```

## Regla de autoridad

La creación del commit no autoriza su publicación remota. El push, el Draft PR y el siguiente hito requieren decisiones humanas separadas.
