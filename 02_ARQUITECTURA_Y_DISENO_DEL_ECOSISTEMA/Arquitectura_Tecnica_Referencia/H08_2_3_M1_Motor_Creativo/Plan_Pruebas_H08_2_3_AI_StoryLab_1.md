# Plan de pruebas H08-2.3

## Aplicación

`application.creative-cycle.test.ts`

- misión configurable e inicio idempotente;
- creación y edición de borrador;
- actividad vacía;
- evidencia y transición;
- reflexión privada opcional;
- decisión humana;
- revisión;
- curaduría bloqueada sin aceptación;
- retiro reversible;
- reapertura;
- proyecto ausente.

## Presentación

`presentation.m1-cycle.test.tsx`

- ciclo completo;
- decisión sin preselección;
- reflexión omitible;
- reapertura con conservación;
- advertencia de estado efímero.

## Dominio

Cuatro pruebas nominales nuevas verifican referencias desde actividad,
evidencia, reflexión y decisión.

## Resultado esperado

```yaml
test_files: 15
tests: 92
```
