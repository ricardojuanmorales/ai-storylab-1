# SPEC H08-4 · M2, M3, M4 y arco creativo completo

## 1. Resultado esperado

Una persona con perfil sintético puede recorrer las cuatro misiones, regresar,
editar, reabrir y recuperar su proyecto local sin que el sistema interprete la
secuencia como castigo o examen lineal.

## 2. Misiones

### M1 · Intención creadora

Permanece funcional y sirve como regresión obligatoria.

### M2 · Arquitectura narrativa

Permite explorar y revisar:

- participantes o personajes;
- mundo y reglas;
- tensiones o preguntas centrales;
- estructura reordenable.

### M3 · Producción multimodal

Permite documentar una producción creativa mediante contenido textual,
decisiones de proceso y metadatos sintéticos. Distingue creación, evidencia y
publicación.

No almacena archivos binarios, no sube medios y no simula una capacidad remota
inexistente.

### M4 · Curaduría y cierre

Permite revisar borradores y evidencias, reflexionar privadamente y expresar
decisiones humanas de selección o retiro. Prepara la transferencia hacia H08-5,
pero no implementa exportación, importación o roundtrip.

## 3. Experiencia transversal

Cada misión debe ofrecer:

- propósito e instrucciones;
- actividad editable;
- evidencia según la política de cardinalidad ratificada;
- reflexión privada opcional;
- decisión humana;
- estado y criterios de finalización;
- regreso, reapertura y revisión;
- persistencia y recuperación.

## 4. Contratos

- `MISSION_CATALOG` conserva cuatro definiciones canónicas;
- el motor no puede quedar acoplado exclusivamente a M1;
- las transiciones siguen siendo tipadas;
- ninguna misión se completa por inferencia automática;
- reflexión y evidencia son entidades distintas;
- M1, M2 y M4 conservan una evidencia editable por misión;
- M3 conserva una o múltiples evidencias editables e identificables;
- cada misión conserva cero o una reflexión privada editable;
- cada evidencia conserva cero o una decisión humana vigente;
- una decisión humana no puede fabricarse por IA o máquina;
- los mensajes públicos son seguros y no punitivos.

## 5. Persistencia

El flujo usa los contratos endurecidos de H08-3:

- envelope v1;
- schema actual autorizado;
- índice metadata-only;
- staging recuperable;
- manejo tipado de cuota y corrupción.

Cualquier necesidad de cambiar el contrato serializado detiene el bloque y abre
una decisión separada de schema.

## 6. Accesibilidad

- navegación por teclado;
- foco visible y predecible;
- títulos y regiones semánticas;
- respeto a reduced motion, high contrast y text scale;
- mensajes comprensibles;
- ausencia de temporizadores punitivos.

## 7. Privacidad

- datos sintéticos;
- sin red ni telemetría;
- reflexión privada fuera de previews;
- metadatos mínimos;
- ninguna publicación automática.

## 8. Cierre

H08-4 se considera cumplido cuando las cuatro misiones funcionan como un arco
integrado, recuperable, reversible y accesible, y H08-4A produce una recomendación
independiente seguida de dictamen humano.

## 9. Decisión de cardinalidad ratificada en H08-4.0

La persona responsable ratificó una política híbrida: solamente M3 admite múltiples
evidencias. La implementación debe expresar esta regla mediante contratos explícitos,
no mediante condicionales basados en textos visibles. Esta decisión no cambia el schema
ni el formato de almacenamiento. El historial de versiones permanece diferido.
