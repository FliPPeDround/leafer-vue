<script setup lang="ts">
import code from './Star.vue?raw'
</script>
# Star
>
> 绘制车标、星光、五角星、多角星形。
>
## 用法

<Repl :code />

## 属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | ^[number] | —— | 宽度 |
| height | ^[number] | —— | 高度 |
| points | ^[number] | ^[5] | 星形的顶点数，取值范围为 >=3 |
| innerRadius | ^[number] | 0.382 | 内半径比例，取值范围为 0.0 ～ 1.0 |

> 详情查看[Star |🌿 Leafer UI](https://www.leaferjs.com/ui/guide/display/Star.html)。
>
> 事件请查看[事件处理 |🌿 Leafer Vue](/guide/events/events)
