import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, CheckCircle2, Code2, ExternalLink } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { projects } from "@/lib/data/projects";

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
    <Suspense fallback={<ProjectDetailLoading />}>
      <ProjectDetailContent params={params} />
    </Suspense>
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
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const description = project.longDescription ?? project.description;

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>

          <section className="mt-8 overflow-hidden rounded-2xl border bg-card">
            <div
              className={`relative flex min-h-52 items-center justify-center overflow-hidden sm:min-h-72 ${project.accent}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />

              <div className="relative flex size-24 items-center justify-center rounded-3xl border border-white/30 bg-white/15 text-5xl font-bold text-white shadow-xl backdrop-blur-sm sm:size-32 sm:text-6xl">
                {project.initials}
              </div>

              <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                {project.category}
              </span>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-primary">
                    Community project
                  </p>

                  <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    {project.title}
                  </h1>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                    {description}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {project.owner.slice(0, 1).toUpperCase()}
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Created by
                      </p>
                      <p className="text-sm font-medium">{project.owner}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Live demo
                      <ExternalLink className="size-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent"
                    >
                      <Code2 className="size-4" />
                      Source code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section className="rounded-xl border bg-card p-5 sm:p-7">
              <div className="flex items-center gap-2">
                <Code2 className="size-5 text-primary" />
                <h2 className="text-lg font-semibold">About this project</h2>
              </div>

              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-muted-foreground">
                {description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-semibold">Key features</h3>

                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            <aside className="h-fit rounded-xl border bg-card p-5 sm:p-6">
              <h2 className="font-semibold">Technologies</h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Tools used to build this project.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t pt-5">
                <p className="text-xs text-muted-foreground">Category</p>
                <p className="mt-1 text-sm font-medium">{project.category}</p>
              </div>
            </aside>
          </div>

          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="size-4" />
              Explore more projects
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© 2026 DevGalery</span>
          <span>Made for the developer community.</span>
        </div>
      </footer>
    </>
  );
}
