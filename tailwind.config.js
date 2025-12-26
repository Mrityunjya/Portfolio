/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust paths according to your project
  ],
  darkMode: 'class', // Use 'media' if you want auto dark mode based on system preference
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#F59E0B', // Example secondary color
        accent: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Replace with your preferred font
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1.25rem',
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // for better form styling
    require('@tailwindcss/typography'), // for prose/markdown content
    require('@tailwindcss/aspect-ratio'), // for responsive media
  ],
}
