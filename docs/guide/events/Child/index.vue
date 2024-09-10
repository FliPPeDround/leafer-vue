<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import { ref } from 'vue'

const count = ref(2)
// const radius = ref(0)
// function handleDrop() {
//   radius.value = 20
// }

function handleReady() {
  // console.log('leafer ready')
}
</script>

<template>
  {{ count }}
  <input v-model="count" type="number" min="1" max="5">
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer @leaferReady="handleReady">
      <Group>
        <Rect
          v-for="item in count"
          :key="item"
          :width="50"
          :height="50"
          :x="item * 60"
          :y="0"
          fill="#00a98e"
        />
      </Group>
    </Leafer>
  </LeaferApp>
</template>
