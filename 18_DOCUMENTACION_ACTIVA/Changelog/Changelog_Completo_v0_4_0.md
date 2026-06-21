# Changelog Completo v0.4.0

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

## 2026-06-21 · v0.4.0 N3 Foundation Structure

### Añadido
- Estructura documental N3 Foundation `00-21` y `99_ARCHIVO_HISTORICO`.
- Capa `.specify/` para Spec-Driven Development.
- `README.md` por cartapacio.
- Documento canónico de estructura y manejo de archivos.
- Tabla de migración de documentos heredados.
- Inventario de documentos heredados.
- Script generador de estructura N3.
- Script de migración documental heredada.

### Migrado
- Documentos heredados desde `docs/`, `governance/`, `logs/`, `primers/`, `prompts/` y `compendia/` hacia rutas canónicas N3.
- Referencias internas activas principales actualizadas hacia la nueva estructura.

### Validado
- `npm run test`: 20 pruebas aprobadas.
- `npm run build`: aprobado.
- PR #3 conserva modo Draft para revisión humana.
- No se introdujeron cambios funcionales intencionales en la app React/Vite.

### Seguridad
- Se preserva local-first por defecto.
- No se activa backend operativo, autenticación, base de datos remota, APIs externas, analíticas externas ni carga automática de archivos.

