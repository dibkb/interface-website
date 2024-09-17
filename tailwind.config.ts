import type { Config } from "tailwindcss";

const config: Config = {
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLeftOut: {
          "0%": { opacity: "0", transform: "translateX(-15px)" },
          "10%": { opacity: "1", transform: "translateX(0)" },
          "90%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(15px)" },
        },
        fadeInUpOut: {
          "0%, 100%": { opacity: "0", transform: "translateY(10px)" },
          "25%, 75%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUpOutGlow: {
          "0%, 100%": {
            opacity: "0",
            transform: "translateY(10px)",
            filter: "drop-shadow(0 0 0 rgba(81, 235, 130, 0))",
          },
          "25%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "drop-shadow(0 0 0 rgba(81, 235, 130, 0))",
          },
          "35%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
          },
          "75%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "drop-shadow(0 0 15px rgba(81, 235, 130, 0.7))",
          },
        },
        fadeInLeftOutGlow: {
          "0%": {
            opacity: "0",
            transform: "translateX(-15px)",
            filter: "drop-shadow(0 0 0 rgba(81, 235, 130, 0))",
          },
          "10%": {
            opacity: "1",
            transform: "translateX(0)",
            filter: "drop-shadow(0 0 0 rgba(81, 235, 130, 0))",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(0)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
          },
          "80%": {
            opacity: "1",
            transform: "translateX(0)",
            filter: "drop-shadow(0 0 15px rgba(81, 235, 130, 0.7))",
          },
          "90%": {
            opacity: "1",
            transform: "translateX(0)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(15px)",
            filter: "drop-shadow(0 0 0 rgba(81, 235, 130, 0))",
          },
        },
        zoomInOutGlow: {
          "0%, 100%": {
            transform: "scale(1)",
            filter: "drop-shadow(0 0 0px rgba(81, 235, 130, 0))",
          },
          "50%": {
            transform: "scale(1.1)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-1": "fadeIn 2s infinite 0.5s",
        "fade-in-2": "fadeIn 2s infinite 1s",
        "fade-in-3": "fadeIn 2s infinite 1.5s",
        "fade-in-up-out-1": "fadeInUpOut 10s infinite 0s",
        "fade-in-up-out-2": "fadeInUpOut 10s infinite 0.5s",
        "fade-in-up-out-3": "fadeInUpOut 10s infinite 1s",
        "fade-in-up-out-4": "fadeInUpOut 10s infinite 1.5s",
        "fade-in-up-out-5": "fadeInUpOut 10s infinite 2s",
        "fade-in-up-out-6": "fadeInUpOutGlow 10s infinite 2.5s",
        "fade-in-left-out-1": "fadeInLeftOut 6s infinite",
        "fade-in-left-out-glow-2": "fadeInLeftOutGlow 6s infinite 0.5s",
        "zoom-in-out-glow": "zoomInOutGlow 4s ease-in-out infinite",
      },
      colors: {
        "primary-green": "#51eb82",
        "interface-black": "#1c1c1c",
        "secondary-green": "#3dc769",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
