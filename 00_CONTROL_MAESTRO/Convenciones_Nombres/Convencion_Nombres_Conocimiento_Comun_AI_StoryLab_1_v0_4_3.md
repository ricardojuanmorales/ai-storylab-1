# Convención de Nombres para Conocimiento Común de AI StoryLab 1 v0.4.3

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.3 - Philosophical, Pedagogical & Competency Foundation  
**Tipo de documento:** Convención de nombres  
**Estado:** Aprobado para integración documental  
**ID maestro propuesto:** ASTL-V043-CONV-001  
**Cartapacio recomendado:** `00_CONTROL_MAESTRO/Convenciones_Nombres/`  
**Archivo recomendado:** `Convencion_Nombres_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md`  
**Documento relacionado:** `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md`  

---

## 1. Propósito

Este documento establece la convención de nombres para los archivos de conocimiento común de AI StoryLab 1 durante la fase `v0.4.3 - Philosophical, Pedagogical & Competency Foundation`.

Su propósito es asegurar que los documentos canónicos de conocimiento común tengan nombres semánticos, versionados, trazables y compatibles con la estructura N3 del repositorio.

Esta convención busca evitar ambigüedad documental, duplicación de archivos, rutas paralelas, prefijos numéricos indebidos y pérdida de continuidad entre fundamento filosófico, competencias, taxonomías, documentación activa, WIKI_SYNC y bitácora de transferencia simétrica.

---

## 2. Alcance

Esta convención aplica a documentos ubicados bajo:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
```

Incluye los siguientes subcartapacios semánticos:

```text
Matriz/
Dimensiones_Operacionales/
Glosarios/
Referencias/
Guias_Uso/
```

Aplica especialmente a:

- documento matriz de conocimiento común;
- fichas canónicas de dimensiones operacionales;
- glosario general;
- documentos de referencias compartidas;
- guías internas de uso conceptual;
- documentos auxiliares conceptuales;
- documentos puente hacia competencias y taxonomías.

No aplica directamente a:

- specs técnicas;
- código fuente;
- componentes de interfaz;
- documentación de despliegue;
- documentos de seguridad operativa;
- políticas de privacidad;
- modelos de amenazas;
- documentos de cierre de sesión;
- documentación histórica archivada.

Cuando un documento de otro cartapacio enlace conocimiento común, deberá respetar el nombre canónico del archivo original y evitar duplicarlo.

---

## 3. Principios de la convención

La convención se organiza alrededor de los siguientes principios:

1. **Semántica antes que numeración:** el nombre debe explicar la función y el concepto del documento.
2. **Versionado explícito:** todo documento sustantivo debe indicar versión en el nombre.
3. **Trazabilidad:** el nombre debe permitir ubicar fase, propósito y relación con AI StoryLab 1.
4. **No duplicación:** los documentos canónicos viven en una sola ruta y se enlazan desde otras.
5. **Compatibilidad N3:** no se usan prefijos numéricos desde segundo nivel en adelante.
6. **Escalabilidad:** la convención debe sostener crecimiento futuro sin reorganizaciones constantes.
7. **Lectura humana:** el nombre debe ser claro para el equipo desarrollador/documental.
8. **Continuidad:** el nombre debe facilitar registro en bitácora, deuda, WIKI_SYNC, changelog y manifest.
9. **Modularidad documental:** los nombres deben funcionar dentro de subcartapacios semánticos sin depender de orden numérico.
10. **Enlace espejo:** los nombres deben facilitar referencias desde fundamento filosófico, wiki humana y documentación activa sin copiar archivos.

---

## 4. Regla general de nombres

Los archivos sustantivos de conocimiento común deberán usar nombres semánticos, descriptivos y versionados.

Patrón base para documentos de conocimiento común:

```text
Base_Conocimiento_Comun_<Concepto>_AI_StoryLab_1_v0_4_3.md
```

Donde:

```text
Base_Conocimiento_Comun
  indica la función documental.

<Concepto>
  identifica el concepto, dimensión o núcleo temático.

AI_StoryLab_1
  identifica el proyecto.

v0_4_3
  identifica la fase documental.

.md
  indica formato Markdown.
