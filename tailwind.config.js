/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/function/*.js"],
  theme: {
    extend: {
      height: {
        "45%": "45%",
        "10%": "10%",
      },
      fontFamily: {
        "head": "Merriweather Sans",
        "sub-head": "Cairo",
        "body": "Imprima",
        "logo": "Protest Guerrilla",
      },
      colors: {
        "primary": "#228B22",
        "accent": "#1E90FF",
      },
    },
  },
  plugins: [],
}
