# WatchEvent
布局事件。

> 详情请查看[WatchEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/guide/event/basic/Watch.html)

## 示例

<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[IWatchEvent-url]: https://www.leaferjs.com/ui/api/interfaces/IWatchEvent.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `watchRequest` | 请求布局 | [`IWatchEvent`][IWatchEvent-url] |
| `watchData` | 开始本轮布局 | [`IWatchEvent`][IWatchEvent-url] |
