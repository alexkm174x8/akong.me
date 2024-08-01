import { color } from "framer-motion";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}",],
  darkMode: "class",
  theme: {
    colors: {
      'black': '#0B0B0C',
      'white': '#FFF',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#c1c1c1',
      'gray-light': '#d3dce6',
    },
    backdropFilter: {
      none: 'none',
      'blur': 'blur(20px)',
    }
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
    },
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
    require('tailwindcss-filters'),
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
