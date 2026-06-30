# Guía Local-First para el Programador Humanista AI StoryLab 1 v0.4.4

**Estado:** Borrador consolidado para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Local_First_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental y formativo. No autoriza implementación funcional.

---

## 1. Propósito

Esta guía traduce la Política Local-First Inicial al trabajo del Programador Humanista.

---

## 2. Regla de oro

```text
Nada sale del control local del usuario por defecto.
```

Esto implica:

```text
no subida automática;
no publicación automática;
no envío automático a terceros;
no envío automático a IA externa;
no almacenamiento remoto;
no analíticas;
no base de datos remota;
no autenticación prematura;
no dependencia de servicios externos.
```

---

## 3. Preguntas obligatorias

```text
¿Qué permanece local?
¿Qué no se guarda?
¿Qué puede exportarse?
¿Qué requiere consentimiento?
¿Qué requiere anonimización?
¿Qué nunca se sube automáticamente?
¿Qué requeriría una spec futura?
```

---

## 4. Diferenciar verbos

```text
Guardar:
  mantener bajo control local.

Exportar:
  sacar copia por acción humana explícita.

Compartir:
  entregar o mostrar a otra persona o grupo.

Publicar:
  hacer visible fuera del contexto privado o local.

Enviar a IA externa:
  transferir contenido a sistema externo bajo condiciones estrictas.
```

---

## 5. Evidencia, portafolio y reflexión

```text
La evidencia no es archivo neutro.
El portafolio no es repositorio muerto.
La reflexión no es dato administrativo.
```

Cada uno debe permanecer local por defecto, sin publicación automática, sin evaluación automática final y sin envío a IA externa por defecto.

---

## 6. Señales de alerta

Condicionar, diferir o bloquear si una spec propone:

```text
subir automáticamente;
sincronizar con nube;
analizar actividad del usuario;
guardar en servidor;
crear cuenta;
usar API externa;
enviar a IA;
publicar portafolio;
evaluar automáticamente;
recopilar datos reales;
usar datos de estudiantes.
```

---

## 7. Dictamen

Local-first es una ética de diseño antes de ser arquitectura. El Programador Humanista debe evitar que lo técnico convierta creatividad en extracción de datos.
