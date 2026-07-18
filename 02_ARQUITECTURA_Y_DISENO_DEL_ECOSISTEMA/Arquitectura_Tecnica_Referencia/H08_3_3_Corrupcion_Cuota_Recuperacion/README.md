# H08-3.3 · Corrupción, cuota y recuperación

```yaml
lifecycle: open
opening_parent: 6d46255b4f56ee134ffd554ae04afbcd63c9eba5
opening_commit: 011cd1776dc25b6f29a70aa7d4f2d5a60510e5c5
contract_definition: frozen
implementation: verified_local
local_verification: PASS
remote_CI: pending_publication
H08_3_4: not_open
PR_mode: draft
merge: blocked
```

Este directorio define y documenta la implementación del bloque H08-3.3.

## Capacidades implementadas

- clasificación segura de fallos mediante `details.kind`;
- cuarentena persistente metadata-only;
- preservación de fuentes corruptas;
- rechazo de versiones futuras;
- cuota sin borrado automático;
- reparación de índice desde snapshots válidos;
- limpieza de `recent` huérfano;
- roll-forward idempotente;
- fault injection en staging, snapshot, índice, recent y cleanup.

## Evidencia local

```yaml
npm_verify: PASS
test_files: 23
tests: 160
functional_scope: H08_3_3_ONLY
runtime_dependency_changes: false
package_changes: false
presentation_changes: false
application_changes: false
```

H08-3.3 permanece abierto hasta publicación, CI remota y cierre humano.
H08-3.4 permanece cerrado.
