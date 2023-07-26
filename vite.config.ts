/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'pathe'
import { bold, gray, green, yellow } from 'kolorist'
import pkg from './package.json'

const buildBanner = ` ${yellow('⬘')} ${green('⬗')} ${yellow('⬙')} ${green('⬖')}  ${bold('leafer-vue')} ${gray(`v${pkg.version}`)} \n`

// eslint-disable-next-line no-console
console.log(buildBanner)

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: resolve(__dirname, 'src'),
      outDir: 'dist/types',
      staticImport: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      formats: ['es', 'umd', 'iife'],
      fileName: 'index',
    },
    watch: {
      include: [resolve(__dirname, 'src')],
      clearScreen: true,
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['vue', '@vueuse/core', 'leafer-ui'],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
          '@vueuse/core': 'VueUseCore',
          'leafer-ui': 'leaferUi',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vue', 'leafer-ui'],
  },
})
