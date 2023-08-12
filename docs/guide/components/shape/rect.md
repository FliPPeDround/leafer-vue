# lfRect 矩形
>
> 绘制矩形、圆角矩形。
>
> 详情查看[Rect](https://www.leaferjs.com/ui/guide/display/Rect.html)。

## 用法

```vue
<script setup lang="ts">
import { lfLeafer, lfRect } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfRect :width="100" :height="100" fill="#000" />
  </lfLeafer>
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | number | —— | 宽度 |
| height | number | —— | 高度 |
| fill | string | —— | 填充色 |
| cornerRadius | number[] | —— | 圆角大小，可以分别设置 4 个圆角 |

## 事件

| 名称 | 说明 |
| --- | --- |
