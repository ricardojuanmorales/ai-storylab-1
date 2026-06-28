# Regla de Colocación Documental para Conocimiento Común y Bloque Competencial de AI StoryLab 1 v0.4.3

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.3 - Philosophical, Pedagogical & Competency Foundation  
**Tipo de documento:** Regla de colocación documental  
**Estado:** Borrador actualizado para revisión humana  
**ID maestro:** ASTL-V043-RCD-001  
**Cartapacio canónico:** `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/`  
**Archivo canónico:** `Regla_Colocacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md`  
**Actualización:** incorpora rutas corregidas de conocimiento común, bloque competencial, plantillas, protocolos y documentación activa.  

**Documentos relacionados:**

```text
00_CONTROL_MAESTRO/Convenciones_Nombres/Convencion_Nombres_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Ubicacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Matriz_Indice_Dimensiones_Operacionales_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Matriz/Marco_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Matriz_Continuidad_Bloque_Competencial_AI_StoryLab_1_v0_4_3.md
```

---

## 1. Propósito

Este documento establece la regla de colocación documental para los archivos de conocimiento común y para las matrices rectoras del bloque competencial de AI StoryLab 1 durante la fase `v0.4.3 - Philosophical, Pedagogical & Competency Foundation`.

Su propósito es definir dónde deben vivir los documentos canónicos, cómo deben organizarse en cartapacios semánticos, qué rutas no deben usarse, qué documentos pertenecen al control maestro, y cómo evitar duplicación, dispersión conceptual o deuda estructural.

Esta regla complementa:

- la convención de nombres;
- la tabla de ubicación documental;
- la documentación activa;
- la bitácora de transferencia simétrica;
- las matrices de continuidad de la fase.

---

## 2. Fundamento estructural

La estructura raíz de AI StoryLab 1 conserva numeración porque funciona como mapa cardinal del sistema.

Desde el segundo nivel en adelante, las rutas deben usar nombres semánticos, sin prefijos numéricos.

Ejemplo correcto:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
05_COMPETENCIAS_Y_PERFILES/Matriz/
```

Ejemplo incorrecto:

```text
05_COMPETENCIAS_Y_PERFILES/01_Conocimiento_Comun/
05_COMPETENCIAS_Y_PERFILES/01_Matriz/
```

---

## 3. Rutas canónicas principales

### 3.1 Conocimiento común

La ruta canónica para conocimiento común es:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
```

Contiene conocimiento transversal reutilizable por múltiples perfiles y documentos del proyecto.

### 3.2 Matrices rectoras del bloque competencial

La ruta canónica para matrices de competencias, taxonomías, evidencias, rúbricas, portafolios y subjetividades es:

```text
05_COMPETENCIAS_Y_PERFILES/Matriz/
```

Esta ruta no debe confundirse con:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/
```

La primera organiza el bloque competencial.  
La segunda organiza la base del conocimiento común.

---

## 4. Organización interna aprobada de Conocimiento_Comun

Estructura canónica:

```text
05_COMPETENCIAS_Y_PERFILES/
  Conocimiento_Comun/
    README.md

    Matriz/
      README.md
      Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
      Matriz_Indice_Dimensiones_Operacionales_AI_StoryLab_1_v0_4_3.md

    Dimensiones_Operacionales/
      README.md
      Dimension_Agencia_Humana_AI_StoryLab_1_v0_4_3.md
      Dimension_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md
      Dimension_Investigacion_Creacion_AI_StoryLab_1_v0_4_3.md
      Dimension_Literacidad_Critica_IA_AI_StoryLab_1_v0_4_3.md
      Dimension_Etica_Aplicada_Responsabilidad_AI_StoryLab_1_v0_4_3.md
      Dimension_Diseno_Universal_Accesibilidad_AI_StoryLab_1_v0_4_3.md
      Dimension_Conocimiento_Situado_Contextual_AI_StoryLab_1_v0_4_3.md
      Dimension_Colaboracion_Transdisciplinaria_AI_StoryLab_1_v0_4_3.md
      Dimension_Reflexion_Metacognitiva_Portafolio_AI_StoryLab_1_v0_4_3.md
      Dimension_Evaluacion_Formativa_Criterio_Humano_AI_StoryLab_1_v0_4_3.md

    Glosarios/
      README.md
      Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md

    Referencias/
      README.md

    Guias_Uso/
      README.md
