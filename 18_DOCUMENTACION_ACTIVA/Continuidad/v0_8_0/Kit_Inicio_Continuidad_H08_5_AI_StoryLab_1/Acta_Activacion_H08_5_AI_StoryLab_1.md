# Acta de Activación H08-5 · Portafolio y Roundtrip

**Fecha:** 2026-07-21  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**Baseline canónico:** `0efd5535cd796cb16b3f77518a6f82614a155a6e`  
**Rama objetivo:** `feat/v0.8-h08-5-portfolio-roundtrip`  
**Hito interno inicial:** `H08-5.0`  
**Protocolo efectivo:** `v3.1`  

## Verificaciones previas

- kit completo leído en el orden canónico;
- `MANIFEST.json` válido;
- 19 de 19 hashes declarados en `CHECKSUMS.sha256` verificados;
- `main` remoto idéntico al merge commit canónico;
- PR #61 confirmado como cerrado y fusionado;
- atestación post-merge heredada revisada humanamente;
- rama y PR de H08-5 ausentes antes de la activación;
- ausencia de cambios funcionales en este primer commit.

## Acuerdo humano

La persona responsable expresó de forma explícita:

> `SUFFICIENT_TO_OPEN_SESSION`

Este acuerdo abre la sesión H08-5 y ratifica el uso inmediato del Protocolo de
Trabajo v3.1 y su Bitácora de Evolución.

## Autorización delimitada

Se autoriza:

- crear la rama desde el baseline exacto;
- publicar un primer commit exclusivamente documental;
- abrir un único Draft PR para todas las conversaciones de H08-5;
- abrir H08-5.0 después de verificar la publicación del primer commit.

No se autoriza:

- marcar el PR como Ready for Review;
- fusionar el PR;
- abrir H08-6;
- incluir cambios funcionales, schema, persistencia, refactors o pruebas
  funcionales nuevas en este commit.

## Invariantes de H08-5

- portafolio humano, ordenado y reversible;
- preview y confirmación antes de exportar;
- importación como entrada no confiable;
- cero mutación ante rechazo;
- roundtrip por equivalencia semántica;
- reflexiones privadas excluidas;
- datos sintéticos;
- experiencia offline;
- sin backend, autenticación, telemetría ni publicación automática.
