/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        nunito: ['"Nunito"', 'sans-serif'],
        pacifico:['"Pacifico"', 'cursive']
      },
      colors: {
        customYellow: '#FEA116', // Define your custom color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-customYellow': {
          color: '#FEA116 !important', // Add the custom color with !important
        },
      }, ['responsive', 'hover']);
    }

  ],
}