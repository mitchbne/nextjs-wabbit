const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: {
    mode: "all",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      // "./components/**/*.{js,ts,jsx,tsx,mdx}",
      // "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  darkMode: "media",
  future: "all",
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      gray: colors.blueGray,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: { print: { raw: "print" } }, // use utilities like print:text-black
      container: { center: true },
    },
  },
  variants: { extend: {} },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
