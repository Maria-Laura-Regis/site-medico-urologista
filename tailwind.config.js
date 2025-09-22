/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#0a4f7e', // Um azul escuro e sóbrio
        'secondary': '#f0f7ff', // Um azul bem claro para fundos
      }
    },
  },
  plugins: [],
}