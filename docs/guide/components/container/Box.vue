<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
</script>

<template>
  <LeaferApp :width="650" :height="340">
    <Leafer>
      <Box
        :width="210" :height="40"
        :corner-radius="20"
        fill="#00a98e"
        draggable
      >
        <Star
          :x="10" :y="10"
          :width="20" :height="20"
          fill="#FF4B4B"
          draggable
        />
        <Text
          text="Welcome to Leafer Vue"
          :x="40" :y="10"
          :padding="40"
          fill="#000"
        />
        <Star
          :x="180" :y="10"
          :width="20" :height="20"
          fill="#FF4B4B"
          draggable
        />
      </Box>
    </Leafer>
  </LeaferApp>
</template>
