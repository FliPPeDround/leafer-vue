# LeaferEvent
Leafer 事件。

> 详情请查看[LeaferEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/guide/event/basic/Leafer.html)

## 示例
<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[ILeaferEvent-url]: https://www.leaferjs.com/ui/api/interfaces/ILeaferEvent.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `leaferStart` | 启动应用 | [`ILeaferEvent`][ILeaferEvent-url] |
| `leaferBefore_ready` | 应用准备就绪前 | [`ILeaferEvent`][ILeaferEvent-url] |
| `leaferReady` | 应用准备就绪（首次布局完成） | [`ILeaferEvent`][ILeaferEvent-url] |
| `leaferAfter_ready` | 应用准备就绪后 | [`ILeaferEvent`][ILeaferEvent-url] |
| `leaferView_ready` | 视图准备就绪（首次渲染完成） | [`ILeaferEvent`][ILeaferEvent-url] |
| `leaferStop` | 应用停止 | [`ILeaferEvent`][ILeaferEvent-url] |
| `leaferRestart` | 应用重启 | [`ILeaferEvent`][ILeaferEvent-url] |
| `leaferEnd` | 结束应用（即将销毁） | [`ILeaferEvent`][ILeaferEvent-url] |
