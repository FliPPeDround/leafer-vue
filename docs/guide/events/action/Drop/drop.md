# DropEvent
拖放事件。
> 详情请查看[DropEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/ui/Drop.html)

## 示例

> <div flex items-center>试着将<div w-1em h-1em bg="#00a98e" />小绿方块拖放到<div w-1em h-1em bg="#a8b1ff" rounded-4px />紫色的方块上，触发<code class="py0!">drop</code> 事件。</div>

<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[IDropEvent-url]: https://www.leaferjs.com/ui/api/interfaces/IDropEvent.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `drop` | 放置对象事件 | [`IDropEvent`][IDropEvent-url] |
