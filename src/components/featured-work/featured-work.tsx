"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card/project-card";
import { getFeaturedProjects } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <section
      className="px-6 py-20 md:py-28"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className={
            "mb-12 flex flex-col gap-4 md:flex-row md:items-end " +
            "md:justify-between"
          }
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2
              id="featured-heading"
              className={
                "font-display text-3xl font-bold text-ink md:text-4xl"
              }
            >
              Featured Work
            </h2>
          </div>
          <Link
            href="/projects"
            className={cn(
              "inline-flex h-9 items-center gap-2 rounded-lg border " +
                "border-cream-300 px-4 text-sm font-medium text-ink " +
                "bg-transparent hover:bg-cream-200 hover:border-accent/30 " +
                "focus-visible:outline-none focus-visible:ring-2 " +
                "focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 md:mb-1"
            )}
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
