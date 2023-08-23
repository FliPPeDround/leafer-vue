# lfImage 图片
>
> 图片对象，另外所有图形都支持通过 图案填充 来显示图片。
>
> 详情查看[Image](https://www.leaferjs.com/ui/guide/display/Image.html)。

## 用法

```vue
<script setup lang="ts">
import { lfImage, lfLeafer } from 'leafer-vue'
import DemoImg from './demo.png'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfImage
      :url="DemoImg"
      :draggable="true" @image-loaded="console.log('图片加载完成')"
    />
  </lfLeafer>
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | number | —— | 宽度，默认使用图片原始宽度 |
| height | number | —— | 高度， 默认使用图片原始高度 |
| url | string | —— | 图片地址 |

## 事件

| 名称 | 说明 |
| --- | --- |
