# PointerEvent
鼠标、手写笔、触摸屏点击事件。
> 详情请查看[PointerEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/ui/Pointer.html)

## 示例
<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[IPointerEvent-url]: https://www.leaferjs.com/ui/api/interfaces/IPointerEvent.html

### 点击事件
| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `tap` | 点击事件 | [`IPointerEvent`][IPointerEvent-url] |
| `double_tap` | 双击事件 | [`IPointerEvent`][IPointerEvent-url] |
| `long_tap` | 长按事件 | [`IPointerEvent`][IPointerEvent-url] |
| `click` | 点击事件(建议使用`tap`) | [`IPointerEvent`][IPointerEvent-url] |
| `double_click` | 双击事件(建议使用`double_tap`) | [`IPointerEvent`][IPointerEvent-url] |

### 鼠标事件
| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `pointerDown` | 按下事件 | [`IPointerEvent`][IPointerEvent-url] |
| `pointerMove` | 光标移动事件 | [`IPointerEvent`][IPointerEvent-url] |
| `pointerUp` | 抬起事件 | [`IPointerEvent`][IPointerEvent-url] |
| `pointerOver` | 鼠标移入事件 | [`IPointerEvent`][IPointerEvent-url] |
| `pointerOut` | 鼠标移出事件 | [`IPointerEvent`][IPointerEvent-url] |
| `pointerEnter` | 鼠标移入事件 | [`IPointerEvent`][IPointerEvent-url] |
| `pointerLeave` | 鼠标移出事件 | [`IPointerEvent`][IPointerEvent-url] |

### 右键菜单
| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `pointerMenu` | 右键菜单事件，同 HTML 的 contextmenu 事件，按下时触发 | [`IPointerEvent`][IPointerEvent-url] |
| `pointerMenu_tap` | 右键 tap 事件, 抬起后触发 | [`IPointerEvent`][IPointerEvent-url] |


