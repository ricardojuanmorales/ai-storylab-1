# SPEC H08-4A · Checkpoint independiente del arco completo H08-4

**Estado:** `CHECKPOINT_AUTHORIZED_LOCAL`
**Head funcional bajo revisión:** `5782c42b35562335e440f7b75cb4cb7fa81ba896`

## Pregunta de evaluación

¿El arco completo M1–M4 publicado en H08-4 conserva agencia humana,
cardinalidades, privacidad, recuperación local, coherencia de reapertura y
fronteras diferidas, sin ampliar alcance ni modificar producto durante el
checkpoint?

## Alcance revisado

- motor reutilizable de misiones;
- M1 y M2 con una evidencia editable;
- M3 con múltiples evidencias y decisiones independientes;
- M4 con un registro de curaduría;
- reflexión privada opcional por misión;
- decisión humana vigente por evidencia;
- portafolio ordenado y reversible;
- recuperación local después de remontar;
- resumen transversal del arco;
- preview final sin reflexiones privadas;
- invalidación del cierre curatorial al reabrir una misión fuente;
- ausencia de importación, roundtrip, descarga, publicación, red y binarios;
- trazabilidad documental y estado del Draft PR.

## Evidencia requerida

```yaml
automated:
  focused_tests: required
  npm_verify: required
  checkpoint_audit: required
  branch_compare: required
  product_immutability_during_checkpoint: required

independent_review:
  human_agency: required
  cardinality_coherence: required
  privacy_boundary: required
  recovery_coherence: required
  upstream_reopen_coherence: required
  deferred_scope_review: required
  findings_matrix: required
  reservations_register: required

human:
  checkpoint_verdict: required
  publication_authorization: required
```

## No alcance

H08-4A no implementa cambios funcionales ni autoriza publicación, cierre global,
Ready for Review, merge o H08-5 por inferencia.
