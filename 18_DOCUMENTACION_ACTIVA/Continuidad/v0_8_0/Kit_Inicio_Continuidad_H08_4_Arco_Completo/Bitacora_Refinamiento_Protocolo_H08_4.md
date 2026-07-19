# Bitácora de refinamiento del protocolo · H08-4

## Plantilla de entrada

### Evento

- fecha y bloque;
- intención;
- estado observado;
- acción humana;
- síntesis de IA;
- ejecución de máquina;
- impacto sistémico.

### Resultado

```yaml
expected_state:
observed_state:
transition:
idempotent:
human_gate_respected:
evidence:
```

### Aprendizaje

- regla que funcionó;
- regla ambigua;
- contraejemplo;
- enmienda candidata;
- decisión pendiente.

## Entradas

Las entradas se añadirán cronológicamente. Esta bitácora es de trabajo y no
sustituye decisiones, specs ni evidencia técnica.

### Evento 2026-07-18 · H08-4.0 inicio y cardinalidad

- intención: iniciar H08-4 desde el baseline post-merge y cerrar contratos de misión;
- estado observado: `origin/main` coincide, kit íntegro, worktree local no resuelto;
- acción humana: ratifica que solamente M3 admite múltiples evidencias;
- síntesis de IA: formaliza cardinalidad híbrida y caracteriza M1;
- ejecución de máquina: valida ZIP, inspecciona baseline mediante GitHub y detiene el preflight antes de producción;
- impacto sistémico: no cambia schema, storage format, package version ni fronteras H08-5.

### Resultado

```yaml
expected_state: BASELINE_VERIFIED_to_BRANCH_OPEN
observed_state: BASELINE_VERIFIED_without_local_worktree
transition: READ_ONLY_CHARACTERIZATION
idempotent: true
human_gate_respected: true
evidence:
  - Decision_Cardinalidad_Evidencia_Reflexion_H08_4_2026_07_18.md
  - Caracterizacion_M1_H08_4_0_AI_StoryLab_1.md
  - Evidencia_Preflight_H08_4_0.json
```

### Aprendizaje

- regla que funcionó: fallar antes de modificar producción cuando `repository_root` no está resuelto;
- regla ambigua: el protocolo no distingue explícitamente una caracterización remota verificable de un worktree local;
- contraejemplo: CI o lectura remota correctos no sustituyen el preflight local;
- enmienda candidata: añadir `READ_ONLY_CHARACTERIZATION` como subestado informativo, no como transición canónica;
- decisión pendiente: ninguna sobre cardinalidad; resolver worktree antes de H08-4.1.

---

## H08-4.0-SESSION-2026-07-18-PREFLIGHT-INCIDENTS

### Contexto de la sesión

La sesión de activación de H08-4 comenzó con múltiples incidencias operacionales. Algunas fueron reconocidas por la autoridad humana como problemas ya observados en sesiones anteriores, mientras que otras aparecieron por primera vez durante este preflight.

### Incidencias observadas

1. La activación de `set -u` o `nounset` dentro de la terminal interactiva de zsh provocó fallos en los hooks de integración de VS Code `__vsc_preexec` y `__vsc_update_prompt`.

2. Los hooks intentaron consultar la variable `RPROMPT` cuando no estaba definida, impidiendo que comandos posteriores, incluso `set +u`, llegaran a ejecutarse.

3. La sesión comenzó con Node `v20.20.2`, fuera del rango requerido por StoryLab `>=22 <27`.

4. Fue necesario renovar la terminal, desactivar temporalmente la integración problemática y activar Node `v22.23.1` mediante nvm.

5. `npm ci` y `npm run verify` se ejecutaron más de una vez como parte de la recuperación y reconfirmación. Las repeticiones no modificaron archivos versionados ni introdujeron cambios de producción.

### Resultado de recuperación

- Baseline verificado: `7fb21b66aaf1f541d99797d582585adcc09b4f55`.
- Rama local: `feat/v0.8-h08-4-complete-mission-arc`.
- Node compatible: `v22.23.1`.
- Suites aprobadas: 24 de 24.
- Pruebas aprobadas: 164 de 164.
- Rutas documentales del hito: 15.
- Rutas de producción modificadas: 0.
- Staging mantenido vacío hasta la autorización humana expresa.
- H08-4.1 no iniciado durante H08-4.0.
- H08-5 y fases posteriores permanecen bloqueadas.

### Refinamientos incorporados al protocolo expedito

1. No activar `set -u` globalmente en terminales interactivas de VS Code.

2. Reservar `set -Eeuo pipefail` para scripts aislados y no para el proceso interactivo del prompt.

3. Verificar la versión de Node antes de ejecutar `npm ci`.

4. Matar y recrear la terminal afectada en vez de intentar reparar una sesión atrapada por hooks de preejecución.

5. Validar archivos no rastreados mediante manifiesto y lectura directa, ya que `git diff --check` no los inspecciona hasta que son añadidos al índice.

6. Mantener separados los hitos documentales y funcionales para impedir que H08-4.1 se mezcle accidentalmente con el PR de H08-4.0.

### Clasificación

- Tipo: refinamiento operacional del protocolo.
- Evidencia: terminal local, verificación completa y estado Git.
- Impacto en producto: ninguno.
- Impacto documental: incorporación explícita a la bitácora.
- Decisión de publicación: autorizada por intervención humana para Draft PR.
- Merge: no autorizado.
