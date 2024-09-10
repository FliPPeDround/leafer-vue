# ImageEvent
图片事件。
> 详情请查看[ImageEvent |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/event/basic/Image.html)

## 示例

<script setup lang="ts">
import code from './../../components/image/Image.vue?raw'
</script>

<Repl :code="code"  />

## 事件名称

[ILeaferImage-url]: https://www.leaferjs.com/ui/api/interfaces/ILeaferImage.html

| 事件名  | 说明 | 参数 |
| --- | --- | --- |
| `imageLoad` | 图片开始加载 | [`ILeaferImage`][ILeaferImage-url] |
| `imageLoaded` | 图片加载完成 | [`ILeaferImage`][ILeaferImage-url] |
| `imageError` | 图片加载失败 | [`ILeaferImage`][ILeaferImage-url] |


