import { bold, gray } from 'kolorist'
import { defineConfig } from 'tsup'
import fs from 'fs-extra'
import pkg from './package.json'

export default defineConfig ((options) => {
  const buildBanner = `\n ☘️ ☘️ ☘️  ${bold('leafer-vue@3')} ${gray(`v${pkg.version}`)} \n`

  return {
    entry: ['index.ts', 'compiler.ts'],
    format: ['cjs', 'esm', 'iife'],
    target: 'node16',
    tsconfig: './tsconfig.json',
    clean: true,
    minify: !options.watch,
    dts: true,
    onSuccess: async () => {
      const leaferVueEsm = fs.readFileSync('./dist/index.js', 'utf-8')
      fs.writeFileSync('./../../docs/public/leafer-vue.proxy.js', leaferVueEsm)
      // eslint-disable-next-line no-console
      console.log(buildBanner)
      return Promise.resolve()
    },
  }
})
