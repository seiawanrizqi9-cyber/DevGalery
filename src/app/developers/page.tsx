
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { developers } from "@/lib/data/developers";

export const metadata: Metadata = {
  title: "Explore Developers",
  description:
    "Discover developers, explore their skills, and browse the projects they create.",
};

export default function DevelopersPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <p className="text-sm font-medium text-primary">
              The people behind the code
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore developers
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Meet the people behind the projects, discover their
              technology stacks, and explore what they build.
            </p>

            <p className="mt-5 text-sm text-muted-foreground">
              {developers.length} developers
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {developers.map((developer) => (
              <Link
                key={developer.id}
                href={`/developers/${developer.slug}`}
                aria-label={`View ${developer.name}'s profile`}
                className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <article className="flex h-full flex-col rounded-xl border bg-card p-5 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-base font-bold text-primary">
                      {developer.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="truncate font-semibold group-hover:text-primary">
                        {developer.name}
                      </h2>

                      <p className="mt-1 truncate text-sm text-muted-foreground">
                        @{developer.username}
                      </p>

                      {developer.location && (
                        <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="size-3.5" />
                          {developer.location}
                        </p>
                      )}
                    </div>

                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>

                  <p className="mt-5 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {developer.bio}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 border-t pt-4">
                    {developer.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
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
