# lfLine 线条
>
> 绘制横线、斜线、竖线， 通过 width 与 rotation 定义直线。
>
> 详情查看[Line](https://www.leaferjs.com/ui/guide/display/Line.html)。

## 用法

```vue
<script setup lang="ts">
import { lfLeafer, lfLine } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfLine
      :width="100" :stroke-width="5"
      :rotation="45" stroke="#4dcb71"
    />
  </lfLeafer>
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| x | number | —— | x 轴起点 |
| y | number | —— | y 轴起点 |
| width | number | —— | 线的长度 |
| strokeWidth | number | 1 | 线的宽度 |
| stroke | string | —— | 线的颜色 |
| rotation | number | —— | 旋转`角度`， 取值范围: -180 ～ 180 |
| toPoint | {x:`number`, y:`number`} | —— | 画到某一点 setter（相对于元素起点的坐标）， 自动换算出 width 与 rotation |

## 事件

| 名称 | 说明 |
| --- | --- |
