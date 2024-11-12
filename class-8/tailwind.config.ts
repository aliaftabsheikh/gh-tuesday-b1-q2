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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens:{
      // MIN_WIDTH
      "max-sm": { 'max': '480px' },
      "sm": "480px",
      "md":  "640px",
      "lg": "780px",
      "xl": "892px",
      "2xl": "1028px",
      "3xl": "1248px"

      // MAX_WIDTH

      // '2xl': { 'max': '1535px' },

      // 'xl': { 'max': '1279px' },

      // 'lg': { 'max': '1023px' },

      // 'md': { 'max': '767px' },

      // 'sm': { 'max': '639px' },

      // 'xs': { 'max': '428px'},

    }

  },
  plugins: [],
};
export default config;
