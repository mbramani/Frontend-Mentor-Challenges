import('tailwindcss').Config
module.exports = {
  content: ['./**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
      },
      colors: {
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'off-white': 'hsl(36, 100%, 99%)',
        'grayish-blue': 'hsl(233, 8%, 79%)',
        'very-dark-blue': 'hsl(240, 100%, 5%)'

      }
    },
  },
  plugins: [],
}
