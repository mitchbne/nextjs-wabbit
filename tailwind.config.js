const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: {
    mode: "all",
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  },
  darkMode: "media",
  future: "all",
  theme: {
    colors: {
      ...colors,
      primary: colors.blue,
      white: "white",
      black: "black",
      transparent: "transparent",
      indigo: colors.orange,
      gray: colors.blueGray,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        display: ["Tenor Sans", ...defaultTheme.fontFamily.sans],
      },
      screens: { print: { raw: "print" } }, // use utilities like print:text-black
      container: { center: true },
      boxShadow: { content: "0 0.25rem 0.5rem 0 rgb(84 88 99 / 14%)" },
    },
  },
  variants: { extend: {} },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
