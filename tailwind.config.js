/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './app/**/*.{js,ts,jsx,tsx}',
  
    ],
  
    theme: {
      extend: {height: {
        '100/6-scr': 'calc(100vh/6)',
      }},
    },
    plugins: [],
  }