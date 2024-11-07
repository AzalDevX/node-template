/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
      },
      colors: {
        background: '#1c1917',
        card: '#292524',
        text: {
          primary: '#e7e5e4',
          secondary: '#d6d3d1',
        },
        accent: {
          primary: '#fb923c',
          secondary: '#fdba74',
        },
        purple: {
          300: '#d8b4fe', // Asumiendo un tono similar al texto "Astro"
        },
        teal: {
          300: '#5eead4', // Asumiendo un tono similar al texto "TailwindCSS"
        },
        code: {
          background: '#332e2a',
          border: '#2b2623',
        },
        footer: '#4b5563', // Equivalente a text-gray-600
      },
    },
  },
  plugins: [],
};
