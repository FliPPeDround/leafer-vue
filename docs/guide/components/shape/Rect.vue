<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'

const size = {
  width: 100,
  height: 100,
}
const rectData = [
  {
    fill: '#ff4b4b',
    cornerRadius: 0,
  },
  {
    fill: '#ff4a2c',
    cornerRadius: 20,
  },
  {
    fill: '#feb027',
    cornerRadius: [20, 0, 0, 20],
  },
  {
    fill: '#ffe04b',
    cornerRadius: [0, 20, 20, 0],
  },
  {
    fill: '#79cb4d',
    cornerRadius: [20, 0],
  },
  {
    fill: '#4dcb71',
    cornerRadius: [0, 20],
  },
]
</script>

<template>
  <LeaferApp :width="650" :height="340">
    <Leafer>
      <Rect
        v-for="(item, index) in rectData"
        :key="item.fill"
        :x="index * (size.width + 10)" :y="10"
        v-bind="size"
        :fill="item.fill"
        :corner-radius="item.cornerRadius"
      />
    </Leafer>
  </LeaferApp>
</template>
