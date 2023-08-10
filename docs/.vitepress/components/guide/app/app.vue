<script setup lang="ts">
import { lfApp, lfLeafer } from './../../../dist/index.js'
</script>

<template>
  <lfApp :width="500" :height="500" fill="#000">
    <lfLeafer :width="100" :height="100" fill="#fff" />
  </lfApp>
</template>
