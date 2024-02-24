/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-green": "#6CBE43",
        "main-blue": "#00B5FF",
        "main-orange": "#FF7C42"
      },
      backgroundImage: {
        'manufacturing': "url('https://res.cloudinary.com/dglkluhsv/image/upload/v1706952153/z7njhcoehn8rvccj9vda.jpg')",
      },
      screens: {
        'xs': '440px'
      },
      boxShadow: {
        custom: '0px 16px 40px 0px #7090B033'
      }
    },
  },
  plugins: [],
}