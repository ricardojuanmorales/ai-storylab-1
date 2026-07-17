# Decisión humana · Ratificación de persistencia local H08-2.4

```yaml
decision_date: 2026-07-16
authority: responsable_humano_AI_StoryLab_1
source_instruction: "Adelante con H08-2.4"
decision: approve_provisional_local_persistence
ADR: ADR-H08-2.1-002
status: ratified
```

## Alcance autorizado

- `localStorage` para un proyecto sintético reciente;
- acceso mediante adaptador de `ProjectRepository`;
- validación de schema e invariantes al cargar;
- borrado explícito;
- errores tipados;
- fallback en memoria;
- vista previa de exportación sin descarga.

## No autorizado

- datos reales;
- importación;
- roundtrip;
- migración legacy;
- múltiples proyectos persistidos;
- almacenamiento binario;
- nube o sincronización;
- publicación automática.

## Próxima decisión

H08-2A evaluará la vertical slice completa. H08-3 podrá proponer el
endurecimiento de persistencia sin convertir esta solución provisional en una
decisión irreversible.
