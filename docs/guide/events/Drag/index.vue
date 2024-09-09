<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const fill = ref('#00a98e')
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Rect
        :width="100"
        :height="100"
        :fill="fill"
        draggable
        @dragStart="() => fill = '#a8b1ff'"
        @dragEnd="() => fill = '#00a98e'"
      />
    </Leafer>
  </LeaferApp>
</template>
