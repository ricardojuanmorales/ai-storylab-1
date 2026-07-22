# Evidencia local H08-5.2

```yaml
verified_at: 2026-07-21T21:09:25Z
typecheck: PASS
focused_tests: PASS
architecture_audit: PASS
privacy_audit: PASS
offline_guard: PASS
```

## Propiedades verificadas

- preparar una exportación no inicia descarga;
- confirmar con otro valor no inicia descarga;
- el `previewId` recupera exactamente el artefacto revisado;
- cada preview confirmado es de un solo uso;
- descartar una vista previa no produce efectos laterales;
- SHA-256 cubre el payload canónico;
- el paquete pasa schema estricto;
- las reflexiones privadas y `high_care` están ausentes;
- el nombre del archivo es local, seguro y no incluye el seudónimo;
- se rechazan archivos superiores a 1 MiB;
- el adaptador usa Blob y Object URL sin red;
- no existe publicación automática.

## Remediación del control CI

```yaml
verified_at: 2026-07-22T15:02:50Z
full_verify: PASS
failure_origin: stale_vertical_slice_audit_location
privacy_implementation: UNCHANGED
audit_alignment:
  preview_export: requires_createPortfolioProjection
  portfolio_projection: requires_reflectionCanLeaveDevice
remote_recheck: PENDING_AFTER_PUSH
```

La extracción de H08-5.1 movió el filtro de privacidad a
`portfolio-projection.ts`, pero la auditoría heredada todavía lo buscaba en
`preview-export.ts`. La remediación actualiza el control para comprobar tanto la
delegación como la presencia real del filtro, sin relajar la política.
