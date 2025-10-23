/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // DaisyUI temporairement désactivé pour Tailwind v4
    // require("daisyui")
  ],
};
