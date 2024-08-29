<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const amplitude = 150
let direction = 1
const y = ref(100)
function animate() {
  if (y.value > amplitude)
    direction = -1
  else if (y.value < 50)
    direction = 1

  y.value += direction
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Text
        text="Hello Leafer Vue"
        fill="#00a98e"
        font-weight="black"
        :italic="true"
        :x="100"
        :y="y"
        :font-size="60"
      />
    </Leafer>
  </LeaferApp>
</template>
