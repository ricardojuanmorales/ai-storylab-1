# Guía de Consentimiento Informado y Situado para el Programador Humanista AI StoryLab 1 v0.4.4

**Estado:** Borrador consolidado para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Consentimiento_Informado_y_Situado_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental y formativo. No autoriza implementación funcional.

---

## 1. Propósito

Esta guía traduce la Matriz de Consentimiento Informado y Situado al trabajo del Programador Humanista.

Consentimiento no es una casilla universal. Es una conversación concreta sobre acción, datos, propósito, riesgo, alternativa y agencia humana.

---

## 2. Preguntas obligatorias

Antes de aceptar una spec, preguntar:

```text
¿Qué acción requiere autorización?
¿Qué datos, evidencias o reflexiones toca?
¿La persona puede entenderlo?
¿La persona puede decir que no?
¿Qué alternativa existe?
¿Puede retirar o revisar autorización?
¿Hay menores, datos reales, publicación, IA externa o evaluación?
¿Hace falta revisión humana?
```

---

## 3. Tipos de consentimiento

```text
No requerido:
  material conceptual o ficticio sin datos personales.

Simple:
  acción local, clara, reversible y de bajo riesgo.

Informado:
  involucra datos, evidencias, exportación o uso secundario.

Situado:
  depende de contexto, perfil, propósito y riesgo.

Reforzado:
  menores, datos reales, publicación, investigación, IA externa o sensibilidad.

No suficiente:
  evaluación automática final, subida automática, IA externa por defecto o datos reales sin política.
```

---

## 4. Permisos no transferibles

```text
guardar localmente no autoriza exportar;
exportar no autoriza publicar;
compartir con docente no autoriza compartir con investigador;
usar en clase no autoriza usar en investigación;
crear portafolio no autoriza publicarlo;
usar IA local conceptual no autoriza IA externa;
dar retroalimentación no autoriza crear analíticas.
```

---

## 5. Lenguaje humano mínimo

Toda solicitud debe poder decir:

```text
Queremos [acción] con [dato/evidencia/reflexión] para [propósito].
Esto [permanecerá local / será exportado / será compartido / será publicado].
Podrán verlo [personas o roles].
Los riesgos principales son [riesgos].
Puedes [aceptar / decir que no / revisar / retirar cuando aplique].
Si dices que no, [alternativa o consecuencia no punitiva cuando aplique].
No usaremos esto para [acciones prohibidas o no autorizadas].
```

---

## 6. Cuándo bloquear

Bloquear si se usa consentimiento para justificar:

```text
subida automática;
publicación automática;
IA externa por defecto;
evaluación automática como juez final;
datos reales sin política formal;
datos de menores sin política reforzada;
analíticas;
backend, cloud, APIs externas o base remota;
lenguaje incomprensible;
ausencia de alternativa razonable;
implementación funcional.
```

---

## 7. Dictamen

El consentimiento situado no abre todas las puertas. Ilumina una puerta específica, pregunta si la persona quiere cruzarla y conserva su derecho a no hacerlo.
