# Checklist Preimplementación SDD AI StoryLab 1 v0.4.4

**Estado:** Borrador consolidado para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Checklist_Preimplementacion_SDD_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental. No autoriza implementación funcional.

---

## 1. Existencia documental

```text
[ ] Existe una spec redactada.
[ ] Usa la Plantilla de Spec Segura vigente.
[ ] Tiene ID, título, versión, estado y responsable.
[ ] Declara alcance y no alcance.
[ ] Declara que no autoriza implementación funcional.
```

## 2. Propósito humano

```text
[ ] Explica necesidad humana, educativa, creativa o investigativa.
[ ] Identifica a quién sirve.
[ ] Explica qué experiencia protege.
[ ] Evita formular el propósito solo como tarea técnica.
```

## 3. Local-first

```text
[ ] Declara qué permanece local.
[ ] Declara qué no se guarda.
[ ] Declara qué puede exportarse.
[ ] Declara qué requiere consentimiento.
[ ] Declara qué nunca se sube automáticamente.
[ ] No introduce backend, cloud, APIs externas, autenticación, analíticas, base de datos remota ni subida automática.
```

## 4. Threat model

```text
[ ] Verifica si hay activadores de threat model.
[ ] Identifica activos a proteger.
[ ] Identifica fuentes de amenaza.
[ ] Identifica amenazas previsibles.
[ ] Identifica mitigaciones.
[ ] Identifica riesgos residuales.
[ ] Clasifica riesgo bajo, medio, alto o bloqueante.
[ ] Bloquea si hay amenazas críticas sin mitigación.
```

## 5. Datos

```text
[ ] Clasifica todos los datos.
[ ] Justifica cada dato.
[ ] Elimina datos innecesarios.
[ ] Identifica datos educativos, sensibles, personales, metadatos y datos de menores.
[ ] Bloquea datos reales si no existe política formal.
```

## 6. Evidencias y portafolios

```text
[ ] Trata evidencia como objeto de cuidado.
[ ] Permite revisar, editar, retirar y no compartir.
[ ] Prohíbe publicación automática.
[ ] Prohíbe evaluación automática final.
```

## 7. Consentimiento

```text
[ ] Explica qué ocurrirá.
[ ] Explica qué datos se usarán.
[ ] Explica para qué.
[ ] Explica quién tendrá acceso.
[ ] Explica riesgos y alternativas.
[ ] Usa consentimiento reforzado si hay menores, datos reales, publicación, exportación o IA externa.
```

## 8. IA

```text
[ ] Declara si no aplica IA.
[ ] Si es IA externa, exige spec específica, consentimiento explícito, datos ficticios/sintéticos/anonimizados, threat model y revisión humana.
[ ] Prohíbe IA como juez final, sustituto docente, autoridad creativa o vigilancia.
```

## 9. Trazabilidad

```text
[ ] Vincula Constitución SDD.
[ ] Vincula Plantilla de Spec Segura.
[ ] Vincula Política Local-First.
[ ] Vincula Registro Inicial de Threat Models.
[ ] Actualiza bitácora, transferencia y deuda.
[ ] Identifica si requiere Wiki humana.
```
