# ZoomEvent
缩放事件，一般用于视窗交互中缩放视图。
1. 移动端: 双指捏合
2. 触摸板: 双指滑动
3. 鼠标: Ctrl / Command + 滚轮
> 详情请查看[ZoomEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/ui/Zoom.html)

## 示例

<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[IZoomEvent-url]: https://www.leaferjs.com/ui/api/interfaces/IZoomEvent.html


| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `zoomStart` | 开始缩放事件 | [`IZoomEvent`][IZoomEvent-url] |
| `zoom` | 缩放事件 | [`IZoomEvent`][IZoomEvent-url] |
| `zoomEnd` | 结束缩放事件 | [`IZoomEvent`][IZoomEvent-url] |


