import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "brand-green": "var(--brand-green)",
        "brand-light-gray": "var(--brand-light-gray)",
        "brand-dark-gray": "var(--brand-dark-gray)",
        "brand-gray": "var(--brand-gray)",
        "brand-darkest-gray": "var(--brand-darkest-gray)",
      },
      backgroundImage: {
        "dotted-grid": "radial-gradient(circle, lightgray 1px, transparent 1px)",
      },
      backgroundSize: {
        "dotted-grid": "1.3em 1.3em"
      },
      backgroundPosition: {
        "dotted-grid": "center",
      },
    },
  },
  plugins: [],
} satisfies Config;
