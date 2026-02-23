"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/content";

const links = [
  {
    label: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
    description: "For opportunities and collaboration",
  },
  {
    label: "GitHub",
    href: SITE_CONFIG.github,
    icon: Github,
    description: "Code and open source projects",
  },
  {
    label: "LinkedIn",
    href: SITE_CONFIG.linkedin,
    icon: Linkedin,
    description: "Professional background and network",
  },
];

export default function ContactPage() {
  return (
    <div className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
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
            Contact
          </h1>
          <p className="mt-4 text-ink-muted">
            Open to internships, incubator programs, and founding roles. Let&apos;s
            connect.
          </p>
        </motion.header>

        <div className="mt-16 space-y-6">
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <a
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className={
                  "flex items-start gap-4 rounded-xl border border-cream-200 " +
                  "bg-white p-6 transition-all duration-300 shadow-soft " +
                  "hover:border-cream-300 hover:shadow-soft-lg focus-ring"
                }
              >
                <div
                  className={
                    "flex h-12 w-12 shrink-0 items-center justify-center " +
                    "rounded-lg bg-cream-200 text-accent"
                  }
                >
                  <link.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display font-semibold text-ink">
                    {link.label}
                  </h2>
                  <p className="mt-1 text-sm text-ink-muted">
                    {link.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-center text-ink-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Prefer email for the fastest response.
        </motion.p>
      </div>
    </div>
  );
}
