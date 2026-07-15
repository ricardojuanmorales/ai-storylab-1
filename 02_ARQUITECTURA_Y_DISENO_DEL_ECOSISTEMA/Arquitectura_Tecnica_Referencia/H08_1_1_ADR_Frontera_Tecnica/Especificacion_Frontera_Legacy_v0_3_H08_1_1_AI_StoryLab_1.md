# Especificación de Frontera Legacy v0.3 · H08-1.1

## Tesis

```text
v0.3.0 conserva comportamiento y aprendizaje.
v0.3.0 no gobierna la nueva arquitectura.
```

## Zonas

### Zona A · Oráculo de comportamiento

Se permite observar y convertir en escenarios:

- entrada al laboratorio;
- perfil local;
- progreso de misiones;
- borradores;
- evidencias;
- reflexión;
- portafolio;
- exportación e importación;
- recuperación tras recarga.

### Zona B · Reutilización auditada

Puede evaluarse:

- funciones puras;
- validadores;
- transformaciones sin efectos;
- datos pedagógicos;
- textos y glosarios;
- iconos y recursos con procedencia clara.

Cada elemento requiere pruebas, adaptación y registro de procedencia.

### Zona C · Transformación obligatoria

No puede copiarse sin rediseño:

- `localStorage` como arquitectura;
- perfil con identidad innecesaria;
- portafolio emergente automático;
- navegación monolítica;
- esquema grupal;
- flujo de nueve misiones como requisito;
- acoplamiento entre UI y persistencia.

### Zona D · Bloqueada o diferida

- Vista del Facilitador;
- dashboard grupal;
- ranking;
- vigilancia;
- datos reales;
- autenticación;
- backend;
- cloud;
- IA embebida;
- publicación automática.

## Regla de importación

El nuevo árbol no puede importar desde el `src/` legacy por defecto.

Excepción:

```yaml
scope: pure_utility_only
required:
  - inventory_entry
  - characterization_test
  - security_review
  - provenance
  - adaptation_to_new_contract
  - human_approval
```

## Compatibilidad

La compatibilidad con exports v0.3 se tratará como migración de entrada no confiable.
H08-1.2 definirá contratos y H08-1A decidirá el comportamiento final.
