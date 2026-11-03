import Link from "next/link";
import { Code2 } from "lucide-react";

import { ThemeToggle } from "@/components/layout/theme-toggle";

const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "Developers", href: "/#developers" },
  { label: "About", href: "/#about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="DevGalery home"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Code2 className="size-5" />
          </span>

          <span className="text-lg font-bold tracking-tight">DevGalery</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />

          <Link
            href="/projects"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore projects
          </Link>
        </div>
      </div>
    </header>
  );
}
