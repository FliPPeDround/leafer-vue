<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const rotation = ref(0)
function animate() {
  rotation.value += 1
  requestAnimationFrame(animate)
}
animate()

const fill = ref('#66A659')
function changeColor() {
  fill.value = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`
}
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer type="draw" @tap="changeColor">
      <template
        v-for="row in 34"
        :key="row"
      >
        <Star
          v-for="col in 17"
          :key="col"
          around="center"
          :rotation="rotation"
          :x="(row - 1) * 20" :y="(col - 1) * 20"
          :width="15" :height="15"
          :fill="fill"
          :draggable="true"
        />
      </template>
    </Leafer>
  </LeaferApp>
</template>
