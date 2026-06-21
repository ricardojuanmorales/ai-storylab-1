#!/usr/bin/env bash
set -euo pipefail

# AI StoryLab 1 · N3 Foundation Structure v0.4.0
# Script generador seguro.
# - Crea estructura de carpetas y README.md si no existen.
# - No toca src/, public/, package.json ni lógica funcional del MVP.
# - No sobrescribe archivos existentes.
# - No activa backend, APIs externas, autenticación ni base de datos.

ROOT="${1:-.}"
cd "$ROOT"

echo "== AI StoryLab 1 · N3 Foundation Structure v0.4.0 =="
echo "Directorio objetivo: $(pwd)"
echo

DIRS=(
  ".specify"
  ".specify/memory"
  ".specify/specs"
  ".specify/specs/Platform_Foundation"
  ".specify/specs/Security_Privacy_Baseline"
  ".specify/specs/Profile_Progress_JSON"
  ".specify/specs/Mission_Engine"
  ".specify/specs/Facilitator_Dashboard"
  ".specify/specs/Portfolio_Export"
  "00_CONTROL_MAESTRO"
  "00_CONTROL_MAESTRO/Control_Versiones"
  "00_CONTROL_MAESTRO/Control_Versiones/Versiones_Activas"
  "00_CONTROL_MAESTRO/Control_Versiones/Versiones_Cerradas"
  "00_CONTROL_MAESTRO/Convenciones_Nombres"
  "00_CONTROL_MAESTRO/Indices_Maestros"
  "00_CONTROL_MAESTRO/Manifiestos"
  "00_CONTROL_MAESTRO/Mapas_Repositorio"
  "00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion"
  "00_CONTROL_MAESTRO/Reglas_Colocacion_Documental"
  "00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental"
  "01_FUNDAMENTO_FILOSOFICO"
  "01_FUNDAMENTO_FILOSOFICO/Principios"
  "01_FUNDAMENTO_FILOSOFICO/Etica_Creativa"
  "01_FUNDAMENTO_FILOSOFICO/Autonomia_Aprendizaje"
  "01_FUNDAMENTO_FILOSOFICO/Relacion_Humano_Maquina_IA"
  "02_ARQUITECTURA_CONCEPTUAL"
  "02_ARQUITECTURA_CONCEPTUAL/Modelo_Sistemico"
  "02_ARQUITECTURA_CONCEPTUAL/Modelo_Local_First"
  "02_ARQUITECTURA_CONCEPTUAL/Modelo_Hibrido_Institucional"
  "02_ARQUITECTURA_CONCEPTUAL/Modelo_Pedagogico"
  "02_ARQUITECTURA_CONCEPTUAL/Modelo_Datos"
  "02_ARQUITECTURA_CONCEPTUAL/Mapas_Relacionales"
  "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO"
  "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Spec_Driven_Development"
  "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Gates_Operacion"
  "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Flujo_Humano_Maquina_IA"
  "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Rituales_Revision"
  "03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Transferencia_Simetrica"
  "04_GOBERNANZA_ETICA_Y_RIESGOS"
  "04_GOBERNANZA_ETICA_Y_RIESGOS/Gobernanza_Proyecto"
  "04_GOBERNANZA_ETICA_Y_RIESGOS/Registro_Decisiones"
  "04_GOBERNANZA_ETICA_Y_RIESGOS/Riesgos"
  "04_GOBERNANZA_ETICA_Y_RIESGOS/Excepciones"
  "04_GOBERNANZA_ETICA_Y_RIESGOS/Derechos_Autoria_Licencias"
  "04_GOBERNANZA_ETICA_Y_RIESGOS/Revision_Humana"
  "05_COMPETENCIAS_Y_PERFILES"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Bases_Conocimiento"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Bases_Conocimiento/Base_Comun"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Bases_Conocimiento/Paquetes_Semilla"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Bases_Conocimiento/Mapas_Modulares"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Bases_Conocimiento/Convenciones"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Invocables"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Invocables/Plantillas"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Invocables/Formatos"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Invocables/Mapas_Familias"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Invocables/Maestros"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Invocables/Derivados"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Invocables/Rutas_Situadas"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Caleidoscopio"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Caleidoscopio/Lentes"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Caleidoscopio/Patrones"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Caleidoscopio/Rutas_Recombinacion"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Transferencia_Simetrica"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Transferencia_Simetrica/Enlaces_Espejo"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Transferencia_Simetrica/Criterios_Transferencia"
  "05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias_Logicas"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Alcance_Operativo"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Aplicaciones_Educativas"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Arquitectura_Humano_Maquina_IA"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Artefactos"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Bases_Conocimiento"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Competencias"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Gobernanza_Perfil"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Invocables"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Metricas"
  "05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Transferencia_Simetrica"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Alcance_Operativo"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Bases_Conocimiento"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Competencias"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Evidencias"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Gobernanza_Perfil"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Invocables"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Metodologias"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Produccion_Academica"
  "05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Transferencia_Simetrica"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Alcance_Operativo"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Bases_Conocimiento"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Competencias"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Evidencias"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Experiencias_Mediaciones"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Gobernanza_Perfil"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Invocables"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Produccion_Creativa"
  "05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Transferencia_Simetrica"
  "05_COMPETENCIAS_Y_PERFILES/Caleidoscopio"
  "05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/Marco_Operativo"
  "05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/Lentes_C4_C5"
  "05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/Tensiones_Recombinaciones"
  "05_COMPETENCIAS_Y_PERFILES/Matrices_Competencias"
  "05_COMPETENCIAS_Y_PERFILES/Taxonomias"
  "06_PASTILLAS_MODULARES"
  "06_PASTILLAS_MODULARES/Microlecciones"
  "06_PASTILLAS_MODULARES/Actividades_Cortas"
  "06_PASTILLAS_MODULARES/Recursos_Reutilizables"
  "06_PASTILLAS_MODULARES/Fragmentos_Formativos"
  "07_PLANTILLAS_Y_MODELOS"
  "07_PLANTILLAS_Y_MODELOS/Plantillas_Documentales"
  "07_PLANTILLAS_Y_MODELOS/Plantillas_Evaluacion"
  "07_PLANTILLAS_Y_MODELOS/Modelos_Datos"
  "07_PLANTILLAS_Y_MODELOS/Modelos_Prompts"
  "07_PLANTILLAS_Y_MODELOS/Modelos_Gobernanza"
  "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS"
  "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab"
  "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab/Misiones"
  "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab/Rutas_Aprendizaje"
  "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab/Evidencias"
  "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Secuencias_Didacticas"
  "08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Trayectorias_Nivel"
  "09_IA_AGENTES_Y_COPILOTOS"
  "09_IA_AGENTES_Y_COPILOTOS/Politicas_Uso_IA"
  "09_IA_AGENTES_Y_COPILOTOS/Prompts_Seguros"
  "09_IA_AGENTES_Y_COPILOTOS/Agentes_Planificados"
  "09_IA_AGENTES_Y_COPILOTOS/Copilotos_Local_First"
  "09_IA_AGENTES_Y_COPILOTOS/Evaluacion_IA"
  "10_REPOSITORIOS_Y_FLUJO_TECNICO"
  "10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub"
  "10_REPOSITORIOS_Y_FLUJO_TECNICO/Estructura_App"
  "10_REPOSITORIOS_Y_FLUJO_TECNICO/Dependencias"
  "10_REPOSITORIOS_Y_FLUJO_TECNICO/Build_Test"
  "10_REPOSITORIOS_Y_FLUJO_TECNICO/Convenciones_Commits"
  "11_MULTIMODALIDAD_Y_PUBLICACION"
  "11_MULTIMODALIDAD_Y_PUBLICACION/Imagenes"
  "11_MULTIMODALIDAD_Y_PUBLICACION/Audio"
  "11_MULTIMODALIDAD_Y_PUBLICACION/Video"
  "11_MULTIMODALIDAD_Y_PUBLICACION/Portafolios"
  "11_MULTIMODALIDAD_Y_PUBLICACION/Publicacion_Local"
  "12_DISENO_INSTRUCCIONAL_UNIVERSAL"
  "12_DISENO_INSTRUCCIONAL_UNIVERSAL/Accesibilidad"
  "12_DISENO_INSTRUCCIONAL_UNIVERSAL/DUA"
  "12_DISENO_INSTRUCCIONAL_UNIVERSAL/Rubricas"
  "12_DISENO_INSTRUCCIONAL_UNIVERSAL/Adaptaciones"
  "12_DISENO_INSTRUCCIONAL_UNIVERSAL/Experiencia_Estudiante"
  "13_INVESTIGACION_Y_EVIDENCIA"
  "13_INVESTIGACION_Y_EVIDENCIA/Evidencia_Aprendizaje"
  "13_INVESTIGACION_Y_EVIDENCIA/Evidence_Ledger"
  "13_INVESTIGACION_Y_EVIDENCIA/Fuentes"
  "13_INVESTIGACION_Y_EVIDENCIA/Metodologias"
  "13_INVESTIGACION_Y_EVIDENCIA/Integracion_IT"
  "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO"
  "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Comunidad_Practica"
  "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Transferencia_Facilitadores"
  "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Escalamiento_Institucional"
  "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Adopcion_Controlada"
  "14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Comunicaciones"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Accesibilidad"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_DevOps"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_IA_Agentes"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Seguridad"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Sistemica"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA/Evidencias_Validacion"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA/Metricas_Internas"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria"
  "15_EVALUACION_CALIDAD_Y_AUDITORIA/Rubricas_N3_N4"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Politicas_Datos"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Modelos_Amenazas"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Requisitos_Seguridad"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Checklists_Seguridad"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Evaluacion_Riesgos_Tecnicos"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Seguridad_IA_Agentes"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Cumplimiento_Normativo"
  "17_INTERNACIONALIZACION_LOCALIZACION"
  "17_INTERNACIONALIZACION_LOCALIZACION/Glosarios"
  "17_INTERNACIONALIZACION_LOCALIZACION/Traducciones"
  "17_INTERNACIONALIZACION_LOCALIZACION/Localizacion_Cultural"
  "17_INTERNACIONALIZACION_LOCALIZACION/Variantes_Linguisticas"
  "18_DOCUMENTACION_ACTIVA"
  "18_DOCUMENTACION_ACTIVA/Bitacoras"
  "18_DOCUMENTACION_ACTIVA/Changelog"
  "18_DOCUMENTACION_ACTIVA/Cierres_Sesion"
  "18_DOCUMENTACION_ACTIVA/Compendios"
  "18_DOCUMENTACION_ACTIVA/Informes_Validacion"
  "18_DOCUMENTACION_ACTIVA/Manifiestos_Sesion"
  "18_DOCUMENTACION_ACTIVA/Primers_Continuidad"
  "18_DOCUMENTACION_ACTIVA/Prompts_Activacion"
  "18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion"
  "18_DOCUMENTACION_ACTIVA/Registro_Decisiones"
  "18_DOCUMENTACION_ACTIVA/Reportes_Evaluacion"
  "18_DOCUMENTACION_ACTIVA/Segundo_Cerebro"
  "18_DOCUMENTACION_ACTIVA/WIKI_SYNC"
  "19_IMPLEMENTACION_Y_DESPLIEGUE"
  "19_IMPLEMENTACION_Y_DESPLIEGUE/GitHub_Pages"
  "19_IMPLEMENTACION_Y_DESPLIEGUE/Entornos_Locales"
  "19_IMPLEMENTACION_Y_DESPLIEGUE/Configuracion_Vite"
  "19_IMPLEMENTACION_Y_DESPLIEGUE/Release_Checklists"
  "19_IMPLEMENTACION_Y_DESPLIEGUE/Despliegue_Local_First"
  "19_IMPLEMENTACION_Y_DESPLIEGUE/Perfiles_Operacion"
  "19_IMPLEMENTACION_Y_DESPLIEGUE/Perfiles_Operacion/Local_First_Default"
  "19_IMPLEMENTACION_Y_DESPLIEGUE/Perfiles_Operacion/Institutional_Hybrid_Opt_In"
  "20_MANTENIMIENTO_Y_EVOLUCION"
  "20_MANTENIMIENTO_Y_EVOLUCION/Actualizaciones"
  "20_MANTENIMIENTO_Y_EVOLUCION/Backlog_Evolutivo"
  "20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Tecnica"
  "20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Estructural"
  "20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC"
  "20_MANTENIMIENTO_Y_EVOLUCION/Incidentes_Postmortems"
  "20_MANTENIMIENTO_Y_EVOLUCION/Mantenimiento_Aplicacion"
  "20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion"
  "20_MANTENIMIENTO_Y_EVOLUCION/Sostenibilidad"
  "20_MANTENIMIENTO_Y_EVOLUCION/Versionado_Releases"
  "21_WIKI_DOCUMENTACION_HUMANA"
  "21_WIKI_DOCUMENTACION_HUMANA/Guia_Estudiante"
  "21_WIKI_DOCUMENTACION_HUMANA/Guia_Facilitador"
  "21_WIKI_DOCUMENTACION_HUMANA/Guia_Desarrollador"
  "21_WIKI_DOCUMENTACION_HUMANA/Guia_Seguridad"
  "21_WIKI_DOCUMENTACION_HUMANA/Guia_Conocimiento_Comun"
  "21_WIKI_DOCUMENTACION_HUMANA/Guia_Perfiles"
  "21_WIKI_DOCUMENTACION_HUMANA/Guia_Institucional"
  "99_ARCHIVO_HISTORICO"
  "99_ARCHIVO_HISTORICO/Versiones_Reemplazadas"
  "99_ARCHIVO_HISTORICO/Versiones_Cerradas"
  "99_ARCHIVO_HISTORICO/Ciclos_Completados"
  "99_ARCHIVO_HISTORICO/Sesiones_Cerradas"
  "99_ARCHIVO_HISTORICO/Exportaciones_Finales"
  "99_ARCHIVO_HISTORICO/Exportaciones_Finales/MD"
  "99_ARCHIVO_HISTORICO/Exportaciones_Finales/JSON"
  "99_ARCHIVO_HISTORICO/Exportaciones_Finales/ZIP"
  "99_ARCHIVO_HISTORICO/Paquetes_Intermedios"
  "99_ARCHIVO_HISTORICO/Releases"
  "99_ARCHIVO_HISTORICO/Planes_Archivo"
  "99_ARCHIVO_HISTORICO/Wiki_Archivada"
)

