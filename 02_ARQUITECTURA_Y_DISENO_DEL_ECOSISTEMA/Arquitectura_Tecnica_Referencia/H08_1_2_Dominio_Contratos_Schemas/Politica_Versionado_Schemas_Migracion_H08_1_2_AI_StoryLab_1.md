# Política de Versionado, Compatibilidad y Migración · H08-1.2

## Versión inicial

```yaml
current_schema_version: 0.8.0-alpha.1
status: draft_baseline
product_release_equivalence: none
```

La versión del schema no declara una versión estable del producto.

## Compatibilidad

- solo las versiones incluidas en `SUPPORTED_SCHEMA_VERSIONS` se aceptan;
- no existe compatibilidad implícita por compartir `major.minor`;
- campos desconocidos se rechazan en fronteras serializadas;
- valores faltantes no se inventan silenciosamente;
- toda normalización produce advertencias y evidencia;
- un paquete válido por schema aún debe superar invariantes de dominio.

## Clasificación de entrada

```yaml
current_exact:
  result: validate_then_domain_check
known_previous:
  result: explicit_migration_required
legacy_0_3:
  result: explicit_migration_required
group_progress_0_3:
  result: rejected_blocked_scope
unknown:
  result: rejected
```

## Reglas de migración

1. preservar intacto el archivo original;
2. no escribir sobre el estado vigente antes de validar;
3. producir un objeto nuevo;
4. registrar versión de origen y destino;
5. documentar transformaciones y pérdidas;
6. no migrar datos grupales;
7. no migrar identificadores reales por defecto;
8. no incorporar campos inesperados;
9. requerir confirmación humana antes de reemplazar estado;
10. incluir pruebas de roundtrip cuando exista adaptador.

## Estado del adaptador legacy

H08-1.2 no implementa el adaptador v0.3. Define únicamente su contrato y los casos
de prueba que H08-1.4 o H08-1A deberán evaluar.
