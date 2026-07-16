# SPEC-H08-2.1-001 · Readiness de la primera vertical slice

**Estado:** `ACCEPTED_FOR_CONTRACT_READINESS`  
**Fecha:** 2026-07-16  
**PR:** #59  
**Head de entrada:** `46a3c05b3535e917b4681b4947794f058aa03de1`

## Propósito

Cerrar las ambigüedades mínimas necesarias para que H08-2.2 y H08-2.3 puedan
implementarse mediante pruebas y contratos definidos.

## Flujo objetivo

```text
perfil sintético
→ proyecto
→ misión configurable
→ actividad textual
→ evidencia textual
→ reflexión privada
→ decisión humana
→ portafolio reversible
→ recuperación local
→ export preview
```

## Alcance de H08-2.1

- cerrar nominalmente INV-009 e INV-010;
- definir `MissionDefinition`;
- definir inputs de casos de uso;
- fijar frontera entre presentación, aplicación y dominio;
- proponer el adaptador local reversible;
- definir criterios, wireframes y riesgos.

## No alcance

- implementar casos de uso;
- crear presentación;
- seleccionar dependencia runtime;
- usar almacenamiento del navegador;
- modificar schemas de `CreativeProject`;
- introducir datos reales.

## Criterio de salida

H08-2.1 sale cuando TypeScript, auditorías y 65 pruebas pasan, los documentos
canónicos existen y el PR permanece Draft.
