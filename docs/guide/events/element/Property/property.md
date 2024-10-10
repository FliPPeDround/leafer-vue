# PropertyEvent
元素属性事件，leafer.ready 事件之后才会派发此事件。

> 详情请查看[PropertyEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/guide/event/basic/Property.html)

## 示例

> 点击方块修改宽度，触发`PropertyEvent`

<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[PropertyEvent-url]: https://www.leaferjs.com/ui/api/interfaces/PropertyEvent.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `propertyChange` | 同时派发给元素自身、Leafer 实例 | [`PropertyEvent`][PropertyEvent-url] |
| `propertyLeafer_change` | 只派发给 Leafer 实例自身 | [`PropertyEvent`][PropertyEvent-url] |
