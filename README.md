# 30 Aniversario DUE - Línea de Tiempo Interactiva

Este proyecto presenta una línea de tiempo interactiva de los hitos más importantes de la Fundación DUE, utilizando la librería [Timeline.js](https://timeline.knightlab.com/).

## Características

- Visualización de eventos históricos con imágenes y descripciones.
- Navegación horizontal tipo diapositiva.
- Avance automático de diapositivas (configurable en el script).
- Diseño responsivo y sencillo.

## Estructura del Proyecto

```
due/
├── images/           # Imágenes de los eventos
├── index.html        # Página principal
├── script.js         # Configuración y datos de Timeline.js
├── style.css         # Estilos personalizados
└── README.md         # Documentación del proyecto
```

## Instalación y Uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Marktuay/DUE.git
   ```
2. **Agrega tus imágenes en la carpeta `images/`** (puedes usar URLs externas).
3. **Edita los eventos en `script.js`** para personalizar títulos, fechas, textos e imágenes.
4. **Abre `index.html` en tu navegador** para ver la línea de tiempo.

## Personalización

- **Tiempo de avance automático:** Modifica el intervalo en milisegundos en el script para cambiar la velocidad de las diapositivas.
- **Estilos:** Personaliza `style.css` para adaptar colores, fuentes y tamaños.
- **Eventos:** Agrega, edita o elimina eventos en el array `events` de `script.js`.

## Dependencias

- [Timeline.js](https://timeline.knightlab.com/) (CDN incluido en el proyecto)

## Créditos

Desarrollado por Fundación DUE para la celebración de su 30 aniversario.

---