/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary:['Montserrat', 'sans serif']
      }, 
      textColor: {
        primary: "#14532D"
      }, 
      colors: {
        primary: "#14532D"
      },
      
    },
    container: {
    center:true
  }    
  },
  plugins: [],
}

