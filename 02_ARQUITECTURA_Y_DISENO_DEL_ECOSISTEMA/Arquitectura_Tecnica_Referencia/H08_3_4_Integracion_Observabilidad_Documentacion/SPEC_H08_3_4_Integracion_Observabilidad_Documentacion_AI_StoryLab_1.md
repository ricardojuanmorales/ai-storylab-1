
# SPEC H08-3.4 · Integración, observabilidad local y documentación

## Objetivo

Demostrar que la infraestructura de persistencia endurecida funciona como un
sistema coherente para el proyecto local-first proveniente de H08-2.

## Contratos integrados

### Recuperación de proyecto H08-2

La recuperación debe preservar el proyecto completo, incluyendo decisiones,
evidencia y reflexiones privadas dentro del snapshot. El índice solo puede
contener metadatos mínimos.

### Migración histórica

Un raw alpha.1 válido debe migrarse a alpha.2, promoverse a envelope v1 y
conservarse intacto en su clave original.

### Interrupción

Una escritura válida que quede en staging debe completar roll-forward de forma
determinista e idempotente, dejando snapshot, índice y recent coherentes.

### Observabilidad local

Los errores tipados y sus `details.kind` constituyen el diagnóstico local
mínimo. La cuarentena registra únicamente clave fuente, clasificación, fecha,
acción y estado de revisión. No existe telemetría, red ni exportación automática.

## No objetivos

H08-3.4 no crea nuevos formatos persistentes, no modifica schemas de dominio y
no amplía la experiencia de usuario.
