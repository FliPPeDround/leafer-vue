# 插件中心

leafer-vue完全兼容leafer插件，你可以通过插件来扩展leafer-vue的功能。
> 详情请查看🛒[leafer插件中心](https://www.leaferjs.com/ui/plugin/)。

## 示例

### 图形编辑器

#### 安装

::: code-group

```bash [pnpm]
pnpm i @leafer-in/editor
```

```bash [yarn]
yarn add @leafer-in/editor
```

```bash [npm]
npm i @leafer-in/editor
```

```bash [bun]
bun add @leafer-in/editor
```
:::

#### 体验
<script setup lang="ts">
import code from './editor.vue?raw'
</script>
<Repl
  :code="code"
  :imports="{
    '@leafer/core': 'https://unpkg.com/@leafer/core/lib/core.esm.js',
    '@leafer-ui/draw': 'https://unpkg.com/@leafer-ui/draw/lib/draw.esm.js',
    '@leafer-ui/core': 'https://unpkg.com/@leafer-ui/core/lib/core.esm.js',
    'leafer-ui': 'https://unpkg.com/leafer-editor/dist/web.module.min.js',
    '@leafer-in/editor': 'https://unpkg.com/@leafer-in/editor/dist/editor.esm.js',
    '@leafer-in/resize': 'https://unpkg.com/@leafer-in/resize/dist/resize.esm.js'
  }"
/>
