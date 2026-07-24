# Estado canónico de apertura · AI StoryLab 1 v0.9.0

```yaml
project: AI StoryLab 1
version: v0.9.0
hito: H09-0
state_date: 2026-07-24
protocol: v3.2
entry_branch: main
entry_head: f0996d0bd79c4bd70d9a802ce4cbf67b5c076419
phase_branch: feat/v0.9-h09-0-rc-readiness
plan_route: APPROVED_BY_HUMAN
pedagogical_scope_alignment: HUMAN_RATIFIED
activation: AUTHORIZED
branch_creation: AUTHORIZED
first_documentary_commit: AUTHORIZED_AND_CREATED_BY_CONTAINING_COMMIT
commit_sha_record: EXTERNAL_OPERATOR_STATE
push: BLOCKED_PENDING_SEPARATE_HUMAN_AUTHORIZATION
Draft_PR: BLOCKED
functional_work: BLOCKED
H09_1: BLOCKED
GATE_V09_RC: NOT_AUTHORIZED
```

## Invariantes

- El baseline de entrada no se infiere. Debe coincidir exactamente con `f0996d0bd79c4bd70d9a802ce4cbf67b5c076419`.
- El commit que contiene este estado es exclusivamente documental.
- La allowlist del operador constituye la frontera material del commit.
- No se modifica `.github/workflows/`.
- No se modifica código, configuración funcional, dependencias ni versionado ejecutable.
- La deuda pedagógica ratificada no es backlog autorizado.
- H09-1 no se abre por el cierre de H09-0.
- El push y el Draft PR requieren tokens humanos separados.

## Próxima decisión

```text
AUTHORIZE_PUSH_H09_0
```

Ese token autorizará solamente la publicación remota del commit documental ya verificado. No autorizará Draft PR ni H09-1.
