# Instrucciones de Integración Manual · Kit de Continuidad e Inicio de Sesión · v0.7.0 Post PR #22

## Política de nombres

Este paquete usa nombres semánticos de archivo, sin numeración inicial.

Correcto:

```text
Kit_Inicio_Sesion_v0_7_0_Post_PR22.md
Matriz_Continuidad_Estrategica_v0_7_0_a_v1_0_0.md
Prompt_Arranque_Proxima_Sesion_v0_7_0.md
```

Incorrecto:

```text
01_Kit_Inicio_Sesion_v0_7_0_Post_PR22.md
02_Prompt_Arranque_Proxima_Sesion_v0_7_0.md
```

## Ruta canónica sugerida

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/
```

## Preparar rama de integración

Como PR #22 ya fue merged, iniciar desde `main` actualizado.

```bash
git checkout main
git pull
```

Crear una rama nueva para integrar este kit, si se desea canonizarlo:

```bash
git checkout -b docs/v0-7-0-kit-continuidad-post-pr22
```

## Crear carpeta canónica

```bash
mkdir -p 18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22
```

## Copiar archivos desde Downloads

Si descargaste el ZIP y lo descomprimiste en `Downloads`:

```bash
cp ~/Downloads/AI_StoryLab_v0_7_0_Kit_Continuidad_Post_PR22_Semantico/* 18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/
```

## Verificar que no haya archivos numerados

```bash
find 18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22   -maxdepth 1 -type f -name '[0-9][0-9]_*'
```

El comando no debe devolver resultados.

## Verificar cambios

```bash
git status
git diff --stat
ls -la 18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22
```

## Commit sugerido

```bash
git add 18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22

git commit -m "docs: agregar kit continuidad inicio sesion v0.7.0 post PR22"
```

## Commit extendido recomendado

```bash
git add 18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22

git commit -m "docs: agregar kit continuidad inicio sesion v0.7.0 post PR22" -m "Integra el kit completo de continuidad e inicio de sesión para AI StoryLab 1 v0.7.0 posterior al merge de PR #22.

El paquete usa nombres semánticos de archivo sin numeración inicial y prepara la próxima sesión de desarrollo formal de v0.7.0, alineada estratégicamente hacia v1.0.0.

Incluye prompt maestro de arranque, verificación post-merge, matriz estratégica, protocolo documento por documento, matriz inicial de decisiones técnicas, registro de deudas y riesgos, ruta de primeros documentos sustantivos, bitácora de transferencia, manifiesto y checksums.

El kit preserva los límites de no implementación, no selección de stack final, no backend, no APIs productivas, no IA embebida, no despliegue, no datos reales y no validación con personas.

La deuda DFUX-FAC-v0.6-001 permanece activa como insumo obligatorio de v0.7.0 y la Vista del Facilitador se mantiene como hito de calidad técnica, ética, funcional, de seguridad y privacidad."
```

## Push y PR sugerido

```bash
git push -u origin docs/v0-7-0-kit-continuidad-post-pr22
```

```bash
gh pr create   --title "docs: agregar kit continuidad inicio sesion v0.7.0 post PR22"   --body "Integra el kit de continuidad e inicio de sesión para comenzar formalmente v0.7.0 tras el merge de PR #22, usando nombres semánticos sin numeración inicial y preservando alineación estratégica hacia v1.0.0."
```
