<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
</script>

<template>
  <LeaferApp :width="672" :height="340" type="draw">
    <Leafer @leafer-ready="() => console.log('leafer ready !')">
      <Rect
        :width="50"
        :height="50"
        fill="#66A659"
      />
    </Leafer>
  </LeaferApp>
</template>
