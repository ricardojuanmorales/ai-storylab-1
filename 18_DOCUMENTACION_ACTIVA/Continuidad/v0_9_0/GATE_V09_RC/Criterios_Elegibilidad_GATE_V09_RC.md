# Criterios de elegibilidad · GATE-V09-RC

## Regla

La candidata solo puede recibir un dictamen positivo cuando todos los criterios
duros pasan y las reservas permanecen visibles, gobernadas y no convertidas en
afirmaciones.

## Criterios duros

1. autorización humana explícita;
2. PR abierto, Draft y no fusionado;
3. genealogía exacta de la candidata;
4. árbol de aplicación congelado;
5. checksums H09-A válidos;
6. ZIP presentado íntegro;
7. reconstrucción limpia idéntica;
8. suite congelada 49/248;
9. CI del head candidato en Node 22/24;
10. CI del cierre H09-A en Node 22/24;
11. checkpoint H09-A sin bloqueantes;
12. disciplina de afirmaciones;
13. deuda aceptada y no implementada;
14. continuidad M1-M4;
15. versión y schemas coherentes;
16. documentación candidata completa;
17. artefacto no publicado;
18. cero expansión funcional o de infraestructura.

## Disposición

- cualquier fallo duro bloquea el gate;
- las reservas pueden producir `PASS_WITH_EXPLICIT_RESERVATIONS`;
- el gate no crea una RC;
- el gate no autoriza publicación;
- el gate no es el último commit de la sesión;
- el cierre documental final debe ser el movimiento siguiente después de una
  decisión humana y debe producir el último commit.
