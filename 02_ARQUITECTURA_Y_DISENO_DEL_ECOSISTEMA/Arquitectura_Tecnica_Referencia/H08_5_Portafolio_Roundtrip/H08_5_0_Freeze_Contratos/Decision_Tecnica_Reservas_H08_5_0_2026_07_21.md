# Decisión técnica · Reservas H08-5.0

```yaml
date: 2026-07-21
milestone: H08-5.0
authority: responsible_human
status: RATIFIED_BY_RESPONSIBLE_HUMAN
ratification_phrase: RATIFICO_H08_5_0
ratified_at: 2026-07-21T19:30:42Z
```

## 1. Estrategia de importación

**Decisión:** toda importación crea una copia local. No existe sobrescritura en
H08-5.

- se genera un nuevo `project.id`;
- el título no se altera automáticamente;
- los identificadores internos permanecen;
- el guardado sucede una vez, después de confirmación humana.

## 2. Límite de tamaño

**Decisión:** 1 048 576 bytes por archivo.

El límite se comprueba con `File.size` antes de leer o parsear. La experiencia
actual es textual y no admite binarios, por lo que este techo protege memoria y
tiempo sin comprimir el uso creativo previsto.

## 3. Checksum

**Decisión:** SHA-256 mediante Web Crypto, digest hexadecimal minúsculo.

El alcance es el objeto `payload` serializado con
`storylab-canonical-json-v1`. El checksum se valida antes de migrar o guardar.

## 4. Equivalencia semántica

**Decisión:** comparar el proyecto importado con la proyección exportada
normalizada.

Se ignoran únicamente:

- el `project.id` regenerado;
- metadata exterior del paquete: `exportedAt`, `integrity` y `packageVersion`.

No se ignoran textos, decisiones, timestamps internos, orden del portafolio,
accesibilidad o feature flags.

## 5. Identificadores regenerables

**Decisión:** solo `project.id`.

Evidencias, reflexiones exportables, decisiones y elementos de portafolio
conservan identificadores para preservar sus relaciones. Ningún identificador
se deriva de contenido personal.

## Consecuencia

H08-5.1 puede implementar la proyección canónica sin reabrir estas cinco
reservas. Cualquier cambio requiere decisión humana nueva y actualización de
esta pieza.
