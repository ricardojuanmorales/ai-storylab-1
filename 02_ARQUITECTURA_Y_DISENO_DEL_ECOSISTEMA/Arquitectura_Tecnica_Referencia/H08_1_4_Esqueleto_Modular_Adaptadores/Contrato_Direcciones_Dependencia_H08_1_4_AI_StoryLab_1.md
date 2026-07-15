# Contrato de direcciones de dependencia · H08-1.4

```text
domain      → nada exterior
ports       → domain
application → domain + ports
adapters    → domain + ports
presentation → ausente
```

La auditoría falla ante dependencias inversas, React fuera de presentación,
acceso ambiental fuera de adaptadores o imports del árbol legacy.
