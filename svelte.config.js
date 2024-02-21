import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

// import { SveltePreprocessor } from 'svelte/compiler';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias:{
      $components:"src/components"
    }
  },
  preprocess: vitePreprocess(),
  // preprocess:SveltePreprocessor()
};
export default config