import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#151515", lavender: "#7965A9", paper: "#FAFAFA" } } },
  plugins: [],
};
export default config;
