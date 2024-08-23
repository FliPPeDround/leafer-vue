<script setup lang="ts">
import code from './index.vue?raw'
</script>

# 快速安装

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

## 基本用法

`<LeaferApp />` 组件用于将Leafer应用嵌入现有的vue应用。

```vue
<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
</script>

<template>
  <LeaferApp :width="650" :height="340">
    <Leafer>
      <Star
        :width="15" :height="15"
        :draggable="true"
      />
    </Leafer>
  </LeaferApp>
</template>
```
