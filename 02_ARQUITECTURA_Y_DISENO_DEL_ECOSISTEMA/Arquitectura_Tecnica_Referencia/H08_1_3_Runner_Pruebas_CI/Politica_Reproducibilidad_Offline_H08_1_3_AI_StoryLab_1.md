
# Política de Reproducibilidad y Verificación Offline · H08-1.3

## Instalación

- versiones exactas;
- `package-lock.json` obligatorio;
- `npm ci --ignore-scripts`;
- cero dependencias de producción;
- scripts de instalación de terceros desactivados;
- CI con permisos de solo lectura.

## Significado de offline

La instalación de herramientas puede requerir el registro npm. El código bajo prueba,
los contratos y la experiencia esencial no pueden requerir red para ejecutarse.

## Controles

1. `fetch` se sustituye por una función que falla en el entorno de pruebas;
2. dominio y puertos se escanean por APIs o imports de red;
3. no existen adaptadores ni presentación;
4. ninguna fixture contiene URL operativa o dato real;
5. CI no usa secretos;
6. el comando local y el comando de CI son el mismo: `npm run verify`.

## Evidencia reproducible

```text
npm ci --ignore-scripts
npm run verify
```
