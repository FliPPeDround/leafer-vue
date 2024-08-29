<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'
import { Canvas } from 'leafer-ui'

const canvasRef = ref<Canvas>()

function handleDraw() {
  const { context } = canvasRef.value!
  context.fillStyle = '#FF4B4B'
  context.beginPath()
  context.roundRect(0, 0, 100, 100, 30)
  context.arc(50, 50, 25, 0, Math.PI * 2)
  context.fill('evenodd')

  context.fillStyle = '#FEB027'
  context.beginPath()
  context.arc(50, 50, 20, 0, Math.PI * 2)
  context.fill()

  canvasRef.value!.paint() // 更新渲染
}
</script>

<template>
  <div>
    <button @click="handleDraw">
      点击生成图形
    </button>
  </div>
  <br>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Canvas
        ref="canvasRef"
        :width="100" :height="100"
        :draggable="true"
      />
    </Leafer>
  </LeaferApp>
</template>
