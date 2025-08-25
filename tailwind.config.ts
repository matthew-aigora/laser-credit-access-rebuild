import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#134c98',
        'brand-blue-light': '#6588bc',
        'brand-gray': '#a7a9ac',
        'brand-orange': '#f37359',
        'brand-blue-ultralight': '#bec4dc',
      },
    },
  },
  plugins: [],
};

export default config;