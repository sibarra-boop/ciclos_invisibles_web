export type SectionId = "internos" | "externos";

export interface TopicRoute {
  slug: string;
  title: string;
  href: string;
  section: SectionId;
}

export interface TopicContent extends TopicRoute {
  description: string;
  image: string;
  imageAlt: string;
}
