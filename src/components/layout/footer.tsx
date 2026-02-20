"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/content";

export function Footer() {
  return (
    <footer
      className={
        "border-t border-cream-200 bg-cream-100/50 px-6 py-12 md:py-16"
      }
    >
      <div className="mx-auto max-w-6xl">
        <p
          className={
            "font-display text-2xl font-semibold text-ink " +
            "mb-6 md:text-3xl"
          }
        >
          Let&apos;s build something.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className={
              "flex items-center gap-2 text-ink transition-colors " +
              "hover:text-accent focus-ring rounded-lg"
            }
          >
            <Mail className="h-5 w-5" aria-hidden />
            <span>Email</span>
          </a>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "flex items-center gap-2 text-ink transition-colors " +
              "hover:text-accent focus-ring rounded-lg"
            }
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "flex items-center gap-2 text-ink transition-colors " +
              "hover:text-accent focus-ring rounded-lg"
            }
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="mt-8 text-sm text-ink-muted">
          © {new Date().getFullYear()} Havish Kolavennu. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
