# Kit de Inicio y Continuidad · C2 Post C1

Este kit abre una sesión corta para operacionalizar exclusivamente `C2 · Preparación de contenedores` después del cierre y merge de C1 mediante el PR #30.

## Punto de partida verificado

```text
C0: cerrado
C1.1: vigente
C1: cerrado
PR #30: fusionado
main: 5c14bf5146dd051c2f7fc75d498d01a02d0b99dc
C2: habilitado, no iniciado
C3: no iniciado
C4: no iniciado
v0.8.0: no abierto
implementación: no autorizada
```

## Objetivo único

Diseñar, crear y someter a gate humano los contenedores estructurales de C2 sin mover documentos sustantivos.

## Regla de contenedor vacío

Git no conserva directorios realmente vacíos.

Por tanto, un contenedor preparado en C2 podrá contener únicamente:

- un `README.md` de frontera;
- metadatos mínimos de propósito;
- reglas de inclusión y exclusión;
- referencias a decisiones y gates;
- criterios de reversión.

No podrá contener documentos migrados desde otras rutas.

## Contenedores comprendidos

- nuevo contenedor funcional `02`;
- subrutas objetivo de `15_EVALUACION_CALIDAD_Y_AUDITORIA`;
- frontera futura de deuda activa en `20_MANTENIMIENTO_Y_EVOLUCION`;
- política y manifiestos de `99_ARCHIVO_HISTORICO`;
- índice de referencias de continuidad en `18_DOCUMENTACION_ACTIVA`.

## No incluye

- migración funcional de C3;
- migración técnica de C4;
- separación material `00`–`15` de C5;
- consolidación de deuda de C7;
- archivo de documentos de C8;
- movimientos;
- renombres;
- eliminaciones;
- deprecaciones;
- apertura de v0.8.0;
- implementación.
