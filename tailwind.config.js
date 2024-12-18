/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter : 'Inter , serif'
      },
      colors: {
        'text' : '#272343',
        'textInverted' : '#9A9CAA',
      },
      fontSize: {
        10: ['0.63rem', '.7rem'],
        13: ['0.8rem', '1.1rem'],
        15: ['0.9rem', '1.3rem'],
        26: ['1.7rem', '2rem'],
        32: ['1.92rem', '2.4rem'],
      },
      screens: {
        '3xl': '1800px',
        'xs': '420px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  
}