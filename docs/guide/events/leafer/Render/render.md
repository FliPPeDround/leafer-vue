# RenderEvent
渲染事件。

> 详情请查看[RenderEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/basic/Render.html)

## 示例

> 点击按钮添加新元素，重新触发渲染事件。

<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[IRenderEvent-url]: https://www.leaferjs.com/ui/api/interfaces/IRenderEvent.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `renderRequest` | 请求渲染 | [`IRenderEvent`][IRenderEvent-url] |
| `renderStart` | 开始本轮渲染 | [`IRenderEvent`][IRenderEvent-url] |
| `renderBefore` | 单次渲染前 | [`IRenderEvent`][IRenderEvent-url] |
| `render` | 单词渲染，可进行多次 | [`IRenderEvent`][IRenderEvent-url] |
| `renderAfter` | 单词渲染后 | [`IRenderEvent`][IRenderEvent-url] |
| `renderAgain` | 准备再次渲染 | [`IRenderEvent`][IRenderEvent-url] |
| `renderEnd` | 结束本轮渲染 | [`IRenderEvent`][IRenderEvent-url] |
| `renderNext` | 本轮渲染已完成，预备下一次渲染，可以用于下一帧前的 动画 计算 | [`IRenderEvent`][IRenderEvent-url] |
