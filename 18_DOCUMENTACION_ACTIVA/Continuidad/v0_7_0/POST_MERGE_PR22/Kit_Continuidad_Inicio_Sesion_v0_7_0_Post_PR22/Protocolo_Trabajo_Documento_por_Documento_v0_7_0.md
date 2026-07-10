# Protocolo de Trabajo Documento por Documento · AI StoryLab 1 v0.7.0

## 1. Principio

v0.7.0 avanza documento por documento. Ningún documento se integra sin aprobación humana explícita.

---

## 2. Ciclo de cada documento

```yaml
ciclo_documental:
  1_proposito:
    descripcion: Definir para qué existe el documento.
  2_alcance:
    descripcion: Delimitar qué incluye y qué excluye.
  3_arquitectura:
    descripcion: Proponer estructura antes de redactar.
  4_redaccion:
    descripcion: Crear versión inicial completa.
  5_revision:
    descripcion: Evaluar coherencia, riesgos y continuidad.
  6_aprobacion_humana:
    descripcion: Recibir aprobación explícita.
  7_integracion:
    descripcion: Preparar archivo descargable, ruta, commit y comentario.
  8_verificacion:
    descripcion: Confirmar que quedó en PR o main.
  9_transferencia:
    descripcion: Registrar continuidad hacia el siguiente documento.
```

---

## 3. Criterios mínimos de calidad

Todo documento de v0.7.0 debe incluir:

- propósito;
- alcance;
- límites;
- relación con v1.0.0;
- riesgos;
- deuda vinculada;
- decisiones abiertas;
- próximos pasos;
- estado de aprobación.

---

## 4. Lenguaje de control

Evitar verbos que sugieran implementación cuando el documento sea conceptual:

```yaml
preferir:
  - mapear
  - definir
  - delimitar
  - analizar
  - especificar
  - proponer
  - preparar

evitar_si_no_autorizado:
  - implementar
  - desplegar
  - activar
  - conectar
  - ejecutar
  - procesar_datos_reales
```

---

## 5. Compuertas humanas

```yaml
requiere_aprobacion_humana_explicita:
  crear_documento_canonico: true
  integrar_documento: true
  cerrar_documento: true
  abrir_PR: true
  merge_PR: true
  cambiar_de_fase: true
  iniciar_implementacion: true
```
