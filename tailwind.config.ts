import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: "#000000",
        surface: "#0a0a0a",
        card: "#111111",
        line: "#1f1f1f",
        ink: "#f5f5f5",
        muted: "#8a8a8a",
        accent: {
          DEFAULT: "#3b82f6",
          soft: "#60a5fa",
          dim: "rgba(59,130,246,0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        blink: "blink 1.1s step-end infinite",
        scan: "scan 6s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
