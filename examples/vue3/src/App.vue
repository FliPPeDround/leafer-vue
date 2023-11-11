<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const x = ref(1)
function rightMove() {
  x.value += 10
}
</script>

<template>
  <div>
    <LeaferApp :width="200" :height="200">
      <Rect
        :x="x"
        :width="20"
        :height="20"
        fill="red"
        @tap="rightMove"
      />
    </LeaferApp>
    <button @click="rightMove">
      rightMove
    </button>
  </div>
</template>
