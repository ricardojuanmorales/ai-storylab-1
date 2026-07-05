# Paquete PR #11 : Integración de aprobación de SPEC-OP-006

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.5  
**PR:** #11  
**Hito:** aprobación unitaria de SPEC-OP-006 Consentimiento Informado y Situado  
**Estado:** listo para commit documental

## Propósito

Este paquete integra el dictamen aceptado de SPEC-OP-006 sin crear bitácoras separadas por spec. Actualiza:

```text
- la spec operativa principal;
- la bitácora de sesión activa;
- la bitácora de transferencia simétrica activa;
- el changelog activo;
- el registro de deuda de sesión;
- la decisión de aprobación.
```

## Regla respetada

```text
No se crean bitácoras separadas por spec.
La documentación vive en las bitácoras activas.
```

## Archivos incluidos

```text
00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Aprobacion_SPEC_OP_006_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Sesion_Activa_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_Activa_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Changelog/Changelog_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
```

## Comandos sugeridos

Desde la raíz del repositorio, en la rama `v0.4.5-specs-nucleo-pr11`:

```bash
TMPDIR_SPEC006="$(mktemp -d)"

unzip -oq ~/Downloads/AI_StoryLab_1_v0_4_5_PR11_Integracion_Aprobacion_SPEC_OP_006.zip -d "$TMPDIR_SPEC006"

rsync -av "$TMPDIR_SPEC006/AI_StoryLab_1_v0_4_5_PR11_Integracion_Aprobacion_SPEC_OP_006/" ./

git status --short

git add \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md \
  18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Aprobacion_SPEC_OP_006_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md \
  18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Sesion_Activa_AI_StoryLab_1_v0_4_5.md \
  18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_Activa_AI_StoryLab_1_v0_4_5.md \
  18_DOCUMENTACION_ACTIVA/Changelog/Changelog_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md \
  20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md \
  README_PR11_Integracion_Aprobacion_SPEC_OP_006_AI_StoryLab_1_v0_4_5.md

git commit -m "docs: aprobar SPEC-OP-006 consentimiento informado situado"

git push
```

## Dictamen

SPEC-OP-006 queda aprobada para Specs Núcleo con deuda controlada. La próxima spec a revisar es SPEC-OP-007 Datos y Privacidad.
