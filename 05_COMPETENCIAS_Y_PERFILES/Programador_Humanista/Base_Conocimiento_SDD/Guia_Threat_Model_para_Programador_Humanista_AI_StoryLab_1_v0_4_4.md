# Guía Threat Model para el Programador Humanista AI StoryLab 1 v0.4.4

**Estado:** Borrador consolidado para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Threat_Model_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental y formativo. No autoriza implementación funcional.

---

## 1. Propósito

Esta guía traduce el Registro Inicial de Threat Models SDD al trabajo cotidiano del Programador Humanista.

---

## 2. Qué es un threat model

Un threat model es una herramienta de cuidado anticipatorio.

Pregunta:

```text
¿Qué se puede dañar antes de que diseñemos o construyamos algo?
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

## 4. Threat model y POO conceptual

Todo objeto conceptual sensible debe revisar amenazas.

Ejemplo:

```text
Objeto: Portafolio
Amenazas:
  publicación automática;
  pérdida de contexto;
  evaluación automática final;
  exportación sin consentimiento;
  metadatos identificables.
```

---

## 5. Dictamen

El threat model es el radar del Programador Humanista. No ve el futuro, pero impide navegar dormidos hacia arrecifes documentales, técnicos o humanos.
