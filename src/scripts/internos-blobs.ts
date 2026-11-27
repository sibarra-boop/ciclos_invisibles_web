/*
 * Animación orgánica de los blobs del diagrama de /internos (GSAP).
 *
 * Cada blob es un <path> cerrado hecho de curvas cúbicas. Se separa en vértices
 * (puntos de anclaje) y cada vértice arrastra sus dos manijas, así la curva se
 * deforma sin quebrarse. El path se vuelve a dibujar en cada frame con:
 *
 *   posición = original + ola (animación de ciclo) + mouse (atracción al cursor)
 *
 * - Click en "Explora las fases": las cuatro fases ondulan una tras otra
 *   (orden del ciclo) y, dentro de cada blob, los vértices se mueven en stagger
 *   alternando hacia afuera y hacia adentro mientras el brillo sube y baja.
 * - Hover en una fase: repite la ola en ese blob, y con mousemove los vértices
 *   cercanos al cursor se estiran hacia él.
 * - Con "reducir movimiento" activado en el sistema no se anima nada.
 */
import { gsap } from "gsap";

type Point = { x: number; y: number };
type Segment = { c1: Point; c2: Point; end: Point };

interface Vertex {
  base: Point;
  normal: Point; // dirección hacia afuera del blob
  wave: { amount: number }; // desplazamiento a lo largo de la normal
  mouse: Point; // desplazamiento libre por el cursor
  moveMouseX: (value: number) => void;
  moveMouseY: (value: number) => void;
}

interface Blob {
  path: SVGPathElement;
  start: Point;
  segments: Segment[];
  vertices: Vertex[];
  // vertices[i] arrastra la manija de salida (c1 de segments[i]) y la de llegada (c2 de segments[i-1])
  closesOnStart: boolean;
  wave?: gsap.core.Timeline;
  dirty: boolean;
}

const WAVE_AMPLITUDE = 14; // unidades del viewBox
const MOUSE_RADIUS = 150;
const MOUSE_PULL = 0.32;
const MOUSE_MAX = 26;

/* ---------- Parser de paths (M, L, C, S, Z en absoluto y relativo) ---------- */

function parsePath(d: string): { start: Point; segments: Segment[] } {
  const tokens = d.match(/[a-zA-Z]|-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?/g) ?? [];
  const segments: Segment[] = [];
  let i = 0;
  let command = "";
  let current: Point = { x: 0, y: 0 };
  let start: Point = { x: 0, y: 0 };
  let lastControl: Point | null = null;

  const isCommand = (token: string) => /^[a-zA-Z]$/.test(token);
  const read = (relative: boolean): Point => {
    const x = parseFloat(tokens[i++]);
    const y = parseFloat(tokens[i++]);
    return relative ? { x: current.x + x, y: current.y + y } : { x, y };
  };

  while (i < tokens.length) {
    if (isCommand(tokens[i])) command = tokens[i++];
    const relative = command === command.toLowerCase();

    switch (command.toUpperCase()) {
      case "M":
        current = read(relative);
        start = { ...current };
        lastControl = null;
        command = relative ? "l" : "L"; // pares extra después de M son líneas
        break;
      case "L": {
        const end = read(relative);
        segments.push({ c1: { ...current }, c2: { ...end }, end });
        current = end;
        lastControl = null;
        break;
      }
      case "C": {
        const c1 = read(relative);
        const c2 = read(relative);
        const end = read(relative);
        segments.push({ c1, c2, end });
        current = end;
        lastControl = c2;
        break;
      }
      case "S": {
        const c1 = lastControl
          ? { x: 2 * current.x - lastControl.x, y: 2 * current.y - lastControl.y }
          : { ...current };
        const c2 = read(relative);
        const end = read(relative);
        segments.push({ c1, c2, end });
        current = end;
        lastControl = c2;
        break;
      }
      case "Z":
        current = { ...start };
        lastControl = null;
        break;
      default:
        throw new Error(`internos-blobs: comando de path no soportado "${command}"`);
    }
  }

  return { start, segments };
}

/* ---------- Construcción y dibujo de cada blob ---------- */

function createBlob(path: SVGPathElement): Blob {
  const { start, segments } = parsePath(path.getAttribute("d") ?? "");
  const last = segments[segments.length - 1].end;
  const closesOnStart = Math.hypot(last.x - start.x, last.y - start.y) < 0.5;

  // Vértice 0 = inicio; vértice k = final del segmento k-1.
  const anchors = [start, ...segments.map((segment) => segment.end)];
  if (closesOnStart) anchors.pop(); // el último coincide con el primero

  const center = anchors.reduce((sum, p) => ({ x: sum.x + p.x / anchors.length, y: sum.y + p.y / anchors.length }), { x: 0, y: 0 });

  const vertices = anchors.map((base): Vertex => {
    const length = Math.hypot(base.x - center.x, base.y - center.y) || 1;
    const mouse = { x: 0, y: 0 };
    return {
      base,
      normal: { x: (base.x - center.x) / length, y: (base.y - center.y) / length },
      wave: { amount: 0 },
      mouse,
      moveMouseX: gsap.quickTo(mouse, "x", { duration: 0.6, ease: "power3.out" }),
      moveMouseY: gsap.quickTo(mouse, "y", { duration: 0.6, ease: "power3.out" }),
    };
  });

  return { path, start, segments, vertices, closesOnStart, dirty: false };
}

function offsetOf(vertex: Vertex): Point {
  return {
    x: vertex.normal.x * vertex.wave.amount + vertex.mouse.x,
    y: vertex.normal.y * vertex.wave.amount + vertex.mouse.y,
  };
}

