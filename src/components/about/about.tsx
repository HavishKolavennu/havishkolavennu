"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  const [headshotError, setHeadshotError] = useState(false);

  return (
    <section
      className="px-6 py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr,2fr] md:gap-16">
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={
                "relative h-48 w-48 shrink-0 overflow-hidden " +
                "rounded-full ring-2 ring-accent/25 ring-offset-4 " +
                "ring-offset-cream-50 shadow-soft-lg"
              }
            >
              {headshotError ? (
                <div
                  className={
                    "flex h-full w-full items-center justify-center " +
                    "bg-cream-200 text-ink font-display text-2xl " +
                    "font-semibold"
                  }
                >
                  HK
                </div>
              ) : (
                <Image
                  src="/me.png"
                  alt="Havish Kolavennu"
                  fill
                  className="object-cover"
                  sizes="192px"
                  onError={() => setHeadshotError(true)}
                />
              )}
            </div>
          </motion.div>

          <div>
            <motion.h2
              id="about-heading"
              className={
                "font-display text-3xl font-bold text-ink md:text-4xl"
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About me
            </motion.h2>

            <motion.div
              className="mt-6 space-y-4 text-ink-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                I&apos;m a CS student who builds things. I care about shipping
                fast, writing clean code, and learning from users. I&apos;ve
                built full-stack web apps, contributed to systems-level projects,
                and I&apos;m drawn to the messy, early stages of product
                development.
              </p>
              <p>
                I want to work with people who move quickly, value craft, and
                aren&apos;t afraid to break things to learn.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
