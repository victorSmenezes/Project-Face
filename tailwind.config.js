/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'sm': '320px',
      },
      colors:{
        'blue-facebook': '#1877F2',
        'blue-face': '#003EFF',
        'gray-facebook': '#F0F2F5',
        'green-facebook': '#61FF00',
        'gray-text':'#1c1e21',
        'gray-footer': '#737373'
      },
      spacing:{
        '580': '580px',
        '390': '390px',
        '380': '380px',
        '400': '400px',
      },
      fontSize: {
        '28x': ['1.75rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
      },
    },
  },
  plugins: [],
}
