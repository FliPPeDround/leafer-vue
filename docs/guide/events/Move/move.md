# MoveEvent
移动事件，一般用于视窗交互中平移视图。
1. 移动端: 双指滑动
2. 触摸板: 双指滑动
3. 鼠标: 滚轮（纵向平移），Shift + 滚轮（横向平移），鼠标中键 + 拖拽 (自由移动)
4. 拖拽: 拖拽元素到达视图边界时，会自动平移视图，以实现向外拖拽
> 详情请查看[MoveEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/ui/Move.html)

## 示例

<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[IMoveEvent-url]: https://www.leaferjs.com/ui/api/interfaces/IMoveEvent.html


| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `moveStart` | 开始移动事件 | [`IMoveEvent`][IMoveEvent-url] |
| `move` | 移动事件 | [`IMoveEvent`][IMoveEvent-url] |
| `moveEnd` | 结束移动事件 | [`IMoveEvent`][IMoveEvent-url] |


