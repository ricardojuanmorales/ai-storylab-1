# Protocolo de revisión · H08-2A

## Identificación

```yaml
reviewed_head: 0e9dc75bb8dd71600616365b14e894a2151594af
PR: 59
mode: structured_self_review
independence_claimed: false
product_changes: prohibited
```

## Fase 1 · Verificación automatizada

1. confirmar repositorio, rama y SHA exactos;
2. confirmar árbol limpio;
3. validar integridad del paquete;
4. instalar únicamente documentación del checkpoint;
5. ejecutar `npm ci --ignore-scripts`;
6. ejecutar `npm run verify`;
7. confirmar 20 archivos de prueba;
8. confirmar ausencia de cambios en `apps/storylab`;
9. registrar evidencia y mantener el gate en `hold`.

## Fase 2 · Revisión humana

Recorrer la experiencia completa:

```text
crear proyecto
→ iniciar M1
→ guardar borrador
→ crear evidencia
→ guardar u omitir reflexión
→ registrar decisión
→ curar portafolio
→ recargar
→ recuperar
→ reabrir
→ preparar export preview
→ confirmar privacidad
→ borrar
```

Evaluar además teclado, foco, mensajes, preferencias visuales, fallback
efímero, honestidad del almacenamiento y ausencia de capacidades diferidas.

## Clasificación

```yaml
critical: blocks_gate
major: normally_blocks_gate
moderate: disposition_required
minor: may_be_reservation
observation: informational
```

## Salidas permitidas

- `PASS`;
- `PASS_WITH_RESERVATIONS`;
- `REMEDIATION_REQUIRED`.

El dictamen y la recomendación del gate deben permanecer separados.
