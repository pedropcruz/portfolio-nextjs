/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        lightPatternBg: 'url("/light-bg.svg")',
        darkPatternBg: 'url("/dark-bg.svg")',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "sm-primary-light": "4px 4px 0px 0px rgb(0,0,0)",
        "md-primary-light": "6px 6px 0px 0px rgb(0,0,0)",
        "lg-primary-light": "8px 8px 0px 0px rgb(0,0,0)",
        "sm-secondary-light": "4px -4px 0px 0px rgb(0,0,0)",
        "md-secondary-light": "6px -6px 0px 0px rgb(0,0,0)",
        "lg-secondary-light": "8px -8px 0px 0px rgb(0,0,0)",
        "sm-primary-dark": "4px 4px 0px 0px rgba(255,255,255, 0.25)",
        "md-primary-dark": "6px 6px 0px 0px rgba(255,255,255, 0.25)",
        "lg-primary-dark": "8px 8px 0px 0px rgba(255,255,255, 0.25)",
        "sm-secondary-dark": "4px -4px 0px 0px rgba(255,255,255, 0.25)",
        "md-secondary-dark": "6px -6px 0px 0px rgba(255,255,255, 0.25)",
        "lg-secondary-dark": "8px -8px 0px 0px rgba(255,255,255, 0.25)",
      },
      colors: {
        lightBg: "#FAF4F0",
        darkBg: "#1A1A1A",
        primary: {
          50: "#F6F0FF",
          100: "#EFE5FF",
          200: "#E0CCFF",
          300: "#CDADFF",
          400: "#BD94FF",
          500: "#AE7AFF",
          600: "#7E2EFF",
          700: "#5600E0",
          800: "#3B0099",
          900: "#1D004D",
          950: "#0E0024",
        },
        yellow: {
          50: "#FEFCF5",
          100: "#FEFAEC",
          200: "#FDF5D8",
          300: "#FCF1CA",
          400: "#FBECB6",
          500: "#FAE8A4",
          600: "#F6D356",
          700: "#EDBC0D",
          800: "#9B7B08",
          900: "#4D3E04",
          950: "#271F02",
        },
        red: {
          50: "#FDF7F7",
          100: "#FBEAEA",
          200: "#F6D5D5",
          300: "#F2C0C0",
          400: "#EDABAB",
          500: "#E99898",
          600: "#DB5757",
          700: "#BD2828",
          800: "#7E1B1B",
          900: "#3F0D0D",
          950: "#220707",
        },
        green: {
          50: "#F7FDF8",
          100: "#EAFBEE",
          200: "#D5F6DD",
          300: "#C0F2CC",
          400: "#ABEDBA",
          500: "#98E9AB",
          600: "#57DB76",
          700: "#28BD4B",
          800: "#1B7E32",
          900: "#0D3F19",
          950: "#07220D",
        },
        grey: {
          50: "#EFEFF1",
          100: "#DEE0E3",
          200: "#BEC1C6",
          300: "#9DA1AA",
          400: "#7C828D",
          500: "#5F646D",
          600: "#4C5057",
          700: "#393C41",
          800: "#26282C",
          900: "#131416",
          950: "#090A0B",
        },
      },
    },
  },
  plugins: [],
}
export default config
