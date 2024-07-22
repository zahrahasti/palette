export default {
  useTabs: true,
  printWidth: 150,
  singleQuote: true,
  trailingComma: 'all',
  quoteProps: 'consistent',
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-svelte'],
  svelteSortOrder: 'options-styles-scripts-markup',
  svelteStrictMode: false,
  svelteBracketNewLine: true,
  svelteIndentScriptAndStyle: true,
}
