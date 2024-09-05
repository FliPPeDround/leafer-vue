# Custom
> 自定义元素，详情请查看[Custom |🌿 Leafer UI](https://www.leaferjs.com/ui/reference/display/custom/base/register.html)

## 用法
<script setup lang="ts">
import code from './index.vue?raw'
</script>

<Repl :code />

> [!TIP]
> - 自定义tag名不能与内置的tag名冲突，需要全局唯一
> - 自定义tag名不能与`<script />`中定义的类名一致

## 原生自定义元素

自定义元素，vue编译器无法识别，会出现警告，需要手动注册。
::: code-group

```ts [<div flex items-center><div i-vscode-icons:file-type-vite mr2 /> vite.config.ts</div>]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { isCustomElement } from 'leafer-vue/compiler'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => isCustomElement(tag, ['CustomRect']),
        },
      },
    }),
  ],
})
```
:::
