/*
 * Las imágenes viven en /img (raíz del proyecto), no en /public.
 * Vite las procesa en el build: cada archivo usado recibe una URL con hash en dist/_astro/.
 *
 * En los datos y componentes se siguen escribiendo rutas tipo "/img/internos/ovulacion.svg";
 * estas funciones las traducen a la URL final o al contenido del SVG.
 */

const urls = import.meta.glob<string>("/img/**/*.{svg,png,jpg,jpeg,webp,gif}", {
  eager: true,
  query: "?url",
  import: "default",
});

const svgSources = import.meta.glob<string>("/img/**/*.svg", {
  eager: true,
  query: "?raw",
  import: "default",
});

function lookup<T>(files: Record<string, T>, path: string): T {
  const file = files[path];
  if (file === undefined) {
    throw new Error(`No existe el archivo "${path}". Revisen que esté dentro de /img con ese nombre exacto.`);
  }
  return file;
}

/** URL pública de una imagen de /img, para usar en src="…". */
export function assetUrl(path: string): string {
  return lookup(urls, path);
}

/**
 * Contenido de un SVG de /img para insertarlo inline con <Fragment set:html={…} />.
 * Inline, el SVG hereda la tipografía Ciclos de la página y sus links funcionan;
 * dentro de <img> ninguna de las dos cosas pasa.
 * Se quita su @font-face porque apunta a ../fonts/ relativo al SVG y, inline,
 * esa ruta no existe; la fuente ya la declara css/style.css.
 */
export function inlineSvg(path: string): string {
  return lookup(svgSources, path)
    .replace(/<\?xml[^>]*\?>\s*/, "")
    .replace(/@font-face\s*\{[^}]*\}/g, "");
}
