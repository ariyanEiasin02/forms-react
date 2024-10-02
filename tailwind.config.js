/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "container" : "1180px"
      },
      fontFamily:{
        "poppins" : "Poppins, system-ui"
      }
    },
  },
  plugins: [],
}