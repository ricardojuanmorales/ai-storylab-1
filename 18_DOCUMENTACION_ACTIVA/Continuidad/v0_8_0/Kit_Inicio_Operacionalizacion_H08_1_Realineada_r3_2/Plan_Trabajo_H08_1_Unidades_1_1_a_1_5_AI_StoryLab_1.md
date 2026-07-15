# Plan de Trabajo H08-1 · Unidades 1.1 a 1.5

## Regla de nomenclatura

`H08-1A` queda reservado para `Implementation Readiness`. Las unidades internas
del baseline técnico usan notación decimal.

## H08-1.1 · ADR y frontera técnica

Entregables:

- comparación de opciones;
- ADR provisional;
- criterios de reversibilidad;
- frontera legacy;
- arquitectura por capas;
- política de dependencias.

No permite seleccionar un stack final irreversible.

## H08-1.2 · Dominio, contratos y schemas

Entregables:

- objetos mínimos;
- invariantes;
- errores tipados;
- schemas versionados;
- fixtures sintéticos;
- política de migración.

Objetos candidatos:

```text
LocalProfile
CreativeProject
MissionDefinition
MissionProgress
ActivityResponse
Evidence
Reflection
HumanDecision
PortfolioItem
ExportPackage
ImportResult
FeatureFlags
```

## H08-1.3 · Runner, pruebas y CI

Entregables:

- runner reproducible;
- unit tests;
- contract tests;
- validación de schemas;
- prueba offline;
- auditoría de secretos;
- CI mínimo.

## H08-1.4 · Esqueleto modular y adaptadores

Entregables:

- dominio independiente de presentación;
- puertos;
- adaptadores locales;
- persistencia detrás de interfaz;
- feature flags false;
- módulos mínimos sin flujo H08-2.

## H08-1.5 · Seguridad, accesibilidad y cierre

Entregables:

- validación de importación;
- límites de tamaño;
- sanitización;
- teclado y foco;
- semántica;
- revisión PH-IT-AT;
- deuda y riesgos;
- acta de cierre;
- transferencia a H08-1A.

## Definition of Done

- build y pruebas reproducibles;
- schemas y fixtures sintéticos;
- cero red obligatoria;
- cero datos reales;
- cero H08-2 adelantado;
- accesibilidad y seguridad baseline;
- revisión PH-IT-AT;
- evidencia, riesgos y continuidad actualizados.
