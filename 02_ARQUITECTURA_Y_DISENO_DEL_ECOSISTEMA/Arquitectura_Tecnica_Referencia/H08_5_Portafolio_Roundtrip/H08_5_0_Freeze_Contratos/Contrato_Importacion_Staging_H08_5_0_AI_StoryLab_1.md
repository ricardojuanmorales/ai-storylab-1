# Contrato de importación mediante staging inmutable

## Regla principal

El archivo seleccionado es entrada no confiable. Ningún dato alcanza el
repositorio hasta completar todas las validaciones y recibir confirmación humana.

## Estados

```text
idle
→ selected
→ preflight_validated
→ package_validated
→ integrity_validated
→ migrated
→ domain_validated
→ staged
→ human_confirmed
→ persisted
→ recovered
→ roundtrip_verified
```

Cualquier transición fallida anterior a `persisted` regresa a un estado de
error sin invocar `repository.save`.

## Límites

```yaml
maximum_file_bytes: 1048576
maximum_depth: 32
maximum_structural_nodes: 20000
encoding: UTF-8
top_level_type: object
```

## Política de copia

Después de confirmar:

1. clonar el candidato validado;
2. generar un `project.id` local nuevo;
3. preservar todos los identificadores internos;
4. preservar textos, timestamps y orden;
5. ejecutar un único `repository.save`;
6. recargar el proyecto guardado;
7. verificar equivalencia semántica.

## Errores tipados requeridos

- `IMPORT_FILE_TOO_LARGE`;
- `IMPORT_JSON_MALFORMED`;
- `IMPORT_STRUCTURE_TOO_COMPLEX`;
- `IMPORT_PACKAGE_INVALID`;
- `IMPORT_CHECKSUM_MISMATCH`;
- `SCHEMA_VERSION_UNSUPPORTED`;
- `LEGACY_MIGRATION_REQUIRED`;
- `IMPORT_CONFIRMATION_REQUIRED`;
- `IMPORT_SAVE_FAILED`;
- `ROUNDTRIP_NOT_EQUIVALENT`.

Los mensajes visibles no incluyen stack traces, rutas locales completas ni
contenido privado.
