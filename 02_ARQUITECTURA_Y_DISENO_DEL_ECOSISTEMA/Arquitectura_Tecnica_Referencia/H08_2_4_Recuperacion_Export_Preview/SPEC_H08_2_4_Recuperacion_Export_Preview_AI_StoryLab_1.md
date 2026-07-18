# SPEC-H08-2.4-001 · Recuperación local y export preview

**Estado:** `IMPLEMENTATION_AUTHORIZED`
**Fecha:** 2026-07-16
**PR:** #59
**Head de entrada:** `c6aa6cb3e0dc5bf7b779c2ad024a8ec1d1f2566c`

## Propósito

Completar la primera vertical slice local-first:

```text
perfil sintético
→ proyecto
→ M1
→ actividad
→ evidencia
→ reflexión privada opcional
→ decisión humana
→ portafolio reversible
→ guardado local
→ recuperación validada
→ export preview validado
```

## Capacidades requeridas

```yaml
persistence:
  adapter: LocalStorageProjectRepository
  capacity: one_most_recent_project
  versioned_keys: required
  schema_validation: required
  invariant_validation: required
  explicit_delete: required
  memory_fallback: required

export_preview:
  schema_validation: required
  portfolio_required: true
  private_reflections: excluded
  high_care_reflections: excluded
  automatic_download: prohibited
  automatic_publish: prohibited
```

## No alcance

- importación;
- roundtrip;
- migración legacy;
- M2, M3 o M4 funcionales;
- datos reales;
- multimedia binaria;
- nube o sincronización.
