<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'

const size = {
  width: 100,
  height: 100,
}
const ellipseData = [
  {
    fill: '#ff4b4b',
  },
  {
    fill: '#ff4a2c',
    innerRadius: 0.5,
  },
  {
    fill: '#feb027',
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
  },
  {
    fill: '#ffe04b',
    startAngle: -60,
    endAngle: 180,
  },
  {
    startAngle: -60,
    endAngle: 180,
    innerRadius: 1,
    stroke: 'rgb(50,205,121)',
    strokeWidth: 10,
    strokeAlign: 'center',
    strokeCap: 'round',
  },
  {
    fill: '#4dcb71',
    width: 80,
  },
]
</script>

<template>
  <LeaferApp :width="650" :height="340" type="draw">
    <Leafer>
      <Ellipse
        v-for="(item, index) in ellipseData"
        :key="index"
        :x="index * (size.width + 10)" :y="10"
        v-bind="{
          ...size,
          ...item,
        }"
      />
    </Leafer>
  </LeaferApp>
</template>
