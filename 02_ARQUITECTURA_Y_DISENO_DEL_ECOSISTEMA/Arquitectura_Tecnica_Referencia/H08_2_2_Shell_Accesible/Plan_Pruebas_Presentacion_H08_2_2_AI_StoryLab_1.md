# Plan de pruebas de presentación · H08-2.2

## Archivo

`src/tests/presentation.shell.test.tsx`

## Casos

1. landmarks y heading principal;
2. transferencia de foco mediante skip link;
3. contraste alto y anuncio;
4. reducción de movimiento;
5. escala de texto;
6. alcanzabilidad por teclado;
7. ausencia de controles creativos prematuros.

## Verificación integrada

```text
typecheck
→ build Vite
→ architecture audit
→ secrets audit
→ privacy audit
→ 72 tests
```

## Riesgos residuales

- JSDOM no reproduce todas las tecnologías asistivas;
- contraste necesita revisión visual;
- orden de lectura requiere inspección humana;
- el diseño responsive requiere prueba en navegador real.
