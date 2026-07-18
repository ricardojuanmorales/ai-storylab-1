# SPEC · H08-3.1 Versionado y migración

## Objetivo

Introducir un registro de schemas y un pipeline puro de migración sin conectar
todavía la transformación con almacenamiento persistente.

## Contrato de versión

```yaml
known_versions:
  - 0.8.0-alpha.1
  - 0.8.0-alpha.2
current_version: 0.8.0-alpha.2
supported_transition:
  - 0.8.0-alpha.1_to_0.8.0-alpha.2
```

## Contrato alpha.2

Alpha.2 mantiene la estructura de datos de alpha.1. No añade campos de usuario,
no elimina contenido y no cambia reglas de privacidad. Su delta observable es
`schemaVersion`.

## Pipeline

```text
unknown input
→ detectar familia y versión
→ validar schema fuente
→ clonar
→ aplicar migrador explícito
→ validar schema destino
→ validar invariantes
→ devolver resultado
```

## Resultados

- alpha.2 válido: devolver copia validada sin migración;
- alpha.1 válido: devolver copia alpha.2;
- versión futura: `SCHEMA_VERSION_UNSUPPORTED`;
- legacy v0.3: `LEGACY_MIGRATION_REQUIRED`;
- fuente malformada: error seguro de validación;
- transición inexistente: rechazo explícito;
- ningún resultado se persiste durante H08-3.1.

## Propiedades obligatorias

- pureza;
- determinismo;
- idempotencia del orquestador;
- conservación de todos los campos salvo `schemaVersion`;
- no mutación de la fuente;
- errores tipados;
- datos sintéticos solamente.
