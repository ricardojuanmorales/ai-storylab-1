# Protocolo del checkpoint independiente · H09-A

## Principio

H09-A debe intentar refutar, no repetir, las afirmaciones de H09-7.

## Independencia aplicada

1. movimiento y operador separados;
2. checkout temporal desde el SHA candidato;
3. instalación desde lockfile;
4. ejecución completa de la suite;
5. reconstrucción del ZIP;
6. verificación del ZIP presentado;
7. contraste con objetos Git, matrices, CI y checksums;
8. clasificación explícita de reservas;
9. prohibición de reparaciones;
10. dictamen separado de la decisión humana.

## Independencia no afirmada

- no es auditoría externa;
- no intervino una organización independiente;
- no intervino una tercera parte;
- no se realizaron pruebas con participantes;
- no se realizó una sesión manual de lector de pantalla.

## Regla de fallo

Cualquier ruptura de identidad, integridad, suite, freeze o CI detiene el
operador y requiere clasificación humana. El operador no repara.
