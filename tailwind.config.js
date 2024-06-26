/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [require('daisyui'),],
}

