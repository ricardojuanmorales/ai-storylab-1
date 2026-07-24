# Protocolo de checkpoint · H08-6A

## Regla principal

El checkpoint revisa un head cerrado e inmutable. No corrige código, no amplía
alcance y no convierte una recomendación técnica en veredicto humano.

## Secuencia

1. verificar rama, head, PR Draft y árbol limpio;
2. comparar contra el baseline de H08-6;
3. instalar desde lockfile;
4. ejecutar auditoría de dependencias;
5. ejecutar `npm run verify`;
6. verificar cierres H08-6.2 a H08-6.6;
7. inventariar commits y rutas;
8. producir recomendación técnica;
9. publicar evidencia documental;
10. transferir el veredicto a la persona responsable.

## Independencia

```yaml
mode: procedural_cold_review
product_changes: prohibited
external_third_party_audit: false
human_verdict: required
```
