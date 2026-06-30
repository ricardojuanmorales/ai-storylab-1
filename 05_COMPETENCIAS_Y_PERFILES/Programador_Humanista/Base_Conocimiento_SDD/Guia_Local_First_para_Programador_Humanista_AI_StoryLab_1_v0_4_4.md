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

## 4. Local-first y objetos conceptuales

Todo objeto conceptual que toque datos, evidencias, reflexiones, portafolios, exportación, IA o evaluación debe responder las preguntas local-first.

Ejemplos prioritarios:

```text
Evidencia
Reflexion
Portafolio
Exportacion
RepositorioLocal
Consentimiento
UsoIA
RevisionHumana
```

---

## 5. Dictamen

Local-first es una ética de diseño antes de ser arquitectura. El Programador Humanista debe evitar que lo técnico convierta creatividad en extracción de datos.
