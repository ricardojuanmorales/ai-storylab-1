# Guía POO Conceptual para el Programador Humanista AI StoryLab 1 v0.4.4

**Estado:** Borrador consolidado para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_POO_Conceptual_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental y formativo. No autoriza implementación funcional.

---

## 1. Propósito

Esta guía traduce la Matriz POO Conceptual SDD al trabajo del Programador Humanista.

Su función es permitir que el equipo piense objetos de dominio sin convertirlos prematuramente en código, clases, tablas, servicios, endpoints ni arquitectura ejecutable.

---

## 2. Regla de oro

```text
Un objeto conceptual no es una clase implementada.
```

En v0.4.4, un objeto conceptual sirve para nombrar:

```text
propósito humano;
responsabilidad;
datos permitidos;
datos prohibidos;
relaciones;
local-first;
amenazas;
consentimiento;
bloqueos;
deuda.
```

---

## 3. Preguntas antes de aceptar un objeto

```text
¿Qué representa este objeto en la experiencia humana?
¿Qué responsabilidad tiene?
¿Qué debe cuidar?
¿Qué datos necesita realmente?
¿Qué datos no debe contener?
¿Qué permanece local?
¿Qué amenaza activa?
¿Qué consentimiento requiere?
¿Qué no debe hacer nunca?
```

Si el objeto no puede responder estas preguntas, debe quedar condicionado o diferido.

---

## 4. Composición antes que herencia

El Programador Humanista debe evitar identidades rígidas.

Modelo recomendado:

```text
Usuario
  + Rol
  + Subjetividad
  + Contexto
  + Permisos
  + Consentimientos
```

Una persona puede ser docente en una actividad, investigadora en otra, revisora humana de una spec o creadora de evidencia.

---

## 5. Objetos prioritarios

```text
Usuario
Rol
Subjetividad
Contexto
Permiso
Consentimiento
Spec
DecisionHumana
RevisionHumana
Evidencia
Reflexion
Portafolio
ActividadCreativa
Competencia
Rubrica
Retroalimentacion
Dato
Metadato
PoliticaLocalFirst
ThreatModel
Riesgo
Mitigacion
Exportacion
RepositorioLocal
UsoIA
RegistroDeuda
BitacoraSesion
TransferenciaSimetrica
WikiHumana
```

---

## 6. Objetos de mayor cuidado

Estos objetos requieren atención reforzada:

```text
Usuario
Consentimiento
Evidencia
Reflexion
Portafolio
Exportacion
UsoIA
ThreatModel
RepositorioLocal
Rubrica
Retroalimentacion
```

No son peligrosos por existir. Son sensibles porque pueden tocar agencia, privacidad, evaluación, evidencia, IA, consentimiento o publicación.

---

## 7. Señales de bloqueo

Bloquear, diferir o rediseñar si el objeto implica:

```text
backend;
cloud;
APIs externas;
autenticación;
analíticas;
base de datos remota;
subida automática;
publicación automática;
IA externa por defecto;
manejo de datos reales;
datos de menores sin política reforzada;
evaluación automática como juez final;
implementación funcional.
```

---

## 8. Ejemplo de lectura humanista

Objeto técnico tentador:

```text
Clase StudentPortfolio
```

Lectura SDD:

```text
Objeto conceptual: Portafolio

Propósito:
  sostener curaduría local de evidencias y reflexiones.

Responsabilidades:
  organizar, revisar, seleccionar, contextualizar.

No debe hacer:
  publicar automáticamente;
  evaluar automáticamente;
  enviar a IA externa;
  forzar reflexión personal;
  ocultar metadatos.
```

---

## 9. Dictamen

POO conceptual no es una fábrica de clases. Es una mesa de disección amable: permite mirar cada objeto antes de darle cuerpo técnico.
