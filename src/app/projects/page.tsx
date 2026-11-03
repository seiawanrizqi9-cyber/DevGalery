
import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { ProjectsCatalog } from "@/components/projects/projects-catalog";

export const metadata: Metadata = {
  title: "Explore Projects",
  description:
    "Explore developer projects, discover technologies, and find inspiration for your next build.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-sm font-medium text-primary">
              Explore the community
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Discover projects built by developers.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Explore ideas, discover new technologies, and get
              inspired by what the developer community is building.
            </p>
          </div>
        </section>

        <section
          aria-label="Project catalog"
          className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
        >
          <ProjectsCatalog />
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
