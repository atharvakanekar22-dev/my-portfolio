import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-secondary": "var(--color-bg-secondary)",
        text: "var(--color-text)",
        "text-secondary": "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "DM Sans",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
