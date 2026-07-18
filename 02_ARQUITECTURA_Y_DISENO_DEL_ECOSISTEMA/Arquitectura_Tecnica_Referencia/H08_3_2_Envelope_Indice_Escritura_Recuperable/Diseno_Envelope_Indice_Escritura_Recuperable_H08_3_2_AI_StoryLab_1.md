# Diseño · Envelope, índice y escritura recuperable

## Claves

| Propósito | Clave |
|---|---|
| snapshot | `ai-storylab:storage:v1:project:<id>` |
| staging | `ai-storylab:storage:v1:staging:<id>` |
| índice | `ai-storylab:storage:v1:index` |
| reciente | `ai-storylab:storage:v1:recent` |

## Invariantes del envelope

- `projectId` coincide con `payload.id`;
- `projectSchemaVersion` coincide con `payload.schemaVersion`;
- el payload valida contra el schema registrado;
- el digest corresponde a la serialización canónica del payload;
- `storageFormat` y `storageFormatVersion` son constantes conocidas.

## Serialización canónica

La función canónica:

- ordena lexicográficamente las claves de objetos;
- preserva el orden de arrays;
- usa JSON válido;
- rechaza valores no serializables;
- produce el mismo texto para el mismo valor estructural.

El checksum detecta alteraciones accidentales. No autentica, cifra ni protege
contra un actor malicioso con acceso al almacenamiento.

## Índice

Cada entrada contiene solo:

- identificador;
- título;
- versión de schema;
- fecha de actualización;
- estado `committed`.

El puntero reciente se almacena exclusivamente en su clave dedicada. Su valor
debe coincidir con una entrada existente o degradarse de forma segura a `null`.
El índice nunca contiene `recentProjectId`.

## Roll-forward

El staging representa intención completa de guardar. Si es válido, la
recuperación completa la operación. Si es inválido, el repositorio devuelve un
error tipado y preserva la evidencia para H08-3.3.

## Descubrimiento de formatos raw

```text
envelope v1 encontrado
→ usar envelope

sin envelope + raw alpha.2 encontrado
→ validar → envolver → staging → promover → preservar raw

sin envelope + raw alpha.1 encontrado
→ validar fuente → migrar → validar destino
→ envolver → staging → promover → preservar raw
```

## Extensión mínima del puerto

Puede añadirse una abstracción separada para listar metadatos, sin exponer
payloads ni forzar cambios de UI. El contrato básico `ProjectRepository`
permanece estable salvo necesidad demostrada por pruebas.

## Enumeración controlada de staging

El contrato local `StorageLike` añadirá `length` y `key(index)` para recorrer
únicamente claves con prefijo `ai-storylab:storage:v1:staging:`. La enumeración
se ordenará lexicográficamente antes de aplicar roll-forward.

## Compatibilidad exacta de claves raw

```text
alpha.2 project: ai-storylab:0.8.0-alpha.2:project:<id>
alpha.2 latest:  ai-storylab:0.8.0-alpha.2:latest-project
alpha.1 project: ai-storylab:0.8.0-alpha.1:project:<id>
alpha.1 latest:  ai-storylab:0.8.0-alpha.1:latest-project
```

La precedencia es envelope v1, raw alpha.2 y raw alpha.1. Para
`loadMostRecent()`, el puntero v1 válido precede a los punteros raw.
