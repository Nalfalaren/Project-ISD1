/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'login_input': '#EDE9E9',
        'f_pw': '#9A917A'
      },
      width: {
        '3/10': '30%',
        '4/10':'40%',
        '6/10': '60%',
        '8/10': '80%'
      },
      boxShadow: {
        'shadow_primary': '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
      },
      borderColor: {
        'primary':'#e5e7eb',
        
      }
    },
  },
  plugins: [],
}