INITIAL_DOCS=(
  "00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Estandar_Estructura_Manejo_Archivos_v0_4_0.md"
  "00_CONTROL_MAESTRO/Manifiestos/Manifest_Kit_N3_Foundation_Structure_v0_4_0.md"
  "00_CONTROL_MAESTRO/Mapas_Repositorio/Tree_Objetivo_N3_Foundation_v0_4_0.md"
  "18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_v0_4_0.md"
  "18_DOCUMENTACION_ACTIVA/Changelog/Changelog_Completo_v0_4_0.md"
  "18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Registro_Decisiones_Completo_v0_4_0.md"
  "18_DOCUMENTACION_ACTIVA/WIKI_SYNC/WIKI_SYNC_Completo_v0_4_0.md"
  "20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Tecnica/Registro_Deuda_Tecnica_v0_4_0.md"
  "20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Estructural/Registro_Deuda_Estructural_v0_4_0.md"
  "20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC/Registro_Deuda_WIKI_SYNC_v0_4_0.md"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/Politica_Privacidad_Local_First_v0_4_0.md"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Modelos_Amenazas/Threat_Model_v0_4_0.md"
  "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Requisitos_Seguridad/Security_Requirements_v0_4_0.md"
  ".specify/memory/constitution_v0_4_0.md"
  ".specify/specs/Platform_Foundation/trace_v0_4_0.md"
)

