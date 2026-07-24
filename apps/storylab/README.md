# AI StoryLab 1 · Runtime canónico

```yaml
application_version: 0.9.0-unreleased
project_release_line: v0.9.0
schema_current: 0.8.0-alpha.2
schema_previous_supported: 0.8.0-alpha.1
candidate_status: UNRELEASED
artifact_publication: false
```

La versión de aplicación y la versión de schema son contratos distintos. El
cambio a `0.9.0-unreleased` no modifica el formato persistente ni abre una
migración nueva. El schema actual continúa en `0.8.0-alpha.2`.

## Instalación

Requiere Node 22 o Node 24 para el runtime de construcción oficialmente
verificado.

```bash
npm ci --ignore-scripts
npm run dev
```

## Verificación

```bash
AI_STORYLAB_SOURCE_COMMIT="$(git rev-parse HEAD)" npm run verify
```

La suite verifica typecheck, build, arquitectura, secretos, privacidad,
vertical slice, 49 archivos de prueba, 248 pruebas y empaquetado determinista.

## Uso funcional

### M1 · Intención creadora

Define qué deseas crear, por qué importa, una audiencia posible, una premisa
revisable y límites éticos, creativos o técnicos.

### M2 · Arquitectura narrativa

Organiza personajes, mundo, reglas, tensiones y una estructura que pueda
reordenarse.

### M3 · Producción multimodal

Documenta decisiones, transformaciones y borradores, preservando autoría,
proceso y contexto. La evidencia no equivale automáticamente a publicación.

### M4 · Curaduría y cierre

Revisa, reflexiona de forma privada, selecciona o retira elementos y confirma
humanamente el cierre o la exportación.

## Persistencia y transferencia

- la persistencia principal es local al navegador;
- la recuperación depende del mismo perfil y almacenamiento local;
- la exportación excluye reflexiones privadas;
- la importación crea una copia local;
- el borrado requiere acción explícita;
- corrupción y cuota se manejan mediante errores seguros.

## Límites

No se afirma soporte oficial de navegadores, Windows o `file://`. No hay
backend, autenticación, nube, telemetría, publicación automática ni datos
reales. La investigación con participantes no forma parte de v0.9.0.
