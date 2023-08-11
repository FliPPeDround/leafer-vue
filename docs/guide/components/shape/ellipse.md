# lfEllipse 框架
>
> 绘制圆、圆环、圆环扇形、扇形、弧线、椭圆。
>
> 详情查看[Ellipse](https://www.leaferjs.com/ui/guide/display/Ellipse.html)。

## 用法

```vue
<script setup lang="ts">
import { lfEllipse, lfLeafer } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfEllipse
      :width="100" :height="100"
      :start-angle="-60" :end-angle="180" :inner-radius="0.5"
      fill="#feb027"
    />
  </lfLeafer>
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | number | —— | 宽度 |
| height | number | —— | 高度 |
| startAngle | number | —— | 弧形的起始`角度`, 取值范围为 -180 ～ 180 |
| endAngle | number | —— | 弧形的结束`角度`, 取值范围为 -180 ～ 180 |
| innerRadius | number | —— | 内半径比例, 取值范围为 0.0 ～ 1.0 |

## 事件

| 名称 | 说明 |
| --- | --- |
