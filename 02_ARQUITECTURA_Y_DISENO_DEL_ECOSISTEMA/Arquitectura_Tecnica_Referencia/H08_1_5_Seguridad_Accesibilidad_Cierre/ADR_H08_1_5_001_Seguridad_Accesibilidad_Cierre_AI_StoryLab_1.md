# ADR H08-1.5-001 · Seguridad, accesibilidad y cierre

## Estado

Propuesto para integración mediante PR draft.

## Contexto

H08-1.4 integró casos de uso y adaptadores sustituibles. Antes de cerrar H08-1
se requiere comprobar que los límites de seguridad, privacidad y accesibilidad
pueden expresarse como contratos ejecutables sin adelantar H08-2.

## Decisión

1. Las preferencias de accesibilidad se validan como un objeto cerrado.
2. La actualización se realiza mediante un caso de uso que depende de
   `ProjectRepository` y `Clock`.
3. Los errores destinados a fronteras futuras se reducen a código y mensaje
   seguro; `details` y rutas internas no se exponen.
4. La auditoría de privacidad impide incorporar identificadores personales,
   almacenamiento durable, red, logging o capacidades diferidas activas.
5. La persistencia continúa efímera y sustituible.
6. La capa de presentación permanece ausente.
7. El merge de esta unidad cerrará H08-1 y habilitará H08-1A, no H08-2.

## Consecuencias

- la accesibilidad queda presente antes de la interfaz;
- los errores tienen una forma pública mínima;
- el cierre de H08-1 será evaluable por un checkpoint independiente;
- cualquier persistencia durable continúa siendo una decisión futura.
