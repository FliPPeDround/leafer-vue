<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import { ref } from 'vue'
import { isCustomElement } from 'leafer-vue/compiler'

const { code } = defineProps<{ code: string }>()

const isDark = useDark()

const store = useStore({
  template: ref({
    welcomeSFC: code,
  }),
  sfcOptions: ref({
    template: {
      compilerOptions: {
        isCustomElement,
      },
    },
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
    :preview-options="{
      bodyHTML: `<style>html{background-color: ${isDark ? '#1b1b1f' : '#ffffff'};}</style>`,
    }"
    @keydown="handleKeydown"
  />
</template>

<style>
.vue-repl {
  --color-branding: var(--vp-c-brand-1) !important;
  height: 720px !important;
}
.output-container {
  height: 100% !important;
}
</style>
