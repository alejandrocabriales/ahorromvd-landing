/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#13221a",
        moss: "#128c4a",
        leaf: "#25d366",
        paper: "#fafaf6",
        line: "#e7ebe5",
      },
      boxShadow: {
        glow: "0 18px 50px -18px rgba(18, 140, 74, 0.35)",
        soft: "0 22px 70px -32px rgba(19, 34, 26, 0.25)",
      },
    },
  },
  plugins: [],
};
