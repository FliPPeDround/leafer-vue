<script setup lang="ts">
import code from './Frame.vue?raw'
</script>

# Frame
>
> 创建画板。默认会裁剪掉超出宽高的内容，类似于 HTML5 中的一个页面。
>

## 用法

<Repl :code />

## 核心属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | ^[number] | —— | 宽度 |
| height | ^[number] | —— | 高度 |
| fill | ^[string] | ^[#FFF] | 填充色 |
| overflow | ^['show']\| ^['hide'] | ^['hide'] | 超出部分是否裁剪 |

> 详情查看[Frame |🌿 Leafer UI](https://www.leaferjs.com/ui/guide/display/Frame.html)。

