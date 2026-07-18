# Transferencia simétrica H08-2.3 → H08-2.4

## Herencia obligatoria

- conservar el motor reutilizable;
- mantener M1 funcional;
- no importar adaptadores desde presentación;
- preservar reflexión privada opcional;
- preservar decisión humana sin preselección;
- conservar portafolio reversible;
- validar proyectos al cargar;
- mantener datos sintéticos.

## H08-2.4

Debe añadir:

- adaptador local provisional detrás de `ProjectRepository`;
- recuperación;
- borrado local;
- validación al cargar;
- manejo de corrupción o cuota;
- export preview validado;
- pruebas de integración.

No debe implementar importación ni roundtrip.
