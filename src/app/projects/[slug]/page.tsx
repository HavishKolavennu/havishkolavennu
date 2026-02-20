import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectBySlug, PROJECTS } from "@/lib/content";
import Image from "next/image";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const heroPath = `/projects/${project.slug}/hero.png`;

  return (
    <article className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className={
            "mb-12 inline-flex items-center gap-2 text-sm font-medium " +
            "text-ink-muted transition-colors hover:text-accent " +
            "focus-ring rounded-lg"
          }
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <header className="mb-12">
          <h1
            className={
              "font-display text-4xl font-bold text-ink md:text-5xl"
            }
          >
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-ink-muted">{project.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "inline-flex h-9 items-center gap-2 rounded-lg border-2 " +
                  "border-accent px-4 text-sm font-medium text-accent " +
                  "bg-transparent hover:bg-accent-muted/30 " +
                  "focus-visible:outline-none focus-visible:ring-2 " +
                  "focus-visible:ring-accent focus-visible:ring-offset-2"
                }
              >
                {link.label}
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        </header>

        <div
          className={
            "relative aspect-video w-full overflow-hidden " +
            "rounded-xl bg-cream-200 mb-16"
          }
        >
          <Image
            src={heroPath}
            alt={`${project.title} homepage`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>

        <div className="prose prose-cream max-w-none space-y-16">
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Overview
            </h2>
            <p className="mt-4 text-ink-muted">{project.overview}</p>
            <p className="mt-2 text-sm text-ink-muted">
              <strong>Role:</strong> {project.role}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={
                    "rounded-md bg-cream-200 px-2 py-1 text-sm " +
                    "font-medium text-ink"
                  }
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Problem
            </h2>
            <p className="mt-4 text-ink-muted">{project.problem}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Solution
            </h2>
            <p className="mt-4 text-ink-muted">{project.solution}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Key Decisions
            </h2>
            <ul className="mt-4 space-y-2">
              {project.keyDecisions.map((decision, i) => (
                <li key={i} className="flex gap-3 text-ink-muted">
                  <span className="text-accent">•</span>
                  {decision}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Results & Learnings
            </h2>
            <ul className="mt-4 space-y-2">
              {project.results.map((result, i) => (
                <li key={i} className="flex gap-3 text-ink-muted">
                  <span className="text-accent">•</span>
                  {result}
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </article>
  );
}
