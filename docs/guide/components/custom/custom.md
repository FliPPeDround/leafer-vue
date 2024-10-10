# Custom
> 自定义元素，详情请查看[Custom |🌿 Leafer UI](https://www.leaferjs.com/ui/guide/display/custom/base/register.html)

## 用法
<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code />

> [!TIP]
> - 自定义tag名不能与内置的tag名冲突，需要全局唯一
> - 自定义类名不能与`<template />`中声明的组件名一致

### 属性
| 属性名 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| is | `Constructor` | - | 自定义元素类 |
