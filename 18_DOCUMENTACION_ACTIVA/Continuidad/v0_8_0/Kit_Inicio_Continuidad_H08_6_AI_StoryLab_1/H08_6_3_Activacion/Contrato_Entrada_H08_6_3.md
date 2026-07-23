# Contrato de entrada · H08-6.3

## Pregunta rectora

> ¿Puede AI StoryLab 1 tratar datos importados y dependencias transitivas como
> superficies no confiables, preservar privacidad y producir errores seguros
> sin perder reproducibilidad ni agencia humana?

## Frentes iniciales

1. `SEC_DEP_001`
   - confirmar la cadena `ajv → fast-uri`;
   - determinar alcance real en build y runtime;
   - diseñar remediación mínima;
   - verificar lockfile y regresión.

2. `TEST_SEC_001`
   - inventariar pruebas de seguridad distribuidas;
   - componer una suite explícita;
   - incluir schemas, límites, staging, checksum, importación y errores seguros.

3. Privacidad e importación desconfiada
   - revisar allowlists;
   - revisar preflight;
   - revisar staging previo a persistencia;
   - revisar confirmación humana;
   - confirmar ausencia de publicación y red no autorizadas.

## Estado de entrada

```yaml
H08_6_3:
  lifecycle: OPEN
  first_commit: DOCUMENTARY
  repairs_authorized: false
  baseline_audit: PENDING
  H08_6_4: CLOSED
```
