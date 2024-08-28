<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'

const starData = [
  {
    width: 100,
    height: 100,
    corners: 3,
    innerRadius: 0.15,
    fill: '#ff4b4b',
  },
  {
    width: 100,
    height: 100,
    corners: 4,
    innerRadius: 0.1,
    fill: '#ff4a2c',
  },
  {
    width: 100,
    height: 100,
    corners: 5,
    fill: '#feb027',
  },
  {
    width: 100,
    height: 100,
    innerRadius: 0.5,
    corners: 8,
    cornerRadius: 5,
    fill: '#ffe04b',
  },
]
</script>

<template>
  <LeaferApp :width="650" :height="340" type="draw">
    <Leafer>
      <Star
        v-for="(item, index) in starData"
        :key="index"
        :x="index * (100 + 10)" :y="10"
        v-bind="item"
      />
    </Leafer>
  </LeaferApp>
</template>
