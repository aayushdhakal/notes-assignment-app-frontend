import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        accent:{
          1:"rgba(var(--color-accent1), <alpha-value>)",
          2:"rgba(var(--color-accent2), <alpha-value>)",
        },
        primary:"rgba(var(--color-primary),<alpha-value>)",
        secondary:"rgba(var(--color-secondary),<alpha-value>)",
        third:"rgba(var(--color-third),<alpha-value>)",
        bkg:"rgba(var(--color-bkg),<alpha-value>)",
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        'md':'768px'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

export default config;