# Plan de pruebas H08-2.4

## Resultado esperado

```yaml
test_files: 19
tests: 117
```

## Nuevas suites

### `schemas.runtime-validation.test.ts`

- proyecto válido;
- campos desconocidos;
- dominio inválido;
- export válido;
- export inválido.

### `adapters.local-storage.test.ts`

- roundtrip local;
- proyecto reciente;
- borrado;
- JSON corrupto;
- schema inválido;
- invariantes rotas;
- cuota;
- storage ausente;
- puntero huérfano.

### `application.recovery-export.test.ts`

- recuperación;
- descarte;
- eliminación;
- portafolio requerido;
- export válido;
- no mutación;
- proyecto ausente.

### `presentation.recovery-export.test.tsx`

- recuperación tras remontar;
- preview sin reflexión privada;
- ausencia de descarga;
- borrado en dos pasos;
- descarte de corrupción.
