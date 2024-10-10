import fs from 'fs-extra'
import { bold, gray } from 'kolorist'
import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig ((options) => {
  const buildBanner = `\n ☘️ ☘️ ☘️  ${bold('leafer-vue@3')} ${gray(`v${pkg.version}`)} \n`
  const isWatch = options.watch
  return {
    entry: ['index.ts', 'compiler.ts'],
    format: ['cjs', 'esm'],
    target: 'node18',
    tsconfig: './tsconfig.json',
    clean: true,
    minify: !isWatch,
    dts: {
      entry: ['compiler.ts', 'types/index.ts'],
    },
    onSuccess: async () => {
      const leaferVueEsm = fs.readFileSync('./dist/index.js', 'utf-8')
      fs.writeFileSync('./../../docs/public/leafer-vue.proxy.js', leaferVueEsm)
      if (isWatch) {
        fs.writeFileSync('./../../playground/public/leafer-vue.proxy.js', leaferVueEsm)
      }
      // eslint-disable-next-line no-console
      console.log(buildBanner)
      return Promise.resolve()
    },
  }
})
