/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "img1":"url('./image/background.png')",
        "img2":"url('./image/second.jpg')"
      }
    
    },
  },
  plugins: [],
}

