// vite.config.ts
import { defineConfig } from "file:///C:/Users/Windows/Desktop/palette/node_modules/.pnpm/vite@5.4.8_@types+node@20.16.10_lightningcss@1.29.1/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Windows/Desktop/palette/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.8_@types+node@20.16.10_lightningcss@1.29.1__vue@3.5.11_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { HstVue } from "file:///C:/Users/Windows/Desktop/palette/node_modules/.pnpm/@histoire+plugin-vue@0.17.17_histoire@0.17.17_@types+node@20.16.10_lightningcss@1.29.1_vite@5_fd36tg7x6t76x32iionoy5qm7i/node_modules/@histoire/plugin-vue/dist/index.node.js";
import { URL, fileURLToPath } from "node:url";
import vueDevTools from "file:///C:/Users/Windows/Desktop/palette/node_modules/.pnpm/vite-plugin-vue-devtools@7.4.6_rollup@4.24.0_vite@5.4.8_@types+node@20.16.10_lightningcss@1.2_aajepxsjg3zj4cp3tla3wb2r6i/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import tailwindcss from "file:///C:/Users/Windows/Desktop/palette/node_modules/.pnpm/@tailwindcss+vite@4.0.6_vite@5.4.8_@types+node@20.16.10_lightningcss@1.29.1_/node_modules/@tailwindcss/vite/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Windows/Desktop/palette/vite.config.ts";
var vite_config_default = defineConfig({
  server: {
    open: true,
    port: 3e3,
    host: "127.0.0.1"
  },
  preview: {
    open: true,
    port: 8080,
    host: "127.0.0.1"
  },
  define: {
    __VUE_OPTIONS_API__: false
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  plugins: [tailwindcss(), vue(), vueDevTools()],
  histoire: {
    setupFile: "src/histoire.setup.ts",
    storyMatch: ["src/components/**/*.story.vue"],
    plugins: [HstVue()],
    viteIgnorePlugins: ["vite-plugin-vue-devtools"],
    theme: {
      defaultColorScheme: "light",
      title: "Color Palette UI"
    },
    tree: {
      file: ({ title: _title, path }) => {
        const pathSegments = path.replace("src/components/", "").split("/");
        pathSegments.pop();
        return pathSegments;
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxXaW5kb3dzXFxcXERlc2t0b3BcXFxccGFsZXR0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV2luZG93c1xcXFxEZXNrdG9wXFxcXHBhbGV0dGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1dpbmRvd3MvRGVza3RvcC9wYWxldHRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcblxyXG5pbXBvcnQgeyBIc3RWdWUgfSBmcm9tICdAaGlzdG9pcmUvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHsgVVJMLCBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICdAdGFpbHdpbmRjc3Mvdml0ZSdcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBzZXJ2ZXI6IHtcclxuICAgIG9wZW46IHRydWUsXHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gICAgaG9zdDogJzEyNy4wLjAuMSdcclxuICB9LFxyXG4gIHByZXZpZXc6IHtcclxuICAgIG9wZW46IHRydWUsXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gICAgaG9zdDogJzEyNy4wLjAuMSdcclxuICB9LFxyXG4gIGRlZmluZToge1xyXG4gICAgX19WVUVfT1BUSU9OU19BUElfXzogZmFsc2VcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9XHJcbiAgfSxcclxuICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MoKSwgdnVlKCksIHZ1ZURldlRvb2xzKCldLFxyXG4gIGhpc3RvaXJlOiB7XHJcbiAgICBzZXR1cEZpbGU6ICdzcmMvaGlzdG9pcmUuc2V0dXAudHMnLFxyXG4gICAgc3RvcnlNYXRjaDogWydzcmMvY29tcG9uZW50cy8qKi8qLnN0b3J5LnZ1ZSddLFxyXG4gICAgcGx1Z2luczogW0hzdFZ1ZSgpXSxcclxuICAgIHZpdGVJZ25vcmVQbHVnaW5zOiBbJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scyddLFxyXG4gICAgdGhlbWU6IHtcclxuICAgICAgZGVmYXVsdENvbG9yU2NoZW1lOiAnbGlnaHQnLFxyXG4gICAgICB0aXRsZTogJ0NvbG9yIFBhbGV0dGUgVUknXHJcbiAgICB9LFxyXG4gICAgdHJlZToge1xyXG4gICAgICBmaWxlOiAoeyB0aXRsZTogX3RpdGxlLCBwYXRoIH0pID0+IHtcclxuICAgICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSBwYXRoLnJlcGxhY2UoJ3NyYy9jb21wb25lbnRzLycsICcnKS5zcGxpdCgnLycpXHJcbiAgICAgICAgcGF0aFNlZ21lbnRzLnBvcCgpXHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoU2VnbWVudHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0UixTQUFTLG9CQUFvQjtBQUN6VCxPQUFPLFNBQVM7QUFFaEIsU0FBUyxjQUFjO0FBQ3ZCLFNBQVMsS0FBSyxxQkFBcUI7QUFDbkMsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxpQkFBaUI7QUFOeUosSUFBTSwyQ0FBMkM7QUFPbE8sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixxQkFBcUI7QUFBQSxFQUN2QjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUFBLEVBQzdDLFVBQVU7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLFlBQVksQ0FBQywrQkFBK0I7QUFBQSxJQUM1QyxTQUFTLENBQUMsT0FBTyxDQUFDO0FBQUEsSUFDbEIsbUJBQW1CLENBQUMsMEJBQTBCO0FBQUEsSUFDOUMsT0FBTztBQUFBLE1BQ0wsb0JBQW9CO0FBQUEsTUFDcEIsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNKLE1BQU0sQ0FBQyxFQUFFLE9BQU8sUUFBUSxLQUFLLE1BQU07QUFDakMsY0FBTSxlQUFlLEtBQUssUUFBUSxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sR0FBRztBQUNsRSxxQkFBYSxJQUFJO0FBRWpCLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
