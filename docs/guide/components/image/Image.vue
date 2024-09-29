<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const loading = ref(true)
const rotation = ref(0)
function animate() {
  if (!loading.value)
    return
  rotation.value += 8
  requestAnimationFrame(animate)
}
animate()
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Ellipse
        v-if="loading"
        :x="336" :y="150"
        :width="100" :height="100"
        :start-angle="-60"
        :end-angle="160"
        :inner-radius="1"
        around="center"
        :rotation="rotation"
        stroke="#00a98e"
        :stroke-width="10"
      />
      <Image
        url="https://picsum.photos/672/340"
        @image-loaded.once="() => loading = false"
      />
    </Leafer>
  </LeaferApp>
</template>