create_readme() {
  local dir="$1"
  local readme="$dir/README.md"
  if [[ ! -f "$readme" ]]; then
    cat > "$readme" <<EOF
# $(basename "$dir")

**Proyecto:** AI StoryLab 1  
**Versión estructura:** v0.4.0  
**Estado:** Pendiente_Activacion  
**ID maestro relacionado:** ASTL-V040-STD-001

## Propósito

Describir la función de este cartapacio dentro de la estructura N3 Foundation de AI StoryLab 1.

## Qué contiene

Pendiente de poblamiento según necesidad, spec, decisión o documentación activa.

## Qué no contiene

No debe contener documentos fuera de su función, versiones reemplazadas sin archivar, ni implementación prematura de backend, APIs externas, autenticación, base de datos remota o subida automática de archivos.

## Relación con carpetas vecinas

Debe mantener referencias lógicas hacia documentos canónicos y evitar duplicación.

## Criterios de colocación

Colocar aquí solo documentos cuya función primaria corresponda a este cartapacio.

## Riesgos de seguridad y privacidad

Revisar si los documentos en esta carpeta tocan datos personales, datos educativos, menores, importación/exportación, IA externa, archivos multimedia, backend futuro, autenticación futura o analíticas.

## Relación con WIKI_SYNC

Si una decisión o documento afecta a estudiantes, facilitadores, docentes, familias, desarrolladores o revisores, registrar deuda WIKI_SYNC.

## Última revisión

Pendiente.
EOF
  fi
}

echo "Creando carpetas y README.md..."
for dir in "${DIRS[@]}"; do
  mkdir -p "$dir"
  create_readme "$dir"
done

echo "Creando documentos rectores iniciales si no existen..."

mkdir -p "00_CONTROL_MAESTRO/Reglas_Colocacion_Documental"
if [[ ! -f "00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Estandar_Estructura_Manejo_Archivos_v0_4_0.md" ]]; then
  cat > "00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Estandar_Estructura_Manejo_Archivos_v0_4_0.md" <<'EOF'
# ASTL-V040-STD-001
# Estándar de Estructura y Manejo de Archivos
## AI StoryLab 1 · Kit N3 Foundation Structure v0.4.0

**Proyecto:** AI StoryLab 1  
**Repositorio:** ricardojuanmorales/ai-storylab-1  
**Ruta canónica prevista:** `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Estandar_Estructura_Manejo_Archivos_v0_4_0.md`  
**Versión del estándar:** v0.4.0  
**Estado:** Canónico inicial sujeto a revisión humana  
**ID maestro:** ASTL-V040-STD-001  
**Nivel:** N3 - Avanzado  
**Framework base:** Framework Genérico V4.1.0 Integral Autosostenido  
**Kit:** Completo N2-N3  
**Perfil principal:** Programador Humanista  
**Modo Caleidoscopio:** C4 Integral + C5 Pedagógico  
**Principios obligatorios:** Spec-Driven Development, Security by Design, Security by Default, local-first por defecto.

---

## 1. Propósito

Este estándar define la estructura de carpetas, reglas de colocación documental, manejo de archivos, versionado, trazabilidad, documentación activa, transferencia simétrica y deuda del proyecto AI StoryLab 1.

