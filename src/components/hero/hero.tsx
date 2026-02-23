"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/content";

export function Hero() {
  const [headshotError, setHeadshotError] = useState(false);
  return (
    <section
      className={
        "relative min-h-[90vh] overflow-hidden px-6 pt-20 pb-16 " +
        "md:min-h-[85vh] md:pt-28 md:pb-24"
      }
      aria-labelledby="hero-headline"
    >
      {/* Animated background - grid + gradient mesh */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh" />
      <div
        className={
          "gradient-blob -left-32 -top-32 h-96 w-96 bg-cream-300/40 " +
          "animate-float-slow"
        }
      />
      <div
        className={
          "gradient-blob -right-24 top-1/3 h-64 w-64 bg-cream-400/25 " +
          "animate-float-medium"
        }
      />
      <div
        className={
          "gradient-blob bottom-1/4 left-1/3 h-48 w-48 bg-accent/10 " +
          "animate-float-fast"
        }
      />

      <div
        className={
          "relative mx-auto flex max-w-6xl flex-col items-center " +
          "gap-12 md:flex-row md:items-start md:gap-16"
        }
      >
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            id="hero-headline"
            className={
              "font-display text-4xl font-bold tracking-tight " +
              "text-ink md:text-5xl lg:text-6xl drop-shadow-sm"
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My name is Havish.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg text-ink-muted md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I am a computer science student with a specialization in machine
            learning at the University of Maryland, College Park.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 " +
                  "rounded-lg px-8 text-base font-medium transition-all " +
                  "bg-accent text-cream-50 shadow-soft hover:bg-accent-dark " +
                  "hover:shadow-soft-lg active:scale-[0.98] " +
                  "focus-visible:outline-none focus-visible:ring-2 " +
                  "focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
              )}
            >
              View Projects
            </Link>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 " +
                  "rounded-lg px-8 text-base font-medium transition-all " +
                  "bg-cream-50 text-ink border border-cream-300 " +
                  "hover:bg-cream-200 hover:border-accent/30 " +
                  "focus-visible:outline-none focus-visible:ring-2 " +
                  "focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
              )}
            >
              Email Me
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div
            className={
              "relative rounded-full p-1 shadow-glow-ring " +
              "ring-2 ring-accent/40 ring-offset-4 ring-offset-cream-50"
            }
          >
            <div
              className={
                "overflow-hidden rounded-full h-[280px] w-[280px] " +
                "md:h-[280px] md:w-[280px]"
              }
            >
              {headshotError ? (
                <div
                  className={
                    "flex h-full w-full items-center justify-center " +
                    "bg-cream-200 text-ink font-display text-4xl " +
                    "font-semibold"
                  }
                >
                  HK
                </div>
              ) : (
                <Image
                  src="/me.png"
                  alt="Havish Kolavennu headshot"
                  width={280}
                  height={280}
                  priority
                  className="object-cover h-full w-full"
                  sizes="(max-width: 768px) 200px, 280px"
                  onError={() => setHeadshotError(true)}
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
