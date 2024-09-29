# DragEvent
拖动事件。
> 详情请查看[DragEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/ui/Drag.html)

## 示例
<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[IDragEvent-url]: https://www.leaferjs.com/ui/api/interfaces/IDragEvent.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `dragStart` | 开始拖动事件 | [`IDragEvent`][IDragEvent-url] |
| `drag` | 拖动事件中 | [`IDragEvent`][IDragEvent-url] |
| `dragEnd` | 结束拖动事件 | [`IDragEvent`][IDragEvent-url] |
| `dragOver` | 拖动元素 over | [`IDragEvent`][IDragEvent-url] |
| `dragOut` | 拖动元素 out | [`IDragEvent`][IDragEvent-url] |
| `dragEnter` | 拖动元素进入 | [`IDragEvent`][IDragEvent-url] |
| `dragLeave` | 拖动元素离开 | [`IDragEvent`][IDragEvent-url] |