Su función es preparar el kit `AI_StoryLab_1_N3_Foundation_Structure_v0_4_0` como una base robusta para operar desde `v0.4.0` hasta `v1.0`, evitando reorganizaciones constantes y manteniendo espacio suficiente para crecimiento técnico, pedagógico, investigativo, creativo, ético y documental.

Este estándar no activa backend, APIs externas, analíticas externas, carga de archivos, autenticación ni base de datos remota. Toda función híbrida futura queda reservada para fases posteriores y requiere threat model, política de privacidad, consentimiento, specs, controles y pruebas.

---

## 2. Alcance

Este estándar aplica a:

- estructura raíz del repositorio;
- cartapacios documentales `00-21` y `99`;
- estructura `.specify/`;
- documentación activa;
- seguridad, privacidad y datos;
- wiki humana;
- archivo histórico;
- deuda técnica, estructural y WIKI_SYNC;
- bitácora de transferencia simétrica;
- reglas de versionado y nombres;
- reflejos obligatorios entre specs, decisiones, changelog, deuda, seguridad, evidencia, wiki y archivo.

No aplica todavía a:

- implementación de backend;
- autenticación real;
- bases de datos remotas;
- sincronización cloud;
- APIs externas de IA;
- almacenamiento remoto de portafolios;
- analíticas avanzadas;
- carga automática de archivos.

---

## 3. Regla madre de estructura

La raíz conserva numeración porque funciona como mapa cardinal del sistema:

```text
00_CONTROL_MAESTRO/
01_FUNDAMENTO_FILOSOFICO/
02_ARQUITECTURA_CONCEPTUAL/
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
04_GOBERNANZA_ETICA_Y_RIESGOS/
05_COMPETENCIAS_Y_PERFILES/
06_PASTILLAS_MODULARES/
07_PLANTILLAS_Y_MODELOS/
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/
09_IA_AGENTES_Y_COPILOTOS/
10_REPOSITORIOS_Y_FLUJO_TECNICO/
11_MULTIMODALIDAD_Y_PUBLICACION/
12_DISENO_INSTRUCCIONAL_UNIVERSAL/
13_INVESTIGACION_Y_EVIDENCIA/
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/
15_EVALUACION_CALIDAD_Y_AUDITORIA/
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
17_INTERNACIONALIZACION_LOCALIZACION/
18_DOCUMENTACION_ACTIVA/
19_IMPLEMENTACION_Y_DESPLIEGUE/
20_MANTENIMIENTO_Y_EVOLUCION/
21_WIKI_DOCUMENTACION_HUMANA/
99_ARCHIVO_HISTORICO/
```

Desde segundo nivel en adelante no se usan prefijos numéricos.

Correcto:

```text
05_COMPETENCIAS_Y_PERFILES/
  Conocimiento_Comun/
  Programador_Humanista/
  Investigador_Transdisciplinario/
  Artista_Transdisciplinario/
```

Incorrecto:

```text
05_COMPETENCIAS_Y_PERFILES/
  01_Conocimiento_Comun/
  02_Programador_Humanista/
  03_Investigador_Transdisciplinario/
```

Los números sí pueden usarse en IDs, versiones, fechas, releases, decisiones, specs o nombres de archivo cuando cumplen función de trazabilidad.

---

## 4. Unidad estructural mínima

Todo cartapacio creado debe incluir `README.md`.

El `README.md` debe explicar:

- propósito;
- qué contiene;
- qué no contiene;
- relación con carpetas vecinas;
- criterios de colocación;
- riesgos de seguridad y privacidad;
- relación con WIKI_SYNC;
- estado del cartapacio;
- responsable funcional;
- última revisión;
- versión documental interna.

Los documentos sustantivos deben versionarse explícitamente en el nombre del archivo.

Ejemplos:

```text
Threat_Model_v0_4_0.md
Security_Requirements_v0_4_0.md
Registro_Decisiones_v0_4_0.md
Estandar_Estructura_Manejo_Archivos_v0_4_0.md
```

Excepción operativa:

```text
README.md
```

El `README.md` conserva nombre estable para navegación humana y de GitHub, pero debe incluir versión interna y, cuando sea reemplazado, se archiva una copia versionada en `99_ARCHIVO_HISTORICO/Versiones_Reemplazadas/`.

---

## 5. Estados de cartapacio

Cada cartapacio debe declararse en uno de estos estados:

```text
Activo
Reservado
Pendiente_Activacion
Historico
Experimental
```

### Activo

Contiene documentos o procesos en uso actual.

### Reservado

Existe para sostener arquitectura futura, pero no contiene operación activa todavía.

### Pendiente_Activacion

Tiene función definida, pero requiere decisión, spec o revisión antes de poblarse.

### Histórico

Contiene memoria cerrada, reemplazada o archivada.

### Experimental

Contiene trabajo exploratorio controlado que no debe confundirse con política o implementación estable.

---

## 6. Estructura operativa base

La raíz del repositorio combina aplicación, SDD y estructura documental N3:

```text
AI_StoryLab_1/
  README.md
  CHANGELOG.md
  SECURITY.md
  PRIVACY.md
  CONTRIBUTING.md
  package.json
  vite.config.*
  src/
  public/
  .specify/
  00_CONTROL_MAESTRO/
  01_FUNDAMENTO_FILOSOFICO/
  02_ARQUITECTURA_CONCEPTUAL/
  03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
  04_GOBERNANZA_ETICA_Y_RIESGOS/
  05_COMPETENCIAS_Y_PERFILES/
  06_PASTILLAS_MODULARES/
  07_PLANTILLAS_Y_MODELOS/
  08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/
  09_IA_AGENTES_Y_COPILOTOS/
  10_REPOSITORIOS_Y_FLUJO_TECNICO/
  11_MULTIMODALIDAD_Y_PUBLICACION/
  12_DISENO_INSTRUCCIONAL_UNIVERSAL/
  13_INVESTIGACION_Y_EVIDENCIA/
  14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/
  15_EVALUACION_CALIDAD_Y_AUDITORIA/
  16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
  17_INTERNACIONALIZACION_LOCALIZACION/
  18_DOCUMENTACION_ACTIVA/
  19_IMPLEMENTACION_Y_DESPLIEGUE/
  20_MANTENIMIENTO_Y_EVOLUCION/
  21_WIKI_DOCUMENTACION_HUMANA/
  99_ARCHIVO_HISTORICO/
```

