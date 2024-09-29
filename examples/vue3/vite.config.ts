import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { isCustomElement } from 'leafer-vue/compiler'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => isCustomElement(tag, ['CustomRect']),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
