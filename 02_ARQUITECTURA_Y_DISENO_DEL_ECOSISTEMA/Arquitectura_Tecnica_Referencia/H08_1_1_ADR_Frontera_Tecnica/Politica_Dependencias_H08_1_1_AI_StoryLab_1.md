# Política de Dependencias · H08-1.1

## Principio

Cada dependencia es una obligación futura. No se añade una biblioteca para evitar
definir primero el contrato que debe satisfacer.

## Categorías

### Permitidas provisionalmente

- React como shell de presentación;
- React DOM;
- Vite como build tool;
- Vitest como runner;
- TypeScript como lenguaje de contratos y módulos nuevos.

Estas selecciones son reversibles hasta H08-1A.

### Diferidas

- librería de schemas;
- router;
- state manager;
- IndexedDB wrapper;
- componentes UI;
- internacionalización;
- empaquetado de escritorio;
- generación de IDs;
- telemetría.

### Prohibidas en H08-1

- SDK de IA;
- cliente de backend;
- autenticación;
- analytics;
- tracking;
- sincronización cloud;
- almacenamiento remoto;
- dashboard grupal;
- librerías que requieran datos reales.

## Regla de incorporación

Toda nueva dependencia debe registrar:

```yaml
need: required
owner: required
alternatives: required
license: required
security_review: required
bundle_or_runtime_cost: required
offline_behavior: required
replacement_strategy: required
tests: required
human_approval: required
```

## Versionado

- no usar rangos abiertos;
- registrar lockfile;
- evitar duplicados funcionales;
- actualizar mediante PR separado cuando el riesgo lo amerite;
- documentar cambios incompatibles;
- no incorporar paquetes abandonados sin excepción explícita.

## Frontera del navegador

Las APIs del navegador se consumen mediante adaptadores cuando afectan persistencia,
archivos, tiempo, identificadores o capacidades externas.
