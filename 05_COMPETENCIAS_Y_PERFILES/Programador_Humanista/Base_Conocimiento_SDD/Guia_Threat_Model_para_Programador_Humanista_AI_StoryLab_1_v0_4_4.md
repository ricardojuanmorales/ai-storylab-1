# Guía Threat Model para el Programador Humanista AI StoryLab 1 v0.4.4

**Estado:** Borrador consolidado para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Threat_Model_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental y formativo. No autoriza implementación funcional.

---

## 1. Propósito

Esta guía traduce el Registro Inicial de Threat Models SDD al trabajo cotidiano del Programador Humanista.

Su función es ayudar a detectar amenazas antes de que una spec se convierta en diseño técnico, objeto conceptual o tarea futura.

---

## 2. Qué es un threat model en AI StoryLab 1

Un threat model es una herramienta de cuidado anticipatorio.

No pregunta solamente “¿quién atacaría el sistema?”, sino:

```text
¿Qué se puede dañar?
¿Qué persona pierde control?
¿Qué evidencia se expone?
¿Qué dato no debería existir?
¿Qué automatización desplaza una decisión humana?
¿Qué consentimiento falta?
¿Qué amenaza no puedo mitigar todavía?
```

---

## 3. Cuándo activarlo

Debe activarse si una spec toca:

```text
exportación;
publicación;
evidencia educativa;
evidencia creativa;
reflexiones personales;
menores de edad;
datos reales;
datos personales;
datos sensibles;
IA externa;
metadatos;
portafolios;
automatización;
evaluación;
compartir con terceros;
uso en investigación;
almacenamiento persistente;
repositorio local;
pérdida de agencia;
rigidez pedagógica.
```

---

## 4. Cuándo bloquear

Debe bloquearse, diferirse o rediseñarse si aparece:

```text
subida automática;
publicación automática;
envío automático a IA externa;
evaluación automática como juez final;
datos reales sin política formal;
datos de menores sin política reforzada;
almacenamiento remoto sin política aprobada;
backend sin autorización;
cloud sin autorización;
APIs externas sin threat model específico;
analíticas sin autorización;
autenticación prematura;
base de datos remota;
implementación funcional en v0.4.4.
```

---

## 5. Cómo leer niveles de riesgo

```text
Bajo:
  datos ficticios, conceptuales, sin exportación ni IA externa.

Medio:
  metadatos mínimos, evidencia ficticia, objetos conceptuales.

Alto:
  evidencia educativa, reflexión personal, portafolio, exportación o consentimiento.

Bloqueante:
  datos reales, menores, IA externa por defecto, subida automática, publicación automática, evaluación automática final o infraestructura no autorizada.
```

---

## 6. Amenazas que no parecen amenazas

El Programador Humanista debe mirar también amenazas blandas:

```text
formulario excesivo;
portafolio muerto;
reflexión obligatoria;
confusión entre borrador y publicación;
confusión entre guardar y compartir;
metadatos invisibles;
pérdida de contexto creativo;
deuda cerrada demasiado pronto;
rutas canónicas equivocadas;
mezcla de borrador con aprobado.
```

---

## 7. Resultado del threat model

Un threat model puede terminar en:

```text
aprobado;
condicionado;
diferido;
bloqueado.
```

Debe registrar:

```text
mitigaciones;
riesgos residuales;
consentimiento requerido;
revisión humana;
deuda creada o pagada;
documentos a actualizar;
posible Wiki humana.
```

---

## 8. Dictamen

El threat model es el radar del Programador Humanista. No ve el futuro, pero impide navegar dormidos hacia arrecifes documentales, técnicos o humanos.
