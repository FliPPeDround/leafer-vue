<script setup lang="ts">
import type { App } from 'leafer-ui'
import { Text as LfText } from 'leafer-ui'
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const TextRef = ref<{
  app: App
}>()
const fill = ref('#F51123')
async function handleExport() {
  fill.value = fill.value === '#F51123' ? '#66A659' : '#F51123'
  // await TextRef.value!.export('test.jpg')
}
</script>

<template>
  <button @click="handleExport">
    导出
  </button>
  <LeaferApp
    ref="TextRef"
    :width="672"
    :height="340"
    type="draw"
    :fill
  >
    <Leafer>
      <Text
        text="Hello Leafer Vue"
        fill="#66A659"
        font-weight="black"
        italic
        :x="100"
        :y="100"
        :font-size="60"
      />
    </Leafer>
  </LeaferApp>
</template>
