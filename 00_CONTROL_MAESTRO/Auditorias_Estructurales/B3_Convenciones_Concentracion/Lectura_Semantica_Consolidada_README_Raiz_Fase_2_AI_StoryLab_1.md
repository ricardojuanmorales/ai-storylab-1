# Lectura Semántica Consolidada de README Raíz
## AI StoryLab 1 · B3 Fase 2

**Estado:** Consolidación provisional basada en evidencia  
**Base auditada:** commit `0beaf081a9b9cf061e09c65147a91f5ecd952450`  
**Nodos raíz:** 29  
**Restricción:** No autoriza reescritura, movimiento ni reclasificación

---

## 1. Resultado consolidado

| Clasificación | Cantidad |
|---|---:|
| especifico activo | 8 |
| generico pendiente activacion | 13 |
| nodo tecnico especial | 6 |
| pendiente lectura final | 2 |

---

## 2. Cartapacios con función específica y activa

| Cartapacio | Función declarada | Fuente |
|---|---|---|
| `00_CONTROL_MAESTRO` | Conservar documentos rectores que gobiernan estructura, colocación documental, versiones, mapas, índices, protocolos y SDD. | `00_CONTROL_MAESTRO/README.md` |
| `01_FUNDAMENTO_FILOSOFICO` | Contener el fundamento filosófico canónico, fuente superior de principios pedagógicos, competenciales, éticos y documentales. | `01_FUNDAMENTO_FILOSOFICO/README.md` |
| `05_COMPETENCIAS_Y_PERFILES` | Organizar competencias, perfiles creadores, perfiles de usuario, conocimiento común, matrices y taxonomías. | `05_COMPETENCIAS_Y_PERFILES/README.md` |
| `07_PLANTILLAS_Y_MODELOS` | Conservar plantillas, modelos y estructuras reutilizables para documentos, specs, evaluación, gobernanza, datos y SDD. | `07_PLANTILLAS_Y_MODELOS/README.md` |
| `15_EVALUACION_CALIDAD_Y_AUDITORIA` | Conservar auditorías, gates, checks, evidencias de validación y evaluación de calidad, seguridad, IA y sistema. | `15_EVALUACION_CALIDAD_Y_AUDITORIA/README.md` |
| `18_DOCUMENTACION_ACTIVA` | Conservar la memoria viva del proyecto: bitácoras, cierres, decisiones, changelog, continuidad, documentación de sesión y transferencia. | `18_DOCUMENTACION_ACTIVA/README.md` |
| `20_MANTENIMIENTO_Y_EVOLUCION` | Conservar deuda, mantenimiento, backlog evolutivo, actualizaciones y seguimiento estructural, técnico y documental. | `20_MANTENIMIENTO_Y_EVOLUCION/README.md` |
| `21_WIKI_DOCUMENTACION_HUMANA` | Conservar documentación humana, guías de comprensión, wiki SDD, bitácora del capitán y materiales narrativos. | `21_WIKI_DOCUMENTACION_HUMANA/README.md` |

---

## 3. Cartapacios con README genérico y deuda funcional confirmada

Los siguientes cartapacios conservan la plantilla de estructura N3 Foundation, declaran `Pendiente_Activacion` y no expresan todavía una función primaria suficientemente específica:

- `02_ARQUITECTURA_CONCEPTUAL`
- `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO`
- `04_GOBERNANZA_ETICA_Y_RIESGOS`
- `06_PASTILLAS_MODULARES`
- `08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS`
- `09_IA_AGENTES_Y_COPILOTOS`
- `10_REPOSITORIOS_Y_FLUJO_TECNICO`
- `11_MULTIMODALIDAD_Y_PUBLICACION`
- `12_DISENO_INSTRUCCIONAL_UNIVERSAL`
- `13_INVESTIGACION_Y_EVIDENCIA`
- `16_SEGURIDAD_PRIVACIDAD_Y_DATOS`
- `19_IMPLEMENTACION_Y_DESPLIEGUE`
- `99_ARCHIVO_HISTORICO`

Esta condición no significa que el cartapacio carezca de valor o que deba eliminarse. Significa que su función no puede validarse usando únicamente el README actual.

---

## 4. Pendientes de lectura final

- `14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO`
- `17_INTERNACIONALIZACION_LOCALIZACION`

Estos casos permanecen abiertos y no se incluyen en la deuda confirmada hasta completar su lectura.

---

## 5. Nodos técnicos especiales

```text
(raiz)
.specify
prompts
public
scripts
src
```

Estos nodos requieren una auditoría técnica separada. No deben evaluarse mediante la misma convención de cartapacios documentales.

---

## 6. Tensiones estructurales emergentes

### Auditorías

`15_EVALUACION_CALIDAD_Y_AUDITORIA` se declara ruta activa y específica para auditorías, gates y validación. Por tanto, la ubicación provisional de los artefactos del PR #25 dentro de `00_CONTROL_MAESTRO/Auditorias_Estructurales/` debe evaluarse en B6 como una decisión de gobernanza, no asumirse como destino definitivo.

### Documentación activa

`18_DOCUMENTACION_ACTIVA` se declara memoria viva con fronteras explícitas y advierte que no debe operar como depósito sin frontera. La concentración observada deberá contrastarse contra esas fronteras.

### Archivo histórico

`99_ARCHIVO_HISTORICO` contiene materiales históricos, pero su README raíz sigue genérico y pendiente de activación. Existe una tensión entre función observada y definición formal insuficiente.

---

## 7. Regla de interpretación

```text
README específico y activo:
  permite contrastar función declarada con contenido observado.

README genérico:
  confirma existencia estructural, pero no función suficiente.

Nodo técnico:
  requiere criterios técnicos distintos.

Ausencia o pendiente:
  se registra como deuda o incertidumbre, nunca como autorización de cambio.
```

---

## 8. Próximo paso

Completar la lectura de los dos README pendientes y producir:

1. matriz final de funciones declaradas;
2. clasificación de coherencia por cartapacio;
3. registro de tensiones;
4. prioridades de revisión humana.

---

## 9. Dictamen

La estructura dispone de una columna vertebral documental clara en algunos cartapacios, mientras otros conservan esqueletos README aún no activados. La auditoría debe distinguir cuidadosamente entre cartapacio existente, cartapacio definido y cartapacio coherente.
