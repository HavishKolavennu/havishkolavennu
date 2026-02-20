"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { BUILDER_STATS } from "@/lib/content";

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
    return unsubscribe;
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export function Stats() {
  return (
    <section
      className={
        "border-y border-cream-200 bg-gradient-to-b from-cream-100/80 " +
        "to-cream-50 px-6 py-16 md:py-20"
      }
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="stats-heading"
          className="sr-only"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Builder stats
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {BUILDER_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p
                className={
                  "font-display text-4xl font-bold text-accent md:text-5xl"
                }
              >
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
