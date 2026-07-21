# Contrato de paquete de portafolio v1

## Identidad

```yaml
packageType: storylab_portfolio
packageVersion: 1.0.0
media_type: application/json
recommended_extension: .storylab.json
maximum_bytes: 1048576
```

## Envelope

| Campo | Regla |
|---|---|
| `packageType` | constante `storylab_portfolio` |
| `packageVersion` | constante `1.0.0` |
| `exportedAt` | fecha ISO 8601 |
| `payload.projectSchemaVersion` | alpha.2 o alpha.1 |
| `payload.project` | proyecto validado y filtrado |
| `integrity.algorithm` | `SHA-256` |
| `integrity.canonicalization` | `storylab-canonical-json-v1` |
| `integrity.scope` | `payload` |
| `integrity.digest` | 64 caracteres hex minúsculos |

## Canonicalización

`storylab-canonical-json-v1`:

1. ordena lexicográficamente las claves de cada objeto;
2. preserva el orden de arrays;
3. usa JSON compacto sin espacios insignificantes;
4. codifica el resultado como UTF-8;
5. no recorta ni normaliza texto de usuario;
6. rechaza valores no representables por JSON.

## Privacidad

El paquete solo admite reflexiones con:

- `selectedForExport: true`; y
- `privacyClass` igual a `shareable_with_purpose` o
  `exportable_after_review`.

`private` y `high_care` son inválidas dentro del paquete, incluso si un productor
externo intenta marcarlas como seleccionadas.

## Nombre sugerido

```text
ai-storylab-<titulo-seguro>-<UTC-compacto>.storylab.json
```

La descarga solamente puede iniciarse después de preview y confirmación humana.
