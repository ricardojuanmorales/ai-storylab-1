# H08-3.1 · Versionado y migración

Este bloque establece el pipeline mínimo y verificable para evolucionar un
`CreativeProject` desde `0.8.0-alpha.1` hacia `0.8.0-alpha.2`.

```yaml
block: H08_3_1
lifecycle: open
source_schema: 0.8.0-alpha.1
target_schema: 0.8.0-alpha.2
payload_delta: schema_version_only
persistence_write: prohibited
H08_3_2: not_open
```

## Principio

La migración transforma una copia, valida el resultado y nunca destruye ni
sobrescribe la fuente.
