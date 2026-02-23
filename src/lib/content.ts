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
    tagline: "Organize finances, subscriptions, and events in one portal",
    description:
      "A user-friendly portal for startups to track subscriptions, " +
      "finances, and events—with an AI chatbot for profit optimization.",
    role: "Solo founder & engineer",
    stack: ["Next.js", "Convex", "Tailwind", "Clerk"],
    links: [
      { label: "Live demo", url: "https://startupos-opal.vercel.app" },
    ],
    featured: true,
    overview:
      "StartupOS is a founder control center that turns financial and business operations chaos into clarity. " + 
      "It consolidates subscriptions, revenue, expenses, and runway forecasting into " + 
      "one unified dashboard, giving startups and local businesses real-time visibility " +
      "into their financial health. With live scenario simulation and automated insights," + 
      " StartupOS helps teams understand not just where their money is going, " + 
      "but what decisions will shape their future and how to they can optimize their business for maximum profit.",
    problem:
      "Startups and small businesses juggle multiple subscriptions (SMS, " +
      "databases, domains), softwares, and business operations that are " + 
      "difficult to keep track of. There was no single place to see everything at a glance.",
    solution:
      "A unified business operations portal that combines financial analytics, subscription tracking, and operational metrics into a single dashboard. " +
  "Interactive data visualizations transform raw input into actionable insights, supported by a clean UI, secure authentication, " +
  "and an upcoming AI assistant for strategic business recommendations.",
    hasDemo: true,
    keyDecisions: [
      "Convex for real-time sync and serverless backend",
      "Next.js App Router for fast navigation and SEO",
      "Data visualizations for financial clarity",
    ],
    results: [
      "Won Most Ambitious award at the Buildathon",
      "Learned to transform user input into financial graphs and visualizations",
      "Overcame Google auth and secure authentication challenges and " +
        "deepened API and backend knowledge",
    ],
  },
  {
    slug: "ndcutz",
    title: "ND Cutz",
    tagline: "Barbershop booking and management",
    description:
      "Booking and management platform for a local barbershop. Customers " +
      "view availability, book or request times; staff manage schedules, " +
      "gallery, and reviews via admin dashboard.",
    role: "Full-stack developer",
    stack: ["Node.js", "PostgreSQL", "HTML/CSS/JavaScript", "Twilio (SMS)"],
    links: [
      { label: "Visit site", url: "https://ndcutz.com" },
    ],
    featured: true,
    overview:
      "ND Cutz is a booking and management platform for a local barbershop. " +
      "Customers can view availability, book appointments, and request custom times. " +
      "Staff manage the schedule, approve or decline bookings, and handle gallery " +
      "and reviews through an admin dashboard.",
    problem:
      "The barbershop relied on phone calls and walk-ins with no way to see " +
      "availability online. Staff spent time on manual scheduling, and customers " +
      "had limited visibility into open slots.",
    solution:
      "A web app that shows real-time availability, lets customers book or request " +
      "times, and uses SMS for notifications and confirmations. An admin dashboard " +
      "lets staff manage slots, approve or decline bookings, upload gallery images, " +
      "and moderate reviews. ",
    keyDecisions: [
      "PostgreSQL (Supabase) for bookings, slots, reviews, gallery, and sessions",
      "Twilio for booking alerts and confirmations, plus CONFIRM/DECLINE by text",
      "Vercel for hosting",
      "Responsive, mobile-friendly UI",
    ],
    results: [
      "Online booking reduced manual scheduling for staff",
      "SMS confirmations with address and payment info",
      "Admin can manage everything in one place",
      "Session-based admin auth and env-based credentials",
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
    title: "P.A.W Services",
    tagline: "Moving, junk removal, and storage solutions",
    featured: true,
    description:
      "Website for a local team offering moving services, junk removal, " +
      "and storage solutions.",
    role: "Full-stack developer",
    stack: ["Next.js", "Node.js"],
    links: [
      { label: "Visit site", url: "https://pawservices.org" },
    ],
    overview:
      "P.A.W Services is a website for a local team that offers moving services, " +
      "junk removal, and storage solutions. Customers browse services, request " +
      "quotes, and book appointments.",
    problem:
      "The team had no online presence—customers relied on word of mouth or " +
      "couldn't easily find information about services, pricing, or how to book.",
    solution:
      "A website that showcases the team's moving, junk removal, and storage " +
      "services. Customers can learn about offerings, request quotes, and " +
      "book appointments online.",
    keyDecisions: [
      "Clear service pages for moving, junk removal, and storage",
      "Quote request flow for custom estimates",
      "Responsive, mobile-friendly layout for on-the-go inquiries",
    ],
    results: [
      "Online presence for the team to reach more customers",
      "Quote requests and bookings handled through the website",
      "Single place for customers to learn about all three service offerings",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}