const fmt = (n: number) => Math.round(n * 100) / 100;
const shift = (p: Point, o: Point) => `${fmt(p.x + o.x)},${fmt(p.y + o.y)}`;

function render(blob: Blob) {
  const offsets = blob.vertices.map(offsetOf);
  const count = blob.vertices.length;
  // vértice que arrastra el final del segmento i
  const endVertex = (i: number) => (blob.closesOnStart ? (i + 1) % count : i + 1);

  let d = `M${shift(blob.start, offsets[0])}`;
  blob.segments.forEach((segment, i) => {
    const from = offsets[i];
    const to = offsets[endVertex(i)];
    d += `C${shift(segment.c1, from)} ${shift(segment.c2, to)} ${shift(segment.end, to)}`;
  });
  blob.path.setAttribute("d", `${d}Z`);
  blob.dirty = false;
}

/* ---------- Animaciones ---------- */

/** Una vuelta completa de la ola: cada vértice sale, entra y regresa, en stagger. */
function waveTimeline(blob: Blob): gsap.core.Timeline {
  const markDirty = () => (blob.dirty = true);
  const tl = gsap.timeline({ onUpdate: markDirty, onComplete: markDirty });

  blob.vertices.forEach((vertex, index) => {
    const direction = index % 2 === 0 ? 1 : -1; // alterna afuera / adentro
    const amplitude = WAVE_AMPLITUDE * gsap.utils.random(0.7, 1.15);
    tl.to(
      vertex.wave,
      {
        keyframes: [
          { amount: amplitude * direction, duration: 0.55, ease: "sine.out" },
          { amount: -amplitude * direction * 0.45, duration: 0.6, ease: "sine.inOut" },
          { amount: 0, duration: 0.75, ease: "elastic.out(1, 0.5)" },
        ],
      },
      index * 0.09,
    );
  });

  // Brillo: sube, baja un poco por debajo de lo normal y regresa.
  tl.to(
    blob.path,
    {
      keyframes: [
        { "--blob-brightness": 1.35, duration: 0.6, ease: "sine.out" },
        { "--blob-brightness": 0.9, duration: 0.6, ease: "sine.inOut" },
        { "--blob-brightness": 1, duration: 0.6, ease: "sine.inOut" },
      ],
    },
    0,
  );

  return tl;
}

function playWave(blob: Blob, delay = 0) {
  if (blob.wave?.isActive()) return; // deja terminar la vuelta actual
  blob.wave?.kill();
  blob.wave = waveTimeline(blob).delay(delay);
}

function followPointer(blob: Blob, event: PointerEvent) {
  const matrix = blob.path.getScreenCTM();
  if (!matrix) return;
  const pointer = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());

  for (const vertex of blob.vertices) {
    const dx = pointer.x - vertex.base.x;
    const dy = pointer.y - vertex.base.y;
    const distance = Math.hypot(dx, dy);
    const falloff = Math.max(0, 1 - distance / MOUSE_RADIUS) ** 2;
    const scale = distance > 0 ? Math.min(MOUSE_MAX, distance * MOUSE_PULL * falloff) / distance : 0;
    vertex.moveMouseX(dx * scale);
    vertex.moveMouseY(dy * scale);
  }
}

function releasePointer(blob: Blob) {
  for (const vertex of blob.vertices) {
    vertex.moveMouseX(0);
    vertex.moveMouseY(0);
  }
}

/* ---------- Conexión con la vista ---------- */

function init() {
  const figure = document.querySelector<HTMLElement>(".internos-home__graphic");
  if (!figure || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Un blob por fase: el <path> directo dentro de su <a>. El orden del SVG ya es el del ciclo.
  const byHref = new Map<string, Blob>();
  for (const path of figure.querySelectorAll<SVGPathElement>("a[href] > path")) {
    const href = path.parentElement?.getAttribute("href");
    if (href && !byHref.has(href)) byHref.set(href, createBlob(path));
  }
  const blobs = [...byHref.values()];
  if (blobs.length === 0) return;

  // Redibuja sólo lo que se está moviendo (la ola marca dirty; el mouse se revisa por valor).
  gsap.ticker.add(() => {
    for (const blob of blobs) {
      const mouseMoving = blob.vertices.some((v) => Math.abs(v.mouse.x) > 0.01 || Math.abs(v.mouse.y) > 0.01);
      if (blob.dirty || mouseMoving || blob.path.dataset.mouse === "settling") {
        render(blob);
        blob.path.dataset.mouse = mouseMoving ? "settling" : "";
      }
    }
  });

  // Hover y mousemove: tanto la forma como la etiqueta de la fase activan su blob.
  for (const link of figure.querySelectorAll<SVGAElement>("a[href]")) {
    const blob = byHref.get(link.getAttribute("href") ?? "");
    if (!blob) continue;
    link.addEventListener("pointerenter", () => playWave(blob));
    link.addEventListener("pointermove", (event) => followPointer(blob, event));
    link.addEventListener("pointerleave", () => releasePointer(blob));
    link.addEventListener("focus", () => playWave(blob));
  }

  // "Explora las fases": lleva al diagrama si no está a la vista y recorre el ciclo.
  const button = document.querySelector<HTMLAnchorElement>('.internos-home .button[href="#fases"]');
  button?.addEventListener("click", (event) => {
    event.preventDefault();
    const rect = figure.getBoundingClientRect();
    const visible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (!visible) figure.scrollIntoView({ behavior: "smooth", block: "center" });
    history.replaceState(null, "", "#fases");

    blobs.forEach((blob, index) => {
      blob.wave?.kill();
      blob.wave = undefined;
      playWave(blob, (visible ? 0 : 0.45) + index * 0.35);
    });
  });
}

init();
