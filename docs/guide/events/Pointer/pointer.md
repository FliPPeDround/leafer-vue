# PointerEvent
鼠标、手写笔、触摸屏点击事件。
> 详情请查看[PointerEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/ui/Pointer.html)

## 示例
<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

### 点击事件
| 事件名  | 说明 |
| --- | --- |
| `tap` | 点击事件 |
| `double_tap` | 双击事件 |
| `long_tap` | 长按事件 |
| `click` | 点击事件(建议使用`tap`) |
| `double_click` | 双击事件(建议使用`double_tap`) |

### 鼠标事件
| 事件名  | 说明 |
| --- | --- |
| `pointerDown` | 按下事件 |
| `pointerMove` | 光标移动事件 |
| `pointerUp` | 抬起事件 |
| `pointerOver` | 鼠标移入事件 |
| `pointerOut` | 鼠标移出事件 |
| `pointerEnter` | 鼠标移入事件 |
| `pointerLeave` | 鼠标移出事件 |

### 右键菜单
| 事件名  | 说明 |
| --- | --- |
| `pointerMenu` | 右键菜单事件，同 HTML 的 contextmenu 事件，按下时触发
| `pointerMenu_tap` | 右键 tap 事件, 抬起后触发。


