# Transferencia Simétrica H08-5 → H08-6

## Estado entregado

```yaml
main: ae93ccef94506724559b8df7b1ccdfeb0489a927
PR_62: MERGED
H08_5: CLOSED_DOCUMENTALLY_AND_MERGED
H08_5A: PASS
M1_M4: FUNCTIONAL
portfolio: EXPORTABLE_AND_RECOVERABLE
import: UNTRUSTED_STAGING_WITH_HUMAN_CONFIRMATION
roundtrip: SEMANTIC_EQUIVALENCE_PASS
privacy: ALLOWLIST
network: NONE
telemetry: NONE
automatic_publication: NONE
H08_6:
  startup_conversation: PREPARED
  implementation: NOT_STARTED
```

## Decisiones vigentes

- agencia humana;
- reflexiones privadas y de cuidado alto excluidas de exportación;
- evidencia sintética;
- experiencia offline y local-first;
- no backend;
- no autenticación;
- no telemetría;
- no publicación automática;
- un PR por gran hito, no por conversación;
- primer commit de kit y activación;
- último commit de cierre documental;
- protocolo v3.1 aprobado;
- comentarios preparados por IA y publicados solo por humano;
- repairs dentro del alcance autorizado pueden reanudarse sin nuevo gate;
- Ready, merge y siguiente fase son gates separados;
- merge y generación del próximo kit son actos separados;
- cada gran sesión comienza en una conversación nueva con ZIP y prompt externo.

## Primera secuencia H08-6

```text
abrir conversación nueva
→ cargar prompt externo
→ cargar ZIP
→ verificar manifiesto y checksums
→ confirmar main y merge
→ revisar atestación post-merge
→ leer protocolo y bitácora
→ realizar alineamiento
→ decidir alcance humano
→ definir rama, PR e hitos
→ preparar primer commit de kit y activación
```
