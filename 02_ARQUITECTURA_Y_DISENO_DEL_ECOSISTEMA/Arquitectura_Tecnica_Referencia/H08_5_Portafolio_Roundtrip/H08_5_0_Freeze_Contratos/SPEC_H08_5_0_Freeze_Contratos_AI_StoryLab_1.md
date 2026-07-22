# SPEC H08-5.0 · Freeze de contratos de portafolio y roundtrip

## Propósito

Congelar una frontera versionada, estricta y comprobable para que H08-5 pueda
implementar exportación e importación offline sin adelantar mutaciones ni
exponer reflexiones privadas.

## Hechos heredados

- `CreativeProject` usa `0.8.0-alpha.2`.
- existe un `ExportPackage` preliminar y un preview sin efectos laterales;
- AJV 2020 valida schemas con `strict: true` y `allErrors: true`;
- alpha.1 puede migrarse determinísticamente a alpha.2;
- versiones futuras y legacy v0.3 se rechazan;
- el repositorio guarda proyectos completos mediante `save(project)`;
- las reflexiones privadas no deben abandonar el dispositivo.

## Inferencias confirmadas por diseño

- la equivalencia debe comparar la proyección exportada, no el proyecto original
  que todavía conserva reflexiones privadas;
- un checksum del archivo completo sería circular si el digest vive dentro del
  archivo; por eso el digest cubre únicamente `payload`;
- importar con el identificador original puede sobrescribir datos locales;
- validar después de guardar violaría cero mutación ante rechazo.

## Decisiones contractuales

- paquete `storylab_portfolio` versión `1.0.0`;
- máximo de archivo: 1 048 576 bytes antes de parsear;
- profundidad máxima: 32;
- máximo de nodos estructurales: 20 000;
- SHA-256 hexadecimal minúsculo sobre JSON canónico del `payload`;
- importación siempre como copia local;
- solo se regenera `project.id`;
- identificadores internos y timestamps se preservan;
- alpha.2 se acepta, alpha.1 se migra, futuras y legacy se rechazan;
- cualquier error anterior al guardado produce cero mutación;
- el guardado ocurre una sola vez después de preview y confirmación humana.

## Flujo congelado

```text
selección humana
→ límite de bytes
→ decodificación UTF-8
→ JSON.parse
→ límites estructurales
→ schema estricto del paquete
→ checksum
→ compatibilidad y migración
→ invariantes de dominio
→ auditoría de privacidad
→ candidato inmutable
→ preview de importación
→ confirmación humana
→ regenerar project.id
→ guardar una vez
→ recargar
→ equivalencia semántica
```

## No alcance de H08-5.0

- código de producción;
- UI;
- descarga;
- selector de archivo;
- mutaciones de persistencia;
- nuevas dependencias;
- backend, auth, red, telemetría o publicación automática.

## Gate de salida

H08-5.0 cierra contractualmente cuando:

1. los cinco puntos reservados están ratificados;
2. schema, fixtures y matrices son coherentes;
3. el diff no contiene producción;
4. el commit está publicado en PR #62;
5. Ready, merge y H08-6 permanecen bloqueados.
