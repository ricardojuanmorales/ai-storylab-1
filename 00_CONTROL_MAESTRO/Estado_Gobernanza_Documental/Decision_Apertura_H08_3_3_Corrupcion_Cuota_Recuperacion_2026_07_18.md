# Decisión de apertura · H08-3.3 Corrupción, cuota y recuperación

```yaml
decision_date: 2026-07-18
source_instruction: "Abre H08-3.3: corrupción, cuota y recuperación"
authority: repository_owner_and_responsible_human

repository: ricardojuanmorales/ai-storylab-1
PR: 60
branch: feat/v0.8-h08-3-persistence-schema-hardening
opening_parent_commit: 6d46255b4f56ee134ffd554ae04afbcd63c9eba5

H08_3_2:
  lifecycle: fulfilled
  implementation: published
  local_verification: PASS
  remote_CI: PASS
  closure_CI_run: 29638079120

RES-H08-3.1-STORAGE-NAMESPACE-001:
  status: resolved

H08_3_3:
  title: Corrupción, cuota y recuperación
  lifecycle: open
  implementation: not_authorized
  contract_definition: authorized
```

## Propósito

H08-3.3 define y prueba el comportamiento seguro del almacenamiento ante
corrupción, agotamiento de cuota, indisponibilidad e interrupciones. El bloque
debe impedir pérdida silenciosa, sobrescritura de fuentes inválidas y falsas
afirmaciones de persistencia exitosa.

## Alcance autorizado para la apertura

- clasificación tipada de fallos de almacenamiento;
- política de corrupción y versiones futuras;
- política de cuota sin borrado automático;
- cuarentena lógica con metadatos no sensibles;
- reparación limitada a metadatos reconstruibles;
- recuperación determinista de estados válidos;
- fault injection exhaustivo en cada etapa de escritura;
- fixtures, criterios, trazabilidad y plan de pruebas;
- definición de contratos previos a implementación.

## Implementación

La apertura documental no autoriza todavía cambios funcionales. La
implementación requiere una instrucción humana separada después de congelar
los contratos de H08-3.3.

## Fuera de alcance

- UI o cambios en la experiencia narrativa;
- importación, roundtrip o descarga automática;
- red, backend, nube, autenticación o telemetría;
- IndexedDB;
- nuevas dependencias runtime;
- cambios en `package.json` o `package-lock.json`;
- reparación automática de payload corrupto;
- borrado automático para liberar cuota;
- tombstones o eliminación recuperable;
- H08-3.4 o H08-3A.

## Frontera de cierre

H08-3.3 no podrá cerrarse hasta demostrar, mediante fault injection, que ningún
fallo de cuota, corrupción o interrupción destruye el último snapshot válido,
que toda recuperación automática se limita a estados verificables y que las
fuentes inválidas se preservan hasta una decisión humana explícita.
