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

```vue [App.vue]
<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
</script>

<template>
  <LeaferApp :width="672" :height="340">
    <Leafer>
      <Star
        :width="15" :height="15"
        :draggable="true"
      />
    </Leafer>
  </LeaferApp>
</template>
```
:::
