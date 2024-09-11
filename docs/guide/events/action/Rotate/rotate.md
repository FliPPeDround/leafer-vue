# RotateEvent
缩放事件，一般用于视窗交互中缩放视图。
1. 移动端: 双指旋转
2. 触摸板: 双指旋转（仅 Safari 支持）
> 详情请查看[RotateEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/ui/Rotate.html)

## 示例

<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[IRotateEvent-url]: https://www.leaferjs.com/ui/api/interfaces/IRotateEvent.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `rotateStart` | 开始旋转事件 | [`IRotateEvent`][IRotateEvent-url] |
| `rotate` | 旋转事件 | [`IRotateEvent`][IRotateEvent-url] |
| `rotateEnd` | 结束旋转事件 | [`IRotateEvent`][IRotateEvent-url] |
