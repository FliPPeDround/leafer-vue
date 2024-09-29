<script setup lang="ts">
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import { useDark } from '@vueuse/core'
import { isCustomElement } from 'leafer-vue/compiler'
import { computed, ref } from 'vue'

const props = defineProps<{ code: string, imports?: Record<string, string> }>()

const isDark = useDark()
const store = useStore({
  template: ref({
    welcomeSFC: props.code,
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
      'leafer-ui': 'https://unpkg.com/leafer-ui/dist/web.module.min.js',
      'leafer-vue': `${location.origin}/leafer-vue.proxy.js`,
      ...props.imports,
    },
  }),
})

function handleKeydown(evt: KeyboardEvent) {
  if ((evt.ctrlKey || evt.metaKey) && evt.code === 'KeyS')
    evt.preventDefault()
}
const previewOptions = computed(() => {
  return {
    bodyHTML: /* html */ `
      <style>
        html{
          background-color: ${isDark ? '#1b1b1f' : '#ffffff'};
          color: ${isDark ? '#fffff5DB' : '#3c3c43'};
        }
      </style>
      `,
  }
})
</script>

<template>
  <ClientOnly>
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
      :preview-options
      @keydown="handleKeydown"
    />
  </ClientOnly>
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
