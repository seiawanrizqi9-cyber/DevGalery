import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "01",
    slug: "flowboard",
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
    slug: "lumina-ui",
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
    slug: "pocket-ledger",
    title: "Pocket Ledger",
    description:
      "A simple personal finance dashboard for understanding spending habits and monthly budgets.",
    category: "Fintech",
    technologies: ["Next.js", "Prisma"],
    owner: "Maya Sari",
    initials: "P",
    accent: "bg-gradient-to-br from-emerald-500 to-teal-800",
  },
  {
    id: "04",
    slug: "devnotes",
    title: "DevNotes",
    description:
      "A developer-friendly knowledge base for collecting code snippets and technical notes.",
    category: "Productivity",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    owner: "Raka Pratama",
    initials: "D",
    accent: "bg-gradient-to-br from-amber-500 to-orange-700",
  },
  {
    id: "05",
    slug: "pixel-studio",
    title: "Pixel Studio",
    description:
      "A lightweight creative workspace for organizing design ideas and visual assets.",
    category: "UI / Design",
    technologies: ["Next.js", "Figma"],
    owner: "Dina Amelia",
    initials: "P",
    accent: "bg-gradient-to-br from-pink-500 to-rose-700",
  },
  {
    id: "06",
    slug: "api-compass",
    title: "API Compass",
    description:
      "A simple dashboard for exploring API endpoints and keeping development references organized.",
    category: "Developer Tools",
    technologies: ["TypeScript", "Node.js", "PostgreSQL"],
    owner: "Fajar Ramadhan",
    initials: "A",
    accent: "bg-gradient-to-br from-sky-500 to-indigo-700",
  },
];