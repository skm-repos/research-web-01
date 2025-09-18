/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables "dark:" classes
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], // example of adding more
        },
    },
  },
  plugins: [],
}