```

`Referencias/` y `Guias_Uso/` pueden estar reservados con README hasta que existan documentos sustantivos que justifiquen su activación plena.

---

## 5. Rutas no canónicas prohibidas dentro de Conocimiento_Comun

No deben existir dentro de `Conocimiento_Comun/` las siguientes rutas:

```text
Bases_Conocimiento/
Caleidoscopio/
Invocables/
Referencias_Logicas/
Transferencia_Simetrica/
```

Si aparecen en una rama o PR, deben tratarse como deuda estructural o error de colocación.

Acción requerida:

```text
eliminar del PR o mover a ruta canónica solo si existe justificación aprobada
```

---

## 6. Función de cada subcartapacio de Conocimiento_Comun

### 6.1 `Matriz/`

Contiene documentos matriz del conocimiento común.

Debe contener:

```text
Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
Matriz_Indice_Dimensiones_Operacionales_AI_StoryLab_1_v0_4_3.md
```

No debe contener matrices competenciales generales.

### 6.2 `Dimensiones_Operacionales/`

Contiene las fichas canónicas de las diez dimensiones operacionales.

No debe contener competencias finales, rúbricas finales, portafolios, actividades curriculares ni implementación técnica.

### 6.3 `Glosarios/`

Contiene glosarios transversales canónicos.

Debe contener:

```text
Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
```

No debe contener plantillas ni protocolos.

### 6.4 `Referencias/`

Contiene referencias canónicas compartidas cuando se activen.

En v0.4.3 puede permanecer reservado con `README.md`.

### 6.5 `Guias_Uso/`

Contiene guías internas de uso documental del conocimiento común.

En v0.4.3 puede permanecer reservado con `README.md`.

---

## 7. Organización aprobada del bloque competencial

La ruta canónica para documentos rectores del bloque competencial es:

```text
05_COMPETENCIAS_Y_PERFILES/Matriz/
```

Debe contener:

```text
README.md
Marco_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
Matriz_Competencias_por_Dimension_AI_StoryLab_1_v0_4_3.md
Matriz_Competencias_por_Subjetividad_AI_StoryLab_1_v0_4_3.md
Matriz_Evidencias_por_Competencia_AI_StoryLab_1_v0_4_3.md
Matriz_Relacion_Competencias_Rubricas_Portafolios_AI_StoryLab_1_v0_4_3.md
```

No debe contener:

```text
fichas de dimensión operacional
glosarios
plantillas
protocolos
bitácoras
documentos de sesión
implementación técnica
```

---

## 8. Colocación de plantillas y protocolos

### 8.1 Plantillas documentales

Las plantillas pertenecen a:

```text
07_PLANTILLAS_Y_MODELOS/Documentacion/
```

Ejemplos:

```text
Plantilla_Entrada_Glosario_AI_StoryLab_1_v0_4_3.md
Plantilla_Ficha_Dimension_Operacional_AI_StoryLab_1_v0_4_3.md
```

No deben colocarse en `Glosarios/` ni en `Dimensiones_Operacionales/`.

### 8.2 Protocolos documentales

Los protocolos pertenecen a:

```text
00_CONTROL_MAESTRO/Protocolos_Documentales/
```

Ejemplo:

```text
Protocolo_Incorporacion_Terminos_Glosario_AI_StoryLab_1_v0_4_3.md
```

No deben colocarse en `Glosarios/`, `Guias_Uso/` ni `Documentacion/`.

---

## 9. Documentación activa y continuidad

Las bitácoras, matrices de continuidad, compendios de cierre y registros de sesión pertenecen a:

```text
18_DOCUMENTACION_ACTIVA/
```

Ejemplos:

```text
18_DOCUMENTACION_ACTIVA/Bitacoras/Matriz_Continuidad_Ronda_Fundamento_Filosofico_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Matriz_Continuidad_Bloque_Competencial_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/
```

Estos documentos registran proceso vivo. No sustituyen documentos canónicos.

---

## 10. Unidad estructural mínima

Todo cartapacio creado debe incluir `README.md`.

El README debe explicar:

- propósito;
- qué contiene;
- qué no contiene;
- relación con cartapacios vecinos;
- criterios de colocación;
- riesgos de seguridad, privacidad y consentimiento;
- estado WIKI_SYNC;
- estado de deuda cuando aplique.

---

## 11. Criterios de colocación por tipo documental

| Tipo documental | Ruta correcta |
|---|---|
| Matriz de conocimiento común | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/` |
| Ficha de dimensión operacional | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` |
| Glosario canónico | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/` |
| Referencias comunes | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/` |
| Guías internas de uso de conocimiento común | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/` |
| Matriz competencial | `05_COMPETENCIAS_Y_PERFILES/Matriz/` |
| Plantilla documental | `07_PLANTILLAS_Y_MODELOS/Documentacion/` |
| Protocolo documental | `00_CONTROL_MAESTRO/Protocolos_Documentales/` |
| Convención de nombres | `00_CONTROL_MAESTRO/Convenciones_Nombres/` |
| Regla de colocación | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` |
| Tabla de ubicación | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` |
| Bitácora o continuidad | `18_DOCUMENTACION_ACTIVA/Bitacoras/` |
| Cierre de sesión | `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/` |
| Guía humana pública | `21_WIKI_DOCUMENTACION_HUMANA/` |

