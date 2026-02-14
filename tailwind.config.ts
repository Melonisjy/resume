import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fdfcf8",
        foreground: "#222",
        border: "#999",
      },
      fontFamily: {
        heading: ["\"Pretendard Variable\"", "Pretendard", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["\"Pretendard Variable\"", "Pretendard", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

