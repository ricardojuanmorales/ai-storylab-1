# Plan estratégico · H08-5.6

## Prioridad

Restaurar paridad demostrable entre:

```text
HEAD de rama
↔ merge sintético del PR
↔ Node 22
↔ Node 24
```

## Decisiones

1. No inferir que un PASS local equivale a CI remoto en verde.
2. No modificar producto antes de reproducir el estado limpio.
3. Integrar `main` únicamente cuando no sea ancestro del `HEAD`.
4. Detenerse ante conflictos o causa no reproducible.
5. Mantener los comentarios del PR bajo publicación manual humana.
6. Conservar Ready, merge y H08-6 como autorizaciones separadas.
7. Terminar con un último commit exclusivamente documental.

## Autoridad

### Humano

Ratifica el hito, ejecuta el operador, revisa resultados y publica manualmente
los comentarios.

### Máquina

Verifica, reproduce, integra, ejecuta pruebas, crea commits, publica la rama,
consulta CI y detiene anomalías.

### IA

Diseña el bloque, organiza evidencia, propone la remediación y redacta
documentación. No publica comentarios ni abre gates.
