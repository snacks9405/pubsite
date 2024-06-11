/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        1: "#000000",
        2: "#14213d",
        3: "#fca311",
        4: "#e5e5e5",
        5: "#ffffff",
        6: "#cb997e",
      },
      gridTemplateColumns: {
        '70/30': '3fr 1fr',
      },
    },
  },
  plugins: [],
}

