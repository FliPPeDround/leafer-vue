<script setup lang="ts">
import code from './leaferApp.vue?raw'
</script>

# lfApp 应用
>
> 用于创建应用的根组件，子组件只能为[lfLeafer](leafer.md)，详情查看[APP](https://www.leaferjs.com/ui/guide/display/App.html)。

## 用法

```vue
<script setup lang="ts">
import { lfApp, lfLeafer } from 'leafer-vue'
</script>

<template>
  <lfApp :width="500" :height="500" fill="#000">
    <lfLeafer :width="100" :height="100" fill="#fff" />
  </lfApp>
</template>
```
<Repl :code="code"  />
