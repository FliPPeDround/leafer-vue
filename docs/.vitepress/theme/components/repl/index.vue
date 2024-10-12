<script setup lang="ts">
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import { isCustomElement } from 'leafer-vue/compiler'
import { computed, ref } from 'vue'
import { isDark } from './../../composables/dark'

const props = defineProps<{ code: string, imports?: Record<string, string> }>()

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
      'leafer-vue': import.meta.env.DEV ? `${location.origin}/leafer-vue.proxy.js` : 'https://unpkg.com/leafer-vue/dist/index.js',
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
    headHTML: /* html */ `
      <style>
        html{
          background-color: ${isDark.value ? '#1b1b1f' : '#ffffff'};
          color: ${isDark.value ? '#fffff5DB' : '#3c3c43'};
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
@media (max-width: 720px) {
  .vue-repl {
    height: 400px !important;
  }
}
</style>
