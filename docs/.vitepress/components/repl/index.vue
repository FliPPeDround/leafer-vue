<script setup lang="ts">
import '@vue/repl/style.css'
import { useDark } from '@vueuse/core'
import { Repl, ReplStore } from '@vue/repl'
import Editor from '@vue/repl/codemirror-editor'

const { code } = defineProps<{ code: string }>()

const isDark = useDark()
const store = new ReplStore()

store.setFiles({
  'App.vue': code,
  'import-map.json': `{
  "imports": {
    "leafer-ui": "https://cdn.jsdelivr.net/npm/leafer-ui/dist/index.js",
    "leafer-vue": "https://cdn.jsdelivr.net/npm/leafer-vue/dist/index.js"
  }
}`,
})

function handleKeydown(evt: KeyboardEvent) {
  if ((evt.ctrlKey || evt.metaKey) && evt.code === 'KeyS')
    evt.preventDefault()
}
</script>

<template>
  <Repl
    :theme="isDark ? 'dark' : 'light'"
    :store="store"
    :editor="Editor"
    :auto-resize="false"
    :show-compile-output="false"
    :show-import-map="false"
    :show-ts-config="false"
    :clear-console="false"
    @keydown="handleKeydown"
  />
</template>

<style>
.vue-repl {
  height: 600px !important;
}

.left {
  border: none !important;
}

.split-pane:not(.show-output) .left {
  width: 100% !important;
}
.split-pane.show-output .left {
  display: none !important;
}

.split-pane:not(.show-output) .right {
  display: none !important;
}
.split-pane.show-output .right {
  width: 100% !important;
}

.dragger {
  display: none !important;
}

.toggler {
  display: block !important;
}
</style>
