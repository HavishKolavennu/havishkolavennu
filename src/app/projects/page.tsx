"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card/project-card";
import { PROJECTS } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <div className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={
              "font-display text-4xl font-bold text-ink md:text-5xl"
            }
          >
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Full-stack web apps, founder tools, and side projects I&apos;ve
            built from idea to deployment.
          </p>
        </motion.header>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
