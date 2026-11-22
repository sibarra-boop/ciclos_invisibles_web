import type { TopicContent } from "./types";

export const internos: Record<string, TopicContent> = {
  "fase-folicular": {
    slug: "fase-folicular",
    title: "Fase folicular",
    href: "/internos/fase-folicular/",
    section: "internos",
    description: "Es la primera parte del ciclo. Aquí comienza a prepararse un nuevo óvulo y aumenta gradualmente el estrógeno, lo que puede influir en la energía, el estado de ánimo y el deseo.",
    image: "/img/internos/folicular.svg",
    imageAlt: "Ilustración de la fase folicular",
  },
  ovulacion: {
    slug: "ovulacion",
    title: "Ovulación",
    href: "/internos/ovulacion/",
    section: "internos",
    description: "Es el momento en el que se libera un óvulo desde el ovario. Suele ocurrir hacia la mitad del ciclo, aunque el momento exacto puede variar.",
    image: "/img/internos/ovulacion.svg",
    imageAlt: "Ilustración de la ovulación",
  },
  "fase-lutea": {
    slug: "fase-lutea",
    title: "Fase lútea",
    href: "/internos/fase-lutea/",
    section: "internos",
    description: "Es la segunda parte del ciclo. El folículo que liberó el óvulo se transforma en cuerpo lúteo, que produce progesterona y prepara el cuerpo por si hubiera un embarazo.",
    image: "/img/internos/lutea.svg",
    imageAlt: "Ilustración de la fase lútea",
  },
  "fase-menstrual": {
    slug: "fase-menstrual",
    title: "Fase menstrual",
    href: "/internos/fase-menstrual/",
    section: "internos",
    description: "Es el inicio del ciclo. El revestimiento del útero se desprende y se expulsa en forma de sangrado, dando paso a un nuevo ciclo.",
    image: "/img/internos/menstruacion.svg",
    imageAlt: "Ilustración de la fase menstrual",
  },
};
