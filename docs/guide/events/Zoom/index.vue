<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'
import type { IZoomEvent } from '@leafer-ui/interface'

const size = ref({ width: 100, height: 100 })
function handeleZoom(e: IZoomEvent) {
  const { scale } = e
  size.value = {
    width: size.value.width * scale,
    height: size.value.height * scale,
  }
}
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer @zoom="handeleZoom">
      <Rect
        v-bind="size"
        :x="250"
        :y="100"
        fill="#00a98e"
        draggable
      />
    </Leafer>
  </LeaferApp>
</template>
