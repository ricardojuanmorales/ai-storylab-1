#!/usr/bin/env bash
set -euo pipefail

echo "== Migración controlada de documentos heredados v0.4.0 =="
echo "Rama actual: $(git branch --show-current)"
echo

if [[ "$(git branch --show-current)" != "v0.4-n3-foundation" ]]; then
  echo "ERROR: Debes estar en la rama v0.4-n3-foundation."
  exit 1
fi

move_if_exists() {
  local src="$1"
  local dst="$2"

  if [[ -f "$src" ]]; then
    mkdir -p "$(dirname "$dst")"
    echo "git mv $src -> $dst"
    git mv "$src" "$dst"
  else
    echo "AVISO: no existe $src"
  fi
}

# Compendios
move_if_exists "compendia/COMPENDIUM_INDEX.md" "18_DOCUMENTACION_ACTIVA/Compendios/COMPENDIUM_INDEX.md"
move_if_exists "compendia/compendium-mvp-alpha.md" "18_DOCUMENTACION_ACTIVA/Compendios/compendium-mvp-alpha.md"

# Guías humanas y documentación general
move_if_exists "docs/guia-estudiante.md" "21_WIKI_DOCUMENTACION_HUMANA/Guia_Estudiante/Guia_Estudiante_v0_4_0.md"
move_if_exists "docs/guia-facilitador.md" "21_WIKI_DOCUMENTACION_HUMANA/Guia_Facilitador/Guia_Facilitador_v0_4_0.md"
move_if_exists "docs/EVOLUCION_APP.md" "20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/Evolucion_App_v0_4_0.md"
move_if_exists "docs/KIT-INICIAL-REPOSITORIO-AI-STORYLAB.md" "00_CONTROL_MAESTRO/Manifiestos/Kit_Inicial_Repositorio_AI_StoryLab_v0_4_0.md"

# Gobernanza
move_if_exists "governance/AI_USAGE_POLICY.md" "09_IA_AGENTES_Y_COPILOTOS/Politicas_Uso_IA/AI_Usage_Policy_v0_4_0.md"
move_if_exists "governance/CONTRIBUTING.md" "10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub/Contributing_v0_4_0.md"
move_if_exists "governance/DECISION_LOG.md" "18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Log_Heredado_v0_4_0.md"
move_if_exists "governance/GOVERNANCE.md" "04_GOBERNANZA_ETICA_Y_RIESGOS/Gobernanza_Proyecto/Governance_v0_4_0.md"
move_if_exists "governance/PRIVACY_LOCAL_FIRST.md" "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/Privacy_Local_First_v0_4_0.md"
move_if_exists "governance/RELEASE_CRITERIA.md" "19_IMPLEMENTACION_Y_DESPLIEGUE/Release_Checklists/Release_Criteria_v0_4_0.md"
move_if_exists "governance/REVIEW_CHECKLIST.md" "15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/Review_Checklist_v0_4_0.md"
move_if_exists "governance/RISK_REGISTER.md" "04_GOBERNANZA_ETICA_Y_RIESGOS/Riesgos/Risk_Register_v0_4_0.md"

# Logs y bitácoras
move_if_exists "logs/SESSION_LOG_INDEX.md" "18_DOCUMENTACION_ACTIVA/Bitacoras/SESSION_LOG_INDEX.md"
move_if_exists "logs/session-0001.md" "18_DOCUMENTACION_ACTIVA/Bitacoras/session-0001.md"
move_if_exists "logs/session-0002.md" "18_DOCUMENTACION_ACTIVA/Bitacoras/session-0002.md"
move_if_exists "logs/session-0003.md" "18_DOCUMENTACION_ACTIVA/Bitacoras/session-0003.md"

# Primers de continuidad
move_if_exists "primers/PRIMER_CLAUDE_COWORK.md" "18_DOCUMENTACION_ACTIVA/Primers_Continuidad/PRIMER_CLAUDE_COWORK.md"
move_if_exists "primers/PRIMER_DATA_MODEL.md" "18_DOCUMENTACION_ACTIVA/Primers_Continuidad/PRIMER_DATA_MODEL.md"
move_if_exists "primers/PRIMER_MVP_SCOPE.md" "18_DOCUMENTACION_ACTIVA/Primers_Continuidad/PRIMER_MVP_SCOPE.md"
move_if_exists "primers/PRIMER_PROJECT_CONTEXT.md" "18_DOCUMENTACION_ACTIVA/Primers_Continuidad/PRIMER_PROJECT_CONTEXT.md"

# Prompts
move_if_exists "prompts/PROMPT_MASTER_MVP.md" "18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/PROMPT_MASTER_MVP.md"
move_if_exists "prompts/activation-prompts/activate-context-general.md" "18_DOCUMENTACION_ACTIVA/Prompts_Activacion/activate-context-general.md"
move_if_exists "prompts/activation-prompts/activate-debugging.md" "18_DOCUMENTACION_ACTIVA/Prompts_Activacion/activate-debugging.md"
move_if_exists "prompts/review-prompts/review-architecture.md" "18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/review-architecture.md"
move_if_exists "prompts/review-prompts/review-privacy.md" "18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/review-privacy.md"
move_if_exists "prompts/task-prompts/build-final-submission.md" "18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/build-final-submission.md"
move_if_exists "prompts/task-prompts/build-group-dashboard.md" "18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/build-group-dashboard.md"
move_if_exists "prompts/task-prompts/build-localstorage.md" "18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/build-localstorage.md"

echo
echo "== Migración completada. Revisa git status =="
git status --short
