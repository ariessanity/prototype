import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#2C3345",
        primary: {
          foreground: "#ffffff",
          default: "#0d766e",
        },
        secondary: {
          foreground: "#454F69",
          default: "#454F69",
        },
        mint: {
          foreground: "#ffffff",
          default: "#F6FBFF",
        },
        muted: {
          foreground: "#ffffff",
          default: "#D9E7FF",
        }
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;
