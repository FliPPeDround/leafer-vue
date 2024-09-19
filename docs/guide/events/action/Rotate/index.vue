<script setup lang="ts">
import type { IRotateEvent } from '@leafer-ui/interface'
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const rotation = ref(0)
function handeleRotate(e: IRotateEvent) {
  rotation.value = e.rotation
}
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer @zoom="handeleRotate">
      <Rect
        :width="100"
        :height="100"
        :x="250"
        :y="100"
        :rotation="rotation"
        fill="#00a98e"
        draggable
      />
    </Leafer>
  </LeaferApp>
</template>
