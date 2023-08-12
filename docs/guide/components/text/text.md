# lfText 文本
>
> 绘制文本。与 HTML5 文本显示效果基本一致。
>
> 详情查看[Text](https://www.leaferjs.com/ui/guide/display/Text.html)。

## 用法

```vue
<script setup lang="ts">
import { lfLeafer, lfText } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="100" :height="100" fill="#fff">
    <lfText
      text="Welcome to Leafer-vue"
      :rotation="45" fill="#4dcb71"
    />
  </lfLeafer>
</template>
```

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | number | —— | 文本框宽度，不设置时为自动宽度。 |
| height | number | —— | 文本框高度，不设置时为自动高度。 |
| text | string | —— | 文本内容 |
| fontFamily | string | —— | 字体 |
| fontSize | number | —— | 文字大小 |
| fontWeight | number | —— | 文字粗细 |
| italic | boolean | false | 是否斜体 |
| textCase | string | —— | 文字大小写 |
| textDecoration | string | —— | 文字下划线或删除线 |
| letterSpacing | number | —— | 字间距 |
| lineHeight | number | —— | 行高 |
| textOverflow | string | —— | 文字溢出处理 |
| paraIndent | number | —— | 段落首行缩进，单位为 px |
| paraSpacing | number | —— | 段落间距，单位为 px |
| textAlign | string | —— | 文字对齐方式 |
| verticalAlign | string | —— | 文字垂直对齐方式 |
| padding | number[] | —— | 文本内边距，可分别设置 4 个值 |

## 事件

| 名称 | 说明 |
| --- | --- |