`src/`, `public/`, `package.json` y archivos técnicos de Vite permanecen en su lugar. La estructura N3 no reemplaza la aplicación; la gobierna, documenta, evalúa y prepara para evolución segura.

---

## 7. Estructura `.specify/`

`.specify/` funciona como taller técnico de especificación. No es una zona opaca para máquinas. Todo trabajo en `.specify/` debe reflejarse en la estructura humana, documental, evaluativa, de seguridad, deuda, wiki y archivo cuando corresponda.

```text
.specify/
  README.md
  memory/
    README.md
    constitution_v0_4_0.md
  specs/
    README.md
    Platform_Foundation/
      README.md
      spec_v0_4_0.md
      plan_v0_4_0.md
      tasks_v0_4_0.md
      risks_v0_4_0.md
      security_v0_4_0.md
      acceptance_v0_4_0.md
      tests_v0_4_0.md
      trace_v0_4_0.md
    Security_Privacy_Baseline/
      README.md
      spec_v0_4_0.md
      plan_v0_4_0.md
      tasks_v0_4_0.md
      risks_v0_4_0.md
      security_v0_4_0.md
      acceptance_v0_4_0.md
      tests_v0_4_0.md
      trace_v0_4_0.md
    Profile_Progress_JSON/
      README.md
      spec_v0_4_0.md
      plan_v0_4_0.md
      tasks_v0_4_0.md
      risks_v0_4_0.md
      security_v0_4_0.md
      acceptance_v0_4_0.md
      tests_v0_4_0.md
      trace_v0_4_0.md
```

Cada spec debe incluir un archivo `trace_vX_Y_Z.md`.

El archivo `trace` debe enumerar:

- ID maestro;
- spec relacionada;
- documentos creados;
- documentos modificados;
- decisiones afectadas;
- changelog afectado;
- riesgos afectados;
- deuda técnica generada o reducida;
- deuda estructural generada o reducida;
- deuda WIKI_SYNC generada o reducida;
- documentos de seguridad relacionados;
- evidencias de validación;
- guías humanas requeridas;
- archivos que deberán archivarse;
- estado del reflejo.

---

## 8. Regla de reflejo obligatorio

Todo cambio en `.specify/` debe reflejarse, según aplique, en:

```text
18_DOCUMENTACION_ACTIVA/
15_EVALUACION_CALIDAD_Y_AUDITORIA/
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
20_MANTENIMIENTO_Y_EVOLUCION/
21_WIKI_DOCUMENTACION_HUMANA/
99_ARCHIVO_HISTORICO/
```

Mapa de reflejo mínimo:

```text
spec.md        -> Registro_Decisiones, Changelog, WIKI_SYNC si afecta personas
plan.md        -> Bitacora, Deuda_Tecnica, Deuda_Estructural si cambia arquitectura
tasks.md       -> Deuda_Tecnica, Gates, Evidencias
risks.md       -> Riesgos, Seguridad, Privacidad
security.md    -> Threat_Model, Security_Requirements
acceptance.md  -> Evidencias_Validacion, Gates
tests.md       -> Evaluacion_DevOps, Evidencias_Validacion
trace.md       -> Indices, Deuda, Changelog, Archivo
```

La documentación técnica no se considera completa hasta que su reflejo humano y documental esté registrado como completado o como deuda explícita.

---

## 9. Conocimiento común y perfiles

`Conocimiento_Comun/` es la ruta transversal de aquello que aplica a Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario y Caleidoscopio.

Programador Humanista funciona como lente principal de operación inicial, pero no como dueño del conocimiento común.

Regla:

```text
Conocimiento_Comun/ contiene lo transversal.
Programador_Humanista/ aplica, prueba y operacionaliza primero.
Investigador_Transdisciplinario/ queda preparado para evidencia, metodología e investigación.
Artista_Transdisciplinario/ queda preparado para mediación, experiencia y producción creativa.
Caleidoscopio/ articula integración, tensión, recombinación y lectura sistémica.
```

Toda transferencia entre perfiles debe registrarse en:

```text
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_v0_4_0.md
```

---

## 10. Documentación activa

`18_DOCUMENTACION_ACTIVA/` registra el proceso vivo.

Regla:

Si documenta proceso vivo, va en `18_DOCUMENTACION_ACTIVA/`.

Si funciona como evidencia formal, va en `15_EVALUACION_CALIDAD_Y_AUDITORIA/`.

Si debe ser entendido por estudiantes, facilitadores, docentes o instituciones, genera WIKI_SYNC.

---

## 11. Seguridad, privacidad y datos

`16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` concentra seguridad transversal.

Cartapacios reservados para compatibilidad futura:

```text
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
  Modelos_Amenazas/
    Threat_Model_Hibrido_Institucional_v0_8_0.md
    Threat_Model_Autenticacion_v0_8_0.md
    Threat_Model_Base_Datos_v0_8_0.md
```

Estos documentos pueden existir como planificación o borrador futuro, pero no activan implementación.

---

## 12. Deuda separada

La deuda se separa en tres registros:

```text
20_MANTENIMIENTO_Y_EVOLUCION/
  Deuda_Tecnica/
    README.md
    Registro_Deuda_Tecnica_v0_4_0.md
  Deuda_Estructural/
    README.md
    Registro_Deuda_Estructural_v0_4_0.md
  Deuda_WIKI_SYNC/
    README.md
    Registro_Deuda_WIKI_SYNC_v0_4_0.md
```

### Deuda técnica

Código, pruebas, dependencias, build, CI/CD, validaciones, deuda de implementación.

### Deuda estructural

Rutas, carpetas, índices, referencias lógicas, ubicación documental, migraciones, arquitectura de información.

### Deuda WIKI_SYNC

Guías humanas pendientes, traducciones necesarias, documentación para estudiantes, facilitadores, docentes o instituciones.

Cada deuda debe tener:

```text
ID maestro
tipo de deuda
origen
ruta afectada
impacto
prioridad
responsable
fecha de creación
fecha objetivo
estado
criterio de cierre
relación con PR o release
```

---

## 13. ID maestro de trazabilidad

Todo cambio relevante debe tener un ID maestro transversal.

Formato recomendado:

```text
ASTL-V040-TIPO-NNN
```

Ejemplos:

```text
ASTL-V040-STD-001
ASTL-V040-DEC-001
ASTL-V040-SPEC-001
ASTL-V040-RISK-001
ASTL-V040-DEBT-001
ASTL-V040-WIKI-001
ASTL-V040-SEC-001
```

