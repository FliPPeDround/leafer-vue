# lfStar 框架
>
> 绘制车标、星光、五角星、多角星形。
>
> 详情查看[Star](https://www.leaferjs.com/ui/guide/display/Star.html)。

## 用法

```vue
<script setup lang="ts">
import { lfLeafer, lfStar } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfStar
      :width="100" :height="100"
      :points="5"
      fill="#ff0000"
    />
  </lfLeafer>
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | number | —— | 宽度 |
| height | number | —— | 高度 |
| points | number | —— | 星形的顶点数，取值范围为 >=3 |
| innerRadius | number | 0.382 | 内半径比例，取值范围为 0.0 ～ 1.0 |

## 事件

| 名称 | 说明 |
| --- | --- |
