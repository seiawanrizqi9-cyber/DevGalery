
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project"; 

export type ProjectCardData = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  owner: string;
  initials: string;
  accent: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div
        className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden ${project.accent}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10" />

        <div className="relative flex size-20 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-3xl font-bold text-white shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          {project.initials}
        </div>

        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.category}
        </span>

        <ArrowUpRight
          aria-hidden="true"
          className="absolute right-4 top-4 size-5 text-white opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="font-semibold tracking-tight">
            {project.title}
          </h3>

          <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 border-t pt-4">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
            {project.owner.slice(0, 1).toUpperCase()}
          </div>

          <span className="truncate text-sm text-muted-foreground">
            {project.owner}
          </span>
        </div>
      </div>
    </article>
  );
}
