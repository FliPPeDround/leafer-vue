<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'

const LineData = [
  {
    width: 80,
    strokeWidth: 5,
    stroke: '#ff4b4b',
  },
  {
    toPoint: { x: 80, y: 50 },
    strokeWidth: 5,
    stroke: '#ff4a2c',
  },
  {
    width: 80,
    rotation: 45,
    strokeWidth: 5,
    stroke: '#feb027',
  },
  {
    width: 80,
    rotation: 90,
    strokeWidth: 5,
    stroke: '#ffe04b',
  },
  {
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90], // [x,y, x,y ...]
    strokeWidth: 5,
    stroke: '#79cb4d',
  },
  {
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90], // [x,y, x,y ...]
    cornerRadius: 5,
    strokeWidth: 5,
    stroke: '#4dcb71',
  },
  {
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90], // [x,y, x,y ...]
    curve: true,
    strokeWidth: 5,
    stroke: '#279b80',
  },
]
</script>

<template>
  <LeaferApp :width="650" :height="340" type="draw">
    <Leafer>
      <Line
        v-for="(item, index) in LineData"
        :key="index"
        :x="index * (80 + 10)" :y="10"
        v-bind="item"
      />
    </Leafer>
  </LeaferApp>
</template>
