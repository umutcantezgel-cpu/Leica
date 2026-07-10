import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "leica-red": "#E2001A",
        "leica-dark": "#1A1A1A",
        "leica-gray": "#4A4A4A",
        "leica-light": "#F7F7F7",
        "leica-border": "#E8E8E8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Helvetica Neue", "Helvetica", "sans-serif"],
        body: ["var(--font-body)", "Helvetica Neue", "Helvetica", "sans-serif"],
      },
      keyframes: {
        scrollLine: {
          "0%": { height: "0%", top: "0" },
          "50%": { height: "100%", top: "0" },
          "100%": { height: "0%", top: "100%" },
        },
      },
      animation: {
        "scroll-line": "scrollLine 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
