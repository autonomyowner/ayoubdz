/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hive-yellow': '#eab308', // yellow-500
        'hive-slate': '#0f172a',
        'hive-yellow-light': '#facc15', // yellow-400 for highlights
      },
      backgroundImage: {
        'gradient-hive': 'linear-gradient(to bottom right, #0f172a, #eab308, #0f172a)',
      }
    },
  },
  plugins: [],
} 