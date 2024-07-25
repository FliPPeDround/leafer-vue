<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const rotation = ref(0)
function animate() {
  rotation.value += 1
  requestAnimationFrame(animate)
}
animate()

const fill = ref('#32cd79')
function changeColor() {
  fill.value = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`
}
</script>

<template>
  <LeaferApp :width="650" :height="600">
    <Leafer @tap="changeColor">
      <template
        v-for="row in 100"
        :key="row"
      >
        <Rect
          v-for="col in 25"
          :key="col"
          :rotation="rotation"
          :x="(row - 1) * 20" :y="(col - 1) * 20"
          :width="15" :height="15"
          :fill="fill"
          :draggable="true"
          @tap="changeColor"
        />
      </template>
    </Leafer>
  </LeaferApp>
</template>
