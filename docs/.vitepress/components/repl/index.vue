<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import { ref } from 'vue'

const { code } = defineProps<{ code: string }>()

const isDark = useDark()

const store = useStore({
  template: ref({
    welcomeSFC: code,
  }),
  builtinImportMap: ref({
    imports: {
      'vue': 'https://unpkg.com/vue/dist/vue.esm-browser.prod.js',
      'leafer-ui': 'https://cdn.jsdelivr.net/npm/leafer-ui/dist/index.js',
      'leafer-vue': `${location.origin}/leafer-vue.proxy.js`,
    },
  }),
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
    :editor="CodeMirror"
    :auto-resize="false"
    :show-compile-output="false"
    :show-import-map="true"
    :show-ts-config="false"
    layout="vertical"
    layout-reverse
    @keydown="handleKeydown"
  />
</template>

<style>
.vue-repl {
  --color-branding: #a8b1ff !important;
  height: 720px !important;
}
.tab-buttons {
  display: none;
}
.output-container {
  height: 100% !important;
}
</style>
