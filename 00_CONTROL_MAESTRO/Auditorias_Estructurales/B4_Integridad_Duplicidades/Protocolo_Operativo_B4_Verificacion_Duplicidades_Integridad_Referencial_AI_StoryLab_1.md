# Protocolo Operativo B4 · Verificación de Duplicidades e Integridad Referencial
## AI StoryLab 1

**Estado:** Propuesta operativa para ejecución dentro del PR #25  
**Principio:** Evidencia antes de dictamen

---

## 1. Secuencia

1. detectar coincidencias por nombre;
2. agrupar familias normalizadas;
3. comparar hash cuando el contenido esté disponible;
4. comparar encabezados y metadatos;
5. identificar referencias entrantes;
6. identificar referencias salientes;
7. determinar autoridad y vigencia;
8. clasificar el caso;
9. elevar decisión humana.

---

## 2. Clases posibles

```text
D0  no duplicado;
D1  homónimo legítimo;
D2  versión histórica legítima;
D3  derivado o plantilla legítima;
D4  duplicado de contenido pendiente de decisión;
D5  residuo editorial probable;
D6  ruta no canónica con dependencia activa;
D7  referencia rota;
D8  conflicto de autoridad;
```

---

## 3. Evidencia mínima

Ningún caso podrá clasificarse como duplicado eliminable sin:

- hash o comparación de contenido;
- identificación de ruta canónica;
- revisión de referencias;
- revisión de historial;
- evaluación de impacto;
- aprobación humana.

---

## 4. Restricción

B4 identifica y clasifica. No ejecuta correcciones.
