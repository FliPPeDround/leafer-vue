<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Frame
        :width="200"
        :height="200"
      >
        <Ellipse
          :x="120"
          :y="120"
          :width="100"
          :height="100"
          fill="#66A659"
          draggable
        />
      </Frame>
      <Frame
        :width="200"
        :height="200"
        :x="400"
        fill="#66A659"
        :overflow="true"
      >
        <Ellipse
          :x="120"
          :y="120"
          :width="100"
          :height="100"
          fill="#fff"
          draggable
        />
      </Frame>
    </Leafer>
  </LeaferApp>
</template>
