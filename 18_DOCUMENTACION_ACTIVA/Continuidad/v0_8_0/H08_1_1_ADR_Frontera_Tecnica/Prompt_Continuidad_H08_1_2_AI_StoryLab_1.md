# Prompt de Continuidad · H08-1.2

Trabaja desde el merge de H08-1.1.

Objetivo:

```text
H08-1.2 · Dominio, contratos y schemas
```

Reglas:

1. leer ADR-H08-1.1-001;
2. mantener el dominio independiente de React, navegador y almacenamiento;
3. no importar módulos legacy por defecto;
4. definir objetos mínimos e invariantes;
5. usar fixtures exclusivamente sintéticos;
6. tipar errores y resultados;
7. versionar schemas;
8. diferir librerías hasta comparar alternativas;
9. no implementar flujo H08-2;
10. devolver evidencia PH-IT-AT.

Orden:

```text
concepto → invariante → contrato → schema → fixture → prueba → evidencia
```
