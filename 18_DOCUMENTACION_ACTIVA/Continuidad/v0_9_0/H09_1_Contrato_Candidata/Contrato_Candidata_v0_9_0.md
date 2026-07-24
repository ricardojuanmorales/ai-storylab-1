# Contrato de candidata · AI StoryLab 1 v0.9.0

```yaml
document_status: PROPOSED_FOR_CP_V09_1
binding_before_checkpoint: false
entry_head: 138af5024951d809ce3a3ad91026b77447b17027
PR: 64
local_verification:
  node: v24.18.0
  npm: 11.16.0
  environment: Darwin 25.5.0 arm64
  result: PASS
inherited_CI:
  node:
    - 22
    - 24
  operating_system: ubuntu-latest
candidate_scope: EXISTING_V0_8_CORE_ONLY
functional_expansion: PROHIBITED
```

## 1. Regla de afirmación

La candidata solo podrá sostener una afirmación cuando exista evidencia
atribuida a un head exacto. Una declaración de `package.json`, una intención de
diseño o una ejecución aislada no equivalen por sí solas a soporte oficial.

## 2. Afirmaciones centrales propuestas

1. **Arco creativo mínimo completo:** M1 a M4 pueden recorrerse dentro del
   núcleo existente, sin afirmar paridad total con v0.3.0.
2. **Local-first:** el uso principal no requiere backend, autenticación,
   telemetría ni sincronización remota.
3. **Persistencia y transferencia:** el producto conserva mecanismos de
   persistencia, recuperación, importación, exportación y roundtrip sujetos a
   validación de H09-2.
4. **Agencia humana:** las decisiones creativas permanecen bajo control de la
   persona y deben ser reversibles.
5. **Build reproducible semánticamente:** un checkout limpio con lockfile y
   runtime soportado produce un `dist/` funcionalmente equivalente. No se
   afirma reproducibilidad binaria hasta H09-5.
6. **Artefacto candidato:** paquete ZIP del contenido de
   `apps/storylab/dist/`, acompañado por manifiesto, checksums, versión, commit
   y documentación. Su forma final se verificará en H09-5.
7. **Privacidad y seguridad:** no se afirmará ausencia absoluta de riesgo. Se
   afirmará únicamente preservación de las invariantes verificadas y ausencia
   de hallazgos bloqueantes conocidos.
8. **Accesibilidad:** no se afirmará conformidad global antes de H09-3. La
   candidata deberá declarar las revisiones realizadas y sus reservas.

## 3. Soporte propuesto

### Runtime de construcción

- Node 22 y Node 24: `PROPOSED_SUPPORTED`, por cobertura CI heredada.
- Node 25 y Node 26: `DECLARED_BY_ENGINE_NOT_VERIFIED`; no se incluirán como
  soporte oficial de RC sin evidencia adicional.
- Node 20 o anterior: `UNSUPPORTED`.

### Sistemas operativos

- Ubuntu de GitHub Actions: evidencia automatizada heredada.
- macOS del entorno operador `Darwin 25.5.0 arm64`: evidencia local puntual, no soporte
  para todas las versiones de macOS.
- Windows: sin evidencia actual.

### Navegadores

No existe evidencia automatizada de navegador en H09-1. Chromium, Firefox y
Safari se registran como objetivos de validación para H09-3/H09-5, no como
soporte confirmado.

## 4. Reglas de honestidad

- `SUPPORTED` significa evidencia aprobada en la matriz.
- `TARGET_VALIDATION` significa que aún debe probarse.
- `NOT_CLAIMED` evita convertir ausencia de evidencia en promesa.
- ninguna deuda pedagógica aceptada se convierte en defecto por comparación
  estética o por conteo de funciones históricas;
- ninguna afirmación de efectividad educativa se autoriza en v0.9.0.

## 5. Condición de checkpoint

`CP-V09-1` deberá aceptar, modificar o devolver:

- afirmaciones centrales;
- matriz Node, sistemas y navegadores;
- definición del artefacto;
- política de compatibilidad;
- política de defectos y vulnerabilidades;
- estándar de reproducibilidad;
- brechas y reservas.

La aprobación del checkpoint no autoriza H09-2 automáticamente.
