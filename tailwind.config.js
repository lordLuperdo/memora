/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './store/**/*.{js,ts}',
    './hooks/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Mollie Glaston', 'Cinzel', 'serif'],
        sans: ['Mollie Glaston', 'Inter', 'sans-serif']
      },
      colors: {
        memora: {
          ink: '#0A3549',
          deep: '#062D3B',
          violet: '#7650A8',
          mist: '#D7EEF1',
          blush: '#F2D8EA',
          rose: '#865D60',
          cream: '#FFF8F0',
          wax: '#E9DDCD'
        }
      },
      boxShadow: {
        soft: '0 14px 40px rgba(6, 45, 59, 0.14)'
      }
    }
  },
  plugins: []
}
