// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'file:///C:/Users/Windows/Desktop/palette/node_modules/vite/dist/node/index.js'
import vue from 'file:///C:/Users/Windows/Desktop/palette/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import vueDevTools from 'file:///C:/Users/Windows/Desktop/palette/node_modules/vite-plugin-vue-devtools/dist/vite.mjs'
var __vite_injected_original_import_meta_url =
  'file:///C:/Users/Windows/Desktop/palette/vite.config.ts'
var vite_config_default = defineConfig({
  plugins: [
    vue({
      script: {
        propsDestructure: true
      }
    }),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', __vite_injected_original_import_meta_url))
    }
  }
})
export { vite_config_default as default }
