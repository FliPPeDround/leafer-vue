# Vue2

因为vue2不支持自定义渲染器，所以采用封装组件的方式，实现leafer-ui组件化
> 性能不及vue3版本

## 快速安装

::: code-group

```bash [pnpm]
pnpm i leafer-vue@2
```

```bash [yarn]
yarn add leafer-vue@2
```

```bash [npm]
npm i leafer-vue@2
```

```bash [bun]
bun add leafer-vue@2
```

:::
::: code-group

```vue [App.vue]
<script setup lang="ts">
import { lfFrame, lfLeafer, lfRect } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="500" :height="500" fill="#000">
    <lfFrame :width="300" :height="300" fill="#0f0">
      <lfRect
        :width="100" :height="100" fill="#f00"
        :draggable="true"
        @tap="console.log('tag')"
      />
    </lfFrame>
  </lfLeafer>
</template>
```
:::
