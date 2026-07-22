# H08-5.5 · Integración UI y recovery del portafolio

## Propósito

Conectar las capacidades H08-5.1–H08-5.4 a la experiencia visible sin ampliar
la frontera de confianza.

```text
proyecto local
→ preparar paquete
→ revisar metadata y checksum
→ confirmar descarga
→ archivo local

archivo local
→ seleccionar
→ preflight, schema, privacidad e integridad
→ revisar versión y migración
→ confirmar copia
→ save único
→ recovery
→ proyecto activo
```

## Controles humanos

- preparar no descarga;
- seleccionar no importa;
- confirmar descarga e importar son acciones separadas;
- descartar permanece disponible;
- la importación crea una copia y nunca sobrescribe la fuente.

## Accesibilidad

El panel utiliza encabezados, labels, controles nativos de archivo, regiones de
confirmación, botones alcanzables por teclado y el `role=status` global para
mensajes seguros.

## Fronteras

```yaml
network: false
telemetry: false
backend: false
authentication: false
automatic_download: false
automatic_import: false
automatic_publish: false
binary_storage: false
```

H08-5A será el checkpoint documental y técnico posterior. Ready for Review,
merge y H08-6 requieren autorizaciones humanas separadas.
