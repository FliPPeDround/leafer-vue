<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const radius = ref(0)
function handleDrop() {
  radius.value = 20
}
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Group :x="200" :y="100" @drop="handleDrop">
        <Rect fill="#a8b1ff" :corner-radius="radius" />
      </Group>
      <Rect
        :width="50"
        :height="50"
        fill="#00a98e"
        draggable
      />
    </Leafer>
  </LeaferApp>
</template>
