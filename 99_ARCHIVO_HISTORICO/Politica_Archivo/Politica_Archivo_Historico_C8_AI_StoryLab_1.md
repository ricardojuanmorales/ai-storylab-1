# Política de Archivo Histórico · C8

**Identificador:** `DOC-DOC-039`
**Fecha:** 2026-07-13
**Fase:** C8
**Estado:** preparado para integración
**Ámbito:** `99_ARCHIVO_HISTORICO`

## 1. Propósito

`99_ARCHIVO_HISTORICO` conserva evidencia histórica verificable sin competir
con fuentes vigentes. La presencia de un archivo en `99` declara no vigencia
operativa y ausencia de autoridad normativa, salvo el plano de control activo
definido en esta política.

## 2. Plano de control activo

Los siguientes espacios gobiernan el archivo y no son acervo archivado:

```text
99_ARCHIVO_HISTORICO/README.md
99_ARCHIVO_HISTORICO/Politica_Archivo/
99_ARCHIVO_HISTORICO/Manifiestos/
```

## 3. Criterios de ingreso futuro

Todo ingreso posterior a C8 requiere:

```text
identidad o ruta de origen
+ decisión humana de archivo
+ estado de vigencia
+ sucesor canónico o razón explícita para no tenerlo
+ fecha de ingreso
+ SHA-256
+ manifiesto
+ verificación de privacidad y datos sensibles
```

Un documento no entra a `99` solo por ser antiguo, duplicado o incómodo.

## 4. No vigencia

Todo acervo fuera del plano de control se interpreta como:

```text
archival_status: archived
current: no
canonical: no
normative_authority: none
operational_authority: none
```

La historia puede explicar decisiones. No puede sustituir el presente.

## 5. Regla de no edición

El contenido archivado es inmutable. Una corrección requiere:

1. no editar el payload archivado;
2. crear una anotación o addendum nuevo;
3. enlazar el hash y la ruta afectada;
4. explicar el motivo;
5. registrar decisión y fecha;
6. actualizar el manifiesto.

## 6. Acervo heredado anterior a C8

Las piezas ya presentes se registran como `legacy_archive_holding`.
C8 no infiere sucesores ausentes ni reconstruye decisiones no documentadas.
Sucesores futuros podrán declararse mediante addendum aprobado.

## 7. Recuperación

Recuperar un documento para uso activo exige una copia nueva fuera de `99`,
nuevo estado de vigencia, decisión humana y referencia al origen archivado.
El archivo original permanece intacto.

## 8. Límites

C8 no mueve, renombra, elimina, restaura ni edita payloads archivados.
C8 no abre C9, v0.8.0 ni implementación.
