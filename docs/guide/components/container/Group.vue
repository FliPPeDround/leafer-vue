<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'

const size = {
  width: 50,
  height: 50,
}
</script>

<template>
  <LeaferApp :width="650" :height="340" type="draw">
    <Leafer>
      <Group>
        <Polygon
          :x="10" :y="18"
          v-bind="size"
          fill="#82DBC5"
        />
        <Rect
          :x="70" :y="10"
          v-bind="size"
          fill="#4F4F4F"
        />
        <Ellipse
          :x="130" :y="10"
          v-bind="size"
          fill="#EFAC35"
        />
      </Group>
    </Leafer>
  </LeaferApp>
</template>
