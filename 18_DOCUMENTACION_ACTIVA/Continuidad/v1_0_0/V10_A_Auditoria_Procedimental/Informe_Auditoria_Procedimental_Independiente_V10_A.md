# Informe de auditoría procedimental independiente · V10-A

## Disposición

```yaml
audit_gate: PASS
state: HUMAN_CLOSE_GATE
controls_total: 24
controls_passed: 24
controls_failed: 0
blocking_findings: 0
gate_recommendation: PASS_TO_HUMAN_GATE_OPENING
```

V10-A reconstruyó la trazabilidad de la candidata interna no publicada
`1.0.0-rc.1` desde el source commit `533fcf28a0c9053b7da79ca70ded80450d94cf35` hasta el ZIP identificado
por `6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c`.

La auditoría es un checkpoint procedimental independiente. No es una auditoría
externa, una certificación de tercero ni una autorización de publicación.

## Identidad auditada

```yaml
candidate_version: 1.0.0-rc.1
source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
V10_6_evidence_commit: f888bb35abc65e6b3a6b70374b2865a96d6d7e5a
V10_7_commit: ace90849e74cc14937e3cf9782fff90854b7849e
application_tree: 999be850336096466da19e487f556f760a820b6f
package_json_sha256: 7038b04ef849b3696f5319895c9be3d4ca3b85e4f9ae696a69ff7185f543c55d
package_lock_sha256: af14ba245fe30b7d8a54ee4cbee39b9dadfb8314f23bf5cf3be0e67fec06ba04
schema_version: 0.8.0-alpha.2
dist_manifest_sha256: 32c48badd0aee620f3b2f27f056d1ec0eb5981bcff24742d9f431b908255100b
artifact_name: ai-storylab-1_1.0.0-rc.1_533fcf28a0c9.zip
artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
artifact_size_bytes: 486825
```

## Reconstrucción

La auditoría utilizó una extracción limpia del source commit y ejecutó:

1. `npm ci --ignore-scripts`;
2. la suite completa `npm run verify`;
3. reconstrucción independiente del ZIP;
4. comparación SHA-256;
5. comparación byte por byte contra el artefacto retenido.

Resultado de identidad binaria: `PASS`.

## Dossier y afirmaciones

Se auditaron 22 afirmaciones finales:

```yaml
authorized: 4
authorized_bounded: 8
restricted: 10
unsupported_public_claims: 0
```

Las afirmaciones acotadas solo pueden utilizarse con su frontera. Las
afirmaciones `NOT_CLAIMED`, prohibidas o falsas en el estado actual no pueden
convertirse en lenguaje positivo de publicación.

## Publication hold

Se verificó:

- PR abierto y Draft;
- hold documental activo;
- ausencia del tag `v1.0.0-rc.1`;
- ausencia de GitHub Release `v1.0.0-rc.1`.

El publication hold permanece activo.

## Hallazgos

```yaml
blocking_findings: 0
```

No se identificaron hallazgos bloqueantes dentro de los 24 controles.

## Conclusión

La evidencia es coherente y puede presentarse a una decisión humana separada para abrir GATE-V10-RELEASE.

GATE-V10-RELEASE continúa bloqueado hasta decisión humana expresa.
