# Política y matriz de versionado · v0.9.0

La versión describe un contrato específico.

| Objeto | Versión | Autoridad | Disposición |
|---|---:|---|---|
| Línea del proyecto | `v0.9.0` | Plan de Ruta | activa, no publicada |
| Aplicación canónica | `0.9.0-unreleased` | `apps/storylab/package.json` | reconciliada |
| Candidata del artefacto | `0.9.0-unreleased` | `candidate-suite.json` | no publicada |
| Schema actual | `0.8.0-alpha.2` | `schema-version.ts` | permanece |
| Schema anterior | `0.8.0-alpha.1` | `schema-version.ts` | soportado |
| Paquete raíz histórico | `0.3.0` | `package.json` raíz | excluido de candidata |
| RC | no asignada | decisión futura | bloqueada |
| v1.0.0 | no asignada | gate y publicación futura | bloqueada |

La actualización de aplicación no modifica el schema. El paquete raíz conserva
`0.3.0` para no presentar código legado como runtime actual. La reconciliación
declara `apps/storylab` como único runtime canónico.

H09-6 no asigna `rc.0`. H09-7 puede ensamblar una candidata elegible;
`GATE-V09-RC` evalúa elegibilidad; tag, RC, release y v1.0.0 requieren
decisiones humanas separadas.
