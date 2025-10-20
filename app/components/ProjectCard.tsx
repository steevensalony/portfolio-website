// app/components/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border p-4">
      <h3 className="font-medium">
        <Link href={`/projects/${project.slug}`} className="hover:underline">
          {project.title}
        </Link>
      </h3>

      <p className="text-sm text-gray-600 mt-2">{project.summary}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border px-2 py-0.5 text-xs text-gray-600"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-3 flex gap-3 text-sm">
        {project.demoUrl && (
          <a className="underline" href={project.demoUrl} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
        {project.repoUrl && (
          <a className="underline" href={project.repoUrl} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
        <Link className="underline" href={`/projects/${project.slug}`}>
          Details
        </Link>
      </div>
    </article>
  );
}
