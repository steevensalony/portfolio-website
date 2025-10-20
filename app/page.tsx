// app/page.tsx
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Top Navigation */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b">
        <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">Steeven</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi, I’m Steeven.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Junior web developer with a Full-Stack bootcamp background (React, Node,
          MongoDB, MySQL). I focus on simple, useful interfaces and learning by doing.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="#projects"
            className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
          >
            See my projects
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-90"
          >
            Contact me
          </a>
        </div>
      </section>

      {/* Projects (preview grid on homepage) */}
      <section id="projects" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-gray-600 mt-2 text-sm">
          A few small things I built while learning.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <article className="rounded-xl border p-4">
            <h3 className="font-medium">Project One</h3>
            <p className="text-sm text-gray-600 mt-2">
              Short description of what it does and what you learned.
            </p>
            <div className="mt-3 flex gap-3 text-sm">
              <a className="underline" href="#" target="_blank" rel="noreferrer">
                Live
              </a>
              <a className="underline" href="#" target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </article>

          <article className="rounded-xl border p-4">
            <h3 className="font-medium">Project Two</h3>
            <p className="text-sm text-gray-600 mt-2">
              Short description of what it does and what you learned.
            </p>
            <div className="mt-3 flex gap-3 text-sm">
              <a className="underline" href="#" target="_blank" rel="noreferrer">
                Live
              </a>
              <a className="underline" href="#" target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-gray-700 mt-2 max-w-3xl leading-relaxed">
          I’m transitioning into tech from a medical technologist role. I enjoy React,
          Node, and turning ideas into small, working apps. I’m early in my journey and
          focused on writing clear code, shipping consistently, and learning fast.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700 mt-2 mb-6">
          Want to chat about a role or a project? Send me a note here.
        </p>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Steeven</p>
          <p>Built with Next.js & Tailwind</p>
        </div>
      </footer>
    </main>
  );
}
