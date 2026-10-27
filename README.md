# Supermercado Abasto

Sitio web de supermercado desarrollado para la Actividad Formativa 1 de Desarrollo Frontend II (PFY2202). Utiliza HTML, CSS, JavaScript, React y React Router para navegar entre una página de inicio y dos páginas informativas.

El proyecto está configurado con Create React App. La navegación usa React Router v6.

## Ejecutar el proyecto

Necesitas Node.js 18 o superior y npm.

```bash
npm install
npm start
```

El sitio se abre en `http://localhost:3000`. Los cambios en el código se actualizan durante el desarrollo.

## Páginas y navegación

| Ruta                    | Página               | Contenido                                         |
| ----------------------- | -------------------- | ------------------------------------------------- |
| `/`                     | Inicio               | Presentación del supermercado y sus secciones.    |
| `/nuestras-tiendas`     | Nuestras tiendas     | Direcciones, horarios y servicios de los locales. |
| `/preguntas-frecuentes` | Preguntas frecuentes | Respuestas sobre tiendas, atención y contacto.    |

El menú superior utiliza `NavLink` para indicar la página activa. Las rutas se definen con `BrowserRouter`, `Routes` y `Route`; los enlaces internos usan `Link` para cambiar de vista sin recargar el sitio. Todas las páginas comparten la cabecera y el pie de contacto. Las direcciones inexistentes muestran una página con un enlace al inicio.

## Estructura

```text
public/
  index.html               Plantilla HTML
  images/                  Fotografías del sitio
src/
  index.js                 Inicio de React y BrowserRouter
  App.jsx                  Cabecera y configuración de rutas
  styles.css               Estilos y adaptación a móvil
  components/              Icono, encabezado de página y pie de contacto
  pages/                   Inicio, tiendas y preguntas frecuentes
```

## Generar la versión de producción

```bash
npm run build
```

Los archivos se generan en `build/`. Para publicarlos, el servidor debe redirigir las rutas de la aplicación a `index.html`.
