# ChildEvent
Child 事件。

`leafer.ready` 事件之后才会派发此事件，想在 ready 前 [执行相关事件](https://www.leaferjs.com/ui/reference/property/layer.html#waitparent)？

事件派发的顺序为：子元素、父元素、Leafer 实例，[渲染生命周期](https://www.leaferjs.com/ui/guide/life/render.html) 中会监听此事件。
> 详情请查看[ChildEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/basic/Child.html)

## 示例

<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

## 事件名称

[IChildEvent-url]: https://www.leaferjs.com/ui/api/interfaces/IChildEvent.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `childAdd` | 添加元素 | [`IChildEvent`][IChildEvent-url] |
| `childRemove` | 删除元素 | [`IChildEvent`][IChildEvent-url] |
| `childDestroy` | 销毁元素 （仅派发给元素自身） | [`IChildEvent`][IChildEvent-url] |
