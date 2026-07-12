# Dictamen de Autoridad, Clasificación y Destino · DOC-GOB-007

## AI StoryLab 1 · C3

**Identificador:** `DOC-DOC-020`
**Fecha:** 2026-07-12
**Estado:** Dictamen preparatorio para revisión humana
**Documento evaluado:** `DOC-GOB-007`
**Gate:** `GATE-CORR-G2 · pending`
**Deuda:** `DEBT-GOV-004 · blocked`
**Movimiento autorizado:** No

---

## 1. Decisión propuesta

```text
document_id: DOC-GOB-007
clasificacion: marco normativo funcional acotado
autoridad: normativa dentro de la estructura funcional de las misiones
estado: active
canonical: yes dentro de su alcance aprobado
destino_candidato: 02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/
lote: C3-C
movement_authorized: no
```

## 2. Fundamento de clasificación

El documento estandariza decisiones funcionales sobre la estructura de una misión.

Su objeto es definir la misión como unidad pedagógico-creativa, sus componentes mínimos, libertad creativa, asistencia humana, evidencias, reflexión, portafolio y continuidad.

No establece:

- gobernanza del repositorio;
- reglas de colocación documental;
- autoridad sobre gates;
- arquitectura técnica;
- seguridad técnica;
- implementación;
- despliegue.

El prefijo `DOC-GOB` identifica una función de gobernanza funcional, pero no obliga a ubicar el documento en `00_CONTROL_MAESTRO`.

La clasificación debe seguir el contenido y el alcance aprobado, no solamente el prefijo del identificador.

## 3. Autoridad y precedencia

```text
DOC-ARQ-001
  ↓ define el mapa funcional general
DOC-GOB-007
  ↓ normaliza la estructura funcional de la misión
DOC-UX-003
  ↓ expresa esa estructura como flujos funcionales
DOC-ARQ-002 / DOC-UX-004 / DOC-UX-005 / DOC-UX-006
  ↓ derivan requisitos, recorridos y criterios
```

`DOC-GOB-007`:

- está subordinado al alcance ecosistémico de `DOC-ARQ-001`;
- forma un par documental aprobado conjuntamente con `DOC-UX-003`;
- condiciona documentos derivados posteriores;
- no sustituye fuentes rectoras de gobernanza documental.

## 4. Destino candidato

```text
02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md
```

La frontera `Arquitectura_Funcional/` recibe documentos que describen organización funcional, capacidades y requisitos del ecosistema.

El marco de misión define la gramática funcional de una unidad central del ecosistema y, por ello, pertenece a esa frontera.

## 5. Lote conjunto C3-C

La relación aprobada conjuntamente exige tratar como unidad atómica:

```text
DOC-GOB-007 → 02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md
DOC-UX-003  → 02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md
```

La unidad atómica significa:

- un único commit puro de movimiento para ambos documentos;
- cero cambios de contenido durante ese commit;
- hashes equivalentes antes y después;
- un commit posterior separado para enlaces y metadatos;
- reversión conjunta mediante `git revert`;
- aprobación humana explícita de `GATE-CORR-G2` antes del merge.

## 6. Evidencia de integridad

```text
DOC-GOB-007 sha256: 08535ee04aee2886b1dea4d6a29badf95614a627c686ce0fecf4deadb65aaabb
DOC-UX-003  sha256: d2d2df6ae189eaf39f268625194a1b934f4dc1d1ab374601d5129fb254271a2a
destino DOC-GOB-007 existe: no
destino DOC-UX-003 existe: no
movimientos ejecutados: 0
```

## 7. Efecto del dictamen

Este dictamen resuelve de forma preparatoria:

- autoridad;
- clasificación;
- destino candidato;
- relación de lote.

No:

- mueve archivos;
- cambia la ruta canónica actual;
- aprueba G2;
- resuelve `DEBT-GOV-004`;
- modifica C4;
- abre v0.8.0;
- autoriza implementación.

La fuente actual permanece canónica en su ruta transitoria hasta que un PR de migración aprobado sea fusionado.