El ID debe aparecer en:

```text
.specify/
Registro_Decisiones
Changelog
Bitacora
Deuda
WIKI_SYNC
Evidencias
Archivo
PR
Release notes
```

---

## 14. Versionado documental

Todo documento sustantivo debe versionarse en el nombre del archivo.

Formato:

```text
Nombre_Documento_vX_Y_Z.md
```

Ejemplos:

```text
Estandar_Estructura_Manejo_Archivos_v0_4_0.md
Registro_Decisiones_Completo_v0_4_0.md
Threat_Model_v0_4_0.md
Security_Requirements_v0_4_0.md
Bitacora_Transferencia_Simetrica_v0_4_0.md
```

Para documentos de sesión:

```text
Cierre_Sesion_002_2026-06-21_v0_4_0.md
Primer_Continuidad_Sesion_003_v0_4_0.md
```

Para archivos JSON:

```text
schema_profile_progress_v0_4_0.json
sample_profile_progress_valid_v0_4_0.json
sample_profile_progress_invalid_oversize_v0_4_0.json
```

Para paquetes:

```text
AI_StoryLab_1_N3_Foundation_Structure_v0_4_0.zip
AI_StoryLab_1_N3_Foundation_Structure_v0_4_0.patch
```

---

## 15. WIKI_SYNC como sistema de deuda viva

WIKI_SYNC no bloquea automáticamente un PR inicial, pero sí debe registrar deuda humana pendiente.

Si un cambio afecta a personas usuarias, debe generarse una entrada en:

```text
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/WIKI_SYNC_Completo_v0_4_0.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC/Registro_Deuda_WIKI_SYNC_v0_4_0.md
```

Antes de release estable, la deuda WIKI_SYNC crítica debe cerrarse o justificarse.

Guías humanas viven en:

```text
21_WIKI_DOCUMENTACION_HUMANA/
  Guia_Estudiante/
  Guia_Facilitador/
  Guia_Desarrollador/
  Guia_Seguridad/
  Guia_Conocimiento_Comun/
  Guia_Perfiles/
  Guia_Institucional/
```

---

## 16. Archivo histórico

`99_ARCHIVO_HISTORICO/` conserva versiones reemplazadas, cierres, releases, paquetes y exportaciones.

Regla:

Una versión reemplazada no permanece indefinidamente en cartapacio vivo. Se archiva cuando:

- existe reemplazo aprobado;
- el changelog fue actualizado;
- la decisión fue registrada;
- las referencias fueron revisadas;
- la ruta histórica está clara;
- el índice fue actualizado.

---

## 17. Compatibilidad futura v1.0

La estructura debe sostener una v1.0 con:

```text
Local_First_Default
Institutional_Hybrid_Opt_In
```

La distribución recomendada es una sola aplicación con módulos híbridos apagados por defecto.

### Local_First_Default

- activo por defecto;
- sin cuenta obligatoria;
- sin base de datos remota;
- sin subida automática;
- export/import controlado;
- adecuado para talleres, GitHub Pages y autonomía estudiantil.

### Institutional_Hybrid_Opt_In

- apagado por defecto;
- requiere consentimiento institucional;
- puede incluir cuentas estudiantiles opcionales;
- puede incluir autenticación;
- puede incluir base de datos mínima;
- requiere threat model específico;
- requiere política de privacidad actualizada;
- requiere controles y pruebas;
- requiere documentación humana institucional.

Datos permitidos inicialmente en modo híbrido futuro:

```text
roles
cohortes
progreso mínimo
estado de completación
metadatos de entrega
rúbricas resumidas
consentimiento institucional
configuración institucional
auditoría básica
```

Datos no recomendados para v1.0 inicial:

```text
portafolios completos
videos
audios
imágenes originales
prompts libres extensos
reflexiones sensibles
analíticas avanzadas
```

---

## 18. Métricas iniciales de monitoreo

Se crea un set inicial de métricas para evaluar si la estructura ayuda al proyecto.

### Métricas estructurales

```text
porcentaje de cartapacios con README.md
número de documentos sin versión explícita
número de rutas canónicas definidas
número de referencias rotas detectadas
número de documentos duplicados
```

### Métricas SDD

```text
número de specs activos
porcentaje de specs con trace completo
porcentaje de specs con security.md
porcentaje de specs con tests.md
porcentaje de specs con acceptance.md
```

### Métricas de deuda

```text
deuda técnica abierta
deuda estructural abierta
deuda WIKI_SYNC abierta
deuda crítica por release
tiempo promedio de cierre de deuda
```

### Métricas de seguridad

```text
requisitos de seguridad documentados
threat models activos
riesgos abiertos de privacidad
riesgos abiertos de datos de menores
controles trazados a pruebas
```

### Métricas humanas

```text
guías humanas creadas
guías pendientes por WIKI_SYNC
tiempo requerido para reactivar una sesión
porcentaje de decisiones con explicación humana
```

---

## 19. Reglas de bloqueo

Quedan bloqueadas en v0.4.0:

```text
backend operativo
APIs externas
autenticación
base de datos remota
subida automática de archivos
analíticas externas
sincronización cloud
almacenamiento remoto de portafolios
```

Solo pueden documentarse como posibilidades futuras bajo:

```text
02_ARQUITECTURA_CONCEPTUAL/
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
20_MANTENIMIENTO_Y_EVOLUCION/
```

La existencia de carpetas reservadas no autoriza implementación.

---

## 20. Criterio de aprobación del estándar

Este estándar puede aprobarse para el kit N3 foundation si:

- conserva raíz `00-21` y `99`;
- no usa numeración desde segundo nivel en adelante;
- incluye `README.md` por carpeta;
- separa conocimiento común de PH;
- prepara simetría para IT y AT;
- crea reflejo obligatorio desde `.specify/`;
- separa deuda técnica, estructural y WIKI_SYNC;
- usa ID maestro transversal;
- versiona documentos sustantivos;
- mantiene local-first como default;
- bloquea backend/APIs/autenticación/base de datos en v0.4;
- prepara compatibilidad futura con modo híbrido institucional opt-in;
- mantiene documentación activa y bitácora de transferencia simétrica.

---

## 21. Próxima acción

Crear el esqueleto operativo completo con `README.md` en cada cartapacio y documentos rectores iniciales, sin poblar plantillas operativas hasta que sean necesarias.

