# Plan de Datos Sintéticos y Pruebas · v0.8.0

## 1. Política

Durante v0.8.0, el MVP usa exclusivamente datos ficticios o sintéticos.

## 2. Fixtures mínimos

```text
usuario_sintetico:
  id_local: demo-user
  nombre_real: absent
  correo: absent

mision_sintetica:
  id: mission-demo-01
  titulo: Crear una microhistoria

actividad_sintetica:
  tipo: three_acts
  instrucciones: ficticias

evidencia_sintetica:
  contenido: texto inventado
  sensibilidad: low

reflexion_sintetica:
  contenido: reflexión ficticia
  visibility: private

portafolio_sintetico:
  items: curated_explicitly
```

## 3. Prohibiciones

- nombres reales;
- correos reales;
- datos de estudiantes;
- fotografías identificables;
- evidencia educativa real;
- prompts privados;
- enlaces privados reales;
- datos de investigación;
- credenciales.

## 4. Capas de prueba

### Unitarias

- objetos de dominio;
- invariantes;
- validación de schemas;
- transiciones de estado;
- minimización de datos;
- exportación.

### Integración

- misión a evidencia;
- evidencia a reflexión;
- curaduría;
- persistencia local;
- exportación e importación roundtrip.

### Alcance

- ausencia de red obligatoria;
- ausencia de dashboard;
- ausencia de datos reales;
- ausencia de IA embebida;
- capacidades sensibles desactivadas.

## 5. Criterio de salida

H08-2 no puede cerrarse si el corte vertical funciona solo visualmente pero no
posee pruebas de dominio, persistencia y reversibilidad.
