/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color_gray: {
          DEFAULT: '#ECECEC',
          1: '#E1E3E6',
          2: '#343434',
          3: '#232323',
        },
        color_green: {
          DEFAULT: '#60D09B',
        },
        color_blue: {
          DEFAULT: '#457DF1',
          1: '#F0F8FF',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}