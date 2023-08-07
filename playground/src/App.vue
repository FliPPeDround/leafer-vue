<script setup lang="ts">
import { lfFrame, lfRect, lfUi } from 'leafer-vue'
import { ref } from 'vue'

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
        width,
        height: 100,
        fill: '#0f0',
        draggable: true,
      }"
      :x="100"
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
    </lfFrame>
  </lfUi>

  <button @click="width = width + 100">
    Click
  </button>
</template>
