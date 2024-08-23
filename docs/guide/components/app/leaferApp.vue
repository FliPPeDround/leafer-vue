<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const rotation = ref(0)
function animate() {
  rotation.value += 1
  requestAnimationFrame(animate)
}
animate()
</script>

<template>
  <LeaferApp :width="650" :height="340">
    <Leafer>
      <Text
        text="Hello Leafer Vue"
        fill="#00a98e"
        font-weight="black"
        :italic="true"
        :x="100"
        :y="100"
        :font-size="60"
      />
    </Leafer>
  </LeaferApp>
</template>
