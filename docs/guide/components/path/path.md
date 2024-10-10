<script setup lang="ts">
import code from './Path.vue?raw'
</script>
# Path
>
> 创建路径。可以画出任意形状的图形，了解[绘图命令](https://www.leaferjs.com/ui/reference/interface/ui/PathData.html)。
>

## 用法

<Repl :code />

## 属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| path | ^[string] | —— | 路径数据，支持 SVG 与 Cavnas 绘图命令 |
| windingRule |  "nonzero" \| "evenodd" | nonzero | 路径缠绕规则 |

> 详情查看[Path |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/display/Path.html)。
>
> 事件请查看[事件处理 |🌿 Leafer Vue](/guide/events/events)
