# Nota de implementación arquitectónica · H08-2.2

## Dependencias runtime permitidas

```yaml
react: 19.2.7
react-dom: 19.2.7
```

No se permiten otras dependencias runtime.

## Herramientas de desarrollo fijadas

```yaml
vite: 8.1.4
vite_plugin_react: 6.0.3
testing_library_react: 16.3.2
testing_library_dom: 10.4.1
testing_library_user_event: 14.6.1
jsdom: 29.1.1
```

## Consecuencia

La capa `presentation` existe por primera vez. La auditoría arquitectónica pasa
de prohibirla a exigirla, pero mantiene bloqueados adaptadores, red y
almacenamiento dentro de esa capa.
