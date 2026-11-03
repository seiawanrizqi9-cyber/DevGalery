
export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  technologies: string[];
  features?: string[];
  owner: string;
  initials: string;
  accent: string;
  githubUrl?: string;
  liveUrl?: string;
};
