# Política de evolución de schemas

## Reglas propuestas

1. cada snapshot declara `schemaVersion`;
2. la aplicación acepta la versión actual;
3. versiones anteriores solo se aceptan mediante migrador explícito;
4. versiones futuras se rechazan sin alterar almacenamiento;
5. una migración produce un nuevo objeto y no muta la fuente;
6. el resultado migrado se valida con JSON Schema e invariantes;
7. la persistencia de la migración requiere éxito completo;
8. los migradores son secuenciales, deterministas e idempotentes;
9. no se saltan versiones;
10. cada migración posee fixtures y pruebas nominales.

```yaml
current: 0.8.0-alpha.1
target_after_authorization: 0.8.0-alpha.2
supported_migration:
  - 0.8.0-alpha.1_to_0.8.0-alpha.2
future_version_policy: reject_safely
legacy_v0_3_policy: reject_with_LEGACY_MIGRATION_REQUIRED
```
