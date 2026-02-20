import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fefdfb",
          100: "#faf7f2",
          200: "#f3ebe0",
          300: "#e8dcc8",
          400: "#d4c4a8",
        },
        ink: {
          DEFAULT: "#1a1714",
          muted: "#5c5348",
          light: "#78716c",
        },
        accent: {
          DEFAULT: "#c94c3a",
          light: "#e06b5a",
          dark: "#a63d2e",
          muted: "#f0d4cf",
          glow: "#c94c3a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(26, 23, 20, 0.08)",
        "soft-lg": "0 12px 40px -12px rgba(26, 23, 20, 0.12)",
        glow: "0 0 60px -12px rgba(201, 76, 58, 0.45)",
        "glow-sm": "0 0 32px -8px rgba(201, 76, 58, 0.3)",
        "glow-ring":
          "0 0 0 1px rgba(201, 76, 58, 0.2), 0 0 24px -4px rgba(201, 76, 58, 0.25)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(10px, -10px) scale(1.02)" },
          "66%": { transform: "translate(-5px, 5px) scale(0.98)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
