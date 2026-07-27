# Informe de auditoría independiente · V10-A-STABLE

## Dictamen local

```yaml
audit_gate: PASS
stable_source_commit: e05369e0052f86dfebadeb010f9a792496d64800
stable_evidence_commit: a4da9e8ad757247e557e0f31d25740ff7ef6d032
artifact: ai-storylab-1_1.0.0_e05369e0052f.zip
artifact_sha256: 2cbb5e357848118adc50e9336640d6599f9d82cf3a41accc4ff6a5bd2bd2b2be
independent_ZIP_audit: PASS
source_rebuild_binary_identity: PASS
internal_manifest: PASS
internal_checksums: PASS
legacy_snapshot: PASS
legacy_bridge: PASS
repository_copy: false
tag_v1_0_0: false
GitHub_Release_v1_0_0: false
Pages_deployment: false
blocking_findings: 0
```

La auditoría no utilizó la evidencia declarativa como única fuente. Inspeccionó
el ZIP con la biblioteca estándar de Python, recalculó sus hashes, CRC, tamaños,
timestamps y permisos, y reconstruyó el binario desde un worktree limpio del
commit fuente exacto.

El ZIP reconstruido fue idéntico byte por byte al archivo aprobado.

## CI exacta del commit de auditoría

```yaml
audit_commit: 025940e3d1c2ef9d86fcdc00b5c7f45073d45b3b
baseline_CI_run: 30234515703
baseline_CI: PASS
Pages_validation_CI_run: 30234521008
Pages_validation_CI: PASS
deploy_job_conclusion: skipped
```
