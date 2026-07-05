# Revisión Unitaria : SPEC-OP-006 Consentimiento Informado y Situado

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Documento revisado:** `Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md`  
**Estado:** revisión inicial para PR #11


> **Guardarraíl constitucional v0.4.5**  
> Este documento es una pieza de especificación operativa y gobierno documental. No autoriza implementación funcional, backend, cloud, autenticación, analíticas, IA externa, manejo de datos reales, subida automática ni automatizaciones funcionales. Toda transición posterior requiere revisión humana PH-IT-AT, análisis de riesgo, consentimiento situado, criterios local-first y gate constitucional.


## 1. Dictamen inicial

```text
dictamen: aprobable_con_ajustes_menores
razon: la spec protege agencia humana, separa crear/guardar/exportar/compartir, bloquea IA externa por defecto y exige revisión PH-IT-AT.
no_autoriza: implementación funcional
```

## 2. Fortalezas

```text
[✓] Define consentimiento como decisión situada, no casilla genérica.
[✓] Distingue crear, guardar, evidenciar, reflexionar, exportar, compartir e IA futura.
[✓] Incluye cuidado reforzado para estudiantes de escuela superior.
[✓] Declara IA externa bloqueada por defecto.
[✓] Presenta semilla arquitectónica conceptual sin almacenamiento real ni UI real.
[✓] Tiene criterios de prueba humana.
```

## 3. Ajustes menores recomendados antes de aprobación final

```text
[ ] Añadir glosario breve: consentimiento situado, acción sensible, evidencia, exportación, retiro.
[ ] Añadir criterio explícito de lenguaje por edad para estudiante de escuela superior.
[ ] Añadir nota de mediación docente/institucional sin convertirla en consentimiento sustituto automático.
[ ] Añadir criterio de versión de texto de consentimiento para trazabilidad documental.
[ ] Añadir relación con SPEC-OP-007 Datos y Privacidad como dependencia inmediata.
```

## 4. Impacto PH-IT-AT

```text
PH: protege agencia, no coerción y comprensión humana.
IT: protege validez ética, trazabilidad y límites de evidencia.
AT: protege lenguaje habitable, no rigidez y libertad expresiva.
```

## 5. Impacto en perfiles de usuario

```text
estudiante_escuela_superior: requiere cuidado reforzado, lenguaje claro y opción de no compartir.
estudiante_universitario: fortalece autoría, portafolio y control sobre evidencia.
docente: habilita mediación pedagógica sin vigilancia automática.
investigador: exige consentimiento separado para investigación y uso de evidencia.
```

## 6. Deuda

```text
DEUDA-v0.4.5-PR11-001: redactar textos de consentimiento por edad, perfil y acción sensible.
DEUDA-v0.4.5-PR11-002: crear glosario operativo mínimo para consentimiento situado.
```

## 7. Estado de aprobación

```text
estado: listo_para_discusion_y_ajustes_menores
puede_aprobarse_sin_codigo: sí
requiere_antes_de_aprobacion_final:
  - incorporar ajustes menores o registrarlos como deuda aceptada
  - validación PH-IT-AT
  - confirmar lectura de Constitución SDD y Gate Constitucional de Preimplementación
```

## 8. Dictamen final de esta revisión

SPEC-OP-006 puede ser la primera compuerta de aprobación PR #11. No debe convertirse en interfaz, formulario ni mecanismo operativo todavía. Su valor está en delimitar la ética de entrada antes de tocar cualquier dato.
