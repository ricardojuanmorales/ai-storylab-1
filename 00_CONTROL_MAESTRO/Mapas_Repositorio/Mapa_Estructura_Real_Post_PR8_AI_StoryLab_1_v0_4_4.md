# Mapa de Estructura Real Post-PR8 — AI StoryLab 1 v0.4.4

**Código documental:** Mapa_Estructura_Real_Post_PR8_AI_StoryLab_1_v0_4_4  
**Proyecto:** AI StoryLab 1  
**Versión:** v0.4.4  
**Fecha:** 2026-07-03  
**Estado:** Borrador operativo para PR #9  
**Tipo de documento:** Mapa estructural real post-PR8  
**Ruta canónica:** `00_CONTROL_MAESTRO/Mapas_Repositorio/Mapa_Estructura_Real_Post_PR8_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental y estructural. No autoriza implementación funcional.

---

## 0. Propósito

Este mapa registra la estructura real observada después de la incorporación del paquete SDD v0.4.4 en PR #8 y antes de continuar el PR #9 de auditoría estructural. Su función es diferenciar la estructura objetivo N3 v0.4.0 de la estructura viva post-PR8, detectar zonas críticas y orientar la colocación documental rumbo a v1.0.0.

---

## 1. Regla de lectura

```text
Este mapa no reemplaza el Tree Objetivo N3 Foundation v0.4.0.
Este mapa describe el estado real post-PR8.
Este mapa debe actualizarse cuando PR #9 incorpore nuevos documentos estructurales.
```

---

## 2. Nivel raíz observado

```text
ai-storylab-1/
├── .specify/
├── 00_CONTROL_MAESTRO/
├── 01_FUNDAMENTO_FILOSOFICO/
├── 02_ARQUITECTURA_CONCEPTUAL/
├── 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
├── 04_GOBERNANZA_ETICA_Y_RIESGOS/
├── 05_COMPETENCIAS_Y_PERFILES/
├── 06_PASTILLAS_MODULARES/
├── 07_PLANTILLAS_Y_MODELOS/
├── 08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/
├── 09_IA_AGENTES_Y_COPILOTOS/
├── 10_REPOSITORIOS_Y_FLUJO_TECNICO/
├── 11_MULTIMODALIDAD_Y_PUBLICACION/
├── 12_DISENO_INSTRUCCIONAL_UNIVERSAL/
├── 13_INVESTIGACION_Y_EVIDENCIA/
├── 14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/
├── 15_EVALUACION_CALIDAD_Y_AUDITORIA/
├── 16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
├── 17_INTERNACIONALIZACION_LOCALIZACION/
├── 18_DOCUMENTACION_ACTIVA/
├── 19_IMPLEMENTACION_Y_DESPLIEGUE/
├── 20_MANTENIMIENTO_Y_EVOLUCION/
├── 21_WIKI_DOCUMENTACION_HUMANA/
├── 99_ARCHIVO_HISTORICO/
├── public/
├── scripts/
├── src/
├── README.md
├── README_Original.md
├── CHANGELOG.md
├── package.json
├── package-lock.json
├── vite.config.js
└── MANIFEST_Cierre_Documental_SDD_v0_4_4_AI_StoryLab_1.md
```

---

## 3. Zonas críticas post-PR8

```text
00_CONTROL_MAESTRO/
05_COMPETENCIAS_Y_PERFILES/
07_PLANTILLAS_Y_MODELOS/
15_EVALUACION_CALIDAD_Y_AUDITORIA/
18_DOCUMENTACION_ACTIVA/
20_MANTENIMIENTO_Y_EVOLUCION/
21_WIKI_DOCUMENTACION_HUMANA/
99_ARCHIVO_HISTORICO/
```

---

## 4. Control maestro post-PR8

```text
00_CONTROL_MAESTRO/
├── Control_Versiones/
├── Convenciones_Nombres/
├── Indices_Maestros/
├── Manifiestos/
├── Mapas_Repositorio/
├── Protocolos_Cierre_Sesion/
├── Reglas_Colocacion_Documental/
├── Spec_Driven_Development/
│   ├── Constitucion_SDD_AI_StoryLab_1_v0_4_4.md
│   ├── Gobernanza/
│   │   ├── Estado_Gobernanza_SDD_v0_4_4_Cierre_Fundacional.md
│   │   └── Indice_Documentos_Rectores_SDD_v0_4_4.md
│   ├── Guias/
│   │   └── Guia_Experiencia_Creativa_No_Rigida_SDD_AI_StoryLab_1_v0_4_4.md
│   ├── Matrices/
│   │   ├── Matriz_Consentimiento_Informado_y_Situado_SDD_AI_StoryLab_1_v0_4_4.md
│   │   └── Matriz_POO_Conceptual_SDD_AI_StoryLab_1_v0_4_4.md
│   ├── Politicas/
│   │   └── Politica_Local_First_Inicial_AI_StoryLab_1_v0_4_4.md
│   └── Threat_Models/
│       └── Registro_Inicial_Threat_Models_SDD_AI_StoryLab_1_v0_4_4.md
└── Tablas_Ubicacion_Documental/
```

**Observación:** `Spec_Driven_Development/` ya opera como subestructura rectora dentro de control maestro. Debe mantenerse como zona crítica de gobernanza, no como depósito general de todos los derivados SDD.

---

## 5. Competencias y perfiles post-PR8

```text
05_COMPETENCIAS_Y_PERFILES/
├── Conocimiento_Comun/
├── Programador_Humanista/
│   └── Base_Conocimiento_SDD/
│       ├── Checklist_Preimplementacion_SDD_AI_StoryLab_1_v0_4_4.md
│       ├── Glosario_Minimo_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│       ├── Guia_Consentimiento_Informado_y_Situado_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│       ├── Guia_Experiencia_Creativa_No_Rigida_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│       ├── Guia_Local_First_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│       ├── Guia_POO_Conceptual_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│       ├── Guia_SDD_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│       ├── Guia_Threat_Model_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│       ├── Guia_Uso_Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md
│       ├── Manifest_Base_Conocimiento_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│       ├── Mapa_Relaciones_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│       └── README.md
├── Investigador_Transdisciplinario/
├── Artista_Transdisciplinario/
├── Caleidoscopio/
├── Matrices_Competencias/
└── Taxonomias/
```

**Observación:** `Base_Conocimiento_SDD/` funciona como paquete formativo del PH, pero debe evaluarse como excepción o ruta transitoria porque tensiona la convención de `Bases_Conocimiento/` y la transferibilidad PH-IT-AT.

---

## 6. Plantillas y modelos post-PR8

```text
07_PLANTILLAS_Y_MODELOS/
└── Spec_Driven_Development/
    └── Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md
