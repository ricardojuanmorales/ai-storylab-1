# ADR-H08-1.1-001 · Arquitectura Provisional y Reversible

**Estado:** `ACCEPTED_PROVISIONAL`
**Fecha:** 2026-07-15
**Baseline:** `4327758c66b3dd36f49400c1fc8fad92777d90e4`
**Decisión efectiva:** merge PR #53 · `5a5c4f9231ef092b3496a0019de1940fb19c14e6`
**Revisión obligatoria:** H08-1A · Implementation Readiness

## 1. Contexto

AI StoryLab 1 conserva un MVP v0.3.0 funcional basado en React, Vite y JavaScript.
Ese MVP demostró completitud experiencial, pero concentra navegación, estado,
persistencia y composición en `src/App.jsx`; utiliza `localStorage` como mecanismo
directo y mantiene superficies ahora diferidas, como la Vista del Facilitador.

La auditoría interna determinó que v0.3.0 es memoria funcional y oráculo de
comportamiento, no arquitectura de destino. La ruta realineada exige una aplicación
local-first con dominio independiente de presentación, persistencia detrás de
puertos, schemas versionados, errores tipados y pruebas reproducibles.

## 2. Fuerzas decisionales

- completitud experiencial equivalente a v0.3.0;
- aislamiento de acoplamientos legacy;
- ejecución offline;
- minimización de datos;
- agencia humana;
- accesibilidad y seguridad desde el baseline;
- reversibilidad antes de H08-1A;
- tiempo razonable para construir un prototipo integrado;
- baja complejidad operacional;
- cero dependencia obligatoria de backend, auth, cloud o IA embebida.

## 3. Alternativas consideradas

### A · Refactor incremental dentro del `src/` actual

Ventaja: menor costo inicial.

Problema: mezcla la nueva arquitectura con decisiones legacy, dificulta demostrar
frontera y hace más costosa la reversión.

### B · Reconstrucción modular aislada en el mismo repositorio

Crear una nueva raíz de aplicación, inicialmente `apps/storylab/`, sin importar por
defecto módulos desde el `src/` legacy. Conservar provisionalmente React/Vite como
shell de presentación y utilizar TypeScript para contratos, errores y fronteras.

Ventaja: preserva conocimiento y toolchain, pero separa el destino de la herencia.

### C · Migración inmediata a otro framework o metaframework

Ventaja: podría ofrecer nuevas capacidades.

Problema: introduce costo, rediseño y dependencias no justificadas por el producto
central. Aumenta el riesgo de seleccionar stack por novedad.

### D · Núcleo completamente framework-agnostic sin shell de presentación

Ventaja: máxima pureza de dominio.

Problema: posterga evidencia de integración y accesibilidad, y puede producir una
arquitectura teórica difícil de validar con la experiencia real.

## 4. Decisión

Se adopta provisionalmente la alternativa B:

```yaml
repository_strategy: same_repository_isolated_root
provisional_app_root: apps/storylab
presentation_shell:
  framework: React
  build_tool: Vite
  status: provisional_reversible
contracts:
  language: TypeScript
  status: provisional_reversible
domain:
  framework_independent: true
  browser_independent: true
  storage_independent: true
persistence:
  accessed_through_ports: true
  concrete_technology: deferred
schemas:
  versioned: required
  validation_library: deferred
legacy:
  root_src: behavior_oracle_only
  default_import_into_new_app: prohibited
network_required_for_core_flow: false
```

## 5. Consecuencias positivas

- permite construir una base nueva sin eliminar la evidencia v0.3.0;
- conserva familiaridad con React/Vite;
- habilita contratos y errores verificables;
- hace visible la dirección de dependencias;
- permite sustituir presentación o persistencia sin reescribir dominio;
- separa decisiones reversibles de decisiones finales;
- facilita pruebas de caracterización contra el comportamiento legacy.

## 6. Costos y consecuencias negativas

- coexistirán temporalmente dos raíces de aplicación;
- TypeScript añade disciplina y costo de adopción;
- se requiere navegación documental clara para evitar confusión;
- la compatibilidad con v0.3.0 deberá definirse explícitamente;
- mantener React/Vite puede ser reconsiderado si H08-1A presenta evidencia contraria.

## 7. Reglas no negociables

1. `domain/` no importa React, DOM, almacenamiento ni red.
2. `application/` orquesta casos de uso y depende del dominio y puertos.
3. `ports/` expresa capacidades requeridas, no implementaciones.
4. `adapters/` implementa puertos y puede ser sustituido.
5. `presentation/` no contiene decisiones de dominio sensibles.
6. `localStorage` no se utiliza fuera de un adaptador.
7. el nuevo árbol no importa `src/App.jsx` ni módulos legacy completos.
8. datos reales, backend, auth, cloud e IA embebida permanecen prohibidos.
9. H08-2 permanece bloqueado.
10. cualquier excepción requiere ADR adicional y decisión humana.

## 8. Reversibilidad

Esta decisión puede ser sustituida antes del gate Ready-to-Code cuando nueva
evidencia demuestre que:

- React/Vite impide requisitos esenciales;
- TypeScript produce costo desproporcionado;
- la raíz propuesta dificulta build, pruebas o distribución;
- la separación de capas no sostiene la experiencia;
- existe una alternativa con mejor evidencia y costo de migración controlado.

La sustitución debe conservar los contratos de dominio y la evidencia producida.

## 9. Criterio de validación

La decisión será adecuada cuando H08-1.2 y H08-1.3 puedan crear contratos, schemas,
fixtures y pruebas sin importar arquitectura legacy ni activar funcionalidad H08-2.
