
"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/lib/data/projects";

export function ProjectsCatalog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(projects.map((project) => project.category)),
      ),
    ],
    [],
  );

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory;

      const searchableText = [
        project.title,
        project.description,
        project.category,
        project.owner,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  function resetFilters() {
    setSearch("");
    setActiveCategory("All");
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row">
        <label className="relative block flex-1">
          <span className="sr-only">Search projects</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects, technologies, developers..."
            className="h-11 w-full rounded-lg border bg-background pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30"
          />
        </label>

        <div className="flex h-11 items-center gap-2 text-sm text-muted-foreground">
          <SlidersHorizontal className="size-4" />
          <span>Filter by category</span>
        </div>
      </div>

      <div
        className="flex flex-wrap gap-2"
        aria-label="Project categories"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
              className={
                isActive
                  ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  : "rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-4">
        <p
          className="text-sm text-muted-foreground"
          aria-live="polite"
        >
          Showing{" "}
          <span className="font-medium text-foreground">
            {filteredProjects.length}
          </span>{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>

        {(search || activeCategory !== "All") && (
          <button
            type="button"
            onClick={resetFilters}
            className="text-sm font-medium text-primary hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed px-6 py-16 text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-muted">
            <Search className="size-5 text-muted-foreground" />
          </div>

          <h2 className="mt-4 text-lg font-semibold">
            No projects found
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            We couldn&apos;t find any projects matching your search.
            Try another keyword or choose a different category.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
}
