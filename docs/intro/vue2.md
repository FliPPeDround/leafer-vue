# <div flex items-center>Vue2 <div i-vscode-icons:file-type-vue ml2 /></div>

因为vue2不支持自定义渲染器，所以采用封装组件的方式，实现leafer-ui组件化

## 快速安装

::: code-group

```bash [<div flex items-center><div i-vscode-icons:file-type-pnpm mr2 /> pnpm</div>]
pnpm i leafer-vue@2
```

```bash [<div flex items-center><div i-vscode-icons:file-type-yarn mr2 /> yarn</div>]
yarn add leafer-vue@2
```

```bash [<div flex items-center><div i-vscode-icons:file-type-npm mr2 /> npm</div>]
npm i leafer-vue@2
```

```bash [<div flex items-center><div i-vscode-icons:file-type-bun mr2 /> bun</div>]
bun add leafer-vue@2
```

:::
::: code-group

```vue [<div flex items-center><div i-vscode-icons:file-type-vue mr2 /> App.vue</div>]
<script setup lang="ts">
import { lfFrame, lfLeafer, lfRect } from 'leafer-vue'
</script>

<template>
  <lfLeafer :width="500" :height="500" fill="#000">
    <lfFrame :width="300" :height="300" fill="#0f0">
      <lfRect
        :width="100" :height="100" fill="#f00"
        :draggable="true"
        @tap="console.log('tag')"
      />
    </lfFrame>
  </lfLeafer>
</template>
```
:::
