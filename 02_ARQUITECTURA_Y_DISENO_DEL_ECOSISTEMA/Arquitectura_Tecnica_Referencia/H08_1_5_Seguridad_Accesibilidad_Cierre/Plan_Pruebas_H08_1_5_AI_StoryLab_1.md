# Plan de pruebas · H08-1.5

## Suites nuevas

### Contrato de accesibilidad

Comprueba objetos válidos, tipos, escalas, campos ausentes y campos inesperados.

### Caso de uso de accesibilidad

Comprueba actualización, persistencia, proyecto ausente, conservación de
feature flags y rechazo sin mutación.

### Errores seguros

Comprueba minimización de campos, mensaje genérico para excepciones inesperadas
e inmutabilidad.

## Resultado esperado

```yaml
test_files: 11
tests: 48
TypeScript_strict: pass
architecture_audit: pass
secret_audit: pass
privacy_audit: pass
Node_22: pass
Node_24: pass
```
