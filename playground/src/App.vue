<script setup lang="ts">
import { Repl, ReplStore } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'

const hash = location.hash.slice(1)
const store = new ReplStore({
  serializedState: hash,
  showOutput: true,
  outputMode: 'preview',
})

if (!hash) {
  store.setFiles({
    'App.vue': `<script setup>
const Leafer = LeaferUI.Leafer
const Rect = LeaferUI.Rect

const leafer = new Leafer({ view: window })

const rect = new Rect({
  x: 100,
  y: 100,
  width: 200,
  height: 200,
  fill: '#32cd79',
  draggable: true,
})

leafer.add(rect)
<\/script>`,
  })
}

const previewOptions = {
  headHTML: '<script src="https://unpkg.com/leafer-ui"><\/script>',
}
function share() {
  const hash = store.serialize()
  const shareUrl = location.origin + hash

  navigator.clipboard.writeText(shareUrl)
  alert('已复制分享链接')
}
</script>

<template>
  <button @click="share">
    share
  </button>
  <Repl
    :store="store"
    :editor="Monaco"
    :preview-options="previewOptions"
    :show-compile-output="false"
    :show-import-map="false"
    :show-ts-config="false"
    :clear-console="false"
  />
</template>

<style>
.vue-repl {
  height: calc(100vh - 39px) !important;
}
</style>
