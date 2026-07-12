# Matriz de Aptitud y Dependencias Post-PR36 · C3

**Identificador:** `DOC-DOC-023`
**Fecha:** 2026-07-12
**Base:** `8252165d8b91c4194256cafeb60e8ab8a9a099e1`
**Gate:** `GATE-CORR-G2 · pending`
**Movimiento autorizado:** No

---

## 1. Resultado por fuente

| ID | Lote operativo | Estado | Dependencias internas detectadas | Referencias entrantes |
|---|---|---|---|---:|
| `DOC-ARQ-001` | `C3-A0` | `apto_preparar_migracion_raiz` | `DOC-UX-002` | 23 |
| `DOC-GOB-007` | `C3-C` | `apto_preparar_migracion_atomica` | ninguna | 22 |
| `DOC-UX-003` | `C3-C` | `apto_preparar_migracion_atomica` | `DOC-ARQ-001`, `DOC-GOB-007`, `DOC-UX-002`, `DOC-UX-004` | 23 |
| `DOC-UX-002` | `C3-B` | `apto_preparar_migracion_ux` | `DOC-ARQ-001`, `DOC-UX-003` | 23 |
| `DOC-UX-004` | `C3-B` | `apto_preparar_migracion_ux` | `DOC-ARQ-001`, `DOC-GOB-007`, `DOC-UX-002`, `DOC-UX-003` | 21 |
| `DOC-UX-006` | `C3-B` | `apto_preparar_migracion_ux` | `DOC-ARQ-001`, `DOC-GOB-007`, `DOC-UX-002`, `DOC-UX-003`, `DOC-UX-004` | 20 |
| `DOC-UX-005` | `C3-B` | `apto_preparar_migracion_ux` | `DOC-ARQ-001`, `DOC-GOB-007`, `DOC-UX-002`, `DOC-UX-003`, `DOC-UX-004`, `DOC-UX-006` | 16 |
| `DOC-ARQ-002` | `C3-A2` | `apto_preparar_migracion_cierre` | `DOC-ARQ-001`, `DOC-GOB-007`, `DOC-UX-002`, `DOC-UX-003`, `DOC-UX-004`, `DOC-UX-005`, `DOC-UX-006` | 16 |

## 2. Integridad y destinos

### DOC-ARQ-001

- Fuente: `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md`
- Destino: `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md`
- SHA-256: `794441eb4dde056d1b54352fe00590c30ff5e4223c06801d14b5a811620b4fcc`
- Fundamento: Fuente raíz del modelo funcional; debe abrir la secuencia.
- Categorías de referencias:
  - `continuidad_historica`: 14
  - `control_vivo`: 6
  - `evidencia_auditoria`: 2
  - `otra`: 1

### DOC-GOB-007

- Fuente: `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md`
- Destino: `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md`
- SHA-256: `08535ee04aee2886b1dea4d6a29badf95614a627c686ce0fecf4deadb65aaabb`
- Fundamento: Clasificación y destino resueltos; debe moverse junto con DOC-UX-003.
- Categorías de referencias:
  - `continuidad_historica`: 11
  - `control_vivo`: 7
  - `documentacion_activa`: 1
  - `evidencia_auditoria`: 2
  - `otra`: 1

### DOC-UX-003

- Fuente: `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md`
- Destino: `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md`
- SHA-256: `d2d2df6ae189eaf39f268625194a1b934f4dc1d1ab374601d5129fb254271a2a`
- Fundamento: Pareja documental aprobada conjuntamente con DOC-GOB-007.
- Categorías de referencias:
  - `continuidad_historica`: 12
  - `control_vivo`: 7
  - `evidencia_auditoria`: 3
  - `otra`: 1

### DOC-UX-002

- Fuente: `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md`
- Destino: `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md`
- SHA-256: `0e9ef0f5827d191cc0a352e6689b3d4d8a73382dba1a906ef5a3b30c61e9de2d`
- Fundamento: Modelo UX derivado del mapa funcional; mantiene límites frente a C4.
- Categorías de referencias:
  - `continuidad_historica`: 13
  - `control_vivo`: 6
  - `evidencia_auditoria`: 3
  - `otra`: 1

### DOC-UX-004

- Fuente: `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Recorridos_Usuario_Sinteticos_AI_StoryLab_v0_6.md`
- Destino: `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Recorridos_Usuario_Sinteticos_AI_StoryLab_v0_6.md`
- SHA-256: `63b27477ae588ba2e21a282b2875e99df33e7ae9b5beaf827b925d50e620b4ae`
- Fundamento: Sus dependencias funcionales ya tienen destino y secuencia.
- Categorías de referencias:
  - `continuidad_historica`: 11
  - `control_vivo`: 6
  - `evidencia_auditoria`: 3
  - `otra`: 1

### DOC-UX-006

- Fuente: `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Criterios_Interaccion_Humano_IA_AI_StoryLab_v0_6.md`
- Destino: `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Criterios_Interaccion_Humano_IA_AI_StoryLab_v0_6.md`
- SHA-256: `d445be458898c313156e63001a23ea9506f3ab98c785e6f8ed8d6d6793f6f989`
- Fundamento: Criterios UX funcionales; no trasladan arquitectura técnica ni seguridad.
- Categorías de referencias:
  - `continuidad_historica`: 10
  - `control_vivo`: 6
  - `evidencia_auditoria`: 3
  - `otra`: 1

### DOC-UX-005

- Fuente: `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Criterios_Accesibilidad_Claridad_AI_StoryLab_v0_6.md`
- Destino: `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Criterios_Accesibilidad_Claridad_AI_StoryLab_v0_6.md`
- SHA-256: `cab34953f5a842a6c4fc810ef0926fc8d6323494c75d622c2dc3864b80e58a75`
- Fundamento: Debe seguir a recorridos e interacción para preservar precedencia.
- Categorías de referencias:
  - `continuidad_historica`: 7
  - `control_vivo`: 6
  - `evidencia_auditoria`: 2
  - `otra`: 1

### DOC-ARQ-002

- Fuente: `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Requisitos_Funcionales_Preliminares_AI_StoryLab_v0_6.md`
- Destino: `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Requisitos_Funcionales_Preliminares_AI_StoryLab_v0_6.md`
- SHA-256: `c68373581a2669b97ac152568440c80ce89b6ac77f4c5cb2055203cfc74ac2a6`
- Fundamento: Sintetiza toda la familia v0.6 y debe cerrar la secuencia.
- Categorías de referencias:
  - `continuidad_historica`: 7
  - `control_vivo`: 6
  - `evidencia_auditoria`: 2
  - `otra`: 1

## 3. HOLD preservado

`DOC-UX-007` permanece fuera de esta migración en `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Vista_Facilitador/Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md`.

Su separación UX, roles y seguridad corresponde a una decisión coordinada C3-C4.

## 4. Dictamen

```text
ocho_fuentes_v0_6: aptas_para_preparar_migracion
C3-A0: abrir_secuencia
C3-C: movimiento_atomico
C3-B: despues_de_C3-C
C3-A2: cerrar_secuencia
GATE-CORR-G2: pending
aptitud_aprobacion_G2: no_todavia
```
