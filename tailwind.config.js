/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "img1":"url('./image/leafback.jpg')",
        "img2":"url('./image/second.jpg')",
        "mine":"url('./image/rushabcrop.jpg')"
      },
      container:{
        padding:{
          "md":"2rem",
          "sm":"3rem"
        }
        
      }
    
    },
  },
  plugins: [],
}

