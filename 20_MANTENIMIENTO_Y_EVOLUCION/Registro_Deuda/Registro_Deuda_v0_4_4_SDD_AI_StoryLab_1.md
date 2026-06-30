# Registro de Deuda v0.4.4 SDD AI StoryLab 1

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.4 - Spec-Driven Development, seguridad, privacidad y preparación responsable  
**Tipo de documento:** Registro de deuda  
**Estado:** Activo, actualizado con aprobación de Constitución SDD inicial  
**Ruta canónica:** `20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Deuda_v0_4_4_SDD_AI_StoryLab_1.md`  
**PR de trabajo:** #8, `docs: incorporar cierre v0.4.3 e inicio continuidad v0.4.4`  

---

## 1. Propósito

Registrar la deuda activa al abrir v0.4.4.

La deuda aquí no es solo técnica. Incluye deuda filosófica, pedagógica, documental, ética, de seguridad, privacidad, IA, datos, especificación y transferencia.

---

## 2. Escala

```text
0 = sin deuda relevante
1 = deuda menor
2 = deuda moderada controlada
3 = deuda alta que condiciona la fase
4 = deuda crítica bloqueante
```

---

## 3. Deuda activa inicial actualizada

| ID | Área | Nivel | Estado | Descripción | Acción requerida |
|---|---:|---:|---|---|---|
| ASTL-V044-DEBT-SDD-001 | SDD | 2 | Parcialmente pagada | La Constitución SDD ya cuenta con primer borrador sustantivo aprobado, pero faltan matrices y plantillas asociadas. | Desarrollar matrices constitucionales y plantillas. |
| ASTL-V044-DEBT-SPEC-001 | Specs | 3 | Alta | No existe aún plantilla de spec funcional segura. | Crear plantilla mínima de spec segura. |
| ASTL-V044-DEBT-DATA-001 | Datos | 3 | Alta | Falta política local-first inicial detallada. | Crear política local-first de datos. |
| ASTL-V044-DEBT-THREAT-001 | Seguridad | 3 | Alta | Falta registro de threat models requeridos. | Crear registro y plantilla mínima de threat model. |
| ASTL-V044-DEBT-AI-001 | IA externa | 3 | Alta | Falta política formal de IA externa limitada. | Definir condiciones de uso, consentimiento y bloqueo. |
| ASTL-V044-DEBT-POO-001 | Modelo de dominio | 2 | Moderada controlada | POO está aceptada como enfoque conceptual, pero no modelada aún en matriz. | Crear matriz POO conceptual y plantilla de objeto de dominio. |
| ASTL-V044-DEBT-WIKI-001 | WIKI_SYNC | 3 | Alta | Faltan guías humanas de privacidad, consentimiento y uso crítico de IA. | Expandir Wiki oficial humana. |
| ASTL-V044-DEBT-UX-001 | Experiencia creativa | 2 | Moderada controlada | Falta especificar cómo evitar rigidez antijuego creativo. | Crear criterios de diseño para experiencia creativa. |
| ASTL-V044-DEBT-CONSENT-001 | Consentimiento | 3 | Alta | Falta matriz de consentimiento informado y situado. | Crear matriz de consentimiento. |
| ASTL-V044-DEBT-TRACE-001 | Trazabilidad | 2 | Moderada controlada | Falta matriz de trazabilidad entre specs, bitácoras, deuda y transferencia. | Crear matriz de trazabilidad documental. |

---

## 4. Deuda bloqueante para implementación funcional

La implementación funcional queda bloqueada por las siguientes deudas:

```text
ASTL-V044-DEBT-SPEC-001
ASTL-V044-DEBT-DATA-001
ASTL-V044-DEBT-THREAT-001
ASTL-V044-DEBT-AI-001
ASTL-V044-DEBT-CONSENT-001
```

La deuda `ASTL-V044-DEBT-SDD-001` se reduce de nivel 3 a nivel 2 por aprobación del primer borrador sustantivo de la Constitución SDD, pero no queda cerrada hasta completar matrices y plantillas.

Mientras estas deudas estén abiertas, no se autoriza backend, cloud, APIs externas, autenticación, analíticas, base de datos remota, subida automática de archivos, uso de IA externa por defecto, evaluación automática como juez final ni manejo de datos reales.

---

## 5. Deuda POO

La incorporación de POO crea una deuda deliberada de modelado:

```text
definir objetos de dominio
definir responsabilidades
definir atributos permitidos
definir atributos sensibles
definir relaciones
definir reglas éticas
definir amenazas por objeto
definir pruebas por objeto
```

Esta deuda es positiva si se mantiene documental y previa a código.

---

## 6. Deuda de experiencia creativa

Debe evitarse que la estructura SDD vuelva la aplicación excesivamente rígida.

Riesgos:

```text
formularios cerrados
rutas únicas
portafolios como archivos muertos
IA como autoridad final
exceso de checklist sin juego creativo
```

Acción requerida:

```text
crear criterios de diseño para proteger exploración, juego, reflexión y agencia
```

---

## 7. Próxima prioridad de pago de deuda

```text
1. Crear plantilla mínima de spec segura.
2. Crear política local-first.
3. Crear registro de threat models requeridos.
4. Crear matriz POO conceptual.
5. Crear guía de experiencia creativa no rígida.
6. Expandir WIKI_SYNC de privacidad, consentimiento y uso crítico de IA.
7. Completar matrices constitucionales.
```

---

## 8. Dictamen inicial

La deuda no impide continuar documentación en PR #8.

Sí impide cualquier implementación funcional hasta que specs, privacidad, seguridad, consentimiento, IA externa y threat models queden formalizados.
