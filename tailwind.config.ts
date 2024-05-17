import type { Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [tailwindTypography, daisyui],
  daisyui: {
    themes: ["forest"],
  },
};
export default config;
