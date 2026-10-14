/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tea: {
          50: '#f4f8f4',
          100: '#e5f0e5',
          200: '#cce2cc',
          300: '#a3caa4',
          400: '#73ab75',
          500: '#4e8d51',
          600: '#3c713f',
          700: '#325a34',
          800: '#2b482d',
          900: '#243c26',
          950: '#0f2011',
        },
        matcha: '#6b8e23',
      }
    },
  },
  plugins: [],
}
