<script setup lang="ts">
import { lfApp, lfLeafer } from 'leafer-vue'
import { ref } from 'vue'

const width = ref(300)
const color = ref('#000')
function changeColor() {
  color.value = '#fff'
}

const showIt = ref(true)

const fill = ref('#32cd79')
function changeFill() {
  fill.value = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`
}
</script>

<template>
  <span>aaaaa</span>
  <!-- <lfLeafer
    v-if="showIt"
    v-bind="{
      width,
      height: 100,
      fill: '#fff',
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
  </lfLeafer> -->
  <!-- <lfLeafer :width="500" :height="500">
    <lfRect
      :x="100" :y="100"
      :width="200" :height="200"
      :fill="fill" :draggable="true"
      @tap="changeFill"
    />
  </lfLeafer> -->
  <lfApp :width="500" :height="500" fill="#000">
    <lfLeafer fill="#fff" :width="100" :height="100" :draggable="true" />
  </lfApp>
  <button @click="width = width + 100">
    Click
  </button>
</template>
