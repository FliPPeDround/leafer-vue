<script setup lang="ts">
import { Repl, ReplStore } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'

const hash = location.hash.slice(1)
const store = new ReplStore({
  serializedState: hash,
})

if (!hash) {
  store.setFiles({
    'App.vue': `<script setup lang="ts">
import { lfLeafer, lfRect } from 'leafer-vue'
import { ref } from 'vue'

const fill = ref('#32cd79')
function changeColor() {
  fill.value = \`#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}\`
}
<\/script>

<template>
  <div>
    <lfLeafer :width="500" :height="500">
      <lfRect
        :x="100" :y="100"
        :width="200" :height="200" :fill="fill"
        :draggable="true"
        @tap="changeColor"
      />
    </lfLeafer>
  </div>
</template>`,
    'import-map.json': `{
  "imports": {
    "leafer-ui": "https://cdn.jsdelivr.net/npm/leafer-ui/dist/index.js",
    "leafer-vue": "https://cdn.jsdelivr.net/npm/leafer-vue/dist/index.js"
  }
}`,
  })
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
    :show-compile-output="false"
    :show-import-map="true"
    :show-ts-config="false"
    :clear-console="false"
  />
</template>

<style>
.vue-repl {
  height: calc(100vh - 39px) !important;
}
</style>
