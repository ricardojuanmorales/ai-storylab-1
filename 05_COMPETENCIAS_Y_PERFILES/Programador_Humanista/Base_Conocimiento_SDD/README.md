# README - Base de Conocimiento SDD del Programador Humanista AI StoryLab 1 v0.4.4

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.4 - Spec-Driven Development, seguridad, privacidad y preparación responsable  
**Tipo de documento:** README de base de conocimiento  
**Estado:** Borrador para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/README.md`  
**PR de trabajo:** #8  
**Rama:** `v0.4.4-sdd-foundation`  
**Alcance:** Documental, metodológico y formativo. No autoriza implementación funcional.

---

## 1. Propósito de esta base de conocimiento

Esta base de conocimiento traduce la Constitución SDD AI StoryLab 1 v0.4.4 y la Plantilla de Spec Segura al lenguaje de trabajo del Programador Humanista.

Su propósito es permitir que el perfil técnico-humanista pueda:

```text
comprender SDD como metodología;
redactar specs seguras antes de implementar;
revisar propuestas técnicas sin saltar prematuramente a código;
identificar riesgos de privacidad, seguridad, datos, consentimiento e IA;
sostener local-first como principio de diseño;
proteger agencia humana y experiencia creativa;
usar la Plantilla de Spec Segura de forma reproducible;
documentar decisiones, deuda y transferencia.
```

Esta base de conocimiento no es una guía de programación funcional. Es una guía para pensar, especificar, revisar y bloquear responsablemente antes de construir.

---

## 2. Relación con la Constitución SDD

La Constitución SDD establece autoridad, límites y criterios de bloqueo.

Esta base de conocimiento ayuda al Programador Humanista a aplicar esos criterios en situaciones concretas.

Relación documental:

```text
00_CONTROL_MAESTRO/Spec_Driven_Development/
  Constitución, políticas, matrices rectoras y criterios de bloqueo.

07_PLANTILLAS_Y_MODELOS/Spec_Driven_Development/
  Plantillas y modelos reutilizables para crear specs seguras.

05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/
  Guías, checklist y glosario para aplicar SDD desde el perfil técnico-humanista.

18_DOCUMENTACION_ACTIVA/Bitacoras/
  Registro vivo de decisiones y continuidad.

20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/
  Registro de deuda documental, técnica, ética y metodológica.
```

---

## 3. Documentos incluidos

| Archivo | Función |
|---|---|
| `README.md` | Presenta la base de conocimiento, su alcance y reglas de uso. |
| `Guia_SDD_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md` | Explica cómo debe pensar y actuar el Programador Humanista dentro del marco SDD. |
| `Guia_Uso_Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md` | Explica cómo usar la Plantilla de Spec Segura paso a paso. |
| `Checklist_Preimplementacion_SDD_AI_StoryLab_1_v0_4_4.md` | Lista de verificación antes de cualquier implementación futura. |
| `Glosario_Minimo_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md` | Define términos mínimos para reproducir la metodología SDD. |
| `Manifest_Base_Conocimiento_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md` | Inventario del paquete y criterios de incorporación al repositorio. |

---

## 4. Reglas de uso

```text
1. Esta base de conocimiento no autoriza implementación funcional.
2. Toda propuesta técnica debe pasar por spec antes de pasar a código.
3. Toda spec debe identificar propósito humano, datos, riesgos, consentimiento y revisión humana.
4. Toda spec debe preservar agencia humana, local-first y experiencia creativa no rígida.
5. Si hay datos reales, menores, evidencia sensible, IA externa, publicación, exportación o evaluación, se requiere revisión humana.
6. Si una propuesta implica backend, cloud, APIs externas, autenticación, analíticas, base de datos remota, subida automática de archivos, IA externa por defecto, manejo de datos reales o evaluación automática como juez final, debe bloquearse, diferirse o escalarse.
```

---

## 5. Límite vigente

Esta base de conocimiento no autoriza:

```text
backend
cloud
APIs externas
autenticación
analíticas
base de datos remota
subida automática de archivos
uso de IA externa por defecto
manejo de datos reales
evaluación automática como juez final
implementación funcional
```

---

## 6. Dictamen

La Base de Conocimiento SDD del Programador Humanista permite reproducir la metodología SDD más allá de una sola sesión.

Su valor principal es evitar que SDD dependa de memoria conversacional. Convierte el método en un conjunto trazable de guías, criterios, preguntas y bloqueos reutilizables.
