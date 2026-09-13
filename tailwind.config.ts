import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        ivory: "#F7F3ED",
        paper: "#FBF9F6",
        ink: "#17232B",
        charcoal: "#334149",
        beige: {
          DEFAULT: "#E7DFD1",
          dark: "#CEC0A6",
        },
        gold: {
          DEFAULT: "#D96C3B",
          light: "#F3B18D",
          dark: "#A94325",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
