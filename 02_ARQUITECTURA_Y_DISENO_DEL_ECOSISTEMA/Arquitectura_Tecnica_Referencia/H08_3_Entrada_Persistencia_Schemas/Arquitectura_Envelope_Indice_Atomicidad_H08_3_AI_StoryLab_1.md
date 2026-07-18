# Arquitectura candidata · Envelope, índice y atomicidad

## Envelope

```yaml
storageFormat: ai-storylab-project
storageFormatVersion: 1
projectSchemaVersion: 0.8.0-alpha.2
projectId: ProjectId
writtenAt: ISODateTime
payload: CreativeProject
integrity:
  algorithm: sha256_or_equivalent_native
  value: derived_from_canonical_payload
```

El algoritmo final debe usar capacidades nativas o una decisión separada. No
se autoriza añadir una dependencia runtime solo para checksum.

## Índice

El índice local propuesto contiene únicamente:

- `projectId`;
- título;
- schema;
- `updatedAt`;
- estado de escritura;
- marca de proyecto reciente.

No contiene reflexiones ni evidencia.

## Escritura recuperable

```text
validar
→ escribir staging
→ verificar staging
→ escribir snapshot definitivo
→ actualizar índice
→ actualizar recent
→ retirar staging
```

Esto imita atomicidad sin declarar transacciones inexistentes.
