<script setup lang="ts">
import { lfBox, lfFrame, lfUi } from 'leafer-vue'
import { ref } from 'vue'

const width = ref(100)
</script>

<template>
  <lfUi
    :width="500"
    :height="500"
  >
    <lfFrame :width="100" :height="100" fill="#000">
      <lfBox :width="width" :height="50" fill="#FFF00F" />
    </lfFrame>
  </lfUi>

  <button @click="width = width + 100">
    Click
  </button>
</template>
