<script setup lang="ts">
import code from './leaferApp.vue?raw'
</script>

# LeaferApp
>
> 用于创建Leafer应用的根组件，所有的Leafer元素都必须为`<LeaferApp />`的子组件。
> LeaferApp的子组件必须为`<Leafer />`用以初始化，可以有多个。

## 基础用法
<Repl :code="code"  />

## API

### LeaferApp Props

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | ^[number] | `800` | canvas画布的宽度 |
| height | ^[number] | `600` | canvas画布的高度 |
