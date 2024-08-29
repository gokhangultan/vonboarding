/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#151529',
        'secondaryColor' : '#f2f2f7',
        'textColor':'#878a99',
      },
    },
  },
  plugins: [],
}