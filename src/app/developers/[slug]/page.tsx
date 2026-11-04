import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin, Globe, Code2 } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { developers } from "@/lib/data/developers";
import { projects } from "@/lib/data/projects";

type DeveloperDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: DeveloperDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const developer = developers.find((item) => item.slug === slug);

  if (!developer) {
    return {
      title: "Developer Not Found | DevGalery",
    };
  }

  return {
    title: `${developer.name} | DevGalery`,
    description: developer.bio,
  };
}

export default function DeveloperDetailPage({
  params,
}: DeveloperDetailPageProps) {
  return (
    <>
      <SiteHeader />

      <Suspense fallback={<DeveloperProfileLoading />}>
        <DeveloperProfileContent params={params} />
      </Suspense>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          © 2026 DevGalery. Built for developers.
        </div>
      </footer>
    </>
  );
}

function DeveloperProfileLoading() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
      <div className="animate-pulse space-y-6">
        <div className="h-5 w-36 rounded bg-muted" />

        <div className="rounded-3xl border border-border p-8">
          <div className="h-20 w-20 rounded-2xl bg-muted" />
          <div className="mt-5 h-8 w-56 rounded bg-muted" />
          <div className="mt-4 h-4 w-full max-w-xl rounded bg-muted" />
          <div className="mt-3 h-4 w-full max-w-md rounded bg-muted" />
        </div>

        <div className="h-7 w-56 rounded bg-muted" />
        <div className="h-10 w-full max-w-lg rounded bg-muted" />
      </div>
    </main>
  );
}

async function DeveloperProfileContent({ params }: DeveloperDetailPageProps) {
  const { slug } = await params;

  const developer = developers.find((item) => item.slug === slug);

  if (!developer) {
    notFound();
  }

  const developerProjects = projects.filter(
    (project) => project.owner === developer.name,
  );

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link
          href="/developers"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to developers
        </Link>

        {/* Developer profile */}
        <section className="rounded-3xl border border-border bg-card p-6 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex size-24 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-3xl font-bold text-primary">
              {developer.initials}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {developer.name}
              </h1>

              <p className="mt-2 text-muted-foreground">
                @{developer.username}
              </p>

              {developer.location && (
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  {developer.location}
                </p>
              )}

              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
                {developer.bio}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {developer.githubUrl && (
                  <a
                    href={developer.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    <Code2 size={16} />
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>
                )}

                {developer.websiteUrl && (
                  <a
                    href={developer.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    <Globe size={16} />
                    Website
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">
            Skills &amp; Technologies
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Technologies this developer works with.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {developer.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Developer projects */}
        <section className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Projects created by {developer.name}.
              </p>
            </div>

            <span className="text-sm text-muted-foreground">
              {developerProjects.length}{" "}
              {developerProjects.length === 1 ? "project" : "projects"}
            </span>
          </div>

          {developerProjects.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {developerProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div
                    className={`flex h-32 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent}`}
                  >
                    <Code2 size={36} className="text-white" />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-3">
                    <h3 className="font-semibold">{project.title}</h3>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    />
                  </div>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-border px-6 py-12 text-center">
              <Code2 size={32} className="mx-auto text-muted-foreground" />

              <h3 className="mt-4 font-semibold">No projects yet</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                This developer has not published any projects yet.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
