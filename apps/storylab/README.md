# AI StoryLab · Recuperación local y export preview

**Unidad vigente:** H08-2.4
**Schema:** `0.8.0-alpha.1`
**Estado:** primera vertical slice local-first recuperable

## Capacidades activas

- proyecto sintético;
- M1 configurable;
- borrador editable;
- evidencia textual;
- reflexión privada opcional;
- decisión humana;
- portafolio reversible;
- guardado local automático;
- recuperación validada;
- descarte de corrupción;
- borrado explícito;
- export preview validado.

## Composición

```text
main.tsx
→ prueba disponibilidad de storage
→ LocalStorageProjectRepository
   OR InMemoryProjectRepository
→ StoryLabUseCases
→ App
```

## Validación

`src/schemas/runtime-validators.ts` utiliza JSON Schema 2020-12 y las invariantes
del dominio para validar proyectos recuperados y paquetes de exportación.

## Privacidad

Las reflexiones `private`, `high_care` o no seleccionadas quedan fuera de la
vista previa.

## Límites

- un proyecto reciente;
- sin importación;
- sin roundtrip;
- sin descarga automática;
- sin datos reales.
