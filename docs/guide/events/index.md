# 事件处理

## 监听事件
我们可以使用 `v-on` 指令 (简写为 `@`) 来监听 Leafer 事件，并在事件触发时执行对应的 JavaScript。用法：`v-on:tap="handler"` 或 `@tap="handler"`。
```vue
<Rect @tap="() => console.log('Tap')" />
```
> 详情请查看 [Vue事件处理](https://cn.vuejs.org/guide/essentials/event-handling.html)

## 事件修饰符

- `.once`：只触发一次

```vue
<!-- 只监听一次Tap事件 -->
<Rect @tap.once="() => console.log('Tap')" />
```

> 详情请查看 [once |🌿 Leafer UI ](https://www.leaferjs.com/ui/reference/property/on.html#%E5%8F%AA%E7%9B%91%E5%90%AC%E4%B8%80%E6%AC%A1%E4%BA%8B%E4%BB%B6)

## 移除事件

移除事件监听需要获取组件实例使用`off`方法移除事件监听。

::: code-group

```vue [<div flex items-center><div i-vscode-icons:file-type-vue mr2 /> App.vue</div>]
<script setup lang="ts">
import { Leafer as LeaferUI } from 'leafer-ui'
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const LeaferRef = ref<LeaferUI>(null)
function handelTap() {
  console.log('Tap')
  LeaferRef.value!.off('tap', handelTap)
}
</script>

<template>
  <LeaferApp :width="672" :height="340">
    <Leafer ref="LeaferRef" @tap="handelTap" />
  </LeaferApp>
</template>
```
:::

> 详情请查看 [off |🌿 Leafer UI ](https://www.leaferjs.com/ui/reference/property/off.html)

## 派发事件

我们可以使用`emit`手动派发事件。

::: code-group

```vue [<div flex items-center><div i-vscode-icons:file-type-vue mr2 /> App.vue</div>]
<script setup lang="ts">
import { Leafer as LeaferUI } from 'leafer-ui'
import { LeaferApp } from 'leafer-vue'
import { nextTick, ref } from 'vue'

const LeaferRef = ref<LeaferUI>(null)
nextTick(() => {
  LeaferRef.value!.emit('tap')
})
</script>

<template>
  <LeaferApp :width="672" :height="340">
    <Leafer ref="LeaferRef" @tap="() => console.log('emit Tap')" />
  </LeaferApp>
</template>
```
> 详情请查看 [emit |🌿 Leafer UI ](https://www.leaferjs.com/ui/reference/property/emit.html)

更复杂的[模拟交互](https://www.leaferjs.com/ui/reference/event/simulation.html)
