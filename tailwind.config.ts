import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        surface: "#FFFFFF",
        navy: "#111C2D",
        midnight: "#131B2E",
        gold: "#D4AF37",
        indigoBrand: "#4F46E5",
        cyanBrand: "#0EA5E9",
        emeraldBrand: "#10B981",
        slateText: "#64748B",
        ink: "#111827",
        borderLight: "#E2E8F0",
      },
      boxShadow: {
        ambient: "0 10px 30px rgba(15, 23, 42, 0.06)",
        gold: "0 0 0 4px rgba(212, 175, 55, 0.16)",
        glow: "0 24px 80px rgba(79, 70, 229, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
