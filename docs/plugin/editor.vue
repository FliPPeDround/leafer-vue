<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
import '@leafer-in/arrow'
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer>
      <Arrow
        v-bind="{ y: 50,
                  strokeWidth: 5,
                  stroke: 'rgb(50,205,121)' }"
      />
    </Leafer>
  </LeaferApp>
</template>
