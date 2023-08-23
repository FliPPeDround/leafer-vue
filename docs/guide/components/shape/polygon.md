# lfPolygon 多边形
>
> 绘制三角形、菱形、五边形、多边形。
>
> 详情查看[Polygon](https://www.leaferjs.com/ui/guide/display/Polygon.html)。

## 用法

```vue
<script setup lang="ts">
import { lfLeafer, lfPolygon } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfPolygon
      :width="100" :height="100"
      :sides="3"
      fill="#ff4b4b"
    />
  </lfLeafer>
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | number | —— | 宽度 |
| height | number | —— | 高度 |
| sides | number | —— | 多边形的边数，取值范围为 >=3 |

## 事件

| 名称 | 说明 |
| --- | --- |
