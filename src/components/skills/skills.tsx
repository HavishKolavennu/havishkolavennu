"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/content";

const groups = [
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks" },
  { key: "tools", label: "Tools" },
] as const;

export function Skills() {
  return (
    <section
      className="border-t border-cream-200 px-6 py-20 md:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="skills-heading"
          className={
            "font-display text-3xl font-bold text-ink md:text-4xl"
          }
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3
                className={
                  "font-display text-sm font-semibold uppercase " +
                  "tracking-wider text-accent"
                }
              >
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {SKILLS[group.key].map((skill) => (
                  <span
                    key={skill}
                    className={
                      "rounded-lg border border-cream-200 bg-cream-100 " +
                      "px-3 py-1.5 text-sm font-medium text-ink " +
                      "transition-colors hover:border-cream-300 hover:bg-cream-200"
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
