# KeyEvent

键盘事件。
只能在 Leafer 实例上监听键盘事件。
> 详情请查看[KeyEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/ui/Key.html)

## 示例

> 按下方向键⌨️移动方块

<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[IKeyEvent-url]: https://www.leaferjs.com/ui/api/interfaces/IKeyEvent.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `keyDown` | 按下按键事件， 长按会不断触发 | [`IKeyEvent`][IKeyEvent-url] |
| `keyHold` | 按住按键事件， 长按只会触发一次 | [`IKeyEvent`][IKeyEvent-url] |
| `keyUp` | 抬起按键事件 | [`IKeyEvent`][IKeyEvent-url] |
