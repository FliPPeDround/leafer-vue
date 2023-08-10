# lfGroup 组合
>
> 创建 Group。用于将元素进行打组，自身没有样式，可以不断嵌套。
>
> 详情查看[Group](https://www.leaferjs.com/ui/guide/display/Group.html)
>
## 用法

```vue
<script setup lang="ts">
import { lfFrame, lfGroup } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfGroup :width="100" :height="100" fill="#000" />
  </lfLeafer>
</template>
```
