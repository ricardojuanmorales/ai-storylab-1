# H08-5.1 · Proyección canónica del portafolio

## Propósito

Implementar la frontera pura que transforma un `CreativeProject` validado en
la proyección que puede entrar al preview de exportación.

## Resultado esperado

```yaml
milestone: H08-5.1
capability: canonical_portfolio_projection
portfolio_order: order_then_id
privacy_policy: explicit_allowlist
side_effects: NONE
storage_mutation: NONE
download: NOT_INCLUDED
checksum: DEFERRED_TO_H08_5_2
import: DEFERRED_TO_H08_5_3
```

## Archivos funcionales

- `apps/storylab/src/application/portfolio-projection.ts`
- `apps/storylab/src/application/preview-export.ts`
- `apps/storylab/src/application/index.ts`
- `apps/storylab/src/tests/application.portfolio-projection.test.ts`

El preview existente conserva su contrato público y delega la proyección a una
función pura reutilizable.
