<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'
import { Pen } from 'leafer-ui'

const penRef = ref<Pen>()

function handleDraw() {
  penRef.value!.setStyle({
    fill: {
      type: 'radial',
      stops: [
        { offset: 0, color: '#FF4B4B' },
        { offset: 1, color: '#FEB027' },
      ],
    },
  })
  penRef.value!.roundRect(0, 0, 100, 100, 30)

  penRef.value!.setStyle({ y: -5, fill: 'white' })
  penRef.value!
    .moveTo(40, 30)
    .bezierCurveTo(70, 30, 90, 60, 63, 80)
    .quadraticCurveTo(50, 88, 40, 80)
    .bezierCurveTo(10, 60, 50, 40, 40, 30)
}
</script>

<template>
  <div>
    <button @click="handleDraw">
      点击生成图形
    </button>
    <button @click="penRef?.clear()">
      清空图形
    </button>
  </div>
  <br>
  <LeaferApp :width="650" :height="340" type="draw">
    <Leafer>
      <Pen ref="penRef" />
    </Leafer>
  </LeaferApp>
</template>
