/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStroke: {
        sm: '1px',
        DEFAULT: '2px',
        lg: '3px',
      },
      colors: {
        Clightgray: '#F0F0F0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'move-up': 'moveUp 0.3s ease-in-out',
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        moveUp: {
          '0%': { marginTop: '-50px' },
          '100%': { marginTop: '0px' },
        },
      },
      boxShadow: {
        'black-sm': '0px 0px 10px 1px black',
      },
    },
  },
  plugins: [],
};
