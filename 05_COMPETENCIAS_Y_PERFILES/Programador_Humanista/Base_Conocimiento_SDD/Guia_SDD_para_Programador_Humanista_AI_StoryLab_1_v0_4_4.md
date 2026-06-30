# Guía SDD para el Programador Humanista AI StoryLab 1 v0.4.4

**Estado:** Borrador consolidado para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_SDD_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental y formativo. No autoriza implementación funcional.

---

## 1. Declaración de rol

El Programador Humanista no comienza preguntando “¿cómo lo implemento?”, sino:

```text
¿Qué experiencia humana protege esta función?
¿Qué riesgo introduce?
¿Qué amenaza anticipable aparece?
¿Qué datos toca?
¿Qué consentimiento requiere?
¿Qué agencia preserva?
¿Qué permanece local?
¿Qué objeto conceptual propone?
¿Qué debe bloquearse antes de construir?
```

---

## 2. SDD para este perfil

Una spec debe integrar:

```text
propósito humano;
experiencia creativa;
subjetividades afectadas;
datos y evidencias;
local-first;
threat model cuando aplique;
objetos conceptuales cuando aplique;
consentimiento informado y situado cuando aplique;
riesgos y mitigaciones;
IA, si aplica;
criterios de aceptación;
criterios de prueba;
revisión humana;
deuda;
decisión final.
```

---

## 3. Ciclo de trabajo

```text
1. Formular idea en lenguaje humano.
2. Clasificar tipo de spec.
3. Identificar subjetividades afectadas.
4. Identificar datos, evidencias y acciones sensibles.
5. Aplicar local-first.
6. Verificar activadores de threat model.
7. Identificar objetos conceptuales, si aplica.
8. Identificar consentimiento requerido.
9. Revisar rigidez antijuego creativo.
10. Definir aceptación y prueba documental.
11. Solicitar revisión humana si aplica.
12. Registrar decisión, deuda y transferencia.
```

---

## 4. Señales de bloqueo

Bloquear, diferir o rediseñar si aparece:

```text
implementación sin spec;
consentimiento genérico para acciones sensibles;
POO convertido prematuramente en clases ejecutables;
backend, cloud o APIs externas;
autenticación prematura;
analíticas;
base de datos remota;
subida automática;
IA externa por defecto;
datos reales sin política formal;
publicación automática;
evaluación automática final;
menores sin consentimiento reforzado;
evidencia sensible sin revisión humana;
amenaza crítica sin mitigación.
```

---

## 5. Dictamen

El Programador Humanista no detiene la innovación. La vuelve responsable, trazable, consentida y habitable.
