# Plan de Corrección, Validación, Reversión y Cierre
## AI StoryLab 1 · B7

**Estado:** Propuesta para aprobación humana  
**Fuente:** B0–B6 de la auditoría estructural integral  
**Restricción:** Este documento no ejecuta correcciones ni abre v0.8.0

---

## 1. Propósito

B7 convierte el diagnóstico y la simulación en un plan gobernado.

La auditoría termina cuando existe suficiente claridad para responder:

```text
qué debe corregirse;
qué debe permanecer;
en qué orden actuar;
quién aprueba cada paso;
cómo verificarlo;
cómo revertirlo;
qué deuda continúa abierta.
```

B7 no mezcla la auditoría con la migración. El PR #25 documenta el análisis y el plan. Las correcciones deberán ejecutarse en PR separados.

---

## 2. Dictamen general

AI StoryLab 1 puede evolucionar hacia una estructura documental viable para v1.0.0 mediante una migración gradual.

No se recomienda:

- un PR único con todos los movimientos;
- renombrar cartapacios antes de crear índices;
- eliminar copias antes de verificar referencias;
- trasladar documentos sin declarar vigencia;
- usar la apertura de v0.8.0 como mecanismo de limpieza estructural.

Se recomienda una cadena de PR pequeños, reversibles y condicionados por gates humanos.

---

## 3. Principios de ejecución

1. ninguna corrección sin autorización humana explícita;
2. un objetivo estructural principal por PR;
3. movimientos por lotes pequeños;
4. Git preserva historia, pero no sustituye índices documentales;
5. toda ruta nueva debe tener README y frontera definida;
6. toda fuente trasladada debe declarar vigencia;
7. toda copia retirada debe convertirse en referencia;
8. toda deuda debe conservar identificador;
9. toda fase debe tener gate y plan de reversión;
10. completar la auditoría no abre automáticamente v0.8.0.

---

## 4. Secuencia de corrección

### C0 · Ratificación de autoridad

Resolver antes de cualquier movimiento:

- autoridad del protocolo de cartapacios;
- precedencia de `00_CONTROL_MAESTRO/Spec_Driven_Development/`;
- función de `.specify`;
- diferencia entre Constitución, plantilla, spec e instancia.

### C1 · Índices y metadatos

Crear:

- índice de documentos vigentes;
- tabla de fuentes canónicas;
- IDs de decisiones;
- IDs de deuda;
- IDs de gates;
- metadatos de sucesión y deprecación.

### C2 · Preparación de contenedores

Preparar vacíos:

- nuevo `02`;
- subrutas finales de `15`;
- registro consolidado en `20`;
- política y manifiestos en `99`;
- índice de referencias de continuidad en `18`.

### C3 · Arquitectura funcional y UX

Elevar, en lotes pequeños, los documentos sustantivos nacidos en v0.6.

No se moverán bitácoras, planes de trabajo ni actas como si fueran arquitectura.

### C4 · Arquitectura técnica y decisiones

Elevar documentos sustantivos de v0.7 y establecer trazabilidad:

```text
spec → decisión → arquitectura → gate
```

### C5 · Separación `00`–`15`

Conservar método en `00` y resultados finales en `15`.

### C6 · Ciclo de vida de `18`

Mantener memoria, continuidad y decisiones. Sustituir copias sustantivas por referencias.

### C7 · Deuda en `20`

Consolidar la deuda activa mediante identificadores únicos.

### C8 · Archivo histórico en `99`

Formalizar ingreso, no vigencia, sucesor y regla de no edición.

### C9 · Navegación humana

Actualizar README, wiki e índices para que la estructura pueda recorrerse sin conocer su historia interna.

### C10 · Validación final

Verificar el sistema completo antes de declarar terminada la corrección.

---

## 5. Gates humanos obligatorios

### Gate G0 · Autoridad

Confirma qué documentos gobiernan.

### Gate G1 · Estructura objetivo

Aprueba el nuevo `02` y las fronteras `00`, `15`, `18`, `20` y `99`.

### Gate G2 · Migración funcional

Aprueba documentos de arquitectura funcional y UX por lote.

### Gate G3 · Migración técnica

Aprueba arquitectura técnica, seguridad y decisiones.

### Gate G4 · Integridad referencial

Confirma que no se rompieron enlaces, gates ni decisiones.

### Gate G5 · Continuidad histórica

