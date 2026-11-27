# Ciclos Invisibles

Astro Template [Astro](https://astro.build/). La versión nueva vive en `src/`; los HTML, CSS, JS e imágenes anteriores se conservan como referencia.

## Empezar en Mac

### 1. Instalar Node.js

Si todavía no tienen Node.js, instalen una versión LTS desde [nodejs.org](https://nodejs.org/en/download/) y cierren y vuelvan a abrir la Terminal.

Comprueben la instalación:

```bash
node -v
npm -v
```

El proyecto funciona con Node 18.20.8, Node 20.3 o superior y las versiones posteriores. Si `npm install` muestra un error de versión, actualicen Node desde el enlace anterior.

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

Para revisar esa versión final en el navegador:

```bash
npm run preview
```

`npm run preview` sirve sólo para revisar el resultado de `npm run build`; para trabajar normalmente usen `npm run dev`.

## Dónde está cada cosa

```text
src/
├─ pages/         Vistas y rutas del sitio
├─ layouts/       Estructuras compartidas entre vistas
├─ components/    Encabezado, pie, navegación y secciones reutilizables
├─ data/          Textos, enlaces e imágenes de cada tema
├─ lib/assets.ts  Convierte rutas "/img/..." en la URL final o en el SVG inline
└─ styles/        Estilos generales

img/              Imágenes del sitio (las usa Astro desde aquí; ya no existe public/)
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
- [`InternalPhaseLayout.astro`](./src/layouts/InternalPhaseLayout.astro) comparte la estructura visual y navegación de las cuatro fases internas.
- [`TopicLayout.astro`](./src/layouts/TopicLayout.astro) crea la estructura común de los temas externos.
- `<slot />` indica el lugar donde una vista puede agregar contenido propio.

Si algo debe cambiar en **todo el sitio**, revisen `BaseLayout`. Para las fases internas, revisen `InternalPhaseLayout`; para los temas externos, `TopicLayout`.

## Ejemplo: editar Ovulación

Las cuatro rutas de fases internas comparten `InternalPhaseLayout`. En Ovulación:

1. [`src/pages/internos/ovulacion/index.astro`](./src/pages/internos/ovulacion/index.astro) selecciona los datos y pasa el SVG para insertarlo inline.
2. [`src/data/internos.ts`](./src/data/internos.ts) contiene el título, descripción, imagen, sensaciones, influencia, frases y dato de cada fase.
3. [`src/layouts/InternalPhaseLayout.astro`](./src/layouts/InternalPhaseLayout.astro) muestra esos datos con el diseño compartido y marca la fase activa en la navegación.

Para cambiar sólo el texto o la imagen de Ovulación, editen esta entrada en `src/data/internos.ts`:

```ts
ovulacion: {
  title: "Ovulación",
  description: "Texto de la vista...",
  image: "/img/internos/ovulacion.svg",
  feelings: ["Cambios de energía", "Cambios en el deseo"],
  influence: "Texto sobre otros factores...",
  phrases: ["Frase uno", "Frase dos"],
  fact: "Dato relacionado con la fase...",
}
```

Para reemplazar la imagen:

1. Guarden el nuevo archivo en `img/internos/`.
2. Cambien `image` en `src/data/internos.ts`.
3. Mantengan un texto claro en `imageAlt`.

Los temas externos funcionan igual, pero sus textos están en [`src/data/externos.ts`](./src/data/externos.ts).

## Qué archivo editar según el cambio

| Quiero cambiar… | Archivo o carpeta |
| --- | --- |
| Contenido de una fase | `src/data/internos.ts` |
| Texto o imagen de un factor externo | `src/data/externos.ts` |
| Orden, nombre o enlace de navegación | `src/data/routes.ts` |
| Encabezado | `src/components/layout/SiteHeader.astro` |
| Pie de página | `src/components/layout/SiteFooter.astro` |
| Estructura de las fases internas | `src/layouts/InternalPhaseLayout.astro` |
| Estructura de los temas externos | `src/layouts/TopicLayout.astro` |
| Colores y estilos generales | `src/styles/global.css` |
| Una imagen | `img/` (y su ruta en `src/data/`) |
| Navegación "El ciclo" de las fases | `src/components/navigation/CycleNav.astro` |
| Portada de Interno / Externo | `src/components/sections/TopicHome.astro` |

## Referencias del diseño original

- [Inicio original](./index.html)
- [Portada original de Internos](./internos/index.html)
- [Portada original de Externos](./externos/index.html)
- [Contenido original de las fases](./internos/index.md)
- [CSS original general](./css/style.css)

Usen estas referencias para comparar contenido y apariencia. La implementación nueva siempre se hace dentro de `src/`.

## Versiones verificadas

- Astro `5.16.6`, fijado para evitar actualizaciones inesperadas y mantener compatibilidad con instalaciones anteriores de Node.
- Compatible con Node 18.20.8, Node 20.3 o superior y versiones posteriores.
- No se usan React, Vue ni dependencias adicionales.

Referencias oficiales:

- [Instalar Astro](https://docs.astro.build/en/install-and-setup/)
- [Estructura de un proyecto Astro](https://docs.astro.build/en/basics/project-structure/)
- [Páginas y rutas](https://docs.astro.build/en/basics/astro-pages/)
- [Layouts](https://docs.astro.build/en/basics/layouts/)
