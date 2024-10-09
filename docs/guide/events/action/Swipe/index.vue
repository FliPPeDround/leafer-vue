<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const point = ref({ x: 250, y: 100 })
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Rect
        v-bind="point"
        :width="100"
        :height="100"
        fill="#66A659"
        @swipe-left="() => point.x -= 20"
        @swipe-right="() => point.x += 20"
        @swipe-up="() => point.y -= 20"
        @swipe-down="() => point.y += 20"
      />
    </Leafer>
  </LeaferApp>
</template>
