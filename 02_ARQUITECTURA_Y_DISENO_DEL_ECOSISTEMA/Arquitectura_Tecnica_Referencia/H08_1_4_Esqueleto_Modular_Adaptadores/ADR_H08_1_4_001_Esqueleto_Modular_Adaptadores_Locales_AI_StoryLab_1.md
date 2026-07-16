# ADR H08-1.4-001 · Esqueleto modular y adaptadores locales

## Estado

Aceptado provisionalmente dentro del baseline canónico `965f53e04eecc0a9d6dc17cd89dbacee6797a5f6`.

## Contexto

H08-1.3 integró un baseline verificable. H08-1.4 debe demostrar la dirección de
dependencias y la sustitución de infraestructura sin crear una vertical slice.

## Decisión

1. La capa `application` orquesta casos de uso mínimos mediante puertos.
2. El dominio conserva invariantes y no conoce infraestructura.
3. Los adaptadores implementan repositorio, reloj e identificadores.
4. La persistencia de esta unidad es exclusivamente efímera y en memoria.
5. No se selecciona `localStorage`, IndexedDB ni almacenamiento durable.
6. No se crea composición con presentación.
7. Todas las feature flags permanecen en `false`.

## Consecuencias

- H08-1.5 podrá revisar seguridad, accesibilidad y cierre sobre capas reales.
- La persistencia durable sigue siendo una decisión diferida y reversible.
- Los casos de uso no constituyen un flujo H08-2.
