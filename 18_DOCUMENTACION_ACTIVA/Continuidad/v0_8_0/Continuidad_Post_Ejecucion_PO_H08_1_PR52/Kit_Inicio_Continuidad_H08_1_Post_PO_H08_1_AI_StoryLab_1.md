# Kit de Inicio y Continuidad · H08-1 Post PO-H08-1

## Entrada

- PR #51 fusionado;
- PR #52 fusionado;
- PO-H08-1 cumplido;
- repositorio limpio;
- baseline post-merge verificado.

## Lecturas obligatorias

1. Plan de Desarrollo Integral hacia v1.0.0;
2. Plan de Desarrollo v0.8.0 realineada;
3. Operacionalización H08-1;
4. Matriz de frontera legacy v0.3;
5. Plan de trabajo H08-1.1 a H08-1.5;
6. esta transferencia simétrica;
7. prompt de continuidad post PR #52.

## Primera unidad

```yaml
unit: H08-1.1
title: ADR_y_frontera_tecnica
deliverables:
  - ADR provisional
  - comparación de alternativas
  - criterios de reversibilidad
  - frontera legacy
  - política de dependencias
  - definición de no_import_legacy_by_default
prohibited:
  - funcionalidad H08-2
  - datos reales
  - stack irreversible
  - backend
  - auth
  - cloud
  - embedded_AI
```

## Condición de salida

H08-1.1 solo puede cerrarse con decisión humana y evidencia PH-IT-AT. Su cierre no
abre H08-2.
