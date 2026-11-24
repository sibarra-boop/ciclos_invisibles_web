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

export interface InternalPhaseContent extends TopicContent {
  displayTitle?: string;
  feelings: string[];
  influence: string;
  phrases: string[];
  fact: string;
}
