# Definición Candidata del MVP Técnico · Núcleo Creativo Local-First

**Código provisional:** `MVP-SDD-08-01`
**Estado:** aprobado con reservas, efectivo al fusionarse PR #50
**Relación con v0.8.0:** primer hito funcional, no totalidad de la fase

## 1. Tesis

El MVP será pequeño en alcance, nuevo en arquitectura, completo de extremo a
extremo y visible en su valor pedagógico.

No copiará la interfaz ni la arquitectura del MVP v0.3. Su herencia se usará
como memoria funcional auditada.

## 2. Flujo vertical

```text
misión
→ actividad creativa
→ evidencia
→ reflexión o decisión humana
→ curaduría de portafolio local
→ exportación JSON revisable
```

## 3. Incluye

- una misión configurable;
- un tipo de actividad creativa;
- evidencia textual o estructurada sintética;
- reflexión editable y privada por defecto;
- decisión humana antes de incorporar evidencia;
- portafolio local mínimo;
- exportación con vista previa;
- persistencia local;
- pruebas unitarias;
- pruebas de integración del flujo;
- feature flags para capacidades futuras.

## 4. Excluye

- las nueve misiones completas;
- componentes heredados del MVP v0.3;
- Vista del Facilitador;
- dashboard grupal;
- perfiles reales;
- autenticación;
- backend o cloud;
- IA embebida;
- datos reales;
- galería pública;
- marketplace;
- analíticas;
- publicación estable.

## 5. Invariantes

```text
ninguna evidencia se publica automáticamente
ninguna reflexión se comparte automáticamente
ningún dato real es necesario
ninguna red es necesaria para el flujo principal
ninguna IA decide valor creativo
ninguna función de vigilancia está presente
toda exportación requiere revisión humana
toda curaduría es reversible
```

## 6. Relación con DFUX-TRZ-005

El kit propone que la definición anterior satisfaga la necesidad de delimitar
el MVP técnico. La deuda solo podrá cambiar de `blocked` a `resolved` mediante
decisión humana del gate y actualización canónica posterior.

## 7. Criterios de aceptación del MVP

- completar el flujo vertical con datos sintéticos;
- operar sin conexión;
- recuperar estado local;
- editar antes de confirmar;
- excluir datos personales;
- exportar un paquete validado por schema;
- importar el mismo paquete en prueba de roundtrip;
- revertir cada incremento mediante Git;
- pasar auditoría de alcance y no vigilancia.
