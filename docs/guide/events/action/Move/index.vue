<script setup lang="ts">
import type { IMoveEvent } from '@leafer-ui/interface'
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const point = ref({ x: 250, y: 100 })
function handeleMove(e: IMoveEvent) {
  const { moveX, moveY } = e
  point.value = {
    x: point.value.x + moveX,
    y: point.value.y + moveY,
  }
}
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Rect
        v-bind="point"
        :width="100"
        :height="100"
        fill="#00a98e"
        draggable
        @move="handeleMove"
      />
    </Leafer>
  </LeaferApp>
</template>
