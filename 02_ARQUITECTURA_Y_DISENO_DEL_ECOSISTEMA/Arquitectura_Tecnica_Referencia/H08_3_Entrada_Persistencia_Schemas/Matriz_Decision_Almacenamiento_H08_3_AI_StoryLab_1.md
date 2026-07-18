# Matriz de decisión · Tecnología de almacenamiento

| Opción | Ventajas | Costos | Veredicto recomendado |
|---|---|---|---|
| A. Endurecer `localStorage` | mínima complejidad, offline, sin dependencia | sin transacciones reales, cuota limitada | **recomendada para H08-3** |
| B. Migrar ahora a IndexedDB | mayor capacidad, transacciones | mayor superficie, nueva complejidad y pruebas | diferir |
| C. Doble adaptador | transición gradual | dos caminos operativos y más riesgo | no autorizar ahora |

## Recomendación

Autorizar A con arquitectura reemplazable. Reevaluar IndexedDB si se
autoriza contenido binario, aumentan sustancialmente el volumen o el número
de proyectos, se requieren transacciones reales o consultas complejas.
