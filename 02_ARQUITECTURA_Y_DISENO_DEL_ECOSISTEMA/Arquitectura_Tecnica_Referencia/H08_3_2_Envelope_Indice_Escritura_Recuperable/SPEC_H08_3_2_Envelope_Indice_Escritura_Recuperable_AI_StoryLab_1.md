# SPEC H08-3.2 · Envelope, índice y escritura recuperable

## Objetivo

Sustituir snapshots raw dependientes del namespace de schema por un formato de
almacenamiento versionado, verificable y recuperable sobre `localStorage`.

## Precondiciones

- H08-3.1 publicado en `e42277138bab3d052c2b182de2394de5f2a18aee`;
- schema actual `0.8.0-alpha.2`;
- migrador alpha.1 → alpha.2 disponible;
- CI Node 22 y Node 24 verde;
- `RES-H08-3.1-STORAGE-NAMESPACE-001` abierta y transferida.

## Contratos

### Envelope v1

```yaml
storageFormat: ai-storylab-project
storageFormatVersion: 1
projectSchemaVersion: 0.8.0-alpha.2
projectId: ProjectId
writtenAt: ISODateTime
payload: CreativeProject
integrity:
  algorithm: SHA-256
  value: lowercase_hex_digest_of_canonical_payload
```

### Índice v1

```yaml
storageFormat: ai-storylab-project-index
storageFormatVersion: 1
updatedAt: ISODateTime
entries:
  - projectId: ProjectId
    title: string
    projectSchemaVersion: string
    updatedAt: ISODateTime
    writeState: committed
```

El índice no puede contener payload, reflexiones, evidencia, pseudónimos,
preferencias de accesibilidad, contenido narrativo ni el puntero de proyecto
reciente.

### Puntero reciente v1

```yaml
storageFormat: ai-storylab-recent-pointer
storageFormatVersion: 1
projectId: ProjectId
updatedAt: ISODateTime
```

`recent` se almacena exclusivamente en su clave dedicada. El índice y el
puntero reciente no duplican ese estado.

### Staging v1

```yaml
storageFormat: ai-storylab-staged-write
storageFormatVersion: 1
operationId: string
startedAt: ISODateTime
makeRecent: boolean
envelope: ProjectEnvelopeV1
```

## Namespace estable

```text
ai-storylab:storage:v1:project:<projectId>
ai-storylab:storage:v1:staging:<projectId>
ai-storylab:storage:v1:index
ai-storylab:storage:v1:recent
```

La versión del payload vive dentro del envelope. Las claves no cambian al
evolucionar `projectSchemaVersion`.

## Fuentes raw compatibles

Claves heredadas exactas:

```text
ai-storylab:0.8.0-alpha.2:project:<projectId>
ai-storylab:0.8.0-alpha.2:latest-project
ai-storylab:0.8.0-alpha.1:project:<projectId>
ai-storylab:0.8.0-alpha.1:latest-project
```

Precedencia de `load(projectId)`:

1. envelope v1;
2. snapshot raw `0.8.0-alpha.2`;
3. snapshot raw `0.8.0-alpha.1`, migrado mediante H08-3.1.

Precedencia de `loadMostRecent()`:

1. puntero `storage:v1:recent` que resuelva a un envelope válido;
2. puntero raw alpha.2;
3. puntero raw alpha.1.

Un puntero reciente v1 ausente u huérfano se degrada con seguridad y permite
continuar la búsqueda. Un puntero malformado se rechaza con error tipado, sin
ocultar la corrupción mediante fallback silencioso.

Las fuentes raw se preservan después de una promoción exitosa. La presencia del
envelope v1 evita repetir la migración.

## Escritura recuperable

```text
validar payload actual
→ construir envelope
→ calcular integridad
→ escribir staging
→ leer y verificar staging
→ promover snapshot definitivo
→ actualizar índice
→ actualizar recent
→ retirar staging
```

No se declarará atomicidad ni transacción.

## Recuperación determinista

`StorageLike` se extenderá de forma mínima con:

```ts
readonly length: number;
key(index: number): string | null;
```

Estas operaciones se usan exclusivamente para enumerar claves propias de
`ai-storylab:storage:v1:staging:`. No autorizan búsquedas de datos ajenos.

Al iniciar una operación pública del repositorio:

1. enumerar staging en orden lexicográfico;
2. validar estructura, payload e integridad;
3. promover cada staging válido mediante roll-forward;
4. reconstruir su entrada mínima de índice;
5. actualizar `recent` solo cuando `makeRecent` sea verdadero;
6. retirar staging únicamente después de completar la promoción.

Un staging inválido no se presenta como proyecto y no se destruye
silenciosamente. La política avanzada de corrupción corresponde a H08-3.3.

## Cierre verificable

- envelope e índice validados;
- staging válido recuperado sin estado parcial;
- alpha.2 raw promovido;
- alpha.1 raw descubierto, migrado y promovido;
- fuente raw preservada;
- `RES-H08-3.1-STORAGE-NAMESPACE-001` resuelta con evidencia;
- suite heredada verde;
- sin dependencias ni UI nuevas.
