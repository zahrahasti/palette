import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { HstVue } from '@histoire/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  server: {
    open: true,
    port: 3000,
    host: '127.0.0.1'
  },
  preview: {
    open: true,
    port: 8080,
    host: '127.0.0.1'
  },
  define: {
    __VUE_OPTIONS_API__: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [vue(), vueDevTools()],
  histoire: {
    setupFile: 'src/histoire.setup.ts',
    storyMatch: ['src/components/**/*.story.vue'],
    plugins: [HstVue()],
    viteIgnorePlugins: ['vite-plugin-vue-devtools'],
    theme: {
      defaultColorScheme: 'light',
      title: 'Color Palette UI'
    },
    tree: {
      file: ({ title: _title, path }) => {
        const pathSegments = path.replace('src/components/', '').split('/')
        pathSegments.pop()

        return pathSegments
      }
    }
  }
})
