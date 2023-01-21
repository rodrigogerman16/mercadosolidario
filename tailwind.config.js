/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '1': '1',
        '0': '0',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'hind': ['Hind Madurai', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
} 