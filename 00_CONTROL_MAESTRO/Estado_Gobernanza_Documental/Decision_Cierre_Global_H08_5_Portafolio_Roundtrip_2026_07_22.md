# Decisión de cierre global H08-5 · Portafolio y Roundtrip

**Fecha:** 2026-07-22  
**PR:** #62  
**Checkpoint aprobado:** `ee14ee6c5962ff3acdbee1e80ac25ea4df87b182`  
**Autorización humana:** veredicto `PASS` para H08-5A y cierre documental global.

## Decisión

Se autoriza y registra el cierre documental global de H08-5.

```yaml
H08_5_0: CLOSED_CONTRACTUALLY
H08_5_1: CLOSED_CANONICALLY
H08_5_2: CLOSED_CANONICALLY
H08_5_3: CLOSED_CANONICALLY
H08_5_4: CLOSED_CANONICALLY
H08_5_5: CLOSED_CANONICALLY
H08_5_6: CLOSED_CANONICALLY
H08_5A:
  technical_recommendation: PASS_CANDIDATE
  human_verdict: PASS

H08_5:
  lifecycle: CLOSED_DOCUMENTALLY
  technical_result: PASS
  governance_result: PASS

PR_mode: DRAFT
ready_for_review: NOT_AUTHORIZED
merge: BLOCKED
H08_6: BLOCKED
PR_comments: HUMAN_ONLY
```

## Fundamento

- contrato `storylab_portfolio/1.0.0` congelado;
- proyección canónica y privacidad por allowlist;
- exportación local bajo preview y confirmación humana;
- importación no confiable con staging previo a mutación;
- compatibilidad controlada y roundtrip semántico;
- importación como copia con regeneración exclusiva de `project.id`;
- UI accesible y recuperación posterior a remontar;
- remediación de CI y paridad de checkout limpio;
- checkpoint independiente con 58 pruebas focalizadas y 247 completas;
- CI en Node 22 y Node 24;
- cero hallazgos bloqueantes;
- veredicto humano `PASS`.

Ready for Review, merge y H08-6 permanecen decisiones separadas.
