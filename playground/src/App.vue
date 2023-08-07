<script setup lang="ts">
import { lfFrame, lfImage, lfRect, lfUi } from 'leafer-vue'
import { ref } from 'vue'
import testImage from '/test.jpg'

const width = ref(100)
</script>

<template>
  <lfUi
    v-bind="{
      width: 500,
      height: 500,
      fill: '#000',
    }"
  >
    <lfFrame
      v-bind="{
        width: 200,
        height: 100,
        fill: '#0f0',
        draggable: true,

      }"
      @double_click="(e) => console.log(e)"
      @click="console.log('Click')"
      @pointer-enter="console.log('Down')"
    >
      <lfRect
        v-bind="{
          width: 100,
          height: 100,
          fill: '#f00',
          draggable: true,
        }"
      />
      <lfImage
        v-bind="{
          width: 100,
          height: 100,
        }"
        :x="100"
        :draggable="true"
        :url="testImage"
      />
    </lfFrame>
  </lfUi>

  <button @click="width = width + 100">
    Click
  </button>
</template>