```

---

## 7. Documentación activa post-PR8

```text
18_DOCUMENTACION_ACTIVA/
├── Bitacoras/
│   ├── Actualizacion_Bitacora_Transferencia_Simetrica_Apertura_v0_4_4.md
│   ├── Bitacora_Sesion_Apertura_v0_4_4_SDD_AI_StoryLab_1.md
│   ├── Bitacora_Sesion_SDD_v0_4_4_Cierre_Fundacional.md
│   └── Bitacora_Transferencia_Simetrica_SDD_v0_4_4_Cierre_Fundacional.md
├── Cierres_Sesion/
│   ├── Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/
│   └── Cierre_Sesion_v0_4_4_SDD_PR8/
├── Historico_Proceso/
│   └── Historico_Ronda_SDD_Fundacional_v0_4_4.md
├── Changelog/
├── Compendios/
├── Primers_Continuidad/
├── Prompts_Activacion/
├── Prompts_de_Sesion/
├── Registro_Decisiones/
├── Segundo_Cerebro/
└── WIKI_SYNC/
```

**Observación:** La documentación activa preserva continuidad, pero necesita fronteras funcionales entre bitácora, cierre, compendio, manifest, deuda, decisión y WIKI_SYNC.

---

## 8. Mantenimiento y deuda post-PR8

```text
20_MANTENIMIENTO_Y_EVOLUCION/
├── Registro_Deuda/
│   ├── Analisis_Deuda_SDD_v0_4_4_Cierre_Fundacional.md
│   └── Registro_Deuda_v0_4_4_SDD_AI_StoryLab_1.md
├── Actualizaciones/
├── Backlog_Evolutivo/
├── Deuda_Tecnica/
├── Deuda_Estructural/
└── Deuda_WIKI_SYNC/
```

**Observación:** Debe crearse un registro específico de deuda estructural para PR #9, separado del registro general SDD v0.4.4.

---

## 9. Wiki humana post-PR8

```text
21_WIKI_DOCUMENTACION_HUMANA/
└── SDD_v0_4_4/
    ├── Consentimiento_Informado_y_Situado.md
    ├── Experiencia_Creativa_No_Rigida.md
    ├── Local_First.md
    ├── POO_Conceptual.md
    ├── Que_No_Hace_v0_4_4.md
    ├── README.md
    └── Threat_Models.md
```

---

## 10. Archivo histórico

```text
99_ARCHIVO_HISTORICO/
```

Ningún documento debe moverse a archivo histórico sin doble condición:

```text
1. existe reemplazo canónico;
2. existe decisión registrada.
```

---

## 11. Diferencias principales entre estructura objetivo y estructura real

| Zona | Estructura objetivo v0.4.0 | Estructura real post-PR8 | Acción |
|---|---|---|---|
| SDD | Prevista en metodología y specs | Subestructura rectora en `00_CONTROL_MAESTRO/Spec_Driven_Development/` | Formalizar en protocolo. |
| PH | Perfil operativo con bases de conocimiento | Paquete `Base_Conocimiento_SDD/` directo bajo PH | Evaluar excepción. |
| Documentación activa | Bitácoras, cierres, compendios | Paquetes complejos de continuidad PR8 | Definir fronteras. |
| Deuda | Módulos de deuda técnica/estructural | Registro SDD general y análisis de deuda | Crear deuda estructural PR9. |
| Wiki humana | Guías humanas generales | Wiki SDD v0.4.4 activa | Sincronizar con protocolo. |

---

## 12. Dictamen

La estructura real post-PR8 es funcional, pero necesita estabilización antes de escalar hacia implementación. PR #9 debe actuar como intervención de gobernanza estructural: auditoría, protocolo, mapa real, tabla de ubicación, deuda estructural y README críticos progresivos.

**Dictamen:** Mapa real post-PR8 registrado como base de navegación para PR #9.
