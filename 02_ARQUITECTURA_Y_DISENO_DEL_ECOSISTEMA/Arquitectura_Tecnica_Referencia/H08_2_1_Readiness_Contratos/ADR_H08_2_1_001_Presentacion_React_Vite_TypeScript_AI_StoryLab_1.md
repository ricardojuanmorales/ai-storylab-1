# ADR-H08-2.1-001 · Ratificación provisional de presentación

**Estado:** `ACCEPTED_PROVISIONAL`  
**Decisión:** React + Vite + TypeScript para H08-2.2

## Contexto

El ADR H08-1.1 ya seleccionó una reconstrucción modular aislada con un shell
React/Vite reversible. No apareció evidencia que justifique cambiar de
framework antes de demostrar la primera vertical slice.

## Decisión

```yaml
presentation:
  framework: React
  build_tool: Vite
  language: TypeScript
  status: accepted_provisional
domain_dependency_on_presentation: prohibited
presentation_business_rules: prohibited
```

## Condiciones

- `domain/` no importa React, DOM ni navegador;
- `application/` expone casos de uso;
- la presentación solo traduce interacción a inputs tipados;
- accesibilidad es criterio de entrada;
- H08-2.2 debe incorporar pruebas de teclado y foco.

## Reversibilidad

La decisión puede sustituirse si H08-2.2 demuestra incompatibilidad con
accesibilidad, build reproducible o aislamiento de capas.
