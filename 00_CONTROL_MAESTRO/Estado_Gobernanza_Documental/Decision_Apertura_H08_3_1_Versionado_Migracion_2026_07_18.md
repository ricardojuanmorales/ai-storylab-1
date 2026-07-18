# Decisión de apertura · H08-3.1 Versionado y migración

```yaml
decision_date: 2026-07-18
source_instruction: "Adelante"
authority: repository_owner_and_responsible_human

repository: ricardojuanmorales/ai-storylab-1
PR: 60
branch: feat/v0.8-h08-3-persistence-schema-hardening
baseline_main: 7c783aa4f55df0aeeec1e0ad7e65f58149d43e16
opening_parent_commit: 12ca182e99ad66515cf860d7cad876414d16ecf1

H08_3_0:
  lifecycle: fulfilled

GATE_H08_3_ENTRY:
  status: approved_with_reservations
  reservation:
    - RES-H08-3-ENTRY-CI-001

H08_3_1:
  title: Versionado y migración
  lifecycle: open
  implementation: authorized_within_defined_scope
```

## Alcance autorizado

- registro explícito de versiones;
- schema actual `0.8.0-alpha.2`;
- schema fuente congelado `0.8.0-alpha.1`;
- migrador puro `0.8.0-alpha.1 → 0.8.0-alpha.2`;
- detección segura de versión actual, previa, futura y legacy;
- validación de fuente, destino e invariantes;
- errores tipados y mensajes públicos seguros;
- fixtures sintéticos;
- pruebas nominales, adversariales, de determinismo e idempotencia;
- actualización de documentación y trazabilidad.

## Decisión sobre alpha.2

`0.8.0-alpha.2` es una versión de endurecimiento estructural. No añade campos
de usuario ni amplía el dominio creativo. La migración conserva todos los
valores del payload y cambia únicamente la declaración de versión, mientras
establece el pipeline verificable de evolución.

## Fuera de alcance

- persistir automáticamente el resultado migrado;
- modificar `LocalStorageProjectRepository`;
- envelope persistente;
- índice de proyectos;
- staging o recuperación de escritura;
- manejo completo de cuota o corrupción;
- UI nueva;
- importación, roundtrip o descarga;
- IndexedDB;
- dependencias runtime nuevas;
- `package-lock.json`;
- H08-3.2 o bloques posteriores.

## Frontera de cierre

H08-3.1 no se considerará cumplido hasta demostrar que la transformación es
pura, determinista, idempotente, no destructiva y validada. Su cierre no abre
automáticamente H08-3.2.
