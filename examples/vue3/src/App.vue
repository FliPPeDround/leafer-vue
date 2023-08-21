<script setup lang="ts">
import { lfFrame, lfImage, lfLeafer, lfRect, lfText, usePlugin } from 'leafer-vue'
import { ref } from 'vue'
import testImage from '/test.jpg'
import plugin from 'leafer-flex-plugin'

usePlugin(plugin)
const width = ref(300)
const color = ref('#000')
function changeColor() {
  color.value = '#fff'
}
</script>

<template>
  <span>aaaaa</span>
  <lfLeafer
    v-bind="{
      width: 500,
      height: 500,
      fill: '#fff',
    }"
    @tap="console.log('Tap')"
  >
    <lfFrame
      v-bind="{
        width: 500,
        height: 500,
        fill: '#0f0',
        draggable: true,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }"
      @double_click="(e) => console.log(e)"
      @click="console.log('Click')"
      @pointer-enter="console.log('Down')"
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
        v-bind="{
          width: 100,
          height: 100,
        }"
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
      />
    </lfFrame>
  </lfLeafer>
  <button @click="width = width + 100">
    Click
  </button>
</template>
