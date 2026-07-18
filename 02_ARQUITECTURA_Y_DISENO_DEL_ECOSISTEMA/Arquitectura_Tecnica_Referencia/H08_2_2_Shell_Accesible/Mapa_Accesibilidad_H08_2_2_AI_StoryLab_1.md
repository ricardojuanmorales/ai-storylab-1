# Mapa de accesibilidad · H08-2.2

| Área | Mecanismo | Evidencia |
|---|---|---|
| salto | enlace visible al foco | prueba de transferencia al `main` |
| landmarks | header, nav, main, footer | prueba por roles |
| teclado | enlaces, botones y select | prueba de tabulación |
| foco | `:focus-visible` | CSS y prueba del skip link |
| contraste | `aria-pressed` + data attribute | prueba de interacción |
| movimiento | control + media query | prueba y CSS |
| escala | select etiquetado | prueba de cambio |
| anuncios | `role="status"` | prueba de texto anunciado |
| estructura | headings jerárquicos | prueba de heading principal |
| límites | pasos planificados no ejecutables | prueba negativa de botones |

## Declaración

La verificación automatizada no sustituye revisión humana con lector de
pantalla, zoom, teclado físico y preferencias del sistema.
