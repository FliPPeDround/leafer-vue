<script setup lang="ts">
import type { IKeyEvent } from '@leafer-ui/interface'
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const position = ref({ x: 250, y: 100 })
function handeleZoom(e: IKeyEvent) {
  e.stopDefault?.()
  const { key } = e
  const ArrowMap = {
    ArrowUp: () => position.value.y -= 10,
    ArrowDown: () => position.value.y += 10,
    ArrowLeft: () => position.value.x -= 10,
    ArrowRight: () => position.value.x += 10,
  }
  ArrowMap[key as keyof typeof ArrowMap]?.()
}
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer :pointer="{ preventDefault: true }" @key-down="handeleZoom">
      <Rect
        v-bind="position"
        :width="100"
        :height="100"
        fill="#00a98e"
      />
    </Leafer>
  </LeaferApp>
</template>
