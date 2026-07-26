# Dossier de release · AI StoryLab 1 1.0.0-rc.1

## 1. Resumen ejecutivo

AI StoryLab 1 dispone de una candidata final interna y no publicada, congelada
desde el source commit `533fcf28a0c9053b7da79ca70ded80450d94cf35` e identificada por el SHA-256
`6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c`.

```yaml
dossier_status: COMPLETE_FOR_V10_A
candidate_version: 1.0.0-rc.1
source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
evidence_commit: f888bb35abc65e6b3a6b70374b2865a96d6d7e5a
artifact_name: ai-storylab-1_1.0.0-rc.1_533fcf28a0c9.zip
artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
artifact_size_bytes: 486825
source_CI_run: 30216684999
evidence_CI_run: 30216738433
artifact_reverification: PASS
publication_hold: ACTIVE
```

## 2. Cadena de trazabilidad

1. V10-1 definió disciplina de afirmaciones y criterios de bloqueo.
2. V10-2 clasificó ocho reservas heredadas.
3. V10-3 validó experiencia, accesibilidad y una matriz acotada de navegadores.
4. V10-4 auditó seguridad, privacidad y cadena de suministro.
5. V10-5 definió versión, identidad, reproducibilidad y atestaciones.
6. V10-6 congeló, ensambló y verificó `1.0.0-rc.1`.
7. V10-7 consolida notas, guía, evidencia y afirmaciones finales.
8. V10-A deberá reconstruir y auditar procedimentalmente este dossier.
9. GATE-V10-RELEASE permanece bloqueado.

## 3. Identidad criptográfica y material

```yaml
source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
application_tree: 999be850336096466da19e487f556f760a820b6f
package_json_sha256: 7038b04ef849b3696f5319895c9be3d4ca3b85e4f9ae696a69ff7185f543c55d
package_lock_sha256: af14ba245fe30b7d8a54ee4cbee39b9dadfb8314f23bf5cf3be0e67fec06ba04
schema_version: 0.8.0-alpha.2
dist_manifest_sha256: 32c48badd0aee620f3b2f27f056d1ec0eb5981bcff24742d9f431b908255100b
artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
```

## 4. Entornos registrados

```yaml
GitHub_Actions_Node_22:
  artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
GitHub_Actions_Node_24:
  artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
local_verifier:
  artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
recorded_environment_binary_identity: true
universal_cross_OS_identity: NOT_CLAIMED
```

## 5. Soporte declarado

### Navegadores

- Safari 26.5.2: PASS
- Google Chrome 150.0.7871.184: PASS
- Firefox 152.0.1: PASS

### Tecnología de asistencia

- VoiceOver con Safari: PASS mediante atestación humana interna acotada.

### Exclusiones

- Windows no está afirmado.
- `file://` no está afirmado.
- No existe certificación WCAG.
- No existe soporte universal de navegadores.
- No existe firma criptográfica.
- No existe afirmación de efectividad educativa poblacional.

## 6. Seguridad, privacidad y cadena de suministro

```yaml
security_gate: PASS
blocking_findings: 0
review_findings: 3
production_vulnerabilities_snapshot: 0
full_supply_chain_vulnerabilities_snapshot: 0
snapshot_date: 2026-07-26
```

Los resultados son temporales y acotados al registro y a las superficies
inspeccionadas. No prometen ausencia futura de vulnerabilidades.

## 7. Afirmaciones finales

La matriz `Matriz_Afirmaciones_Finales_V10_7.csv` contiene:

```yaml
authorized: 4
authorized_bounded: 8
not_claimed_prohibited_or_false: 10
total: 22
unsupported_public_claims: 0
```

Solo el campo `release_wording` de filas autorizadas puede alimentar material
posterior, y siempre conservando su frontera.

## 8. Instrucciones de verificación

La guía canónica es `GUIA_VERIFICACION_CANDIDATA_1_0_0_rc_1.md`.

## 9. Publication hold

La candidata no puede publicarse, adjuntarse, etiquetarse, anunciarse ni
renombrarse como estable. El hold solo puede levantarse mediante una decisión
humana separada después de los gates aplicables.

## 10. Entrega a V10-A

V10-A deberá comprobar de manera procedimental:

- existencia y consistencia de todas las fuentes;
- reconstrucción de identidad desde source commit a ZIP;
- coincidencia de checksums;
- fronteras de soporte y accesibilidad;
- ausencia de afirmaciones no autorizadas;
- vigencia del publication hold;
- preparación del insumo para GATE-V10-RELEASE.

V10-A no es una auditoría externa ni autoriza publicación.
