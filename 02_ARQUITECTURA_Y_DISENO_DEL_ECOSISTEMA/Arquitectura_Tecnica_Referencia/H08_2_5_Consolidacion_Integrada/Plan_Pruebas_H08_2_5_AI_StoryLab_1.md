# Plan de pruebas H08-2.5

## Nueva suite

`src/tests/integration.local-first.test.tsx`

1. guardado y recuperación con adaptador real;
2. M1 recuperada y export preview privado;
3. borrado de las dos claves;
4. JSON corrupto bloqueado y descartado;
5. cuota comunicada sin escritura parcial;
6. capacidades diferidas ausentes.

## Resultado esperado

```yaml
test_files: 20
tests: 123
audits:
  architecture: PASS
  secrets: PASS
  privacy: PASS
  vertical_slice: PASS
```

## Evidencia manual complementaria

La revisión humana deberá recorrer:

```text
crear
→ iniciar M1
→ guardar
→ recargar navegador
→ recuperar
→ completar
→ curar
→ previsualizar
→ confirmar privacidad
→ borrar
```
