/**
 * Single source of truth for portfolio content.
 * Edit this file to update projects, stats, skills, and site config.
 */

export const SITE_CONFIG = {
  startupName: "StartupOS", // Rename to FounderOS or similar as needed
  email: "havish.kolavennu@gmail.com",
  github: "https://github.com/havishkolavennu",
  linkedin: "https://www.linkedin.com/in/havish-kolavennu-8473261a5/",
} as const;

export const BUILDER_STATS = [
  { label: "Projects shipped", value: 4 },
  { label: "Hackathons", value: 3 },
  { label: "Languages", value: 6 },
  { label: "Years building", value: 2 },
];

export const SKILLS = {
  languages: ["TypeScript", "Python", "C", "Java", "SQL", "Rust"],
  frameworks: [
    "Next.js",
    "React",
    "Node.js",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
  ],
  tools: [
    "Git",
    "Vercel",
    "Figma",
    "Docker",
    "Convex",
    "Prisma",
  ],
} as const;

export const LOOKING_FOR = [
  "Summer internships at early-stage startups",
  "Incubator / accelerator programs (Startup Shell, Y Combinator)",
  "Founding technical roles",
  "Full-stack or systems-level projects",
];

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
  hasDemo?: boolean;
  overview: string;
  problem: string;
  solution: string;
  keyDecisions: string[];
  results: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "startupos",
    title: "StartupOS",
    tagline: "Operating system for early-stage founders",
    description:
      "A founder dashboard that consolidates metrics, tasks, and investor " +
      "updates in one place. Built for Startup Shell.",
    role: "Solo founder & engineer",
    stack: ["Next.js", "Convex", "Tailwind", "Vercel"],
    links: [
      { label: "Live demo", url: "https://startupos-opal.vercel.app" },
    ],
    featured: true,
    overview:
      "StartupOS is a lightweight operating system for early-stage founders. " +
      "It centralizes key metrics, weekly tasks, and investor update drafts " +
      "so founders spend less time context-switching and more time building.",
    problem:
      "Founders juggle spreadsheets, Notion, and email. There's no single " +
      "place to track metrics, plan weekly priorities, and draft investor " +
      "updates. Context-switching kills focus.",
    solution:
      "A focused dashboard with real-time metrics, task boards, and " +
      "templated investor update drafts. Clean UI, fast load times, " +
      "and offline-capable architecture.",
    hasDemo: true,
    keyDecisions: [
      "Convex for real-time sync and serverless backend",
      "Next.js App Router for fast navigation and SEO",
      "Minimal feature set to ship fast and validate",
    ],
    results: [
      "Shipped MVP in 2 weeks",
      "Validated with 5 founder interviews",
      "Ready for Startup Shell demo",
    ],
  },
  {
    slug: "ndcutz",
    title: "ND Cutz",
    tagline: "Barbershop booking and management",
    description:
      "Full-stack booking platform for a local barbershop with scheduling, " +
      "payments, and admin dashboard.",
    role: "Full-stack developer",
    stack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    links: [
      { label: "Visit site", url: "https://ndcutz.com" },
    ],
    featured: true,
    overview:
      "ND Cutz is a booking and management platform for a local barbershop. " +
      "Customers can book appointments, and staff manage schedules and " +
      "payments through an admin dashboard.",
    problem:
      "The barbershop relied on phone calls and walk-ins. No way to see " +
      "availability or pre-pay. Staff spent time on manual scheduling.",
    solution:
      "A modern web app with real-time availability, Stripe payments, " +
      "and an admin dashboard for staff to manage appointments and revenue.",
    keyDecisions: [
      "Stripe for payments and subscription tiers",
      "Prisma + PostgreSQL for relational data",
      "Responsive design for mobile-first booking",
    ],
    results: [
      "Reduced no-shows with automated reminders",
      "Increased pre-bookings by 40%",
      "Staff adoption within 2 weeks",
    ],
  },
  {
    slug: "sbnj-aerospace",
    title: "SBNJ Aerospace",
    tagline: "High school rocketry team website",
    description:
      "Marketing and information site for a competitive high school " +
      "aerospace and rocketry team.",
    role: "Web developer",
    stack: ["Next.js", "Tailwind", "Vercel"],
    links: [
      { label: "Visit site", url: "https://sbnjaerospace.org" },
    ],
    featured: true,
    overview:
      "SBNJ Aerospace is the website for a competitive high school rocketry " +
      "team. It showcases the team, events, sponsors, and competition results.",
    problem:
      "The team had no central place to share updates, attract sponsors, " +
      "or document competition history.",
    solution:
      "A clean, professional site with team bios, event calendar, sponsor " +
      "info, and a gallery of past launches and achievements.",
    keyDecisions: [
      "Static-first for fast load and low cost",
      "Image optimization for gallery performance",
      "Accessible, mobile-friendly layout",
    ],
    results: [
      "Improved sponsor outreach",
      "Central hub for team communication",
      "Showcase for competition applications",
    ],
  },
  {
    slug: "paw-services",
    title: "Paw Services",
    tagline: "Pet care scheduling platform",
    description:
      "Platform for pet owners to book grooming, walking, and vet visits " +
      "with local providers.",
    role: "Full-stack developer",
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    links: [
      { label: "Visit site", url: "https://pawservices.org" },
    ],
    featured: false,
    overview:
      "Paw Services connects pet owners with local groomers, walkers, " +
      "and vet clinics. Users browse providers, compare prices, and book " +
      "appointments with integrated payments.",
    problem:
      "Pet owners juggle multiple apps and phone calls to schedule " +
      "different services. Providers lacked a unified booking system.",
    solution:
      "A marketplace-style platform with provider profiles, availability " +
      "calendars, and Stripe checkout. Providers get a simple dashboard.",
    keyDecisions: [
      "MongoDB for flexible provider schema",
      "Stripe Connect for provider payouts",
      "Geolocation for nearby provider search",
    ],
    results: [
      "MVP launched in hackathon",
      "50+ test users during demo",
      "Positive feedback on UX flow",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}