---

## 12. Seguridad y privacidad

Esta regla no autoriza almacenar datos personales, evidencias reales, información sensible, credenciales, imágenes identificables, prompts sensibles ni portafolios reales.

Todo documento debe sostener:

```text
local-first
Spec-Driven Development
Security by Design
Security by Default
privacidad por defecto
consentimiento explícito cuando aplique
no publicación automática
no IA externa por defecto
```

---

## 13. Límites explícitos

Esta regla no autoriza:

```text
backend
APIs externas
cloud
autenticación
analíticas externas
base de datos remota
subida automática de archivos
copilotos internos
cambios funcionales prematuros
refactor técnico sin spec
integraciones sin threat model
manejo remoto de datos sin privacidad y consentimiento
```

---

## 14. Deudas que esta actualización paga

Esta actualización paga o reduce:

```text
ASTL-V043-DEBT-LOC-CC-002
ASTL-V043-DEBT-LOC-CC-003
ASTL-V043-DEBT-LOC-CP-004
```

También queda alineada con el pago de:

```text
ASTL-V043-DEBT-README-CC-001
ASTL-V043-DEBT-README-CP-001
```

cuando los README canónicos estén integrados al PR.

---

## 15. WIKI_SYNC

Esta regla genera necesidad de WIKI_SYNC futuro porque afecta navegación documental y comprensión humana de rutas.

Estado:

```text
WIKI_SYNC pendiente como deuda controlada
```

---

## 16. Criterios de aceptación

Esta regla se acepta si:

- reconoce la ruta canónica `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/`;
- reconoce la ruta canónica `05_COMPETENCIAS_Y_PERFILES/Matriz/`;
- diferencia matrices de conocimiento común y matrices competenciales;
- corrige la lista de dimensiones operacionales aprobadas;
- elimina rutas no canónicas;
- ubica plantillas en `07_PLANTILLAS_Y_MODELOS/Documentacion/`;
- ubica protocolos en `00_CONTROL_MAESTRO/Protocolos_Documentales/`;
- ubica bitácoras y continuidad en `18_DOCUMENTACION_ACTIVA/`;
- mantiene README como unidad estructural mínima;
- registra deuda pagada o reducida;
- mantiene límites explícitos de no implementación.
