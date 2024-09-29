# LayoutEvent
布局事件。

> 详情请查看[LayoutEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/basic/Layout.html)

## 示例

> 点击按钮添加新元素，重新触发布局事件。

<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[ILayoutEvent-url]: https://www.leaferjs.com/ui/api/interfaces/ILayoutEvent.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `layoutRequest` | 请求布局 | [`ILayoutEvent`][ILayoutEvent-url] |
| `layoutStart` | 开始本轮布局 | [`ILayoutEvent`][ILayoutEvent-url] |
| `layoutBefore` | 单次布局前 | [`ILayoutEvent`][ILayoutEvent-url] |
| `layout` | 单词布局，可进行多次 | [`ILayoutEvent`][ILayoutEvent-url] |
| `layoutAfter` | 单词布局后 | [`ILayoutEvent`][ILayoutEvent-url] |
| `layoutAgain` | 准备再次布局 | [`ILayoutEvent`][ILayoutEvent-url] |
| `layoutEnd` | 结束本轮布局 | [`ILayoutEvent`][ILayoutEvent-url] |
