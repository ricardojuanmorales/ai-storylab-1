# Evidencia local H08-5.5

```yaml
verified_at: 2026-07-22T16:38:19Z
focused_tests: PASS
full_verify: PASS
actual_handoff_file: PASS
export_preview_before_download: PASS
human_download_confirmation: PASS
untrusted_import_preview: PASS
human_import_confirmation: PASS
import_as_copy: PASS
recovery_after_remount: PASS
keyboard_accessibility: PASS
private_reflection_excluded: PASS
malformed_file_zero_save: PASS
network_access: NONE
automatic_download: NONE
automatic_publish: NONE
```

## Integración

- `main.tsx` compone Web Crypto, descarga local, staging e importación;
- `PortfolioTransferPanel` separa preparación, revisión, confirmación y descarte;
- la copia importada se convierte en el proyecto activo;
- un nuevo montaje recupera la copia más reciente;
- la auditoría vertical reconoce archivo real, importación y roundtrip como
  capacidades integradas, no diferidas.
