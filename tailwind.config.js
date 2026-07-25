/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'motanis-black': '#0A0A0F',
        'motanis-surface': '#13131A',
        'motanis-blue': '#2A6FDB',
        'motanis-ice': '#5BA4F5',
        'motanis-bright': '#3D8EF0',
        'motanis-muted': '#8A9BB0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}