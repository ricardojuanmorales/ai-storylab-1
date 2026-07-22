# H08-5.4 · Compatibilidad, copia local y roundtrip semántico

## Propósito

Completar la operación inversa del paquete de portafolio después del staging
seguro de H08-5.3.

```text
staging válido
→ clasificación de compatibilidad
→ migración alpha.1 cuando aplica
→ candidato alpha.2 inmutable
→ confirmación humana explícita
→ copia con project.id nuevo
→ un solo repository.save
→ recuperación local
→ equivalencia semántica tipada
```

## Compatibilidad

| Paquete | Proyecto | Resultado |
|---|---|---|
| 1.0.0 | 0.8.0-alpha.2 | aceptar sin migración |
| 1.0.0 | 0.8.0-alpha.1 | verificar checksum original, migrar a alpha.2 y stage |
| 1.0.0 | futuro | `SCHEMA_VERSION_UNSUPPORTED` |
| 1.0.0 | legacy v0.3 | `LEGACY_MIGRATION_REQUIRED` |
| futuro | cualquiera | `IMPORT_PACKAGE_INVALID` |

## Autoridad humana

`repository.save` solo puede alcanzarse mediante la confirmación literal
`confirmed_by_human`. La selección del archivo y el staging no implican
consentimiento para persistir.

## Copia

Se regenera solamente `project.id`. Se preservan identificadores internos,
strings, timestamps, perfil, decisiones, preferencias, feature flags y orden del
portafolio.

## Equivalencia

La comparación elimina únicamente `project.id`, normaliza el orden de
colecciones no semánticas y devuelve una diferencia tipada con ruta cuando
encuentra una alteración.

La integración visible con selector de archivo, diálogo y recovery en la UI
permanece reservada para H08-5.5.
