# Protocolo candidato · Doble canal y tres ritmos

**Estado:** `CANDIDATE_STANDARD`  
**Validación inicial:** H08-3  
**Ingreso al SDD:** diferido hasta demostrar generalización

## Propósito

Coordinar trabajo humano, asistido por IA y ejecutado por máquina sin
confundir velocidad técnica con autoridad de decisión.

## Canal técnico-operacional

1. apertura explícita del bloque;
2. preflight antes de modificar archivos;
3. implementación delimitada;
4. pruebas focalizadas;
5. verificación completa;
6. commit funcional o documental;
7. push;
8. CI;
9. evidencia técnica.

## Canal narrativo y de gobernanza

1. comentario extendido preparado;
2. revisión humana;
3. publicación manual cuando corresponda;
4. bitácoras y continuidad;
5. riesgos, reservas y deuda;
6. consolidación canónica;
7. actualización final del cuerpo del PR.

## Tres ritmos

### Técnico

Rápido, reproducible e idempotente.

### Narrativo

Reflexivo y humanamente aprobado.

### Canónico

Consolidado una vez al cierre de sesión o PR.

## Preflight mínimo

```yaml
repository_root: resolved
branch: expected
HEAD: expected
remote_head: expected
working_tree: known
staging: known
node: compatible
dependencies: ready
gh_auth: ready
PR_state: OPEN
PR_mode: DRAFT
current_block: explicit
authorized_scope: explicit
forbidden_scope: explicit
verification_directory: apps/storylab
verification_command: npm run verify
```

## Estados idempotentes

```yaml
WORKTREE:
STAGED:
COMMITTED:
PUSHED:
CI_PENDING:
CI_PASSED:
EVIDENCE_READY:
COMPLETE:
```

Después de una interrupción se observa el estado y se continúa desde la
próxima transición válida. Nunca se reejecuta a ciegas.

## Distribución de autoridad

- Humano: propósito, valores, gates, aceptación, cierre y merge.
- IA: síntesis, trazabilidad, contradicciones, pruebas y explicación.
- Máquina: preflight, tests, hashes, Git, CI e idempotencia.
- Sistema: coherencia técnica, ética, creativa y longitudinal.

## Criterio de canonización futura

El protocolo podrá incorporarse al SDD cuando:

1. se use en otro ciclo independiente;
2. produzca resultados reproducibles;
3. no diluya agencia humana;
4. mantenga trazabilidad de errores y reanudación;
5. demuestre utilidad más allá de H08-3.
