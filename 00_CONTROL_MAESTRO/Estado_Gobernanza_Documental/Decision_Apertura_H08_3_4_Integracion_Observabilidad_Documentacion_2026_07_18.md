
# Decisión de apertura de H08-3.4

**Fecha:** 2026-07-18  
**PR:** #60  
**Parent autorizado:** `80879e8fdeec1ed36bb8a484a50d5ffbb2bd80b3`

## Decisión humana

Se aprueba el protocolo expedito de colaboración y se autoriza
`H08-3.4 · Integración, observabilidad local y documentación`.

```yaml
H08_3_3:
  implementation: PUBLISHED_AND_VERIFIED
  canonical_closure: DEFERRED_TO_FINAL_GOVERNANCE_COMMIT

H08_3_4:
  lifecycle: OPEN
  implementation: AUTHORIZED_WITHIN_DEFINED_SCOPE

H08_3A: NOT_OPEN
PR_mode: DRAFT
merge: BLOCKED
```

## Alcance autorizado

- recuperación integrada de un proyecto H08-2;
- flujo raw alpha.1 → alpha.2 → envelope v1;
- recuperación integrada de staging;
- coherencia entre snapshot, índice y puntero reciente;
- observabilidad local segura mediante errores tipados y cuarentena metadata-only;
- pruebas de integración y documentación técnica.

## Exclusiones

- nuevas semánticas de persistencia;
- backend, red o nube;
- telemetría o analíticas;
- IndexedDB;
- UI completa de múltiples proyectos;
- importación, roundtrip o descarga;
- expansión funcional de M2, M3 o M4;
- nuevas dependencias runtime;
- apertura de H08-3A.

La apertura es humana y explícita. La ejecución local no autoriza publicación,
cierre, Ready for Review ni merge.
