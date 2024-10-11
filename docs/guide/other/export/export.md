# 导出
会等待视图内所有网络资源都加载完再进行导出图片。
> 详情查看[export |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/property/export.html)。

::: code-group

```vue [App.vue]
<script setup lang="ts">
import type { App } from 'leafer-ui'
import { LeaferApp } from 'leafer-vue'
import { shallowRef } from 'vue'

const AppRef = shallowRef<{
  app: App
}>()
async function handleExport() {
  await AppRef.value.app.export('hello_leafer-vue.jpg')
}
</script>

<template>
  <button @click="handleExport">
    导出
  </button>
  <LeaferApp ref="AppRef" :width="672" :height="340">
    <Leafer>
      <Text
        text="Hello Leafer Vue"
        fill="#66A659"
        :x="100"
        :y="100"
        :font-size="60"
      />
    </Leafer>
  </LeaferApp>
</template>
```
:::
