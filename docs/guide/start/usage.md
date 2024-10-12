<script setup lang="ts">
import code from './index.vue?raw'
</script>

# 快速安装

::: code-group

```bash [pnpm]
pnpm i leafer-ui leafer-vue
```

```bash [yarn]
yarn add leafer-ui leafer-vue
```

```bash [npm]
npm i leafer-ui leafer-vue
```

```bash [bun]
bun add leafer-ui leafer-vue
```

:::

## 初始化vue插件

添加Vue插件配置，支持自定义元素。
::: code-group

```ts [vite.config.ts]
import vue from '@vitejs/plugin-vue'
import { isCustomElement } from 'leafer-vue/compiler'
import { defineConfig } from 'vite'

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

```ts [vue.config.ts]
const { isCustomElement } = require('leafer-vue/compiler')

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          isCustomElement,
        }
      }))
  }
}
```
:::

<details>
<summary class="info custom-block github-alert">为什么需要配置插件？</summary>

> 默认情况下，Vue 会将任何非原生的 HTML 标签优先当作 Vue 组件处理，而将“渲染一个自定义元素”作为后备选项。这会在开发时导致 Vue 抛出一个“解析组件失败”的警告。要让 Vue 知晓特定元素应该被视为自定义元素并跳过组件解析，我们可以指定 [isCustomElement](https://cn.vuejs.org/api/application#app-config-compileroptions) 选项。
>
> 详情请参考 [跳过组件解析 | Vue官方文档](https://cn.vuejs.org/guide/extras/web-components.html#skipping-component-resolution)
</details>

## 基础使用
::: code-group

```vue [App.vue]
<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
</script>

<template>
  <LeaferApp :width="672" :height="340">
    <Leafer>
      <Star
        fill="#66A659"
        :width="15" :height="15"
        :draggable="true"
      />
    </Leafer>
  </LeaferApp>
</template>
```
:::

## 在线尝试

<Repl :code />
