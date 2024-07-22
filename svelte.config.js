import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/components',
    },
  },
  onwarn: (warning, handler) => {
    if (warning.code.startsWith('a11y-')) { return }
    if (warning.code === 'missing-exports-condition') { return }
    if (warning.code === 'a11y-no-static-element-interactions') { return }
    if (warning.code === 'svelte-ignore a11y-autofocus') { return }
    if (warning.code.startsWith('css-unused-selector')) { return }
    if (warning.code === 'valid-compile') { return }
    handler(warning)
  },
  preprocess: vitePreprocess(),
}
export default config
