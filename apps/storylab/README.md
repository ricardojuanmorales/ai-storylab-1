# AI StoryLab · Shell accesible provisional

**Unidad vigente:** H08-2.2
**Schema:** `0.8.0-alpha.1`
**Estado:** primera interfaz visible, sin ciclo creativo funcional

## Capas presentes

```text
src/
  domain/
  ports/
  application/
  adapters/
  presentation/
  schemas/
  fixtures/
  tests/
```

## Dirección autorizada

```text
presentation → application
presentation → domain
application → domain
application → ports
adapters → domain
adapters → ports

domain ↛ presentation
ports ↛ presentation
application ↛ presentation
presentation ↛ adapters
```

## Shell implementado

- landmarks semánticos;
- enlace de salto;
- navegación principal;
- preferencias de contraste, movimiento y escala;
- anuncios mediante `role="status"`;
- mapa visible de pasos planificados;
- estilos responsive y `prefers-reduced-motion`;
- pruebas de interacción con JSDOM.

## Límites

La presentación no importa adaptadores, no usa almacenamiento, no llama a red y
no implementa todavía `CreativeCycleUseCases`. La misión, evidencia, reflexión,
decisión humana, portafolio y export preview se activarán en bloques posteriores.
