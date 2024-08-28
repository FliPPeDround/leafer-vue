<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
</script>

<template>
  <LeaferApp :width="650" :height="340" type="draw">
    <Leafer>
      <Image
        :width="200" :height="200"
        url="https://picsum.photos/200/200"
      />
    </Leafer>
  </LeaferApp>
</template>
