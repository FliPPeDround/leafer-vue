<script setup lang="ts">
import { lfLeafer, lfRect } from 'leafer-vue'
import { ref } from 'vue'

const fill = ref('#32cd79')
function changeColor() {
  fill.value = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`
}
</script>

<template>
  <lfLeafer :width="200" :height="200" fill="black">
    <lfRect
      :x="100" :y="100"
      :width="200" :height="200" :fill="fill"
      :draggable="true"
      @tap="changeColor"
    />
  </lfLeafer>
</template>
