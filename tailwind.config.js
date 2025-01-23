/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color': '#23BE0A',
        'primary-text-color': '#131313',
        'secondary-text-color': '#424242',
        'banner-bg': '#f2f2f2'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

