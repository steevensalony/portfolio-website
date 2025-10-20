// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "../../data/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  // Prebuild static pages for each project
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/projects" className="text-sm underline">&larr; Back to Projects</Link>

      <h1 className="text-3xl font-semibold mt-3">{project.title}</h1>
      <p className="text-gray-700 mt-2">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-gray-600">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {project.demoUrl && (
          <a className="underline" href={project.demoUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
        )}
        {project.repoUrl && (
          <a className="underline" href={project.repoUrl} target="_blank" rel="noreferrer">
            Source code
          </a>
        )}
      </div>

      {/* Placeholder area where you can later add screenshots, lessons learned, etc. */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">What I practiced</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Core concepts used in this project (state, fetch, routing, etc.).</li>
          <li>Any tricky bug you solved.</li>
          <li>What you’d improve with more time.</li>
        </ul>
      </section>
    </main>
  );
}
