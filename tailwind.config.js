module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2843B4",
        secondary: "#141D47",
        grey_1: "#FCFCFE",
        hoverBlue: "#0370D6",
        codeText: "#00ACEE",
        codeBg: "#D6F6FF ",
        header: "#2C3149",
        caption: "#646A86",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
