# Ciclos Invisibles

Proyecto escolar hecho con [Astro](https://astro.build/). La versión nueva vive en `src/`; los HTML, CSS, JS e imágenes anteriores se conservan como referencia.

## Empezar en Mac

### 1. Instalar Node.js

Instalen [Node.js 26 LTS](https://nodejs.org/en/download/) y cierren y vuelvan a abrir la Terminal.

Comprueben la instalación:

```bash
node -v
npm -v
```

Este proyecto necesita Node `22.23.4` o superior. Recomendamos Node 26 LTS para que las dos trabajen con la misma versión.

### 2. Clonar el proyecto

```bash
git clone https://github.com/sibarra-boop/ciclos_invisibles_web.git
cd ciclos_invisibles_web
```

`git clone` descarga el proyecto. `cd` entra a su carpeta.

### 3. Instalar y arrancar

```bash
npm install
npm run dev
```

- `npm install`: instala Astro y las dependencias del proyecto. Sólo es necesario la primera vez o cuando cambie `package.json`.
- `npm run dev`: inicia el sitio para trabajar. Abran la dirección que aparece en la Terminal, normalmente [http://localhost:4321](http://localhost:4321).
- Para detenerlo: presionen `Control + C` en la Terminal.

Antes de entregar cambios:

```bash
npm run build
```

`npm run build` revisa el proyecto y genera la versión final en `dist/`. Si termina sin errores, el sitio puede publicarse.

## Dónde está cada cosa

```text
src/
├─ pages/         Vistas y rutas del sitio
├─ layouts/       Estructuras compartidas entre vistas
├─ components/    Encabezado, pie, navegación y secciones reutilizables
├─ data/          Textos, enlaces e imágenes de cada tema
└─ styles/        Estilos generales

public/img/       Imágenes que usa el sitio nuevo
img/              Imágenes y archivos de diseño originales
css/ y js/        Código original de referencia
internos/         HTML y contenido original de temas internos
externos/         HTML original de temas externos
```

Regla sencilla: normalmente se edita `src/`. No borren los archivos originales; sirven para comparar la migración.

## Cómo funcionan las vistas y rutas

Astro convierte cada archivo dentro de `src/pages/` en una URL.

| Archivo | Ruta en el navegador |
| --- | --- |
| `src/pages/index.astro` | `/` |
| `src/pages/internos/index.astro` | `/internos/` |
| `src/pages/internos/ovulacion/index.astro` | `/internos/ovulacion/` |
| `src/pages/externos/sueno/index.astro` | `/externos/sueno/` |

Las demás vistas siguen la misma regla: carpeta de la vista + `index.astro`.

Las listas de rutas y sus nombres están centralizadas en [`src/data/routes.ts`](./src/data/routes.ts). Si cambia una URL, actualicen la carpeta de `src/pages/` y también su enlace en ese archivo.

## Cómo funcionan los layouts

Un layout es la plantilla común que envuelve una vista.

- [`BaseLayout.astro`](./src/layouts/BaseLayout.astro) crea el documento HTML, título, encabezado y pie. Lo usan todas las páginas.
- [`TopicLayout.astro`](./src/layouts/TopicLayout.astro) crea la estructura común de cada tema: categoría, título, descripción, imagen y navegación.
- `<slot />` indica el lugar donde una vista puede agregar contenido propio.

Si algo debe cambiar en **todo el sitio**, revisen `BaseLayout`. Si debe cambiar en **todos los temas**, revisen `TopicLayout`.

## Ejemplo: editar Ovulación

La ruta `/internos/ovulacion/` usa tres partes:

1. [`src/pages/internos/ovulacion/index.astro`](./src/pages/internos/ovulacion/index.astro) define la vista y selecciona sus datos.
2. [`src/data/internos.ts`](./src/data/internos.ts) contiene el título, descripción e imagen de `ovulacion`.
3. [`src/layouts/TopicLayout.astro`](./src/layouts/TopicLayout.astro) decide cómo se muestran esos datos.

Para cambiar sólo el texto o la imagen de Ovulación, editen esta entrada en `src/data/internos.ts`:

```ts
ovulacion: {
  title: "Ovulación",
  description: "Texto de la vista...",
  image: "/img/internos/ovulacion.svg",
}
```

Para reemplazar la imagen:

1. Guarden el nuevo archivo en `public/img/internos/`.
2. Cambien `image` en `src/data/internos.ts`.
3. Mantengan un texto claro en `imageAlt`.

Los temas externos funcionan igual, pero sus textos están en [`src/data/externos.ts`](./src/data/externos.ts).

## Qué archivo editar según el cambio

| Quiero cambiar… | Archivo o carpeta |
| --- | --- |
| Texto o imagen de una fase | `src/data/internos.ts` |
| Texto o imagen de un factor externo | `src/data/externos.ts` |
| Orden, nombre o enlace de navegación | `src/data/routes.ts` |
| Encabezado | `src/components/layout/SiteHeader.astro` |
| Pie de página | `src/components/layout/SiteFooter.astro` |
| Estructura de todos los temas | `src/layouts/TopicLayout.astro` |
| Colores y estilos generales | `src/styles/global.css` |
| Una imagen publicada | `public/img/` |

## Referencias del diseño original

- [Inicio original](./index.html)
- [Portada original de Internos](./internos/index.html)
- [Portada original de Externos](./externos/index.html)
- [Contenido original de las fases](./internos/index.md)
- [CSS original general](./css/style.css)

Usen estas referencias para comparar contenido y apariencia. La implementación nueva siempre se hace dentro de `src/`.

## Versiones verificadas

- Astro `7.4.13`.
- Node.js `22.23.4` como mínimo; Node 26 LTS recomendado para Mac.
- No se usan React, Vue ni dependencias adicionales.

Referencias oficiales:

- [Instalar Astro](https://docs.astro.build/en/install-and-setup/)
- [Estructura de un proyecto Astro](https://docs.astro.build/en/basics/project-structure/)
- [Páginas y rutas](https://docs.astro.build/en/basics/astro-pages/)
- [Layouts](https://docs.astro.build/en/basics/layouts/)
