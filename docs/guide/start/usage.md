<script setup lang="ts">
import code from './index.vue?raw'
</script>

# 快速安装

::: code-group

```bash [<div flex items-center><div i-vscode-icons:file-type-pnpm mr2 /> pnpm</div>]
pnpm i leafer-vue
```

```bash [<div flex items-center><div i-vscode-icons:file-type-yarn mr2 /> yarn</div>]
yarn add leafer-vue
```

```bash [<div flex items-center><div i-vscode-icons:file-type-npm mr2 /> npm</div>]
npm i leafer-vue
```

```bash [<div flex items-center><div i-vscode-icons:file-type-bun mr2 /> bun</div>]
bun add leafer-vue
```

:::

## 初始化vue插件

添加Vue插件配置，支持自定义元素。
::: code-group

```ts [<div flex items-center><div i-vscode-icons:file-type-vite mr2 /> vite.config.ts</div>]
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

```vue [<div flex items-center><div i-vscode-icons:file-type-vue mr2 /> App.vue</div>]
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
