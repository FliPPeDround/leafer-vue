<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const fill = ref('#66A659')
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Rect
        :width="100"
        :height="100"
        :fill="fill"
        draggable
        @drag-start="() => fill = '#a8b1ff'"
        @drag-end="() => fill = '#66A659'"
      />
    </Leafer>
  </LeaferApp>
</template>
