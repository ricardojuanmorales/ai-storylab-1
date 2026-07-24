# Revisión de seguridad, privacidad, dependencias y compatibilidad

```yaml
entry_head: 51205b53ed5684def651de7af0651290e67bc16f
PR: 64
locked_install:
  command: npm ci --ignore-scripts
  result: PASS
  package_lock_sha256: b904c19fbd5d88a98118ab1319c5a75eeb584e84fefff2bf7d729edad6ca3a32
candidate_suite:
  test_files: 49
  tests: 248
  result: PASS
security_tests:
  test_files: 49
  tests: 248
  result: PASS
assessment: PASS_WITH_EXPLICIT_RESERVATIONS
recommendation: APPROVE_H09_4_WITH_EXPLICIT_RESERVATIONS
```

## 1. Seguridad del núcleo

La revisión combina la suite candidata, pruebas focalizadas y auditorías
estructurales. Se comprobaron contratos relacionados con almacenamiento,
recuperación, importación no confiable, descarga local, límites de aplicación,
errores seguros, privacidad, invariantes de dominio y operación offline.

Resultados:

- arquitectura: `PASS`;
- secretos: `PASS`;
- privacidad: `PASS`;
- vertical slice: `PASS`;
- pruebas focalizadas: `PASS`.

Estas auditorías son controles heurísticos y contractuales. No constituyen una
garantía absoluta de ausencia de vulnerabilidades.

## 2. Privacidad

La evidencia sostiene:

- modo de datos sintéticos;
- fixtures marcados como sintéticos;
- ausencia detectada de identificadores personales;
- ausencia detectada de logging de runtime;
- ausencia detectada de acceso de red;
- persistencia durable limitada a rutas autorizadas;
- validación de schema al cargar;
- capacidades diferidas deshabilitadas.

La revisión no incorpora datos reales, telemetría, autenticación, nube ni
participantes.

## 3. Dependencias

```yaml
production_vulnerabilities:
  critical: 0
  high: 0
  moderate: 0
  low: 0

all_dependency_vulnerabilities:
  critical: 0
  high: 0
  moderate: 0
  low: 0

dependency_tree:
  status: PASS
  unique_name_version_pairs: 183

license_inventory:
  packages: 117
  unknown_or_unlicensed: 0
  lifecycle_script_packages: 0
```

Las vulnerabilidades altas o críticas en producción son bloqueantes. Los
hallazgos equivalentes limitados a tooling requieren revisión humana y
evidencia de alcanzabilidad. Los niveles moderado y bajo se clasifican
contextualmente.

No se ejecutó `npm audit fix` ni se modificaron versiones.

## 4. Cadena de suministro

La revisión comprobó:

- lockfile versión 3 o superior;
- coincidencia del paquete raíz, versión y engine;
- dependencias de runtime alineadas con la allowlist arquitectónica;
- ausencia de especificadores directos Git, file o URL;
- ausencia de paquetes resueltos fuera del registro esperado;
- integridad presente para paquetes remotos;
- instalación sin ejecutar lifecycle scripts.

Los paquetes que declaran scripts de instalación permanecen visibles en el
inventario, aunque esos scripts no se ejecutaron durante la instalación de
H09-4.

## 5. Compatibilidad

```yaml
declared_node_engine: >=22 <27
validated_node:
  - 22
  - 24
node_25_26: NOT_CLAIMED
browser_support: NOT_CLAIMED
ubuntu_ci: EVIDENCE_AVAILABLE
local_operator_os: POINT_EVIDENCE_ONLY
windows: NOT_CLAIMED
```

El rango declarado del engine no sustituye evidencia. H09-4 preserva la matriz
ratificada de Node 22/24 y no amplía soporte por inferencia.

## 6. Resultado

Bloqueos:

- ninguno

Reservas:

- `browser_support_not_claimed`
- `dependency_audit_is_time_bound_to_execution`
- `node_25_26_not_claimed`
- `security_audits_are_not_absolute_guarantees`
- `windows_support_not_claimed`

Recomendación técnica:

`APPROVE_H09_4_WITH_EXPLICIT_RESERVATIONS`

La decisión humana determina el cierre, cualquier reparación y la apertura de
H09-5.
