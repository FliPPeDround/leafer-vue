# 快速安装

## 安装

::: code-group

```bash [npm]
npm i leafer-vue leafer-ui
```

```bash [pnpm]
pnpm i leafer-vue leafer-ui
```

```bash [yarn]
yarn add leafer-vue leafer-ui
```

:::

## 体验

创建一个交互应用，可以缩放平移视图、拖拽、点击改变颜色的矩形。

```vue
<script setup lang="ts">
import { lfFrame, lfLeafer, lfRect } from 'leafer-vue'
import { ref } from 'vue'

const fill = ref('#32cd79')
function changeColor() {
  fill.value = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`
}
</script>

<template>
  <lfLeafer>
    <lfRect
      :x="100" :y="100"
      :width="200" :height="200" :fill="fill"
      :draggable="true"
      @tap="changeColor"
    />
  </lfLeafer>
</template>
```