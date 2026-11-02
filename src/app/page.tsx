import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import {
  ProjectCard,
  type ProjectCardData,
} from "@/components/shared/project-card";

const projects: ProjectCardData[] = [
  {
    id: "01",
    title: "Flowboard",
    description:
      "A collaborative workspace for organizing tasks, tracking progress, and keeping teams in sync.",
    category: "Web App",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    owner: "Nadia Putri",
    initials: "F",
    accent: "bg-gradient-to-br from-indigo-500 to-violet-700",
  },
  {
    id: "02",
    title: "Lumina UI",
    description:
      "A collection of accessible interface patterns designed for modern web applications.",
    category: "UI / Design",
    technologies: ["React", "Tailwind CSS"],
    owner: "Arif Pratama",
    initials: "L",
    accent: "bg-gradient-to-br from-cyan-500 to-blue-700",
  },
  {
    id: "03",
    title: "Pocket Ledger",
    description:
      "A simple personal finance dashboard for understanding spending habits and monthly budgets.",
    category: "Fintech",
    technologies: ["Next.js", "Prisma"],
    owner: "Maya Sari",
    initials: "P",
    accent: "bg-gradient-to-br from-emerald-500 to-teal-800",
  },
];

const developers = [
  {
    name: "Nadia Putri",
    username: "@nadiaputri",
    specialty: "Full-stack developer",
    initials: "NP",
  },
  {
    name: "Arif Pratama",
    username: "@arifcodes",
    specialty: "Frontend developer",
    initials: "AP",
  },
  {
    name: "Maya Sari",
    username: "@mayabuilds",
    specialty: "Product engineer",
    initials: "MS",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-primary" />A space for builders
              and creators
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your work deserves
              <span className="block text-primary">to be discovered.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Discover inspiring developer projects, explore new technologies,
              and build a portfolio that shows what you can create.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#projects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore projects
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#developers"
                className="inline-flex h-11 items-center justify-center rounded-lg border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Meet the developers
              </Link>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Built by developers, for developers.
            </p>
          </div>
        </section>

        <section id="projects" className="border-t bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-primary">
                  Made by the community
                </p>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Projects worth exploring
                </h2>

                <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                  A glimpse of what developers can build with creativity and
                  code.
                </p>
              </div>

              <span className="text-sm text-muted-foreground">
                Featured projects
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="developers"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mb-8 space-y-2">
            <p className="text-sm font-medium text-primary">
              The people behind the projects
            </p>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Meet the developers
            </h2>

            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              Get inspired by developers sharing what they build and the
              technologies they use.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {developers.map((developer) => (
              <article
                key={developer.username}
                className="flex items-center gap-4 rounded-xl border bg-card p-5 transition-colors hover:bg-accent/40"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {developer.initials}
                </div>

                <div className="min-w-0 space-y-1">
                  <h3 className="truncate text-sm font-semibold">
                    {developer.name}
                  </h3>

                  <p className="truncate text-xs text-muted-foreground">
                    {developer.username}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {developer.specialty}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-t bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Build something. Share it with the world.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              DevGalery is a place to showcase your projects, document your
              stack, and let others discover what you are capable of building.
            </p>

            <p className="mt-6 text-xs text-muted-foreground">
              More ways to showcase your work are coming soon.
            </p>
          </div>
        </section>
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
