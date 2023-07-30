<script setup lang="ts">
import { lfFrame, lfRect, lfUi } from 'leafer-vue'
import { ref } from 'vue'

const width = ref(100)
</script>

<template>
  <lfUi
    :width="500"
    :height="500"
  >
    <lfFrame :width="width + 100" :height="200" fill="#000" draggable>
      <lfRect
        :config="{
          width,
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
