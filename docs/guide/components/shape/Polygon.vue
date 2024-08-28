<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'

const polygonData = [
  {
    width: 80,
    height: 80,
    sides: 3,
    fill: '#ff4b4b',
  },
  {
    width: 80,
    height: 80,
    sides: 5,
    fill: '#ff4a2c',
  },
  {
    width: 80,
    height: 80,
    sides: 6,
    cornerRadius: 10,
    fill: '#feb027',
  },
  {
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90],
    fill: '#ffe04b',
  },
  {
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],
    curve: true,
    fill: '#79cb4d',
  },
  {
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],
    curve: 0.2,
    fill: '#4dcb71',
  },
  {
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90, 100, 90, 0, 90],
    curve: true,
    fill: '#279b80',
  },
]
</script>

<template>
  <LeaferApp :width="650" :height="340" type="draw">
    <Leafer>
      <Polygon
        v-for="(item, index) in polygonData"
        :key="index"
        :x="index * (80 + 10)" :y="10"
        v-bind="item"
      />
    </Leafer>
  </LeaferApp>
</template>
