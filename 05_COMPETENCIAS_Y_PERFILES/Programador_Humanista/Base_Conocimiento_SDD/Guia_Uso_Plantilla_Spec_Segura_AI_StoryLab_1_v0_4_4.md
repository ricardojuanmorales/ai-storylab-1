# Guía de Uso de la Plantilla de Spec Segura AI StoryLab 1 v0.4.4

**Estado:** Borrador consolidado para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Uso_Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental y formativo. No autoriza implementación funcional.

---

## 1. Propósito

Esta guía explica cómo usar la Plantilla de Spec Segura sin convertirla en formulario administrativo.

La plantilla debe funcionar como conversación estructurada entre propósito humano, creatividad, datos, riesgos, threat model, consentimiento, local-first, revisión humana y deuda.

---

## 2. Antes de llenar la plantilla

Toda idea debe reformularse en lenguaje humano.

Ejemplo técnico incompleto:

```text
Crear módulo de carga de archivos.
```

Reformulación SDD:

```text
Explorar una forma local-first para seleccionar, organizar y describir evidencias creativas sin subida automática, sin almacenamiento remoto y con control explícito sobre compartir o no compartir.
```

---

## 3. Uso por secciones

```text
Identificación:
  asignar ID, título, versión, estado, responsable y ruta.

Tipo de spec:
  marcar complejidad real, no simplificar artificialmente.

Propósito:
  declarar qué propone, a quién sirve y qué no autoriza.

Alcance:
  delimitar qué entra y qué queda fuera.

Subjetividades:
  identificar perfiles afectados y elevar cuidado si hay menores.

Experiencia creativa:
  proteger exploración, pausa, revisión, error y recombinación.

Datos:
  justificar cada dato o eliminarlo.

Evidencias:
  tratarlas como objetos de cuidado, no archivos neutros.

IA:
  marcar si no aplica; si es externa, condicionar por consentimiento, datos ficticios/sintéticos/anonimizados, threat model y revisión humana.

Local-first:
  responder qué permanece local, qué no se guarda, qué se exporta y qué nunca se sube automáticamente.

Threat model:
  activar si hay exportación, publicación, datos reales, menores, IA externa, metadatos, portafolios, evaluación o automatización.

Consentimiento:
  explicar acción, datos, propósito, acceso, riesgos y alternativas.

Decisión:
  aprobar, condicionar, diferir o bloquear.
```

---

## 4. Criterios de decisión

```text
Aprobar:
  cumple propósito, minimiza datos, preserva local-first y mitiga amenazas.

Condicionar:
  requiere matriz, política, consentimiento, threat model o revisión adicional.

Diferir:
  depende de documentos o fase futura.

Bloquear:
  propone subida automática, IA externa por defecto, datos reales sin política, evaluación automática final o implementación funcional.
```

---

## 5. Producto esperado

Una spec candidata completa debe producir:

```text
dictamen;
threat model preliminar o específico cuando aplique;
deuda creada o pagada;
decisión clara;
registro en bitácora;
transferencia simétrica;
actualización de deuda.
```
