import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-15px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-1": "fadeIn 2s infinite 0.5s",
        "fade-in-2": "fadeIn 2s infinite 1s",
        "fade-in-3": "fadeIn 2s infinite 1.5s",
        "fade-in-up-1": "fade-in-up 1s ease-in-out 0.25s",
        "fade-in-up-2": "fade-in-up 1s ease-in-out 0.5s",
        "fade-in-up-3": "fade-in-up 1s ease-in-out 0.75s",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInLeft: "fadeInLeft 0.5s ease-in-out",
      },
      colors: {
        "primary-green": "#51eb82",
        "interface-black": "#1c1c1c",
        "secondary-green": "#3dc769",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
