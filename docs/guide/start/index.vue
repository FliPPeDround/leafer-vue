<script setup lang="ts">
import { lfLeafer, lfRect } from 'leafer-vue'
import { ref } from 'vue'

function changeColor() {
  return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`
}

const rotation = ref(0)
function animate() {
  rotation.value += 1
  requestAnimationFrame(animate)
}
animate()
</script>

<template>
  <lfLeafer fill="black">
    <template
      v-for="row in 1000"
      :key="row"
    >
      <lfRect
        v-for="col in 1000"
        :key="col"
        :rotation="rotation"
        :x="(row - 1) * 20" :y="(col - 1) * 20"
        :width="15" :height="15" fill="#fff"
        :draggable="true"
        @tap="changeColor"
      />
    </template>
  </lfLeafer>
</template>
