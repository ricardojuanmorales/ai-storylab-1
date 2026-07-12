# Prompt de Arranque · Próxima Sesión de Cierre Registral C3

Trabajaremos únicamente en la publicación y revisión del paquete registral
final de C3.

## Lee primero

1. `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Acta_Cierre_Registral_Final_C3_Resolucion_DEBT_GOV_004_AI_StoryLab_1.md`.
2. `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Registro_Maestro_Decisiones_C1_AI_StoryLab_1.md`.
3. `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Registro_Maestro_Deuda_Gobernanza_C1_AI_StoryLab_1.md`.
4. `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Registro_Maestro_Gates_C1_AI_StoryLab_1.md`.
5. `18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Sesion_Cierre_Registral_Final_C3_AI_StoryLab_1.md`.
6. `18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_Cierre_C3_Sin_Apertura_C4_AI_StoryLab_1.md`.
7. Este kit.

## Verifica

```text
rama: docs/c3-cierre-registral-final
base: 369ee01023911538ec313af82b14bc54c8cf4d6e
working tree: limpio
DEBT-GOV-004: resolved
C3: closed / integrated
C4: no iniciado
GATE-CORR-G3: pending / future
```

## Objetivo

Validar nuevamente, publicar la rama y abrir un PR en draft con el head
exacto que devuelva `git rev-parse HEAD`.

## Prohibiciones

- no añadir nuevos cambios al alcance;
- no marcar Ready;
- no fusionar;
- no iniciar C4;
- no aprobar `GATE-CORR-G3`;
- no modificar `DOC-UX-007`;
- no resolver `DEBT-GOV-005`;
- no abrir v0.8.0;
- no implementar.

Detén la sesión después de verificar el PR remoto en draft.
