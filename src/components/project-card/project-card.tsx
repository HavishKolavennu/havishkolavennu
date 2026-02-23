"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/content";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const thumbSrc = `/projects/${project.slug}/thumb.png`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={
          "overflow-hidden transition-all duration-300 group " +
          "hover:shadow-soft-lg hover:-translate-y-0.5 hover:border-cream-300 " +
          "border-cream-200"
        }
      >
        <Link href={`/projects/${project.slug}`} className="block">
          <div
            className={
              "relative aspect-video w-full overflow-hidden bg-cream-200"
            }
          >
            {imgError ? (
              <div
                className={
                  "flex h-full w-full items-center justify-center " +
                  "bg-cream-200 text-ink-muted text-sm"
                }
              >
                {project.title}
              </div>
            ) : (
              <Image
                src={thumbSrc}
                alt={`${project.title} — homepage preview`}
                fill
                className={
                  "object-cover object-top transition-transform duration-500 " +
                  "group-hover:scale-105"
                }
                sizes="(max-width: 768px) 100vw, 400px"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <CardHeader>
            <CardTitle className="group-hover:text-accent transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription>{project.tagline}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-ink-muted line-clamp-2">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className={
                    "rounded-md bg-cream-200 px-2 py-0.5 text-xs " +
                    "font-medium text-ink"
                  }
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Link>
        <CardFooter className="gap-2">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "inline-flex items-center gap-1 text-sm font-medium " +
                "text-accent hover:underline focus-ring rounded"
              }
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
