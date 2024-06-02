/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif', 'Poppins'],
        'brush-script': ['Brush Script MT', 'cursive'],
        'arial': ['Arial', 'sans-serif'],
      },

    },
  },
  plugins: [require('flowbite/plugin')],
}

