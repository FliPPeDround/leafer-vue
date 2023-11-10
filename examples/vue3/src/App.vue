<script setup lang="ts">
import { LeaferApp } from 'leafer-vue'
</script>

<template>
  <LeaferApp>
    <template
      v-for="row in 1000"
      :key="row"
    >
      <Rect
        v-for="col in 1000"
        :key="col"
        :x="(row - 1) * 20" :y="(col - 1) * 20"
      />
    </template>
  </LeaferApp>
</template>
