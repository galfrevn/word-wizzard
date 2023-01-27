/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
