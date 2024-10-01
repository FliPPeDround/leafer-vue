<script setup lang="ts">
import code from './Box.vue?raw'
</script>

# Box
>
> 创建 Box。支持 Group 的功能和 Rect 的外观样式， 类似于 HTML5 中的 DIV，可以不断嵌套。
>

## 用法

<Repl :code />

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | ^[number] | —— | 宽度 |
| height | ^[number] | —— | 高度 |
| overflow | ^['show']\| ^['hide'] | ^['hide'] | 超出部分是否裁剪 |
> 详情查看[Box |🌿 Leafer UI](https://www.leaferjs.com/ui/guide/display/Box.html)。
>
> 事件请查看[事件处理 |🌿 Leafer Vue](/guide/events/events)
