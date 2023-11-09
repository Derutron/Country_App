/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      width: {
        '480': '480px', // You can set your desired width
        '18': '18px',
        '200': '200px',
      },
      height: {
        '56': '56px',
        '18': '18px',
        '224': '224px',
      }
    },
  },
  plugins: [],
}



