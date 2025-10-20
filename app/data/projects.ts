// app/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  cover?: string; // optional image path in /public
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "task-tracker",
    title: "Task Tracker",
    summary:
      "A simple CRUD task app with filters and local storage. Built to practice React state and forms.",
    tech: ["React", "TypeScript", "Vite"],
    repoUrl: "https://github.com/steevensalony/task-tracker",
    demoUrl: "https://example.com/task-tracker",
    featured: true,
  },
  {
    slug: "movie-search",
    title: "Movie Search",
    summary:
      "Search OMDb API and show rated results with pagination. Good example of fetching and UI state.",
    tech: ["React", "Tailwind", "API"],
    repoUrl: "https://github.com/steevensalony/movie-search",
    demoUrl: "https://example.com/movie-search",
    featured: true,
  },
  {
    slug: "notes-api",
    title: "Notes API",
    summary:
      "A tiny REST API for notes with Express and MongoDB. Used for another demo front end.",
    tech: ["Node", "Express", "MongoDB"],
    repoUrl: "https://github.com/steevensalony/notes-api",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
