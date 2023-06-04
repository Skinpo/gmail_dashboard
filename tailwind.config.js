/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      Geologica: ["Geologica", "sans-serif"]
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors : {
        bluish: "#7b9cc7",
        mild: "#97999c"
      }
    },
  },
  plugins: [],
}

