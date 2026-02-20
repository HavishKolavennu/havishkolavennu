"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className={
        "sticky top-0 z-50 w-full border-b border-cream-200 " +
        "bg-cream-50/90 backdrop-blur-xl"
      }
    >
      <nav
        className={
          "mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        }
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={
            "font-display text-lg font-semibold text-ink " +
            "transition-colors hover:text-accent focus-ring rounded-lg px-2 py-1"
          }
        >
          HK
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-sm font-medium " +
                    "transition-colors focus-ring",
                    isActive
                      ? "text-accent"
                      : "text-ink hover:text-accent"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute inset-x-4 -bottom-px h-px bg-accent"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
