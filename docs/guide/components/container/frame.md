# lfFrame 框架
>
> 创建画板。默认会裁剪掉超出宽高的内容，类似于 HTML5 中的一个页面。
>
> 详情查看[Frame](https://www.leaferjs.com/ui/guide/display/Frame.html)。

## 用法

```vue
<script setup lang="ts">
import { lfFrame, lfLeafer } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfFrame :width="100" :height="100" fill="#000" />
  </lfLeafer>
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | number | —— | 宽度 |
| height | number | —— | 高度 |
| fill | string | —— | 填充色 |
| overflow | 'show' \| 'hide' | hide | 超出部分是否裁剪 |

## 事件

| 名称 | 说明 |
| --- | --- |
