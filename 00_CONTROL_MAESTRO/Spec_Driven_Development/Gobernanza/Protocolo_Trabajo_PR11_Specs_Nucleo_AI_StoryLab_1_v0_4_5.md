# Protocolo de Trabajo PR #11 : Specs Núcleo AI StoryLab 1 v0.4.5

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**Rama propuesta:** `v0.4.5-specs-nucleo-pr11`  
**Título PR propuesto:** `docs: apertura operativa v0.4.5 specs núcleo`  
**Estado:** protocolo de sesión, no implementación


> **Guardarraíl constitucional v0.4.5**  
> Este documento es una pieza de especificación operativa y gobierno documental. No autoriza implementación funcional, backend, cloud, autenticación, analíticas, IA externa, manejo de datos reales, subida automática ni automatizaciones funcionales. Toda transición posterior requiere revisión humana PH-IT-AT, análisis de riesgo, consentimiento situado, criterios local-first y gate constitucional.


## 1. Entendimiento de la forma de trabajo

Esta sesión se manejará como PR #11. No se trabajará como paquete aislado. El PR debe contener la sesión completa, comenzando por documentos de activación y bitácoras activas, seguido por revisión unitaria de Specs Núcleo.

## 2. Decisiones operativas confirmadas

```text
titulo_rector: apertura operativa v0.4.5 Specs Núcleo
bitacora: actualizar bitácora activa
orden: revisar primero las specs núcleo
nombres_archivos: semánticos, sin números al inicio
modo_aprobacion: documento por documento
```

## 3. Orden de revisión unitaria

```text
1. Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
2. Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
3. Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md
4. Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
5. Gate_Aprobacion_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
6. Documentos de deuda, bitácora, changelog, transferencia y continuidad
```

## 4. Criterio de aprobación por documento

Cada documento debe cerrar con:

```text
dictamen:
deuda:
impacto_PH_IT_AT:
impacto_en_perfiles_de_usuario:
riesgos:
ajustes_requeridos:
estado_aprobacion:
```

## 5. Bloqueos explícitos

```text
[!] No código de aplicación.
[!] No backend.
[!] No cloud.
[!] No autenticación.
[!] No analíticas.
[!] No IA externa por defecto.
[!] No datos reales.
[!] No subida automática.
[!] No automatizaciones funcionales.
[!] No arquitectura detallada sin gate.
```

## 6. Procedimiento manual sugerido para abrir PR #11

```bash
git checkout main
git pull origin main
git status
git checkout -b v0.4.5-specs-nucleo-pr11
# copiar los documentos del paquete PR11 en sus rutas canónicas
git add 00_CONTROL_MAESTRO 15_EVALUACION_CALIDAD_Y_AUDITORIA 18_DOCUMENTACION_ACTIVA 20_MANTENIMIENTO_Y_EVOLUCION 21_WIKI_DOCUMENTACION_HUMANA
git commit -m "docs: activar PR11 specs núcleo v0.4.5"
git push -u origin v0.4.5-specs-nucleo-pr11
gh pr create --draft --base main --head v0.4.5-specs-nucleo-pr11 --title "docs: apertura operativa v0.4.5 specs núcleo" --body-file Cuerpo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
```

## 7. Dictamen

PR #11 debe ser el muelle documental de v0.4.5 Specs Núcleo. La sesión avanza por revisión unitaria, no por descarga masiva de archivos.
