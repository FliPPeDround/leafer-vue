<script setup lang="ts">
import code from './Line.vue?raw'
</script>

# Line
>
> 绘制横线、斜线、竖线、折线、平滑曲线。
>

## 用法

<Repl :code />

## 属性

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| x | ^[number] | —— | x 轴起点 |
| y | ^[number] | —— | y 轴起点 |
| width | ^[number] | —— | 线的长度 |
| strokeWidth | ^[number] | 1 | 线的宽度 |
| stroke | ^[string] | —— | 线的颜色 |
| rotation | ^[number] | —— | 旋转`角度`， 取值范围: -180 ～ 180 |
| toPoint | {x:`^[number]`, y:`^[number]`} | —— | 画到某一点 setter（相对于元素起点的坐标）， 自动换算出 width 与 rotation |

> 详情查看[Line |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/display/Line.html)。
>
> 事件请查看[事件处理 |🌿 Leafer Vue](/guide/events/events)
