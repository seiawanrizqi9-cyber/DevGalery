import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { projects } from "@/lib/data/projects";
import { developers } from "@/lib/data/developers";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

async function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  return (
    <>
      <SiteHeader />

      <Suspense fallback={<ProjectDetailLoading />}>
        <ProjectDetailContent params={params} />
      </Suspense>
    </>
  );
}

function ProjectDetailLoading() {
  return (
    <main className="mx-auto min-h-[60vh] max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-5">
        <div className="h-4 w-36 rounded bg-muted" />
        <div className="h-64 rounded-2xl bg-muted" />
        <div className="h-8 w-2/3 rounded bg-muted" />
        <div className="h-4 w-full max-w-2xl rounded bg-muted" />
      </div>
    </main>
  );
}

async function ProjectDetailContent({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const developer = developers.find((item) => item.name === project.owner);

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Project hero */}
        <section className="overflow-hidden rounded-3xl border border-border bg-card">
          <div
            className={`relative flex h-64 items-center justify-center bg-gradient-to-br sm:h-80 ${project.accent}`}
          >
            <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              {project.category}
            </span>

            <div className="flex size-32 items-center justify-center rounded-3xl border border-white/20 bg-white/15 text-6xl font-bold text-white shadow-lg backdrop-blur-sm">
              {project.initials.charAt(0)}
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <p className="font-medium text-primary">Community project</p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted-foreground sm:text-lg">
              {project.longDescription ?? project.description}
            </p>

            {/* Clickable developer identity */}
            <div className="mt-8">
              {developer ? (
                <Link
                  href={`/developers/${developer.slug}`}
                  className="group inline-flex items-center gap-3 rounded-xl transition-opacity hover:opacity-80"
                  aria-label={`Lihat profil ${developer.name}`}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                    {developer.initials.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Created by</p>
                    <p className="font-medium transition-colors group-hover:text-primary">
                      {developer.name}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="inline-flex items-center gap-3">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                    {project.initials.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Created by</p>
                    <p className="font-medium">{project.owner}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Project details */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {project.features && project.features.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h2 className="flex items-center gap-3 text-xl font-bold">
                  <Code2 size={22} className="text-primary" />
                  About this project
                </h2>

                <ul className="mt-6 space-y-4">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-7">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Technologies and project links */}
          <aside className="space-y-6">
            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-bold">Technologies</h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Tools used to build this project.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            {(project.liveUrl || project.githubUrl) && (
              <section className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-bold">Project links</h2>

                <div className="mt-4 flex flex-col gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                    >
                      <Code2 size={16} />
                      Source Code
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </section>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
