# Secuencia de autoridades post-gate

```text
GATE-V10-RELEASE cerrado por decisión humana
        ↓
Autorización separada: Ready for Review
        ↓
Transición del PR a Ready for Review
        ↓
Review aplicable + CI exacta + ausencia de drift
        ↓
Autorización separada: merge
        ↓
Merge confirmado en main
        ↓
Comprobar que 533fcf28a0c9053b7da79ca70ded80450d94cf35 es ancestro de main
        ↓
Autorización separada: tag
        ↓
Crear v1.0.0-rc.1 apuntando exactamente a 533fcf28a0c9053b7da79ca70ded80450d94cf35
        ↓
Reverificar SHA-256 y tamaño del ZIP
        ↓
Aprobar notas de prerelease
        ↓
Autorización separada: publicación
        ↓
Crear GitHub prerelease y subir el ZIP exacto
```

No se permite agrupar estas autoridades en una sola aprobación implícita. Una
etapa incompleta bloquea todas las posteriores.
