# 动画
动画功能，支持延时、摇摆循环、seek、动画事件，可制作过渡动画、关键帧动画、路径动画。
> 详情查看[animate |🌿 Leafer UI](https://www.leaferjs.com/ui/guide/plugin/animate.html)

::: info
需安装 动画插件 才能使用。
:::

::: code-group

```bash [pnpm]
pnpm i @leafer-in/animate
```

```bash [yarn]
yarn add @leafer-in/animate
```

```bash [npm]
npm i @leafer-in/animate
```

```bash [bun]
bun add @leafer-in/animate
```

:::

<AnimateExample />

::: code-group

```vue [App.vue]
<script setup lang="ts">
import type { IAnimation } from 'leafer-ui'
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'
import '@leafer-in/animate'

const bind = ref({
  y: 100,
  cornerRadius: 50,
  fill: '#32cd79',
})

const animation = ref<IAnimation | undefined>()

function handleTap() {
  animation.value = {
    style: { x: 500, cornerRadius: 0, fill: '#ffcd00' },
    duration: 1,
  }
}
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Rect
        v-bind="bind"
        :animation="animation"
        @tap="handleTap"
      />
    </Leafer>
  </LeaferApp>
</template>
```
:::
