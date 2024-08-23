<p align="center">
  <!-- <img class="h-150px" src="/logo.svg" /> -->
</p>

<h1 align="center">Leafer Vue</h1>

<p align="center">
  <strong>Vue createRenderer for Leafer</strong>
</p>

<br />

<!-- <div class="flex justify-center gap-2">
  <img src="https://img.shields.io/github/forks/FliPPeDround/leafer-vue.svg?style=flat-square" />
  <img src="https://img.shields.io/github/stars/FliPPeDround/leafer-vue.svg?style=flat-square" />
  <img src="https://img.shields.io/npm/dm/leafer-vue.svg?style=flat-square" />
  <img src="https://img.shields.io/npm/v/leafer-vue?color=a1b858&style=flat-square" alt="license" />
  <img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="license" />
  <img src="https://img.shields.io/badge/Leafer-v1-ff69b4.svg?style=flat-square" alt="pixi version" />
</div> -->
## 安装

::: code-group

```bash [pnpm]
pnpm i leafer-vue
```

```bash [yarn]
yarn add leafer-vue
```

```bash [npm]
npm i leafer-vue
```

```bash [bun]
bun add leafer-vue
```
:::

## 初始化vue插件

添加Vue插件配置，支持自定义元素。

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { isCustomElement } from 'leafer-vue/compiler'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement,
        },
      },
    }),
  ],
})
```

## 在线使用
创建一个交互应用，可以缩放平移视图、拖拽、点击改变颜色的矩形。
<script setup lang="ts">
import code from './index.vue?raw'
</script>
<Repl :code="code"  />
