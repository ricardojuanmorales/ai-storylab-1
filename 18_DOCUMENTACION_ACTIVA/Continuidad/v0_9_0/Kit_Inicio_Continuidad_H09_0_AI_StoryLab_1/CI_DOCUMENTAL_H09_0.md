# Marcador CI documental · H09-0

```yaml
hito: H09-0
change_class: DOCUMENTATION_ONLY
functional_changes: false
workflow_changes: false
dependency_changes: false
manual_full_regression_repeated: false
reason: inherited_verified_head_unchanged_before_documentary_commit
CI_after_push: REQUIRED
push_authorization: PENDING
```

Este marcador permite distinguir la activación documental de cualquier trabajo funcional posterior.

La validación local de este commit comprende:

- baseline exacto;
- protocolo v3.2 vigente;
- Node compatible;
- JSON válido;
- Markdown normalizado;
- ausencia de placeholders críticos;
- checksums válidos;
- allowlist exacta;
- `git diff --cached --check`;
- cero cambios a `.github/workflows/`;
- cero rutas fuera del paquete documental autorizado.

La CI remota se ejecutará después de un push autorizado separadamente. No se crea Draft PR como parte de este movimiento.