Documento preparado para revisión humana y aplicación controlada en rama `v0.4-n3-foundation`.

EOF
fi

mkdir -p "00_CONTROL_MAESTRO/Manifiestos"
if [[ ! -f "00_CONTROL_MAESTRO/Manifiestos/Manifest_Kit_N3_Foundation_Structure_v0_4_0.md" ]]; then
  cat > "00_CONTROL_MAESTRO/Manifiestos/Manifest_Kit_N3_Foundation_Structure_v0_4_0.md" <<'EOF'
# Manifest · Kit N3 Foundation Structure v0.4.0

```yaml
nombre_paquete: AI_StoryLab_1_N3_Foundation_Structure_v0_4_0
fecha_generacion: 2026-06-21
proyecto: AI StoryLab 1
repositorio: ricardojuanmorales/ai-storylab-1
rama_objetivo: v0.4-n3-foundation
framework_base: Framework Generico V4.1.0 Integral Autosostenido
kit: Completo N2-N3
nivel: N3
perfil_principal: Programador Humanista
modo_caleidoscopio: C4 Integral + C5 Pedagogico
id_maestro: ASTL-V040-STD-001
estado: listo_para_revision_humana_y_aplicacion_controlada
incluye:
  - documento_canonico_estandar
  - tree_ejecutable
  - lista_documentos_rectores
  - script_generador_seguro
excluye:
  - backend_operativo
  - APIs_externas
  - autenticacion
  - base_de_datos_remota
  - subida_automatica_archivos
  - analytics_externos
  - sincronizacion_cloud
principios:
  - Spec-Driven Development
  - Security by Design
  - Security by Default
  - local-first por defecto
```

EOF
fi

mkdir -p "00_CONTROL_MAESTRO/Mapas_Repositorio"
if [[ ! -f "00_CONTROL_MAESTRO/Mapas_Repositorio/Tree_Objetivo_N3_Foundation_v0_4_0.md" ]]; then
  cat > "00_CONTROL_MAESTRO/Mapas_Repositorio/Tree_Objetivo_N3_Foundation_v0_4_0.md" <<'EOF'
# Tree Ejecutable N3 Foundation Structure v0.4.0

**Uso:** este árbol alimenta el script generador seguro. Cada carpeta debe recibir `README.md`. No toca `src/`, `public/` ni lógica funcional del MVP.

```text
.specify/
  memory/
  specs/
    Platform_Foundation/
    Security_Privacy_Baseline/
    Profile_Progress_JSON/
    Mission_Engine/
    Facilitator_Dashboard/
    Portfolio_Export/
00_CONTROL_MAESTRO/
  Control_Versiones/
    Versiones_Activas/
    Versiones_Cerradas/
  Convenciones_Nombres/
  Indices_Maestros/
  Manifiestos/
  Mapas_Repositorio/
  Protocolos_Cierre_Sesion/
  Reglas_Colocacion_Documental/
  Tablas_Ubicacion_Documental/
01_FUNDAMENTO_FILOSOFICO/
  Principios/
  Etica_Creativa/
  Autonomia_Aprendizaje/
  Relacion_Humano_Maquina_IA/
02_ARQUITECTURA_CONCEPTUAL/
  Modelo_Sistemico/
  Modelo_Local_First/
  Modelo_Hibrido_Institucional/
  Modelo_Pedagogico/
  Modelo_Datos/
  Mapas_Relacionales/
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
  Spec_Driven_Development/
  Gates_Operacion/
  Flujo_Humano_Maquina_IA/
  Rituales_Revision/
  Transferencia_Simetrica/
04_GOBERNANZA_ETICA_Y_RIESGOS/
  Gobernanza_Proyecto/
  Registro_Decisiones/
  Riesgos/
  Excepciones/
  Derechos_Autoria_Licencias/
  Revision_Humana/
05_COMPETENCIAS_Y_PERFILES/
  Conocimiento_Comun/
    Bases_Conocimiento/
      Base_Comun/
      Paquetes_Semilla/
      Mapas_Modulares/
      Convenciones/
    Invocables/
      Plantillas/
      Formatos/
      Mapas_Familias/
      Maestros/
      Derivados/
      Rutas_Situadas/
    Caleidoscopio/
      Lentes/
      Patrones/
      Rutas_Recombinacion/
    Transferencia_Simetrica/
      Enlaces_Espejo/
      Criterios_Transferencia/
    Referencias_Logicas/
  Programador_Humanista/
    Perfil_Operativo/
      Alcance_Operativo/
      Aplicaciones_Educativas/
      Arquitectura_Humano_Maquina_IA/
      Artefactos/
      Bases_Conocimiento/
      Competencias/
      Gobernanza_Perfil/
      Invocables/
      Metricas/
      Transferencia_Simetrica/
  Investigador_Transdisciplinario/
    Perfil_Operativo/
      Alcance_Operativo/
      Bases_Conocimiento/
      Competencias/
      Evidencias/
      Gobernanza_Perfil/
      Invocables/
      Metodologias/
      Produccion_Academica/
      Transferencia_Simetrica/
  Artista_Transdisciplinario/
    Perfil_Operativo/
      Alcance_Operativo/
      Bases_Conocimiento/
      Competencias/
      Evidencias/
      Experiencias_Mediaciones/
      Gobernanza_Perfil/
      Invocables/
      Produccion_Creativa/
      Transferencia_Simetrica/
  Caleidoscopio/
    Marco_Operativo/
    Lentes_C4_C5/
    Tensiones_Recombinaciones/
  Matrices_Competencias/
  Taxonomias/
06_PASTILLAS_MODULARES/
  Microlecciones/
  Actividades_Cortas/
  Recursos_Reutilizables/
  Fragmentos_Formativos/
07_PLANTILLAS_Y_MODELOS/
  Plantillas_Documentales/
  Plantillas_Evaluacion/
  Modelos_Datos/
  Modelos_Prompts/
  Modelos_Gobernanza/
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/
  Taller_AI_StoryLab/
    Misiones/
    Rutas_Aprendizaje/
    Evidencias/
  Secuencias_Didacticas/
  Trayectorias_Nivel/
09_IA_AGENTES_Y_COPILOTOS/
  Politicas_Uso_IA/
  Prompts_Seguros/
  Agentes_Planificados/
  Copilotos_Local_First/
  Evaluacion_IA/
10_REPOSITORIOS_Y_FLUJO_TECNICO/
  Git_GitHub/
  Estructura_App/
  Dependencias/
  Build_Test/
  Convenciones_Commits/
11_MULTIMODALIDAD_Y_PUBLICACION/
  Imagenes/
  Audio/
  Video/
  Portafolios/
  Publicacion_Local/
12_DISENO_INSTRUCCIONAL_UNIVERSAL/
  Accesibilidad/
  DUA/
  Rubricas/
  Adaptaciones/
  Experiencia_Estudiante/
13_INVESTIGACION_Y_EVIDENCIA/
  Evidencia_Aprendizaje/
  Evidence_Ledger/
  Fuentes/
  Metodologias/
  Integracion_IT/
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/
  Comunidad_Practica/
  Transferencia_Facilitadores/
  Escalamiento_Institucional/
  Adopcion_Controlada/
  Comunicaciones/
15_EVALUACION_CALIDAD_Y_AUDITORIA/
  Evaluacion_Accesibilidad/
  Evaluacion_DevOps/
  Evaluacion_IA_Agentes/
  Evaluacion_Seguridad/
  Evaluacion_Sistemica/
  Evidencias_Validacion/
  Gates_Checks_Evaluacion/
  Metricas_Internas/
  Reportes_Auditoria/
  Rubricas_N3_N4/
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
  Privacidad/
  Politicas_Datos/
  Modelos_Amenazas/
  Requisitos_Seguridad/
  Checklists_Seguridad/
  Evaluacion_Riesgos_Tecnicos/
  Seguridad_IA_Agentes/
  Cumplimiento_Normativo/
17_INTERNACIONALIZACION_LOCALIZACION/
  Glosarios/
  Traducciones/
  Localizacion_Cultural/
  Variantes_Linguisticas/
18_DOCUMENTACION_ACTIVA/
  Bitacoras/
  Changelog/
  Cierres_Sesion/
  Compendios/
  Informes_Validacion/
  Manifiestos_Sesion/
  Primers_Continuidad/
  Prompts_Activacion/
  Prompts_de_Sesion/
  Registro_Decisiones/
  Reportes_Evaluacion/
  Segundo_Cerebro/
  WIKI_SYNC/
19_IMPLEMENTACION_Y_DESPLIEGUE/
  GitHub_Pages/
  Entornos_Locales/
  Configuracion_Vite/
  Release_Checklists/
  Despliegue_Local_First/
  Perfiles_Operacion/
    Local_First_Default/
    Institutional_Hybrid_Opt_In/
20_MANTENIMIENTO_Y_EVOLUCION/
  Actualizaciones/
  Backlog_Evolutivo/
  Deuda_Tecnica/
  Deuda_Estructural/
  Deuda_WIKI_SYNC/
  Incidentes_Postmortems/
  Mantenimiento_Aplicacion/
  Planes_Evolucion/
  Sostenibilidad/
  Versionado_Releases/
21_WIKI_DOCUMENTACION_HUMANA/
  Guia_Estudiante/
  Guia_Facilitador/
  Guia_Desarrollador/
  Guia_Seguridad/
  Guia_Conocimiento_Comun/
  Guia_Perfiles/
  Guia_Institucional/
99_ARCHIVO_HISTORICO/
  Versiones_Reemplazadas/
  Versiones_Cerradas/
  Ciclos_Completados/
  Sesiones_Cerradas/
  Exportaciones_Finales/
    MD/
    JSON/
    ZIP/
  Paquetes_Intermedios/
  Releases/
  Planes_Archivo/
  Wiki_Archivada/
```

