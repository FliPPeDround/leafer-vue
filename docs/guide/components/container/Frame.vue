<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
</script>

<template>
  <LeaferApp :width="650" :height="340">
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
          fill="#00a98e"
          draggable
        />
      </Frame>
      <Frame
        :width="200"
        :height="200"
        :x="400"
        fill="#00a98e"
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
