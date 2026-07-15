# Prompt de Continuidad · H08-1.3

Trabaja desde el merge y aprobación de H08-1.2.

Objetivo:

```text
H08-1.3 · Runner, pruebas y CI
```

Orden:

```text
contrato → compilación → schema validation → invariant test
→ parity test → offline test → CI evidence
```

Reglas:

1. no cambiar contratos para hacer pasar pruebas sin decisión explícita;
2. compilar TypeScript en modo estricto;
3. seleccionar validator mediante comparación documentada;
4. cargar schemas por `$id`;
5. ejecutar todos los vectores;
6. verificar campos adicionales rechazados;
7. auditar imports prohibidos;
8. probar cero red;
9. mantener fixtures sintéticas;
10. no implementar H08-2.
