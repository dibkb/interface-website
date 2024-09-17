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
      screens: {
        "1026px": "1026px",
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
        fadeInOutGlowTopDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
            filter: "drop-shadow(0 0 0px rgba(81, 235, 130, 0))",
          },
          "25%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
          },
          "75%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(20px)",
            filter: "drop-shadow(0 0 0px rgba(81, 235, 130, 0))",
          },
        },
        ticket1: {
          "0%, 100%": {
            transform: "scale(1) rotateX(0deg)",
            filter: "drop-shadow(0 0 0px rgba(81, 235, 130, 0))",
            opacity: "1",
          },
          "5%, 28%": {
            transform: "scale(1.2) rotateX(0deg)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
            opacity: "1",
          },
          "33%": {
            transform: "scale(1.2) rotateX(180deg)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
            opacity: "0",
          },
          "33.01%, 99.99%": {
            transform: "scale(1) rotateX(180deg)",
            filter: "drop-shadow(0 0 0px rgba(81, 235, 130, 0))",
            opacity: "0",
          },
        },
        doneTicket1: {
          "0%, 33%": { opacity: "0", transform: "scale(0.8)" },
          "38%, 95%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.8)" },
        },
        ticket2: {
          "0%, 33%, 100%": {
            transform: "scale(1) rotateX(0deg)",
            filter: "drop-shadow(0 0 0px rgba(81, 235, 130, 0))",
            opacity: "1",
          },
          "38%, 61%": {
            transform: "scale(1.2) rotateX(0deg)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
            opacity: "1",
          },
          "66%": {
            transform: "scale(1.2) rotateX(180deg)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
            opacity: "0",
          },
          "66.01%, 99.99%": {
            transform: "scale(1) rotateX(180deg)",
            filter: "drop-shadow(0 0 0px rgba(81, 235, 130, 0))",
            opacity: "0",
          },
        },
        doneTicket2: {
          "0%, 66%": { opacity: "0", transform: "scale(0.8)" },
          "71%, 95%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.8)" },
        },
        ticket3: {
          "0%, 66%, 100%": {
            transform: "scale(1) rotateX(0deg)",
            filter: "drop-shadow(0 0 0px rgba(81, 235, 130, 0))",
            opacity: "1",
          },
          "71%, 94%": {
            transform: "scale(1.2) rotateX(0deg)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
            opacity: "1",
          },
          "99%": {
            transform: "scale(1.2) rotateX(180deg)",
            filter: "drop-shadow(0 0 10px rgba(81, 235, 130, 0.7))",
            opacity: "0",
          },
          "99.01%, 99.99%": {
            transform: "scale(1) rotateX(180deg)",
            filter: "drop-shadow(0 0 0px rgba(81, 235, 130, 0))",
            opacity: "0",
          },
        },
        doneTicket3: {
          "0%, 99%": { opacity: "0", transform: "scale(0.8)" },
          "99.01%, 99.99%": { opacity: "1", transform: "scale(1)" },
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
        "fade-in-out-glow-top-down":
          "fadeInOutGlowTopDown 4s ease-in-out infinite",
          ticket1: "ticket1 12s infinite",
          "done-ticket1": "doneTicket1 12s infinite",
          ticket2: "ticket2 12s infinite",
          "done-ticket2": "doneTicket2 12s infinite",
          ticket3: "ticket3 12s infinite",
          "done-ticket3": "doneTicket3 12s infinite",
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
