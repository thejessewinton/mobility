/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  jsxSingleQuote: true,
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss']
}

export default config