EOF
fi

create_doc_if_missing() {
  local file="$1"
  local title="$2"
  mkdir -p "$(dirname "$file")"
  if [[ ! -f "$file" ]]; then
    cat > "$file" <<EOF
# $title

**Proyecto:** AI StoryLab 1  
**Versión:** v0.4.0  
**Estado:** Inicial  
**ID maestro relacionado:** ASTL-V040-STD-001

## Propósito

Documento rector inicial. Debe completarse mediante decisión, spec o revisión humana.

## Trazabilidad

- Origen: Kit N3 Foundation Structure v0.4.0
- Rama objetivo: v0.4-n3-foundation
- Relación con WIKI_SYNC: pendiente de evaluación
- Relación con deuda: pendiente de evaluación

## Contenido inicial

Pendiente de desarrollo controlado.
EOF
  fi
}

create_doc_if_missing "18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_v0_4_0.md" "Bitacora de Transferencia Simetrica v0.4.0"
create_doc_if_missing "18_DOCUMENTACION_ACTIVA/Changelog/Changelog_Completo_v0_4_0.md" "Changelog Completo v0.4.0"
create_doc_if_missing "18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Registro_Decisiones_Completo_v0_4_0.md" "Registro de Decisiones Completo v0.4.0"
create_doc_if_missing "18_DOCUMENTACION_ACTIVA/WIKI_SYNC/WIKI_SYNC_Completo_v0_4_0.md" "WIKI_SYNC Completo v0.4.0"
create_doc_if_missing "20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Tecnica/Registro_Deuda_Tecnica_v0_4_0.md" "Registro de Deuda Tecnica v0.4.0"
create_doc_if_missing "20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Estructural/Registro_Deuda_Estructural_v0_4_0.md" "Registro de Deuda Estructural v0.4.0"
create_doc_if_missing "20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC/Registro_Deuda_WIKI_SYNC_v0_4_0.md" "Registro de Deuda WIKI_SYNC v0.4.0"
create_doc_if_missing "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/Politica_Privacidad_Local_First_v0_4_0.md" "Politica de Privacidad Local First v0.4.0"
create_doc_if_missing "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Modelos_Amenazas/Threat_Model_v0_4_0.md" "Threat Model v0.4.0"
create_doc_if_missing "16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Requisitos_Seguridad/Security_Requirements_v0_4_0.md" "Security Requirements v0.4.0"
create_doc_if_missing ".specify/memory/constitution_v0_4_0.md" "Constitucion SDD v0.4.0"
create_doc_if_missing ".specify/specs/Platform_Foundation/trace_v0_4_0.md" "Trace Platform Foundation v0.4.0"

echo
echo "Estructura creada sin sobrescribir archivos existentes."
echo "Siguiente verificacion recomendada:"
echo "  git status --short"
echo "  find . -name README.md | wc -l"
echo "  git add ."
echo "  git commit -m 'docs: activar estructura N3 foundation v0.4.0'"