```

La ruta específica dependerá del tipo documental y del subcartapacio correspondiente.

---

## 5. Organización semántica de rutas y nombres

La convención de nombres debe interpretarse junto con esta organización interna:

```text
05_COMPETENCIAS_Y_PERFILES/
  Conocimiento_Comun/
    README.md

    Matriz/
      README.md
      Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md

    Dimensiones_Operacionales/
      README.md
      Base_Conocimiento_Comun_<Dimension_Operacional>_AI_StoryLab_1_v0_4_3.md

    Glosarios/
      README.md
      Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md

    Referencias/
      README.md
      Referencias_Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md

    Guias_Uso/
      README.md
      Guia_Uso_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Los subcartapacios no deben comenzar con números.

Correcto:

```text
Matriz/
Dimensiones_Operacionales/
Glosarios/
Referencias/
Guias_Uso/
```

Incorrecto:

```text
01_Matriz/
02_Dimensiones_Operacionales/
03_Glosarios/
```

---

## 6. Documento matriz

El documento matriz de conocimiento común deberá llamarse:

```text
Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Ruta canónica:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Este archivo funciona como pieza de orientación general para todos los documentos canónicos de conocimiento común.

No debe colocarse directamente en:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
```

salvo que se trate de una etapa transitoria antes de aplicar la reorganización en subcartapacios. Una vez aprobada esta convención, la ruta canónica será `Matriz/`.

---

## 7. Fichas canónicas de dimensiones operacionales

Las fichas canónicas de las diez dimensiones operacionales deberán colocarse en:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/
```

Patrón:

```text
Base_Conocimiento_Comun_<Dimension_Operacional>_AI_StoryLab_1_v0_4_3.md
```

Colección inicial aprobada:

```text
Base_Conocimiento_Comun_Humanismo_Tecnologico_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Pedagogia_Critica_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Investigacion_Creacion_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Etica_Aplicada_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Diseno_Universal_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Conocimiento_Situado_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Creatividad_Multimodal_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Literacidad_Critica_IA_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Responsabilidad_Cultural_Social_AI_StoryLab_1_v0_4_3.md
```

Ruta ejemplo:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md
```

---

## 8. Glosario general

El glosario general deberá colocarse en:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/
```

Nombre recomendado:

```text
Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
```

Ruta canónica:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
```

Este glosario deberá reunir términos transversales relacionados con persona humana, máquina digital, inteligencia artificial, competencias, taxonomías, evidencias, rúbricas, portafolios, SDD, local-first, seguridad, privacidad y consentimiento.

---

## 9. Referencias compartidas

Los documentos de referencias compartidas deberán colocarse en:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/
```

Nombre inicial recomendado:

```text
Referencias_Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Ruta canónica:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/Referencias_Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Este archivo podrá reunir referencias académicas, institucionales y prácticas que sostengan la base de conocimiento común, evitando duplicación bibliográfica excesiva en cada ficha.

---

## 10. Guías internas de uso

Las guías internas de uso del conocimiento común deberán colocarse en:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/
```

Nombre inicial recomendado:

```text
Guia_Uso_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Ruta canónica:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/Guia_Uso_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Estas guías orientan al equipo desarrollador/documental. Si una guía se dirige a estudiantes, docentes, facilitadores o instituciones, deberá evaluarse WIKI_SYNC hacia `21_WIKI_DOCUMENTACION_HUMANA/`.

---

## 11. Archivos README.md

Cada cartapacio y subcartapacio deberá incluir `README.md`.

Esto aplica a:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/README.md
```

Los `README.md` conservan nombre estable para navegación humana y de GitHub.

No deben llamarse:

```text
README_v0_4_3.md
```

La versión documental interna deberá declararse dentro del propio archivo.

---

## 12. Uso de mayúsculas, guiones bajos y acentos

Los nombres de archivo deberán seguir estas reglas:

```text
Usar Pascal semántico con guiones bajos.
No usar espacios.
No usar acentos.
No usar caracteres especiales.
No usar signos de puntuación internos salvo guiones bajos.
No usar prefijos numéricos desde segundo nivel en adelante.
Usar versionado con guiones bajos: v0_4_3.
```

Correcto:

```text
Base_Conocimiento_Comun_Diseno_Universal_AI_StoryLab_1_v0_4_3.md
```

Incorrecto:

```text
06_Diseño Universal.md
Base conocimiento común diseño universal.md
Base-Conocimiento-Comun-Diseño-Universal-v0.4.3.md
01_Base_Conocimiento_Comun_Diseno_Universal.md
```

---

## 13. Uso permitido de números

Los números no deben usarse como prefijos de ordenamiento desde segundo nivel en adelante.

Sí pueden usarse cuando cumplen función de trazabilidad, versión, ID, fecha o release.

Permitido:

```text
v0_4_3
ASTL-V043-CONV-001
2026-06-26
```

No permitido:

```text
01_Humanismo_Tecnologico_AI_StoryLab_1_v0_4_3.md
02_Pedagogia_Critica_AI_StoryLab_1_v0_4_3.md
03_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md
```

La secuencia conceptual de las diez dimensiones deberá registrarse dentro de documentos matriz, tablas o índices, no mediante prefijos numéricos en nombres de archivo.

---

## 14. Relación con cartapacios externos

La convención de nombres depende de la siguiente colocación documental:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
```