Confirma que la historia v0.6 y v0.7 sigue siendo navegable.

### Gate G6 · Cierre estructural

Confirma que no quedan bloqueantes P1.

---

## 6. Estrategia de reversión

Cada PR de corrección debe incluir:

```text
rutas antes
rutas después
documentos afectados
referencias actualizadas
validaciones realizadas
comando o procedimiento de reversión
criterio para activar reversión
```

La reversión debe aplicarse al lote que falla, no a toda la migración.

No se eliminarán documentos en el mismo PR que los eleva por primera vez. Primero se establece la nueva ruta, luego se valida, y solo en una fase posterior se reemplaza la copia anterior por una referencia o se archiva.

---

## 7. Criterios de aceptación de la estructura corregida

La migración documental se considera satisfactoria cuando:

1. existe una sola fuente activa por documento sustantivo;
2. SDD tiene autoridad y workspace claramente separados;
3. arquitectura y diseño son descubribles por función;
4. `00` y `15` tienen productos distintos;
5. `18` conserva memoria sin esconder autoridad sustantiva;
6. `20` contiene el estado primario de la deuda;
7. `99` no compite con fuentes vigentes;
8. todas las familias P1 declaran vigencia;
9. las decisiones humanas son trazables;
10. la wiki y los README apuntan a fuentes canónicas;
11. los enlaces afectados han sido verificados;
12. existe evidencia de reversibilidad.

---

## 8. Condiciones para cerrar el PR #25

El PR de auditoría puede cerrarse cuando:

- B0–B7 están integrados;
- el dictamen final resume alcance, hallazgos y estructura objetivo;
- los riesgos P1 están registrados;
- el plan de corrección está separado de la ejecución;
- no se realizaron movimientos automáticos;
- no se abrió v0.8.0;
- el PR está sincronizado y sin conflictos;
- existe comentario final de cierre;
- se registra la decisión humana sobre el destino de la auditoría final entre `00` y `15`.

El PR #25 puede cerrarse y fusionarse aun cuando las correcciones sigan pendientes, porque su producto es el plan auditado, no la reorganización.

---

## 9. Condiciones para abrir v0.8.0

La apertura de v0.8.0 constituye una decisión independiente.

La auditoría recomienda no abrirla hasta que, como mínimo:

1. C0 esté resuelto;
2. el nuevo `02` esté aprobado;
3. exista índice de vigencia;
4. SDD y `.specify` tengan precedencia clara;
5. arquitectura y diseño tengan rutas objetivo aprobadas;
6. no exista un bloqueante estructural que comprometa implementación.

No es necesario completar toda la migración para planificar v0.8.0, pero sí debe conocerse la estructura donde vivirán sus productos.

---

## 10. Deuda que puede permanecer abierta

Puede diferirse, con registro explícito:

- normalización de cartapacios P2;
- mejora editorial de README;
- automatización de índices;
- generación automática de wiki;
- limpieza de residuos de bajo impacto;
- internacionalización;
- ajustes de plantillas no críticas.

No puede diferirse sin aceptación de riesgo:

- autoridad SDD;
- vigencia documental;
- nuevo contenedor arquitectónico;
- frontera `00`–`15`;
- ciclo de vida de `18`;
- secuencia de corrección reversible.

---

## 11. Paquete final de cierre de auditoría

El cierre del PR #25 debería incluir:

```text
Informe_Final_Auditoria_Estructural_AI_StoryLab_1.md
Matriz_Final_Hallazgos_Decisiones_AI_StoryLab_1.csv
Plan_Fases_Correccion_Gates_Reversion_B7_AI_StoryLab_1.csv
Acta_Cierre_Auditoria_Estructural_AI_StoryLab_1.md
Indice_Productos_Auditoria_PR25_AI_StoryLab_1.md
```

El informe final no necesita repetir todos los documentos de trabajo. Debe enlazarlos y presentar el hilo decisional.

---

## 12. Dictamen final de B7

La auditoría estructural ha cumplido su función cuando deja de producir incertidumbre y comienza a producir decisiones reversibles.

AI StoryLab 1 no requiere demoler su estructura. Requiere clarificar autoridad, elevar arquitectura y diseño, especializar sus cartapacios transversales y preservar la memoria sin permitir que la historia esconda el presente.

El PR #25 debe cerrar como auditoría y plan. La migración debe comenzar después, por fases, con aprobación humana y sin mezclarla con la apertura de v0.8.0.
