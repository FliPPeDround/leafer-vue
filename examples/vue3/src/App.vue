<script setup lang="ts">
import { Arrow } from '@leafer-in/arrow'
import { LeaferApp } from 'leafer-vue'
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Custom
        :is="Arrow"
        v-bind="{
          y: 50,
          strokeCap: 'square',
          strokeWidth: 5,
          stroke: '#000',
        }"
      />
    </Leafer>
  </LeaferApp>
</template>
