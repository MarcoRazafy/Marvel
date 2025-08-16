/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      marvelRed: '#ED1D24',
      marvelBlack: '#202020'
    }
  }
},

  plugins: [],
}
