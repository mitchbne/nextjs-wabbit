const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.jsx"],
  theme: {
    extend: {
      colors: { blue: { "400": "red" } },
      // screens: {
      // print: { raw: "print" }, // use utilities like print:text-black
      // dark: { raw: "(prefers-color-scheme: dark)" }, // use utilities like dark:text-white
      // },
      height: { "96": "32rem" },
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
    },
    container: { center: true },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")({ layout: "sidebar" }),
  ],
}
