module.exports = {
  plugins: [
    "@tailwindcss/jit",
    ["cssnano", { preset: "default" }],
    "autoprefixer",
  ],
}
