import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: ['640px', '768px', '1024px'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Kablammo: ['Kablammo', 'system-ui'],
      },
      height: {
        main : "calc(100vh-112px)"
      },
      minHeight :{
        main : "calc(100vh-112px)"
      }
    },
  },
  plugins: [],
};

export default config;
