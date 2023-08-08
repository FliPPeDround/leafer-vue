<script setup lang="ts">
import { lfFrame, lfImage, lfRect, lfText, lfUi } from 'leafer-vue'
import { ref } from 'vue'
import testImage from '/test.jpg'

const width = ref(300)
const color = ref('#000')
function changeColor() {
  color.value = '#fff'
}

const showIt = ref(true)
</script>

<template>
  <lfUi
    v-bind="{
      width,
      height: 500,
      fill: '#000',
    }"
    @tap="console.log('Tap')"
  >
    <lfFrame
      v-bind="{
        width,
        height: 100,
        fill: '#0f0',
        draggable: true,
      }"
      @double_click="(e) => console.log(e)"
      @click="console.log('Click')"
      @pointer-enter="console.log('Down')"
      @tap="showIt = !showIt"
    >
      <lfRect
        v-bind="{
          width: 100,
          height: 100,
          fill: {
            type: 'linear',
            stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color }],
          },
          draggable: true,
        }"
        @tap="changeColor"
      />
      <lfImage
        v-if="showIt"
        v-bind="{
          width: 100,
          height: 100,
        }"
        :x="100"
        :draggable="true"
        :url="testImage"
      />
      <lfText
        v-bind="{
          width: 100,
          height: 100,
          fill: '#fff',
          draggable: true,
          text: `${width}`,
        }"
        :x="200"
      />
    </lfFrame>
  </lfUi>

  <button @click="width = width + 100">
    Click
  </button>
</template>
