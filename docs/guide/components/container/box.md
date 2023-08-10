# lfBox 框架
>
> 创建 Box。支持 Group 的功能和 Rect 的外观样式， 类似于 HTML5 中的 DIV，可以不断嵌套。
>
> 详情查看[Box](https://www.leaferjs.com/ui/guide/display/Box.html)
>
## 用法

```vue
<script setup lang="ts">
import { lfBox, lfFrame } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfBox :width="100" :height="100" fill="#000" />
  </lfLeafer>
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | number | —— | 宽度 |
| height | number | —— | 高度 |
| overflow | 'show' \| 'hide' | hide | 超出部分是否裁剪 |

## 事件

| 名称 | 说明 |
| --- | --- |
