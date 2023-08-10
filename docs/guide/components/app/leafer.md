# lfLeafer 应用
>
> 用于创建应用的根组件，详情查看[Leafer](https://www.leaferjs.com/ui/guide/display/Leafer.html)。

## 用法

```vue
<script setup lang="ts">
import { lfLeafer, lfRect } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff" />
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | number | —— | 宽度 |
| height | number | —— | 高度 |
| pixelRatio | number | 1 | 像素比 |
| fill | string | —— | 填充色 |
| hittable | boolean | true | 是否响应交互事件 |
| ready | boolean | —— | 否准备就绪（完成首次布局） |
| viewReady | boolean | —— | 视图是否准备就绪（完成首次渲染） |
| running | boolean | —— | 是否运行中 |

## 事件

| 名称 | 说明 |
| --- | --- |
| LeaferEvent | [Leafer事件](https://www.leaferjs.com/ui/guide/event/basic/Leafer.html) |
| ChildEvent | [子组件事件](https://www.leaferjs.com/ui/guide/event/basic/Child.html) |
