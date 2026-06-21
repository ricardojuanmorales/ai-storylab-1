# Registro de Deuda Tecnica v0.4.0

**Proyecto:** AI StoryLab 1  
**Versión:** v0.4.0  
**Estado:** Inicial  
**ID maestro relacionado:** ASTL-V040-STD-001

## Propósito

Documento rector inicial. Debe completarse mediante decisión, spec o revisión humana.

## Trazabilidad

- Origen: Kit N3 Foundation Structure v0.4.0
- Rama objetivo: v0.4-n3-foundation
- Relación con WIKI_SYNC: pendiente de evaluación
- Relación con deuda: pendiente de evaluación

## Contenido inicial

Pendiente de desarrollo controlado.


---

## ASTL-V040-DEUDA-TEC-010 · Advertencias Vite esbuild/oxc

**Fecha:** 2026-06-21  
**Estado:** Abierta menor  
**Detectado en:** `npm run test`

### Descripción
Durante la ejecución de pruebas, Vite emitió advertencias sobre opciones de `esbuild` usadas por `vite:react-babel`, indicando preferencia por `oxc` y `optimizeDeps.rolldownOptions`.

### Impacto
No bloquea pruebas ni build.  
`npm run test` aprobó 20/20 pruebas.  
`npm run build` aprobó.

### Mitigación futura
Revisar configuración de Vite/Babel/OXC en una iteración técnica posterior, sin mezclarlo con el PR estructural N3.