No se deberán crear copias equivalentes en:

```text
01_FUNDAMENTO_FILOSOFICO/
21_WIKI_DOCUMENTACION_HUMANA/
18_DOCUMENTACION_ACTIVA/
```

En su lugar, se usará enlace espejo:

```text
01_FUNDAMENTO_FILOSOFICO/
  enlaza a los documentos canónicos de conocimiento común.

21_WIKI_DOCUMENTACION_HUMANA/
  traduce o adapta contenidos para públicos humanos cuando sea necesario.

18_DOCUMENTACION_ACTIVA/
  registra proceso vivo, decisiones, deuda, continuidad y WIKI_SYNC.
```

---

## 15. Relación con documentos de control maestro

Esta convención deberá usarse junto con:

```text
00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Regla_Colocacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md

00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Ubicacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

La convención de nombres define cómo se nombran los archivos.

La regla de colocación define dónde se colocan.

La tabla de ubicación documental resume rutas, funciones, enlaces espejo y responsabilidades.

---

## 16. Relación con documentación activa

Cualquier creación, modificación o sustitución de documentos de conocimiento común deberá reflejarse, según corresponda, en:

```text
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/
18_DOCUMENTACION_ACTIVA/Changelog/
18_DOCUMENTACION_ACTIVA/Manifests/
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/
18_DOCUMENTACION_ACTIVA/Bitacoras/
```

Si el cambio afecta continuidad entre sesiones, deberá considerarse su impacto en la bitácora de transferencia simétrica.

Si afecta comprensión por parte de estudiantes, docentes, facilitadores o instituciones, deberá considerarse impacto WIKI_SYNC.

---

## 17. Relación con deuda

Esta convención busca reducir deuda estructural y documental.

Sin embargo, hasta que la regla de colocación, tabla de ubicación, `README.md` de cartapacios y fichas canónicas estén creadas, se mantiene deuda estructural controlada.

Las deudas relacionadas deberán clasificarse, según aplique, como:

```text
Deuda_Estructural
Deuda_WIKI_SYNC
Deuda_Documental
```

Cada deuda deberá registrar:

```text
origen
ruta afectada
impacto
prioridad
estado
criterio de cierre
relación con PR o release
```

---

## 18. Criterios de aceptación

Esta convención se considerará aprobada si:

- usa ruta compatible con estructura N3;
- incorpora subcartapacios semánticos no numerados;
- evita prefijos numéricos desde segundo nivel;
- mantiene nombres semánticos;
- versiona documentos sustantivos;
- distingue documento matriz, fichas canónicas, glosarios, referencias y guías de uso;
- evita duplicación entre conocimiento común, fundamento filosófico y wiki humana;
- establece relación con `README.md`;
- reconoce documentación activa y transferencia simétrica;
- sostiene local-first, SDD, Security by Design y Security by Default;
- no autoriza cambios funcionales.

---

## 19. Límites explícitos

Esta convención no autoriza:

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

Cualquier propuesta futura en esas áreas requerirá especificación formal, revisión humana, modelo de amenazas, análisis de privacidad, consentimiento y decisión registrada.

---

## 20. Estado de aprobación

```text
Estado actual: aprobado para integración documental
Revisión requerida: completada
Archivo .md descargable: producido
Commit: pendiente hasta completar conjunto documental aprobado
Cambios funcionales: no autorizados
Impacto en deuda: reduce deuda estructural al aprobarse junto con regla y tabla
Impacto en WIKI_SYNC: posible, si se genera guía humana de conocimiento común
Impacto en bitácora de continuidad: sí aplica
```
