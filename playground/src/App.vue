<script setup lang="ts">
import { lfBox, lfFrame, lfUi } from 'leafer-vue'
</script>

<template>
  <lfUi
    :width="500"
    :height="500"
  >
    <lfFrame :width="100" :height="100" fill="#000">
      <lfBox :width="50" :height="50" fill="#FFF00F" />
    </lfFrame>
  </lfUi>
</template>
