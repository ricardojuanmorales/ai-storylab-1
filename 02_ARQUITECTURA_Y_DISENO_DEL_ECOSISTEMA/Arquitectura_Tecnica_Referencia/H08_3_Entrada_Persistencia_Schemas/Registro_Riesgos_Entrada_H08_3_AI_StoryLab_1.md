# Registro de riesgos de entrada · H08-3

| Riesgo | Nivel | Disposición propuesta |
|---|---:|---|
| migración destruye fuente | alto | fuente intacta + staging |
| falsa atomicidad | alto | lenguaje de escritura recuperable |
| checksum tratado como seguridad | medio | declarar límite |
| índice duplica contenido privado | alto | metadatos mínimos |
| H08-3 adelanta importación | alto | auditoría negativa |
| complejidad de IndexedDB prematura | medio | diferir con triggers |
| múltiples proyectos amplían UI | medio | repositorio sí, UI no |
| cambio de schema rompe fixtures | alto | migrador y contratos |
| rollback incompleto | alto | fault injection por etapa |
| datos legacy asumidos | alto | rechazo explícito |
