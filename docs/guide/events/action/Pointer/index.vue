<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const size = ref({
  width: 100,
  height: 100,
})

function handleTap() {
  size.value.width += 10
  size.value.height += 10
}
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Rect v-bind="size" fill="#00a98e" @tap="handleTap" />
    </Leafer>
  </LeaferApp>
</template>
