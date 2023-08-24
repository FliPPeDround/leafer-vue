<script setup lang="ts">
import { lfLeafer, lfRect } from 'leafer-vue'
import { ref } from 'vue'

const width = ref(300)
const color = ref('#000')
function changeColor() {
  color.value = '#fff'
}
</script>

<template>
  <!-- <span>aaaaa</span>
  <lfLeafer
    v-bind="{
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
  </button> -->
  <lfLeafer fill="black" :full-screen="true">
    <template
      v-for="row in 1000"
      :key="row"
    >
      <lfRect
        v-for="col in 100"
        :key="col"
        :x="(row - 1) * 20" :y="(col - 1) * 20"
        :width="15" :height="15" fill="#fff"
        :draggable="true"
        @tap="changeColor"
      />
    </template>
  </lfLeafer>
</template>
