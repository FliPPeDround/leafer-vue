<script setup lang="ts">
import type { ResizeEvent } from 'leafer-ui'
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const width = ref(672)

const oldValue = ref(672)
function handelResize(e: ResizeEvent) {
  oldValue.value = e.old.width
}
</script>

<template>
  <div>
    <button @click="width -= 20">
      减少画布宽度
    </button>
    <div>Old Width: {{ oldValue }} ;</div>
    <div>New Width: {{ width }} ;</div>
  </div>
  <LeaferApp
    :width="width"
    :height="270"
    type="draw"
    fill="#00a98e"
  >
    <Leafer @resize="handelResize" />
  </LeaferApp>
</template>
