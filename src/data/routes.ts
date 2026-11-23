import type { TopicRoute } from "./types";

export const mainRoutes = [
  { title: "Interno", href: "/internos/" },
  { title: "Externo", href: "/externos/" },
] as const;

export const internalRoutes: TopicRoute[] = [
  { slug: "fase-folicular", title: "Fase folicular", href: "/internos/fase-folicular/", section: "internos" },
  { slug: "ovulacion", title: "Ovulación", href: "/internos/ovulacion/", section: "internos" },
  { slug: "fase-lutea", title: "Fase lútea", href: "/internos/fase-lutea/", section: "internos" },
  { slug: "fase-menstrual", title: "Fase menstrual", href: "/internos/fase-menstrual/", section: "internos" },
];

export const externalRoutes: TopicRoute[] = [
  { slug: "autopercepcion", title: "Autopercepción", href: "/externos/autopercepcion/", section: "externos" },
  { slug: "entorno", title: "Entorno", href: "/externos/entorno/", section: "externos" },
  { slug: "estres", title: "Estrés", href: "/externos/estres/", section: "externos" },
  { slug: "informacion", title: "Información y cuidados", href: "/externos/informacion/", section: "externos" },
  { slug: "sueno", title: "Sueño", href: "/externos/sueno/", section: "externos" },
  { slug: "tabues", title: "Tabúes", href: "/externos/tabues/", section: "externos" },
];

export const topicRoutes = [...internalRoutes, ...externalRoutes];
