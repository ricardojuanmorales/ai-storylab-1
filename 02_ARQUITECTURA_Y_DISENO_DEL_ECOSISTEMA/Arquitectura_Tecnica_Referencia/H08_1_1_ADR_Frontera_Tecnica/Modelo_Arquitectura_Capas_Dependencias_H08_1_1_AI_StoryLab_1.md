# Modelo de Arquitectura por Capas · H08-1.1

## Estructura provisional

```text
apps/storylab/
  src/
    domain/
    application/
    ports/
    adapters/
    schemas/
    fixtures/
    feature-flags/
    accessibility/
    presentation/
    tests/
```

La ruta es provisional. H08-1A decidirá su forma final antes de H08-2.

## Dirección de dependencias

```text
presentation ───────→ application ───────→ domain
       │                    │                 ↑
       │                    └────→ ports ─────┘
       │                               ↑
       └──────────────────── adapters ─┘

schemas → boundaries/adapters
fixtures → tests
feature-flags → application/presentation
accessibility → presentation + acceptance criteria
```

## Reglas

### Domain

Puede contener entidades, valores, invariantes y resultados tipados.

No puede importar:

- React;
- DOM;
- `localStorage`;
- APIs de red;
- adapters;
- presentation;
- archivos de v0.3.0.

### Application

Contiene casos de uso y coordinación. No conoce implementaciones concretas de
persistencia, archivos o navegador.

### Ports

Define capacidades requeridas:

- persistencia;
- reloj;
- identificadores;
- exportación;
- importación;
- registro técnico mínimo cuando sea necesario.

Los puertos no exponen detalles de `localStorage`, IndexedDB ni filesystem.

### Adapters

Implementan puertos. Toda tecnología concreta debe quedar confinada aquí.

### Schemas

Valida datos en fronteras de entrada y salida. Los schemas no sustituyen invariantes
de dominio.

### Presentation

Representa interacción y estado visual. No decide automáticamente curaduría,
completitud, publicación o aceptación de evidencia.

## Importaciones prohibidas

```text
domain → presentation
domain → adapters
domain → browser APIs
application → concrete adapters
new app → legacy App.jsx
new app → legacy group dashboard
```

## Dependencias futuras

Una dependencia solo podrá añadirse cuando exista:

1. necesidad vinculada a un entregable;
2. alternativa nativa evaluada;
3. riesgo de seguridad y mantenimiento revisado;
4. tamaño y licencia conocidos;
5. prueba que justifique su incorporación;
6. estrategia de sustitución.
