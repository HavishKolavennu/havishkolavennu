"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/content";

export function CTA() {
  return (
    <section
      className="px-6 py-20 md:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          id="cta-heading"
          className={
            "font-display text-3xl font-bold text-ink md:text-4xl"
          }
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s build something.
        </motion.h2>

        <motion.p
          className="mt-4 text-ink-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Open to internships, incubators, and founding roles.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className={cn(
              "inline-flex h-12 items-center justify-center gap-2 rounded-lg " +
                "px-8 text-base font-medium bg-accent text-white shadow-soft " +
                "hover:bg-accent-dark hover:shadow-glow-sm " +
                "focus-visible:outline-none focus-visible:ring-2 " +
                "focus-visible:ring-accent focus-visible:ring-offset-2"
            )}
          >
            <Mail className="h-5 w-5" />
            Email
          </a>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-12 items-center justify-center gap-2 rounded-lg " +
                "border-2 border-accent px-8 text-base font-medium text-accent " +
                "bg-transparent hover:bg-accent-muted/30 " +
                "focus-visible:outline-none focus-visible:ring-2 " +
                "focus-visible:ring-accent focus-visible:ring-offset-2"
            )}
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-12 items-center justify-center gap-2 rounded-lg " +
                "border-2 border-accent px-8 text-base font-medium text-accent " +
                "bg-transparent hover:bg-accent-muted/30 " +
                "focus-visible:outline-none focus-visible:ring-2 " +
                "focus-visible:ring-accent focus-visible:ring-offset-2"
            )}
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
