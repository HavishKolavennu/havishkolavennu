import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#e5dfd5",
          100: "#ddd4c8",
          200: "#d0c4b4",
          300: "#c4b4a0",
          400: "#a89478",
        },
        ink: {
          DEFAULT: "#1a1714",
          muted: "#5c5044",
          light: "#7a6e62",
        },
        accent: {
          DEFAULT: "#CD6A2F",
          light: "#e08050",
          dark: "#b85a25",
          muted: "#f5ebe5",
          glow: "#CD6A2F",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 16px -4px rgba(26, 23, 20, 0.06)",
        "soft-lg": "0 8px 32px -12px rgba(26, 23, 20, 0.08)",
        glow: "0 0 40px -8px rgba(205, 106, 47, 0.2)",
        "glow-sm": "0 0 24px -4px rgba(205, 106, 47, 0.15)",
        "glow-ring":
          "0 0 0 1px rgba(205, 106, 47, 0.25), 0 2px 12px -2px rgba(26, 23, 20, 0.06)",
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
  plugins: [require("@tailwindcss/typography")],
};

export default config;
