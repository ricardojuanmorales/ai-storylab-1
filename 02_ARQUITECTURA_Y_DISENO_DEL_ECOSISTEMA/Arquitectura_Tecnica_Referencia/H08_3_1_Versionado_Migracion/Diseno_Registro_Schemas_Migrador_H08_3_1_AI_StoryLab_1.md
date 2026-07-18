# Diseño · Registro de schemas y migrador H08-3.1

## Registro

```ts
type KnownSchemaVersion =
  | "0.8.0-alpha.1"
  | "0.8.0-alpha.2";

const CURRENT_SCHEMA_VERSION = "0.8.0-alpha.2";
```

El registro distingue:

- versión actual;
- versión previa con migrador;
- versión futura;
- legacy v0.3;
- entrada desconocida.

## Schemas

El schema alpha.1 debe quedar congelado como contrato histórico. El schema
alpha.2 será el contrato actual. No se debe reescribir retroactivamente el
schema fuente para hacerlo coincidir con el destino.

## Migrador puro

```text
migrateAlpha1ToAlpha2(source)
→ validar source con schema alpha.1
→ structuredClone(source)
→ sustituir schemaVersion
→ validar destino con schema alpha.2
→ validar invariantes
→ devolver Result
```

## Orquestador

`migrateProjectToCurrent(input)` decide entre:

- validar y copiar alpha.2;
- migrar alpha.1;
- rechazar futura;
- rechazar legacy;
- rechazar desconocida o malformada.

## Errores

Se reutilizarán cuando sean semánticamente correctos:

- `SCHEMA_VERSION_UNSUPPORTED`;
- `LEGACY_MIGRATION_REQUIRED`;
- `PERSISTENCE_DATA_CORRUPTED`.

Un código nuevo requiere justificación explícita y pruebas.

## No persistencia

El módulo no recibe `ProjectRepository`, `Storage`, claves ni callbacks de
escritura. H08-3.2 será responsable de decidir cuándo persistir un resultado.
