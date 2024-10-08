import fs from 'node:fs'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import pkg from './package.json'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  base: '/play/',
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(pkg.version),
    'import.meta.env.REPL_VERSION': JSON.stringify('4.4.2'),
  },
  server: {
    host: true,
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
        fs: {
          fileExists: fs.existsSync,
          readFile: file => fs.readFileSync(file, 'utf-8'),
        },
      },
    }),
    AutoImport({
      dirs: [path.resolve(pathSrc, 'composables')],
      imports: ['vue', '@vueuse/core'],
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      dirs: [path.resolve(pathSrc, 'components')],
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    Unocss(),
    Inspect(),
  ],
  optimizeDeps: {
    exclude: ['@vue/repl'],
  },
  build: {
    outDir: '../docs/dist/play',
    emptyOutDir: true,
    rollupOptions: {
      external: ['typescript'],
      input: [
        './index.html',
      ],
    },
  },
})
