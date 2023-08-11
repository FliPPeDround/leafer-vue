# lfPath 框架
>
> 创建路径。可以画出任意形状的图形，了解[绘图命令](https://www.leaferjs.com/ui/guide/interface/ui/PathData.html)。
>
> 详情查看[Path](https://www.leaferjs.com/ui/guide/display/Path.html)。

## 用法

```vue
<script setup lang="ts">
import { lfLeafer, lfPath } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfPath
      path="M 0 50 L 100 100 L 0 100 X 0 0 200 200 30"
      fill="#4dcb71"
      windingRule="evenodd"
    />
  </lfLeafer>
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| path | string | —— | 路径数据，支持 SVG 与 Cavnas 绘图命令 |
| windingRule |  "nonzero" \| "evenodd" | nonzero | 路径缠绕规则 |

## 事件

| 名称 | 说明 |
| --- | --- |
