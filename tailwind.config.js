/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif', 'Poppins'],
        'brush-script': ['Brush Script MT', 'cursive'], // Adicione a fonte Roboto
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

