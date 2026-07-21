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
