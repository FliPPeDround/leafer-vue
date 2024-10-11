<script setup lang="ts">
import code from './leaferApp.vue?raw'
</script>

# Leafer
>
> 用于创建Leafer组件。

## 基础用法
<Repl :code="code"  />

## 属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | ^[number] | —— | 宽度 |
| height | ^[number] | —— | 高度 |
| pixelRatio | ^[number] | 1 | 像素比 |
| fill | ^[string] | —— | 填充色 |
| hittable |^[boolean] | true | 是否响应交互事件 |
> 更多属性请查看[Leafer |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/display/Leafer.html)
>
> 事件请查看[事件处理 |🌿 Leafer Vue](/guide/events/events)
